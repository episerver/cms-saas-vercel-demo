import type { ReadonlyRequestCookies } from '../types'
import EnvTools from '../../utils/env'
import EnvVars from '../../env-vars'

/**
 * Process the provided API key
 * 
 * @param       configuredKey       The currently configured key
 * @returns     Analyze the provided key and return the public key and private key from it
 */
export function parseApiKey(configuredKey: string) : [ string, string | null ]
{
    const [ publicKey, privateKey ] = configuredKey.split(".", 2);
    return [ publicKey, privateKey ? configuredKey : null ]
}

/**
 * Parse the request cookies to understand the visitor identifier 
 * from the Optimizely Data Platform.
 * 
 * @param       cookies         The request cookies
 * @returns     The identifier, or undefined if not known
 */
export function getVisitorID(cookies: ReadonlyRequestCookies) : string | undefined
{
    return cookies.get('vuid')?.value?.split("|")?.shift()?.replaceAll('-','')
}

export function isEnabled()
{
    const apiKey = EnvTools.readValue(EnvVars.OdpApiKey, "")
    return apiKey.length > 8
}

export default {
    getVisitorID,
    parseApiKey
}