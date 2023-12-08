import { NextResponse } from "next/server"
import * as ODP from '@/lib/integrations/optimizely-data-platform'
import { Utils } from '@remkoj/optimizely-dxp-react'

async function handler() : Promise<NextResponse<string[]>>
{
    const terms = (await ODP.getLastSearchTerms())
                    .filter(Utils.isNotNullOrUndefined)
                    .filter((value, index, array) => array.indexOf(value) == index)
    return NextResponse.json(terms)
}

export const GET = handler
export const runtime = 'edge' // 'nodejs' (default) | 'edge'
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const fetchCache = 'default-no-store'