import type { ComponentFactory, ComponentType, ComponentTypeHandle, ComponentTypeDictionary } from './types.js';
export declare const EmptyComponentHandle = "$$fragment$$";
/**
 * The default implementation of the ComponentFactory interface, which works both
 * client and server side.
 */
export declare class DefaultComponentFactory implements ComponentFactory {
    private registry;
    private dbg;
    /**
     * Create a new instance of the DefaultComponentFactory
     *
     * @param   initialComponents   If provided, this dictionary will be registered
     *                              with the factory.
     */
    constructor(initialComponents?: ComponentTypeDictionary);
    register(type: ComponentTypeHandle, component: ComponentType): void;
    registerAll(components: ComponentTypeDictionary): void;
    has(type: ComponentTypeHandle): boolean;
    resolve(type: ComponentTypeHandle): undefined | ComponentType;
    extract(): ComponentTypeDictionary;
}
/**
 * Retrieve the currently staticly cached ComponentFactory instance, if there's no
 * currently staticly cached ComponentFactory, the default ComponentFactory will be
 * returned
 *
 * @returns The ComponentFactory
 */
export declare const getFactory: () => ComponentFactory;
/**
 * Update the staticly cached Component Factory, which will be returned by all future
 * "getFactory" calls
 *
 * @param   newFactory    The ComponentFactory to set as staticly cached instance
 * @returns void
 */
export declare const setFactory: (newFactory: ComponentFactory) => void;
declare const _default: ComponentFactory;
export default _default;
