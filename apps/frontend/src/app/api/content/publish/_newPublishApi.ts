import { type NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from "next/cache"
import { type ClientFactory, OptiCmsSchema, RouteResolver } from '@remkoj/optimizely-graph-client'
import { createClient } from '@remkoj/optimizely-cms-nextjs'

export { type NextRequest, NextResponse } from 'next/server'
export type PublishApiHandler = (req: NextRequest) => Promise<NextResponse<PublishApiResponse>> | NextResponse<PublishApiResponse>
export type PublishScopes = NonNullable<Parameters<typeof revalidatePath>[1]>
export type PublishHookData = {
    timestamp: string
    tenantId: string
} & ({
    type: {
        subject: "bulk"
        action: string
    }
    data: {
        journalId: string
        items: {
            [ itemId: string ]: "indexed" | "deleted"
        }
        docId: never
    }
} | {
    type: {
        subject: "doc"
        action: string
    }
    data: {
        docId: string
        journalId: never
        items: never
    }
})

export type PublishApiOptions = {
    /**
     * The list of paths that your implementation uses with Optimizely CMS
     * managed content. If the optimized publishing is enabled, this list will
     * not be used at all.
     */
    paths: Array<Parameters<typeof revalidatePath>[0]>

    /**
     * A list fo paths that must always be purged, regardless of optimization
     * of purging is enabled. This is normally used for search-results etc..
     */
    additionalPaths: Array<Parameters<typeof revalidatePath>[0]>

    /**
     * The scopes for which to revalidate the cache
     */
    scopes: Array<PublishScopes>

    /**
     * The tags to revalidate the cache for
     */
    tags: Array<Parameters<typeof revalidateTag>[0]>

    /**
     * If set to true, the handler will only publish the paths of the items
     * that are changed. However this comes at the expense of needing a GraphQL
     * query for every received hook to resolve the paths.
     */
    optimizePublish: boolean

    /**
     * The Optimizely Graph client to use for Graph Operations needed to publish 
     * content
     */
    client: ClientFactory

    /**
     * The router to use when the publishing optimization is enabled
     */
    router: (() => RouteResolver) | { urlBase?: URL | string, resolverMode?: OptiCmsSchema }

    /**
     * A filtering function for the received webhooks, only hooks for which this method
     * returns true will trigger a cache invalidation.
     * 
     * @param hookType 
     * @returns 
     */
    hookDataFilter: (hookType: PublishHookData['type']) => boolean
}

export type PublishApiResponse = { 
    revalidated: {
        paths: Array<Parameters<typeof revalidatePath>[0]>
        scopes: Array<PublishScopes>
        tags: Array<Parameters<typeof revalidateTag>[0]>
    }
    optimized: boolean
    error?: never
} | { revalidated?: never, optimized?: boolean, error: string }

const publishApiDefaults : PublishApiOptions = {
    paths: [ '/', '/[[...path]]', '/[lang]', '/[lang]/[[...path]]' ],
    additionalPaths: [],
    scopes: ['page','layout'],
    tags: [],
    optimizePublish: false,
    client: createClient,
    router: {},
    hookDataFilter: (hookType) => hookType.subject == 'bulk' && hookType.action == 'completed'
}

export function createPublishApi(options?: Partial<PublishApiOptions>) : PublishApiHandler
{
    const { paths, additionalPaths, optimizePublish, client: clientFactory, router: routerFactory, hookDataFilter, tags, scopes } : PublishApiOptions = {
        ...publishApiDefaults,
        ...options
    }

    const client = clientFactory()
    function getRouteResolver() {
        return typeof routerFactory == 'function' ? routerFactory() : new RouteResolver(client, routerFactory?.urlBase, routerFactory?.resolverMode ?? client.currentOptiCmsSchema)
    }

    function publishAll(targetPaths: string[], optimized: boolean = false) : PublishApiResponse
    {
        scopes.forEach(scope => {
            targetPaths.forEach(path => revalidatePath(path, scope))
            additionalPaths.forEach(path => revalidatePath(path, scope))
        })
        tags.forEach(tag => revalidateTag(tag))
        return { revalidated: { scopes, paths: [...targetPaths,...additionalPaths], tags }, optimized }
    }

    function getItemIds(hookData: PublishHookData) : Array<{ key: string, locale: string }>
    {
        let items : Array<{ key: string, locale: string }> = []
        switch (hookData.type.subject) {
            case "doc":
                items = [ hookData.data.docId ].map(item => {
                    const [key,locale] = item.split('_')
                    return key && locale ? { key: key.replaceAll('-',''), locale } : undefined
                }).filter(x => x) as Array<{ key: string, locale: string }>
                break
            case "bulk": 
                items = Object.getOwnPropertyNames(hookData.data.items ?? {}).map(pn => {
                    const status = hookData.data.items[pn]
                    if (status == "indexed" || status == "deleted") {
                        const [ key, _, locale ] = pn.split('_')
                        return key && locale ? { key: key.replaceAll('-',''), locale } : undefined
                    }
                    return undefined
                }).filter(x => x) as Array<{ key: string, locale: string }>
                break;
            default:
                //@ts-expect-error All known types have been handled, this error is for new/unknown types
                throw new Error("Unknown hook subject "+hookData.type.subject)
        }
        return items.filter((x,i,a) => a.findIndex(v => v.key == x.key && v.locale == x.locale) == i)
    }

    const requestHandler: PublishApiHandler  = async (req) => 
    {
        // Validate the request
        const publishToken = client.siteInfo.publishToken
        const requestToken = await getRequestToken(req)
        if (!publishToken) {
            console.error("[Publish-API] No authentication configured, publishing has been disabled")
            return NextResponse.json({ error: "Not authorized"}, { status: 401 })
        }
        if (!requestToken || requestToken != publishToken) {
            console.error("[Publish-API] The provided publishing token is invalid", requestToken)
            return NextResponse.json({ error: "Not authorized"}, { status: 401 })
        }

        try {
            // Get the webhook data
            const webhookData = await req.json() as PublishHookData | null | undefined
            console.debug('[Publish-API] Webhook data', webhookData)

            // Purge everything if not known (e.g. for a GET request)
            if (!webhookData) {
                console.error("[Publish-API] No hook data received, optimization disabled")
                return NextResponse.json(publishAll(paths))
            }

            // Make sure we're allowed to process the hook
            if (!hookDataFilter(webhookData.type)) {
                console.log("[Publish-API] Webhook ignored due to hookDataFilter", webhookData.type)
                return NextResponse.json({ optimized: false, revalidated: { paths: [], scopes: [], tags: [] }})
            }
            
            // If we're not optimizing, just publish everything
            if (!optimizePublish)
                return NextResponse.json(publishAll(paths))

            // Get the actual content ids from the hook data
            const contentIds = getItemIds(webhookData)
            console.debug("[Publish-API] Content items to publish:", JSON.stringify(contentIds))

            // Resolve the contentids to paths
            const router = getRouteResolver()
            const results = await Promise.allSettled(contentIds.map(contentId => router.getContentInfoById(contentId.key, contentId.locale)))
            const pathsToFlush = results.map(result => {
                if (result.status == "rejected") {
                    console.error("[Publish-API] Error fetching route for content item:", (result.reason as Error)?.message ?? result.reason)
                    return undefined 
                }
                return result.value?.path
            }).filter(x => x) as Array<string>
            console.debug("[Publish-API] Content paths to publish:", JSON.stringify(pathsToFlush))

            // Flush these paths
            return NextResponse.json(publishAll(pathsToFlush, true))
        } catch (e) {
            console.error("[Publish-API] Error handling publishing request", (e as Error)?.message ?? e)
            return NextResponse.json({ error: (e as Error)?.message ?? "Unknown error "}, { status: 500 })
        }
    }

    return requestHandler
}

async function getRequestToken(req: NextRequest) : Promise<string | undefined>
{
    return req.headers.get("X-OPTLY-PUBLISH") ?? 
            req.nextUrl.searchParams.get("token") ?? 
            undefined
}

export default createPublishApi