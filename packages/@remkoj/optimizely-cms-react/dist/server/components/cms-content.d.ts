import 'server-only';
import type { CmsContentProps } from './types.js';
export type { CmsContentProps } from './types.js';
/**
 * React Server Side component for the CmsContent
 *
 * @param     param0
 * @returns
 */
export declare const CmsContent: <LocalesType = string>({ contentType, contentTypePrefix, contentLink: rawContentLink, children, fragmentData, layoutProps, noDataLoad }: CmsContentProps<LocalesType>) => Promise<JSX.Element>;
export default CmsContent;
