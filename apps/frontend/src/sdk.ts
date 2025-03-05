import 'server-only'
import { createClient as createClientBase, createAuthorizedClient as createAuthorizedClientBase } from "@remkoj/optimizely-cms-nextjs"
import { getServerContext } from '@remkoj/optimizely-cms-react/rsc'
import { getSdk as getGeneratedSdk, type Sdk } from "@gql"
import { cache } from 'react'
import { type IOptiGraphClient } from '@remkoj/optimizely-graph-client'

/**
 * Wrap the default client creation with one that enables the Next.JS
 * cache directives 
 * 
 * @param args 
 * @returns 
 */
export function createAuthorizedClient(...args: Parameters<typeof createAuthorizedClientBase>) {
    const client = createAuthorizedClientBase(...args)
    client.updateFlags({
        nextJsFetchDirectives: true
    }, false)
    return client
}

/**
 * Wrap the default client creation with one that enables the Next.JS
 * cache directives 
 * 
 * @param args 
 * @returns 
 */
export function createClient(...args: Parameters<typeof createClientBase>) {
    const client = createClientBase(...args)
    client.updateFlags({
        nextJsFetchDirectives: true
    }, false)
    return client
}

/**
 * Get an instance of the SDK generated from the queries within the frontend.
 * 
 * @returns     The SDK Instance
 */
export const getSdk = cache<(token?: string) => Sdk>(token => {
    const ctx = getServerContext()
    if ( !ctx.client )
        ctx.setOptimizelyGraphClient(token ? createAuthorizedClient(token) : createClient())
    else
        ctx.client.updateAuthentication(token)
    return getGeneratedSdk(ctx.client as IOptiGraphClient)
})

export default getSdk