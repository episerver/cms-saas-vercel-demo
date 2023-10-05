import type { ComponentType } from 'react';
import type * as Types from './types';
import type { DocumentNode } from "@apollo/client";
export declare function isContentLink(toTest: any): toTest is Types.ContentLink;
export declare function isContentLinkWithLocale(toTest: any): toTest is Types.ContentLinkWithLocale;
export declare function isNonEmptyString(toTest: any): toTest is string;
export declare function isNotNullOrUndefined<T>(toTest?: T | null): toTest is T;
export declare function isContentType(toTest: any): toTest is Types.ContentType;
export declare function normalizeContentType(toNormalize: (string | null)[] | null | undefined): Types.ContentType | undefined;
export declare function normalizeContentLink(toNormalize?: {
    id?: null | number;
    workId?: null | number;
    guidValue?: null | string;
} | null): Types.ContentLink | undefined;
export declare function normalizeContentLinkWithLocale(toNormalize?: {
    id?: null | number;
    workId?: null | number;
    guidValue?: null | string;
    locale?: string | null;
} | null): Types.ContentLinkWithLocale | undefined;
export declare function isCmsComponentWithDataQuery<T = DocumentNode>(toTest?: Types.BaseCmsComponent<T>): toTest is Types.CmsComponentWithQuery<T>;
export declare function isCmsComponentWithFragment<T = DocumentNode>(toTest?: Types.BaseCmsComponent<T>): toTest is Types.CmsComponentWithFragment<T>;
export declare function validatesFragment<T extends ComponentType<any>>(toTest?: T): toTest is T & Pick<Required<Types.WithGqlFragment<T, any>>, "validateFragment">;
export declare function contentLocaleToGraphLocale<T>(contentLocale?: T): T extends string ? string : undefined;
export declare function contentLinkToRequestVariables(contentLink: Types.ContentLinkWithLocale): Types.ContentQueryProps;
export declare function isInlineContentLink(contentLink: Types.ContentLink): contentLink is Types.InlineContentLink;
export declare function contentLinkToString(contentLink: Types.ContentLink): string;
