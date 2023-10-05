import type { ApolloClientOptions, NormalizedCacheObject, ApolloCache, InMemoryCacheConfig, ApolloLink as ApolloLinkType, ApolloClient as ApolloClientType } from '@apollo/client/core/index.js'
import * as ApolloClientCore from '@apollo/client/core/index.js'
import { onError } from '@apollo/client/link/error/index.js'
import { getContentGraphConfig, validateContentGraphConfig, type ContentGraphConfig } from './config.js'
import epiHmacFetch from './hmac-fetch.js'
import fetch from 'node-fetch'

const { ApolloClient, InMemoryCache, ApolloLink, from, createHttpLink } = ApolloClientCore
const DEBUG = process.env.NODE_ENV == 'development'
const USE_HMAC_TOKEN = 'use-hmac'

export function createClient<TCacheShape extends NormalizedCacheObject = NormalizedCacheObject>(config?: ContentGraphConfig, token: string | undefined = undefined, configOverrides: Partial<ApolloClientOptions<TCacheShape>> | undefined = undefined, inMemoryCacheConfig: InMemoryCacheConfig | undefined = undefined ) : ApolloClientType<TCacheShape>
{
    const forPublishedOnly = !(typeof token == 'string' && (token.length > 16 || token == USE_HMAC_TOKEN))
    const optiConfig = config ?? getContentGraphConfig()
    if (!validateContentGraphConfig(optiConfig, forPublishedOnly))
        throw new Error("Invalid ContentGraph configuration")

    const sendRequest : ApolloLinkType = forPublishedOnly ? 
        // Published content, direct connection to CG
        createHttpLink({ 
            uri: new URL("/content/v2", optiConfig.gateway).href,
            headers: {
                authorization: `epi-single ${ optiConfig.single_key }`
            },
            fetch: fetch,
            fetchOptions: {
                next: { tags: ["content-graph"] }
            }
        }) : (
            token == USE_HMAC_TOKEN ?
            // Unpublished content, using HMAC authentication
            createHttpLink({
                uri: new URL("/content/v2", optiConfig.gateway).href,
                fetch: epiHmacFetch,
                fetchOptions: {
                    cache: 'no-cache',
                    next: { tags: ["content-graph"] }
                }
            }) :

            // Unpublished content, proxied connection to CG
            createHttpLink({
                uri: new URL("/EpiServer/ContentGraph/CGProxy/Query", optiConfig.dxp_url).href,
                headers: {
                    authorization: `bearer ${ token }`
                },
                fetch: fetch,
                fetchOptions: {
                    cache: 'no-cache',
                    next: { tags: ["content-graph"] }
                }
            })
        )

    const queryLogger : ApolloLinkType = new ApolloLink((operation, forward) => {
        if (DEBUG) {
            console.log("GraphQL Query:", operation.query.loc?.source?.body)
            console.log("GraphQL Variables:", operation.variables)
        }
        return forward(operation).map(response => { console.log("GraphQL Response:", response); return response; })
    })

    const errorLogger = onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.error(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
          );
      
        if (networkError) console.error(`[Network error]: ${networkError}`);
      });

    const links : ApolloLinkType[] = []
    if (optiConfig.query_log)
      links.push(queryLogger)
    links.push(errorLogger)
    links.push(sendRequest)


    return new ApolloClient<TCacheShape>({
        cache: new InMemoryCache(inMemoryCacheConfig) as unknown as ApolloCache<TCacheShape>,
        link: from(links),
        ssrMode: true,
        ...configOverrides
    })
}