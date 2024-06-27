import type { ComponentTypeDictionary } from '@remkoj/optimizely-cms-react'
import StartPage from "./start-page"
import LandingPage from './landing-page'
import BlogPostPage from './blog-post-page'
import StandardPage from './standard-page'

export const Pages : ComponentTypeDictionary = [
    {
        type: ['Page', 'StartPage'],
        component: StartPage
    },
    {
        type: ['Page', 'LandingPage'],
        component: LandingPage
    },
    {
        type: ['Page', 'BlogPostPage'],
        component: BlogPostPage
    },
    {
        type: ['Page', 'StandardPage'],
        component: StandardPage
    }
]
export default Pages