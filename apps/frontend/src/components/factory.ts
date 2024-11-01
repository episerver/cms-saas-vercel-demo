import 'server-only'
import { type ComponentFactory, getFactory, RichTextComponentDictionary } from '@remkoj/optimizely-cms-react/rsc'
import { cache } from 'react'
import cmsComponents from './cms'

export const setupFactory = cache<() => ComponentFactory>(() => 
{
    const factory = getFactory()
    factory.registerAll(RichTextComponentDictionary)
    factory.registerAll(cmsComponents)
    return factory
})

export default setupFactory