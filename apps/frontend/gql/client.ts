import type * as Schema from "./graphql";
import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export const LinkDataFragmentDoc = gql`
    fragment LinkData on ContentUrl {
  base
  hierarchical
  default
}
    `;
export const ReferenceDataFragmentDoc = gql`
    fragment ReferenceData on ContentReference {
  key
  url {
    ...LinkData
  }
}
    `;
export const PageSeoSettingsPropertyDataFragmentDoc = gql`
    fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {
  MetaTitle
  MetaDescription
  MetaKeywords
  SharingImage {
    ...ReferenceData
  }
  GraphType
}
    `;
export const IContentInfoFragmentDoc = gql`
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
export const IContentDataFragmentDoc = gql`
    fragment IContentData on _IContent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const BlockDataFragmentDoc = gql`
    fragment BlockData on _IComponent {
  ...IContentData
}
    `;
export const IElementDataFragmentDoc = gql`
    fragment IElementData on _IComponent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const ElementDataFragmentDoc = gql`
    fragment ElementData on _IComponent {
  ...IElementData
}
    `;
export const ArticleListElementDataFragmentDoc = gql`
    fragment ArticleListElementData on ArticleListElement {
  articleListCount
}
    `;
export const BlogListingBlockDataFragmentDoc = gql`
    fragment BlogListingBlockData on BlogListingBlock {
  _metadata {
    name: displayName
  }
  showFilters: BlogListingShowFilters
  selectedPageSize: BlogListingItemCount
}
    `;
export const ButtonBlockDataFragmentDoc = gql`
    fragment ButtonBlockData on ButtonBlock {
  children: ButtonText
  url: ButtonUrl {
    ...LinkData
  }
  className: ButtonClass
  buttonType: ButtonType
  buttonVariant: ButtonVariant
}
    `;
export const CTAElementDataFragmentDoc = gql`
    fragment CTAElementData on CTAElement {
  cta_text: Text
  cta_link: Link {
    ...LinkData
  }
}
    `;
export const CardBlockDataFragmentDoc = gql`
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
export const IContentListItemFragmentDoc = gql`
    fragment IContentListItem on _IContent {
  ...IContentData
}
    `;
export const CarouselBlockDataFragmentDoc = gql`
    fragment CarouselBlockData on CarouselBlock {
  CarouselItemsContentArea {
    ...IContentListItem
  }
}
    `;
export const ContentRecsElementDataFragmentDoc = gql`
    fragment ContentRecsElementData on ContentRecsElement {
  ElementDeliveryApiKey
  ElementRecommendationCount
}
    `;
export const HeadingElementDataFragmentDoc = gql`
    fragment HeadingElementData on HeadingElement {
  headingText
}
    `;
export const ButtonBlockPropertyDataFragmentDoc = gql`
    fragment ButtonBlockPropertyData on ButtonBlockProperty {
  children: ButtonText
  url: ButtonUrl {
    ...LinkData
  }
  className: ButtonClass
  buttonType: ButtonType
  buttonVariant: ButtonVariant
}
    `;
export const HeroBlockDataFragmentDoc = gql`
    fragment HeroBlockData on HeroBlock {
  heroImage: HeroImage {
    ...ReferenceData
  }
  eyebrow: Eyebrow
  heroHeading: Heading
  heroSubheading: SubHeading
  heroDescription: Description {
    json
    html
  }
  heroColor: HeroColor
  heroButton: HeroButton {
    ...ButtonBlockPropertyData
  }
}
    `;
export const HomePageHeroBlockDataFragmentDoc = gql`
    fragment HomePageHeroBlockData on HomePageHeroBlock {
  homeHeroHeading: HomeHeroBlockHeading
  homeHeroSubheading: HomeHeroBlockSubHeading
  leftImage: HomeHeroLeftImage {
    ...ReferenceData
  }
  rightImage: HomeHeroRightImage {
    ...ReferenceData
  }
  homeHeroButton: HomeHeroButtonBlock {
    ...ButtonBlockPropertyData
  }
}
    `;
export const HtmlBlockDataFragmentDoc = gql`
    fragment HtmlBlockData on HtmlBlock {
  HtmlBlockHeading
  HtmlContent {
    json
    html
  }
}
    `;
