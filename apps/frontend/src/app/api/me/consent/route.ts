import { NextResponse, type NextRequest } from 'next/server'

type ConsentResponse = {
    allowTracking: boolean
}

async function handler(req: NextRequest) : Promise<NextResponse<ConsentResponse>>
{
    let consent = req.nextUrl.searchParams.get('set')
    if (consent == null)
        consent = req.cookies.get('opt_in')?.value ?? null
    
    const hasConsent = consent == null ? true : consent.toLowerCase() == "true"
    const response = NextResponse.json({
        allowTracking: hasConsent
    })
    response.cookies.set('opt_in', hasConsent ? 'true' : 'false')
    return response
}

export const GET = handler
export const runtime = 'edge' // 'nodejs' (default) | 'edge'
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const fetchCache = 'default-no-store'