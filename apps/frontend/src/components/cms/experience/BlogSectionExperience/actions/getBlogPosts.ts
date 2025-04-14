'use server'

import { sdk } from '@/sdk'
import { getChildBlogPostsQueryVariables } from '@gql/graphql'
import { localeToGraphLocale } from '@remkoj/optimizely-graph-client'

export type GetBlogPostsParams = {
    parentKey: string
    locale:string
    limit?: number
    skip?: number
    topic?: string
    author?: string
}

export type GetBlogPostsResult = Awaited<ReturnType<typeof getBlogPosts>>

export async function getBlogPosts(options: GetBlogPostsParams)
{
    try {
        const graphLocale = localeToGraphLocale(options.locale) as getChildBlogPostsQueryVariables['locale']
        const queryOptions = {
            ...options,
            locale: graphLocale
        }
        const r = await sdk.getChildBlogPosts(queryOptions)
        const result = r?.result?.items?.at(0)?.items?.BlogPostPage;
        return result
    } catch (e) { 
        console.warn("Error fetching blog posts", e)
        return { 
            total: 0, 
            items: [], 
            facets: undefined, 
            error: e
        }
    }
}

export default getBlogPosts