export const ImageElementDataFragmentDoc = gql`
    fragment ImageElementData on ImageElement {
  altText
  imageLink {
    ...ReferenceData
  }
}
    `;
export const LinkItemDataFragmentDoc = gql`
    fragment LinkItemData on Link {
  title
  text
  target
  url {
    ...LinkData
  }
}
    `;
export const LayoutSettingsBlockDataFragmentDoc = gql`
    fragment LayoutSettingsBlockData on LayoutSettingsBlock {
  mainMenu {
    ...IContentListItem
  }
  contactInfoHeading
  serviceButtons {
    ...IContentListItem
  }
  contactInfo {
    json
    html
  }
  footerMenus {
    ...IContentListItem
  }
  copyright
  legalLinks {
    ...LinkItemData
  }
  appIdentifiers
}
    `;
export const MenuNavigationBlockDataFragmentDoc = gql`
    fragment MenuNavigationBlockData on MenuNavigationBlock {
  _metadata {
    displayName
  }
  MenuNavigationHeading
  NavigationLinks {
    ...LinkItemData
  }
}
    `;
export const MegaMenuGroupBlockDataFragmentDoc = gql`
    fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {
  _metadata {
    displayName
  }
  MenuMenuHeading
  MegaMenuUrl {
    ...LinkData
  }
  MegaMenuContentArea {
    ...IContentData
    ...MenuNavigationBlockData
    ...CardBlockData
  }
}
    `;
export const OdpEmbedBlockDataFragmentDoc = gql`
    fragment OdpEmbedBlockData on OdpEmbedBlock {
  ContentId
}
    `;
export const PageSeoSettingsDataFragmentDoc = gql`
    fragment PageSeoSettingsData on PageSeoSettings {
  MetaTitle
  MetaDescription
  MetaKeywords
  SharingImage {
    ...ReferenceData
  }
  GraphType
}
    `;
export const ParagraphElementDataFragmentDoc = gql`
    fragment ParagraphElementData on ParagraphElement {
  text {
    json
  }
}
    `;
export const QuoteBlockDataFragmentDoc = gql`
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
export const RichTextElementDataFragmentDoc = gql`
    fragment RichTextElementData on RichTextElement {
  text {
    json
    html
  }
}
    `;
export const TestimonialElementDataFragmentDoc = gql`
    fragment TestimonialElementData on TestimonialElement {
  customerName
  customerLocation
  customerImage {
    ...ReferenceData
  }
  referenceTitle
  referenceText {
    json
  }
}
    `;
export const TextBlockDataFragmentDoc = gql`
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
export const VideoElementDataFragmentDoc = gql`
    fragment VideoElementData on VideoElement {
  title
  video {
    ...ReferenceData
  }
  placeholder {
    ...ReferenceData
  }
}
    `;
export const BlankSectionDataFragmentDoc = gql`
    fragment BlankSectionData on BlankSection {
  _metadata {
    key
  }
}
    `;
export const LayoutContainerBlockDataFragmentDoc = gql`
    fragment LayoutContainerBlockData on LayoutContainerBlock {
  columns: ColumnsCount
  gap: GapSize
  LayoutContentArea {
    ...BlockData
    ...ArticleListElementData
    ...BlogListingBlockData
    ...ButtonBlockData
    ...CTAElementData
    ...CardBlockData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...HeadingElementData
    ...HeroBlockData
    ...HomePageHeroBlockData
    ...HtmlBlockData
    ...ImageElementData
    ...LayoutContainerBlockData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...BlankSectionData
  }
  containerColor: ContainerBackgroundColor
  backgroundImage: ContainerBackgroundImage {
    ...ReferenceData
  }
  marginTop: ContainerMarginTop
  marginBottom: ContainerMarginBottom
  paddingBottom: ContainerPaddingBottom
  paddingTop: ContainerPaddingTop
}
    `;
export const CompositionDataFragmentDoc = gql`
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
  ... on ICompositionComponentNode {
    component {
      ...BlockData
      ...ElementData
      ...ArticleListElementData
      ...BlogListingBlockData
      ...ButtonBlockData
      ...CTAElementData
      ...CardBlockData
      ...CarouselBlockData
      ...ContentRecsElementData
      ...HeadingElementData
      ...HeroBlockData
      ...HomePageHeroBlockData
      ...HtmlBlockData
      ...ImageElementData
      ...LayoutContainerBlockData
      ...LayoutSettingsBlockData
      ...MegaMenuGroupBlockData
      ...MenuNavigationBlockData
      ...OdpEmbedBlockData
      ...PageSeoSettingsData
      ...ParagraphElementData
      ...QuoteBlockData
      ...RichTextElementData
      ...TestimonialElementData
      ...TextBlockData
      ...VideoElementData
      ...BlankSectionData
    }
  }
}
    `;
