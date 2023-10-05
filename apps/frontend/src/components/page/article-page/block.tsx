import type * as GraphQL from '@gql/graphql'
import { type CmsComponent } from '@remkoj/optimizely-dxp-react'
import { gql } from '@gql/gql'

import { UserIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import LocalTime from '@/components/shared/local-time'
import BannerButton from '@/components/shared/banner-button'

import './block.css'

export const ArticlePageBlock : CmsComponent<GraphQL.ArticlePageBlockDataFragment> = ({ data, inEditMode }) => 
{
    const imageSrc = data?.image?.src || undefined
    return <div className='article-page-block flex flex-col h-full'>
        { imageSrc && <div className='relative aspect-[2/1] w-full overflow-hidden rounded-t-lg'>
            <Image src={ imageSrc } alt="" fill className='object-cover' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div> }
        <div className='article-meta w-full flex flex-row justify-between p-2 md:py-3 lg:py-4'>
            <div><UserIcon className='inline-block w-6 h-6 mr-2' /><span>{ data.author }</span></div>
            <div><CalendarDaysIcon className='inline-block w-6 h-6 mr-2' /><LocalTime date={ data.published} mode='Date' /></div>
        </div>
        <Link href={ data.href || '/' } className='article-title pt-2 md:pt-3 lg:pt-4 font-semibold lg:text-lg'>{ data.title || data.name }</Link>
        <div className='article-description py-2 md:py-3 lg:py-4 rich-text grow'>{ data?.meta?.intro || "" }</div>
        <div className='article-buttons'>
            <BannerButton href={ data.href || '/' } className='m-0' >Read more</BannerButton>
        </div>
    </div>
}
ArticlePageBlock.displayName = "Article page (Block)"
ArticlePageBlock.getDataFragment = () => [ "ArticlePageBlockData", ArticlePageBlockData ]
export default ArticlePageBlock

const ArticlePageBlockData = gql(/*GraphQL*/`fragment ArticlePageBlockData on ArticlePage
{
    href: RelativePath
    name: Name
    title: Title
    author: ArticleAuthor
    published: StartPublish
    image: PageImage {
        src: Url
        data: Expanded {
            alt: Name
        }
    }
    meta: SeoSettings {
        intro:MetaDescription
    }
}`)