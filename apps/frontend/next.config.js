/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "",
    cleanDistDir: true,
    images: {
        domains: []
    }
}

// Add the configured Optimizely DXP URL to the image domains
const optimizelyDxpUrl = process.env.DXP_URL
if (optimizelyDxpUrl) {
    const optimizelyDxpHost = new URL(optimizelyDxpUrl).host
    nextConfig.images.domains.push(optimizelyDxpHost)
}

console.log("Frontend domain:", process.env.SITE_DOMAIN)
console.log("Next.JS Config:", JSON.stringify(nextConfig, undefined, 2))

module.exports = nextConfig