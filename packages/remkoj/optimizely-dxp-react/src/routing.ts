import type { OperationVariables, ApolloClient, NormalizedCacheObject, ApolloClientOptions } from "@apollo/client"
import type { ContentLinkWithLocale } from "./types"
import { gql } from "@apollo/client/core"
import { createNewClient as createClient } from './client'
import getContentGraphConfig, { type ContentGraphConfig, validateContentGraphConfig } from './config'

const DEBUG = process.env.DXP_DEBUG == '1'

export type Route = {
    language: string
    path: string
    url: URL
    slug: string
    changed: Date | null
    published: Date | null
    contentType: string[]
    id: number
    workId?: number | null
    guid: string
    siteId: string
}

export class RouteResolver {
    private _cgClient : ApolloClient<NormalizedCacheObject>
    private _config : ContentGraphConfig

    /**
     * Create a new Route Resolver
     * 
     * @param client        ContentGraph configuration override
     * @param apolloConfig  Apollo Client configuration override
     */
    public constructor (client: ApolloClient<NormalizedCacheObject>, config?: ContentGraphConfig)
    /**
     * Create a new edit-mode Route Resolver, based on the provided token. 
     * 
     * @param token         The token that allows reading data, or the magic value "use-hmac" to use the built-in HMAC authentication for ContentGraph
     * @param config        ContentGraph configuration override
     * @param apolloConfig  Apollo Client configuration override
     */
    public constructor (token?: string, config?: ContentGraphConfig, apolloConfig?: Partial<ApolloClientOptions<NormalizedCacheObject>>)
    public constructor(clientOrToken?: ApolloClient<NormalizedCacheObject> | string, config?: ContentGraphConfig, apolloConfig?: Partial<ApolloClientOptions<NormalizedCacheObject>>)
    {
        this._config = config ?? getContentGraphConfig()
        if (!validateContentGraphConfig(this._config))
            throw new Error("Invalid ContentGraph Configuration")

        if (typeof clientOrToken == 'string' || clientOrToken == undefined)
            this._cgClient = createClient(this._config, clientOrToken, apolloConfig)

        else if (typeof clientOrToken == 'object' && clientOrToken != null && typeof clientOrToken.query == 'function')
            this._cgClient = clientOrToken

        else
            throw new Error(`The first parameter "clientOrToken" must be either a valid token string or ApolloClient, you've provided a ${ typeof clientOrToken }`)

    }

    public async getRoutes(siteId?: string) : Promise<Route[]>
    {
        let page = await this._cgClient.query<GetAllRoutes.Result, GetAllRoutes.Variables>({ 
            query: GetAllRoutes.query, 
            variables: {
                siteId,
                typeFilter: "Page"
            },
            fetchPolicy: "no-cache" 
        })
        if (!page?.data) {
            return []
        }
        let results = page.data?.Content?.items ?? []
        const totalCount = page.data?.Content?.total ?? 0
        const cursor = page.data?.Content?.cursor ?? ''

        if (totalCount > 0 && cursor !== '' && totalCount > results.length)
            while ((page.data?.Content?.items?.length ?? 0) > 0 && results.length < totalCount) 
            {
                page = await this._cgClient.query<GetAllRoutes.Result, GetAllRoutes.Variables>({ 
                    query: GetAllRoutes.query, 
                    variables: { 
                        cursor,
                        siteId,
                        typeFilter: "Page" 
                    },
                    fetchPolicy: "no-cache"
                })
                results = results.concat(page.data?.Content?.items ?? [])
            }

        return results.map(this.convertResponse)
    }

    public async getContentInfoByPath(path: string, siteId?: null) : Promise<undefined | Route>
    {
        if (DEBUG)
            console.log(`Resolving content info for ${ path } on ${ siteId ? "site " + siteId : "all sites"}`)

        const resultSet = await this._cgClient.query<GetRouteByPath.Result, GetRouteByPath.Variables>({
            query: GetRouteByPath.query,
            variables: {
                path,
                siteId
            }
        })

        if (resultSet.loading) {
            if (DEBUG) console.warn("Still loading after result has been awaited")
            return undefined
        }

        if ((resultSet.data?.Content?.items?.length ?? 0) === 0) {
            if (DEBUG) console.warn("No items in the resultset");
            return undefined
        }

        if ((resultSet.data?.Content?.items?.length ?? 0) > 1)
            throw new Error("Ambiguous URL provided, did you omit the siteId in a multi-channel setup?")

        if (DEBUG)
            console.log(`Resolved content info for ${ path } to:`, resultSet.data.Content.items[0])
        
        return this.convertResponse(resultSet.data.Content.items[0])
    }

