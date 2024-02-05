import type { ComponentTypeDictionary } from '@remkoj/optimizely-dxp-react'
import type { FunctionComponent } from 'react'
import StartPage from "./start-page"
import LandingPage from './landing-page'
import BlogPostPage from './blog-post-page'

export const Pages : ComponentTypeDictionary = [
    {
        type: ['Page', 'StartPage'],
        component: StartPage as FunctionComponent
    },
    {
        type: ['Page', 'LandingPage'],
        component: LandingPage as FunctionComponent
    },
    {
        type: ['Page', 'BlogPostPage'],
        component: BlogPostPage as FunctionComponent
    }
]
export default Pages