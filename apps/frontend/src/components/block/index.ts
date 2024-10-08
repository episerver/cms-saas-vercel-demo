import type { ComponentTypeDictionary } from '@remkoj/optimizely-cms-react'
import TextBlock from './text-block'
import Carousel from './carousel-block'
import CardBlock from './card-block'
import QuoteBlock from './quote-block'
import BlogListingBlock from './blog-listing-block'
import OdpEmbedBlock from './odp-embed-block'

export const Blocks : ComponentTypeDictionary = [
    {
        type: ['Component','TextBlock'],
        component: TextBlock
    },
    {
        type: ['Component', 'CarouselBlock'],
        component: Carousel
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