import { NextResponse, type NextRequest } from 'next/server'
import crypto from 'crypto'

const ADMIN_EMAIL = process.env.CMS_ADMIN_EMAIL
const ADMIN_PASSWORD = process.env.CMS_ADMIN_PASSWORD
const AUTH_COOKIE_NAME = process.env.CMS_AUTH_COOKIE_NAME || 'cms_admin_token'
const CMS_AUTH_TOKEN_SECRET = process.env.CMS_AUTH_TOKEN_SECRET

if (!ADMIN_EMAIL) {
  throw new Error('CMS_ADMIN_EMAIL environment variable is required')
}
if (!ADMIN_PASSWORD) {
  throw new Error('CMS_ADMIN_PASSWORD environment variable is required')
}
if (!CMS_AUTH_TOKEN_SECRET) {
  throw new Error('CMS_AUTH_TOKEN_SECRET environment variable is required')
}

type LoginRequest = {
  email: string
  password: string
}

type LoginResponse = {
  success: boolean
  error?: string
}

function createToken(email: string): string {
  const payload = JSON.stringify({ email, exp: Date.now() + 24 * 60 * 60 * 1000 })
  const hmac = crypto.createHmac('sha256', CMS_AUTH_TOKEN_SECRET)
  hmac.update(payload)
  const signature = hmac.digest('hex')
  return Buffer.from(payload).toString('base64') + '.' + signature
}

export function verifyToken(token: string): { valid: boolean; email?: string } {
  try {
    const [payloadB64, signature] = token.split('.')
    if (!payloadB64 || !signature) return { valid: false }

    const payload = Buffer.from(payloadB64, 'base64').toString('utf-8')
    const hmac = crypto.createHmac('sha256', CMS_AUTH_TOKEN_SECRET)
    hmac.update(payload)
    const expectedSignature = hmac.digest('hex')

    const bufSig = Buffer.from(signature, 'utf-8')
    const bufExpected = Buffer.from(expectedSignature, 'utf-8')
    if (bufSig.length !== bufExpected.length || !crypto.timingSafeEqual(bufSig, bufExpected)) return { valid: false }

    const data = JSON.parse(payload)
    if (data.exp < Date.now()) return { valid: false }

    return { valid: true, email: data.email }
  } catch {
    return { valid: false }
  }
}

async function handler(req: NextRequest): Promise<NextResponse<LoginResponse>> {
  if (req.method !== 'POST') {
    return NextResponse.json({ success: false, error: 'Method not allowed' }, { status: 405 })
  }

  try {
    const body: LoginRequest = await req.json()
    const { email, password } = body

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const token = createToken(email)
      const response = NextResponse.json({ success: true })
      response.cookies.set(AUTH_COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60, // 24 hours
        path: '/',
      })
      return response
    }

    return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 })
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 })
  }
}

export const POST = handler
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
