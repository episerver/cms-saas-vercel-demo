import { NextResponse } from "next/server"
import * as ODP from '@/lib/integrations/optimizely-data-platform'
import { Utils } from '@remkoj/optimizely-dxp-react'

async function handler() : Promise<NextResponse<string[]>>
{
    const terms = (await ODP.getLastSearchTerms())      // Get all last search terms
                    .filter(Utils.isNotNullOrUndefined) // Filter out null/undefined values
                    .filter(Utils.toUniqueValues)       // Remove duplicates
    return NextResponse.json(terms)
}

export const GET = handler
export const runtime = 'edge' // 'nodejs' (default) | 'edge'
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const fetchCache = 'default-no-store'