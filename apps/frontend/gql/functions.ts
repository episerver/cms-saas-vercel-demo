import type * as Types from './graphql'
import { gql , type GraphQLClient } from 'graphql-request'


export function getContentByPath(client: GraphQLClient, variables: Types.GetContentByPathQueryVariables) : Promise<Types.GetContentByPathQuery>
{
  const query = gql`query getContentByPath($path: String!, $locale: [Locales], $siteId: String) { Content( where: {RelativePath: {eq: $path}, SiteId: {eq: $siteId}} locale: $locale ) { items { ...PageData } } } fragment PageData on IContent { ...IContentData ...ArticleListPageData ...ArticlePageData ...LandingPageData ...LocationListPageData ...LocationPageData } fragment IContentData on IContent { contentType: ContentType id: ContentLink { ...ContentLink } locale: Language { name: Name } path: RelativePath } fragment ArticleListPageData on ArticleListPage { Name ArticleListTitle ArticleListBody ArticleListHero { ...ContentAreaItemData } } fragment ArticlePageData on ArticlePage { Title MainBody StartPublish ArticleAuthor PageImage { ...ImageData } SeoSettings { MetaDescription } } fragment LandingPageData on LandingPage { TopContentArea { ...ContentAreaItemData } MainContentArea { ...ContentAreaItemData } } fragment LocationListPageData on LocationListPage { LocationListTitle LocationsIntroduction LocationsImage { ...ImageDataSearch } LocationsTopArea { ...ContentAreaItemData } LocationsMainContent { ...ContentAreaItemData } } fragment LocationPageData on LocationPage { ParentLink { Url Expanded { RelativePath } } Name LocationTitle LocationServices LocationStreet1 LocationStreet2 LocationPostalCode LocationCity LocationState LocationCountry LocationContinent LocationPhone LocationLatitude LocationLongitude LocationText LocationImage { ...ImageDataSearch } } fragment ContentLink on ContentModelReference { id: Id workId: WorkId guidValue: GuidValue } fragment ContentAreaItemData on ContentAreaItemModelSearch { item: ContentLink { ...ContentLinkSearch data: Expanded { ...BlockData } } displayOption: DisplayOption } fragment ContentLinkSearch on ContentModelReferenceSearch { id: Id workId: WorkId guidValue: GuidValue } fragment BlockData on IContent { ...IContentData ...ButtonBlockData ...CardBlockData ...CarouselBlockData ...ContainerBlockData ...HeroBlockData ...HighlightBlockData ...ImageMediaData ...OdpEmbedBlockData ...ProductBlockData ...QuoteData ...TextBlockData ...ArticlePageBlockData ...ButtonBlockData ...CardBlockData ...CarouselBlockData ...ContainerBlockData ...HeroBlockData ...HighlightBlockData ...ImageMediaData ...OdpEmbedBlockData ...ProductBlockData ...QuoteData ...TextBlockData } fragment ButtonBlockData on ButtonBlock { ButtonLink { Href Title Target Text } } fragment CardBlockData on CardBlock { Title Description Image { Url Expanded { Name Path: RelativePath } } Button: Link { ...LinkItemData } } fragment CarouselBlockData on CarouselBlock { CarouselSlides { ...BlockContentAreaItemSearchData } ShowArrows } fragment ContainerBlockData on ContainerBlock { MainContainerArea { ...BlockContentAreaItemSearchData } Gap Spacing GridLayout BackgroundColor } fragment HeroBlockData on HeroBlock { Name Background BannerTitle BannerText CalloutOpacity BannerLink { ...LinkItemData } } fragment HighlightBlockData on HighlightTextBlock { Title PayOffText } fragment ImageMediaData on Content { RelativePath } fragment OdpEmbedBlockData on OdpEmbedBlock { ContentId } fragment ProductBlockData on Product { ProductCode ProductName ProductTagLine ShortDescription MainImage { ...ImageData } } fragment QuoteData on QuoteBlock { Text Quotee Role QuoteeLocation Photo { ...ImageData } } fragment TextBlockData on TextBlock { Spacing MainBody } fragment ArticlePageBlockData on ArticlePage { href: RelativePath name: Name title: Title author: ArticleAuthor published: StartPublish image: PageImage { src: Url data: Expanded { alt: Name } } meta: SeoSettings { intro: MetaDescription } } fragment LinkItemData on LinkItemNode { children: Text title: Title href: Href target: Target content: ContentLink { href: Url data: Expanded { path: RelativePath } } } fragment BlockContentAreaItemSearchData on ContentAreaItemModelSearch { item: ContentLink { ...ContentLinkSearch data: Expanded { ...IContentData } } displayOption: DisplayOption } fragment ImageData on ContentModelReference { ...ContentLink url: Url data: Expanded { ...IContentData url: Url alt: Name path: RelativePath } } fragment ImageDataSearch on ContentModelReferenceSearch { ...ContentLinkSearch url: Url data: Expanded { ...IContentData url: Url alt: Name path: RelativePath } }`
  return client.request<Types.GetContentByPathQuery, Types.GetContentByPathQueryVariables>(query, variables)
}

