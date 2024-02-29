// Docs: https://developers.cloudflare.com/images/url-format
import SiteConfig from './site-config'

export default function cloudflareLoader({ src, width, quality }) {
    const srcUrl = new URL(src, SiteConfig.getPrimaryDomain())
    const params = [
        `width=${width}`,
        `quality=${quality || 75}`,
        'format=auto'
    ]
    if (srcUrl.hostname == 'localhost')
        return srcUrl.href
    const path = `/cdn-cgi/image/${params.join(',')}/${srcUrl.href}`
    return new URL(path, SiteConfig.getEditDomain()).href
}