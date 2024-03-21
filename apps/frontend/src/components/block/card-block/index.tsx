import type { CmsComponent } from '@remkoj/optimizely-dxp-react'
import type * as GraphQL from '@gql/graphql'
import { gql } from '@gql/index'
import Image from 'next/image'
import BannerButton from '@/components/shared/banner-button'

import './card-block.css'

export const CardBlock : CmsComponent<GraphQL.CardBlockDataFragment> = ({ data, inEditMode, client }) => 
{
    const imageSrc = data?.Image?.Expanded?.Path ?? data?.Image?.Url ?? undefined
    const imageAlt = data?.Image?.Expanded?.Name ?? ""
    const button : GraphQL.LinkItemDataFragment | undefined = data?.Button ?? undefined
    return <div className="card-block">
        <div className='card-block-image'>
            { imageSrc && <Image src={ new URL(imageSrc, client?.siteInfo.cmsURL ?? 'https://example.com').href } alt={ imageAlt } fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw" />}
        </div>
        <div className='card-block-body'>
            <div className='title' data-epi-edit={ inEditMode ? "Title" : undefined }>{ data?.Title ?? "" }</div>
            <div className='body rich-text' data-epi-edit={ inEditMode ? "Description" : undefined } dangerouslySetInnerHTML={{ __html: data?.Description ?? ""}}></div>
        </div>
        { button && <div className='card-block-footer'>
            <BannerButton
                href={ button?.content?.data?.path ?? button?.href ?? "#" } 
                title={ button?.title ?? undefined } 
                target={ button?.target ?? undefined }
                data-epi-edit={ inEditMode ? "Link" : undefined }
                >{ button?.children ?? "Read more"}</BannerButton>
        </div> }
    </div>
}
CardBlock.getDataFragment = () => ['CardBlockData', CardBlockData]
CardBlock.displayName = "Card Block"

export default CardBlock

export const CardBlockData = gql(/* GraphQL */`fragment CardBlockData on CardBlock {
    Title
    Description
    Image {
        Url
        Expanded {
            Name
            Path: RelativePath
        }
    }
    Button: Link {
        ...LinkItemData
    }
}`)