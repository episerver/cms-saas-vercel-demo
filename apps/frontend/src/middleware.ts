import { NextResponse, NextRequest } from "next/server"
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { v4 as createGuid } from 'uuid'
import siteConfig from '@/site-config'

// Read the site configuration, default to "en" as only routed language if there's no configuration
const defaultLocale : string = siteConfig.defaultLocale
const locales : string[] = siteConfig.locales.map(x => x.code)
const slugs : string[] = siteConfig.locales.map(x => x.slug)

// Detect if the middleware should output status updates to the console
const DEBUG = process.env.NODE_ENV == 'development'

function getLocale(request: NextRequest) : string
{
    const headers : {[key: string]: string} = {}
    request.headers.forEach((v, k) => { headers[k] = v})
    const languages = new Negotiator({ headers }).languages()
    return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest)
{
    if (DEBUG)
        console.log("Middleware caught request for: ", request.nextUrl.href)
    const pathname = request.nextUrl.pathname

    // If we don't have a locale, redirect to the same path with locale
    const pathnameIsMissingLocale = slugs.every(
        (slug) => !pathname.startsWith(`/${slug}/`) && pathname !== `/${slug}`
    )
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)
        const slug = (siteConfig.locales.filter(x => x.code == locale)[0] || { code: defaultLocale, slug: defaultLocale }).slug
        return NextResponse.redirect(
            new URL(`/${ slug }${ pathname }`, request.url)
        )
    }

    // Then make sure we have a visitorId cookie
    const visitorId = request.cookies.get('visitorId')?.value ?? createGuid()
    const response = NextResponse.next()
    response.cookies.set({
        name: 'visitorId', 
        value: visitorId,
        sameSite: "strict",
        path: "/",
        secure: !DEBUG
    })
    return response
}

export const config = {
    matcher: [
      // Skip all internal paths and paths with a '.'
      '/((?!.*\\.|ui|api|assets|_next\\/static|_next\\/image).*)',
    ],
  }