import type { GetContentByIdMethod, GetContentByIdVariables,GetContentByIdData } from './types'
import { gql } from '@apollo/client'

export const getContentById : GetContentByIdMethod = async (client, variables) =>
{
    const result = await client.query<GetContentByIdData, GetContentByIdVariables>({ query: gqlQuery, variables })
    if (result.error) throw result.error
    return result.data
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