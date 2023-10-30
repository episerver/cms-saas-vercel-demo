import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'
import { applyOnAllClients, NextFetchTags } from '@remkoj/optimizely-dxp-react'
import { getServerClient as createClient, getAuthorizedServerClient as createAuthorizedClient } from '@/lib/client'
import { gql } from '@gql/index'

const editPaths = [ '/ui/CMS/Content/[[...path]]' ]
const publishedPaths = [ '/[lang]', '/[lang]/[[...path]]', '/sitemap', '/sitemap.xml' ]
const paths = [ ...editPaths, ...publishedPaths ]
const tags = [ NextFetchTags.all, NextFetchTags.hmac, NextFetchTags.token, NextFetchTags.token ]

async function handler(req: NextRequest, params: any) : Promise<NextResponse<{revalidated: boolean, paths: string[], tags: string[], clearApolloStore: number, now: number} | { error: string }>>
{
    // Authorize request
    const xAuthToken = req.headers.get("X-OPTLY-PUBLISH") ?? 
            req.nextUrl.searchParams.get("token") ?? 
            undefined
    if (process.env.FRONTEND_PUBLISH_TOKEN) {
        if (xAuthToken != process.env.FRONTEND_PUBLISH_TOKEN)
            return NextResponse.json({ error: "Not authorized"}, { status: 401 })
    } else {
        console.error("No authentication configured, publishing has been disabled")
        return NextResponse.json({ error: "Application configuration error"}, { status: 500 })
    }

    // Read request data
    const requestBody = tryJsonParse(await req.text())
    const publishMode = toMode(req.nextUrl.searchParams.get("mode"))
    const publicClient = createClient()
    const editClient = createAuthorizedClient()

    // If we're explicitly publishing all, do so...
    if (publishMode == "all")
    {
        const clearResult = await Promise.all(applyOnAllClients(c => c.clearStore()))
        publicClient.clearStore()
        editClient.clearStore()
        paths.forEach(p => revalidatePath(p, 'page'))
        tags.forEach(revalidateTag)
        console.log("Publish all => Revalidated (paths, tags)", paths, tags)
        return NextResponse.json({revalidated: true, paths, tags, clearApolloStore: clearResult.length, now: Date.now()})
    }

    // Don't publish if we're in selective mode and there's no data
    if (!requestBody) {
        console.log("Not flushing due to missing request body")
        return NextResponse.json({revalidated: false, paths: [], tags: [], clearApolloStore: 0, now: Date.now()})
    }

    const action = requestBody.type?.action
    const subject = requestBody.type?.subject

    // Only publish on updated documents
    if (subject != "doc" || action != "updated") {
        console.log("Not flushing due to incorrect subject or type", JSON.stringify(requestBody))
        return NextResponse.json({revalidated: false, paths: [], tags: [], clearApolloStore: 0, now: Date.now()})
    }

    let revalidatePaths : string[] = []
    let revalidateTags : string[] = []

    const docId : string | null = requestBody.data?.docId ?? null
    if (typeof(docId) == 'string') {
        const [guid, lang, version] = docId.split('_').slice(-3)
        switch(version) {
            case "CheckedOut":
                await editClient.clearStore()
                revalidatePaths.push(...editPaths)
                revalidateTags.push(NextFetchTags.hmac, NextFetchTags.token)
                break
            case "PreviouslyPublished":
            case "Published":
                // Clearing Apollo Client cache
                await publicClient.clearStore()
                await editClient.clearStore()

                if (false) { // For now just publish everything
                    // Always update the sitemap
                    revalidatePaths.push("/sitemap.xml", "/sitemap")

                    // Retrieving the path of the published content
                    const getPathByGuid = await publicClient.query({ query: gql(/* GraphQL */`query getPathByGuid($guid: String!)
                    {
                    pathByGuid: Content (
                        where: { ContentLink: { GuidValue: { eq: $guid } } }
                    ) {
                        items {
                        path:RelativePath
                        url:Url
                        }
                    }
                    }`), variables: { guid }})

                    // Revalidating just the path of the content item
                    const path = (getPathByGuid.data.pathByGuid?.items || [])[0]?.path
                    if (path) {
                        revalidatePaths.push(path as string)
                    } else {
                        //const localePaths = publishedPaths.map(x => x.replace("[lang]", lang))
                        //revalidatePaths.push(...publishedPaths, ...localePaths)
                        console.log("Published content without a path, hence not invalidating any pages")
                    }
                } else {
                    revalidatePaths.push(...paths)
                }

                // Revalidating relevant cache tags
                revalidateTags.push(NextFetchTags.all, NextFetchTags.public, NextFetchTags.token, NextFetchTags.hmac)
                break;
            default:
                console.log("Unknown version detected", version, JSON.stringify(requestBody))
                // Ignored on purpose
                break
        }
    }

    // Revalidate site
    const clearedStores = await Promise.all(applyOnAllClients(c => c.clearStore())).catch(() => [])
    revalidatePaths.forEach(p => { revalidatePath(p, 'page'); revalidatePath(p, 'layout'); })
    revalidateTags.forEach(t => revalidateTag(t))

    // Return response
    console.log(`Revalidated ${ publishMode } (paths, tags, store count)`, revalidatePaths, revalidateTags, clearedStores.length)
    return NextResponse.json({ 
        revalidated: true, 
        paths: revalidatePaths, 
        tags: revalidateTags,
        clearApolloStore: clearedStores.length,
        now: Date.now() 
    })
}
export const dynamic = 'force-dynamic'      // Make sure all API-Requests are executed
export const dynamicParams = true           // Make sure all matching routes are always executed
export const revalidate = 0                 // Don't cache
export const fetchCache = 'force-no-store'  // Don't cache
export const runtime = 'edge'               // Run at the edge
export const GET = handler
export const POST = handler

function toMode(data?: string | null, defaultValue: "selective" | "all" = "selective") : "selective" | "all"
{
    if (!data)
        return defaultValue
    if (data == "selective" || data == "all")
        return data
    return defaultValue
}

function tryJsonParse<T = { [key: string]: any }>(data?: string | null) : T | null
{
    if (typeof(data) != 'string') 
        return null
    try {
        return JSON.parse(data) as T
    } catch {
        return null
    }
}