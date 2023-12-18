import { type NextRequest, NextResponse } from 'next/server'
import * as GraphQL from '@gql/graphql'
import { Utils } from '@remkoj/optimizely-dxp-react'
import { gql } from '@gql/index'
import { getServerClient } from '@/lib/client'
import * as ContentIntel from '@/lib/integrations/optimizely-content-intelligence'
import { SiteSearchResponse, ContentSearchResultItems, ContentSearchResultFacets } from '@/api-types'

async function handler(req: NextRequest) : Promise<NextResponse<SiteSearchResponse>>
{
    const client = getServerClient()
    const searchTerm = req.nextUrl.searchParams.get('term') ?? ''
    const contentTypes = (req.nextUrl.searchParams.get('types') ?? '').split(',').filter(Utils.isNonEmptyString)
    const contentLocales = (req.nextUrl.searchParams.get('locales') ?? '').split(',').filter(Utils.isNonEmptyString)
    const interests = await ContentIntel.getTopTopics()
    const topInterest = interests.shift()

    if (!searchTerm)
        return NextResponse.json({ error: { type: "Bad Request", message: "The term parameter is required"} }, { status: 400 })

    const isPersonalized = topInterest ? true : false

    const rawResponse = await client.query({
        query: ComponentSearchQuery,
        variables: {
            term: searchTerm,
            topInterest,
            locale: contentLocales?.length > 0 ? contentLocales as GraphQL.Locales[] : null,
            types: contentTypes?.length > 0 ? contentTypes : null
        }
    })
    const resultItems : ContentSearchResultItems = (rawResponse.data?.Content?.items ?? []).filter(Utils.isNotNullOrUndefined).filter(x => x.name && x.url).map(x => {
        return {
            name: x.name ?? "",
            url: x.url ?? "",
            changed: x.changed ?? undefined,
            published: x.published ?? undefined,
            type: x.type?.filter(Utils.isNonEmptyString) ?? undefined
        }
    })
    const resultFacets : ContentSearchResultFacets = []

    // Process content type facets
    const contentTypeFacetInfo = (rawResponse.data?.Content?.facets?.ContentType ?? []).filter(Utils.isNotNullOrUndefined)
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
    const languageFacetInfo = (rawResponse.data?.Content?.facets?.Language?.Name ?? []).filter(Utils.isNotNullOrUndefined)
    resultFacets.push({
        field: "locales",
        options: languageFacetInfo.map(x => {
            return {
                value: x.name ?? "",
                count: x.count ?? 0
            }
        })
    })
    
    const resultCount = rawResponse.data?.Content?.total

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
export const runtime = 'edge' // 'nodejs' (default) | 'edge'
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const fetchCache = 'default-no-store'

const ComponentSearchQuery = gql(/* graphql */`query ContentSearch($term: String!, $topInterest: String, $locale: [String!], $types: [String!], $pageSize:Int) {
    Content(
        where: {
            _and: [
                { _fulltext: { contains: $term, boost: 25 } }
                { _fulltext: { contains: $topInterest, boost: 5 } }
                { Url: { exist: true } }
            ]
        }
        orderBy: { _ranking: SEMANTIC }
        limit: $pageSize
    ) {
        total
        cursor
        items {
            _score
            name: Name
            url: RelativePath
            type: ContentType
            changed: Changed
            published: StartPublish
        }
        facets {
            ContentType (filters: $types) {
                name
                count
            }
            Language {
                Name (filters: $locale) {
                    name
                    count
                }
            }
        }
    }
}`)