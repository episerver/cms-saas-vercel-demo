import type { CmsComponent } from '@remkoj/optimizely-dxp-react'
import type * as GraphQL from '@gql/graphql'
import { gql } from '@gql/gql'
import Image from 'next/image'

const DXP_URL = process.env.DXP_URL ?? process.env.NEXT_PUBLIC_DXP_URL ?? undefined

export const MediaImageAsset : CmsComponent<GraphQL.ImageMediaDataFragment> = ({data}) =>
{
    const relativePath = (data as GraphQL.IContentDataFragment | undefined)?.path
    if (!(typeof(relativePath) == 'string' && relativePath.length > 0))
        return <></>

    const imageUrl = new URL(relativePath, DXP_URL)
    return <div className='relative w-full h-full min-h-[12rem]'>
        <Image src={ imageUrl.href } alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw" className='object-contain' />
    </div>
}
MediaImageAsset.displayName = "Optimizely CMS Image"
//MediaImageAsset.getDataFragment = () => ["ImageMediaData", MediaImageFragment]

export default MediaImageAsset

export const MediaImageFragment = gql(/* GraphQL */`fragment ImageMediaData on Content {
    RelativePath 
}`)