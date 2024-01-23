import { gql, type ApolloClient } from "@apollo/client"

export type GetContentByPathVariables = {
    path: string,
    locale?: Array<string | null>[] | string | null,
    siteId?: string | null
}

export type GetContentByPathResponse = {
    Content?: {
        items?: {
            contentType?: Array<string|null> | null
            id?: {
                id?: number | null
                workId?: number | null
                guidValue?: string | null
            } | null
            locale?: {
                name?: string | null
            } | null
            path?: string | null
        }[]
    }
}

export type GetMetaDataByPathResponse = {
    getGenericMetaData?: {
        items?: Array<{
            name?: string,
            alternatives?: Array<{
                locale?: string | null
                href?: string | null
            } | null> | null
            canonical?: string | null
        } | null>
    }
}

export type GetContentByPathMethod = (client: ApolloClient<any>, variables: GetContentByPathVariables) => Promise<GetContentByPathResponse>
export type GetMetaDataByPathMethod = (client: ApolloClient<any>, variables: GetContentByPathVariables) => Promise<GetMetaDataByPathResponse>

export const getMetaDataByPath: GetMetaDataByPathMethod = async (client, variables) =>
{
    const result = await client.query<GetMetaDataByPathResponse,GetContentByPathVariables>({ query: metadataQuery, variables })
    if (result.error) throw result.error
    return result.data
}

export const getContentByPath: GetContentByPathMethod = async (client, variables) =>
{
    const result = await client.query<GetContentByPathResponse,GetContentByPathVariables>({ query: contentQuery, variables })
    if (result.error) throw result.error
    return result.data
}

export default getContentByPath

const contentQuery = gql`query getContentByPathBase($path: String!, $locale: [Locales], $siteId: String) {
    Content(
        where: { RelativePath: { eq: $path }, SiteId: { eq: $siteId } }
        locale: $locale
    ) {
        items {
            contentType: ContentType
            id: ContentLink {
                id: Id
                workId: WorkId
                guidValue: GuidValue
            }
            locale: Language {
                name: Name
            }
            path: RelativePath
        }
    }
}`

const metadataQuery = gql`query getGenericMetaData($path: String!, $locale: [Locales], $siteId: String) {
    getGenericMetaData: Content (
        where: { RelativePath: { eq: $path }, SiteId: { eq: $siteId } }
        locale: $locale
    ) {
        items {
            name: Name,
            alternatives: ExistingLanguages {
                locale: Name
                href: Link
            }
            canonical: Url
        }
    }
}`