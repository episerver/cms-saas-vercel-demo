import type { ComponentTypeDictionary } from '@remkoj/optimizely-dxp-react'
import type { ComponentType } from 'react'
import HomeHero from './hero-home'
import HeroBlock from './hero'
import TextBlock from './text-block'
import Carousel from './carousel-block'
import ContainerBlock from './container-block'
import CardBlock from './card-block'

export const Blocks : ComponentTypeDictionary = [
    {
        type: ['Block','HomePageHeroBlock'],
        component: HomeHero as ComponentType
    },
    {
        type: ['Block','HomeBlock'],
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
        type: ['Block', 'CardBlock'],
        component: CardBlock as ComponentType
    }
]
export default Blocks