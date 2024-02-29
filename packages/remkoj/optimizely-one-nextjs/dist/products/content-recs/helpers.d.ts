import type { ReadonlyRequestCookies } from '../types';
/**
 * Parse the request cookies to understand the visitor identifier
 * from the Optimizely Data Platform.
 *
 * @param       cookies         The request cookies
 * @returns     The identifier, or undefined if not known
 */
export declare function getVisitorID(cookies: ReadonlyRequestCookies): string | undefined;
/**
 * Server side check if the Content Recs integration has been configured
 *
 * @returns     True if the integration has been configured, false otherwise
 */
export declare function isEnabled(): boolean;
declare const _default: {
    getVisitorID: typeof getVisitorID;
    isEnabled: typeof isEnabled;
};
export default _default;