export function getContentById(client: GraphQLClient, variables: Types.GetContentByIdQueryVariables) : Promise<Types.GetContentByIdQuery>
{
  const query = gql`query getContentById($id: Int, $workId: Int, $guidValue: String, $locale: [Locales!], $isCommonDraft: Boolean) { Content( where: {ContentLink: {Id: {eq: $id}, WorkId: {eq: $workId}, GuidValue: {eq: $guidValue}}, IsCommonDraft: {eq: $isCommonDraft}} locale: $locale ) { total items { ...IContentData ...PageData ...BlockData } } } fragment IContentData on IContent { contentType: ContentType id: ContentLink { ...ContentLink } locale: Language { name: Name } path: RelativePath } fragment PageData on IContent { ...IContentData ...ArticleListPageData ...ArticlePageData ...LandingPageData ...LocationListPageData ...LocationPageData } fragment BlockData on IContent { ...IContentData ...ButtonBlockData ...CardBlockData ...CarouselBlockData ...ContainerBlockData ...HeroBlockData ...HighlightBlockData ...ImageMediaData ...OdpEmbedBlockData ...ProductBlockData ...QuoteData ...TextBlockData ...ArticlePageBlockData ...ButtonBlockData ...CardBlockData ...CarouselBlockData ...ContainerBlockData ...HeroBlockData ...HighlightBlockData ...ImageMediaData ...OdpEmbedBlockData ...ProductBlockData ...QuoteData ...TextBlockData } fragment ContentLink on ContentModelReference { id: Id workId: WorkId guidValue: GuidValue } fragment ArticleListPageData on ArticleListPage { Name ArticleListTitle ArticleListBody ArticleListHero { ...ContentAreaItemData } } fragment ArticlePageData on ArticlePage { Title MainBody StartPublish ArticleAuthor PageImage { ...ImageData } SeoSettings { MetaDescription } } fragment LandingPageData on LandingPage { TopContentArea { ...ContentAreaItemData } MainContentArea { ...ContentAreaItemData } } fragment LocationListPageData on LocationListPage { LocationListTitle LocationsIntroduction LocationsImage { ...ImageDataSearch } LocationsTopArea { ...ContentAreaItemData } LocationsMainContent { ...ContentAreaItemData } } fragment LocationPageData on LocationPage { ParentLink { Url Expanded { RelativePath } } Name LocationTitle LocationServices LocationStreet1 LocationStreet2 LocationPostalCode LocationCity LocationState LocationCountry LocationContinent LocationPhone LocationLatitude LocationLongitude LocationText LocationImage { ...ImageDataSearch } } fragment ContentAreaItemData on ContentAreaItemModelSearch { item: ContentLink { ...ContentLinkSearch data: Expanded { ...BlockData } } displayOption: DisplayOption } fragment ContentLinkSearch on ContentModelReferenceSearch { id: Id workId: WorkId guidValue: GuidValue } fragment ImageData on ContentModelReference { ...ContentLink url: Url data: Expanded { ...IContentData url: Url alt: Name path: RelativePath } } fragment ImageDataSearch on ContentModelReferenceSearch { ...ContentLinkSearch url: Url data: Expanded { ...IContentData url: Url alt: Name path: RelativePath } } fragment ButtonBlockData on ButtonBlock { ButtonLink { Href Title Target Text } } fragment CardBlockData on CardBlock { Title Description Image { Url Expanded { Name Path: RelativePath } } Button: Link { ...LinkItemData } } fragment CarouselBlockData on CarouselBlock { CarouselSlides { ...BlockContentAreaItemSearchData } ShowArrows } fragment ContainerBlockData on ContainerBlock { MainContainerArea { ...BlockContentAreaItemSearchData } Gap Spacing GridLayout BackgroundColor } fragment HeroBlockData on HeroBlock { Name Background BannerTitle BannerText CalloutOpacity BannerLink { ...LinkItemData } } fragment HighlightBlockData on HighlightTextBlock { Title PayOffText } fragment ImageMediaData on Content { RelativePath } fragment OdpEmbedBlockData on OdpEmbedBlock { ContentId } fragment ProductBlockData on Product { ProductCode ProductName ProductTagLine ShortDescription MainImage { ...ImageData } } fragment QuoteData on QuoteBlock { Text Quotee Role QuoteeLocation Photo { ...ImageData } } fragment TextBlockData on TextBlock { Spacing MainBody } fragment ArticlePageBlockData on ArticlePage { href: RelativePath name: Name title: Title author: ArticleAuthor published: StartPublish image: PageImage { src: Url data: Expanded { alt: Name } } meta: SeoSettings { intro: MetaDescription } } fragment LinkItemData on LinkItemNode { children: Text title: Title href: Href target: Target content: ContentLink { href: Url data: Expanded { path: RelativePath } } } fragment BlockContentAreaItemSearchData on ContentAreaItemModelSearch { item: ContentLink { ...ContentLinkSearch data: Expanded { ...IContentData } } displayOption: DisplayOption }`
  return client.request<Types.GetContentByIdQuery, Types.GetContentByIdQueryVariables>(query, variables)
}


