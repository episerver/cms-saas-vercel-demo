import 'server-only'
import { createClient as createClientBase, createAuthorizedClient as createAuthorizedClientBase } from "@remkoj/optimizely-cms-nextjs"
import { getSdk as getGeneratedSdk, type Sdk } from "@gql/client"
import { type IOptiGraphClient } from '@remkoj/optimizely-graph-client'


type GraphClientConfig = {
    token?: string
    flags: Parameters<IOptiGraphClient["updateFlags"]>[0]
}

const clientConfig: GraphClientConfig = {
    flags: {
        nextJsFetchDirectives: true,
        cache: true,
        queryCache: true,
    }
}

/**
 * The default Optimizely Graph Client, for public access. This instance is used
 * across requests, so create an authorized client if you need one.
 */
export const client : IOptiGraphClient = createClientBase()
client.updateFlags(clientConfig.flags, false)

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
    client.updateFlags(clientConfig.flags, false)
    return client
}

/**
 * The default client factory for this implementation, if the token is empty or
 * not set it will return the global shared client instance, otherwise it will
 * create a new authorized client based upon the token.
 * 
 * @deprecated  Use the exported `client` variable directly
 * @returns     The IOptiGraphClient instance to use
 */
export function createClient(token?: null) : IOptiGraphClient
/**
 * The default client factory for this implementation, if the token is empty or
 * not set it will return the global shared client instance, otherwise it will
 * create a new authorized client based upon the token.
 * 
 * @param       token       The token for the client 
 * @returns     The IOptiGraphClient instance to use
 */
export function createClient(token: string) : IOptiGraphClient
/**
 * The default client factory for this implementation, if the token is empty or
 * not set it will return the global shared client instance, otherwise it will
 * create a new authorized client based upon the token.
 * 
 * @param       token       The token for the client 
 * @returns     The IOptiGraphClient instance to use
 */
export function createClient(token?: string | null) : IOptiGraphClient
{
    return token ? createAuthorizedClient(token) : client
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
 * @deprecated  Use the exported `sdk` variable directly
 * @returns     The SDK Instance
 */
export function getSdk(tokenOrClient?: null) : Sdk
/**
 * Get an instance of the SDK generated from the queries within the frontend.
 * 
 * @param       tokenOrClient       The Authorization token or client to use for the connection itself
 * @returns     The SDK Instance
 */
export function getSdk(tokenOrClient: string | IOptiGraphClient): Sdk
/**
 * Get an instance of the SDK generated from the queries within the frontend.
 * 
 * @param       tokenOrClient       The Authorization token or client to use for the connection itself
 * @returns     The SDK Instance
 */
export function getSdk(tokenOrClient?: string | IOptiGraphClient | null) : Sdk {
    if (!tokenOrClient)
        return sdk;

    if (typeof (tokenOrClient) == 'object')
        return getGeneratedSdk(tokenOrClient);
    
    const myClient = typeof tokenOrClient == 'string' ? createAuthorizedClient(tokenOrClient) : createClient()
    myClient.updateFlags(clientConfig.flags)
    return getGeneratedSdk(myClient)
}

export default getSdk