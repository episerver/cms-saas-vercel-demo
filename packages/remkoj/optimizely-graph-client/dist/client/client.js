import { readEnvironmentVariables, applyConfigDefaults, validateConfig } from "../config.js";
import { GraphQLClient } from "graphql-request";
import { AuthMode } from "./types.js";
import createHmacFetch from "./hmac-fetch.js";
import { base64encode, isError, validateToken, getAuthMode } from "./utils.js";
const defaultFlags = {
    queryCache: true,
    cache: true,
    recursive: false
};
export class ContentGraphClient extends GraphQLClient {
    static ForceHmacToken = 'use-hmac';
    static ForceBasicAuth = 'use-basic';
    _config;
    _token;
    _hmacFetch;
    _flags;
    get debug() {
        return this._config.debug ?? false;
    }
    get token() {
        return this._token;
    }
    set token(newValue) {
        if (!validateToken(newValue))
            throw new Error("Invalid ContentGraph token");
        const newMode = getAuthMode(newValue);
        if ((newMode == AuthMode.Basic || newMode == AuthMode.HMAC) && !validateConfig(this._config, false)) {
            throw new Error("[ContentGraph] Configuration is invalid for selected authentication mode");
        }
        if (this.debug)
            console.log(`[ContentGraph] Updating token to ${newValue}`);
        this._token = newValue;
    }
    get hmacFetch() {
        if (!this._hmacFetch) {
            if (this._config.app_key == undefined || this._config.secret == undefined)
                throw new Error("Unable to create an authenticated connection, make sure both the AppKey & Secret are configured");
            this._hmacFetch = createHmacFetch(this._config.app_key, this._config.secret);
        }
        return this._hmacFetch;
    }
    get siteInfo() {
        return {
            frontendDomain: this._config.deploy_domain,
            cmsURL: this._config.dxp_url
        };
    }
    get currentAuthMode() {
        return getAuthMode(this._token);
    }
    constructor(config, token = undefined, flags) {
        const configFlags = { ...defaultFlags, ...flags };
        // Validate inputs
        const optiConfig = applyConfigDefaults(config ?? readEnvironmentVariables());
        if (!validateToken(token))
            throw new Error("Invalid ContentGraph token");
        const authMode = getAuthMode(token);
        if (!validateConfig(optiConfig, authMode == AuthMode.Public || authMode == AuthMode.Token, true))
            throw new Error("Invalid ContentGraph configuration");
        // Create instance
        const QUERY_LOG = optiConfig.query_log ?? false;
        const serviceUrl = new URL("/content/v2", optiConfig.gateway);
        if (configFlags.queryCache)
            serviceUrl.searchParams.set('stored', 'true');
        super(serviceUrl.href, {
            credentials: "include",
            method: "post",
            requestMiddleware: request => {
                if (QUERY_LOG) {
                    console.log(`[ContentGraph] [Request Query] ${request.body}`);
                    console.log(`[ContentGraph] [Request Variables] ${JSON.stringify(request.variables)}`);
                }
                return request;
            },
            responseMiddleware: response => {
                if (isError(response)) {
                    console.error(`[ContentGraph] [Error] ${response.name} => ${response.message}`);
                }
                else if (response.errors) {
                    response.errors.forEach(({ message, locations, path, name, source }) => {
                        const locationList = (locations ?? []).map(loc => {
                            return `[Line: ${loc.line}, Column: ${loc.column}]`;
                        }).join("; ");
                        const errorName = name && name != 'undefined' ? ` ${name}` : "";
                        const sourceInfo = source?.body ?? "";
                        const sourceName = source?.name ? ` in ${source.name}` : "";
                        console.error(`[ContentGraph] [GraphQL${errorName} error${sourceName}]:\n  Message: ${message}\n  Location: ${locationList}\n  Path: ${path}\n  Query: ${sourceInfo}`);
                    });
                }
                else if (QUERY_LOG) {
                    console.log(`[ContentGraph] [Response Data] ${JSON.stringify(response.data)}`);
                    console.log(`[ContentGraph] [Response Cost] ${JSON.stringify(response.extensions?.cost || 0)}`);
                }
                return response;
            }
        });
        // Set variables
        this._config = optiConfig;
        this._token = token;
        this._flags = configFlags;
        this.updateRequestConfig();
    }
    /**
     * Update the authentication data for this client.
     * - Set to AuthMode.HMAC or AuthMode.Basic to use that authentication scheme, this requires the AppKey and Secret to be part of the configuration
     * - Set to the actual token to be used to switch to AuthMode.Token
     * - Set to undefined or AuthMode.Public to switch to public, read-only mode. (i.e. using the SingleKey)
     *
     * @param       tokenOrAuthmode     The authentication mode/token to be used
     * @returns     The client itself
     */
    updateAuthentication(tokenOrAuthmode) {
        if (tokenOrAuthmode == AuthMode.Token)
            throw new Error("Provide the authentication token to switch to AuthMode.Token");
        this.token = tokenOrAuthmode == AuthMode.Public ? undefined : tokenOrAuthmode;
        this.updateRequestConfig();
        return this;
    }
    query = (...args) => {
        //@ts-expect-error
        return this.request(...args);
    };
    _oldFlags = undefined;
    updateFlags(newFlags, temporary = false) {
        // Determine the new flags
        if (this._oldFlags)
            throw new Error("There's a temporary flag update in progress, revert that one first prior to updating the flags");
        if (temporary)
            this._oldFlags = this._flags;
        this._flags = { ...this._flags, ...newFlags };
        if (this._config.debug)
            console.log(`🔵 [ContentGraph] ${temporary ? 'Temporary updating' : 'Updating'} the feature configuration of the client`);
        // Update the request configuration
        this.updateRequestConfig();
        return this;
    }
    restoreFlags() {
        // Restore the flags
        if (!this._oldFlags)
            return this;
        this._flags = this._oldFlags;
        this._oldFlags = undefined;
        if (this._config.debug)
            console.log(`🔵 [ContentGraph] Rolling back the feature configuration of the client`);
        // Update the request configuration
        this.updateRequestConfig();
        return this;
    }
    updateRequestConfig() {
        // Build headers that are shared across authentication modes
        const headers = {
            "X-Client": "@RemkoJ/OptimizelyGraphClient"
        };
        if (this._flags.recursive)
            headers["cg-recursive-enabled"] = "true";
        // Update headers & fetch method
        switch (this.currentAuthMode) {
            case AuthMode.HMAC:
                this.setHeaders(headers);
                this.requestConfig.cache = 'no-store';
                this.requestConfig.fetch = this.hmacFetch;
                break;
            case AuthMode.Basic:
                this.setHeaders({
                    ...headers,
                    Authorization: `Basic ${base64encode(this._config.app_key + ":" + this._config.secret)}`
                });
                this.requestConfig.cache = 'no-store';
                this.requestConfig.fetch = fetch;
                break;
            case AuthMode.Token:
                this.setHeaders({
                    ...headers,
                    Authorization: `Bearer ${this.token}`
                });
                this.requestConfig.cache = 'no-store';
                this.requestConfig.fetch = fetch;
                break;
            default:
                this.setHeaders({
                    ...headers,
                    Authorization: `epi-single ${this._config.single_key}`
                });
                this.requestConfig.fetch = fetch;
                break;
        }
        // Update endpoint
        const serviceUrl = new URL("/content/v2", this._config.gateway);
        if (this._flags.queryCache)
            serviceUrl.searchParams.set('stored', 'true');
        serviceUrl.searchParams.set('cache', this._flags.cache ? 'true' : 'false');
        this.setEndpoint(serviceUrl.href);
    }
}
export const createClient = (config, token = undefined) => new ContentGraphClient(config, token);
export default ContentGraphClient;
