import { type OptimizelyGraphConfigInternal, type OptimizelyGraphConfig } from "../config.js";
import { GraphQLClient } from "graphql-request";
import { AuthMode, type RequestMethod, type IOptiGraphClient, type OptiGraphSiteInfo } from "./types.js";
import { type FetchAPI } from "./hmac-fetch.js";
export declare class ContentGraphClient extends GraphQLClient implements IOptiGraphClient {
    static readonly ForceHmacToken: string;
    static readonly ForceBasicAuth: string;
    protected readonly _config: OptimizelyGraphConfigInternal;
    private _token;
    private _hmacFetch;
    get debug(): boolean;
    protected get token(): string | undefined;
    protected set token(newValue: string | undefined);
    protected get hmacFetch(): FetchAPI;
    get siteInfo(): OptiGraphSiteInfo;
    get currentAuthMode(): AuthMode;
    constructor(config?: OptimizelyGraphConfig, token?: AuthMode | string | undefined);
    /**
     * Update the authentication data for this client.
     * - Set to AuthMode.HMAC or AuthMode.Basic to use that authentication scheme, this requires the AppKey and Secret to be part of the configuration
     * - Set to the actual token to be used to switch to AuthMode.Token
     * - Set to undefined or AuthMode.Public to switch to public, read-only mode. (i.e. using the SingleKey)
     *
     * @param       tokenOrAuthmode     The authentication mode/token to be used
     * @returns     The client itself
     */
    updateAuthentication(tokenOrAuthmode?: string | AuthMode | undefined): ContentGraphClient;
    query: RequestMethod;
    protected updateRequestConfig(): void;
}
export declare const createClient: (config?: OptimizelyGraphConfig, token?: string | undefined) => IOptiGraphClient;
export default ContentGraphClient;
