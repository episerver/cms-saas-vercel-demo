import { getFactory, setFactory, type ComponentFactory } from '@remkoj/optimizely-cms-react'
import { cache } from 'react'
import pageComponents from './page'
import blockComponents from './block'
import Link from 'next/link'
import Fragment from './fragment'

let setupExecuted = false;

export const setupFactory = cache<() => ComponentFactory>(() => 
{
    const factory = getFactory()
    if (!setupExecuted) {
        factory.registerAll(pageComponents)
        factory.registerAll(blockComponents)
        factory.register('a', Link)
        factory.register('$$fragment$$', Fragment)
        setFactory(factory)
        setupExecuted = true
    }
    return factory
})

export default setupFactory