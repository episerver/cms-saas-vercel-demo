import { NextResponse, type NextRequest, type NextProxy, type NextFetchEvent, type ProxyConfig } from "next/server";
import { Session } from "@remkoj/optimizely-one-nextjs/api";
import { getUserContext } from "./opti";
import { isNonEmptyString } from "@remkoj/optimizely-cms-react/utils";

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
export const proxy = withSessionCookie(async (request: NextRequest) => {
  // Make sure we have a known Visitor ID
  const visitorId = Session.getOrCreateVisitorId(request);

  // Expose the search params & visitor Id to server side logic
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-visitorid", visitorId);
  requestHeaders.set("x-search", request.nextUrl.search);
  requestHeaders.set("x-siteId", request.nextUrl.host);

  // Get FX instance
  const fx = await getUserContext(visitorId, { siteId: request.nextUrl.host });
  if (fx) {
    const path = request.nextUrl.pathname;
    const basePath = request.nextUrl.basePath;
    const appPath =
      basePath.length > 0 && path.startsWith(basePath)
        ? path.substring(basePath.length)
        : path;
    const decisionKey =
      "pagevariant-" +
      (appPath.startsWith("/") ? appPath.substring(1) : appPath).replaceAll(
        "/",
        "-"
      );
    const decision = await fx.decideAsync(decisionKey);
    if (decision.enabled) {
      if (isNonEmptyString(decision.variables.variant)) {
        console.log(
          `[Optimizely CMS Page Variants] Using variant ${decision.variables.variant} for ${path}`
        );
        const newPath =
          request.nextUrl.pathname + "/var:" + decision.variables.variant;
        return NextResponse.rewrite(new URL(newPath, request.nextUrl), {
          headers: {
            "X-VariantName": decision.variables.variant
          },
          request: {
            headers: requestHeaders,
          },
        });
      }
    }
  }

  // Forward request with new headers
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
});

function withSessionCookie(extendedMiddleware: NextProxy) : NextProxy
{
    async function sessionCoookieMiddleware(request: NextRequest, event: NextFetchEvent) : Promise<NextResponse>
    {
        const visitorId = Session.getOrCreateVisitorId(request);
        const response = (await extendedMiddleware(request, event)) as NextResponse
        Session.addVisitorId(response, visitorId);
        return response
    }
    return sessionCoookieMiddleware
}

export const config : ProxyConfig & { runtime?: 'nodejs' } = {
  matcher: [
    // Skip all internal paths and paths with a '.'
    "/((?!.*\\.|api|assets|preview|_next\\/static|_next\\/image|_vercel).*)",
  ],
};