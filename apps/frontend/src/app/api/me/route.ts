import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import * as EnvTools from '@/lib/env'
import type { MeResponse } from './types'

const NO_ID = 'n/a'

async function handler() : Promise<NextResponse<MeResponse>>
{
    if (!EnvTools.readValueAsBoolean('OPTIMIZELY_ONE_HELPER'))
        return new NextResponse(undefined, { status: 404 })

    const c = cookies()
    const contentRecsId = c.get('iv')?.value ?? NO_ID
    const zaiusId = c.get('vuid')?.value?.split("|")?.shift()?.replaceAll('-','') ?? NO_ID
    const webExpId = c.get('optimizelyEndUserId')?.value ?? NO_ID
    const frontendId = c.get('visitorId')?.value ?? NO_ID
    
    const [ contentTopics, audiences ] = await Promise.all([
        getContentTopics(contentRecsId),
        getODPAudiences(zaiusId)
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
    const odpApiKey = EnvTools.readValue('OPTIMIZELY_DATAPLATFORM_ID', "").split('.').shift()
    const odpApi = EnvTools.readValue('OPTIMIZLEY_DATAPLATFORM_ENDPOINT', "https://api.zaius.com/")
    if (!odpApiKey || vuid == NO_ID)
        return []
    const query = `query GetVisitorAudiences ($vuid: String!) { customer(vuid: $vuid) { audiences { edges { node { name, description }}}}}`
    const variables = {vuid}
    const response = await fetch(new URL('/v3/graphql', odpApi), {
        method: "POST",
        body: JSON.stringify({ query, variables }),
        headers: {
            "content-type": "application/json",
            "x-api-key": odpApiKey
        }
    })
    if (!response.ok)
        return []
    
    const odp_data = await response.json().catch(() => undefined)
    const audiences = ((odp_data?.data?.customer?.audiences?.edges || []) as { node: { name: string, description: string }}[]).map(d => {
        return { id: d.node.name, name: d.node.description }
    })
    return audiences
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