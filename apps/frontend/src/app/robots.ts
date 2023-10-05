import { MetadataRoute } from 'next'
import { ChannelRepository } from '@remkoj/optimizely-dxp-react'
import { getServerClient } from '@/lib/client'

const IS_DEV = process.env.NODE_ENV == 'development'

export default async function robots(): Promise<MetadataRoute.Robots> {
    const client = getServerClient()
    const channelRepository = new ChannelRepository(client)
    const host = (await channelRepository.getDefault())?.defaultDomain ?? 'localhost:3000'
    const sitemap = `${IS_DEV ? "http:" : "https:"}//${ host }/sitemap.xml`


    return {
        rules: {
            userAgent: '*',
            disallow: '/',
        },
        sitemap,
        host
    }
}