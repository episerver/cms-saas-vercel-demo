import type { ContentLinkWithLocale, Route } from "./types.js";
import { type IOptiGraphClient } from '../../client/index.js';
import type { ContentGraphConfig } from '../../types.js';
export declare class RouteResolver {
    private _cgClient;
    /**
     * Create a new Route Resolver
     *
     * @param client        ContentGraph configuration override
     * @param apolloConfig  Apollo Client configuration override
     */
    constructor(clientOrConfig?: IOptiGraphClient | ContentGraphConfig);
    getRoutes(siteId?: string): Promise<Route[]>;
    getContentInfoByPath(path: string, siteId?: null): Promise<undefined | Route>;
    getContentInfoById(contentId: string, locale: string): Promise<undefined | Route>;
    routeToContentLink(route: Route): ContentLinkWithLocale;
    protected parseIdString(id: string): [number, number | null];
    protected convertResponse(item: GetAllRoutes.Route): Route;
}
export default RouteResolver;
export declare namespace GetAllRoutes {
    type Route = {
        path: string;
        siteId: string;
        locale: {
            name: string;
        };
        contentLink: {
            id?: number | null;
            workId?: number | null;
            guidValue?: string | null;
        };
        name: string;
        contentType: string[];
        slug: string;
        changed: string;
        published: string;
        url: string;
    };
    type Result = {
        Content: {
            items: Route[];
            cursor: string;
            total: number;
        };
    };
    type Variables = {
        cursor?: string;
        pageSize?: number;
        typeFilter?: string | string[];
        siteId?: string;
    };
    const query: string;
}
export declare namespace GetRouteByPath {
    type Variables = {
        path: string;
        siteId?: string | null;
    };
    type Result = {
        Content: {
            total: number;
            items: GetAllRoutes.Route[];
        };
    };
    const query: string;
}
export declare namespace GetRouteById {
    type Variables = {
        id: number;
        workId?: number | null;
        locale?: string | string[];
    };
    type Result = {
        Content: {
            total: number;
            items: GetAllRoutes.Route[];
        };
    };
    const query: string;
}
