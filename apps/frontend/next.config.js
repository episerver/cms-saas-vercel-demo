const isNonProduction = process.env.NODE_ENV != 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        removeConsole: !isNonProduction
    },
    basePath: "",
    cleanDistDir: true,
    images: {
        loader: 'custom',
        loaderFile: './src/cloudflareLoader.js', // Use Cloudflare Images for resizing
        remotePatterns: []
    },
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

module.exports = nextConfig