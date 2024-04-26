import { type NextRequest, NextResponse } from 'next/server'
import * as GraphQL from '@gql/graphql'
import { useFragment } from '@gql'
import { Utils } from '@remkoj/optimizely-cms-react'
import getSdk from '@/sdk'
import * as ContentIntel from '@/lib/integrations/optimizely-content-intelligence'
import { SiteSearchResponse, ContentSearchResultItems, ContentSearchResultFacets } from '@/api-types'

async function handler(req: NextRequest) : Promise<NextResponse<SiteSearchResponse>>
{
    const client = getSdk()
    const searchTerm = req.nextUrl.searchParams.get('term') ?? ''
    const contentTypes = (req.nextUrl.searchParams.get('types') ?? '').split(',').map(Utils.trim).filter(Utils.isNonEmptyString)
    const contentLocales = (req.nextUrl.searchParams.get('locales') ?? '').split(',').map(Utils.trim).filter(Utils.isNonEmptyString)
    const interests = await ContentIntel.getTopTopics()
    const topInterest = interests.shift()

    if (!searchTerm)
        return NextResponse.json({ error: { type: "Bad Request", message: "The term parameter is required"} }, { status: 400 })

    const isPersonalized = topInterest ? true : false

    const rawResponse = await client.searchContent({
        term: searchTerm,
        topInterest,
        locale: contentLocales?.length > 0 ? contentLocales as GraphQL.Locales[] : null,
        types: contentTypes?.length > 0 ? contentTypes : null
    })
    const resultItems : ContentSearchResultItems = (rawResponse.Content?.items ?? []).filter(Utils.isNotNullOrUndefined).map(item => {
        const iContent = useFragment(GraphQL.IContentDataFragmentDoc, item)
        const metaData = useFragment(GraphQL.IContentInfoFragmentDoc, iContent._metadata)
        const linkData = useFragment(GraphQL.LinkDataFragmentDoc, metaData?.url)
        const url = new URL(linkData?.default ?? '/', linkData?.base ?? 'https://example.com').href
        return {
            name: metaData?.displayName ?? "",
            url,
            changed: undefined,
            published: item?._metadata?.published ?? undefined,
            type: metaData?.types?.filter(Utils.isNonEmptyString) ?? undefined,
            description: undefined
        }
    });

    const resultFacets : ContentSearchResultFacets = []

    // Process content type facets
    const contentTypeFacetInfo = (rawResponse.Content?.facets?._metadata?.types ?? []).filter(Utils.isNotNullOrUndefined)
    resultFacets.push({
        field: "types",
        options: contentTypeFacetInfo.filter(x => x.name != "Content" && x.name != "Page").map(x => {
            return {
                value: x.name ?? "",
                count: x.count ?? 0
            }
        })
    })

    // Process content language facets
    const languageFacetInfo = (rawResponse.Content?.facets?._metadata?.locale ?? []).filter(Utils.isNotNullOrUndefined)
    resultFacets.push({
        field: "locales",
        options: languageFacetInfo.map(x => {
            return {
                value: x.name ?? "",
                count: x.count ?? 0
            }
        })
    })
    
    const resultCount = rawResponse.Content?.total

    const searchResults : SiteSearchResponse = {
        query: searchTerm,
        filters: [],
        total: resultCount ?? 0,
        items: resultItems,
        facets: resultFacets,
        isPersonalized
    }
    if (contentTypes.length > 0)
        searchResults.filters.push({ field: "types", value: contentTypes })
    if (contentLocales.length > 0)
        searchResults.filters.push({ field: "locales", value: contentLocales })

    return NextResponse.json(searchResults)
}

export const GET = handler
export const runtime = 'nodejs' // 'nodejs' (default) | 'edge'
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const fetchCache = 'default-no-store'