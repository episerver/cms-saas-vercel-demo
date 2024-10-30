/**
 * Docs: https://developers.cloudflare.com/images/url-format
 * 
 * @param   {{ src: string, width: number, height?: number, quality?: number }}  param0  The Loader parameters
 * @returns The Cloudflare Image URL
 */
export default function cloudflareLoader({ src, width, height, quality, ...props }) {
    const cmsUrl = process.env.NEXT_PUBLIC_OPTIMIZELY_CMS_URL    
    const domain = process.env.NEXT_PUBLIC_SITE_DOMAIN
    const scheme = domain && (domain.startsWith("localhost") || domain.endsWith(".local")) ? 'http' : 'https'
    const frontendUrl = domain ? new URL(`${scheme}://${domain}`).href : undefined
    if (!cmsUrl || !frontendUrl)
        return src
    const srcUrl = new URL(src, frontendUrl)
    const params = [
        `width=${ width }`,
        `quality=${quality || 75}`,
        'format=auto'
    ]
    if (height && height > 0) {
        params.push(`height=${ height }`)
        params.push('fit=cover')
    }
    if (srcUrl.hostname == 'localhost')
        return srcUrl.href
    const path = `/cdn-cgi/image/${params.join(',')}/${srcUrl.href}`
    return new URL(path, cmsUrl).href
}