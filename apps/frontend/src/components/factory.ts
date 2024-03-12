import { getFactory, setFactory, type ComponentFactory } from '@remkoj/optimizely-dxp-react'

import pageComponents from './page'
import blockComponents from './block'
import Link from 'next/link'
import type { ComponentType } from 'react'
import Fragment from './fragment'

let setupExecuted = false;

export function setupFactory() : ComponentFactory
{
    const factory = getFactory()
    if (!setupExecuted) {
        factory.registerAll(pageComponents)
        factory.registerAll(blockComponents)
        factory.register('a', Link as unknown as ComponentType)
        factory.register('$$fragment$$', Fragment as ComponentType)
        setFactory(factory)
        setupExecuted = true
    }
    return factory
}

export default setupFactory