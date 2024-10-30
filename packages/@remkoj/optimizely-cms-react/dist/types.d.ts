import type { PropsWithChildren, ComponentType as ReactComponentType, ExoticComponent as ReactExoticComponent } from "react";
import type { DocumentNode } from "graphql";
import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import type { IOptiGraphClient } from "@remkoj/optimizely-graph-client";
import type { ContentLinkWithLocale, InlineContentLinkWithLocale } from "@remkoj/optimizely-graph-client";
export type ContentType = string[];
export type { ContentLink, ContentLinkWithLocale } from "@remkoj/optimizely-graph-client";
export type CmsComponentProps<T, L extends Record<string, any> = Record<string, any>> = PropsWithChildren<{
    /**
     * The identifier of the content item
     */
    contentLink: ContentLinkWithLocale | InlineContentLinkWithLocale;
    /**
     * The data already pre-fetched for the this component
     */
    data: T;
    /**
     * Use the Server/Client context instead if you need this information
     */
    inEditMode?: boolean;
    /**
     * Contextual layout data, if any
     */
    layoutProps?: L;
}>;
export type ContentQueryProps<LocaleType = string> = ContentLinkWithLocale<LocaleType> & {
    path?: string | null;
    domain?: string | null;
};
/**
 * Extract the data type from a GraphQL Query
 */
export type ResponseDataType<T extends DocumentNode> = T extends TypedDocumentNode<infer DataType> ? DataType : {
    [key: string]: any;
};
export type GetDataQuery<T> = () => TypedDocumentNode<T, ContentQueryProps> | DocumentNode;
export type GetDataFragment<T> = () => [string, TypedDocumentNode<T, never> | DocumentNode];
export type WithGqlFragment<BaseComponent, DataType> = BaseComponent & {
    getDataFragment: GetDataFragment<DataType>;
    validateFragment?: (data: any) => data is DataType;
};
export type WithGqlQuery<B, T> = B & {
    getDataQuery: GetDataQuery<T>;
};
export type BaseCmsComponent<T = {}, L extends Record<string, any> = Record<string, any>> = T extends never | TypedDocumentNode | DocumentNode ? DynamicCmsComponent<T> : ReactComponentType<CmsComponentProps<T, L>>;
export type DynamicCmsComponent<T extends TypedDocumentNode | DocumentNode = DocumentNode, L extends Record<string, any> = Record<string, any>> = ReactComponentType<CmsComponentProps<ResponseDataType<T>, L>>;
export type GraphQLFragmentBase = {
    ' $fragmentName'?: string;
};
export type GraphQLQueryBase = {
    __typename?: 'Query';
};
export type CmsComponentWithFragment<T = DocumentNode, L extends Record<string, any> = Record<string, any>> = BaseCmsComponent<T, L> & WithGqlFragment<{}, T>;
export type CmsComponentWithQuery<T = DocumentNode, L extends Record<string, any> = Record<string, any>> = BaseCmsComponent<T, L> & WithGqlQuery<{}, T>;
export type CmsComponentWithOptionalQuery<T = DocumentNode, L extends Record<string, any> = Record<string, any>> = BaseCmsComponent<T, L> & Partial<WithGqlQuery<{}, T>>;
/**
 * A generic Optimizely CMS Component that will change the static surface based upon the
 * provided data type for the component. It will detect automatically whether the component
 * requires a query or fragment to load the data and allows typechecking of the required
 * getDataFragement / getDataQuery methods are valid.
 *
 * When a type is provided that cannot be resolved to either the output of a Query or a Fragment,
 * it will assume an optional getDataQuery method.
 */
export type CmsComponent<T = DocumentNode, L extends Record<string, any> = Record<string, any>> = T extends TypedDocumentNode<infer R, any> ? CmsComponentWithQuery<R, L> : T extends DocumentNode ? CmsComponentWithQuery<{
    [key: string]: any;
}, L> : T extends GraphQLFragmentBase ? CmsComponentWithFragment<T, L> : T extends GraphQLQueryBase ? CmsComponentWithQuery<T, L> : CmsComponentWithOptionalQuery<T, L>;
export type CmsLayoutComponent<L extends Record<string, any> = Record<string, any>, T = never> = ReactComponentType<CmsComponentProps<T, L>>;
export type ComponentType = (ReactComponentType<any>) | (ReactExoticComponent<any>) | (keyof JSX.IntrinsicElements);
export type ComponentTypeHandle = string | string[];
export type ComponentTypeDictionary = {
    type: ComponentTypeHandle;
    component: ComponentType;
}[];
/**
 * Component Factory
 */
export interface ComponentFactory {
    /**
     * Check if the component type has been registered within the factory
     *
     * @param       type            The component type to check for
     * @returns     Whether or not the type exists within the factory
     */
    has(type: ComponentTypeHandle): boolean;
    /**
     * Register an individual component
     * @param       type            The component type to register
     * @param       componentType   The component to bind to the type
     */
    register(type: ComponentTypeHandle, componentType: ComponentType): void;
    /**
     * Register all components provided through the dictionary
     *
     * @param       components  The components to register
     */
    registerAll(components: ComponentTypeDictionary): void;
    /**
     * Resolve a component type
     *
     * @param       type    The type to search the component for
     * @returns     The component that was resolved for the provided type
     */
    resolve(type: ComponentTypeHandle): ComponentType | undefined;
    /**
     * Retrieve the registered components as a dictionary that can be used to
     * be imported in a new instance.
     *
     * @returns     The dictionary
     */
    extract(): ComponentTypeDictionary;
}
export interface GenericContext {
    readonly client?: IOptiGraphClient;
    readonly factory?: ComponentFactory;
    readonly locale?: string;
    readonly inEditMode: Readonly<boolean>;
    readonly isDevelopment: boolean;
    readonly isDebug: boolean;
    readonly isDebugOrDevelopment: boolean;
}
