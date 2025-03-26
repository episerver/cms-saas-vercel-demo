import 'server-only'
import { createClient as createClientBase, createAuthorizedClient as createAuthorizedClientBase } from "@remkoj/optimizely-cms-nextjs"
import { getSdk as getGeneratedSdk, type Sdk } from "@gql/client"
import { type IOptiGraphClient, type ClientFactory } from '@remkoj/optimizely-graph-client'

/**
 * The default Optimizely Graph Client, for public access. This instance is used
 * across requests, so create an authorized client if you need one.
 */
export const client : IOptiGraphClient = createClientBase()
client.updateFlags({
    nextJsFetchDirectives: true
}, false)

/**
 * The default Optimizely Graph SDK, for public access. This instance is used
 * across requests.
 */
export const sdk : Sdk = getGeneratedSdk(client)


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
 * The default client factory for this implementation, if the token is empty or
 * not set it will return the global shared client instance, otherwise it will
 * create a new authorized client based upon the token.
 * 
 * @param       token       The token for the client 
 * @returns 
 */
export const createClient : ClientFactory = (token) => token ? createAuthorizedClient(token) : client

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