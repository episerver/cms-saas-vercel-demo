import type * as GraphQL from '@gql/graphql'
import type { Metadata } from 'next/types'
import { type OptimizelyNextPage } from '@remkoj/optimizely-dxp-nextjs'
import { CmsContentArea } from '@remkoj/optimizely-dxp-react-server'
import { gql } from '@gql/index'
import getArticles from '@/lib/api/articles'
import { getFallbackLocale } from '@/lib/i18n'
import dynamic from 'next/dynamic'
import deepmerge from 'deepmerge'

const ArticleList = dynamic(() => import('./article-list'), { ssr: true })

import './article-list-page.css'

export const ArticleListPage : OptimizelyNextPage<GraphQL.ArticleListPageDataFragment> = async ({ inEditMode, contentLink, data, client }) =>
{
    const guid = contentLink.guidValue ?? undefined
    const locale = contentLink.locale ?? getFallbackLocale()
    const articles = guid ? await getArticles(guid, locale, { page: 1, count: 12 }) : undefined

    return <>
        <CmsContentArea fieldName='ArticleListHero' inEditMode={ inEditMode } items={ data.ArticleListHero ?? [] } client={ client } locale={ contentLink.locale } />
        <div className='article-list-page'>
            <h1 data-epi-edit={ inEditMode ? "ArticleListTitle" : undefined } className='pb-2 md:pb-4'>{ data.ArticleListTitle ?? data.Name ?? "Article list"}</h1>
            <div data-epi-edit={ inEditMode ? "ArticleListBody" : undefined } className="rich-text" dangerouslySetInnerHTML={{ __html: data.ArticleListBody ?? ""}}></div>
            { guid && articles && <ArticleList initialData={ articles } imageBaseUrl={ process.env.DXP_URL ?? 'http://localhost:3000' } parent={ guid } locale={ locale } className='pt-2 md:pt-4 lg:pt-6' /> }
        </div>
    </>
}
ArticleListPage.getDataFragment = () => [ "ArticleListPageData", ArticleListPageData ]
ArticleListPage.displayName = "Article Lister"
ArticleListPage.getMetaData = async (contentLink, locale, client) => 
{   
    const variables = {
        ...contentLink,
        locale: locale as GraphQL.Locales
    }
    const result = await client.query({
        query: GetArticleListMetaData,
        variables
    })
    const pageInfo = (result?.data?.getArticleListMetaData?.pages || [])[0]
    if (!pageInfo)
        return {}
    const imageSrc = pageInfo.head?.image?.data?.url || pageInfo.head?.image?.url || undefined
    const title = pageInfo.head?.title || pageInfo.name || undefined
    const description = pageInfo.head?.description || undefined
    let pagemeta : Metadata = {
        title,
        description,
        openGraph: {
            title,
            description
        }
    };

    if (imageSrc) {
        const partial : Metadata = {
            openGraph: {
                images: [ { url: imageSrc } ]
            }
        }
        pagemeta = deepmerge(pagemeta, partial)
    }
    return pagemeta
}

export default ArticleListPage


export const ArticleListPageData = gql(/*GraphQL*/`fragment ArticleListPageData on ArticleListPage {
    Name
    ArticleListTitle
    ArticleListBody
    ArticleListHero {
        ...ContentAreaItemData
    }
}`)

export const GetArticleListMetaData = gql(/*GraphQL*/`query getArticleListMetaData($id: Int, $workId: Int, $guidValue: String, $locale: [Locales!], $isCommonDraft: Boolean) {
    getArticleListMetaData: ArticleListPage(
        where: {
            ContentLink: { 
                Id: { eq: $id }, 
                WorkId: { eq: $workId }, 
                GuidValue: { eq: $guidValue } 
            }
            IsCommonDraft: { eq: $isCommonDraft }
        }
        locale: $locale
    ) {
        count: total
        pages: items {
            name: Name
            head: SeoSettings {
                title: MetaTitle
                description: MetaDescription
                image: SharingImage {
                    url: Url
                    data: Expanded {
                        url: Url
                        path: RelativePath
                    }
                }
                type: GraphType
            }
        }
    }
}`)