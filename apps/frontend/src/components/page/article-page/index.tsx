import { gql as graphql } from '@gql/gql'
import type * as GraphQL from '@gql/graphql'
import type { OptimizelyNextPage } from '@remkoj/optimizely-dxp-nextjs'
import type { Metadata } from 'next/types'
import Image from 'next/image'
import LocalTime from '@/components/shared/local-time'
import { CalendarDaysIcon, UserIcon } from '@heroicons/react/24/outline'

export const ArticlePage : OptimizelyNextPage<GraphQL.ArticlePageDataFragment> = ({ data, inEditMode }) => {
    const article = data
    if (!article)
        return <div className='article-page empty-article-page'/>

    const imageData = (data.PageImage ?? undefined) as GraphQL.ImageDataFragment | undefined
    const imageUrl = imageData?.data?.path ?? imageData?.data?.url ?? undefined
    const imageSrc = imageUrl ? new URL(imageUrl, process.env.DXP_URL ?? 'http://localhost:3000').href : undefined

    return <div className='article-page max-w-screen-2xl mx-auto p-4 sm:p-6 lg:p-8'>
        <div className='article-meta-info pb-2 sm:pb-4 lg:pb-6 text-slate-400 text-sm font-light align-middle'>
            <div className='author inline-block pr-4 sm:pr-6 lg:pr-8' data-epi-edit={ inEditMode ? 'ArticleAuthor' : undefined }>
                <UserIcon className='w-6 h-6 inline-block' />&nbsp;
                <span>{ article?.ArticleAuthor ?? ""}</span>
            </div>
            <div className='published inline-block pr-4 sm:pr-6 lg:pr-8' data-epi-edit={ inEditMode ? 'StartPublish' : undefined }>
                <CalendarDaysIcon className='w-6 h-6 inline-block' />&nbsp;
                <LocalTime date={ article.StartPublish } mode="Date" />
            </div>
        </div>
        <h1 data-epi-edit={ inEditMode ? 'Title' : undefined } className='article-page-title font-bold text-3xl pb-4'>{ article.Title }</h1>
        <div className='article-description font-semibold md:text-lg pb-2 md:pb-2 lg:pb-3'>{ article.SeoSettings?.MetaDescription ?? ""}</div>
        { imageSrc && <div className='article-image relative w-full aspect-[3/1] md:aspect-[4/1] lg:aspect-[5/1] mb-2 md:mb-2 lg:mb-3'>
            <Image src={ imageSrc } alt={ article.Title ?? "" } fill className='object-cover'/>
        </div> }
        <div data-epi-edit={ inEditMode ? 'MainBody' : undefined } className='article-page-body rich-text' dangerouslySetInnerHTML={{__html: article.MainBody ?? ""}}></div>
    </div>
}
ArticlePage.displayName = "Article Page"
ArticlePage.getDataFragment = () => ['ArticlePageData', ArticlePageData]
ArticlePage.getMetaData = async (contentLink, locale, client) => {
    const queriedMetaData = ((await client.query({
        query: GetMetaDataQuery,
        variables: {
            guid: contentLink.guidValue ?? '',
            locale: locale as GraphQL.Locales
        }
    })).data?.ArticlePage?.items ?? [])[0] ?? undefined
    
    if (!queriedMetaData)
        return {}
    const title = queriedMetaData.seo?.metaTitle || queriedMetaData.title || queriedMetaData.name || undefined
    const type = (queriedMetaData.seo?.type || "-") as '-' | 'article'
    const sharingImage = queriedMetaData.seo?.image?.data?.url || undefined

    const meta : Metadata = {
        description: queriedMetaData?.seo?.metaDescription,
        openGraph: {
            type: type == "-" ? "article" : type,
            url: queriedMetaData?.url ?? undefined,
            description: queriedMetaData?.seo?.metaDescription ?? undefined,
        },
        other: {
            "article:published_time": queriedMetaData?.published ?? undefined,
            "article:modified_time ": queriedMetaData?.modified ?? undefined,
            "article:expiration_time ": queriedMetaData?.expires ?? undefined
        }
    }
    if (title) {
        meta.title = title
        meta.openGraph = {
            ...meta.openGraph,
            title
        }
    }

    if (sharingImage)
        meta.openGraph = {
            ...meta.openGraph,
            images: [ sharingImage ]
        }

    return meta
}

export default ArticlePage

const ArticlePageData = graphql(/* GraphQL */`fragment ArticlePageData on ArticlePage {
    Title
    MainBody
    StartPublish
    ArticleAuthor
    PageImage {
        ...ImageData
    }
    SeoSettings {
        MetaDescription
    }
}`)

const GetMetaDataQuery = graphql(/*GraphQL*/`query GetArticlePageMetaData ($guid:String!, $locale: [Locales]!) {
    ArticlePage (
        where: { ContentLink: { GuidValue: { eq: $guid }}}
        locale: $locale
    ) {
        items {
            name: Name
            title: Title
            published: StartPublish
            modified: Changed
            expires: StopPublish
            url: Url
            locale:Language {
                code:Name
            }
            alternateLocales: ExistingLanguages {
                code: Name
                url: Link
            }
            seo: SeoSettings {
                metaTitle: MetaTitle
                metaDescription: MetaDescription
                type: GraphType
                image: SharingImage {
                    id: Id
                    guidValue: GuidValue
                    data: Expanded {
                        url:Url
                        path: RelativePath
                    }
                }
            }
        }
    }
}`)