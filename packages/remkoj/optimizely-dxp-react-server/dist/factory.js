//@ts-expect-error
import { cache } from 'react';
const MERGE_SYMBOL = '/';
export class FactoryClass {
    registry = {};
    register(type, component) {
        type = processComponentTypeHandle(type);
        this.registry[type] = component;
    }
    registerAll(components) {
        components.forEach(c => this.register(c.type, c.component));
    }
    has(type) {
        type = processComponentTypeHandle(type);
        return Object.getOwnPropertyNames(this.registry).includes(type);
    }
    resolve(type) {
        type = processComponentTypeHandle(type);
        if (Object.getOwnPropertyNames(this.registry).includes(type))
            return this.registry[type];
        return undefined;
    }
}
function processComponentTypeHandle(handle) {
    if (typeof (handle) == 'string')
        return handle;
    if (Array.isArray(handle) && handle.every(s => typeof (s) == 'string'))
        return handle.filter(s => s.toLowerCase() != 'content').join(MERGE_SYMBOL);
    throw new Error(`Invalid component type handle: ${typeof (handle)}`);
}
// Leverage React Cache to provide per request Factory Access
const factory = cache(() => { return { current: new FactoryClass() }; });
export const getFactory = () => factory().current;
export const setFactory = (newFactory) => {
    factory().current = newFactory;
};
export default getFactory();
