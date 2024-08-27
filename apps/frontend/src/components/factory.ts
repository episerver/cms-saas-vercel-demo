import { type ComponentFactory, getFactory } from '@remkoj/optimizely-cms-react'
import { DefaultComponents } from '@remkoj/optimizely-cms-react/components'
import { cache } from 'react'
import pageComponents from './page'
import blockComponents from './block'
import cmsComponents from './cms'

export const setupFactory = cache<() => ComponentFactory>(() => 
{
    const factory = getFactory()
    factory.registerAll(DefaultComponents)
    factory.registerAll(pageComponents)
    factory.registerAll(blockComponents)
    factory.registerAll(cmsComponents)
    return factory
})

export default setupFactory