/**
 * Function client for Optimizely Graph, exposing both the raw request method,
 * as well as the high level convenience methods to read content from 
 * Optimizely Graph. The actual format for each of the Content Items returned
 * by these convenience methods is defined by the GraphQL Fragments within the
 * application codebase.
 */
export class OptimizelyClient {
  private _client : GraphQLClient

  public constructor (client: GraphQLClient) 
  {
    this._client = client
  }

  /**
   * Direct Pass through to the GraphQL Request based client
   * 
   * @see     GraphQLClient.request
   * @param   documentOrOptions 
   * @param   variablesAndRequestHeaders 
   * @returns 
   */
  //@ts-expect-error The Args property isn't correctly types for this pass-through
  public request : GraphQLClient['request'] = (documentOrOptions, ...variablesAndRequestHeaders) => this._client.request(documentOrOptions, ...variablesAndRequestHeaders)


  /**
   * Direct Pass through to the GraphQL Request based client
   *
   * @see     GraphQLClient.request
   * @param   documentOrOptions 
   * @param   variablesAndRequestHeaders 
   * @returns 
   */
  //@ts-expect-error The Args property isn't correctly types for this pass-through
  public query : GraphQLClient['request'] = (documentOrOptions, ...variablesAndRequestHeaders) => this._client.request(documentOrOptions, ...variablesAndRequestHeaders)
    
  public getContentByPath(variables: Types.GetContentByPathQueryVariables) : Promise<Types.GetContentByPathQuery>
  {
    return getContentByPath(this._client, variables)
  }

  public getContentById(variables: Types.GetContentByIdQueryVariables) : Promise<Types.GetContentByIdQuery>
  {
    return getContentById(this._client, variables)
  }
}
