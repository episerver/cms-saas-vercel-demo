import { ApolloClient, InMemoryCache, ApolloLink, from, createHttpLink } from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';
import { getContentGraphConfig, validateContentGraphConfig } from './config';
import epiHmacFetch from './hmac-fetch';
import { v4 as uuid } from 'uuid';
const DEBUG = process.env.DXP_DEBUG == '1';
const QUERY_LOG = process.env.QUERY_LOG == '1';
const currentClients = {};
/**
 * Create a client with this token to use the built-in support for HMAC Authentication
 */
export const ForceHmacAuthentication = 'use-hmac';
/**
 * Create a client with this token to use the built-in support for HMAC Authentication
 *
 * @deprecated Use ForceHmacAuthentication instead
 */
export const USE_HMAC_TOKEN = ForceHmacAuthentication;
/**
 * The Next.JS fetch cache tags used by the default clients
 */
export var NextFetchTags;
(function (NextFetchTags) {
    NextFetchTags["all"] = "optly-graph";
    NextFetchTags["public"] = "optly-graph-public";
    NextFetchTags["hmac"] = "optly-graph-hmac";
    NextFetchTags["token"] = "optly-graph-token";
})(NextFetchTags || (NextFetchTags = {}));
/**
 * Get (and create if needed) the GraphQL client, the clients are unique per token value
 *
 * @param config
 * @param token
 * @param configOverrides
 * @param inMemoryCacheConfig
 * @returns
 */
export function getClient(config, token = undefined, configOverrides = undefined, inMemoryCacheConfig = undefined) {
    const tokenKey = token == undefined ? "##undefined##" : token;
    if (currentClients[tokenKey]) {
        if (DEBUG)
            console.log("Reusing existing GraphQL Client instance");
    }
    else {
        if (DEBUG)
            console.log("Creating new Apollo Client");
        currentClients[tokenKey] = createNewClient(config, token, configOverrides, inMemoryCacheConfig);
    }
    return currentClients[tokenKey];
}
export function applyOnAllClients(callback) {
    const results = Object.getOwnPropertyNames(currentClients).map(tokenKey => {
        return callback(currentClients[tokenKey]);
    });
    return results;
}
export function createNewClient(config, token = undefined, configOverrides = undefined, inMemoryCacheConfig = undefined) {
    const links = [];
    links.push(createErrorLogger(console));
    if (DEBUG || QUERY_LOG) {
        console.log("[OptlyGraph] Enabled Query Logger");
        links.push(createQueryLogger(console));
    }
    links.push(createContentGraphLink(token, config));
    const cache = new InMemoryCache({
        ...inMemoryCacheConfig
    });
    return new ApolloClient({
        cache,
        link: from(links),
        ...configOverrides
    });
}
export function createErrorLogger(target) {
    return onError(({ graphQLErrors, networkError, operation, response }) => {
        const queryId = operation.extensions.queryId || undefined;
        const logPrefix = "[OptlyGraph]" + (queryId && ` [Query-${queryId}]`);
        if (graphQLErrors)
            graphQLErrors.forEach(({ message, locations, path, name, source }) => {
                const locationList = (locations ?? []).map(loc => {
                    return `[Line: ${loc.line}, Column: ${loc.column}]`;
                }).join("; ");
                const errorName = name && name != 'undefined' ? ` ${name}` : "";
                const sourceInfo = source?.body ?? operation.query;
                const sourceName = source?.name ? ` in ${source.name}` : (operation.operationName ? ` in ${operation.operationName}` : "");
                target.error(`[GraphQL${errorName} error${sourceName}]:\n  Message: ${message}\n  Location: ${locationList}\n  Path: ${path}\n  Query: ${sourceInfo}`);
            });
        if (networkError) {
            target.error(`${logPrefix} [Network error]: ${networkError.name} => ${networkError.message}`);
            if (DEBUG || QUERY_LOG) {
                target.error(`${logPrefix} [Network error]: Response:`, JSON.stringify(response, undefined, 2));
            }
        }
    });
}
export function createQueryLogger(target) {
    return new ApolloLink((operation, forward) => {
        const queryId = uuid();
        target.log("[OptlyGraph] [Query-" + queryId + "] Text:", operation.query.loc?.source?.body);
        target.log("[OptlyGraph] [Query-" + queryId + "] Variables:", operation.variables);
        operation.extensions["queryId"] = queryId;
        return forward(operation).map(response => {
            target.log("[OptlyGraph] [Query-" + queryId + "] Response:", response);
            return response;
        });
    });
}
export function createContentGraphLink(token, config) {
    //const forPublishedOnly = !(typeof token == 'string' && (token.length > 16 || token == USE_HMAC_TOKEN))
    const optiConfig = config ?? getContentGraphConfig();
    // If we have an USE-HMAC instruction in the token, we'll use the Optimizely Graph
    // endpoint with HMAC authorization in place.
    if (token == ForceHmacAuthentication) {
        if (QUERY_LOG || DEBUG)
            console.log("[OptlyGraph] Creating HMAC authorized client");
        if (!validateContentGraphConfig(optiConfig, false))
            throw new Error("Invalid ContentGraph configuration");
        return createHttpLink({
            uri: new URL("/content/v2", optiConfig.gateway).href,
            fetch: epiHmacFetch,
            fetchOptions: {
                cache: 'no-store',
                next: { tags: [NextFetchTags.all, NextFetchTags.hmac] }
            }
        });
    }
    if (typeof (token) == 'string' && token.length > 16) {
        if (QUERY_LOG || DEBUG)
            console.log("[OptlyGraph] Creating authorized client, using token:", token);
        if (!validateContentGraphConfig(optiConfig, false))
            throw new Error("Invalid ContentGraph configuration");
        return createHttpLink({
            uri: new URL("/content/v2", optiConfig.gateway).href,
            headers: {
                authorization: `Bearer ${token}`
            },
            fetch: fetch,
            fetchOptions: {
                cache: 'no-store',
                next: { tags: [NextFetchTags.all, NextFetchTags.token] }
            }
        });
    }
    if (QUERY_LOG || DEBUG)
        console.log("[OptlyGraph] Creating Public Content Client");
    // Validate if we've got enough 
    if (!validateContentGraphConfig(optiConfig, true))
        throw new Error("Invalid ContentGraph configuration");
    // There's no token information, so we're defaulting to published content
    // only.
    return createHttpLink({
        uri: new URL("/content/v2", optiConfig.gateway).href,
        headers: {
            authorization: `epi-single ${optiConfig.single_key}`
        },
        fetch: fetch,
        fetchOptions: {
            next: { tags: [NextFetchTags.all, NextFetchTags.public] }
        }
    });
}
/**
 * Get the client matching the provided configuration
 *
 * @deprecated  Prefer the explicit getClient / createNewClient over createClient
 */
export const createClient = getClient;
export default getClient;
