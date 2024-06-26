/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "",
    cleanDistDir: true,
    images: {
        loader: 'custom',
        loaderFile: './src/cloudflareLoader.js', // Use Cloudflare Images for resizing
        remotePatterns: []
    }
}

// Add the configured Optimizely DXP URL to the image domains
const optimizelyDxpUrl = process.env.OPTIMIZELY_CMS_URL
if (optimizelyDxpUrl) {
    const optimizelyDxpHost = new URL(optimizelyDxpUrl)

    nextConfig.images.remotePatterns.push({
        protocol: optimizelyDxpHost.protocol.replace(":",""),
        hostname: optimizelyDxpHost.hostname,
        port: optimizelyDxpHost.port,
        pathname: (optimizelyDxpHost.pathname || '/') + '**'
    })
}

/*if (process.env.NODE_ENV != 'production') {
    console.log("Frontend domain:", process.env.SITE_DOMAIN)
    console.log("Next.JS Config:", JSON.stringify(nextConfig, undefined, 2))
}*/

module.exports = nextConfig