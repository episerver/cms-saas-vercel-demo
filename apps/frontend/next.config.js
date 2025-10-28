/** 
 * Next.JS Configuration
 * 
 * @type {import('next').NextConfig} 
 */
const nextConfig = {
    compiler: {
        //removeConsole: process.env.NODE_ENV != 'production',
    },
    basePath: "",
    reactStrictMode: true,
    generateEtags: true,
    cleanDistDir: true,
    poweredByHeader: false,
    reactCompiler: true,
    images: {
        remotePatterns: [
            // Optimizely CMS
            {
                protocol: 'https',
                hostname: '*.cms.optimizely.com',
                pathname: '/**'
            },
            // Optimizely Content Recommendations
            {
                protocol: 'https',
                hostname: '*.idio.co',
                pathname: '/**'
            },
            // Optimizely DAM
            {
                protocol: 'https',
                hostname: '*.cmp.optimizely.com',
                pathname: '/**'
            }
        ]
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

// Add the Optimizely DXP Image Loader
/**
 * @type {string|undefined} 
 */
const optimizelyDxpUrl = process.env.NEXT_PUBLIC_OPTIMIZELY_CMS_URL
if (optimizelyDxpUrl) {
    nextConfig.images.loader = 'custom';
    nextConfig.images.loaderFile = './src/cloudflareLoader.js'; // Use Cloudflare Images for resizing
}

module.exports = nextConfig
