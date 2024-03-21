import { applyConfigDefaults, readEnvironmentVariables, validateConfig } from '@remkoj/optimizely-graph-client/config'
const optiConfig = applyConfigDefaults(readEnvironmentVariables())
if (!validateConfig(optiConfig, true)) {
    throw new Error("Invalid Optimizely Graph Configuration")
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "",
    cleanDistDir: true,
    reactStrictMode: true,
    images: {
        loader: 'custom',
        loaderFile: './src/cloudflareLoader.js', // Use Cloudflare Images for resizing
        remotePatterns: []
    }
}

// Add the configured Optimizely DXP URL to the image domains
const optimizelyDxpUrl = optiConfig.dxp_url
if (optimizelyDxpUrl) {
    const optimizelyDxpHost = new URL(optimizelyDxpUrl)

    nextConfig.images.remotePatterns.push({
        protocol: optimizelyDxpHost.protocol.replace(":",""),
        hostname: optimizelyDxpHost.hostname,
        port: optimizelyDxpHost.port,
        pathname: (optimizelyDxpHost.pathname || '/') + '**'
    })
}

if (process.env.NODE_ENV != 'production') {
    console.log("Frontend domain:", optiConfig.deploy_domain)
    console.log("Next.JS Config:", JSON.stringify(nextConfig, undefined, 2))
}

export default nextConfig