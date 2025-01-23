import { NextResponse, type NextRequest } from "next/server"
import { Session } from '@remkoj/optimizely-one-nextjs/api'

// To support Optimizely CMS 12 Edit URLs, wrap your middleware with the
// `withEditFallback` wrapper show here.
// import { withEditFallback } from '@remkoj/optimizely-cms-nextjs/preview'

/**
 * Demo site middleware, which performs two main tasks:
 * - Assign a visitor identifier to every visitor of the website
 * - Make the search parameters available to all pages through
 *   an header, which makes them usable in server components without 
 *   passing them down from a page.
 * 
 * Make sure that the components using these custom request headers are
 * wrapped in a Suspense component to switch to streaming for these 
 * components.
 */
export const middleware = (request: NextRequest) =>
{
    // Make sure we have a known Visitor ID
    const visitorId = Session.getOrCreateVisitorId(request)
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-visitorid', visitorId)

    // Expose the search params
    requestHeaders.set('x-search', request.nextUrl.search)

    const response = NextResponse.next({
        request: {
            headers: requestHeaders
        }
    })
    Session.addVisitorId(response, visitorId)
    return response
}

export const config = {
    matcher: [
      // Skip all internal paths and paths with a '.'
      '/((?!.*\\.|api|assets|_next\\/static|_next\\/image|_vercel).*)',
    ]
}