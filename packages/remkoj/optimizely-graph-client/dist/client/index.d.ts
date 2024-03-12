import type { ContentGraphConfig } from "../types.js";
import type { RequestMethod } from "./types.js";
import { GraphQLClient } from "graphql-request";
import { type FetchAPI } from "./hmac-fetch.js";
import { AuthMode } from "./utils.js";
export declare class ContentGraphClient extends GraphQLClient {
    static readonly ForceHmacToken: string;
    static readonly ForceBasicAuth: string;
    protected readonly _config: ContentGraphConfig;
    private _token;
    private _hmacFetch;
    get debug(): boolean;
    protected get token(): string | undefined;
    protected set token(newValue: string | undefined);
    protected get hmacFetch(): FetchAPI;
    get siteInfo(): {
        frontendDomain: string;
        cmsURL: string;
    };
    get currentAuthMode(): AuthMode;
    constructor(config?: ContentGraphConfig, token?: string | undefined);
    updateAuthentication(newToken?: string): ContentGraphClient;
    query: RequestMethod;
    protected updateRequestConfig(): void;
}
export declare function isContentGraphClient(client: any): client is ContentGraphClient;
export declare function createClient(config?: ContentGraphConfig, token?: string | undefined): ContentGraphClient;
export { createHmacFetch } from './hmac-fetch.js';
/**
 * Create a new GraphQL client instance
 */
export default createClient;
