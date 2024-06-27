import type * as Schema from "./graphql";
import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export const LinkDataFragmentDoc = /*#__PURE__*/ gql`
    fragment LinkData on ContentUrl {
  base
  hierarchical
  default
}
    `;
export const IContentInfoFragmentDoc = /*#__PURE__*/ gql`
    fragment IContentInfo on IContentMetadata {
  key
  locale
  types
  displayName
  version
  url {
    ...LinkData
  }
}
    `;
export const IElementDataFragmentDoc = /*#__PURE__*/ gql`
    fragment IElementData on _IElement {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const ElementDataFragmentDoc = /*#__PURE__*/ gql`
    fragment ElementData on _IElement {
  ...IElementData
}
    `;
export const CompositionDataFragmentDoc = /*#__PURE__*/ gql`
    fragment CompositionData on ICompositionNode {
  name: displayName
  layoutType: nodeType
  type
  key
  template: displayTemplateKey
  settings: displaySettings {
    key
    value
  }
  ... on ICompositionStructureNode {
    nodes @recursive(depth: 10) {
      name: displayName
    }
  }
  ... on ICompositionElementNode {
    element {
      ...ElementData
    }
  }
}
    `;
export const ExperienceDataFragmentDoc = /*#__PURE__*/ gql`
    fragment ExperienceData on _IExperience {
  composition {
    ...CompositionData
  }
}
    `;
export const IContentDataFragmentDoc = /*#__PURE__*/ gql`
    fragment IContentData on _IContent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const ReferenceDataFragmentDoc = /*#__PURE__*/ gql`
    fragment ReferenceData on ContentReference {
  key
  url {
    ...LinkData
  }
}
    `;
export const BlogPostPageDataFragmentDoc = /*#__PURE__*/ gql`
    fragment BlogPostPageData on BlogPostPage {
  blogTitle: Heading
  blogSubtitle: ArticleSubHeading
  blogImage: BlogPostPromoImage {
    ...ReferenceData
  }
  blogBody: BlogPostBody {
    json
  }
  blogAuthor: ArticleAuthor
}
    `;
export const BlogListingBlockDataFragmentDoc = /*#__PURE__*/ gql`
    fragment BlogListingBlockData on BlogListingBlock {
  _metadata {
    name: displayName
  }
  showFilters: BlogListingShowFilters
  selectedPageSize: BlogListingItemCount
}
    `;
export const CardBlockDataFragmentDoc = /*#__PURE__*/ gql`
    fragment CardBlockData on CardBlock {
  cardButton: CardButton {
    className: ButtonClass
    children: ButtonText
    buttonType: ButtonType
    url: ButtonUrl {
      ...LinkData
    }
    buttonVariant: ButtonVariant
  }
  cardColor: CardColor
  cardDescription: CardDescription {
    json
    html
  }
  cardHeading: CardHeading
  cardIcon: CardIcon {
    ...ReferenceData
  }
  cardImage: CardImage {
    ...ReferenceData
  }
  cardSubheading: CardSubHeading
  cardImageLayout: ImageLayout
}
    `;
export const IContentListItemFragmentDoc = /*#__PURE__*/ gql`
    fragment IContentListItem on _IContent {
  ...IContentData
}
    `;
export const CarouselBlockDataFragmentDoc = /*#__PURE__*/ gql`
    fragment CarouselBlockData on CarouselBlock {
  CarouselItemsContentArea {
    ...IContentListItem
  }
}
    `;
export const LayoutContainerBlockDataFragmentDoc = /*#__PURE__*/ gql`
    fragment LayoutContainerBlockData on LayoutContainerBlock {
  columns: ColumnsCount
  containerColor: ContainerBackgroundColor
  backgroundImage: ContainerBackgroundImage {
    ...ReferenceData
  }
  marginBottom: ContainerMarginBottom
  marginTop: ContainerMarginTop
  paddingBottom: ContainerPaddingBottom
  paddingTop: ContainerPaddingTop
  gap: GapSize
  LayoutContentArea {
    ...IContentListItem
  }
}
    `;
export const HomeHeroBlockDataFragmentDoc = /*#__PURE__*/ gql`
    fragment HomeHeroBlockData on HomePageHeroBlock {
  homeHeroHeading: HomeHeroBlockHeading
  homeHeroSubheading: HomeHeroBlockSubHeading
  homeHeroButton: HomeHeroButtonBlock {
    className: ButtonClass
    children: ButtonText
    buttonType: ButtonType
    url: ButtonUrl {
      ...LinkData
    }
    buttonVariant: ButtonVariant
  }
  leftImage: HomeHeroLeftImage {
    ...ReferenceData
  }
  rightImage: HomeHeroRightImage {
    ...ReferenceData
  }
}
    `;
