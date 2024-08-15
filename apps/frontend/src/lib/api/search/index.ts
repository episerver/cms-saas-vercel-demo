"use server"
import getSdk from "@/sdk"
import { type Sdk, useFragment, Schema } from "@gql"
import * as ContentIntel from '@/lib/integrations/optimizely-content-intelligence'
import { type ContentLinkWithLocale } from "@remkoj/optimizely-graph-client"
import { type TypedNode } from "@remkoj/optimizely-cms-react/components"

export type Filters = Record<string, string>

export type ContentSearchOptions<LocaleType = string> = {
    facets?: Filters
    filters?: Filters
    limit?: number
    start?: number
    cursor?: string
    locale?: LocaleType | Array<LocaleType>
    sdk?: Sdk
    personalize?: boolean
    types?: string | Array<string>
}


export type ContentSearchResultItem = {
    id: ContentLinkWithLocale
    url?: {
        __typename?: "ContentUrl";
        base?: string | null;
        hierarchical?: string | null;
        default?: string | null;
    } | null
    title: string
    abstract?: TypedNode | string | null
    published?: string
    author?: string
    type?: string
    types?: Array<string>
}

export type ContentSearchResults = {
    term: string
    total: number
    paging: {
        start: number
        limit: number
        pages: number
    }
    items: Array<ContentSearchResultItem>
    isPersonalized: boolean
}

/**
 * Server Side search implementation, which can be used across both APIs and 
 * React Server Components. Set the option "personalize" to "false", to prevent
 * Next.JS from bailing out of static generation.
 * 
 * @param term 
 * @param param1 
 */
export async function contentSearch<LocaleType extends string = string>(term: string, { facets, limit = 12, start = 0, locale, filters, types, sdk, personalize = true }: ContentSearchOptions<LocaleType> = {}) : Promise<ContentSearchResults>
{
    const app = sdk || getSdk()
    const topInterest = personalize ? await getTopTopic() : undefined

    const rawResults = await app.searchContent({
        term,
        topInterest,
        pageSize: limit,
        start,
        locale,
        types
    })

    return {
        term,
        total: rawResults.Content?.total || 0,
        paging: {
            start,
            limit,
            pages: Math.max(Math.ceil((rawResults.Content?.total || 0) / limit), 1)
        },
        items: (rawResults.Content?.items?.filter(isNotNullOrUndefined) || []).map(item => {
            // Read fragments
            const searchItemData = useFragment(Schema.SearchDataFragmentDoc, item)
            const iContentData = useFragment(Schema.IContentDataFragmentDoc, searchItemData)
            const iContentMetaData = useFragment(Schema.IContentInfoFragmentDoc, iContentData?._metadata)
            const iContentUrlData = useFragment(Schema.LinkDataFragmentDoc, iContentMetaData?.url)

            // Build ID
            const contentLink : ContentLinkWithLocale = {
                key: iContentMetaData?.key ?? '-',
                version: iContentMetaData?.version ?? undefined,
                locale: iContentMetaData?.locale ?? undefined
            }

            //Construct output
            return {
                id: contentLink,
                url: iContentUrlData,
                title: tryReadStringProp(item, 'title') ?? iContentMetaData?.displayName ?? '',
                abstract: tryReadObjectProp(item, 'abstract.json') as TypedNode | undefined ?? tryReadStringProp(item, 'seodata.MetaDescription') as string | undefined,
                published: tryReadStringProp(item, '_metadata.published'),
                author: tryReadStringProp(item, 'author'),
                image: tryReadObjectProp(item, 'image') ?? tryReadObjectProp(item, 'seodata.SharingImage'),
                type: item.__typename ?? undefined,
                types: iContentMetaData?.types?.filter(isNotNullOrUndefined)
            }
        }),
        isPersonalized: topInterest != undefined
    }
}

async function getTopTopic() : Promise<string | undefined>
{
    const interests = await ContentIntel.getTopTopics()
    return interests.shift()
}

function isNotNullOrUndefined<T>(toTest?: T | null) : toTest is T
{
    return (toTest != null && toTest != undefined) ? true : false
}

function tryReadStringProp(data: any, prop: string): string | undefined
{
    const path = prop.split('.')
    if (path.length > 1) {
        prop = path.pop() as string
        data = tryReadObjectProp(data, path.join('.'))
    }
    
    if (typeof(data) == 'object' && data[prop] && typeof(data[prop]) == 'string')
        return data[prop]
    return undefined
}

function tryReadObjectProp(data: any, prop: string): Object | undefined
{
    const path = prop.split('.')
    if (path.length > 1) {
        prop = path.pop() as string
        data = tryReadObjectProp(data, path.join('.'))
    }

    if (typeof(data) == 'object' && data[prop] && typeof(data[prop]) == 'object')
        return data[prop]
    return undefined
}

export default contentSearch