import { GraphQLClient, type Variables } from 'graphql-request'
import { getContentGraphConfig, validateContentGraphConfig, type ContentGraphConfig } from './config'
import epiHmacFetch from './hmac-fetch'

const DEBUG = process.env.DXP_DEBUG == '1'
const QUERY_LOG = process.env.QUERY_LOG == '1'
const TOKEN_MIN_LENGTH = 16

type RequestMethod = InstanceType<typeof GraphQLClient>['request']



type QueryParams = {
    query: Parameters<RequestMethod>[0]['document']
    variables: Parameters<RequestMethod>[0]['variables']
}

/**
 * The Next.JS fetch cache tags used by the default clients
 */
export enum NextFetchTags {
    "all" = "optly-graph",
    "public" = "optly-graph-public",
    "hmac" = "optly-graph-hmac",
    "token" = "optly-graph-token",
    "basic" = "optly-graph-basic"
}

export enum AuthMode {
    Public = "epi-single",
    Basic = "use-basic",
    HMAC = "use-hmac",
    Token = "use-token"
}

function validateToken(newToken ?: string) : boolean
{
    return newToken == undefined || 
        newToken == ContentGraphClient.ForceHmacToken || 
        newToken == ContentGraphClient.ForceBasicAuth ||
        newToken.length > TOKEN_MIN_LENGTH
}

function base64encode(binaryString: string) {
    if (Buffer)
        return Buffer.from(binaryString).toString('base64')
    return btoa(binaryString)
}

function isError(toTest: any): toTest is Error {
    return typeof(toTest) == 'object' && toTest != null && typeof(toTest as Error).name == 'string' && typeof(toTest as Error).message == 'string'
}

export class ContentGraphClient extends GraphQLClient
{
    public static readonly ForceHmacToken : string = 'use-hmac'
    public static readonly ForceBasicAuth : string = 'use-basic'
    protected readonly _config : ContentGraphConfig
    private _token : string | undefined

    protected get token() : string | undefined
    {
        return this._token
    }
    protected set token(newValue: string | undefined)
    {
        if (!validateToken(newValue))
            throw new Error("Invalid ContentGraph token")
        if (DEBUG)
            console.log(`[ContentGraph] Updating token to ${ newValue }`) 
        this._token = newValue
    }

    public get siteInfo() : { frontendDomain: string, cmsURL: string }
    {
        return {
            frontendDomain: this._config.deploy_domain,
            cmsURL: this._config.dxp_url
        }
    }

    public get currentAuthMode() : AuthMode
    {
        if (this._token == ContentGraphClient.ForceHmacToken)
            return AuthMode.HMAC
        if (this._token == ContentGraphClient.ForceBasicAuth)
            return AuthMode.Basic
        if (typeof(this._token) == 'string' && this._token.length > TOKEN_MIN_LENGTH)
            return AuthMode.Token
        return AuthMode.Public
    }

    public constructor(config?: ContentGraphConfig, token: string | undefined = undefined)
    {
        // Validate inputs
        const optiConfig = config ?? getContentGraphConfig()
        if (!validateContentGraphConfig(optiConfig, false))
            throw new Error("Invalid ContentGraph configuration")
        if (!validateToken(token))
            throw new Error("Invalid ContentGraph token")

        // Create instance
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

    public updateAuthentication(newToken?: string) : ContentGraphClient
    {
        this.token = newToken
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
                this.requestConfig.fetch = epiHmacFetch
                //@ts-expect-error: Next.JS specific tags
                this.requestConfig.next = { tags: [ NextFetchTags.all, NextFetchTags.hmac ] }
                break
            case AuthMode.Basic:
                this.setHeaders({
                    Authorization: `Basic ${ base64encode(this._config.app_key + ":" + this._config.secret) }`
                })
                this.requestConfig.cache = 'no-store'
                this.requestConfig.fetch = fetch
                //@ts-expect-error: Next.JS specific tags
                this.requestConfig.next = { tags: [ NextFetchTags.all, NextFetchTags.basic ] }
                break
            case AuthMode.Token: 
                this.setHeaders({
                    Authorization: `Bearer ${ this.token }`
                })
                this.requestConfig.cache = 'no-store'
                this.requestConfig.fetch = fetch
                //@ts-expect-error: Next.JS specific tags
                this.requestConfig.next = { tags: [ NextFetchTags.all, NextFetchTags.token ] }
                break
            default:
                this.setHeaders({
                    Authorization: `epi-single ${ this._config.single_key }`
                })
                this.requestConfig.fetch = fetch
                //@ts-expect-error: Next.JS specific tags
                this.requestConfig.next = { tags: [ NextFetchTags.all, NextFetchTags.public ] }
                break
        }
    } 
}

export function isContentGraphClient(client: any) : client is ContentGraphClient
{
    if (typeof(client) != 'object' || client == null)
        return false
    return typeof(client as ContentGraphClient).updateAuthentication == 'function' 
        && typeof(client as ContentGraphClient).request == 'function'
}

export function createClient(config?: ContentGraphConfig, token: string | undefined = undefined)
{
    return new ContentGraphClient(config, token)
}

/**
 * Create a new GraphQL client instance
 */
export default createClient

export type ClientFactory = (token?: string) => ContentGraphClient