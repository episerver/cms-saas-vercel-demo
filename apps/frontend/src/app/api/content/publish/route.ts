import createPublishApi from '@remkoj/optimizely-cms-nextjs/publish'
import { createClient } from '@remkoj/optimizely-graph-client'

const handler = createPublishApi({
    // The paths to always publish, both in optimized as well as non-optimized mode
    additionalPaths: [
        '/api/content/search',
        '/api/content/articles',
        '/api/me/[[...path]]',
        '/sitemap.xml',
        '/robots.txt'
    ],

    optimizePublish: true,   // When set to enabled, this will try to only publish the content item published by the CMS
    // tags: ['opti-graph'], // Set tags to always purge when publishing content
    client: () => createClient(undefined, undefined, {
        nextJsFetchDirectives: true,
        cache: false,
        queryCache: false,
    }) // The Optimizely Graph Client to use when resolving paths to publish
})

export const dynamic = 'force-dynamic'      // Make sure all API-Requests are executed
export const dynamicParams = true           // Make sure all matching routes are always executed
export const revalidate = 0                 // Don't cache
export const fetchCache = 'force-no-store'  // Don't cache
export const runtime = 'nodejs'             // Run on Node.JS
export const GET = handler
export const POST = handler