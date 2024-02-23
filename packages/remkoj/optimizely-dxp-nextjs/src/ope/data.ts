import type { GetContentByIdMethod, GetContentByIdVariables,GetContentByIdData } from './types'
import { gql } from 'graphql-request'

export const getContentById : GetContentByIdMethod = async (client, variables) =>
{
    return await client.request<GetContentByIdData, GetContentByIdVariables>(gqlQuery, variables)
}

const gqlQuery = gql`query getContentByIdBase($id: Int, $workId: Int, $guidValue: String, $locale: [Locales!], $isCommonDraft: Boolean) {
    Content(
        where: {
            ContentLink: { Id: { eq: $id }, WorkId: { eq: $workId }, GuidValue: { eq: $guidValue } }
            IsCommonDraft: { eq: $isCommonDraft }
        }
        locale: $locale
    ) {
        total
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