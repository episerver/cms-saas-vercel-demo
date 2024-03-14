import { jsxs as _jsxs, Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import createClient from '@remkoj/optimizely-graph-client';
import { print } from 'graphql';
import { Utils, getFactory } from '@remkoj/optimizely-dxp-react';
import * as Queries from './queries';
const DEBUG = process.env.DXP_DEBUG == '1';
const DEV = process.env.NODE_ENV == 'development';
/**
 * React Server Side component for the CmsContent
 *
 * @param     param0
 * @returns
 */
export const CmsContent = async ({ contentType, contentTypePrefix, contentLink, children, inEditMode, client, fragmentData, outputEditorWarning }) => {
    if ((DEBUG || DEV) && !client)
        console.warn(`[CmsContent] No Content Graph client provided with ${JSON.stringify(contentLink)}, this will cause problems with edit mode!`);
    // Parse & prepare props
    const factory = getFactory();
    client = client ?? createClient();
    const isInlineBlock = Utils.isInlineContentLink(contentLink);
    // DEBUG Tracing
    if (DEBUG)
        console.log("[CmsContent] Rendering CMS Content for:", JSON.stringify(contentType), isInlineBlock ? "Inline content" : JSON.stringify({ id: contentLink.id, workId: contentLink.workId, guidValue: contentLink.guidValue, locale: contentLink.locale }), inEditMode ? "edit-mode" : "published");
    // Ensure we have a content type to work with
    if (!isInlineBlock && !contentType) {
        if (DEBUG || DEV)
            console.warn(`[CmsContent] No content type provided for content ${JSON.stringify({ id: contentLink.id, workId: contentLink.workId, guidValue: contentLink.guidValue, locale: contentLink.locale })}, this causes an additional GraphQL query to resolve the ContentType`);
        contentType = await getContentType(contentLink, client);
    }
    // Apply the content-type prefix if needed
    if (Array.isArray(contentType) && Utils.isNonEmptyString(contentTypePrefix) && contentType.length > 0 && contentType[0] != contentTypePrefix) {
        if (DEBUG)
            console.info(`[CmsContent] Component type [${contentType.join('/')}] doesn't have the configured prefix, adding ${contentTypePrefix} as prefix`);
        contentType.unshift(contentTypePrefix);
    }
    // Resolve component
    const Component = factory.resolve(contentType ?? "");
    if (!Component) {
        if (DEBUG || DEV) {
            console.warn(`[CmsContent] Component of type "${contentType?.join('/') ?? ""}" not resolved by factory`);
        }
        if (DEBUG || inEditMode || outputEditorWarning) {
            const errorMsg = _jsxs("div", { className: 'opti-error', children: ["Component of type \"", contentType?.join('/') ?? "", "\" not resolved by factory"] });
            return children ? _jsxs(_Fragment, { children: [errorMsg, children] }) : errorMsg;
        }
        return _jsx(_Fragment, { children: children ? children : undefined });
    }
    if (DEBUG)
        console.log("[CmsContent] Rendering item using component:", Component?.displayName ?? Component);
    // Render with previously loaded data
    const fragmentProps = fragmentData ? Object.getOwnPropertyNames(fragmentData).filter(x => !Queries.CmsContentFragments.IContentDataProps.includes(x)) : [];
    if (fragmentProps.length > 0) {
        if (DEBUG)
            console.log("[CmsContent] Rendering CMS Component using fragment information", fragmentProps);
        if (Utils.validatesFragment(Component) && !Component.validateFragment(fragmentData)) {
            console.error("[CmsContent] Invalid fragment data received for ", Component.displayName ?? contentType?.join("/") ?? "[Undetermined component]");
            return _jsx(_Fragment, {});
        }
        return _jsx(Component, { inEditMode: inEditMode, contentLink: contentLink, data: fragmentData || {}, client: client });
    }
    // If we don't have previously loaded data we cannot load content for inline blocks
    if (isInlineBlock)
        return (DEBUG || inEditMode || outputEditorWarning) ? _jsx("div", { className: 'opti-error', children: "Inline blocks cannot be loaded individually" }) : _jsx(_Fragment, {});
    // Render using included query 
    if (Utils.isCmsComponentWithDataQuery(Component)) {
        const gqlQuery = Component.getDataQuery();
        const gqlVariables = Utils.contentLinkToRequestVariables(contentLink);
        if (DEBUG)
            console.log("[CmsContent] Component data fetching variables:", gqlVariables);
        const gqlResponse = await client.request(gqlQuery, gqlVariables);
        if (DEBUG)
            console.log("[CmsContent] Component request the following data:", gqlResponse);
        return _jsx(Component, { inEditMode: inEditMode, contentLink: contentLink, data: gqlResponse, client: client });
    }
    // Render using included fragment
    if (Utils.isCmsComponentWithFragment(Component)) {
        const [name, fragment] = Component.getDataFragment();
        const fragmentQuery = `query getContentFragmentById($id: Int!, $workId: Int, $guidValue: String, $locale: [Locales]!, $isCommonDraft: Boolean ) { contentById: Content( where: { ContentLink: { Id: { eq: $id }, WorkId: { eq: $workId }, GuidValue: { eq: $guidValue } },IsCommonDraft: {eq: $isCommonDraft} }, orderBy: { Status: ASC }, locale: $locale, limit: 1 ) { total items { contentType: ContentType id: ContentLink { id: Id, workId: WorkId, guidValue: GuidValue } locale: Language { name: Name } ...${name} } } } ${print(fragment)}`;
        const fragmentVariables = Utils.contentLinkToRequestVariables(contentLink);
        if (!fragmentVariables?.workId && inEditMode)
            fragmentVariables.isCommonDraft = true;
        if (DEBUG)
            console.log(`[CmsContent] Component data fetching using fragment ${name}, with variables: ${JSON.stringify(fragmentVariables)}`);
        const fragmentResponse = await client.request(fragmentQuery, fragmentVariables);
        const totalItems = fragmentResponse.contentById.total || 0;
        if (totalItems < 1)
            throw new Error(`CmsContent expected to load exactly one content item, received ${totalItems} from Optimizely Graph.`);
        if (totalItems > 1 && DEBUG)
            console.warn(`[CmsContent] Resolved ${totalItems} content items, expected only 1. Picked the first one`);
        return _jsx(Component, { inEditMode: inEditMode, contentLink: contentLink, data: fragmentResponse.contentById.items[0], client: client });
    }
    // Assume there's no server side prepared data needed for the component
    if (DEBUG)
        console.log(`[CmsContent] Component of type "${contentType?.join('/') ?? Component.displayName ?? '?'}" did not request pre-loading of data`);
    return _jsx(Component, { inEditMode: inEditMode, contentLink: contentLink, data: fragmentData || {}, client: client });
};
export default CmsContent;
export async function getContentType(link, gqlClient) {
    if ((!link.id || link.id < 1) && (!link.guidValue || link.guidValue == ""))
        throw new Error("Cannot dynamically determine the content type of an inline block");
    const gqlQueryVars = Utils.contentLinkToRequestVariables(link);
    const gqlResponse = await gqlClient.request(Queries.getContentTypeQuery, gqlQueryVars);
    if (gqlResponse.Content?.total != 1) {
        if (DEBUG)
            console.error(`getContentType: Expected exactly one type, received ${gqlResponse.Content?.total ?? 0} types for`, gqlQueryVars);
        return undefined;
    }
    const items = gqlResponse.Content?.items;
    if (!items || items.length == 0)
        throw new Error("The content item could not be found!");
    const contentType = Utils.normalizeContentType(items[0]?.ContentType);
    if (!contentType)
        throw new Error("The item did not contain type information");
    return contentType;
}