export const HeroBlockDataFragmentDoc = /*#__PURE__*/ gql`
    fragment HeroBlockData on HeroBlock {
  heroHeading: Heading
  heroSubheading: SubHeading
  heroButton: HeroButton {
    className: ButtonClass
    children: ButtonText
    buttonType: ButtonType
    url: ButtonUrl {
      ...LinkData
    }
    buttonVariant: ButtonVariant
  }
  heroColor: HeroColor
  heroDescription: Description {
    html
    json
  }
  eyebrow: Eyebrow
  heroImage: HeroImage {
    ...ReferenceData
  }
}
    `;
export const OdpEmbedBlockDataFragmentDoc = /*#__PURE__*/ gql`
    fragment OdpEmbedBlockData on OdpEmbedBlock {
  ContentId
}
    `;
export const QuoteBlockDataFragmentDoc = /*#__PURE__*/ gql`
    fragment QuoteBlockData on QuoteBlock {
  quote: QuoteText
  color: QuoteColor
  active: QuoteActive
  name: QuoteProfileName
  profilePicture: QuoteProfilePicture {
    ...ReferenceData
  }
  location: QuoteProfileLocation
}
    `;
export const TextBlockDataFragmentDoc = /*#__PURE__*/ gql`
    fragment TextBlockData on TextBlock {
  overline: TextBlockOverline
  headingSize: TextBlockHeadingSize
  heading: TextBlockHeading
  description: TextBlockDescription {
    json
    html
  }
  center: TextCenter
  width: TextBlockWidth
  className: TextClassName
}
    `;
export const BlockDataFragmentDoc = /*#__PURE__*/ gql`
    fragment BlockData on _IContent {
  ...IContentData
  ...BlogListingBlockData
  ...CardBlockData
  ...CarouselBlockData
  ...LayoutContainerBlockData
  ...HomeHeroBlockData
  ...HeroBlockData
  ...OdpEmbedBlockData
  ...QuoteBlockData
  ...TextBlockData
}
    `;
export const LandingPageDataFragmentDoc = /*#__PURE__*/ gql`
    fragment LandingPageData on LandingPage {
  TopContentArea {
    ...BlockData
  }
  MainContentArea {
    ...BlockData
  }
}
    `;
export const StandardPageDataFragmentDoc = /*#__PURE__*/ gql`
    fragment StandardPageData on StandardPage {
  sptitle: StandardPageHeading
  spsubtitle: StandardSubHeading
  spimage: StandardPromoImage {
    ...ReferenceData
  }
  spdescription: MainBody {
    json
  }
}
    `;
export const StartPageDataFragmentDoc = /*#__PURE__*/ gql`
    fragment StartPageData on StartPage {
  HomePageHeroContentArea {
    ...BlockData
  }
  HomePageMainContentArea {
    ...BlockData
  }
}
    `;
export const PageDataFragmentDoc = /*#__PURE__*/ gql`
    fragment PageData on _IContent {
  ...IContentData
  ...BlogPostPageData
  ...LandingPageData
  ...StandardPageData
  ...StartPageData
}
    `;
export const HtmlBlockFragmentDoc = /*#__PURE__*/ gql`
    fragment HtmlBlock on HtmlBlock {
  title: HtmlBlockHeading
  content: HtmlContent {
    json
    html
  }
  __typename
}
    `;
export const FooterMenuNavigationItemFragmentDoc = /*#__PURE__*/ gql`
    fragment FooterMenuNavigationItem on MenuNavigationBlock {
  title: MenuNavigationHeading
  items: NavigationLinks {
    url {
      ...LinkData
    }
    title
    target
    text
  }
  __typename
}
    `;
export const LinkItemDataFragmentDoc = /*#__PURE__*/ gql`
    fragment LinkItemData on Link {
  title
  text
  target
  url {
    ...LinkData
  }
}
    `;
export const MenuNavigationItemFragmentDoc = /*#__PURE__*/ gql`
    fragment MenuNavigationItem on MenuNavigationBlock {
  title: MenuNavigationHeading
  items: NavigationLinks {
    ...LinkItemData
  }
  __typename
}
    `;
export const MenuCardItemFragmentDoc = /*#__PURE__*/ gql`
    fragment MenuCardItem on CardBlock {
  heading: CardHeading
  subheading: CardSubHeading
  description: CardDescription {
    json
  }
  color: CardColor
  image: CardImage {
    src: url {
      ...LinkData
    }
  }
  link: CardButton {
    title: ButtonText
    url: ButtonUrl {
      ...LinkData
    }
  }
  __typename
}
    `;
export const MenuButtonFragmentDoc = /*#__PURE__*/ gql`
    fragment MenuButton on ButtonBlock {
  text: ButtonText
  url: ButtonUrl {
    ...LinkData
  }
  type: ButtonType
  variant: ButtonVariant
  __typename
}
    `;
