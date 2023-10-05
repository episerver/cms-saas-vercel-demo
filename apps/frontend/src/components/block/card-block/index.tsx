import type { CmsComponent } from '@remkoj/optimizely-dxp-react'
import type * as GraphQL from '@gql/graphql'
import { gql } from '@gql/index'
import Image from 'next/image'
import { getContentGraphConfig } from '@remkoj/optimizely-dxp-react'
import BannerButton from '@/components/shared/banner-button'

import './card-block.css'

export const CardBlock : CmsComponent<GraphQL.CardBlockDataFragment> = ({ data, inEditMode }) => 
{
    const config = getContentGraphConfig()
    const imageSrc = data?.image?.data?.path ?? data?.image?.url ?? undefined
    const imageAlt = data?.image?.data?.name ?? ""
    return <div className="card-block">
        <div className='card-block-image'>
            { imageSrc && <Image src={ new URL(imageSrc, config.dxp_url).href } alt={ imageAlt } fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw" />}
        </div>
        <div className='card-block-body'>
            <div className='title' data-epi-edit={ inEditMode ? "Title" : undefined }>{ data?.title ?? "" }</div>
            <div className='body rich-text' data-epi-edit={ inEditMode ? "Description" : undefined } dangerouslySetInnerHTML={{ __html: data?.body ?? ""}}></div>
        </div>
        <div className='card-block-footer'>
            <BannerButton
                href={ data?.button?.link?.data?.path ?? data?.button?.href ?? "#" } 
                title={ data?.button?.title ?? undefined } 
                target={ data?.button?.target ?? undefined }
                data-epi-edit={ inEditMode ? "Link" : undefined }
                >{ data?.button?.children ?? "Read more"}</BannerButton>
        </div>
    </div>
}
CardBlock.getDataFragment = () => ['CardBlockData', CardBlockData]
CardBlock.displayName = "Card Block"

export default CardBlock

export const CardBlockData = gql(/* GraphQL */`fragment CardBlockData on CardBlock {
    title: Title
    body: Description
    image: Image {
        url: Url
        data: Expanded {
            name: Name
            path: RelativePath
        }
    }
    button: Link {
        href: Href
        title: Title
        children: Text
        target: Target
        link: ContentLink {
            data: Expanded {
                path:RelativePath
            }
        }
    }
}`)