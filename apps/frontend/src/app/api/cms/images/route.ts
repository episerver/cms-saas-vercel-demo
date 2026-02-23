import { NextResponse } from 'next/server'

const GRAPH_SINGLE_KEY = process.env.OPTIMIZELY_GRAPH_SINGLE_KEY

export async function GET() {
  try {
    if (!GRAPH_SINGLE_KEY) {
      throw new Error('OPTIMIZELY_GRAPH_SINGLE_KEY not configured')
    }

    // Use GraphQL to fetch images with their URLs
    const query = `{
      ImageMedia(limit: 50) {
        items {
          _metadata {
            key
            displayName
            url {
              default
            }
          }
        }
      }
    }`

    const res = await fetch(
      `https://cg.optimizely.com/content/v2?auth=${GRAPH_SINGLE_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
        cache: 'no-store',
      }
    )

    if (!res.ok) {
      throw new Error('Failed to fetch images from Graph')
    }

    const data = await res.json()

    // Format response with thumbnail URLs
    const images = (data.data?.ImageMedia?.items || []).map(
      (item: { _metadata: { key: string; displayName: string; url: { default: string } } }) => ({
        key: item._metadata.key,
        name: item._metadata.displayName || 'Unknown',
        url: item._metadata.url?.default || null,
        cmsRef: `cms://content/${item._metadata.key}`,
      })
    )

    return NextResponse.json({ success: true, images })
  } catch (error) {
    console.error('Error fetching images:', error)
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
