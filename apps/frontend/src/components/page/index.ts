import type { ComponentTypeDictionary } from '@remkoj/optimizely-dxp-react'
import type { FunctionComponent } from 'react'
import StartPage from "./start-page"

export const Pages : ComponentTypeDictionary = [
    {
        type: ['Page', 'StartPage'],
        component: StartPage as FunctionComponent
    }
]
export default Pages