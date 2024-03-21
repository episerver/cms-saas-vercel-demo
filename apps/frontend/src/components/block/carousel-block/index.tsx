import 'server-only'
import { Fragment } from 'react'
import dynamic from 'next/dynamic'
import { CmsContentArea, CmsComponent } from '@remkoj/optimizely-dxp-react/rsc'
import type * as GraphQL from '@gql/graphql'
import { gql } from '@gql/index'

const Carousel = dynamic(() => import('./client'), { ssr: true })

export const CarouselBlock : CmsComponent<GraphQL.CarouselBlockDataFragment> = async ({ data }) =>
{
    const delay = 10
    const showArrows : boolean | undefined = true
    const showDots : boolean | undefined = true

    return <div className='carousel-block relative w-full'>
        <CmsContentArea items={ data.CarouselSlides } as={ Carousel } itemsProperty='slides' itemWrapper={{ as: Fragment }} durationMilliseconds={ delay*1000 } showArrows={showArrows} showDots={showDots} />
    </div>
}
CarouselBlock.getDataFragment = () => ['CarouselBlockData', CarouselBlockData]
CarouselBlock.displayName = "Carousel"
export default CarouselBlock

export const CarouselBlockData = gql(/*GraphQL*/`fragment CarouselBlockData on CarouselBlock {
    CarouselSlides {
        ...BlockContentAreaItemSearchData
    }
    ShowArrows
}`)