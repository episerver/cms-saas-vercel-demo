import { NextResponse, type NextRequest } from "next/server"
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { Session } from '@remkoj/optimizely-one-nextjs/api'

// Read the site configuration, default to "en" as only routed language if there's no configuration
const defaultLocale = 'en'
const locales = ['en','nl']
const slugs = ['en','nl']
const DEBUG = process.env.NODE_ENV == 'development'

/**
 * Resolve the requested ISO Language code from the NextRequest and return it
 * 
 * @param       request     The incoming request from which the locale needs to
 *                          be fetched
 * @returns     The requested ISO Language Code from the request
 */
/*function getLocale(request: NextRequest) : string
{
    const headers : {[key: string]: string} = {}
    request.headers.forEach((v, k) => { headers[k] = v})
    const languages = new Negotiator({ headers }).languages()
    return match(languages, locales, defaultLocale)
}*/

export function middleware(request: NextRequest)
{
    /*const pathname = request.nextUrl.pathname

    // If we don't have a locale, redirect to the same path with locale
    const pathnameIsMissingLocale = slugs.every(slug => !pathname.toLowerCase().startsWith(`/${slug.toLowerCase()}/`) && pathname !== `/${slug.toLowerCase()}`)
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)
        const slug = locale
        if (DEBUG)
            console.log(`[Middleware] Detected locale missing, redirecting to /${ slug }${ pathname }`)
        return NextResponse.redirect(new URL(`/${ slug }${ pathname }`, request.url), {
            status: DEBUG ? 302 : 301
        })
    }*/

    // Then make sure we have a visitorId cookie and move it forward in expiry
    const visitorId = Session.getOrCreateVisitorId(request)
    const response = NextResponse.next()
    Session.addVisitorId(response, visitorId)
    return response
}

export const config = {
    matcher: [
      // Skip all internal paths and paths with a '.'
      '/((?!.*\\.|ui|api|assets|_next\\/static|_next\\/image|_vercel).*)',
    ]
}