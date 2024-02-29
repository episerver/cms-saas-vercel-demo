import type { ComponentTypeDictionary } from '@remkoj/optimizely-dxp-react'
import type { ComponentType } from 'react'
import HomeHero from './hero-home'
import HeroBlock from './hero'
import TextBlock from './text-block'
import Carousel from './carousel-block'
import ContainerBlock from './container-block'
import CardBlock from './card-block'
import QuoteBlock from './quote-block'
import BlogListingBlock from './blog-listing-block'
import OdpEmbedBlock from './odp-embed-block'

export const Blocks : ComponentTypeDictionary = [
    {
        type: ['Block','HomePageHeroBlock'],
        component: HomeHero as ComponentType
    },
    {
        type: ['Block','HeroBlock'],
        component: HeroBlock as ComponentType
    },
    {
        type: ['Block','TextBlock'],
        component: TextBlock as ComponentType
    },
    {
        type: ['Block', 'CarouselBlock'],
        component: Carousel as ComponentType
    },
    {
        type: ['Block', 'LayoutContainerBlock'],
        component: ContainerBlock as ComponentType
    },
    {
        type: ["Block", "OdpEmbedBlock" ],
        component: OdpEmbedBlock as ComponentType
    },
    {
        type: ['Block', 'CardBlock'],
        component: CardBlock as ComponentType
    },
    {
        type: ['Block', 'QuoteBlock'],
        component: QuoteBlock as ComponentType
    },
    {
        type: ['Block', 'BlogListingBlock'],
        component: BlogListingBlock as ComponentType
    }

]
export default Blocks