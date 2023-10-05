import { type NextRequest, NextResponse } from 'next/server'
import { getLocations, type GetLocationsResult, type GetLocationsOptions } from '@/lib/api/locations'

async function handler(req: NextRequest) : Promise<NextResponse<GetLocationsResult>>
{
    const opts = await req.json() as GetLocationsOptions
    const retrievedLocations = await getLocations(opts)
    return NextResponse.json(retrievedLocations)
}

export const POST = handler
export const runtime = 'edge' // 'nodejs' (default) | 'edge'
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const fetchCache = 'default-no-store'