import type { ApolloClientOptions, NormalizedCacheObject, InMemoryCacheConfig } from '@apollo/client/core';
import { ApolloClient, ApolloLink } from '@apollo/client/core';
import { type ContentGraphConfig } from './config';
/**
 * Create a client with this token to use the built-in support for HMAC Authentication
 */
export declare const ForceHmacAuthentication = "use-hmac";
/**
 * Create a client with this token to use the built-in support for HMAC Authentication
 *
 * @deprecated Use ForceHmacAuthentication instead
 */
export declare const USE_HMAC_TOKEN = "use-hmac";
/**
 * The Next.JS fetch cache tags used by the default clients
 */
export declare enum NextFetchTags {
    "all" = "optly-graph",
    "public" = "optly-graph-public",
    "hmac" = "optly-graph-hmac",
    "token" = "optly-graph-token"
}
/**
 * Get (and create if needed) the GraphQL client, the clients are unique per token value
 *
 * @param config
 * @param token
 * @param configOverrides
 * @param inMemoryCacheConfig
 * @returns
 */
export declare function getClient<TCacheShape extends NormalizedCacheObject = NormalizedCacheObject>(config?: ContentGraphConfig, token?: string | undefined, configOverrides?: Partial<ApolloClientOptions<TCacheShape>> | undefined, inMemoryCacheConfig?: InMemoryCacheConfig | undefined): ApolloClient<TCacheShape>;
export declare function applyOnAllClients<T = void>(callback: (client: ApolloClient<NormalizedCacheObject>) => T): T[];
export declare function createNewClient<TCacheShape extends NormalizedCacheObject = NormalizedCacheObject>(config?: ContentGraphConfig, token?: string | undefined, configOverrides?: Partial<ApolloClientOptions<TCacheShape>> | undefined, inMemoryCacheConfig?: InMemoryCacheConfig | undefined): ApolloClient<TCacheShape>;
export declare function createErrorLogger(target: Console): ApolloLink;
export declare function createQueryLogger(target: Console): ApolloLink;
export declare function createContentGraphLink(token?: string, config?: ContentGraphConfig): ApolloLink;
/**
 * Get the client matching the provided configuration
 *
 * @deprecated  Prefer the explicit getClient / createNewClient over createClient
 */
export declare const createClient: typeof getClient;
export default getClient;
