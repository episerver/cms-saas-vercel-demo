import { NextResponse } from 'next/server'

const AUTH_COOKIE_NAME = 'cms_admin_token'

async function handler(): Promise<NextResponse> {
  const response = NextResponse.json({ success: true })
  response.cookies.set(AUTH_COOKIE_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 0,
    path: '/',
  })
  return response
}

export const POST = handler
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
