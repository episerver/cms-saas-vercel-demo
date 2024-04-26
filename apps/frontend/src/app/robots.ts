import { MetadataRoute } from 'next'

export default async function robots(): Promise<MetadataRoute.Robots> {
    const domain = process.env.NEXT_PUBLIC_SITE_DOMAIN
    const scheme = domain && (domain.startsWith("localhost") || domain.endsWith(".local")) ? 'http' : 'https'
    const host = domain ? new URL(`${scheme}://${domain}`) : undefined
    const sitemap = new URL('/sitemap.xml', host).href

    return {
        rules: {
            userAgent: '*',
            disallow: '/',
        },
        sitemap,
        host: host?.href
    }
}