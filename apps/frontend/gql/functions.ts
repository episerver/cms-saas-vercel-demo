import "server-only"
import type * as Types from './graphql'
import { gql as parse, type ApolloClient, type NormalizedCacheObject } from '@apollo/client'


export async function getContentByPath(client: ApolloClient<NormalizedCacheObject>, variables: Types.GetContentByPathQueryVariables) : Promise<Types.GetContentByPathQuery>
{
  const query = `query getContentByPath($path: String!, $locale: [Locales], $siteId: String) { Content( where: {RelativePath: {eq: $path}, SiteId: {eq: $siteId}} locale: $locale ) { items { ...PageData } } } fragment PageData on IContent { ...IContentData ...StartPageData } fragment StartPageData on StartPage { HomePageHeroContentArea { ContentLink { Expanded { _deleted _modified _score _id Name RouteSegment Url Changed Created StartPublish StopPublish Saved Status IsCommonDraft RelativePath SiteId ContentType } } } HomePageMainContentArea { ContentLink { Expanded { _deleted _modified _score _id Name RouteSegment Url Changed Created StartPublish StopPublish Saved Status IsCommonDraft RelativePath SiteId ContentType } } } } fragment IContentData on IContent { contentType: ContentType id: ContentLink { ...ContentLink } locale: Language { name: Name } path: RelativePath } fragment ContentLink on ContentModelReference { id: Id workId: WorkId guidValue: GuidValue }`
  const result = await client.query({ query: parse(query), variables })
  if (result.error) throw result.error
  return result.data
}

export async function getContentById(client: ApolloClient<NormalizedCacheObject>, variables: Types.GetContentByIdQueryVariables) : Promise<Types.GetContentByIdQuery>
{
  const query = `query getContentById($id: Int, $workId: Int, $guidValue: String, $locale: [Locales!], $isCommonDraft: Boolean) { Content( where: {ContentLink: {Id: {eq: $id}, WorkId: {eq: $workId}, GuidValue: {eq: $guidValue}}, IsCommonDraft: {eq: $isCommonDraft}} locale: $locale ) { total items { ...PageData ...BlockData } } } fragment BlockData on IContent { ...IContentData } fragment PageData on IContent { ...IContentData ...StartPageData } fragment IContentData on IContent { contentType: ContentType id: ContentLink { ...ContentLink } locale: Language { name: Name } path: RelativePath } fragment ContentLink on ContentModelReference { id: Id workId: WorkId guidValue: GuidValue } fragment StartPageData on StartPage { HomePageHeroContentArea { ContentLink { Expanded { _deleted _modified _score _id Name RouteSegment Url Changed Created StartPublish StopPublish Saved Status IsCommonDraft RelativePath SiteId ContentType } } } HomePageMainContentArea { ContentLink { Expanded { _deleted _modified _score _id Name RouteSegment Url Changed Created StartPublish StopPublish Saved Status IsCommonDraft RelativePath SiteId ContentType } } } }`
  const result = await client.query({ query: parse(query), variables })
  if (result.error) throw result.error
  return result.data
}