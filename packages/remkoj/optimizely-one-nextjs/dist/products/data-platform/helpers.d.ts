import type { ReadonlyRequestCookies } from '../types';
/**
 * Process the provided API key
 *
 * @param       configuredKey       The currently configured key
 * @returns     Analyze the provided key and return the public key and private key from it
 */
export declare function parseApiKey(configuredKey: string): [string, string | null];
/**
 * Parse the request cookies to understand the visitor identifier
 * from the Optimizely Data Platform.
 *
 * @param       cookies         The request cookies
 * @returns     The identifier, or undefined if not known
 */
export declare function getVisitorID(cookies: ReadonlyRequestCookies): string | undefined;
export declare function isEnabled(): boolean;
declare const _default: {
    getVisitorID: typeof getVisitorID;
    parseApiKey: typeof parseApiKey;
};
export default _default;
