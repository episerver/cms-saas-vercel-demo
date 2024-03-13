import { readEnvironmentVariables, applyConfigDefaults, validateConfig, type OptimizelyGraphConfigInternal, type OptimizelyGraphConfig } from "../config.js"
import { GraphQLClient } from "graphql-request"
import { AuthMode, type RequestMethod, type IOptiGraphClient, type OptiGraphSiteInfo } from "./types.js"
import createHmacFetch, { type FetchAPI } from "./hmac-fetch.js"
import { base64encode, isError, validateToken, getAuthMode } from "./utils.js"

export class ContentGraphClient extends GraphQLClient implements IOptiGraphClient
{
    public static readonly ForceHmacToken : string = 'use-hmac'
    public static readonly ForceBasicAuth : string = 'use-basic'
    protected readonly _config : OptimizelyGraphConfigInternal
    private _token : string | undefined
    private _hmacFetch : FetchAPI | undefined

    public get debug() : boolean 
    {
        return this._config.debug ?? false
    }
    protected get token() : string | undefined
    {
        return this._token
    }
    protected set token(newValue: string | undefined)
    {
        if (!validateToken(newValue))
            throw new Error("Invalid ContentGraph token")
        const newMode = getAuthMode(newValue)
        if ((newMode == AuthMode.Basic || newMode == AuthMode.HMAC) && !validateConfig(this._config, false)) {
            throw new Error("[ContentGraph] Configuration is invalid for selected authentication mode")
        }
        if (this.debug)
            console.log(`[ContentGraph] Updating token to ${ newValue }`) 
        this._token = newValue
    }
    protected get hmacFetch() : FetchAPI
    {
        if (!this._hmacFetch) {
            if (this._config.app_key == undefined || this._config.secret == undefined)
                throw new Error("Unable to create an authenticated connection, make sure both the AppKey & Secret are configured")
            this._hmacFetch = createHmacFetch(this._config.app_key, this._config.secret)
        }
        return this._hmacFetch
    }

    public get siteInfo() : OptiGraphSiteInfo
    {
        return {
            frontendDomain: this._config.deploy_domain,
            cmsURL: this._config.dxp_url
        }
    }

    public get currentAuthMode() : AuthMode
    {
        return getAuthMode(this._token)
    }

    public constructor(config?: OptimizelyGraphConfig, token: AuthMode | string | undefined = undefined)
    {
        // Validate inputs
        const optiConfig : OptimizelyGraphConfig = applyConfigDefaults(config ?? readEnvironmentVariables())
        if (!validateToken(token))
            throw new Error("Invalid ContentGraph token")
        const authMode = getAuthMode(token)
        if (!validateConfig(optiConfig, authMode == AuthMode.Public || authMode == AuthMode.Token))
            throw new Error("Invalid ContentGraph configuration")

        // Create instance
        const QUERY_LOG = optiConfig.query_log ?? false
        const serviceUrl = new URL("/content/v2", optiConfig.gateway).href
        super(serviceUrl, {
            requestMiddleware: request => {
                if (QUERY_LOG) {
                    console.log(`[ContentGraph] [Request Query] ${ request.body }`)
                    console.log(`[ContentGraph] [Request Variables] ${ JSON.stringify(request.variables) }`)
                }
                return request
            },
            responseMiddleware: response => {
                if (isError(response)) {
                    console.error(`[ContentGraph] [Error] ${ response.name } => ${ response.message }`)
                } else if (response.errors) {
                    response.errors.forEach(
                        ({ message, locations, path, name, source }) => 
                        {
                            const locationList = (locations ?? []).map(loc => {
                                return `[Line: ${ loc.line }, Column: ${loc.column}]`
                            }).join("; ")
                            const errorName = name && name != 'undefined' ? ` ${ name }` : ""
                            const sourceInfo = source?.body ?? ""
                            const sourceName = source?.name ? ` in ${ source.name }` : ""
                            console.error(`[ContentGraph] [GraphQL${ errorName } error${sourceName}]:\n  Message: ${message}\n  Location: ${ locationList }\n  Path: ${path}\n  Query: ${ sourceInfo }`)
                        }
                    );
                } else if (QUERY_LOG) {
                    console.log(`[ContentGraph] [Response Data] ${ JSON.stringify(response.data) }`)
                    console.log(`[ContentGraph] [Response Cost] ${ JSON.stringify((response.extensions as { cost?: number } | undefined )?.cost || 0) }`)
                }
                return response
            }

        })

        // Set variables
        this._config = optiConfig
        this._token = token
        this.updateRequestConfig()
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
    public updateAuthentication(tokenOrAuthmode?: string | AuthMode | undefined) : ContentGraphClient
    {
        if (tokenOrAuthmode == AuthMode.Token)
            throw new Error("Provide the authentication token to switch to AuthMode.Token");
        this.token = tokenOrAuthmode == AuthMode.Public ? undefined : tokenOrAuthmode
        this.updateRequestConfig()
        return this
    }

    public query : RequestMethod = (...args) =>
    {
        //@ts-expect-error
        return this.request(...args)
    }

    protected updateRequestConfig() : void
    {
        switch (this.currentAuthMode) {
            case AuthMode.HMAC:
                this.setHeaders({})
                this.requestConfig.cache = 'no-store'
                this.requestConfig.fetch = this._hmacFetch
                break
            case AuthMode.Basic:
                this.setHeaders({
                    Authorization: `Basic ${ base64encode(this._config.app_key + ":" + this._config.secret) }`
                })
                this.requestConfig.cache = 'no-store'
                this.requestConfig.fetch = fetch
                break
            case AuthMode.Token: 
                this.setHeaders({
                    Authorization: `Bearer ${ this.token }`
                })
                this.requestConfig.cache = 'no-store'
                this.requestConfig.fetch = fetch
                break
            default:
                this.setHeaders({
                    Authorization: `epi-single ${ this._config.single_key }`
                })
                this.requestConfig.fetch = fetch
                break
        }
    } 
}

export const createClient: (config?: OptimizelyGraphConfig, token?: string | undefined) => IOptiGraphClient = (config, token = undefined) => new ContentGraphClient(config, token)

export default ContentGraphClient