export const ExperienceDataFragmentDoc = gql`
    fragment ExperienceData on _IExperience {
  composition {
    ...CompositionData
  }
}
    `;
export const BlankExperienceDataFragmentDoc = gql`
    fragment BlankExperienceData on BlankExperience {
  BlankExperienceSeoSettings {
    ...PageSeoSettingsPropertyData
  }
  ...ExperienceData
}
    `;
export const BlogSectionExperienceDataFragmentDoc = gql`
    fragment BlogSectionExperienceData on BlogSectionExperience {
  ...ExperienceData
}
    `;
export const BlogPostPageDataFragmentDoc = gql`
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
export const BlogPostPageSearchResultFragmentDoc = gql`
    fragment BlogPostPageSearchResult on BlogPostPage {
  title: Heading
  image: BlogPostPromoImage {
    ...ReferenceData
  }
  author: ArticleAuthor
  seodata: SeoSettings {
    MetaTitle
    MetaDescription
  }
  _metadata {
    published
  }
}
    `;
export const LandingPageDataFragmentDoc = gql`
    fragment LandingPageData on LandingPage {
  TopContentArea {
    ...BlockData
    ...ArticleListElementData
    ...BlogListingBlockData
    ...ButtonBlockData
    ...CTAElementData
    ...CardBlockData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...HeadingElementData
    ...HeroBlockData
    ...HomePageHeroBlockData
    ...HtmlBlockData
    ...ImageElementData
    ...LayoutContainerBlockData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...BlankSectionData
  }
  MainContentArea {
    ...BlockData
    ...ArticleListElementData
    ...BlogListingBlockData
    ...ButtonBlockData
    ...CTAElementData
    ...CardBlockData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...HeadingElementData
    ...HeroBlockData
    ...HomePageHeroBlockData
    ...HtmlBlockData
    ...ImageElementData
    ...LayoutContainerBlockData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...BlankSectionData
  }
}
    `;
export const StandardPageDataFragmentDoc = gql`
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
export const StartPageDataFragmentDoc = gql`
    fragment StartPageData on StartPage {
  HomePageHeroContentArea {
    ...BlockData
    ...ArticleListElementData
    ...BlogListingBlockData
    ...ButtonBlockData
    ...CTAElementData
    ...CardBlockData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...HeadingElementData
    ...HeroBlockData
    ...HomePageHeroBlockData
    ...HtmlBlockData
    ...ImageElementData
    ...LayoutContainerBlockData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...BlankSectionData
  }
  HomePageMainContentArea {
    ...BlockData
    ...ArticleListElementData
    ...BlogListingBlockData
    ...ButtonBlockData
    ...CTAElementData
    ...CardBlockData
    ...CarouselBlockData
    ...ContentRecsElementData
    ...HeadingElementData
    ...HeroBlockData
    ...HomePageHeroBlockData
    ...HtmlBlockData
    ...ImageElementData
    ...LayoutContainerBlockData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...MenuNavigationBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...BlankSectionData
  }
}
    `;
export const StartPageSearchDataFragmentDoc = gql`
    fragment StartPageSearchData on StartPage {
  seodata: SeoSettings {
    MetaTitle
    MetaDescription
    SharingImage {
      ...ReferenceData
    }
  }
}
    `;
export const SearchDataFragmentDoc = gql`
    fragment SearchData on _IContent {
  ...IContentData
}
    `;
export const PageDataFragmentDoc = gql`
    fragment PageData on _IContent {
  ...IContentData
}
    `;
