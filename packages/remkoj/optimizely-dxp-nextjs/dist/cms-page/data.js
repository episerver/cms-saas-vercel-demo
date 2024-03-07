import { gql } from "graphql-request";
export const getMetaDataByPath = (client, variables) => {
    return client.request(metadataQuery, variables);
};
export const getContentByPath = (client, variables) => {
    return client.request(contentQuery, variables);
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
