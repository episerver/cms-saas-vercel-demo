import type { IOptiGraphClient } from "@remkoj/optimizely-graph-client";
import type { ContentType, ContentLinkWithLocale } from "../../types.js";
/**
 * Resolve the ContentType of an Optimizely CMS Component, identified by its content link
 *
 * @param       link        The ContentLink of the content item
 * @param       gqlClient   The GraphQL client to use
 * @returns     The ContentType, or undefined if it cannot be resolved
 */
export declare function getContentType(link: ContentLinkWithLocale, gqlClient: IOptiGraphClient): Promise<ContentType | undefined>;
export default getContentType;
export declare const getContentTypeQuery: string;
