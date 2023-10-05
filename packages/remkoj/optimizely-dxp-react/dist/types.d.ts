import type { PropsWithChildren, ComponentType as ReactComponentType } from "react";
import type { DocumentNode, TypedDocumentNode, ApolloClient, NormalizedCacheObject } from "@apollo/client";
export type ContentType = string[];
export type ContentLink = {
    id: number;
    workId?: number | null;
    guidValue?: string | null;
} | {
    id?: number | null;
    workId?: number | null;
    guidValue: string;
};
export type InlineContentLink = {
    id: 0;
    workId?: 0 | null;
    guidValue?: null | "";
} | {
    id?: 0 | null;
    workId?: 0 | null;
    guidValue: "";
};
export type ContentLinkWithLocale = ContentLink & {
    locale?: string;
};
export type CmsComponentProps<T> = PropsWithChildren<{
    contentLink: ContentLinkWithLocale;
    data: T;
    inEditMode?: boolean;
    client?: ApolloClient<NormalizedCacheObject>;
}>;
export type ContentQueryProps = ContentLinkWithLocale;
/**
 * Extract the data type from a GraphQL Query
 */
export type ResponseDataType<T extends TypedDocumentNode | DocumentNode> = T extends TypedDocumentNode<infer DataType> ? DataType : {
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
export type BaseCmsComponent<T = {}> = T extends never | TypedDocumentNode | DocumentNode ? DynamicCmsComponent<T> : ReactComponentType<CmsComponentProps<T>>;
export type DynamicCmsComponent<T extends TypedDocumentNode | DocumentNode = DocumentNode> = ReactComponentType<CmsComponentProps<ResponseDataType<T>>>;
export type CmsComponentWithFragment<T = DocumentNode> = WithGqlFragment<BaseCmsComponent<T>, T>;
export type CmsComponentWithQuery<T = DocumentNode> = WithGqlQuery<BaseCmsComponent<T>, T>;
export type CmsComponent<T = DocumentNode> = BaseCmsComponent<T> & (T extends never | TypedDocumentNode | DocumentNode ? Partial<WithGqlQuery<{}, T>> : Partial<WithGqlFragment<{}, T>>);
import type { createElement } from 'react';
export type ComponentType = Parameters<typeof createElement>[0];
export type ComponentTypeHandle = string | string[];
export type ComponentTypeDictionary = {
    type: ComponentTypeHandle;
    component: ComponentType;
}[];
export interface ComponentFactory {
    has(type: ComponentTypeHandle): boolean;
    register(type: ComponentTypeHandle, componentType: ComponentType): void;
    registerAll(components: ComponentTypeDictionary): void;
    resolve(type: ComponentTypeHandle): ComponentType | undefined;
}
