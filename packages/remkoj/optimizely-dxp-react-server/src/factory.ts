import type { ComponentFactory, ComponentType, ComponentTypeHandle, ComponentTypeDictionary } from '@remkoj/optimizely-dxp-react'

//@ts-expect-error
import { cache } from 'react'


const MERGE_SYMBOL = '/'



export class FactoryClass implements ComponentFactory {
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
        return handle
    if (Array.isArray(handle) && handle.every(s => typeof(s) == 'string'))
        return handle.filter(s => s.toLowerCase() != 'content').join(MERGE_SYMBOL)
    throw new Error(`Invalid component type handle: ${ typeof(handle) }`)
}

// Leverage React Cache to provide per request Factory Access
const factory : () => { current: ComponentFactory } = cache(() => {return { current: new FactoryClass() }})
export const getFactory : () => ComponentFactory = () => factory().current
export const setFactory : (newFactory: ComponentFactory) => void = (newFactory: ComponentFactory) => {
    factory().current = newFactory
}
export default getFactory()