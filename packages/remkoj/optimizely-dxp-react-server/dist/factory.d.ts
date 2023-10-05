import type { ComponentFactory, ComponentType, ComponentTypeHandle, ComponentTypeDictionary } from '@remkoj/optimizely-dxp-react';
export declare class FactoryClass implements ComponentFactory {
    private registry;
    register(type: ComponentTypeHandle, component: ComponentType): void;
    registerAll(components: ComponentTypeDictionary): void;
    has(type: ComponentTypeHandle): boolean;
    resolve(type: ComponentTypeHandle): undefined | ComponentType;
}
export declare const getFactory: () => ComponentFactory;
export declare const setFactory: (newFactory: ComponentFactory) => void;
declare const _default: ComponentFactory;
export default _default;
