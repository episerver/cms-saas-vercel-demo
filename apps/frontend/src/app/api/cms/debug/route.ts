import { NextResponse, type NextRequest } from 'next/server'
import { createClient, IntegrationApi } from '@remkoj/optimizely-cms-api'
import { authorizeDebugAccess } from './auth'

const { VersionStatus } = IntegrationApi

export async function GET(req: NextRequest) {
  const authError = authorizeDebugAccess(req)
  if (authError) return authError

  try {
    const cmsClient = createClient()
    const searchKey = req.nextUrl.searchParams.get('key')
    const contentType = req.nextUrl.searchParams.get('type')
    const pageSize = parseInt(req.nextUrl.searchParams.get('size') || '50')

    // If a specific key is requested, try various ways to access it
    if (searchKey) {
      const results: Record<string, unknown> = {}

      // Try to get metadata
      try {
        const metadata = await cmsClient.content.contentGetMetadata(searchKey)
        results.metadata = metadata
      } catch (e) {
        results.metadataError = e instanceof Error ? e.message : 'Failed'
      }

      // Try to list versions without locale
      try {
        const versions = await cmsClient.content.contentListVersions(searchKey)
        results.versionsNoLocale = versions
      } catch (e) {
        results.versionsNoLocaleError = e instanceof Error ? e.message : 'Failed'
      }

      // Try to list versions with NEUTRAL
      try {
        const versions = await cmsClient.content.contentListVersions(searchKey, ['NEUTRAL'])
        results.versionsNeutral = versions
      } catch (e) {
        results.versionsNeutralError = e instanceof Error ? e.message : 'Failed'
      }

      // Try to get a specific version directly
      try {
        const version = await cmsClient.content.contentGetVersion(searchKey, 'published')
        results.publishedVersion = version
      } catch (e) {
        results.publishedVersionError = e instanceof Error ? e.message : 'Failed'
      }

      return NextResponse.json({
        success: Object.keys(results).some(k => !k.includes('Error')),
        searchKey,
        results,
      })
    }

    // List all content versions to see what's available
    const allVersions = await cmsClient.content.contentListAllVersions(
      undefined, // all locales
      [VersionStatus.PUBLISHED],
      0, // pageIndex
      pageSize
    )

    // Get a summary of available content, filtering by type if specified
    let items = allVersions.items || []
    if (contentType) {
      items = items.filter(item =>
        item.contentType?.toLowerCase().includes(contentType.toLowerCase())
      )
    }

    const summary = items.map(item => ({
      key: item.key,
      displayName: item.displayName,
      contentType: item.contentType,
      status: item.status,
      version: item.version,
    }))

    // Get unique content types
    const contentTypes = [...new Set(allVersions.items?.map(item => item.contentType).filter(Boolean))]

    return NextResponse.json({
      success: true,
      totalItems: allVersions.totalItems,
      filteredCount: summary.length,
      contentTypes,
      items: summary,
    })
  } catch (error) {
    console.error('Debug error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 })
  }
}

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
