const isNonProduction = process.env.NODE_ENV != 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        removeConsole: !isNonProduction
    },
    basePath: "",
    reactStrictMode: true,
    generateEtags: true,
    cleanDistDir: true,
    images: {
        loader: 'custom',
        loaderFile: './src/cloudflareLoader.js', // Use Cloudflare Images for resizing
        remotePatterns: []
    },
    experimental: {
        serverActions: {
          allowedOrigins: [
            '*.webproofing.cmp.optimizely.com', // Optimizely CMP Preview
            'www.optimizelyedit.com/' // Optimizely Web Experimentation & Personalization Editor
          ],
        }
    }
}

// Add the configured Optimizely DXP URL to the image domains
const optimizelyDxpUrl = process.env.OPTIMIZELY_CMS_URL
if (optimizelyDxpUrl) {
    try {
        const optimizelyDxpHost = new URL(optimizelyDxpUrl)
        nextConfig.images.remotePatterns.push({
            protocol: optimizelyDxpHost.protocol.replace(":",""),
            hostname: optimizelyDxpHost.hostname,
            port: optimizelyDxpHost.port,
            pathname: (optimizelyDxpHost.pathname || '/') + '**'
        })
    } catch {
        // Ignored on purpose, invalid domain
    }
}

module.exports = nextConfig