import type { ReadonlyRequestCookies } from '../types';
/**
 * Parse the request cookies to understand the visitor identifier
 * from the Optimizely Data Platform.
 *
 * @param       cookies         The request cookies
 * @returns     The identifier, or undefined if not known
 */
export declare function getVisitorID(cookies: ReadonlyRequestCookies): string | undefined;
declare const _default: {
    getVisitorID: typeof getVisitorID;
};
export default _default;
