import 'server-only';
import type { ElementType } from '../type-utils.js';
import type { CmsContentAreaProps, ContentAreaItemDefinition } from './types.js';
export type { CmsContentAreaClassMapper, CmsContentAreaProps, ContentAreaItemDefinition } from './types.js';
/**
 * React server component to render a content area
 *
 * @param       param0      The content area information for rendering
 * @returns
 */
export declare const CmsContentArea: <T extends ElementType = "div", I extends ElementType = "div">({ items, classMapper, className, fieldName, as: elementType, itemsProperty, itemWrapper, locale: _locale, client: _client, factory: _factory, inEditMode: _inEditMode, ...additionalProps }: CmsContentAreaProps<T, I>) => Promise<JSX.Element>;
export declare function processContentAreaItems(items?: (ContentAreaItemDefinition | null)[] | null, locale?: string): Promise<JSX.Element[]>;
export default CmsContentArea;
