//import createPublishApi from '@remkoj/optimizely-cms-nextjs/publish'
import { isNonEmptyString, isNotNullOrUndefined, toUniqueValues } from '@remkoj/optimizely-cms-react/utils'
import { type ContentLinkWithLocale, createClient, Route, RouteResolver } from '@remkoj/optimizely-graph-client'
import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

/*const handler = createPublishApi({
    // The paths to always publish, both in optimized as well as non-optimized mode
    additionalPaths: [
        '/api/content/search',
        '/api/content/articles',
        '/api/me/[[...path]]',
        '/sitemap.xml',
        '/robots.txt'
    ],

    optimizePublish: true,   // When set to enabled, this will try to only publish the content item published by the CMS
    // tags: ['opti-graph'], // Set tags to always purge when publishing content
    client: () => createClient(undefined, undefined, {
        nextJsFetchDirectives: true,
        cache: false,
        queryCache: false,
    }) // The Optimizely Graph Client to use when resolving paths to publish
})*/

async function analyzeRequest(request: NextRequest) : Promise<{ subject: "doc"|"bulk", action?: string, documentIds: string[],contentLinks:ContentLinkWithLocale[]}|{subject:"error", error: any}> {
    try {
        const body = await request.json()
        const subject = body?.type?.subject ?? "unknown"
        const action = body?.type?.action ?? undefined
        const documentIds : string[] = body?.type?.subject === "bulk" ? Object.getOwnPropertyNames(body?.data?.items ?? {}) : (
            body?.type?.subject === "doc" ? [ body?.data?.docId ].filter(x=>x) : []
        )
        const contentLinks = documentIds.map(docId => {
            const regexResult = docId.match(/^([a-z0-9#-]+)_(([0-9]+)_){0,1}([a-zA-Z-_]{1,5})_([a-zA-Z]+)(_(.+)){0,1}$/)
            if (!regexResult) return undefined
            return {
                key: regexResult.at(1)?.replaceAll('-',''),
                version: regexResult.at(3),
                locale: regexResult.at(4),
                status: regexResult.at(5),
                variation: regexResult.at(7)
            } as ContentLinkWithLocale
        }).filter(isNotNullOrUndefined)
        return { subject, action, documentIds, contentLinks }
    } catch (e: any) {
        return {
            subject: "error",
            error: typeof (e.message) === 'string' ? e.message : e
        }
    }
}

async function OptimizelyGraphPublishHandler(request: NextRequest) : Promise<NextResponse>
{
    // Create the context
    const client = createClient()
    const router = new RouteResolver(client)

    // Read and parse the request
    const action = await analyzeRequest(request)
    console.log(`Received Optimizely Graph Webhook for:`, action)

    // Should be overridable for other patterns
    function routeToPath(route: Route) : string | undefined
    {
        const paths = [route.path.endsWith('/') ? route.path.substring(0, route.path.length -1) : route.path]
        if (isNonEmptyString(route.variation))
            paths.push(`var:${route.variation}`)
        return paths.join('/')
    }

    // Obtain the path information
    const routes = action.subject !== 'error' ? (await Promise.all(action.contentLinks.map(contentLink => {
        const contentLinkWithoutVersion = { ...contentLink }
        if (contentLinkWithoutVersion.version)
            delete contentLinkWithoutVersion.version
        return router.getRouteByLink(contentLinkWithoutVersion)
    }))).filter(isNotNullOrUndefined) : []
    console.log(`Resolved to routes from Graph:`, routes.map(r => { const nr = { ...r, url: r.url.href  }; return nr}))
    const requestedPaths = routes.map(routeToPath).filter(isNonEmptyString).filter(toUniqueValues)
    if (requestedPaths.length === 0) {
        requestedPaths.push('/[[...path]]')
    }

    const paths = [
        '/api/content/search',
        '/api/content/articles',
        '/api/me/[[...path]]',
        '/sitemap.xml',
        '/robots.txt',
        ...requestedPaths
    ]
    console.log(`Paths to flush`, paths)

    // Flush routes
    paths.forEach((path) => {
        if (path.includes('['))
            revalidatePath(path, "page")
        else
            revalidatePath(path)
        revalidatePath(path, "layout")
    })    
    
    return NextResponse.json({ result: "ok", revalidatedPaths: paths })
    //return handler(request)
}

export const dynamic = 'force-dynamic'      // Make sure all API-Requests are executed
export const dynamicParams = true           // Make sure all matching routes are always executed
export const revalidate = 0                 // Don't cache
export const fetchCache = 'force-no-store'  // Don't cache
export const runtime = 'nodejs'             // Run on Node.JS
export const GET = OptimizelyGraphPublishHandler
export const POST = OptimizelyGraphPublishHandler