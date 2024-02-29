import { MetadataRoute } from 'next'
import ChannelConfig from '@/site-config'

export default async function robots(): Promise<MetadataRoute.Robots> {
    const host = ChannelConfig.defaultDomain
    const sitemap = new URL('/sitemap.xml', ChannelConfig.getPrimaryDomain()).href

    return {
        rules: {
            userAgent: '*',
            disallow: '/',
        },
        sitemap,
        host
    }
}