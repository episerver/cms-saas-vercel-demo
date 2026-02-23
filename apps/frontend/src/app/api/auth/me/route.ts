import { NextResponse, type NextRequest } from 'next/server'
import crypto from 'crypto'

const AUTH_COOKIE_NAME = process.env.CMS_AUTH_COOKIE_NAME || 'cms_admin_token'
const CMS_AUTH_TOKEN_SECRET = process.env.CMS_AUTH_TOKEN_SECRET

if (!CMS_AUTH_TOKEN_SECRET) {
  throw new Error('CMS_AUTH_TOKEN_SECRET environment variable is required')
}

type MeResponse = {
  authenticated: boolean
  email?: string
}

function verifyToken(token: string): { valid: boolean; email?: string } {
  try {
    const [payloadB64, signature] = token.split('.')
    if (!payloadB64 || !signature) return { valid: false }

    const payload = Buffer.from(payloadB64, 'base64').toString('utf-8')
    const hmac = crypto.createHmac('sha256', CMS_AUTH_TOKEN_SECRET!)
    hmac.update(payload)
    const expectedSignature = hmac.digest('hex')

    const sigBuf = Buffer.from(signature, 'hex')
    const expectedBuf = Buffer.from(expectedSignature, 'hex')
    if (sigBuf.length !== expectedBuf.length) return { valid: false }
    if (!crypto.timingSafeEqual(sigBuf, expectedBuf)) return { valid: false }

    const data: unknown = JSON.parse(payload)
    if (typeof data !== 'object' || data === null || Array.isArray(data))
      return { valid: false }

    const { exp, email } = data as Record<string, unknown>
    if (typeof exp !== 'number' || typeof email !== 'string')
      return { valid: false }

    if (exp < Date.now()) return { valid: false }

    return { valid: true, email }
  } catch {
    return { valid: false }
  }
}

async function handler(req: NextRequest): Promise<NextResponse<MeResponse>> {
  const token = req.cookies.get(AUTH_COOKIE_NAME)?.value

  if (!token) {
    return NextResponse.json({ authenticated: false })
  }

  const result = verifyToken(token)
  if (result.valid) {
    return NextResponse.json({ authenticated: true, email: result.email })
  }

  return NextResponse.json({ authenticated: false })
}

export const GET = handler
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
