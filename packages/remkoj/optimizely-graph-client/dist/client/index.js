import { GraphQLClient } from "graphql-request";
import createHmacFetch from "./hmac-fetch.js";
import { AuthMode, base64encode, isError, validateToken, getAuthMode } from "./utils.js";
import { readEnvironmentVariables, validateConfig } from "../config.js";
export class ContentGraphClient extends GraphQLClient {
    static ForceHmacToken = 'use-hmac';
    static ForceBasicAuth = 'use-basic';
    _config;
    _token;
    _hmacFetch;
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
    constructor(config, token = undefined) {
        // Validate inputs
        const optiConfig = config ?? readEnvironmentVariables();
        if (!validateToken(token))
            throw new Error("Invalid ContentGraph token");
        const authMode = getAuthMode(token);
        if (!validateConfig(optiConfig, authMode == AuthMode.Public || authMode == AuthMode.Token))
            throw new Error("Invalid ContentGraph configuration");
        // Create instance
        const QUERY_LOG = optiConfig.query_log ?? false;
        const serviceUrl = new URL("/content/v2", optiConfig.gateway).href;
        super(serviceUrl, {
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
        this.updateRequestConfig();
    }
    updateAuthentication(newToken) {
        this.token = newToken;
        this.updateRequestConfig();
        return this;
    }
    query = (...args) => {
        //@ts-expect-error
        return this.request(...args);
    };
    updateRequestConfig() {
        switch (this.currentAuthMode) {
            case AuthMode.HMAC:
                this.setHeaders({});
                this.requestConfig.cache = 'no-store';
                this.requestConfig.fetch = this._hmacFetch;
                break;
            case AuthMode.Basic:
                this.setHeaders({
                    Authorization: `Basic ${base64encode(this._config.app_key + ":" + this._config.secret)}`
                });
                this.requestConfig.cache = 'no-store';
                this.requestConfig.fetch = fetch;
                break;
            case AuthMode.Token:
                this.setHeaders({
                    Authorization: `Bearer ${this.token}`
                });
                this.requestConfig.cache = 'no-store';
                this.requestConfig.fetch = fetch;
                break;
            default:
                this.setHeaders({
                    Authorization: `epi-single ${this._config.single_key}`
                });
                this.requestConfig.fetch = fetch;
                break;
        }
    }
}
export function isContentGraphClient(client) {
    if (typeof (client) != 'object' || client == null)
        return false;
    return typeof client.updateAuthentication == 'function'
        && typeof client.request == 'function';
}
export function createClient(config, token = undefined) {
    return new ContentGraphClient(config, token);
}
export { createHmacFetch } from './hmac-fetch.js';
/**
 * Create a new GraphQL client instance
 */
export default createClient;
