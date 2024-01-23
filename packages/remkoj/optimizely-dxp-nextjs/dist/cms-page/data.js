import { gql } from "@apollo/client";
export const getMetaDataByPath = async (client, variables) => {
    const result = await client.query({ query: metadataQuery, variables });
    if (result.error)
        throw result.error;
    return result.data;
};
export const getContentByPath = async (client, variables) => {
    const result = await client.query({ query: contentQuery, variables });
    if (result.error)
        throw result.error;
    return result.data;
};
export default getContentByPath;
const contentQuery = gql `query getContentByPathBase($path: String!, $locale: [Locales], $siteId: String) {
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
}`;
const metadataQuery = gql `query getGenericMetaData($path: String!, $locale: [Locales], $siteId: String) {
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
}`;
