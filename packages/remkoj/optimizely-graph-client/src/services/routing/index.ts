import type { ContentLinkWithLocale, Route } from "./types.js"
import { gql } from "graphql-request"
import createClient, { type IOptiGraphClient, isContentGraphClient } from '../../client/index.js'
import type { ContentGraphConfig } from '../../types.js'

export class RouteResolver {
    private _cgClient : IOptiGraphClient

    /**
     * Create a new Route Resolver
     * 
     * @param client        ContentGraph configuration override
     * @param apolloConfig  Apollo Client configuration override
     */
    public constructor (clientOrConfig?: IOptiGraphClient | ContentGraphConfig)
    {

        this._cgClient = isContentGraphClient(clientOrConfig) ? clientOrConfig : createClient(clientOrConfig)
    }

    public async getRoutes(siteId?: string) : Promise<Route[]>
    {
        let page = await this._cgClient.request<GetAllRoutes.Result, GetAllRoutes.Variables>(GetAllRoutes.query, { siteId, typeFilter: "Page" })
        let results = page?.Content?.items ?? []
        const totalCount = page?.Content?.total ?? 0
        const cursor = page?.Content?.cursor ?? ''

        if (totalCount > 0 && cursor !== '' && totalCount > results.length)
            while ((page?.Content?.items?.length ?? 0) > 0 && results.length < totalCount) 
            {
                page = await this._cgClient.query<GetAllRoutes.Result, GetAllRoutes.Variables>({ 
                    document: GetAllRoutes.query, 
                    variables: { 
                        cursor,
                        siteId,
                        typeFilter: "Page" 
                    }
                })
                results = results.concat(page.Content?.items ?? [])
            }

        return results.map(this.convertResponse)
    }

    public async getContentInfoByPath(path: string, siteId?: null) : Promise<undefined | Route>
    {
        if (this._cgClient.debug)
            console.log(`Resolving content info for ${ path } on ${ siteId ? "site " + siteId : "all sites"}`)

        const resultSet = await this._cgClient.query<GetRouteByPath.Result, GetRouteByPath.Variables>({
            document: GetRouteByPath.query,
            variables: {
                path,
                siteId
            }
        })

        if ((resultSet.Content?.items?.length ?? 0) === 0) {
            if (this._cgClient.debug) console.warn("No items in the resultset");
            return undefined
        }

        if ((resultSet.Content?.items?.length ?? 0) > 1)
            throw new Error("Ambiguous URL provided, did you omit the siteId in a multi-channel setup?")

        if (this._cgClient.debug)
            console.log(`Resolved content info for ${ path } to:`, resultSet.Content.items[0])
        
        return this.convertResponse(resultSet.Content.items[0])
    }

    public async getContentInfoById(contentId: string, locale: string) : Promise<undefined | Route>
    {
        const [ id, workId ] = this.parseIdString(contentId)
        const variables : GetRouteById.Variables = {
            id,
            workId,
            locale: locale.replaceAll('-','_')
        }

        if (this._cgClient.debug)
            console.log("Resolving content by id:", JSON.stringify(variables))

        const resultSet = await this._cgClient.query<GetRouteById.Result, GetRouteById.Variables>({
            document: GetRouteById.query,
            variables
        })

        if (resultSet.Content?.total >= 1) {
            if (this._cgClient.debug && resultSet.Content?.total > 1)
                console.warn(`Received multiple entries with this ID, returning the first one from: ${ (resultSet.Content?.items || []).map(x => { return `${ x.contentLink.id }_${ x.contentLink.workId }_${ x.locale.name }`}).join('; ') }`)
            return this.convertResponse(resultSet.Content.items[0])
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

export default RouteResolver

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
    }

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