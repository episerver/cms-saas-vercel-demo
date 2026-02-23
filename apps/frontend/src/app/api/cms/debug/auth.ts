import { NextResponse, type NextRequest } from 'next/server'

const DEBUG_TOKEN = process.env.CMS_DEBUG_TOKEN

/**
 * Authorize access to debug endpoints.
 * Allowed when:
 *  1. NODE_ENV is 'development', OR
 *  2. A valid debug token is provided via Bearer header or ?token= query param
 *     and matches the CMS_DEBUG_TOKEN environment variable.
 *
 * Returns null if authorized, or a NextResponse (401/403) to send back.
 */
export function authorizeDebugAccess(req: NextRequest): NextResponse | null {
  if (process.env.NODE_ENV === 'development') {
    return null
  }

  if (!DEBUG_TOKEN) {
    return NextResponse.json(
      { success: false, error: 'Debug endpoints are disabled in this environment' },
      { status: 403 }
    )
  }

  const bearerToken = req.headers.get('authorization')?.replace(/^Bearer\s+/i, '')
  const queryToken = req.nextUrl.searchParams.get('token')
  const provided = bearerToken || queryToken

  if (!provided) {
    return NextResponse.json(
      { success: false, error: 'Authentication required' },
      { status: 401 }
    )
  }

  if (provided !== DEBUG_TOKEN) {
    return NextResponse.json(
      { success: false, error: 'Invalid debug token' },
      { status: 403 }
    )
  }

  return null
}
