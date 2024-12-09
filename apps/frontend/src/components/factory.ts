import 'server-only'
import { type ComponentFactory, DefaultComponentFactory, RichTextComponentDictionary } from '@remkoj/optimizely-cms-react/rsc'
import { cache } from 'react'
import cmsComponents from './cms'

/**
 * Get the cached version of the Component Factory to use, this ensure that the
 * minimum number of instances of the factory will be created.
 */
export const setupFactory = cache<() => ComponentFactory>(() => 
{
    const factory = new DefaultComponentFactory()

    // Add support for Rich Text
    factory.registerAll(RichTextComponentDictionary)

    // Add support for Frontend defined components
    factory.registerAll(cmsComponents)

    return factory
})

export default setupFactory