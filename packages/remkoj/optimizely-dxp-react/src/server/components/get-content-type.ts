import type { IOptiGraphClient } from "@remkoj/optimizely-graph-client"
import type { ContentType, ContentLinkWithLocale } from "../../types"
import { gql } from 'graphql-request'
import * as Utils from "../../utilities"

const DEBUG = false

/**
 * Resolve the ContentType of an Optimizely CMS Component, identified by its content link
 * 
 * @param       link        The ContentLink of the content item
 * @param       gqlClient   The GraphQL client to use
 * @returns     The ContentType, or undefined if it cannot be resolved
 */
export async function getContentType(link: ContentLinkWithLocale, gqlClient: IOptiGraphClient) : Promise<ContentType | undefined>
{
    if ((!link.id || link.id < 1) && (!link.guidValue || link.guidValue == ""))
        throw new Error("Cannot dynamically determine the content type of an inline block")
    const gqlQueryVars = Utils.contentLinkToRequestVariables(link)
    const gqlResponse = await gqlClient.request<GetContentTypeResponse>(getContentTypeQuery, gqlQueryVars)
    if (gqlResponse.Content?.total != 1) {
        if (DEBUG) 
            console.error(`getContentType: Expected exactly one type, received ${ gqlResponse.Content?.total ?? 0 } types for`, gqlQueryVars)
        return undefined
    }
    
    const items = gqlResponse.Content?.items
    if (!items || items.length == 0)
        throw new Error("The content item could not be found!")

    const contentType = Utils.normalizeContentType(items[0]?.ContentType)
    if (!contentType)
        throw new Error("The item did not contain type information")

    return contentType
}

export default getContentType

type GetContentTypeResponse = {
    Content: {
        items: {
            ContentType: string[]
        }[]
        total: number
    }
}

export const getContentTypeQuery = gql`query getContentType($id: Int, $workId: Int, $guidValue: String, $locale: [Locales])
{
  Content(
    where: {
      ContentLink: {
        GuidValue: {
          eq: $guidValue
        }
        Id: {
          eq: $id
        },
        WorkId: {
          eq: $workId
        }
      }
    },
    locale: $locale
    limit: 1
  ) {
    items {
    	ContentType
    },
    total
  }
}`