export const MenuItemFragmentDoc = /*#__PURE__*/ gql`
    fragment MenuItem on _IContent {
  __typename
  ...MenuNavigationItem
  ...MenuCardItem
  ...MenuButton
}
    `;
export const MegaMenuItemFragmentDoc = /*#__PURE__*/ gql`
    fragment MegaMenuItem on MegaMenuGroupBlock {
  menuName: MenuMenuHeading
  menuData: MegaMenuContentArea {
    ...MenuItem
  }
}
    `;
export const getContentTypeDocument = /*#__PURE__*/ gql`
    query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {
  content: _Content(
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items {
      _metadata {
        types
      }
    }
  }
}
    `;
export const getContentByIdDocument = /*#__PURE__*/ gql`
    query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {
  content: _Content(
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items {
      ...BlockData
      ...PageData
    }
  }
}
    ${BlockDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${BlogListingBlockDataFragmentDoc}
${CardBlockDataFragmentDoc}
${ReferenceDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${IContentListItemFragmentDoc}
${LayoutContainerBlockDataFragmentDoc}
${HomeHeroBlockDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${TextBlockDataFragmentDoc}
${PageDataFragmentDoc}
${BlogPostPageDataFragmentDoc}
${LandingPageDataFragmentDoc}
${StandardPageDataFragmentDoc}
${StartPageDataFragmentDoc}`;
export const getContentByPathDocument = /*#__PURE__*/ gql`
    query getContentByPath($path: String!, $version: String, $locale: [Locales!], $domain: String) {
  content: _Content(
    where: {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}
    locale: $locale
  ) {
    total
    items {
      ...PageData
    }
  }
}
    ${PageDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${BlogPostPageDataFragmentDoc}
${ReferenceDataFragmentDoc}
${LandingPageDataFragmentDoc}
${BlockDataFragmentDoc}
${BlogListingBlockDataFragmentDoc}
${CardBlockDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${IContentListItemFragmentDoc}
${LayoutContainerBlockDataFragmentDoc}
${HomeHeroBlockDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${TextBlockDataFragmentDoc}
${StandardPageDataFragmentDoc}
${StartPageDataFragmentDoc}`;
export const searchContentDocument = /*#__PURE__*/ gql`
    query searchContent($term: String!, $topInterest: String, $locale: [String!], $types: [String!], $pageSize: Int) {
  Content: _Content(
    where: {_or: [{_fulltext: {contains: $term}}, {_fulltext: {contains: $topInterest, boost: 2}}], _fulltext: {contains: $term}, _metadata: {types: {in: "Page"}}}
    orderBy: {_ranking: SEMANTIC}
    limit: $pageSize
  ) {
    total
    cursor
    items {
      _score
      ...IContentData
      _metadata {
        published
      }
      _fulltext(highlight: {enabled: true, startToken: "<span>", endToken: "</span>"})
    }
    facets {
      _metadata {
        types(filters: $types) {
          name
          count
        }
        locale(filters: $locale) {
          name
          count
        }
      }
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}`;
export const getFooterDocument = /*#__PURE__*/ gql`
    query getFooter($locale: [Locales] = en) {
  menuItems: StartPage(locale: $locale) {
    items {
      footerSubLinks: FooterNavigationSubLinks {
        ...LinkItemData
      }
      footerCopyright: FooterNavigationCopyrightText
      footerNavigation: FooterNavigationContentArea {
        __typename
        ...FooterMenuNavigationItem
        ...HtmlBlock
      }
    }
  }
}
    ${LinkItemDataFragmentDoc}
${LinkDataFragmentDoc}
${FooterMenuNavigationItemFragmentDoc}
${HtmlBlockFragmentDoc}`;
export const getHeaderDocument = /*#__PURE__*/ gql`
    query getHeader($locale: [Locales]) {
  menuItems: StartPage(locale: $locale) {
    items {
      headerNavigation: MainNavigationContentArea {
        ...MegaMenuItem
      }
      UtilityNavigationContentArea {
        ...MenuItem
      }
    }
  }
}
    ${MegaMenuItemFragmentDoc}
${MenuItemFragmentDoc}
${MenuNavigationItemFragmentDoc}
${LinkItemDataFragmentDoc}
${LinkDataFragmentDoc}
${MenuCardItemFragmentDoc}
${MenuButtonFragmentDoc}`;
export const getBlogPostPageMetaDataDocument = /*#__PURE__*/ gql`
    query getBlogPostPageMetaData($key: String!, $version: String, $locale: [Locales]) {
  BlogPostPage(
    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}
    locale: $locale
  ) {
    pages: items {
      _metadata {
        displayName
        key
        version
        locale
      }
      Heading
      BlogPostPromoImage {
        ...ReferenceData
      }
      SeoSettings {
        MetaTitle
        MetaDescription
        SharingImage {
          ...ReferenceData
        }
        GraphType
      }
    }
  }
}
    ${ReferenceDataFragmentDoc}
${LinkDataFragmentDoc}`;
export const getLandingPageMetaDataDocument = /*#__PURE__*/ gql`
    query getLandingPageMetaData($key: String!, $version: String, $locale: [Locales]) {
  LandingPage(
    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}
    locale: $locale
  ) {
    pages: items {
      _metadata {
        displayName
        key
        version
        locale
      }
      SeoSettings {
        MetaTitle
        MetaDescription
        SharingImage {
          ...ReferenceData
        }
        GraphType
      }
    }
  }
}
    ${ReferenceDataFragmentDoc}
${LinkDataFragmentDoc}`;
export const getStandardPageMetaDataDocument = /*#__PURE__*/ gql`
    query getStandardPageMetaData($key: String!, $version: String, $locale: [Locales]) {
  StandardPage(
    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}
    locale: $locale
  ) {
    pages: items {
      _metadata {
        displayName
        key
        version
        locale
      }
      StandardPageHeading
      StandardPromoImage {
        ...ReferenceData
      }
      SeoSettings {
        MetaTitle
        MetaDescription
        SharingImage {
          ...ReferenceData
        }
        GraphType
      }
    }
  }
}
    ${ReferenceDataFragmentDoc}
${LinkDataFragmentDoc}`;
export const getStartPageMetaDataDocument = /*#__PURE__*/ gql`
    query getStartPageMetaData($key: String!, $version: String, $locale: [Locales]) {
  StartPage(
    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}
    locale: $locale
  ) {
    pages: items {
      _metadata {
        displayName
        key
        version
        locale
      }
      SiteImageLogo {
        ...ReferenceData
      }
      SeoSettings {
        MetaTitle
        MetaDescription
        SharingImage {
          ...ReferenceData
        }
        GraphType
      }
    }
  }
}
    ${ReferenceDataFragmentDoc}
${LinkDataFragmentDoc}`;
export const getArticlesDocument = /*#__PURE__*/ gql`
    query getArticles($pageSize: Int! = 10, $start: Int! = 0, $locale: [Locales], $author: [String!], $published: Date, $publishedEnd: Date) {
  getArticles: BlogPostPage(
    where: {_and: [{_metadata: {published: {gte: $published}}}, {_metadata: {published: {lte: $publishedEnd}}}]}
    locale: $locale
    limit: $pageSize
    skip: $start
    orderBy: {_metadata: {published: DESC}}
  ) {
    total
    items {
      ...IContentData
      _metadata {
        published
      }
      title: Heading
      description: SeoSettings {
        text: MetaDescription
      }
      author: ArticleAuthor
      image: BlogPostPromoImage {
        ...ReferenceData
      }
    }
    facets {
      author: ArticleAuthor(orderType: VALUE, orderBy: ASC, filters: $author) {
        count
        name
      }
      _metadata {
        published(unit: DAY) {
          count
          name
        }
      }
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${ReferenceDataFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getContentType(variables: Schema.getContentTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentTypeQuery>(getContentTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentType', 'query', variables);
    },
    getContentById(variables: Schema.getContentByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByIdQuery>(getContentByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentById', 'query', variables);
    },
    getContentByPath(variables: Schema.getContentByPathQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentByPathQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByPathQuery>(getContentByPathDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentByPath', 'query', variables);
    },
    searchContent(variables: Schema.searchContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.searchContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.searchContentQuery>(searchContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'searchContent', 'query', variables);
    },
    getFooter(variables?: Schema.getFooterQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getFooterQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getFooterQuery>(getFooterDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getFooter', 'query', variables);
    },
    getHeader(variables?: Schema.getHeaderQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getHeaderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getHeaderQuery>(getHeaderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getHeader', 'query', variables);
    },
    getBlogPostPageMetaData(variables: Schema.getBlogPostPageMetaDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getBlogPostPageMetaDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlogPostPageMetaDataQuery>(getBlogPostPageMetaDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getBlogPostPageMetaData', 'query', variables);
    },
    getLandingPageMetaData(variables: Schema.getLandingPageMetaDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getLandingPageMetaDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getLandingPageMetaDataQuery>(getLandingPageMetaDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getLandingPageMetaData', 'query', variables);
    },
    getStandardPageMetaData(variables: Schema.getStandardPageMetaDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getStandardPageMetaDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getStandardPageMetaDataQuery>(getStandardPageMetaDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getStandardPageMetaData', 'query', variables);
    },
    getStartPageMetaData(variables: Schema.getStartPageMetaDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getStartPageMetaDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getStartPageMetaDataQuery>(getStartPageMetaDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getStartPageMetaData', 'query', variables);
    },
    getArticles(variables?: Schema.getArticlesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getArticlesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getArticlesQuery>(getArticlesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getArticles', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;