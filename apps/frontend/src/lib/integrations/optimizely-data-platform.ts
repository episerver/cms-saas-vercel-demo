import 'server-only'
import { cookies } from 'next/headers'
import * as EnvTools from '@/lib/env'

type OptimizelyDataPlatformConnection = {
    id: string
    endpoint: string
    graph: string
}

export async function getLastSearchTerms() : Promise<string[]>
{
    const connection = getConnection()
    if (!connection)
        return []

    const c = cookies()
    const vuid = parseIdValue(c.get('vuid')?.value)
    
    const query = `query LastSearchTerms ($vuid:String!) {
        events(vuid: $vuid, filter: "event_type='navigation'", order: {field: ts, direction: DESC}) {
          edges {
            node {
              search_term
            }
          }
        }
      }`
    const variables = { vuid }
    const response = await fetch(new URL(connection.graph, connection.endpoint), {
        method: "POST",
        body: JSON.stringify({ query, variables }),
        headers: {
            "content-type": "application/json",
            "x-api-key": connection.id
        }
    })
    const responseData = await response.json()
    if (responseData.errors)
    {
        console.error("Error while fetching latest search terms, please check your keys")
        console.error(responseData.errors.map((e : { message: string }) => e.message).join('; '))
        return []
    }
    
    const terms = (responseData.data?.events?.edges?.map((e: { node: { search_term: string }}) => e.node.search_term ) ?? []) as string[]

    return terms
}

export function parseIdValue(idValue?: string | null) : string | undefined
{
    if (!idValue)
        return undefined
    return idValue.split("|").shift()?.replaceAll('-','')
}

export function isEnabled() : boolean
{
    return getConnection() != undefined
}

export function getConnection() : OptimizelyDataPlatformConnection | undefined
{
    const id = EnvTools.readValue('OPTIMIZELY_DATAPLATFORM_ID')
    const endpoint = EnvTools.readValue('OPTIMIZLEY_DATAPLATFORM_ENDPOINT', 'https://api.zaius.com')
    const graph = EnvTools.readValue('OPTIMIZLEY_DATAPLATFORM_GRAPH', '/v3/graphql')

    if (!id)
        return undefined

    return { id, endpoint, graph }
}