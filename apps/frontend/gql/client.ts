import type * as Schema from "./graphql";
import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export const ReferenceDataFragmentDoc = gql`
    fragment ReferenceData on ContentReference {
  key
  url {
    type
    base
    default
  }
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
    ${ReferenceDataFragmentDoc}`;
export const LinkDataFragmentDoc = gql`
    fragment LinkData on ContentUrl {
  type
  base
  default
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
    ${LinkDataFragmentDoc}`;
export const ContentRecsElementDataFragmentDoc = gql`
    fragment ContentRecsElementData on ContentRecsElement {
  ElementDeliveryApiKey
  ElementRecommendationCount
}
    `;
export const ImageMediaComponentDataFragmentDoc = gql`
    fragment ImageMediaComponentData on ImageMedia {
  alt: AltText
  meta: _metadata {
    url {
      default
    }
    name: displayName
  }
}
    `;
export const VideoMediaComponentDataFragmentDoc = gql`
    fragment VideoMediaComponentData on VideoMedia {
  meta: _metadata {
    url {
      default
    }
    name: displayName
  }
}
    `;
export const LinkItemDataFragmentDoc = gql`
    fragment LinkItemData on Link {
  title
  text
  target
  url {
    type
    base
    default
  }
}
    `;
export const LayoutSettingsBlockDataFragmentDoc = gql`
    fragment LayoutSettingsBlockData on LayoutSettingsBlock {
  mainMenu {
    ...ImageMediaComponentData
    ...VideoMediaComponentData
  }
  contactInfoHeading
  serviceButtons {
    ...ImageMediaComponentData
    ...VideoMediaComponentData
  }
  contactInfo {
    json
    html
  }
  footerMenus {
    ...ImageMediaComponentData
    ...VideoMediaComponentData
  }
  copyright
  legalLinks {
    ...LinkItemData
  }
  appIdentifiers
}
    ${ImageMediaComponentDataFragmentDoc}
${VideoMediaComponentDataFragmentDoc}
${LinkItemDataFragmentDoc}`;
export const IContentDataFragmentDoc = gql`
    fragment IContentData on _IContent {
  _metadata {
    key
    locale
    types
    displayName
    version
    changeset
    variation
    url {
      type
      base
      default
    }
  }
  _type: __typename
}
    `;
export const MenuNavigationBlockDataFragmentDoc = gql`
    fragment MenuNavigationBlockData on MenuNavigationBlock {
  MenuNavigationHeading
  NavigationLinks {
    title
    text
    target
    url {
      type
      base
      default
    }
  }
}
    `;
export const BlogPostPageMenuBlockFragmentDoc = gql`
    fragment BlogPostPageMenuBlock on BlogPostPage {
  meta: _metadata {
    published
    url {
      ...LinkData
    }
  }
  topics: Topic
  heading: Heading
  author: ArticleAuthor
  image: BlogPostPromoImage {
    ...ReferenceData
  }
  sharing: SeoSettings {
    description: MetaDescription
    image: SharingImage {
      ...ReferenceData
    }
  }
}
    ${LinkDataFragmentDoc}
${ReferenceDataFragmentDoc}`;
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
    ...BlogPostPageMenuBlock
  }
}
    ${LinkDataFragmentDoc}
${IContentDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${BlogPostPageMenuBlockFragmentDoc}`;
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
    ${ReferenceDataFragmentDoc}`;
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
    ${ReferenceDataFragmentDoc}`;
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
    ${ReferenceDataFragmentDoc}`;
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
    ${ReferenceDataFragmentDoc}`;
export const LandingPageDataFragmentDoc = gql`
    fragment LandingPageData on LandingPage {
  TopContentArea {
    ...ButtonBlockData
    ...ContentRecsElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
  }
  MainContentArea {
    ...ButtonBlockData
    ...ContentRecsElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
  }
}
    ${ButtonBlockDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${VideoElementDataFragmentDoc}`;
export const SearchDataFragmentDoc = gql`
    fragment SearchData on _IContent {
  ...IContentData
}
    ${IContentDataFragmentDoc}`;
export const cmpPublicImageFragmentDoc = gql`
    fragment cmpPublicImage on cmp_PublicImageAsset {
  __typename
  Id
  Title
  Tags {
    Name
  }
  AltText
  Width
  Height
  Url
}
    `;
export const cmsPublicImagePropsFragmentDoc = gql`
    fragment cmsPublicImageProps on cmp_PublicImageAsset {
  alt: Title
  src: Url
}
    `;
export const IElementDataFragmentDoc = gql`
    fragment IElementData on _IComponent {
  _metadata {
    key
    locale
    types
    displayName
    version
    url {
      type
      base
      default
    }
  }
  _type: __typename
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
    type
    base
    default
  }
}
    `;
export const IContentListItemFragmentDoc = gql`
    fragment IContentListItem on _IContent {
  ...IContentData
}
    ${IContentDataFragmentDoc}`;
export const CompositionNodeDataFragmentDoc = gql`
    fragment CompositionNodeData on ICompositionNode {
  name: displayName
  layoutType: nodeType
  type
  key
  template: displayTemplateKey
  settings: displaySettings {
    key
    value
  }
}
    `;
export const ArticleListElementDataFragmentDoc = gql`
    fragment ArticleListElementData on ArticleListElement {
  articleListCount
  topics
}
    `;
export const CTAElementDataFragmentDoc = gql`
    fragment CTAElementData on CTAElement {
  Text
  Link {
    type
    base
    default
  }
}
    `;
export const HeadingElementDataFragmentDoc = gql`
    fragment HeadingElementData on HeadingElement {
  headingText
}
    `;
export const CmpImageAssetInfoFragmentDoc = gql`
    fragment CmpImageAssetInfo on cmp_PublicImageAsset {
  __typename
  Title
  AltText
  Width
  Height
  Url
  Renditions {
    Name
    Width
    Height
    Url
  }
}
    `;
export const CmpVideoAssetInfoFragmentDoc = gql`
    fragment CmpVideoAssetInfo on cmp_PublicVideoAsset {
  Title
  AltText
  Url
  Renditions {
    Name
    Width
    Height
    Url
  }
}
    `;
export const ImageElementDataFragmentDoc = gql`
    fragment ImageElementData on ImageElement {
  altText
  imageLink {
    key
    url {
      type
      base
      default
    }
    item {
      __typename
      ...CmpImageAssetInfo
      ...CmpVideoAssetInfo
    }
  }
}
    ${CmpImageAssetInfoFragmentDoc}
${CmpVideoAssetInfoFragmentDoc}`;
export const OptiFormsChoiceElementDataFragmentDoc = gql`
    fragment OptiFormsChoiceElementData on OptiFormsChoiceElement {
  Label
  Tooltip
  Options
  AllowMultiSelect
  Validators
}
    `;
export const OptiFormsNumberElementDataFragmentDoc = gql`
    fragment OptiFormsNumberElementData on OptiFormsNumberElement {
  Label
  Placeholder
  Tooltip
  PredefinedValue
  Validators
  AutoComplete
}
    `;
export const OptiFormsRangeElementDataFragmentDoc = gql`
    fragment OptiFormsRangeElementData on OptiFormsRangeElement {
  Label
  Tooltip
  PredefinedValue
  Min
  Max
  Increment
}
    `;
export const OptiFormsSelectionElementDataFragmentDoc = gql`
    fragment OptiFormsSelectionElementData on OptiFormsSelectionElement {
  Label
  Placeholder
  Tooltip
  Options
  AllowMultiSelect
  Validators
  AutoComplete
}
    `;
export const OptiFormsResetElementDataFragmentDoc = gql`
    fragment OptiFormsResetElementData on OptiFormsResetElement {
  Label
  Tooltip
}
    `;
export const OptiFormsSubmitElementDataFragmentDoc = gql`
    fragment OptiFormsSubmitElementData on OptiFormsSubmitElement {
  Label
  Tooltip
}
    `;
export const OptiFormsTextareaElementDataFragmentDoc = gql`
    fragment OptiFormsTextareaElementData on OptiFormsTextareaElement {
  Label
  Placeholder
  Tooltip
  PredefinedValue
  Validators
  AutoComplete
}
    `;
export const OptiFormsTextboxElementDataFragmentDoc = gql`
    fragment OptiFormsTextboxElementData on OptiFormsTextboxElement {
  Label
  Placeholder
  Tooltip
  PredefinedValue
  Validators
  AutoComplete
}
    `;
export const OptiFormsUrlElementDataFragmentDoc = gql`
    fragment OptiFormsUrlElementData on OptiFormsUrlElement {
  Label
  Placeholder
  Tooltip
  PredefinedValue
  Validators
}
    `;
export const SectionCompositionDataFragmentDoc = gql`
    fragment SectionCompositionData on _ISection {
  composition {
    ...CompositionNodeData
    nodes {
      ...CompositionNodeData
      ... on CompositionStructureNode {
        nodes {
          ...CompositionNodeData
          ... on CompositionStructureNode {
            nodes {
              ...CompositionNodeData
              ... on CompositionComponentNode {
                component {
                  ...IContentData
                  ...ButtonBlockData
                  ...ContentRecsElementData
                  ...LayoutSettingsBlockData
                  ...MegaMenuGroupBlockData
                  ...OdpEmbedBlockData
                  ...PageSeoSettingsData
                  ...ParagraphElementData
                  ...QuoteBlockData
                  ...RichTextElementData
                  ...TestimonialElementData
                  ...TextBlockData
                  ...VideoElementData
                  ...ArticleListElementData
                  ...CTAElementData
                  ...HeadingElementData
                  ...ImageElementData
                }
              }
              ... on CompositionStructureNode {
                nodes {
                  ...CompositionNodeData
                  ... on CompositionComponentNode {
                    component {
                      ...IContentData
                      ...OptiFormsChoiceElementData
                      ...OptiFormsNumberElementData
                      ...OptiFormsRangeElementData
                      ...OptiFormsSelectionElementData
                      ...OptiFormsResetElementData
                      ...OptiFormsSubmitElementData
                      ...OptiFormsTextareaElementData
                      ...OptiFormsTextboxElementData
                      ...OptiFormsUrlElementData
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    ${CompositionNodeDataFragmentDoc}
${IContentDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${VideoElementDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${CTAElementDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${ImageElementDataFragmentDoc}
${OptiFormsChoiceElementDataFragmentDoc}
${OptiFormsNumberElementDataFragmentDoc}
${OptiFormsRangeElementDataFragmentDoc}
${OptiFormsSelectionElementDataFragmentDoc}
${OptiFormsResetElementDataFragmentDoc}
${OptiFormsSubmitElementDataFragmentDoc}
${OptiFormsTextareaElementDataFragmentDoc}
${OptiFormsTextboxElementDataFragmentDoc}
${OptiFormsUrlElementDataFragmentDoc}`;
export const CompositionComponentNodeFragmentDoc = gql`
    fragment CompositionComponentNode on CompositionComponentNode {
  component {
    ...IContentData
    ...ButtonBlockData
    ...ContentRecsElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...ArticleListElementData
    ...CTAElementData
    ...HeadingElementData
    ...ImageElementData
    ...OptiFormsChoiceElementData
    ...OptiFormsNumberElementData
    ...OptiFormsRangeElementData
    ...OptiFormsSelectionElementData
    ...OptiFormsResetElementData
    ...OptiFormsSubmitElementData
    ...OptiFormsTextareaElementData
    ...OptiFormsTextboxElementData
    ...OptiFormsUrlElementData
  }
}
    ${IContentDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${VideoElementDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${CTAElementDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${ImageElementDataFragmentDoc}
${OptiFormsChoiceElementDataFragmentDoc}
${OptiFormsNumberElementDataFragmentDoc}
${OptiFormsRangeElementDataFragmentDoc}
${OptiFormsSelectionElementDataFragmentDoc}
${OptiFormsResetElementDataFragmentDoc}
${OptiFormsSubmitElementDataFragmentDoc}
${OptiFormsTextareaElementDataFragmentDoc}
${OptiFormsTextboxElementDataFragmentDoc}
${OptiFormsUrlElementDataFragmentDoc}`;
export const CompositionStructureNodeFragmentDoc = gql`
    fragment CompositionStructureNode on ICompositionStructureNode {
  nodes {
    ...CompositionNodeData
    ...CompositionStructureNode
    ...CompositionComponentNode
  }
}
    ${CompositionNodeDataFragmentDoc}
${CompositionComponentNodeFragmentDoc}`;
export const SectionDataFragmentDoc = gql`
    fragment SectionData on _IContent {
  ...IContentData
}
    ${IContentDataFragmentDoc}`;
export const PageDataFragmentDoc = gql`
    fragment PageData on _IContent {
  ...IContentData
}
    ${IContentDataFragmentDoc}`;
export const MediaDataFragmentDoc = gql`
    fragment MediaData on _IContent {
  ...IContentData
}
    ${IContentDataFragmentDoc}`;
export const ComponentDataFragmentDoc = gql`
    fragment ComponentData on _IContent {
  ...IContentData
}
    ${IContentDataFragmentDoc}`;
export const ElementDataFragmentDoc = gql`
    fragment ElementData on _IContent {
  ...IContentData
}
    ${IContentDataFragmentDoc}`;
export const SectionElementDataFragmentDoc = gql`
    fragment SectionElementData on _IContent {
  ...IContentData
}
    ${IContentDataFragmentDoc}`;
export const FormElementDataFragmentDoc = gql`
    fragment FormElementData on _IContent {
  ...IContentData
}
    ${IContentDataFragmentDoc}`;
export const BlockDataFragmentDoc = gql`
    fragment BlockData on _IContent {
  ...IContentData
}
    ${IContentDataFragmentDoc}`;
export const BlankSectionDataFragmentDoc = gql`
    fragment BlankSectionData on BlankSection {
  __typename
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
    ${ReferenceDataFragmentDoc}`;
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
    ${LinkDataFragmentDoc}`;
export const HeroBlockDataFragmentDoc = gql`
    fragment HeroBlockData on HeroBlock {
  HeroImage {
    key
    url {
      type
      base
      default
    }
    item {
      __typename
      ...CmpImageAssetInfo
      ...CmpVideoAssetInfo
    }
  }
  Icon
  Eyebrow
  Heading
  SubHeading
  DescriptionRichText: Description {
    json
  }
  HeroColor
  HeroButton {
    ...ButtonBlockPropertyData
  }
}
    ${CmpImageAssetInfoFragmentDoc}
${CmpVideoAssetInfoFragmentDoc}
${ButtonBlockPropertyDataFragmentDoc}`;
export const CarouselBlockDataFragmentDoc = gql`
    fragment CarouselBlockData on CarouselBlock {
  CarouselItemsContentArea {
    ...IContentData
    ...HeroBlockData
    ...QuoteBlockData
  }
}
    ${IContentDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${QuoteBlockDataFragmentDoc}`;
export const OptiFormsContainerDataDataFragmentDoc = gql`
    fragment OptiFormsContainerDataData on OptiFormsContainerData {
  Title
  Description
  ShowSummaryMessageAfterSubmission
  SubmitConfirmationMessage
  ResetConfirmationMessage
  SubmitUrl {
    type
    base
    default
  }
}
    `;
export const ExperienceDataFragmentDoc = gql`
    fragment ExperienceData on _IExperience {
  composition {
    ...CompositionNodeData
    nodes {
      ...CompositionNodeData
      ... on CompositionComponentNode {
        component {
          ...IContentData
          ...CarouselBlockData
          ...HeroBlockData
        }
      }
      ... on CompositionStructureNode {
        nodes {
          ...CompositionNodeData
          ... on CompositionStructureNode {
            nodes {
              ...CompositionNodeData
              ... on CompositionStructureNode {
                nodes {
                  ...CompositionNodeData
                  ... on CompositionComponentNode {
                    component {
                      ...IContentData
                      ...ButtonBlockData
                      ...ContentRecsElementData
                      ...LayoutSettingsBlockData
                      ...MegaMenuGroupBlockData
                      ...OdpEmbedBlockData
                      ...PageSeoSettingsData
                      ...ParagraphElementData
                      ...QuoteBlockData
                      ...RichTextElementData
                      ...TestimonialElementData
                      ...TextBlockData
                      ...VideoElementData
                      ...ArticleListElementData
                      ...CTAElementData
                      ...HeadingElementData
                      ...ImageElementData
                    }
                  }
                  ... on CompositionStructureNode {
                    nodes {
                      ...CompositionNodeData
                      ... on CompositionComponentNode {
                        component {
                          ...IContentData
                          ...OptiFormsChoiceElementData
                          ...OptiFormsNumberElementData
                          ...OptiFormsRangeElementData
                          ...OptiFormsSelectionElementData
                          ...OptiFormsResetElementData
                          ...OptiFormsSubmitElementData
                          ...OptiFormsTextareaElementData
                          ...OptiFormsTextboxElementData
                          ...OptiFormsUrlElementData
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        component {
          ...IContentData
          ...OptiFormsContainerDataData
        }
      }
    }
  }
}
    ${CompositionNodeDataFragmentDoc}
${IContentDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${VideoElementDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${CTAElementDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${ImageElementDataFragmentDoc}
${OptiFormsChoiceElementDataFragmentDoc}
${OptiFormsNumberElementDataFragmentDoc}
${OptiFormsRangeElementDataFragmentDoc}
${OptiFormsSelectionElementDataFragmentDoc}
${OptiFormsResetElementDataFragmentDoc}
${OptiFormsSubmitElementDataFragmentDoc}
${OptiFormsTextareaElementDataFragmentDoc}
${OptiFormsTextboxElementDataFragmentDoc}
${OptiFormsUrlElementDataFragmentDoc}
${OptiFormsContainerDataDataFragmentDoc}`;
export const BlogSectionExperienceDataFragmentDoc = gql`
    fragment BlogSectionExperienceData on BlogSectionExperience {
  seo_data {
    ...PageSeoSettingsPropertyData
  }
  ...ExperienceData
}
    ${PageSeoSettingsPropertyDataFragmentDoc}
${ExperienceDataFragmentDoc}`;
export const BlankExperienceDataFragmentDoc = gql`
    fragment BlankExperienceData on BlankExperience {
  BlankExperienceSeoSettings {
    ...PageSeoSettingsPropertyData
  }
  ...ExperienceData
}
    ${PageSeoSettingsPropertyDataFragmentDoc}
${ExperienceDataFragmentDoc}`;
export const ContinueReadingComponentDataFragmentDoc = gql`
    fragment ContinueReadingComponentData on ContinueReadingComponent {
  topline
  shared
  heading
  content {
    ...IContentData
    ...ButtonBlockData
    ...ContentRecsElementData
    ...LayoutSettingsBlockData
    ...MegaMenuGroupBlockData
    ...OdpEmbedBlockData
    ...PageSeoSettingsData
    ...ParagraphElementData
    ...QuoteBlockData
    ...RichTextElementData
    ...TestimonialElementData
    ...TextBlockData
    ...VideoElementData
    ...ArticleListElementData
    ...CTAElementData
    ...HeadingElementData
    ...ImageElementData
    ...ContinueReadingComponentData
    ...CarouselBlockData
    ...HeroBlockData
    ...MenuNavigationBlockData
  }
}
    ${IContentDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${VideoElementDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${CTAElementDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${ImageElementDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}`;
export const BlogPostPageDataFragmentDoc = gql`
    fragment BlogPostPageData on BlogPostPage {
  Heading
  ArticleSubHeading
  Topic
  BlogPostBody {
    json
  }
  ArticleAuthor
  BlogPostPromoImage {
    key
    url {
      type
      base
      default
    }
    item {
      __typename
      ...CmpImageAssetInfo
      ...CmpVideoAssetInfo
    }
  }
  continueReading {
    ...IContentData
    ...ArticleListElementData
    ...CTAElementData
    ...HeadingElementData
    ...ImageElementData
    ...ContinueReadingComponentData
    ...CarouselBlockData
    ...HeroBlockData
    ...MenuNavigationBlockData
  }
  SeoSettings {
    ...PageSeoSettingsPropertyData
  }
}
    ${CmpImageAssetInfoFragmentDoc}
${CmpVideoAssetInfoFragmentDoc}
${IContentDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${CTAElementDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${ImageElementDataFragmentDoc}
${ContinueReadingComponentDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}`;
export const GenericMediaDataFragmentDoc = gql`
    fragment GenericMediaData on GenericMedia {
  __typename
}
    `;
export const ImageMediaDataFragmentDoc = gql`
    fragment ImageMediaData on ImageMedia {
  AltText
}
    `;
export const VideoMediaDataFragmentDoc = gql`
    fragment VideoMediaData on VideoMedia {
  __typename
}
    `;
export const SysContentFolderDataFragmentDoc = gql`
    fragment SysContentFolderData on SysContentFolder {
  __typename
}
    `;
export const getArticleListElementItemsDocument = gql`
    query getArticleListElementItems($count: Int!, $locale: [Locales], $topics: [String], $excludeKeys: [String]) {
  BlogPostPage(
    orderBy: {_metadata: {published: DESC}}
    limit: $count
    locale: $locale
    where: {_metadata: {status: {eq: "Published"}, key: {notIn: $excludeKeys}}, Topic: {in: $topics}}
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
        type: __typename
        ...ReferenceData
        item {
          ... on ImageMedia {
            __typename
            AltText
          }
        }
      }
      blogBody: BlogPostBody {
        json
      }
      blogAuthor: ArticleAuthor
    }
  }
}
    ${IContentDataFragmentDoc}
${ReferenceDataFragmentDoc}`;
export const getDefaultArticleListDocument = gql`
    query getDefaultArticleList($locale: [Locales!]) {
  ArticleListElement(
    where: {_metadata: {displayName: {startsWith: "[DEFAULT]"}, status: {eq: "Published"}}}
    locale: $locale
    orderBy: {_metadata: {published: DESC}}
    limit: 1
  ) {
    items {
      ...IContentData
      ...ArticleListElementData
    }
  }
}
    ${IContentDataFragmentDoc}
${ArticleListElementDataFragmentDoc}`;
export const getSharedContinueReadingDocument = gql`
    query getSharedContinueReading($locale: [Locales]) {
  ContinueReadingComponent(where: {shared: {eq: true}}, locale: $locale) {
    total
    item {
      ...IContentData
      ...ContinueReadingComponentData
    }
  }
}
    ${IContentDataFragmentDoc}
${ContinueReadingComponentDataFragmentDoc}`;
export const getBlankExperienceMetaDataDocument = gql`
    query getBlankExperienceMetaData($key: String!, $locale: [Locales]) {
  page: BlankExperience(where: {_metadata: {key: {eq: $key}}}, locale: $locale) {
    items {
      meta: _metadata {
        url {
          base
        }
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
    ${ReferenceDataFragmentDoc}`;
export const getChildBlogPostsDocument = gql`
    query getChildBlogPosts($parentKey: String!, $locale: [Locales!]! = ALL, $author: [String!], $topic: [String!], $limit: Int! = 9, $skip: Int! = 0) {
  result: BlogSectionExperience(
    where: {_metadata: {key: {eq: $parentKey}}}
    locale: $locale
  ) {
    items {
      container: _metadata {
        key
        displayName
      }
      items: _link(type: ITEMS) {
        BlogPostPage(skip: $skip, limit: $limit, locale: $locale) {
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
              key
              url {
                base
                default
              }
              item {
                __typename
                ...cmpPublicImage
              }
            }
          }
          facets {
            author: ArticleAuthor(filters: $author) {
              name
              count
            }
            topic: Topic(orderBy: ASC, filters: $topic) {
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
${cmpPublicImageFragmentDoc}`;
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
    ${PageSeoSettingsPropertyDataFragmentDoc}`;
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
        type: __typename
        ...ReferenceData
        item {
          ... on ImageMedia {
            AltText
          }
          ...cmpPublicImage
        }
      }
      topics: Topic
      seo: SeoSettings {
        title: MetaTitle
        description: MetaDescription
        keywords: MetaKeywords
        image: SharingImage {
          type: __typename
          ...ReferenceData
          item {
            ... on ImageMedia {
              AltText
            }
            ...cmpPublicImage
          }
        }
        type: GraphType
      }
    }
  }
}
    ${ReferenceDataFragmentDoc}
${cmpPublicImageFragmentDoc}`;
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
        url {
          base
        }
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
    ${ReferenceDataFragmentDoc}`;
export const getLandingPageDataDocument = gql`
    query getLandingPageData($key: String!, $locale: [Locales], $version: String, $changeset: String, $variation: String) {
  data: LandingPage(
    where: {_metadata: {version: {eq: $version}, changeset: {eq: $changeset}, variation: {eq: $variation}}}
    locale: $locale
    ids: [$key]
  ) {
    item {
      _metadata {
        key
      }
      TopContentArea {
        ...ButtonBlockData
        ...ContentRecsElementData
        ...LayoutSettingsBlockData
        ...MegaMenuGroupBlockData
        ...OdpEmbedBlockData
        ...PageSeoSettingsData
        ...ParagraphElementData
        ...QuoteBlockData
        ...RichTextElementData
        ...TestimonialElementData
        ...TextBlockData
        ...VideoElementData
      }
      MainContentArea {
        ...ButtonBlockData
        ...ContentRecsElementData
        ...LayoutSettingsBlockData
        ...MegaMenuGroupBlockData
        ...OdpEmbedBlockData
        ...PageSeoSettingsData
        ...ParagraphElementData
        ...QuoteBlockData
        ...RichTextElementData
        ...TestimonialElementData
        ...TextBlockData
        ...VideoElementData
      }
      SeoSettings {
        ...PageSeoSettingsPropertyData
      }
    }
  }
}
    ${ButtonBlockDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${VideoElementDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}`;
export const getLayoutDataDocument = gql`
    query getLayoutData($domain: String, $locale: [Locales!]) {
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
${MegaMenuGroupBlockDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${LinkItemDataFragmentDoc}`;
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
      _metadata {
        key
        version
        locale
        published
        displayName
        types
        url {
          default
          base
          type
        }
      }
      preview: _fulltext(
        highlight: {enabled: true, startToken: "<span>", endToken: "</span>"}
      )
      ...BlogPostPageSearchResult
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
    ${BlogPostPageSearchResultFragmentDoc}`;
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
      _metadata {
        key
        version
        locale
        published
        displayName
        types
        url {
          default
          base
          type
        }
      }
      preview: _fulltext(
        highlight: {enabled: true, startToken: "<span>", endToken: "</span>"}
      )
      ...BlogPostPageSearchResult
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
    ${BlogPostPageSearchResultFragmentDoc}`;
export const getContentByIdDocument = gql`
    query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String, $changeset: String) {
  content: _Content(
    variation: {include: ALL}
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}], _metadata: {changeset: {eq: $changeset}}}
    locale: $locale
  ) {
    total
    items: item {
      ...IContentData
      ...SectionCompositionData
      ...ButtonBlockData
      ...ContentRecsElementData
      ...LayoutSettingsBlockData
      ...MegaMenuGroupBlockData
      ...OdpEmbedBlockData
      ...PageSeoSettingsData
      ...ParagraphElementData
      ...QuoteBlockData
      ...RichTextElementData
      ...TestimonialElementData
      ...TextBlockData
      ...VideoElementData
      ...LandingPageData
      ...BlogSectionExperienceData
      ...BlankExperienceData
      ...BlogPostPageData
      ...ArticleListElementData
      ...CTAElementData
      ...HeadingElementData
      ...ImageElementData
      ...ContinueReadingComponentData
      ...CarouselBlockData
      ...HeroBlockData
      ...MenuNavigationBlockData
      ...OptiFormsContainerDataData
      ...OptiFormsChoiceElementData
      ...OptiFormsNumberElementData
      ...OptiFormsRangeElementData
      ...OptiFormsSelectionElementData
      ...OptiFormsResetElementData
      ...OptiFormsSubmitElementData
      ...OptiFormsTextareaElementData
      ...OptiFormsTextboxElementData
      ...OptiFormsUrlElementData
    }
  }
}
    ${IContentDataFragmentDoc}
${SectionCompositionDataFragmentDoc}
${ButtonBlockDataFragmentDoc}
${ContentRecsElementDataFragmentDoc}
${LayoutSettingsBlockDataFragmentDoc}
${MegaMenuGroupBlockDataFragmentDoc}
${OdpEmbedBlockDataFragmentDoc}
${PageSeoSettingsDataFragmentDoc}
${ParagraphElementDataFragmentDoc}
${QuoteBlockDataFragmentDoc}
${RichTextElementDataFragmentDoc}
${TestimonialElementDataFragmentDoc}
${TextBlockDataFragmentDoc}
${VideoElementDataFragmentDoc}
${LandingPageDataFragmentDoc}
${BlogSectionExperienceDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${BlogPostPageDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${CTAElementDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${ImageElementDataFragmentDoc}
${ContinueReadingComponentDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${OptiFormsContainerDataDataFragmentDoc}
${OptiFormsChoiceElementDataFragmentDoc}
${OptiFormsNumberElementDataFragmentDoc}
${OptiFormsRangeElementDataFragmentDoc}
${OptiFormsSelectionElementDataFragmentDoc}
${OptiFormsResetElementDataFragmentDoc}
${OptiFormsSubmitElementDataFragmentDoc}
${OptiFormsTextareaElementDataFragmentDoc}
${OptiFormsTextboxElementDataFragmentDoc}
${OptiFormsUrlElementDataFragmentDoc}`;
export const getContentByPathDocument = gql`
    query getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String, $changeset: String = null, $variation: VariationInput) {
  content: _Content(
    where: {_metadata: {url: {default: {in: $path}, base: {eq: $siteId}}, changeset: {eq: $changeset}}}
    locale: $locale
    variation: $variation
  ) {
    total
    items: item {
      ...IContentData
      ...LandingPageData
      ...BlogSectionExperienceData
      ...BlankExperienceData
      ...BlogPostPageData
    }
  }
}
    ${IContentDataFragmentDoc}
${LandingPageDataFragmentDoc}
${BlogSectionExperienceDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${BlogPostPageDataFragmentDoc}`;
export const getContentTypeDocument = gql`
    query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String) {
  content: _Content(
    variation: {include: ALL}
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items: item {
      _metadata {
        types
      }
    }
  }
}
    `;
export const getBlogSectionExperienceDataDocument = gql`
    query getBlogSectionExperienceData($key: [String!]!, $locale: [Locales], $changeset: String, $variation: VariationInput, $version: String) {
  data: BlogSectionExperience(
    ids: $key
    locale: $locale
    variation: $variation
    where: {_metadata: {changeset: {eq: $changeset}, version: {eq: $version}}}
  ) {
    total
    item {
      _metadata {
        key
        version
        locale
        changeset
        variation
      }
      ...ExperienceData
      seo_data {
        ...PageSeoSettingsPropertyData
      }
    }
  }
}
    ${ExperienceDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}`;
export const getBlankExperienceDataDocument = gql`
    query getBlankExperienceData($key: [String!]!, $locale: [Locales], $changeset: String, $variation: VariationInput, $version: String) {
  data: BlankExperience(
    ids: $key
    locale: $locale
    variation: $variation
    where: {_metadata: {changeset: {eq: $changeset}, version: {eq: $version}}}
  ) {
    total
    item {
      _metadata {
        key
        version
        locale
        changeset
        variation
      }
      ...ExperienceData
      BlankExperienceSeoSettings {
        ...PageSeoSettingsPropertyData
      }
    }
  }
}
    ${ExperienceDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}`;
export const getBlogPostPageDataDocument = gql`
    query getBlogPostPageData($key: [String!]!, $locale: [Locales], $changeset: String, $variation: VariationInput, $version: String) {
  data: BlogPostPage(
    ids: $key
    locale: $locale
    variation: $variation
    where: {_metadata: {changeset: {eq: $changeset}, version: {eq: $version}}}
  ) {
    total
    item {
      _metadata {
        key
        version
        locale
        changeset
        variation
      }
      Heading
      ArticleSubHeading
      Topic
      BlogPostBody {
        json
      }
      ArticleAuthor
      BlogPostPromoImage {
        key
        url {
          type
          base
          default
        }
        item {
          __typename
          ...CmpImageAssetInfo
          ...CmpVideoAssetInfo
        }
      }
      continueReading {
        ...IContentData
        ...ArticleListElementData
        ...CTAElementData
        ...HeadingElementData
        ...ImageElementData
        ...ContinueReadingComponentData
        ...CarouselBlockData
        ...HeroBlockData
        ...MenuNavigationBlockData
      }
      SeoSettings {
        ...PageSeoSettingsPropertyData
      }
    }
  }
}
    ${CmpImageAssetInfoFragmentDoc}
${CmpVideoAssetInfoFragmentDoc}
${IContentDataFragmentDoc}
${ArticleListElementDataFragmentDoc}
${CTAElementDataFragmentDoc}
${HeadingElementDataFragmentDoc}
${ImageElementDataFragmentDoc}
${ContinueReadingComponentDataFragmentDoc}
${CarouselBlockDataFragmentDoc}
${HeroBlockDataFragmentDoc}
${MenuNavigationBlockDataFragmentDoc}
${PageSeoSettingsPropertyDataFragmentDoc}`;
export const getBlankSectionDataDocument = gql`
    query getBlankSectionData($key: [String!]!, $locale: [Locales], $changeset: String, $variation: VariationInput, $version: String) {
  data: BlankSection(
    ids: $key
    locale: $locale
    variation: $variation
    where: {_metadata: {changeset: {eq: $changeset}, version: {eq: $version}}}
  ) {
    total
    item {
      _metadata {
        key
        version
        locale
        changeset
        variation
      }
    }
  }
}
    `;
export const getOptiFormsContainerDataDataDocument = gql`
    query getOptiFormsContainerDataData($key: [String!]!, $locale: [Locales], $changeset: String, $variation: VariationInput, $version: String) {
  data: OptiFormsContainerData(
    ids: $key
    locale: $locale
    variation: $variation
    where: {_metadata: {changeset: {eq: $changeset}, version: {eq: $version}}}
  ) {
    total
    item {
      _metadata {
        key
        version
        locale
        changeset
        variation
      }
      Title
      Description
      ShowSummaryMessageAfterSubmission
      SubmitConfirmationMessage
      ResetConfirmationMessage
      SubmitUrl {
        type
        base
        default
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getArticleListElementItems(variables: Schema.getArticleListElementItemsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getArticleListElementItemsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getArticleListElementItemsQuery>({ document: getArticleListElementItemsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getArticleListElementItems', 'query', variables);
    },
    getDefaultArticleList(variables?: Schema.getDefaultArticleListQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getDefaultArticleListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getDefaultArticleListQuery>({ document: getDefaultArticleListDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getDefaultArticleList', 'query', variables);
    },
    getSharedContinueReading(variables?: Schema.getSharedContinueReadingQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getSharedContinueReadingQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getSharedContinueReadingQuery>({ document: getSharedContinueReadingDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getSharedContinueReading', 'query', variables);
    },
    getBlankExperienceMetaData(variables: Schema.getBlankExperienceMetaDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getBlankExperienceMetaDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlankExperienceMetaDataQuery>({ document: getBlankExperienceMetaDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getBlankExperienceMetaData', 'query', variables);
    },
    getChildBlogPosts(variables: Schema.getChildBlogPostsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getChildBlogPostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getChildBlogPostsQuery>({ document: getChildBlogPostsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getChildBlogPosts', 'query', variables);
    },
    getBlogSectionExperienceMetaData(variables: Schema.getBlogSectionExperienceMetaDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getBlogSectionExperienceMetaDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlogSectionExperienceMetaDataQuery>({ document: getBlogSectionExperienceMetaDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getBlogSectionExperienceMetaData', 'query', variables);
    },
    getBlogPostPageMetaData(variables: Schema.getBlogPostPageMetaDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getBlogPostPageMetaDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlogPostPageMetaDataQuery>({ document: getBlogPostPageMetaDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getBlogPostPageMetaData', 'query', variables);
    },
    getLandingPageMetaData(variables: Schema.getLandingPageMetaDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getLandingPageMetaDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getLandingPageMetaDataQuery>({ document: getLandingPageMetaDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getLandingPageMetaData', 'query', variables);
    },
    getLandingPageData(variables: Schema.getLandingPageDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getLandingPageDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getLandingPageDataQuery>({ document: getLandingPageDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getLandingPageData', 'query', variables);
    },
    getLayoutData(variables?: Schema.getLayoutDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getLayoutDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getLayoutDataQuery>({ document: getLayoutDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getLayoutData', 'query', variables);
    },
    getLocales(variables?: Schema.getLocalesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getLocalesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getLocalesQuery>({ document: getLocalesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getLocales', 'query', variables);
    },
    getArticles(variables?: Schema.getArticlesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getArticlesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getArticlesQuery>({ document: getArticlesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getArticles', 'query', variables);
    },
    searchContent(variables: Schema.searchContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.searchContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.searchContentQuery>({ document: searchContentDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'searchContent', 'query', variables);
    },
    personalizedSearchContent(variables: Schema.personalizedSearchContentQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.personalizedSearchContentQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.personalizedSearchContentQuery>({ document: personalizedSearchContentDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'personalizedSearchContent', 'query', variables);
    },
    getContentById(variables: Schema.getContentByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getContentByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByIdQuery>({ document: getContentByIdDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getContentById', 'query', variables);
    },
    getContentByPath(variables: Schema.getContentByPathQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getContentByPathQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByPathQuery>({ document: getContentByPathDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getContentByPath', 'query', variables);
    },
    getContentType(variables: Schema.getContentTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getContentTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentTypeQuery>({ document: getContentTypeDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getContentType', 'query', variables);
    },
    getBlogSectionExperienceData(variables: Schema.getBlogSectionExperienceDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getBlogSectionExperienceDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlogSectionExperienceDataQuery>({ document: getBlogSectionExperienceDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getBlogSectionExperienceData', 'query', variables);
    },
    getBlankExperienceData(variables: Schema.getBlankExperienceDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getBlankExperienceDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlankExperienceDataQuery>({ document: getBlankExperienceDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getBlankExperienceData', 'query', variables);
    },
    getBlogPostPageData(variables: Schema.getBlogPostPageDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getBlogPostPageDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlogPostPageDataQuery>({ document: getBlogPostPageDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getBlogPostPageData', 'query', variables);
    },
    getBlankSectionData(variables: Schema.getBlankSectionDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getBlankSectionDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlankSectionDataQuery>({ document: getBlankSectionDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getBlankSectionData', 'query', variables);
    },
    getOptiFormsContainerDataData(variables: Schema.getOptiFormsContainerDataDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getOptiFormsContainerDataDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getOptiFormsContainerDataDataQuery>({ document: getOptiFormsContainerDataDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getOptiFormsContainerDataData', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;