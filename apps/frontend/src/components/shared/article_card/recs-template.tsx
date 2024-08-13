'use client'
import { type ContentRecsDeliveryProps } from '@remkoj/optimizely-one-nextjs/client'
import { ArticleCard, ArticleCardData } from '@/components/shared/article_card'

export const ArticleTemplate : ContentRecsDeliveryProps['template'] = ({ data }) =>
{
    const article : ArticleCardData = {
        key: data.id,
        authors: data.author ?? '',
        title: data.title,
        link: data.link_url,
        published: data.published ?? undefined,
        image: {
            src: data.main_image_url,
            width: tryParseInt(data.main_image.width, 640),
            height: tryParseInt(data.main_image.height, 430),
            alt: data.title
        },
        abstract: data.abstract
    }
    return <ArticleCard article={ article } />
}

export default ArticleTemplate

function tryParseInt(iv: string, ifError: number|undefined) : number
{
    try {
        return Number.parseInt(iv)
    } catch (e) {
        if (ifError != undefined)
            return ifError
        throw e
    }
}