    public async getContentInfoById(contentId: string, locale: string) : Promise<undefined | Route>
    {
        const [ id, workId ] = this.parseIdString(contentId)
        const variables : GetRouteById.Variables = {
            id,
            workId,
            locale: locale.replaceAll('-','_')
        }

        if (DEBUG)
            console.log("Resolving content by id:", JSON.stringify(variables))

        const resultSet = await this._cgClient.query<GetRouteById.Result, GetRouteById.Variables>({
            query: GetRouteById.query,
            variables
        })

        if (!(resultSet.loading == false && !resultSet.error))
            return undefined

        if (resultSet.data.Content?.total >= 1) {
            if (DEBUG && resultSet.data.Content?.total > 1)
                console.warn(`Received multiple entries with this ID, returning the first one from: ${ (resultSet.data?.Content?.items || []).map(x => { return `${ x.contentLink.id }_${ x.contentLink.workId }_${ x.locale.name }`}).join('; ') }`)
            return this.convertResponse(resultSet.data.Content.items[0])
        }
        
        return undefined
    }

    public routeToContentLink(route: Route) : ContentLinkWithLocale
    {
        return {
            id: route.id,
            workId: route.workId,
            guidValue: route.guid,
            locale: route.language
        }
    }

    protected parseIdString(id: string) : [ number, number | null ]
    {
        let cId : number = -1
        let workId : number | null = null
        if (id.indexOf("_") > 0) {
            [ cId, workId ] = id.split("_").map(x => {
                try {
                    return Number.parseInt(x, 10)
                } catch {
                    return -1
                }
            })
            if (workId < 0) 
                workId = null
        } else {
            try {
                cId = Number.parseInt(id, 10)
            } catch {
                cId = -1
            }
        }
        return [ cId, workId ]
    }

    protected convertResponse(item: GetAllRoutes.Route) : Route
    {
        return {
            // Take the GQL response
            ...item,

            // Then add/override the needed fields
            url: new URL(item.url),
            id: item.contentLink?.id || 0,
            workId: item.contentLink?.workId,
            guid: item.contentLink?.guidValue || "",
            language: item.locale.name,
            published: item.published ? new Date(item.published) : null,
            changed: item.changed ? new Date(item.changed) : null
        }
    }
}

export namespace GetAllRoutes {
    export type Route = {
        path: string
        siteId: string
        locale: { name: string}
        contentLink: { id?: number | null, workId?: number | null, guidValue?: string | null }
        name: string
        contentType: string[]
        slug: string
        changed: string
        published: string
        url: string
    }

    export type Result = {
        Content: {
            items: Route[],
            cursor: string,
            total: number
        }
    }

    export type Variables = {
        cursor?: string,
        pageSize?: number,
        typeFilter?: string | string[]
        siteId?: string
    } & OperationVariables

    export const query = gql`query GetAllRoutes($cursor: String, $pageSize: Int = 100, $typeFilter: [String] = "Page", $siteId: String = null)
  {
    Content(
        where: {
        _and: {
            RelativePath: {
            exist: true
            },
            ContentType: {
            in: $typeFilter
            }
            SiteId: {
            eq: $siteId
            }
        }
        },
        limit: $pageSize,
        cursor: $cursor
    ) {
        items {
        path: RelativePath
        locale:Language { name: Name }
        contentLink: ContentLink { id: Id, workId: WorkId, guidValue: GuidValue }
        name: Name
        contentType: ContentType
        slug: RouteSegment
        changed: Changed
        published: StartPublish
        siteId: SiteId
        url: Url
        },
        cursor,
        total
    }
}`
}

export namespace GetRouteByPath {
    export type Variables = {
        path: string
        siteId?: string | null
    }
    export type Result = {
        Content: {
            total: number
            items: GetAllRoutes.Route[]
        }
    }
 export const query = gql`query GetRouteByPath($path: String!, $siteId: String) {
    Content(
      where: {
        _and: {
          RelativePath: {
            eq: $path
          },
          SiteId: {
            eq:$siteId
          }
        }
      }
    )
    {
      total,
      items {
        route: RelativePath
        url: Url
        locale:Language { name: Name }
        contentLink: ContentLink { id: Id, workId: WorkId, guidValue: GuidValue }
        name: Name,
        contentType: ContentType,
        slug: RouteSegment,
        changed: Changed,
        published: StartPublish
        siteId: SiteId
      }
    }
  }`
}

export namespace GetRouteById {
    export type Variables = {
        id: number,
        workId?: number | null,
        locale?: string | string[]
    }
    export type Result = {
        Content: {
            total: number
            items: GetAllRoutes.Route[]
        }
    }

   export const query = gql`query GetRouteById($id: Int!, $workId: Int, $locale: [Locales]!) {
    Content(
      where: {
        ContentLink: {
          Id: {
            eq: $id
          }
          WorkId: {
            eq: $workId
          }
        }
      },
      locale: $locale
      limit: 1,
      orderBy: {
        ContentLink: {
            WorkId: DESC
        }
        Status: ASC
      }
    )
    {
      total,
      items {
        route: RelativePath
        url: Url
        locale:Language { name: Name }
        contentLink: ContentLink { id: Id, workId: WorkId, guidValue: GuidValue }
        name: Name,
        contentType: ContentType,
        slug: RouteSegment,
        changed: Changed,
        published: StartPublish
        siteId: SiteId
      }
    }
  }`
}