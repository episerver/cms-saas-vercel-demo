import 'server-only'
import { createClient as createClientBase, createAuthorizedClient as createAuthorizedClientBase } from "@remkoj/optimizely-cms-nextjs"
import { getSdk as getGeneratedSdk, type Sdk } from "@gql/client"
import { type IOptiGraphClient } from '@remkoj/optimizely-graph-client'

// Pass through commonly used SDK features
export { AuthMode } from '@remkoj/optimizely-graph-client'

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

type GraphClientConfig = {
    token?: string
    flags: Parameters<IOptiGraphClient["updateFlags"]>[0]
}

const clientConfig: GraphClientConfig = {
    flags: {}
}

export function updateClientFlags(newFlags: Parameters<IOptiGraphClient["updateFlags"]>[0]) {
    clientConfig.flags = { ...clientConfig.flags, ...newFlags }
}
export function setClientFlags(newFlags: Parameters<IOptiGraphClient["updateFlags"]>[0]) {
    clientConfig.flags = { ...clientConfig.flags, ...newFlags }
}

/**
 * Get an instance of the SDK generated from the queries within the frontend.
 * 
 * @param       tokenOrClient       The Authorization token or client to use for the connection itself
 * @returns     The SDK Instance
 */
export function getSdk(tokenOrClient?: string | IOptiGraphClient) : Sdk {
    const client = (typeof (tokenOrClient) == 'object' && tokenOrClient != null) ? tokenOrClient : (typeof tokenOrClient == 'string' ? createAuthorizedClient(tokenOrClient) : createClient())
    if (typeof (tokenOrClient) != 'object' || tokenOrClient == null)
        client.updateFlags(clientConfig.flags)
    return getGeneratedSdk(client)
}

export default getSdk