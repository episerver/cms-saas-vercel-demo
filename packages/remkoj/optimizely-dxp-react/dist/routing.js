import { gql } from "@apollo/client/core";
import { createNewClient as createClient } from './client';
import getContentGraphConfig, { validateContentGraphConfig } from './config';
const DEBUG = process.env.DXP_DEBUG == '1';
export class RouteResolver {
    _cgClient;
    _config;
    constructor(clientOrToken, config, apolloConfig) {
        this._config = config ?? getContentGraphConfig();
        if (!validateContentGraphConfig(this._config))
            throw new Error("Invalid ContentGraph Configuration");
        if (typeof clientOrToken == 'string' || clientOrToken == undefined)
            this._cgClient = createClient(this._config, clientOrToken, apolloConfig);
        else if (typeof clientOrToken == 'object' && clientOrToken != null && typeof clientOrToken.query == 'function')
            this._cgClient = clientOrToken;
        else
            throw new Error(`The first parameter "clientOrToken" must be either a valid token string or ApolloClient, you've provided a ${typeof clientOrToken}`);
    }
    async getRoutes(siteId) {
        let page = await this._cgClient.query({
            query: GetAllRoutes.query,
            variables: {
                siteId,
                typeFilter: "Page"
            },
            fetchPolicy: "no-cache"
        });
        if (!page?.data) {
            return [];
        }
        let results = page.data?.Content?.items ?? [];
        const totalCount = page.data?.Content?.total ?? 0;
        const cursor = page.data?.Content?.cursor ?? '';
        if (totalCount > 0 && cursor !== '' && totalCount > results.length)
            while ((page.data?.Content?.items?.length ?? 0) > 0 && results.length < totalCount) {
                page = await this._cgClient.query({
                    query: GetAllRoutes.query,
                    variables: {
                        cursor,
                        siteId,
                        typeFilter: "Page"
                    },
                    fetchPolicy: "no-cache"
                });
                results = results.concat(page.data?.Content?.items ?? []);
            }
        return results.map(this.convertResponse);
    }
    async getContentInfoByPath(path, siteId) {
        if (DEBUG)
            console.log(`Resolving content info for ${path} on ${siteId ? "site " + siteId : "all sites"}`);
        const resultSet = await this._cgClient.query({
            query: GetRouteByPath.query,
            variables: {
                path,
                siteId
            }
        });
        if (resultSet.loading) {
            if (DEBUG)
                console.warn("Still loading after result has been awaited");
            return undefined;
        }
        if ((resultSet.data?.Content?.items?.length ?? 0) === 0) {
            if (DEBUG)
                console.warn("No items in the resultset");
            return undefined;
        }
        if ((resultSet.data?.Content?.items?.length ?? 0) > 1)
            throw new Error("Ambiguous URL provided, did you omit the siteId in a multi-channel setup?");
        if (DEBUG)
            console.log(`Resolved content info for ${path} to:`, resultSet.data.Content.items[0]);
        return this.convertResponse(resultSet.data.Content.items[0]);
    }
    async getContentInfoById(contentId, locale) {
        const [id, workId] = this.parseIdString(contentId);
        const variables = {
            id,
            workId,
            locale: locale.replaceAll('-', '_')
        };
        if (DEBUG)
            console.log("Resolving content by id:", JSON.stringify(variables));
        const resultSet = await this._cgClient.query({
            query: GetRouteById.query,
            variables
        });
        if (!(resultSet.loading == false && !resultSet.error))
            return undefined;
        if (resultSet.data.Content?.total >= 1) {
            if (DEBUG && resultSet.data.Content?.total > 1)
                console.warn(`Received multiple entries with this ID, returning the first one from: ${(resultSet.data?.Content?.items || []).map(x => { return `${x.contentLink.id}_${x.contentLink.workId}_${x.locale.name}`; }).join('; ')}`);
            return this.convertResponse(resultSet.data.Content.items[0]);
        }
        return undefined;
    }
    routeToContentLink(route) {
        return {
            id: route.id,
            workId: route.workId,
            guidValue: route.guid,
            locale: route.language
        };
    }
    parseIdString(id) {
        let cId = -1;
        let workId = null;
        if (id.indexOf("_") > 0) {
            [cId, workId] = id.split("_").map(x => {
                try {
                    return Number.parseInt(x, 10);
                }
                catch {
                    return -1;
                }
            });
            if (workId < 0)
                workId = null;
        }
        else {
            try {
                cId = Number.parseInt(id, 10);
            }
            catch {
                cId = -1;
            }
        }
        return [cId, workId];
    }
    convertResponse(item) {
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
        };
    }
}
export var GetAllRoutes;
(function (GetAllRoutes) {
    GetAllRoutes.query = gql `query GetAllRoutes($cursor: String, $pageSize: Int = 100, $typeFilter: [String] = "Page", $siteId: String = null)
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
}`;
})(GetAllRoutes || (GetAllRoutes = {}));
export var GetRouteByPath;
(function (GetRouteByPath) {
    GetRouteByPath.query = gql `query GetRouteByPath($path: String!, $siteId: String) {
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
  }`;
})(GetRouteByPath || (GetRouteByPath = {}));
export var GetRouteById;
(function (GetRouteById) {
    GetRouteById.query = gql `query GetRouteById($id: Int!, $workId: Int, $locale: [Locales]!) {
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
  }`;
})(GetRouteById || (GetRouteById = {}));
