import type * as Types from './types'
import type * as GraphQL from '@gql/graphql'
import { getServerClient } from '@/lib/client'
import { gql } from '@gql/index'
import { Utils } from '@remkoj/optimizely-dxp-react'
import 'server-only'

export async function getArticles(parent: string, locale: string, paging?: Types.PagingData, filters?: Types.Filters) : Promise<Types.GetArticlesResult>
{
    const pageSize = paging?.count ?? 10
    const pageNumber = paging?.page ?? 1
    const client = getServerClient()
    const published : string | undefined = filters?.published
    const publishedEnd = !published ? undefined : (() => { const d = new Date(published); d.setDate(d.getDate() +1); return d.toISOString()})()
    const result = await client.query({
        query: GetArticlesQuery,
        variables: {
            parent: parent,
            locale: locale as GraphQL.Locales,
            pageSize: paging?.count ?? 10,
            start: pageSize * (pageNumber - 1),
            author: filters?.author,
            published,
            publishedEnd
        }
    })
    if (result.error)
        throw result.error

    const articleResponse = result.data.getArticles
    if (!articleResponse)
        throw new Error("No data in the response")

    const totalResults = articleResponse.total ?? 0
    const totalPages = Math.ceil(totalResults / pageSize)

    return {
        parent,
        locale,
        totalResults,
        totalPages,
        pageSize,
        pageNumber,
        facets: {
            author: (articleResponse.facets?.author ?? []).filter(Utils.isNotNullOrUndefined).map(x => {return { name: x.name ?? "", count: x.count ?? 0}}),
            published: (articleResponse.facets?.published ?? []).filter(Utils.isNotNullOrUndefined).map(x => { return { date: x.name ?? "", count: x.count ?? 0}})
        },
        items: (articleResponse.items ?? []).filter(Utils.isNotNullOrUndefined).map(item => {
            return {
                id: item.id?.guid ?? "",
                name: item.name ?? "",
                title: item.title ?? "",
                description: item.description?.text ?? "",
                author: item.author ?? "",
                published: item.published ?? "2000-01-01T00:00:00Z",
                image: {
                    path: item.image?.data?.path ?? null,
                    url: item.image?.data?.url ?? item.image?.url ?? null
                },
                path: item.path ?? null,
                url: item.url ?? null
            }
        })
    }
}

export type * as Types from './types'
export default getArticles

const GetArticlesQuery = gql(/*GraphQL*/`query GetArticles($parent: String!, $pageSize: Int! = 10, $start: Int! = 0, $locale: [Locales], $author: [String!], $published: Date, $publishedEnd: Date) {
    getArticles: ArticlePage(
      where: {
        _and: [
          { ParentLink: { GuidValue: { eq: $parent } } }
          {
            _and: [
              { StartPublish: { gte: $published } }
              { StartPublish: { lte: $publishedEnd } }
            ]
          }
        ]
      }
      locale: $locale
      limit: $pageSize
      skip: $start
      orderBy: { StartPublish: DESC }
    ) {
      total
      items {
        id: ContentLink {
          guid: GuidValue
        }
        name: Name
        title: Title
        description: SeoSettings {
          text: MetaDescription
        }
        url: Url
        path: RelativePath
        author: ArticleAuthor
        published: StartPublish
        image: PageImage {
          url: Url
          data: Expanded {
            url: Url
            path: RelativePath
          }
        }
      }
      facets {
        author: ArticleAuthor(orderType: VALUE, orderBy: ASC, filters: $author) {
          count
          name
        }
        published: StartPublish(unit: DAY) {
          count
          name
        }
      }
    }
  }`)