import { GraphQLClient } from 'graphql-request';
import { getContentGraphConfig, validateContentGraphConfig } from './config';
import epiHmacFetch from './hmac-fetch';
const DEBUG = process.env.DXP_DEBUG == '1';
const QUERY_LOG = process.env.QUERY_LOG == '1';
const TOKEN_MIN_LENGTH = 16;
/**
 * The Next.JS fetch cache tags used by the default clients
 */
export var NextFetchTags;
(function (NextFetchTags) {
    NextFetchTags["all"] = "optly-graph";
    NextFetchTags["public"] = "optly-graph-public";
    NextFetchTags["hmac"] = "optly-graph-hmac";
    NextFetchTags["token"] = "optly-graph-token";
    NextFetchTags["basic"] = "optly-graph-basic";
})(NextFetchTags || (NextFetchTags = {}));
export var AuthMode;
(function (AuthMode) {
    AuthMode["Public"] = "epi-single";
    AuthMode["Basic"] = "use-basic";
    AuthMode["HMAC"] = "use-hmac";
    AuthMode["Token"] = "use-token";
})(AuthMode || (AuthMode = {}));
function validateToken(newToken) {
    return newToken == undefined ||
        newToken == ContentGraphClient.ForceHmacToken ||
        newToken == ContentGraphClient.ForceBasicAuth ||
        newToken.length > TOKEN_MIN_LENGTH;
}
function base64encode(binaryString) {
    if (Buffer)
        return Buffer.from(binaryString).toString('base64');
    return btoa(binaryString);
}
function isError(toTest) {
    return typeof (toTest) == 'object' && toTest != null && typeof toTest.name == 'string' && typeof toTest.message == 'string';
}
export class ContentGraphClient extends GraphQLClient {
    static ForceHmacToken = 'use-hmac';
    static ForceBasicAuth = 'use-basic';
    _config;
    _token;
    get token() {
        return this._token;
    }
    set token(newValue) {
        if (!validateToken(newValue))
            throw new Error("Invalid ContentGraph token");
        if (DEBUG)
            console.log(`[ContentGraph] Updating token to ${newValue}`);
        this._token = newValue;
    }
    get siteInfo() {
        return {
            frontendDomain: this._config.deploy_domain,
            cmsURL: this._config.dxp_url
        };
    }
    get currentAuthMode() {
        if (this._token == ContentGraphClient.ForceHmacToken)
            return AuthMode.HMAC;
        if (this._token == ContentGraphClient.ForceBasicAuth)
            return AuthMode.Basic;
        if (typeof (this._token) == 'string' && this._token.length > TOKEN_MIN_LENGTH)
            return AuthMode.Token;
        return AuthMode.Public;
    }
    constructor(config, token = undefined) {
        // Validate inputs
        const optiConfig = config ?? getContentGraphConfig();
        if (!validateContentGraphConfig(optiConfig, false))
            throw new Error("Invalid ContentGraph configuration");
        if (!validateToken(token))
            throw new Error("Invalid ContentGraph token");
        // Create instance
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
                this.requestConfig.fetch = epiHmacFetch;
                //@ts-expect-error: Next.JS specific tags
                this.requestConfig.next = { tags: [NextFetchTags.all, NextFetchTags.hmac] };
                break;
            case AuthMode.Basic:
                this.setHeaders({
                    Authorization: `Basic ${base64encode(this._config.app_key + ":" + this._config.secret)}`
                });
                this.requestConfig.cache = 'no-store';
                this.requestConfig.fetch = fetch;
                //@ts-expect-error: Next.JS specific tags
                this.requestConfig.next = { tags: [NextFetchTags.all, NextFetchTags.basic] };
                break;
            case AuthMode.Token:
                this.setHeaders({
                    Authorization: `Bearer ${this.token}`
                });
                this.requestConfig.cache = 'no-store';
                this.requestConfig.fetch = fetch;
                //@ts-expect-error: Next.JS specific tags
                this.requestConfig.next = { tags: [NextFetchTags.all, NextFetchTags.token] };
                break;
            default:
                this.setHeaders({
                    Authorization: `epi-single ${this._config.single_key}`
                });
                this.requestConfig.fetch = fetch;
                //@ts-expect-error: Next.JS specific tags
                this.requestConfig.next = { tags: [NextFetchTags.all, NextFetchTags.public] };
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
/**
 * Create a new GraphQL client instance
 */
export default createClient;
