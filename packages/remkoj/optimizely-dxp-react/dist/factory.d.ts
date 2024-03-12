import type { ComponentFactory, ComponentType, ComponentTypeHandle, ComponentTypeDictionary } from './types';
export declare const EmptyComponentHandle = "$$fragment$$";
/**
 * The default implementation of the ComponentFactory iterface
 */
export declare class DefaultComponentFactory implements ComponentFactory {
    private registry;
    register(type: ComponentTypeHandle, component: ComponentType): void;
    registerAll(components: ComponentTypeDictionary): void;
    has(type: ComponentTypeHandle): boolean;
    resolve(type: ComponentTypeHandle): undefined | ComponentType;
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
