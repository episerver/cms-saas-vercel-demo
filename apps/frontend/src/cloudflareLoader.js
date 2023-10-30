// Docs: https://developers.cloudflare.com/images/url-format
const CF_URL = process.env.DXP_URL || "https://example.com"

export default function cloudflareLoader({ src, width, quality }) {
    const params = [`width=${width}`, `quality=${quality || 75}`, 'format=auto']
    const path = `/cdn-cgi/image/${params.join(',')}/${src}`
    return new URL(path, CF_URL).href
}