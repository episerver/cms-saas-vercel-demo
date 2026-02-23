import { NextRequest, NextResponse } from 'next/server'

const CMS_API_BASE = 'https://api.cms.optimizely.com'
const CMS_CLIENT_ID = process.env.OPTIMIZELY_CMS_CLIENT_ID
const CMS_CLIENT_SECRET = process.env.OPTIMIZELY_CMS_CLIENT_SECRET

// The parent experience key for the homepage (Mosey Bank)
const EXPERIENCE_KEY = '7e9d73a0f7bd416aab12ef33d1d239c6'

let cachedToken: { token: string; expiresAt: number } | null = null

async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    return cachedToken.token
  }

  const res = await fetch(`${CMS_API_BASE}/oauth/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=client_credentials&client_id=${encodeURIComponent(CMS_CLIENT_ID ?? '')}&client_secret=${encodeURIComponent(CMS_CLIENT_SECRET ?? '')}`,
    cache: 'no-store',
  })
  if (!res.ok) {
    const errorText = await res.text()
    console.error('OAuth failed:', res.status, errorText)
    throw new Error('Failed to get access token')
  }
  const data = await res.json()
  console.log('Got access token, length:', data.access_token?.length)

  const expiresInMs = (data.expires_in ?? 3600) * 1000
  cachedToken = {
    token: data.access_token,
    expiresAt: Date.now() + expiresInMs - 60_000, // refresh 60s before expiry
  }

  return data.access_token
}

// Helper to find an element in the composition tree
// Searches by node.id first (used by update API), then by component.key as fallback
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function findElementByKey(nodes: any[], targetKey: string): any | null {
  for (const node of nodes) {
    // Check node.id first (this is what the update API uses)
    if (node.id === targetKey) {
      return node.component
    }
    // Also check component.key as fallback
    const component = node.component
    if (component?.key === targetKey) {
      return component
    }
    if (node.nodes && node.nodes.length > 0) {
      const found = findElementByKey(node.nodes, targetKey)
      if (found) return found
    }
  }
  return null
}

async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const contentKey = searchParams.get('contentKey')
    const fieldName = searchParams.get('fieldName')
    const rawLocale = (searchParams.get('locale') || 'en').trim().toLowerCase()
    const supportedLocales = ['en', 'es', 'fr', 'de', 'sv', 'nl', 'ja', 'zh', 'ko', 'pt', 'it', 'no', 'da', 'fi']
    const locale = supportedLocales.includes(rawLocale) ? rawLocale : 'en'

    if (!contentKey || !fieldName) {
      return NextResponse.json({ success: false, error: 'Missing contentKey or fieldName' }, { status: 400 })
    }

    const token = await getAccessToken()
    const authHeader = { 'Authorization': `Bearer ${token}` }

    // Get all versions to find the latest
    const versionsRes = await fetch(
      `${CMS_API_BASE}/preview3/experimental/content/${EXPERIENCE_KEY}/versions?statuses=published,draft`,
      { headers: authHeader, cache: 'no-store' }
    )
    if (!versionsRes.ok) throw new Error('Failed to get versions')
    const versionsData = await versionsRes.json()

    // API returns {items: [...]} format
    const versions = versionsData.items || versionsData || []

    if (!versions.length) {
      return NextResponse.json({ success: false, error: 'No versions found' }, { status: 404 })
    }

    // Get the latest version (prefer draft, fallback to published)
    const latestVersion = versions.find((v: { status: string }) => v.status === 'draft') || versions[0]

    if (process.env.NODE_ENV === 'development') {
      console.log('Latest version:', latestVersion.version, 'status:', latestVersion.status)
    }

    if (!latestVersion.version) {
      return NextResponse.json({ success: false, error: 'Version number not found in response' }, { status: 500 })
    }

    // Get the full content with composition
    const contentUrl = `${CMS_API_BASE}/preview3/experimental/content/${EXPERIENCE_KEY}/versions/${latestVersion.version}?locale=${locale}`
    console.log('Fetching content from:', contentUrl)

    const contentRes = await fetch(contentUrl, { headers: authHeader, cache: 'no-store' })
    if (!contentRes.ok) {
      const errorText = await contentRes.text()
      console.error('Content fetch failed:', contentRes.status, errorText)
      throw new Error(`Failed to get content: ${contentRes.status}`)
    }
    const content = await contentRes.json()

    if (!content.composition?.nodes) {
      return NextResponse.json({ success: false, error: 'No composition found' }, { status: 404 })
    }

    // Find the element
    const element = findElementByKey(content.composition.nodes, contentKey)
    if (!element) {
      return NextResponse.json({ success: false, error: 'Element not found' }, { status: 404 })
    }

    // Get the field value - validate fieldName to prevent prototype chain access
    const dangerousKeys = ['__proto__', 'constructor', 'prototype']
    if (dangerousKeys.includes(fieldName)) {
      return NextResponse.json({ success: false, error: 'Invalid field name' }, { status: 400 })
    }

    const props = element.properties
    if (typeof props !== 'object' || props === null || !Object.prototype.hasOwnProperty.call(props, fieldName)) {
      return NextResponse.json({ success: false, error: 'Field not found' }, { status: 404 })
    }

    const fieldValue = props[fieldName]

    return NextResponse.json({
      success: true,
      value: fieldValue ?? '',
      contentType: element.contentType
    })
  } catch (error) {
    console.error('Error getting content:', error)
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}

export const GET = handler
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
