import { NextResponse, type NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import * as EnvTools from '@/lib/env'
import type { MeResponse } from './types'

const NO_ID = 'n/a'

async function handler(req: NextRequest) : Promise<NextResponse<MeResponse>>
{
    if (!EnvTools.readValueAsBoolean('OPTIMIZELY_ONE_HELPER'))
        return new NextResponse(undefined, { status: 404 })

    const c = cookies()
    const contentRecsId = c.get('iv')?.value ?? NO_ID
    const zaiusId = c.get('vuid')?.value?.split("|")?.shift()?.replaceAll('-','') ?? NO_ID
    const webExpId = c.get('optimizelyEndUserId')?.value ?? NO_ID
    const frontendId = c.get('visitorId')?.value ?? NO_ID

    const fetchContentTopics = !req.nextUrl.searchParams.has('scope') ? true : req.nextUrl.searchParams.get('scope')?.split(',')?.map(x => x.trim())?.includes("topics") ?? false
    const fetchODPAudiences = !req.nextUrl.searchParams.has('scope') ? true : req.nextUrl.searchParams.get('scope')?.split(',')?.map(x => x.trim())?.includes("audiences") ?? false
    
    const [ contentTopics, audiences ] = await Promise.all([
        fetchContentTopics ? getContentTopics(contentRecsId) : Promise.resolve<string[]>([]),
        fetchODPAudiences ? getODPAudiences(zaiusId) : Promise.resolve<{ id: string, name: string }[]>([])
    ])

    return NextResponse.json<MeResponse>({
        ids: {
            frontend: frontendId,
            dataPlatform: zaiusId,
            contentIntelligence: contentRecsId,
            webExperimentation: webExpId
        },
        contentTopics,
        audiences
    })
}

async function getODPAudiences(vuid: string) : Promise<{ id: string, name: string }[]>
{
    const odpApiKey = EnvTools.readValue('OPTIMIZELY_DATAPLATFORM_ID', "")
    const odpApi = EnvTools.readValue('OPTIMIZLEY_DATAPLATFORM_ENDPOINT', "https://api.zaius.com/")
    if (!odpApiKey || vuid == NO_ID)
        return []

    const listAudiencesQuery = 'query GetAllAudiences { audiences { edges { node { name, description } } } }'
    const listResponse = await fetch(new URL('/v3/graphql', odpApi), {
        method: "POST",
        body: JSON.stringify({ query: listAudiencesQuery }),
        headers: {
            "content-type": "application/json",
            "x-api-key": odpApiKey
        }
    })
    if (!listResponse.ok) {
        console.error("Error listing all audiences within ODP")
        return []
    }
    const listData = (await listResponse.json()) as { data: { audiences: { edges: { node: { name: string, description: string }}[]}} }
    const audiences = listData?.data?.audiences?.edges?.map(e => { return e.node }) ?? []

    const chunkSize = 25
    const chunks : string[][] = []
    audiences.forEach((item, idx) => {
        const chunkId = Math.floor(idx/chunkSize)
        chunks[chunkId] = chunks[chunkId] || []
        chunks[chunkId].push(item.name)
    })

    const query = 'query GetMyAudiences($vuid: String!, $audiences: [String!]!) { customer(vuid: $vuid) { audiences(subset: $audiences) { edges { node { name } } } } }'
    const myAudienceKeys = (await Promise.all(chunks.map(chunk => {
        const variables = {
            vuid,
            audiences: chunk
        }
        //console.log("Fetching membership for: ("+chunk.length+")"+ JSON.stringify(chunk))
        return fetch(new URL('/v3/graphql', odpApi), {
            method: "POST",
            body: JSON.stringify({ query, variables }),
            headers: {
                "content-type": "application/json",
                "x-api-key": odpApiKey
            }
        }).then(r => r.json() as Promise<{ data: { customer: { audiences: { edges: { node: { name: string }}[]} }} }>).then(ds => (ds?.data?.customer?.audiences?.edges ?? []).map(e => e.node.name))
    }))).flat()

    return audiences.filter(x => myAudienceKeys.includes(x.name)).map(x => { return { id: x.name, name: x.description }})
}

async function getContentTopics(visitorId: string) : Promise<string[]>
{
    const deliveryKey = process.env.OPTIMIZELY_CONTENTRECS_DELIVERY_KEY ?? ''
    const contentRecsApi = process.env.OPTIMIZELY_CONTENTRECS_API ?? 'https://api.idio.co'

    if (!deliveryKey || !contentRecsApi || visitorId==NO_ID)
        return []

    const profileUrl = new URL(`/1.0/users/idio_visitor_id:${ visitorId }/topics`, contentRecsApi)
    profileUrl.searchParams.set('key', deliveryKey)
    const topics = await fetch(profileUrl).then(r => r.json()).catch(() => undefined)
    return ((topics?.topic ?? []) as { title: string }[]).map(x => x.title)
}

export const GET = handler
export const runtime = 'edge' // 'nodejs' (default) | 'edge'
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const fetchCache = 'default-no-store'