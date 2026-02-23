import { NextResponse, type NextRequest } from 'next/server'
import { createClient, IntegrationApi } from '@remkoj/optimizely-cms-api'
import crypto from 'crypto'
import { revalidatePath } from 'next/cache'

const { VersionStatus } = IntegrationApi

const AUTH_COOKIE_NAME = process.env.CMS_AUTH_COOKIE_NAME || 'cms_admin_token'
const CMS_AUTH_CMS_AUTH_TOKEN_SECRET = process.env.CMS_AUTH_CMS_AUTH_TOKEN_SECRET

if (!CMS_AUTH_CMS_AUTH_TOKEN_SECRET) {
  throw new Error('CMS_AUTH_CMS_AUTH_TOKEN_SECRET environment variable is required')
}

type UpdateHeroRequest = {
  contentKey: string
  heading?: string
  description?: string
  locale?: string
}

type UpdateHeroResponse = {
  success: boolean
  error?: string
}

function verifyToken(token: string): { valid: boolean; email?: string } {
  try {
    const [payloadB64, signature] = token.split('.')
    if (!payloadB64 || !signature) return { valid: false }

    const payload = Buffer.from(payloadB64, 'base64').toString('utf-8')
    const hmac = crypto.createHmac('sha256', CMS_AUTH_TOKEN_SECRET)
    hmac.update(payload)
    const expectedSignature = hmac.digest('hex')

    const sigBuf = Buffer.from(signature, 'utf-8')
    const expectedBuf = Buffer.from(expectedSignature, 'utf-8')
    if (sigBuf.length !== expectedBuf.length || !crypto.timingSafeEqual(sigBuf, expectedBuf)) {
      return { valid: false }
    }

    const data = JSON.parse(payload)
    if (data.exp < Date.now()) return { valid: false }

    return { valid: true, email: data.email }
  } catch {
    return { valid: false }
  }
}

async function handler(req: NextRequest): Promise<NextResponse<UpdateHeroResponse>> {
  // Verify authentication
  const token = req.cookies.get(AUTH_COOKIE_NAME)?.value
  if (!token || !verifyToken(token).valid) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body: UpdateHeroRequest = await req.json()
    const { contentKey, heading, description, locale = 'en' } = body

    if (!contentKey) {
      return NextResponse.json({ success: false, error: 'Content key is required' }, { status: 400 })
    }

    // Create CMS API client
    const cmsClient = createClient()

    // Get current version to find the latest draft or published version
    const versions = await cmsClient.content.contentListVersions(contentKey, [locale], [VersionStatus.PUBLISHED, VersionStatus.DRAFT])

    if (!versions.items || versions.items.length === 0) {
      return NextResponse.json({ success: false, error: 'Content not found' }, { status: 404 })
    }

    // Get the latest version (prefer draft, fallback to published)
    const currentVersion = versions.items.find(v => v.status === 'draft') || versions.items[0]

    if (!currentVersion.version) {
      return NextResponse.json({ success: false, error: 'Version not found' }, { status: 404 })
    }

    // Build the update payload with only changed properties
    const properties: Record<string, unknown> = {}
    if (heading !== undefined) {
      properties['Heading'] = heading
    }
    if (description !== undefined) {
      // Description is a rich text field (HTML format)
      properties['Description'] = description
    }

    // Update the content version
    await cmsClient.content.contentPatchVersion(
      contentKey,
      currentVersion.version,
      {
        key: contentKey,
        displayName: currentVersion.displayName, // Keep existing display name
        properties,
        status: VersionStatus.PUBLISHED, // Immediately publish
      },
      locale,
      true // skipValidation
    )

    // Revalidate the home page to show updated content
    revalidatePath('/')
    revalidatePath(`/${locale}`)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating hero:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}

export const POST = handler
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
