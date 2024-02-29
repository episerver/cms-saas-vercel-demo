import { GraphQLClient } from 'graphql-request';
import { type ContentGraphConfig } from './config';
type RequestMethod = InstanceType<typeof GraphQLClient>['request'];
/**
 * The Next.JS fetch cache tags used by the default clients
 */
export declare enum NextFetchTags {
    "all" = "optly-graph",
    "public" = "optly-graph-public",
    "hmac" = "optly-graph-hmac",
    "token" = "optly-graph-token",
    "basic" = "optly-graph-basic"
}
export declare enum AuthMode {
    Public = "epi-single",
    Basic = "use-basic",
    HMAC = "use-hmac",
    Token = "use-token"
}
export declare class ContentGraphClient extends GraphQLClient {
    static readonly ForceHmacToken: string;
    static readonly ForceBasicAuth: string;
    protected readonly _config: ContentGraphConfig;
    private _token;
    protected get token(): string | undefined;
    protected set token(newValue: string | undefined);
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
/**
 * Create a new GraphQL client instance
 */
export default createClient;
export type ClientFactory = (token?: string) => ContentGraphClient;
