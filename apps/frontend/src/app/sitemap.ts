import type { MetadataRoute } from "next"
import { RouteResolver } from "@remkoj/optimizely-dxp-react"

export default async function sitemap() : Promise<MetadataRoute.Sitemap>
{
    const resolver = new RouteResolver()
    const routes = await resolver.getRoutes();
    return routes.map(r => { return {
        url: r.url.href,
        lastModified: r.changed ?? new Date()
    }})
}

export const runtime = 'edge' //Uncomment to move to React 18 Streaming