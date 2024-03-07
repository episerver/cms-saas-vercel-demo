import type { ReadonlyRequestCookies } from '../types'

/**
 * Parse the request cookies to understand the visitor identifier 
 * from the Optimizely Data Platform.
 * 
 * @param       cookies         The request cookies
 * @returns     The identifier, or undefined if not known
 */
export function getVisitorID(cookies: ReadonlyRequestCookies) : string | undefined
{
    return cookies.get('optimizelyEndUserId')?.value
}

export default {
    getVisitorID,
}