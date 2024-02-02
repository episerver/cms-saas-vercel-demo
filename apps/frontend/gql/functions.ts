import "server-only"
import type * as Types from './graphql'
import { gql as parse, type ApolloClient, type NormalizedCacheObject } from '@apollo/client'


export async function getContentByPath(client: ApolloClient<NormalizedCacheObject>, variables: Types.GetContentByPathQueryVariables) : Promise<Types.GetContentByPathQuery>
{
  const query = `query getContentByPath($path: String!, $locale: [Locales], $siteId: String) { Content( where: {RelativePath: {eq: $path}, SiteId: {eq: $siteId}} locale: $locale ) { items { ...PageData } } } fragment PageData on IContent { ...IContentData ...StartPageData } fragment StartPageData on StartPage { HomePageHeroContentArea { ...ContentAreaItemData } HomePageMainContentArea { ...ContentAreaItemData } } fragment IContentData on IContent { contentType: ContentType id: ContentLink { ...ContentLink } locale: Language { name: Name } path: RelativePath } fragment ContentAreaItemData on ContentAreaItemModelSearch { item: ContentLink { ...ContentLinkSearch data: Expanded { ...BlockData } } displayOption: DisplayOption } fragment ContentLinkSearch on ContentModelReferenceSearch { id: Id workId: WorkId guidValue: GuidValue } fragment BlockData on IContent { ...IContentData } fragment ContentLink on ContentModelReference { id: Id workId: WorkId guidValue: GuidValue }`
  const result = await client.query({ query: parse(query), variables })
  if (result.error) throw result.error
  return result.data
}

export async function getContentById(client: ApolloClient<NormalizedCacheObject>, variables: Types.GetContentByIdQueryVariables) : Promise<Types.GetContentByIdQuery>
{
  const query = `query getContentById($id: Int, $workId: Int, $guidValue: String, $locale: [Locales!], $isCommonDraft: Boolean) { Content( where: {ContentLink: {Id: {eq: $id}, WorkId: {eq: $workId}, GuidValue: {eq: $guidValue}}, IsCommonDraft: {eq: $isCommonDraft}} locale: $locale ) { total items { ...PageData ...BlockData } } } fragment BlockData on IContent { ...IContentData } fragment PageData on IContent { ...IContentData ...StartPageData } fragment IContentData on IContent { contentType: ContentType id: ContentLink { ...ContentLink } locale: Language { name: Name } path: RelativePath } fragment ContentLink on ContentModelReference { id: Id workId: WorkId guidValue: GuidValue } fragment StartPageData on StartPage { HomePageHeroContentArea { ...ContentAreaItemData } HomePageMainContentArea { ...ContentAreaItemData } } fragment ContentAreaItemData on ContentAreaItemModelSearch { item: ContentLink { ...ContentLinkSearch data: Expanded { ...BlockData } } displayOption: DisplayOption } fragment ContentLinkSearch on ContentModelReferenceSearch { id: Id workId: WorkId guidValue: GuidValue }`
  const result = await client.query({ query: parse(query), variables })
  if (result.error) throw result.error
  return result.data
}