import 'server-only';
import { type SuspenseProps } from 'react';
import type * as Types from '@remkoj/optimizely-dxp-react';
import { getClient as createClient } from '@remkoj/optimizely-dxp-react';
type ClientType = ReturnType<typeof createClient>;
type RawContentLink = {
    id?: number | null;
    workId?: number | null;
    guidValue?: string | null;
};
type RawLocale = {
    name?: string | null;
};
type ContentAreaItemDefinition = {
    __typename?: "ContentAreaItemModelSearch" | "ContentAreaItemModel";
    item?: (RawContentLink & {
        data?: {
            contentType?: (string | null)[] | null;
            id?: RawContentLink | null;
            locale?: RawLocale | null;
            [property: string]: any;
        } | null;
    }) | null;
    displayOption?: string | null;
    tag?: string | null;
};
export type CmsContentAreaProps = {
    items: (ContentAreaItemDefinition | null)[];
    locale?: string;
    classMapper?: CmsContentAreaClassMapper;
    className?: string | string[];
    fallback?: SuspenseProps['fallback'];
    inEditMode?: boolean;
    fieldName?: string;
    client?: ClientType;
    factory?: Types.ComponentFactory;
};
export type CmsContentAreaClassMapper = (displayOption: string, contentType: Types.ContentType | null, index: number) => string;
/**
 * React server component to render a content area
 *
 * @param       param0      The content area information for rendering
 * @returns
 */
export declare const CmsContentArea: ({ items, locale, classMapper, className, inEditMode, fieldName, client, factory }: CmsContentAreaProps) => Promise<JSX.Element>;
export declare function processContentAreaItems(items?: (ContentAreaItemDefinition | null)[] | null, locale?: string, inEditMode?: boolean, client?: ClientType, factory?: Types.ComponentFactory): Promise<JSX.Element[]>;
export default CmsContentArea;
