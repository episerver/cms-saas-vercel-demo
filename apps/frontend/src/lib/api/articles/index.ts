import type * as Types from './types'
import type * as GraphQL from '@gql/graphql'
import { getServerClient } from "@remkoj/optimizely-dxp-nextjs";
import { gql } from "@gql/index";
import { Utils } from '@remkoj/optimizely-dxp-react'
import 'server-only'

export async function getArticles(locale: string, paging?: Types.PagingData, filters?: Types.Filters) : Promise<Types.GetArticlesResult>
{
    const pageSize = paging?.count ?? 10
    const pageNumber = paging?.page ?? 1
    const client = getServerClient()
    const published : string | undefined = filters?.published
    const publishedEnd = !published ? undefined : (() => { const d = new Date(published); d.setDate(d.getDate() +1); return d.toISOString()})()
    const result = await client.query(
        GetArticlesQuery,
        {
            locale: locale as GraphQL.Locales,
            pageSize: paging?.count ?? 10,
            start: pageSize * (pageNumber - 1),
            author: filters?.author,
            published,
            publishedEnd
        }
    )

    if (result.error)
        throw result.error

    const articleResponse = result.getArticles
    if (!articleResponse)
        throw new Error("No data in the response")

    const totalResults = articleResponse.total ?? 0
    const totalPages = Math.ceil(totalResults / pageSize)

    return {
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
                    src: item.image?.src ?? null
                },
                path: item.path ?? null,
                url: item.url ?? null
            }
        })
    }
}

export type * as Types from './types'
export default getArticles

const GetArticlesQuery = gql(/* GraphQL */`query GetArticles( $pageSize: Int! = 10, $start: Int! = 0, $locale: [Locales], $author: [String!], $published: Date, $publishedEnd: Date) {
    getArticles: BlogPostPage(
      where: {
        _and: [
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
        title: Heading
        description: SeoSettings {
          text: MetaDescription
        }
        url: Url
        path: RelativePath
        author: ArticleAuthor
        published: StartPublish
        image: BlogPostPromoImage {
          src: Url
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
  }`);