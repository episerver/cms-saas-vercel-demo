import { jsx as _jsx } from "react/jsx-runtime";
import 'server-only';
import CmsContent from './cms-content';
import { Errors, Utils } from '@remkoj/optimizely-dxp-react';
import createClient from '@remkoj/optimizely-graph-client';
const DEBUG = process.env.DXP_DEBUG == '1';
const DEV = process.env.NODE_ENV == 'development';
//#endregion
/**
 * React server component to render a content area
 *
 * @param       param0      The content area information for rendering
 * @returns
 */
export const CmsContentArea = async ({ items, locale, classMapper, className, inEditMode, fieldName, client, factory }) => {
    if ((DEBUG || DEV) && !client)
        console.warn("[CmsContent] No Content Graph client provided, this will cause problems with edit mode!");
    // Convert the items to a list of enriched content types and filter out items cannot be loaded
    const actualItems = items.filter(forValidContentAreaItems);
    const gqlClient = client ?? createClient();
    let counter = 0;
    const componentData = await Promise.all(actualItems.map(async (item, idx) => {
        // Prepare data from received content area format
        const contentLink = Utils.normalizeContentLinkWithLocale({ ...item.item, locale: locale });
        if (!contentLink)
            throw new Errors.InvalidContentLinkError({ ...item.item, locale: locale });
        const contentType = Utils.normalizeContentType(item.item?.data?.contentType);
        const fragmentData = item.item?.data || undefined;
        // Build output
        const componentKey = `ContentAreaItem-${++counter}-${contentLink.guidValue}-${contentLink.id}-${contentLink.workId}`;
        const className = `opti-content-area-item opti-content-area-item-${counter} ${classMapper ? classMapper(item.displayOption ?? 'default', contentType ?? null, idx) : ""}`;
        const contentItem = await CmsContent({ contentLink, contentType, fragmentData, client: gqlClient, factory, outputEditorWarning: inEditMode, contentTypePrefix: "Block" });
        return _jsx("div", { className: className, "data-epi-block-id": inEditMode && fieldName ? contentLink?.id : undefined, "data-displayoption": item.displayOption ?? undefined, "data-tag": item.tag ?? undefined, children: contentItem }, componentKey);
    }));
    return _jsx("div", { "data-epi-edit": inEditMode && fieldName ? fieldName : undefined, className: `opti-content-area ${Array.isArray(className) ? className.join(' ') : (className ?? '')}`.trim(), children: componentData });
};
function forValidContentAreaItems(itm) {
    if (itm == undefined || itm == null)
        return false;
    if (itm.item == undefined || itm.item == null)
        return false;
    if (itm.item.data == undefined || itm.item.data == null)
        return typeof (itm.item.guidValue) == 'string' && itm.item.guidValue.length > 0;
    return itm.item.guidValue == itm.item.data.id?.guidValue;
}
export async function processContentAreaItems(items, locale = "en", inEditMode = false, client, factory) {
    const actualItems = (items ?? []).filter(Utils.isNotNullOrUndefined);
    const gqlClient = client ?? createClient();
    return Promise.all(actualItems.map(async (item, idx) => {
        // Prepare data from received content area format
        const contentLink = Utils.normalizeContentLinkWithLocale({ ...item.item, locale: locale });
        if (!contentLink)
            throw new Errors.InvalidContentLinkError({ ...item.item, locale: locale });
        const contentType = Utils.normalizeContentType(item.item?.data?.contentType);
        const fragmentData = item.item?.data || undefined;
        const guidValue = (item.item?.guidValue ?? "00000000-0000-0000-0000-000000000000") + "::" + idx;
        // Build output
        return await CmsContent({ contentLink, contentType, fragmentData, client: gqlClient, factory, outputEditorWarning: inEditMode, key: guidValue });
    }));
}
export default CmsContentArea;
