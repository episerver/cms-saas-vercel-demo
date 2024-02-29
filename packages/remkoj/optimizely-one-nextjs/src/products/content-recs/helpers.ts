import type { ReadonlyRequestCookies } from '../types'
import * as EnvTools from '../../utils/env'
import EnvVars from '../../env-vars'

/**
 * Parse the request cookies to understand the visitor identifier 
 * from the Optimizely Data Platform.
 * 
 * @param       cookies         The request cookies
 * @returns     The identifier, or undefined if not known
 */
export function getVisitorID(cookies: ReadonlyRequestCookies) : string | undefined
{
    return cookies.get('iv')?.value
}

/**
 * Server side check if the Content Recs integration has been configured
 * 
 * @returns     True if the integration has been configured, false otherwise
 */
export function isEnabled()
{
    const clientId = EnvTools.readValue(EnvVars.ContentRecsClient, "")
    const deliveryId = EnvTools.readValue(EnvVars.ContentRecsDelivery, "")
    return clientId != "" && deliveryId != ""
}

export default {
    getVisitorID,
    isEnabled
}