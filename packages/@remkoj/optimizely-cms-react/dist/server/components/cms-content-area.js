import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import 'server-only';
import CmsContent from './cms-content.js';
import * as Utils from '../../utilities.js';
import * as Errors from '../../errors.js';
import createClient from '@remkoj/optimizely-graph-client';
import { normalizeContentLinkWithLocale, contentLinkToString } from '@remkoj/optimizely-graph-client/utils';
import getServerContext from '../context.js';
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
        return _jsx(_Fragment, {});
    }
    // Convert the items to a list of enriched content types and filter out items cannot be loaded
    const actualItems = (items || []).filter(forValidContentAreaItems);
    const componentData = await Promise.all(actualItems.map(async (item, idx) => {
        // Prepare data from received content area format
        const contentLink = normalizeContentLinkWithLocale(item._metadata);
        if (!contentLink)
            throw new Errors.InvalidContentLinkError(item._metadata);
        const contentType = Utils.normalizeContentType(item._metadata.types);
        const fragmentData = item;
        // Read element wrapper configuration
        const { as: contentItemElement, className: contentItemBaseClassName, itemsProperty: contentItemTarget, ...contentItemElementProps } = itemWrapper ?? {};
        // Generate element wrapper properties
        const contentAreaItemContainerKey = `ContentAreaItem-${idx}-${contentLinkToString(contentLink)}`;
        const contentAreaItemContainerProps = {
            className: `opti-content-area-item opti-content-area-item-${idx}${contentItemBaseClassName ? ' ' + contentItemBaseClassName : ''} ${classMapper ? classMapper(item.displayOption ?? 'default', contentType ?? null, idx) : ""}`,
            "data-epi-block-id": inEditMode && fieldName ? Utils.getContentEditId(contentLink) || undefined : undefined,
            "data-displayoption": item.displayOption || undefined,
            "data-tag": item.tag || undefined,
            ...contentItemElementProps
        };
        const contentAraeItemContent = await CmsContent({ contentLink, contentType, fragmentData, client: gqlClient, factory, outputEditorWarning: inEditMode, contentTypePrefix: "Component" });
        // Inject the element into the wrapper
        const childrenTarget = contentItemTarget || "children";
        let contentAreaItemContainerChildren = undefined;
        if (childrenTarget == "children")
            contentAreaItemContainerChildren = contentAraeItemContent;
        else
            contentAreaItemContainerProps[childrenTarget] = contentAraeItemContent;
        const ContentAreaItemContainer = contentItemElement || "div";
        return _jsx(ContentAreaItemContainer, { ...contentAreaItemContainerProps, children: contentAreaItemContainerChildren }, contentAreaItemContainerKey);
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
    return _jsx(ContentAreaContainer, { ...contentAreaContainerProps, children: contentAreaContainerChildren });
};
function forValidContentAreaItems(itm) {
    return typeof (itm) == 'object' && itm != null && typeof (itm._metadata) == 'object' && itm._metadata != null;
}
export async function processContentAreaItems(items, locale) {
    const actualItems = (items ?? []).filter(Utils.isNotNullOrUndefined);
    return Promise.all(actualItems.map(async (item, idx) => {
        // Prepare data from received content area format
        const contentLink = normalizeContentLinkWithLocale({ ...item.item, locale: locale });
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
//# sourceMappingURL=cms-content-area.js.map