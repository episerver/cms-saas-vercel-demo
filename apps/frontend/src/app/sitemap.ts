import type { MetadataRoute } from "next"
import { RouteResolver } from "@remkoj/optimizely-graph-client"

export default async function sitemap() : Promise<MetadataRoute.Sitemap>
{
    const resolver = new RouteResolver()
    const routes = await resolver.getRoutes();
    return routes.map(r => { return {
        url: r.url.href,
        lastModified: r.changed ?? new Date(),
        changeFrequency: "daily",
        priority: 1
    }})
}

export const revalidate = 21600 // Revalidate at a minimum every 6 hours