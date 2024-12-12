//import createPublishApi from '@remkoj/optimizely-cms-nextjs/publish'
import createPublishApi from './_newPublishApi'

const handler = createPublishApi({
    paths: [
        '/',
        '/[[...path]]',
        '/[lang]',
        '/[lang]/[[...path]]',
        '/api/me/[[...path]]'
    ],
    additionalPaths: [
        '/api/content/search',
    ],
    optimizePublish: true
})

export const dynamic = 'force-dynamic'      // Make sure all API-Requests are executed
export const dynamicParams = true           // Make sure all matching routes are always executed
export const revalidate = 0                 // Don't cache
export const fetchCache = 'force-no-store'  // Don't cache
export const runtime = 'edge'             // Run on Node.JS
export const GET = handler
export const POST = handler