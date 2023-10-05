import type { ComponentFactory } from '@remkoj/optimizely-dxp-react'
import { getFactory } from '@remkoj/optimizely-dxp-react-server'

import pageComponents from './page'
import blockComponents from './block'
import Link from 'next/link'
import type { ComponentType } from 'react'

export function setupFactory() : ComponentFactory
{
    const factory = getFactory()
    factory.registerAll(pageComponents)
    factory.registerAll(blockComponents)
    factory.register('a', Link as unknown as ComponentType )
    return factory
}

export default setupFactory