export const getArticleListElementItemsDocument = gql`
    query getArticleListElementItems($count: Int!, $locale: [Locales]) {
  BlogPostPage(
    orderBy: {_metadata: {published: DESC}}
    limit: $count
    locale: $locale
    where: {_metadata: {status: {eq: "Published"}}}
  ) {
    items {
      ...IContentData
      articleMeta: _metadata {
        key
        published
        lastModified
      }
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
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${ReferenceDataFragmentDoc}`;
export const getBlankExperienceMetaDataDocument = gql`
    query getBlankExperienceMetaData($key: String!, $locale: [Locales]) {
  page: BlankExperience(where: {_metadata: {key: {eq: $key}}}, locale: $locale) {
    items {
      meta: _metadata {
        displayName
      }
      seo: BlankExperienceSeoSettings {
        title: MetaTitle
        description: MetaDescription
        image: SharingImage {
          ...ReferenceData
        }
        type: GraphType
      }
    }
  }
}
    ${ReferenceDataFragmentDoc}
${LinkDataFragmentDoc}`;
export const getChildBlogPostsDocument = gql`
    query getChildBlogPosts($parentKey: String!, $locale: [Locales!]! = ALL, $author: String! = "", $topic: String! = "", $limit: Int! = 9, $skip: Int! = 0) {
  result: _Page(where: {_metadata: {key: {eq: $parentKey}}}, locale: $locale) {
    items {
      container: _metadata {
        key
        displayName
      }
      items: _link(type: ITEMS) {
        posts: BlogPostPage(skip: $skip, limit: $limit) {
          total
          items {
            ...IContentData
            metadata: _metadata {
              key
              url {
                base
                default
              }
              published
            }
            heading: Heading
            subheading: ArticleSubHeading
            author: ArticleAuthor
            topic: Topic
            image: BlogPostPromoImage {
              src: url {
                base
                default
              }
            }
          }
          facets {
            author: ArticleAuthor(filters: [$author]) {
              name
              count
            }
            topic: Topic(orderBy: ASC, filters: [$topic]) {
              name
              count
            }
            metadata: _metadata {
              published(unit: DAY) {
                name
                count
              }
            }
          }
        }
      }
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}`;
export const getBlogSectionExperienceMetaDataDocument = gql`
    query getBlogSectionExperienceMetaData($key: String!, $version: String, $locale: [Locales!]) {
  page: BlogSectionExperience(
    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}
    locale: $locale
  ) {
    items {
      _metadata {
        displayName
        published
        url {
          base
          default
        }
      }
      seo_data {
        ...PageSeoSettingsPropertyData
      }
    }
  }
}
    ${PageSeoSettingsPropertyDataFragmentDoc}
${ReferenceDataFragmentDoc}
${LinkDataFragmentDoc}`;
export const getBlogPostPageMetaDataDocument = gql`
    query getBlogPostPageMetaData($key: String!, $version: String, $locale: [Locales!]) {
  BlogPostPage(
    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}
    locale: $locale
  ) {
    pages: items {
      cms: _metadata {
        title: displayName
        published
        url {
          base
          default
        }
      }
      title: Heading
      author: ArticleAuthor
      image: BlogPostPromoImage {
        ...ReferenceData
      }
      seo: SeoSettings {
        title: MetaTitle
        description: MetaDescription
        keywords: MetaKeywords
        image: SharingImage {
          ...ReferenceData
        }
        type: GraphType
      }
    }
  }
}
    ${ReferenceDataFragmentDoc}
${LinkDataFragmentDoc}`;
export const getLandingPageMetaDataDocument = gql`
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
export const getStandardPageMetaDataDocument = gql`
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
export const getStartPageMetaDataDocument = gql`
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
export const getFooterDataDocument = gql`
    query getFooterData($domain: String, $locale: [Locales!]) {
  appLayout: LayoutSettingsBlock(
    where: {_or: [{appIdentifiers: {exist: false}}, {_and: [{appIdentifiers: {exist: true}}, {appIdentifiers: {eq: $domain}}]}]}
    locale: $locale
  ) {
    items {
      _metadata {
        key
        displayName
      }
      copyright
      footerMenus {
        ...IContentData
        ...MenuNavigationBlockData
      }
      legalLinks {
        ...LinkItemData
      }
      contactInfoHeading
      contactInfo {
        json
      }
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${LinkItemDataFragmentDoc}`;
export const getHeaderDataDocument = gql`
    query getHeaderData($domain: String, $locale: [Locales!]) {
  appLayout: LayoutSettingsBlock(
    where: {_or: [{appIdentifiers: {exist: false}}, {_and: [{appIdentifiers: {exist: true}}, {appIdentifiers: {eq: $domain}}]}]}
    locale: $locale
  ) {
    items {
      _metadata {
        key
        displayName
      }
      appIdentifiers
      mainMenu {
        ...IContentData
        ...MegaMenuGroupBlockData
      }
      serviceButtons {
        ...IContentData
        ...ButtonBlockData
      }
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${LinkItemDataFragmentDoc}
${CardBlockDataFragmentDoc}
${ReferenceDataFragmentDoc}
${ButtonBlockDataFragmentDoc}`;
export const getLocalesDocument = gql`
    query getLocales {
  schema: __schema {
    types {
      kind
      name
      enumValues {
        name
      }
    }
  }
}
    `;
export const getArticlesDocument = gql`
    query getArticles($pageSize: Int! = 10, $start: Int! = 0, $locale: [Locales], $author: [String!], $published: Date, $publishedEnd: Date) {
  getArticles: BlogPostPage(
    where: {_and: [{_metadata: {published: {gte: $published}}}, {_metadata: {published: {lte: $publishedEnd}}}], _metadata: {status: {eq: "Published"}}}
    locale: $locale
    limit: $pageSize
    skip: $start
    orderBy: {_metadata: {published: DESC}}
  ) {
    total
    items {
      ...IContentData
      _metadata {
        status
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
export const searchContentDocument = gql`
    query searchContent($term: String!, $locale: [String!], $withinLocale: [Locales], $types: [String!], $pageSize: Int! = 25, $start: Int! = 0) {
  Content: _Page(
    where: {_fulltext: {match: $term}, _metadata: {url: {base: {exist: true}}}}
    orderBy: {_ranking: SEMANTIC}
    limit: $pageSize
    skip: $start
    locale: $withinLocale
  ) {
    total
    items {
      _score
      ...SearchData
      _metadata {
        published
      }
      preview: _fulltext(
        highlight: {enabled: true, startToken: "<span>", endToken: "</span>"}
      )
      ...BlogPostPageSearchResult
      ...StartPageSearchData
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
    ${SearchDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${BlogPostPageSearchResultFragmentDoc}
${ReferenceDataFragmentDoc}
${StartPageSearchDataFragmentDoc}`;
export const personalizedSearchContentDocument = gql`
    query personalizedSearchContent($term: String!, $topInterest: String, $locale: [String!], $withinLocale: [Locales], $types: [String!], $pageSize: Int! = 25, $start: Int! = 0, $boost: Int! = 100) {
  Content: _Page(
    where: {_or: [{_fulltext: {match: $term}}, {_fulltext: {match: $topInterest, boost: $boost}}], _metadata: {url: {base: {exist: true}}}}
    orderBy: {_ranking: SEMANTIC}
    limit: $pageSize
    skip: $start
    locale: $withinLocale
  ) {
    total
    items {
      _score
      ...SearchData
      _metadata {
        published
      }
      preview: _fulltext(
        highlight: {enabled: true, startToken: "<span>", endToken: "</span>"}
      )
      ...BlogPostPageSearchResult
      ...StartPageSearchData
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
    ${SearchDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${BlogPostPageSearchResultFragmentDoc}
${ReferenceDataFragmentDoc}
${StartPageSearchDataFragmentDoc}`;
export const getContentByIdDocument = gql`
    query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {
  content: _Content(
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items {
      ...BlockData
      ...PageData
      ...ArticleListElementData
      ...BlogListingBlockData
      ...ButtonBlockData
      ...CTAElementData
      ...CardBlockData
      ...CarouselBlockData
      ...ContentRecsElementData
      ...HeadingElementData
      ...HeroBlockData
      ...HomePageHeroBlockData
      ...HtmlBlockData
      ...ImageElementData
      ...LayoutContainerBlockData
      ...LayoutSettingsBlockData
      ...MegaMenuGroupBlockData
      ...MenuNavigationBlockData
      ...OdpEmbedBlockData
      ...PageSeoSettingsData
      ...ParagraphElementData
      ...QuoteBlockData
      ...RichTextElementData
      ...TestimonialElementData
      ...TextBlockData
      ...VideoElementData
      ...BlankSectionData
      ...BlankExperienceData
      ...BlogSectionExperienceData
      ...BlogPostPageData
      ...LandingPageData
      ...StandardPageData
      ...StartPageData
    }
  }
}
    ${BlockDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${PageDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${BlogListingBlockDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CardBlockDataFragmentDoc}
${ReferenceDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${IContentListItemFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${ButtonBlockPropertyDataFragmentDoc}
${HomePageHeroBlockDataFragmentDoc}
${HtmlBlockDataFragmentDoc}
${ImageElementDataFragmentDoc}
${LayoutContainerBlockDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${LinkItemDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${VideoElementDataFragmentDoc}
${BlankSectionDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}
${BlogSectionExperienceDataFragmentDoc}
${BlogPostPageDataFragmentDoc}
${LandingPageDataFragmentDoc}
${StandardPageDataFragmentDoc}
${StartPageDataFragmentDoc}`;
export const getContentByPathDocument = gql`
    query getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String) {
  content: _Content(
    where: {_metadata: {url: {default: {in: $path}, base: {eq: $siteId}}}}
    locale: $locale
  ) {
    total
    items {
      ...IContentData
      ...PageData
      ...BlankExperienceData
      ...BlogSectionExperienceData
      ...BlogPostPageData
      ...LandingPageData
      ...StandardPageData
      ...StartPageData
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${PageDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}
${ReferenceDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionDataFragmentDoc}
${BlockDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${BlogListingBlockDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${CTAElementDataFragmentDoc}
${CardBlockDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${IContentListItemFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${ButtonBlockPropertyDataFragmentDoc}
${HomePageHeroBlockDataFragmentDoc}
${HtmlBlockDataFragmentDoc}
${ImageElementDataFragmentDoc}
${LayoutContainerBlockDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${LinkItemDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${VideoElementDataFragmentDoc}
${BlankSectionDataFragmentDoc}
${BlogSectionExperienceDataFragmentDoc}
${BlogPostPageDataFragmentDoc}
${LandingPageDataFragmentDoc}
${StandardPageDataFragmentDoc}
${StartPageDataFragmentDoc}`;
export const getContentTypeDocument = gql`
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

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getArticleListElementItems(variables: Schema.getArticleListElementItemsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getArticleListElementItemsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getArticleListElementItemsQuery>(getArticleListElementItemsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getArticleListElementItems', 'query', variables);
    },
    getBlankExperienceMetaData(variables: Schema.getBlankExperienceMetaDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getBlankExperienceMetaDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlankExperienceMetaDataQuery>(getBlankExperienceMetaDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getBlankExperienceMetaData', 'query', variables);
    },
    getChildBlogPosts(variables: Schema.getChildBlogPostsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getChildBlogPostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getChildBlogPostsQuery>(getChildBlogPostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getChildBlogPosts', 'query', variables);
    },
    getBlogSectionExperienceMetaData(variables: Schema.getBlogSectionExperienceMetaDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getBlogSectionExperienceMetaDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlogSectionExperienceMetaDataQuery>(getBlogSectionExperienceMetaDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getBlogSectionExperienceMetaData', 'query', variables);
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
    getFooterData(variables?: Schema.getFooterDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getFooterDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getFooterDataQuery>(getFooterDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getFooterData', 'query', variables);
    },
    getHeaderData(variables?: Schema.getHeaderDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getHeaderDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getHeaderDataQuery>(getHeaderDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getHeaderData', 'query', variables);
    },
    getLocales(variables?: Schema.getLocalesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getLocalesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getLocalesQuery>(getLocalesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getLocales', 'query', variables);
    },
    getArticles(variables?: Schema.getArticlesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getArticlesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getArticlesQuery>(getArticlesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getArticles', 'query', variables);
    },
    searchContent(variables: Schema.searchContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.searchContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.searchContentQuery>(searchContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'searchContent', 'query', variables);
    },
    personalizedSearchContent(variables: Schema.personalizedSearchContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.personalizedSearchContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.personalizedSearchContentQuery>(personalizedSearchContentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'personalizedSearchContent', 'query', variables);
    },
    getContentById(variables: Schema.getContentByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByIdQuery>(getContentByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentById', 'query', variables);
    },
    getContentByPath(variables: Schema.getContentByPathQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentByPathQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByPathQuery>(getContentByPathDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentByPath', 'query', variables);
    },
    getContentType(variables: Schema.getContentTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentTypeQuery>(getContentTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentType', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;