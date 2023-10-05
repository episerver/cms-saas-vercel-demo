import type { PropsWithChildren } from 'react';
import type { ContentLinkWithLocale, ComponentFactory, ContentType } from '@remkoj/optimizely-dxp-react';
import { getClient as createClient } from '@remkoj/optimizely-dxp-react';
export type CmsContentProps = PropsWithChildren<{
    /**
     * The content type to render
     */
    contentType?: string[];
    /**
     * The content link to render
     */
    contentLink: ContentLinkWithLocale;
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
     */
    inEditMode?: boolean;
    /**
     * The Optimizely Graph client to use, it will use a new instance if none is provided,
     * the new instance will always use the SingleKey i.e. thus not load edit mode content
     */
    client?: ReturnType<typeof createClient>;
    /**
     * The component factory to use, it will use the default instance if not provided
     */
    factory?: ComponentFactory;
    /**
     * If enabled any warnings intended for an editor will be shown, even if "inEditMode"
     * is false.
     */
    outputEditorWarning?: boolean;
    /**
     * The prefix to apply to the content type, to allow loading of different templates based
     * upon location of usage. If set and the content type already starts with this prefix,
     * it will not be applied.
     */
    contentTypePrefix?: string;
}>;
/**
 * React Server Side component for the CmsContent
 *
 * @param     param0
 * @returns
 */
export declare const CmsContent: ({ contentType, contentTypePrefix, contentLink, children, inEditMode, client, factory, fragmentData, outputEditorWarning }: CmsContentProps) => Promise<JSX.Element>;
export default CmsContent;
export declare function getContentType(link: ContentLinkWithLocale, gqlClient: ReturnType<typeof createClient>): Promise<ContentType | undefined>;
