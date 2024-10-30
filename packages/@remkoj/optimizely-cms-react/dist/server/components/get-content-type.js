import { gql } from 'graphql-request';
import * as Utils from "../../utilities.js";
import { isContentLink } from "@remkoj/optimizely-graph-client/utils";
const DEBUG = false;
/**
 * Resolve the ContentType of an Optimizely CMS Component, identified by its content link
 *
 * @param       link        The ContentLink of the content item
 * @param       gqlClient   The GraphQL client to use
 * @returns     The ContentType, or undefined if it cannot be resolved
 */
export async function getContentType(link, gqlClient) {
    if (!isContentLink(link))
        throw new Error("Cannot dynamically determine the content type of an inline block");
    const gqlQueryVars = Utils.contentLinkToRequestVariables(link);
    const gqlResponse = await gqlClient.request(getContentTypeQuery, gqlQueryVars);
    if (gqlResponse.Content?.total != 1) {
        if (DEBUG)
            console.error(`getContentType: Expected exactly one type, received ${gqlResponse.Content?.total ?? 0} types for`, gqlQueryVars);
        return undefined;
    }
    const items = gqlResponse.Content?.items;
    if (!items || items.length == 0)
        throw new Error("The content item could not be found!");
    const contentType = Utils.normalizeContentType(items[0]?._metadata?.types);
    if (!contentType)
        throw new Error("The item did not contain type information");
    return contentType;
}
export default getContentType;
export const getContentTypeQuery = gql `query getContentType($key: String!, $version: String, $locale: [Locales])
{
  _Content(
    where: {
      _metadata: {
        key: { eq: $key }
        version: { eq: $version }
      }
    },
    locale: $locale
    limit: 1
  ) {
    items {
    	_metadata {
        types
      }
    },
    total
  }
}`;
//# sourceMappingURL=get-content-type.js.map