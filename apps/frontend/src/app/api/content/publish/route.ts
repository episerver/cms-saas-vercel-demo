import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { createClient } from '@remkoj/optimizely-graph-client'
import { gql } from '@gql/index'

const editPaths = [ '/ui/[[...path]]' ]
const publishedPaths = [ '/[lang]', '/[lang]/[[...path]]', '/sitemap', '/sitemap.xml' ]
const paths = [ ...editPaths, ...publishedPaths ]

async function handler(req: NextRequest, params: any) : Promise<NextResponse<{revalidated: boolean, paths: string[], clearApolloStore: number, now: number} | { error: string }>>
{
    // Authorize request
    const xAuthToken = req.headers.get("X-OPTLY-PUBLISH") ?? 
            req.nextUrl.searchParams.get("token") ?? 
            undefined
    if (process.env.FRONTEND_PUBLISH_TOKEN) {
        if (xAuthToken != process.env.FRONTEND_PUBLISH_TOKEN) {
            console.error("[Publish-API] The provided publishing token is invalid", xAuthToken)
            return NextResponse.json({ error: "Not authorized"}, { status: 401 })
        }
    } else {
        console.error("No authentication configured, publishing has been disabled")
        return NextResponse.json({ error: "Application configuration error"}, { status: 500 })
    }

    // Read request data
    const requestBody = tryJsonParse(await req.text())
    const publishMode = toMode(req.nextUrl.searchParams.get("mode"))

    // If we're explicitly publishing all, do so...
    if (publishMode == "all")
    {
        paths.forEach(p => revalidatePath(p, 'page'))
        console.log("Publish all => Revalidated (paths)", paths)
        return NextResponse.json({revalidated: true, paths, clearApolloStore: 2, now: Date.now()})
    }

    // Don't publish if we're in selective mode and there's no data
    if (!requestBody) {
        console.log("Not flushing due to missing request body")
        return NextResponse.json({revalidated: false, paths: [], clearApolloStore: 0, now: Date.now()})
    }

    const action = requestBody.type?.action
    const subject = requestBody.type?.subject

    // Only publish on updated documents
    if (subject != "doc" || action != "updated") {
        console.log("Not flushing due to incorrect subject or type", JSON.stringify(requestBody))
        return NextResponse.json({revalidated: false, paths: [], clearApolloStore: 0, now: Date.now()})
    }

    let revalidatePaths : string[] = []

    const docId : string | null = requestBody.data?.docId ?? null
    if (typeof(docId) == 'string') {
        const [guid, lang, version] = docId.split('_').slice(-3)
        switch(version) {
            case "CheckedOut":
                revalidatePaths.push(...editPaths)
                break
            case "PreviouslyPublished":
            case "Published":
                if (true) { // For now just publish everything
                    // Always update the sitemap
                    revalidatePaths.push("/sitemap.xml", "/sitemap")

                    // Retrieving the path of the published content
                    const publicClient = createClient()
                    const getPathByGuid = await publicClient.query(gql(/* GraphQL */`query getPathByGuid($guid: String!)
                    {
                    pathByGuid: Content (
                        where: { ContentLink: { GuidValue: { eq: $guid } } }
                    ) {
                        items {
                        path:RelativePath
                        url:Url
                        }
                    }
                    }`), { guid })

                    // Revalidating just the path of the content item
                    const path = (getPathByGuid.pathByGuid?.items || [])[0]?.path
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
                break;
            default:
                console.log("Unknown version detected", version, JSON.stringify(requestBody))
                // Ignored on purpose
                break
        }
    }

    // Revalidate site
    revalidatePaths.forEach(p => { revalidatePath(p, 'page'); revalidatePath(p, 'layout'); })

    // Return response
    console.log(`Revalidated ${ publishMode } (paths)`, revalidatePaths)
    return NextResponse.json({ 
        revalidated: true, 
        paths: revalidatePaths,
        clearApolloStore: 0,
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