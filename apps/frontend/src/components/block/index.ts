import type { ComponentTypeDictionary } from '@remkoj/optimizely-cms-react'
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
        type: ['Component','HomePageHeroBlock'],
        component: HomeHero
    },
    {
        type: ['Component','HeroBlock'],
        component: HeroBlock
    },
    {
        type: ['Component','TextBlock'],
        component: TextBlock
    },
    {
        type: ['Component', 'CarouselBlock'],
        component: Carousel
    },
    {
        type: ['Component', 'LayoutContainerBlock'],
        component: ContainerBlock
    },
    {
        type: ["Component", "OdpEmbedBlock" ],
        component: OdpEmbedBlock
    },
    {
        type: ['Component', 'CardBlock'],
        component: CardBlock
    },
    {
        type: ['Component', 'QuoteBlock'],
        component: QuoteBlock
    },
    {
        type: ['Component', 'BlogListingBlock'],
        component: BlogListingBlock
    }

]
export default Blocks