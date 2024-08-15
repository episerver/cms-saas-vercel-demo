import { type NextRequest, NextResponse } from 'next/server'
import { Utils } from '@remkoj/optimizely-cms-react'
import contentSearch, { type ContentSearchResults} from '@/lib/api/search'

export type SiteSearchResponse = SiteSearchError | ContentSearchResults
export type SiteSearchError = {
    error: {
        type: string
        message: string
    }
}

async function handler(req: NextRequest) : Promise<NextResponse<SiteSearchResponse>>
{
    const searchTerm = req.nextUrl.searchParams.get('query') ?? ''
    const limit = tryParseInt(req.nextUrl.searchParams.get('limit'), 12)
    const start = tryParseInt(req.nextUrl.searchParams.get('start'), 0)
    const contentTypes = (req.nextUrl.searchParams.get('types') ?? '').split(',').map(Utils.trim).filter(Utils.isNonEmptyString)
    const contentLocales = (req.nextUrl.searchParams.get('locales') ?? '').split(',').map(Utils.trim).filter(Utils.isNonEmptyString)

    if (!searchTerm)
        return NextResponse.json<SiteSearchError>({ error: { type: "Bad Request", message: "The term parameter is required"} }, { status: 400 })

    const searchResults = await contentSearch(searchTerm, {
        limit,
        start,
        locale: contentLocales.length == 0 ? 'en' : contentLocales,
        types: contentTypes,
        personalize: true,
    })
    

    return NextResponse.json(searchResults)
}

export const GET = handler
export const runtime = 'nodejs' // 'nodejs' (default) | 'edge'
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const fetchCache = 'default-no-store'
export const revalidate = 0

function tryParseInt(value: string | undefined | null, defaultValue: number = 0, radix?: number) : number
{
    if (value == undefined || value == null)
        return defaultValue
    try {
        return Number.parseInt(value, radix)
    } catch {
        return defaultValue
    }
}