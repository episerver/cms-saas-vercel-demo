import SiteConfig from './site-config'

/**
 * Cloudflare images loader, based upon the example from nextjs.org. This is
 * based upon the availability of Cloudflare Images with both the PaaS and SaaS
 * edition of the Optimizely CMS
 * 
 * @see         https://developers.cloudflare.com/images/url-format
 * @see         https://nextjs.org/docs/pages/api-reference/next-config-js/images#cloudflare
 * @param       {{src: string, width: number, quality: number}}     param0      The properties provided by the \<Image \/\> component
 * @returns     { string }  The URL to load the optimized image from
 */
export default function cloudflareLoader({ src, width, quality }) {
    // Build Image URL
    const srcUrl = new URL(src, SiteConfig.getPrimaryDomain())
    if (srcUrl.hostname == 'localhost')
        return srcUrl.href

    // Build Cloudflare Images resized image URL
    const params = [
        `width=${width}`,
        `quality=${quality || 75}`,
        'format=auto'
    ]
    const path = `/cdn-cgi/image/${params.join(',')}/${srcUrl.href}`
    return new URL(path, SiteConfig.getCmsUrl()).href
}