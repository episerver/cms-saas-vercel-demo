import type { ComponentTypeDictionary } from '@remkoj/optimizely-dxp-react'
import type { ComponentType } from 'react'
import HeroBlock from "./hero-block"
import ButtonBlock from './button-block'
import TextBlock from './text-block'
import ContainerBlock from './container-block'
import HighlightBlock from './highlight-block'
import ImageAsset from './media-image-asset'
import OdpEmbedBlock from './odp-embed-block'
import CardBlock from './card-block'
import CarouselBlock from './carousel-block'
import QuoteBlock from './quote-block'
import ProductBlock from './product'

export const Blocks : ComponentTypeDictionary = [
    {
        type: ['Block','HeroBlock'],
        component: HeroBlock as ComponentType
    },
    {
        type: ['Block', 'ButtonBlock'],
        component: ButtonBlock as ComponentType
    },
    {
        type: ['Block', 'TextBlock' ],
        component: TextBlock as ComponentType
    },
    {
        type: ['Block', 'ContainerBlock'],
        component: ContainerBlock as ComponentType
    },
    {
        type: ['Block', 'HighlightTextBlock'],
        component: HighlightBlock as ComponentType
    },
    {
        type: ['image','Media','Image'],
        component: ImageAsset as ComponentType<any>
    },
    {
        type: ['Block','image','Media','Image'],
        component: ImageAsset as ComponentType<any>
    },
    {
        type: ["Block", "OdpEmbedBlock" ],
        component: OdpEmbedBlock as ComponentType
    },
    {
        type: ["Block", "CardBlock" ],
        component: CardBlock as ComponentType
    },
    {
        type: ["Block", "CarouselBlock"],
        component: CarouselBlock as ComponentType
    },
    {
        type: ["Block", "QuoteBlock"],
        component: QuoteBlock as ComponentType
    },
    {
        type: ["Block", "Product"],
        component: ProductBlock as ComponentType
    }

]
export default Blocks