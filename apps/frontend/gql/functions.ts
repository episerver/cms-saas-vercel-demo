import "server-only"
import type * as Types from './graphql'
import { gql as parse, type ApolloClient, type NormalizedCacheObject } from '@apollo/client'


export async function getContentByPath(client: ApolloClient<NormalizedCacheObject>, variables: Types.GetContentByPathQueryVariables) : Promise<Types.GetContentByPathQuery>
{
  const query = `query getContentByPath($path: String!, $locale: [Locales], $siteId: String) { Content( where: {RelativePath: {eq: $path}, SiteId: {eq: $siteId}} locale: $locale ) { items { ...PageData } } } fragment PageData on IContent { ...IContentData ...ArticleListPageData ...ArticlePageData ...LandingPageData ...LocationListPageData ...LocationPageData } fragment ArticleListPageData on ArticleListPage { Name ArticleListTitle ArticleListBody ArticleListHero { ...ContentAreaItemData } } fragment ArticlePageData on ArticlePage { Title MainBody StartPublish ArticleAuthor PageImage { ...ImageData } SeoSettings { MetaDescription } } fragment LandingPageData on LandingPage { TopContentArea { ...ContentAreaItemData } MainContentArea { ...ContentAreaItemData } } fragment LocationListPageData on LocationListPage { LocationListTitle LocationsIntroduction LocationsImage { ...ImageDataSearch } LocationsTopArea { ...ContentAreaItemData } LocationsMainContent { ...ContentAreaItemData } } fragment LocationPageData on LocationPage { ParentLink { Url Expanded { RelativePath } } Name LocationTitle LocationServices LocationStreet1 LocationStreet2 LocationPostalCode LocationCity LocationState LocationCountry LocationContinent LocationPhone LocationLatitude LocationLongitude LocationText LocationImage { ...ImageDataSearch } } fragment IContentData on IContent { contentType: ContentType id: ContentLink { ...ContentLink } locale: Language { name: Name } path: RelativePath } fragment ContentAreaItemData on ContentAreaItemModelSearch { item: ContentLink { ...ContentLinkSearch data: Expanded { ...BlockData } } displayOption: DisplayOption } fragment ContentLinkSearch on ContentModelReferenceSearch { id: Id workId: WorkId guidValue: GuidValue } fragment BlockData on IContent { ...IContentData ...ButtonBlockData ...CardBlockData ...CarouselBlockData ...ContainerBlockData ...HeroBlockData ...HighlightBlockData ...ImageMediaData ...OdpEmbedBlockData ...ProductBlockData ...QuoteData ...TextBlockData ...ArticlePageBlockData ...ButtonBlockData ...CardBlockData ...CarouselBlockData ...ContainerBlockData ...HeroBlockData ...HighlightBlockData ...ImageMediaData ...OdpEmbedBlockData ...ProductBlockData ...QuoteData ...TextBlockData } fragment ButtonBlockData on ButtonBlock { ButtonLink { Href Title Target Text } } fragment CardBlockData on CardBlock { Title Description Image { Url Expanded { Name Path: RelativePath } } Button: Link { ...LinkItemData } } fragment CarouselBlockData on CarouselBlock { CarouselSlides { ...BlockContentAreaItemData } ShowArrows } fragment ContainerBlockData on ContainerBlock { MainContainerArea { ...BlockContentAreaItemData } Gap Spacing GridLayout BackgroundColor } fragment HeroBlockData on HeroBlock { Name Background BannerTitle BannerText CalloutOpacity BannerLink { ...LinkItemData } } fragment HighlightBlockData on HighlightTextBlock { Title PayOffText } fragment ImageMediaData on Content { RelativePath } fragment OdpEmbedBlockData on OdpEmbedBlock { ContentId } fragment ProductBlockData on Product { ProductCode ProductName ProductTagLine ShortDescription MainImage { ...ImageData } } fragment QuoteData on QuoteBlock { Text Quotee Role QuoteeLocation Photo { ...ImageData } } fragment TextBlockData on TextBlock { Spacing MainBody } fragment ArticlePageBlockData on ArticlePage { href: RelativePath name: Name title: Title author: ArticleAuthor published: StartPublish image: PageImage { src: Url data: Expanded { alt: Name } } meta: SeoSettings { intro: MetaDescription } } fragment LinkItemData on LinkItemNode { children: Text title: Title href: Href target: Target content: ContentLink { href: Url data: Expanded { path: RelativePath } } } fragment BlockContentAreaItemData on ContentAreaItemModelSearch { item: ContentLink { ...ContentLinkSearch data: Expanded { ...IContentData } } displayOption: DisplayOption } fragment ImageData on ContentModelReference { ...ContentLink url: Url data: Expanded { ...IContentData url: Url alt: Name path: RelativePath } } fragment ContentLink on ContentModelReference { id: Id workId: WorkId guidValue: GuidValue } fragment ImageDataSearch on ContentModelReferenceSearch { ...ContentLinkSearch url: Url data: Expanded { ...IContentData url: Url alt: Name path: RelativePath } }`
  const result = await client.query({ query: parse(query), variables })
  if (result.error) throw result.error
  return result.data
}

