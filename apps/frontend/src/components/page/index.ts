import type { ComponentTypeDictionary } from '@remkoj/optimizely-dxp-react'
import type { FunctionComponent } from 'react'
import LandingPage from "./landing-page"
import ArticlePage from './article-page'
import ArticlePageBlock from './article-page/block'
import ArticleListPage from './article-list-page'
import LocationListPage from './location-list-page'
import LocationPage from './location-page'

export const Pages : ComponentTypeDictionary = [
    {
        type: ['Page', 'LandingPage'],
        component: LandingPage as FunctionComponent
    },
    {
        type: ['Page', 'ArticlePage'],
        component: ArticlePage as FunctionComponent
    },
    {
        type: ['Block', 'Page', 'ArticlePage'],
        component: ArticlePageBlock as FunctionComponent
    },
    {
        type: ['Page', 'ArticleListPage'],
        component: ArticleListPage as FunctionComponent
    },
    {
        type: ['Page', 'LocationListPage'],
        component: LocationListPage as FunctionComponent
    },
    {
        type: ['Page', 'LocationPage'],
        component: LocationPage as FunctionComponent
    }
]
export default Pages