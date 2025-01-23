'use server'

import { getSdk } from '@/sdk'
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
    const sdk = getSdk()
    const graphLocale = localeToGraphLocale(options.locale) as getChildBlogPostsQueryVariables['locale']
    const result = await sdk.getChildBlogPosts({
        ...options,
        locale: graphLocale
    }).then(r => r.result?.items?.at(0)?.items?.posts).catch((e) => { return { total: 0, items: [], facets: undefined, error: e}})
    return result
}

export default getBlogPosts