export async function getContentById(client: ApolloClient<NormalizedCacheObject>, variables: Types.GetContentByIdQueryVariables) : Promise<Types.GetContentByIdQuery>
{
  const query = `query getContentById($id: Int, $workId: Int, $guidValue: String, $locale: [Locales!], $isCommonDraft: Boolean) { Content( where: {ContentLink: {Id: {eq: $id}, WorkId: {eq: $workId}, GuidValue: {eq: $guidValue}}, IsCommonDraft: {eq: $isCommonDraft}} locale: $locale ) { total items { ...PageData ...BlockData } } } fragment BlockData on IContent { ...IContentData ...ButtonBlockData ...CardBlockData ...CarouselBlockData ...ContainerBlockData ...HeroBlockData ...HighlightBlockData ...ImageMediaData ...OdpEmbedBlockData ...ProductBlockData ...QuoteData ...TextBlockData ...ArticlePageBlockData ...ButtonBlockData ...CardBlockData ...CarouselBlockData ...ContainerBlockData ...HeroBlockData ...HighlightBlockData ...ImageMediaData ...OdpEmbedBlockData ...ProductBlockData ...QuoteData ...TextBlockData } fragment PageData on IContent { ...IContentData ...ArticleListPageData ...ArticlePageData ...LandingPageData ...LocationListPageData ...LocationPageData } fragment ButtonBlockData on ButtonBlock { ButtonLink { Href Title Target Text } } fragment CardBlockData on CardBlock { Title Description Image { Url Expanded { Name Path: RelativePath } } Button: Link { ...LinkItemData } } fragment CarouselBlockData on CarouselBlock { CarouselSlides { ...BlockContentAreaItemData } ShowArrows } fragment ContainerBlockData on ContainerBlock { MainContainerArea { ...BlockContentAreaItemData } Gap Spacing GridLayout BackgroundColor } fragment HeroBlockData on HeroBlock { Name Background BannerTitle BannerText CalloutOpacity BannerLink { ...LinkItemData } } fragment HighlightBlockData on HighlightTextBlock { Title PayOffText } fragment ImageMediaData on Content { RelativePath } fragment OdpEmbedBlockData on OdpEmbedBlock { ContentId } fragment ProductBlockData on Product { ProductCode ProductName ProductTagLine ShortDescription MainImage { ...ImageData } } fragment QuoteData on QuoteBlock { Text Quotee Role QuoteeLocation Photo { ...ImageData } } fragment TextBlockData on TextBlock { Spacing MainBody } fragment ArticlePageBlockData on ArticlePage { href: RelativePath name: Name title: Title author: ArticleAuthor published: StartPublish image: PageImage { src: Url data: Expanded { alt: Name } } meta: SeoSettings { intro: MetaDescription } } fragment IContentData on IContent { contentType: ContentType id: ContentLink { ...ContentLink } locale: Language { name: Name } path: RelativePath } fragment LinkItemData on LinkItemNode { children: Text title: Title href: Href target: Target content: ContentLink { href: Url data: Expanded { path: RelativePath } } } fragment BlockContentAreaItemData on ContentAreaItemModelSearch { item: ContentLink { ...ContentLinkSearch data: Expanded { ...IContentData } } displayOption: DisplayOption } fragment ContentLinkSearch on ContentModelReferenceSearch { id: Id workId: WorkId guidValue: GuidValue } fragment ImageData on ContentModelReference { ...ContentLink url: Url data: Expanded { ...IContentData url: Url alt: Name path: RelativePath } } fragment ContentLink on ContentModelReference { id: Id workId: WorkId guidValue: GuidValue } fragment ArticleListPageData on ArticleListPage { Name ArticleListTitle ArticleListBody ArticleListHero { ...ContentAreaItemData } } fragment ArticlePageData on ArticlePage { Title MainBody StartPublish ArticleAuthor PageImage { ...ImageData } SeoSettings { MetaDescription } } fragment LandingPageData on LandingPage { TopContentArea { ...ContentAreaItemData } MainContentArea { ...ContentAreaItemData } } fragment LocationListPageData on LocationListPage { LocationListTitle LocationsIntroduction LocationsImage { ...ImageDataSearch } LocationsTopArea { ...ContentAreaItemData } LocationsMainContent { ...ContentAreaItemData } } fragment LocationPageData on LocationPage { ParentLink { Url Expanded { RelativePath } } Name LocationTitle LocationServices LocationStreet1 LocationStreet2 LocationPostalCode LocationCity LocationState LocationCountry LocationContinent LocationPhone LocationLatitude LocationLongitude LocationText LocationImage { ...ImageDataSearch } } fragment ContentAreaItemData on ContentAreaItemModelSearch { item: ContentLink { ...ContentLinkSearch data: Expanded { ...BlockData } } displayOption: DisplayOption } fragment ImageDataSearch on ContentModelReferenceSearch { ...ContentLinkSearch url: Url data: Expanded { ...IContentData url: Url alt: Name path: RelativePath } }`
  const result = await client.query({ query: parse(query), variables })
  if (result.error) throw result.error
  return result.data
}