import 'server-only';
import React from 'react';
import CmsContent from './cms-content';
import * as Utils from '../../utilities';
import * as Errors from '../../errors';
import createClient from '@remkoj/optimizely-graph-client';
import getServerContext from '../context';
//#endregion
/**
 * React server component to render a content area
 *
 * @param       param0      The content area information for rendering
 * @returns
 */
export const CmsContentArea = async ({ items, classMapper, className, fieldName, as: elementType, itemsProperty, itemWrapper, locale: _locale, client: _client, factory: _factory, inEditMode: _inEditMode, ...additionalProps }) => {
    const context = getServerContext();
    if (context.isDebugOrDevelopment && !context.client)
        console.warn(`🟠 [CmsContentArea] No Content Graph client provided for ${fieldName ?? 'CmsContentArea'}, this will cause problems with edit mode!`);
    // Parse & prepare props
    const { inEditMode, factory, locale: ctxLocale } = context;
    const gqlClient = context.client ?? createClient();
    // Determine locale
    const locale = _locale ?? ctxLocale;
    if (context.isDebug && locale == _locale && locale != ctxLocale) {
        console.warn(`🟠 [CmsContentArea] The Context Locale for ContentArea ${fieldName ?? 'CmsContentArea'}, was overridden. Context Locale ${ctxLocale}, current locale ${locale}`);
    }
    if (!locale) {
        console.error(`🔴 [CmsContentArea] No locale set on the ServerContext, which is required to make the ContentArea${fieldName ? ' ' + fieldName : ''} render its content`);
        return React.createElement(React.Fragment, null);
    }
    // Convert the items to a list of enriched content types and filter out items cannot be loaded
    const actualItems = (items || []).filter(forValidContentAreaItems);
    const componentData = await Promise.all(actualItems.map(async (item, idx) => {
        // Prepare data from received content area format
        const contentLink = Utils.normalizeContentLinkWithLocale({ ...item.item, locale: locale });
        if (!contentLink)
            throw new Errors.InvalidContentLinkError({ ...item.item, locale: locale });
        const contentType = Utils.normalizeContentType(item.item?.data?.contentType);
        const fragmentData = item.item?.data || undefined;
        // Read element wrapper configuration
        const { as: contentItemElement, className: contentItemBaseClassName, itemsProperty: contentItemTarget, ...contentItemElementProps } = itemWrapper ?? {};
        // Generate element wrapper properties
        const contentAreaItemContainerProps = {
            key: `ContentAreaItem-${idx}-${contentLink.guidValue}-${contentLink.id}-${contentLink.workId}`,
            className: `opti-content-area-item opti-content-area-item-${idx}${contentItemBaseClassName ? ' ' + contentItemBaseClassName : ''} ${classMapper ? classMapper(item.displayOption ?? 'default', contentType ?? null, idx) : ""}`,
            "data-epi-block-id": inEditMode && fieldName ? contentLink?.id || undefined : undefined,
            "data-displayoption": item.displayOption || undefined,
            "data-tag": item.tag || undefined,
            ...contentItemElementProps
        };
        const contentAraeItemContent = await CmsContent({ contentLink, contentType, fragmentData, client: gqlClient, factory, outputEditorWarning: inEditMode, contentTypePrefix: "Block" });
        // Inject the element into the wrapper
        const childrenTarget = contentItemTarget || "children";
        let contentAreaItemContainerChildren = undefined;
        if (childrenTarget == "children")
            contentAreaItemContainerChildren = contentAraeItemContent;
        else
            contentAreaItemContainerProps[childrenTarget] = contentAraeItemContent;
        const ContentAreaItemContainer = contentItemElement || "div";
        return React.createElement(ContentAreaItemContainer, { ...contentAreaItemContainerProps }, contentAreaItemContainerChildren);
    }));
    // Build container element
    const contentAreaContainerProps = {
        className: `opti-content-area ${Array.isArray(className) ? className.join(' ') : (className ?? '')}`.trim(),
        "data-epi-edit": inEditMode && fieldName ? fieldName : undefined,
        ...additionalProps
    };
    const contentAreaContainerChildrenTarget = itemsProperty ?? "children";
    let contentAreaContainerChildren = undefined;
    if (contentAreaContainerChildrenTarget == "children")
        contentAreaContainerChildren = componentData;
    else
        contentAreaContainerProps[contentAreaContainerChildrenTarget] = componentData;
    const ContentAreaContainer = elementType ?? "div";
    return React.createElement(ContentAreaContainer, { ...contentAreaContainerProps }, contentAreaContainerChildren);
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
export async function processContentAreaItems(items, locale) {
    const actualItems = (items ?? []).filter(Utils.isNotNullOrUndefined);
    return Promise.all(actualItems.map(async (item, idx) => {
        // Prepare data from received content area format
        const contentLink = Utils.normalizeContentLinkWithLocale({ ...item.item, locale: locale });
        if (!contentLink)
            throw new Errors.InvalidContentLinkError({ ...item.item, locale: locale });
        const contentType = Utils.normalizeContentType(item.item?.data?.contentType);
        const fragmentData = item.item?.data || undefined;
        const guidValue = (item.item?.guidValue ?? "00000000-0000-0000-0000-000000000000") + "::" + idx;
        // Build output
        return await CmsContent({ contentLink, contentType, fragmentData, key: guidValue });
    }));
}
export default CmsContentArea;
