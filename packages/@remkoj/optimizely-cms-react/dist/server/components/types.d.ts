import type { SuspenseProps, PropsWithChildren } from "react";
import type { ComponentFactory, ContentType } from "../../types.js";
import type { ElementChildrenProps, ElementProps, ElementType, PropTypeIfPropExists, MayBeArray, TypeIfPropExists } from '../type-utils.js';
import type { IOptiGraphClient, ContentLinkWithLocale, InlineContentLinkWithLocale } from "@remkoj/optimizely-graph-client";
export type CmsContentProps<LocalesType = string> = PropsWithChildren<{
    /**
     * The content type to render
     */
    contentType?: string[];
    /**
     * The content link to render
     */
    contentLink: ContentLinkWithLocale<LocalesType> | InlineContentLinkWithLocale<LocalesType>;
    /**
     * The initial, pre-loaded data. If set this will be used instead of having the
     * component fetching its' own data. So be sure that this leverages the fragment
     * specified by the component.
     *
     * It will filter out the fiels from the IContentData fragment, to determine if
     * data has been provided.
     */
    fragmentData?: {
        [fieldname: string]: any;
    };
    /**
     * The native key to use when the element is part of an array
     */
    key?: string;
    /**
     * If enabled, it will flag all rendering to be inclusive of the Optimizely Edit mode
     * attributes for On Page Editing
     *
     * @deprecated  Will be retrieved from the ServerContext
     */
    inEditMode?: boolean;
    /**
     * The Optimizely Graph client to use, it will use a new instance if none is provided,
     * the new instance will always use the SingleKey i.e. thus not load edit mode content
     *
     * @deprecated  Will be retrieved from the ServerContext
     */
    client?: IOptiGraphClient;
    /**
     * The component factory to use, it will use the default instance if not provided
     *
     * @deprecated  Will be retrieved from the ServerContext
     */
    factory?: ComponentFactory;
    /**
     * If enabled any warnings intended for an editor will be shown, even if "inEditMode"
     * is false.
     *
     * @deprecated  Will be retrieved from the ServerContext
     */
    outputEditorWarning?: boolean;
    /**
     * The prefix to apply to the content type, to allow loading of different templates based
     * upon location of usage. If set and the content type already starts with this prefix,
     * it will not be applied.
     */
    contentTypePrefix?: string;
    /**
     * Any layout properties inferred from the context
     */
    layoutProps?: Record<string, any>;
    /**
     * When set to true, this will prevent the CmsContent component to try loading content from
     * the store
     */
    noDataLoad?: boolean;
}>;
export type ContentAreaItemDefinition = {
    __typename?: string | null;
    _type?: string | null;
    _metadata?: {
        key?: string | null;
        locale?: string | null;
        types?: Array<string | null> | null;
        displayName?: string | null;
        version?: string | null;
        url?: {
            base?: string | null;
            hierarchical?: string | null;
            default?: string | null;
        } | null;
    } | null;
} & Record<string, any>;
export type ValidContentAreaItemDefinition = {
    __typename?: string | null;
    _type?: string | null;
    _metadata: {
        key?: string | null;
        locale?: string | null;
        types?: Array<string | null> | null;
        displayName?: string | null;
        version?: string | null;
        url?: {
            base?: string | null;
            hierarchical?: string | null;
            default?: string | null;
        } | null;
    };
} & Record<string, any>;
export type CmsContentAreaProps<T extends ElementType, CT extends ElementType> = {
    /**
     * The content area items to be rendered
     */
    items: (ContentAreaItemDefinition | null | undefined)[] | undefined | null;
    /**
     * The mapper used to apply CSS Classes to items, based upon
     * the display mode (PaaS Only), Content type and position in
     * content area.
     */
    classMapper?: TypeIfPropExists<T, "className", CmsContentAreaClassMapper>;
    /**
     * The CSS Class to apply to the content area container
     */
    className?: MayBeArray<PropTypeIfPropExists<T, "className">>;
    /**
     * The fallback component to use as suspense boundary
     */
    fallback?: SuspenseProps['fallback'];
    /**
     * The fieldname of this content area, provide this to allow in-context
     * editing
     */
    fieldName?: string;
    /**
     * The HTML element, or React Component to use to render the Content Area Container
     */
    as?: T;
    itemWrapper?: ({
        /**
         * Override the element type used to wrap the CMS Content Item
         */
        as?: CT;
        /**
         * The CSS Class to apply to the content area item wrapper
         */
        className?: MayBeArray<PropTypeIfPropExists<CT, "className">>;
    } & ("children" extends ElementChildrenProps<CT> ? {
        /**
         * The property of the component set for the "as" property of the Content Area Item
         * which should receive the items within the Content Area.
         *
         * Defaults to "children", if not provided
         */
        itemsProperty?: ElementChildrenProps<CT>;
    } : {
        /**
         * The property of the component set for the "as" property of the Content Area Item
         * which should receive the items within the Content Area.
         */
        itemsProperty: ElementChildrenProps<CT>;
    }) & Omit<Omit<ElementProps<CT>, "className" | "data-epi-block-id" | "data-displayoption" | "data-tag">, ElementChildrenProps<CT>>);
    /**
     * Ignored if provided
     *
     * @deprecated  The ServerContext is used to access the current locale
     */
    locale?: string;
    /**
     * Ignored if provided
     *
     * @deprecated  The ServerContext is used to access the current edit mode status
     */
    inEditMode?: boolean;
    /**
     * Ignored if provided
     *
     * @deprecated  The ServerContext is used to access the current Optimizely Graph Client
     */
    client?: IOptiGraphClient;
    /**
     * Ignored if provided
     *
     * @deprecated  The ServerContext is used to access the current Component Factory
     */
    factory?: ComponentFactory;
} & Omit<Omit<ElementProps<T>, "className" | "data-epi-edit">, ElementChildrenProps<T>> & ("children" extends ElementChildrenProps<T> ? {
    /**
     * The property of the component set for the "as" property of the Content Area which
     * should receive the items within the Content Area.
     *
     * Defaults to "children", if not provided
     */
    itemsProperty?: ElementChildrenProps<T>;
} : {
    /**
     * The property of the component set for the "as" property of the Content Area which
     * should receive the items within the Content Area.
     */
    itemsProperty: ElementChildrenProps<T>;
});
export type CmsContentAreaClassMapper = (displayOption: string, contentType: ContentType | null, index: number) => string;
