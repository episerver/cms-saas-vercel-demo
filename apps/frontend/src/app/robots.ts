import { MetadataRoute } from 'next'
import { resolveCurrentDomain } from '@/lib/resolveCurrentDomain'

export default async function robots(): Promise<MetadataRoute.Robots> {
    const host = resolveCurrentDomain()
    const sitemap = host ? new URL('/sitemap.xml', host).href : undefined

    return {
        rules: {
            userAgent: '*',
            disallow: '/',
        },
        sitemap,
        host: host?.href
    }
}