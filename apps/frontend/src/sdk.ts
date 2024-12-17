import 'server-only'
import { createClient } from "@remkoj/optimizely-graph-client"
import { getServerContext } from '@remkoj/optimizely-cms-react/rsc'
import { getSdk as getGeneratedSdk, type Sdk } from "@gql"
import { cache } from 'react'

/**
 * Get an instance of the SDK generated from the queries within the frontend.
 * 
 * @returns     The SDK Instance
 */
export const getSdk = cache<() => Sdk>(() => {
    const { client } = getServerContext()
    return getGeneratedSdk(client || createClient().updateFlags({ queryCache: false }, false))
})

export default getSdk