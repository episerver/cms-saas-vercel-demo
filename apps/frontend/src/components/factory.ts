import 'server-only'
import { type ComponentFactory, DefaultComponentFactory, RichTextComponentDictionary } from '@remkoj/optimizely-cms-react/rsc'
import cmsComponents from './cms'
import { CustomComponentFactory } from './customFactory'

// Create the server factory, to be reused throughout the application
export const factory : ComponentFactory = new CustomComponentFactory()
factory.registerAll(RichTextComponentDictionary)
factory.registerAll(cmsComponents)

/**
 * Get the cached version of the Component Factory to use, this ensure that the
 * minimum number of instances of the factory will be created.
 */
export const setupFactory = () => factory;

export default setupFactory
