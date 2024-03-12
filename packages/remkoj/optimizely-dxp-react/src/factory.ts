import type { ComponentFactory, ComponentType, ComponentTypeHandle, ComponentTypeDictionary } from './types'
const MERGE_SYMBOL = '/'
const DBG = process.env.DXP_DEBUG == '1'

export const EmptyComponentHandle =  '$$fragment$$'

/**
 * The default implementation of the ComponentFactory iterface
 */
export class DefaultComponentFactory implements ComponentFactory {
    private registry : { [typeName: string]: ComponentType } = {}

    register(type: ComponentTypeHandle, component: ComponentType) : void
    {
        type = processComponentTypeHandle(type)
        this.registry[type] = component
    }

    registerAll(components: ComponentTypeDictionary) : void 
    {
        components.forEach(c => this.register(c.type, c.component))
    }

    has(type: ComponentTypeHandle) : boolean
    {
        type = processComponentTypeHandle(type)
        return Object.getOwnPropertyNames(this.registry).includes(type)
    }

    resolve(type: ComponentTypeHandle) : undefined | ComponentType 
    {
        type = processComponentTypeHandle(type)
        if (Object.getOwnPropertyNames(this.registry).includes(type))
            return this.registry[type]
        return undefined
    }
}

function processComponentTypeHandle(handle: ComponentTypeHandle) : string
{
    if (typeof(handle) == 'string')
        return handle == "" ? EmptyComponentHandle : handle
    if (Array.isArray(handle) && handle.every(s => typeof(s) == 'string'))
        return handle.filter(s => s.toLowerCase() != 'content').map(s => s == "" ? EmptyComponentHandle : s).join(MERGE_SYMBOL)
    throw new Error(`Invalid component type handle: ${ typeof(handle) }`)
}

const _static : { factory ?: ComponentFactory } = {}

/**
 * Retrieve the currently staticly cached ComponentFactory instance, if there's no
 * currently staticly cached ComponentFactory, the default ComponentFactory will be
 * returned
 * 
 * @returns The ComponentFactory
 */
export const getFactory : () => ComponentFactory = () => {
    if (!_static.factory) {
        if (DBG) console.log("Creating new Component Factory")
        _static.factory = new DefaultComponentFactory()
    } else {
        if (DBG) console.log("Reusing existing Component Factory")
    }
    return _static.factory
}
/**
 * Update the staticly cached Component Factory, which will be returned by all future 
 * "getFactory" calls
 * 
 * @param   newFactory    The ComponentFactory to set as staticly cached instance
 * @returns void
 */
export const setFactory : (newFactory: ComponentFactory) => void = (newFactory: ComponentFactory) => {
    _static.factory = newFactory
}
export default getFactory()