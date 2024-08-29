import { type NextRequest, NextResponse } from 'next/server'
import contentSearch, { type ContentSearchResults, type Filters } from '@/lib/api/search'
import { Locales } from "@/gql/graphql"

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
    const facets = tryParseJson<Filters>(req.nextUrl.searchParams.get('facets') ?? 'undefined')

    if (!searchTerm)
        return NextResponse.json<SiteSearchError>({ error: { type: "Bad Request", message: "The term parameter is required"} }, { status: 400 })

    const searchResults = await contentSearch(searchTerm, {
        limit,
        start,
        locale: Locales.en,
        personalize: true,
        filters: facets
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


function tryParseJson<T = any>(value: string | undefined | null, defaultValue: T, validator?: (input: any) => input is T) : T
function tryParseJson<T = any>(value: string | undefined | null, defaultValue: undefined, validator?: (input: any) => input is T) : T | undefined
function tryParseJson<T = any>(value: string | undefined | null) : T | undefined
function tryParseJson<T = any>(value: string | undefined | null, defaultValue?: T | undefined, validator?: (input: any) => input is T) : T | undefined
{
    if (value == undefined || value == null)
        return defaultValue
    try {
        const parsed = JSON.parse(value)
        if (validator)
            return validator(parsed) ? parsed : defaultValue
        else
            return parsed as T
    } catch {
        return defaultValue
    }
}