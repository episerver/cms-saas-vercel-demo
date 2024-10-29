import { NextResponse, type NextRequest } from "next/server"
import { Session } from '@remkoj/optimizely-one-nextjs/api'

/**
 * Demo site middleware
 */
export const middleware = (request: NextRequest) =>
{
    // Make sure we have a known Visitor ID
    const visitorId = Session.getOrCreateVisitorId(request)
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-visitorid', visitorId)

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