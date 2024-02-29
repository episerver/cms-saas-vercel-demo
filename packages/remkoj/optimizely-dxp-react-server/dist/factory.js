const MERGE_SYMBOL = '/';
const DBG = process.env.DXP_DEBUG == '1';
export const EmptyComponentHandle = '$$fragment$$';
/**
 * The default implementation of the ComponentFactory iterface
 */
export class DefaultComponentFactory {
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
        return handle == "" ? EmptyComponentHandle : handle;
    if (Array.isArray(handle) && handle.every(s => typeof (s) == 'string'))
        return handle.filter(s => s.toLowerCase() != 'content').map(s => s == "" ? EmptyComponentHandle : s).join(MERGE_SYMBOL);
    throw new Error(`Invalid component type handle: ${typeof (handle)}`);
}
const _static = {};
/**
 * Retrieve the currently staticly cached ComponentFactory instance, if there's no
 * currently staticly cached ComponentFactory, the default ComponentFactory will be
 * returned
 *
 * @returns The ComponentFactory
 */
export const getFactory = () => {
    if (!_static.factory) {
        if (DBG)
            console.log("Creating new Component Factory");
        _static.factory = new DefaultComponentFactory();
    }
    else {
        if (DBG)
            console.log("Reusing existing Component Factory");
    }
    return _static.factory;
};
/**
 * Update the staticly cached Component Factory, which will be returned by all future
 * "getFactory" calls
 *
 * @param   newFactory    The ComponentFactory to set as staticly cached instance
 * @returns void
 */
export const setFactory = (newFactory) => {
    _static.factory = newFactory;
};
export default getFactory();
