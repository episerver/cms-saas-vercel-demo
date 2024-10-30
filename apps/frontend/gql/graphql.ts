/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Bool: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](https://ecma-international.org/publications-and-standards/standards/ecma-404/). */
  JSON: { input: any; output: any; }
};

export type ArticleListElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ArticleListElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ArticleListElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ArticleListElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ArticleListElementWhereInput>>>;
};

export type BlankExperienceOrderByInput = {
  BlankExperienceSeoSettings?: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankExperienceWhereInput = {
  BlankExperienceSeoSettings?: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlankSectionOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankSectionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlogListingBlockOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type BlogListingBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<BlogListingBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlogListingBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlogListingBlockWhereInput>>>;
};

export type BlogPostPageOrderByInput = {
  ArticleAuthor?: InputMaybe<OrderBy>;
  BlogPostBody?: InputMaybe<RichTextOrderByInput>;
  BlogPostPromoImage?: InputMaybe<ContentReferenceOrderByInput>;
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type BlogPostPageWhereInput = {
  ArticleAuthor?: InputMaybe<SearchableStringFilterInput>;
  BlogPostBody?: InputMaybe<RichTextWhereInput>;
  BlogPostPromoImage?: InputMaybe<ContentReferenceWhereInput>;
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<BlogPostPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlogPostPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlogPostPageWhereInput>>>;
};

export type ButtonBlockOrderByInput = {
  ButtonUrl?: InputMaybe<ContentUrlOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ButtonBlockPropertyOrderByInput = {
  ButtonUrl?: InputMaybe<ContentUrlOrderByInput>;
};

export type ButtonBlockPropertyWhereInput = {
  ButtonUrl?: InputMaybe<ContentUrlWhereInput>;
};

export type ButtonBlockWhereInput = {
  ButtonUrl?: InputMaybe<ContentUrlWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
};

export type CTAElementOrderByInput = {
  Link?: InputMaybe<ContentUrlOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type CTAElementWhereInput = {
  Link?: InputMaybe<ContentUrlWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<CTAElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CTAElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CTAElementWhereInput>>>;
};

export type CardBlockOrderByInput = {
  CardButton?: InputMaybe<ButtonBlockPropertyOrderByInput>;
  CardDescription?: InputMaybe<RichTextOrderByInput>;
  CardIcon?: InputMaybe<ContentReferenceOrderByInput>;
  CardImage?: InputMaybe<ContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type CardBlockWhereInput = {
  CardButton?: InputMaybe<ButtonBlockPropertyWhereInput>;
  CardDescription?: InputMaybe<RichTextWhereInput>;
  CardIcon?: InputMaybe<ContentReferenceWhereInput>;
  CardImage?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<CardBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CardBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CardBlockWhereInput>>>;
};

export type CarouselBlockOrderByInput = {
  CarouselItemsContentArea?: InputMaybe<_IContentOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type CarouselBlockWhereInput = {
  CarouselItemsContentArea?: InputMaybe<_IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<CarouselBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CarouselBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CarouselBlockWhereInput>>>;
};

export type CompositionDisplaySettingOrderByInput = {
  key?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

export type CompositionDisplaySettingWhereInput = {
  key?: InputMaybe<StringFilterInput>;
  value?: InputMaybe<StringFilterInput>;
};

export type CompositionStructureNodeOrderByInput = {
  displayName?: InputMaybe<OrderBy>;
  displaySettings?: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  nodeType?: InputMaybe<OrderBy>;
  nodes?: InputMaybe<ICompositionNodeOrderByInput>;
  type?: InputMaybe<OrderBy>;
};

export type CompositionStructureNodeWhereInput = {
  displayName?: InputMaybe<StringFilterInput>;
  displaySettings?: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  nodeType?: InputMaybe<StringFilterInput>;
  nodes?: InputMaybe<ICompositionNodeWhereInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type ContentRecsBlockOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ContentRecsBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ContentRecsBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ContentRecsBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ContentRecsBlockWhereInput>>>;
};

export type ContentRecsElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ContentRecsElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ContentRecsElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ContentRecsElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ContentRecsElementWhereInput>>>;
};

export type ContentReferenceOrderByInput = {
  key?: InputMaybe<OrderBy>;
  url?: InputMaybe<ContentUrlOrderByInput>;
};

export type ContentReferenceWhereInput = {
  key?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ContentUrlWhereInput>;
};

export type ContentUrlOrderByInput = {
  base?: InputMaybe<OrderBy>;
  default?: InputMaybe<OrderBy>;
  hierarchical?: InputMaybe<OrderBy>;
  internal?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export type ContentUrlWhereInput = {
  base?: InputMaybe<StringFilterInput>;
  default?: InputMaybe<StringFilterInput>;
  hierarchical?: InputMaybe<StringFilterInput>;
  internal?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type DataOrderByInput = {
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type DataWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
};

export enum DateFacetUnit {
  /** Defined as 24 hours (86,400,000 milliseconds). All days begin at the earliest possible time, which is usually 00:00:00 (midnight). */
  DAY = 'DAY',
  /** Defined as 60 minutes each (3,600,000 milliseconds). All hours begin at 00 minutes and 00 seconds. */
  HOUR = 'HOUR',
  /** Defined as 1000 milliseconds each. */
  MINUTE = 'MINUTE'
}

export type DateFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `decay` influences the weight of the score with a decay function. For example, results that have a more recent datetime will be ranked higher. The `origin` will be `now()` in case not specified. The `scale` is by default 10. The `rate` must be in the range `[0..1]`. */
  decay?: InputMaybe<Decay>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Date']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Date']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Date']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Date']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Date']['input']>;
};

/** Decay influences the weight of the score based on field values with a decay function */
export type Decay = {
  origin?: InputMaybe<Scalars['Date']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  scale?: InputMaybe<Scalars['Int']['input']>;
};

export type GenericMediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
};

export type HeadingElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type HeadingElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
};

export type HeroBlockOrderByInput = {
  Description?: InputMaybe<RichTextOrderByInput>;
  HeroButton?: InputMaybe<ButtonBlockPropertyOrderByInput>;
  HeroImage?: InputMaybe<ContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type HeroBlockWhereInput = {
  Description?: InputMaybe<RichTextWhereInput>;
  HeroButton?: InputMaybe<ButtonBlockPropertyWhereInput>;
  HeroImage?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
};

/** Options for highlighting */
export type HighlightOptions = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  endToken?: InputMaybe<Scalars['String']['input']>;
  startToken?: InputMaybe<Scalars['String']['input']>;
};

export type HomePageHeroBlockOrderByInput = {
  HomeHeroButtonBlock?: InputMaybe<ButtonBlockPropertyOrderByInput>;
  HomeHeroLeftImage?: InputMaybe<ContentReferenceOrderByInput>;
  HomeHeroRightImage?: InputMaybe<ContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type HomePageHeroBlockWhereInput = {
  HomeHeroButtonBlock?: InputMaybe<ButtonBlockPropertyWhereInput>;
  HomeHeroLeftImage?: InputMaybe<ContentReferenceWhereInput>;
  HomeHeroRightImage?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<HomePageHeroBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HomePageHeroBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HomePageHeroBlockWhereInput>>>;
};

export type HtmlBlockOrderByInput = {
  HtmlContent?: InputMaybe<RichTextOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type HtmlBlockWhereInput = {
  HtmlContent?: InputMaybe<RichTextWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<HtmlBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HtmlBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HtmlBlockWhereInput>>>;
};

export type ICompositionNodeOrderByInput = {
  displayName?: InputMaybe<OrderBy>;
  displaySettings?: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  nodeType?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export type ICompositionNodeWhereInput = {
  displayName?: InputMaybe<StringFilterInput>;
  displaySettings?: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  nodeType?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type IContentMetadataOrderByInput = {
  created?: InputMaybe<OrderBy>;
  displayName?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  lastModified?: InputMaybe<OrderBy>;
  locale?: InputMaybe<OrderBy>;
  published?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  types?: InputMaybe<OrderBy>;
  url?: InputMaybe<ContentUrlOrderByInput>;
  version?: InputMaybe<OrderBy>;
};

export type IContentMetadataWhereInput = {
  created?: InputMaybe<DateFilterInput>;
  displayName?: InputMaybe<SearchableStringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  lastModified?: InputMaybe<DateFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  published?: InputMaybe<DateFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  types?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ContentUrlWhereInput>;
  version?: InputMaybe<StringFilterInput>;
};

export type ImageElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  imageLink?: InputMaybe<ContentReferenceOrderByInput>;
};

export type ImageElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ImageElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImageElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImageElementWhereInput>>>;
  imageLink?: InputMaybe<ContentReferenceWhereInput>;
};

export type ImageMediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ImageMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
};

export type LandingPageOrderByInput = {
  MainContentArea?: InputMaybe<_IContentOrderByInput>;
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  TopContentArea?: InputMaybe<_IContentOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type LandingPageWhereInput = {
  MainContentArea?: InputMaybe<_IContentWhereInput>;
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  TopContentArea?: InputMaybe<_IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
};

export type LayoutContainerBlockOrderByInput = {
  ContainerBackgroundImage?: InputMaybe<ContentReferenceOrderByInput>;
  LayoutContentArea?: InputMaybe<_IContentOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type LayoutContainerBlockWhereInput = {
  ContainerBackgroundImage?: InputMaybe<ContentReferenceWhereInput>;
  LayoutContentArea?: InputMaybe<_IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<LayoutContainerBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<LayoutContainerBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<LayoutContainerBlockWhereInput>>>;
};

export type LinkConfig = {
  from?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type LinkOrderByInput = {
  target?: InputMaybe<OrderBy>;
  text?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  url?: InputMaybe<ContentUrlOrderByInput>;
};

export enum LinkTypes {
  ASSETS = 'ASSETS',
  DEFAULT = 'DEFAULT',
  ITEMS = 'ITEMS',
  PATH = 'PATH'
}

export type LinkWhereInput = {
  target?: InputMaybe<StringFilterInput>;
  text?: InputMaybe<SearchableStringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ContentUrlWhereInput>;
};

export enum Locales {
  ALL = 'ALL',
  NEUTRAL = 'NEUTRAL',
  en = 'en',
  nl = 'nl'
}

export type MegaMenuGroupBlockOrderByInput = {
  MegaMenuContentArea?: InputMaybe<_IContentOrderByInput>;
  MegaMenuUrl?: InputMaybe<ContentUrlOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type MegaMenuGroupBlockWhereInput = {
  MegaMenuContentArea?: InputMaybe<_IContentWhereInput>;
  MegaMenuUrl?: InputMaybe<ContentUrlWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
};

export type MenuNavigationBlockOrderByInput = {
  NavigationLinks?: InputMaybe<LinkOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type MenuNavigationBlockWhereInput = {
  NavigationLinks?: InputMaybe<LinkWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<MenuNavigationBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<MenuNavigationBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<MenuNavigationBlockWhereInput>>>;
};

export type OdpEmbedBlockOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type OdpEmbedBlockWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OdpEmbedBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OdpEmbedBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OdpEmbedBlockWhereInput>>>;
};

export enum OrderBy {
  ASC = 'ASC',
  DESC = 'DESC'
}

export enum OrderByFacetType {
  COUNT = 'COUNT',
  VALUE = 'VALUE'
}

export type PageSeoSettingsOrderByInput = {
  SharingImage?: InputMaybe<ContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type PageSeoSettingsPropertyOrderByInput = {
  SharingImage?: InputMaybe<ContentReferenceOrderByInput>;
};

export type PageSeoSettingsPropertyWhereInput = {
  SharingImage?: InputMaybe<ContentReferenceWhereInput>;
};

export type PageSeoSettingsWhereInput = {
  SharingImage?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
};

export type ParagraphElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  text?: InputMaybe<RichTextOrderByInput>;
};

export type ParagraphElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  text?: InputMaybe<RichTextWhereInput>;
};

export type QuoteBlockOrderByInput = {
  QuoteProfilePicture?: InputMaybe<ContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type QuoteBlockWhereInput = {
  QuoteProfilePicture?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<QuoteBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<QuoteBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<QuoteBlockWhereInput>>>;
};

export enum Ranking {
  BOOST_ONLY = 'BOOST_ONLY',
  DOC = 'DOC',
  RELEVANCE = 'RELEVANCE',
  SEMANTIC = 'SEMANTIC'
}

export type RichTextOrderByInput = {
  html?: InputMaybe<OrderBy>;
};

export type RichTextWhereInput = {
  html?: InputMaybe<StringFilterInput>;
};

export type SearchableStringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `contains` performs full-text search on a word or phrase. */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']['input']>;
  /** `match` performs full-text search on a word or phrase where less relevant items are also returned. The `match` operator is only supported for `searchable` fields. It will improve fulltext search by making it easier to match on words. More exact matches will be ranked higher, less exact matches will be ranked lower. The `match` operator is supported with synonyms and fuzzy search. */
  match?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export type StandardPageOrderByInput = {
  MainBody?: InputMaybe<RichTextOrderByInput>;
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  StandardPromoImage?: InputMaybe<ContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type StandardPageWhereInput = {
  MainBody?: InputMaybe<RichTextWhereInput>;
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  StandardPromoImage?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<StandardPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<StandardPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<StandardPageWhereInput>>>;
};

export type StartPageOrderByInput = {
  FooterNavigationContentArea?: InputMaybe<_IContentOrderByInput>;
  FooterNavigationSubLinks?: InputMaybe<LinkOrderByInput>;
  HomePageHeroContentArea?: InputMaybe<_IContentOrderByInput>;
  HomePageMainContentArea?: InputMaybe<_IContentOrderByInput>;
  MainNavigationContentArea?: InputMaybe<_IContentOrderByInput>;
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  SiteImageLogo?: InputMaybe<ContentReferenceOrderByInput>;
  UtilityNavigationContentArea?: InputMaybe<_IContentOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type StartPageWhereInput = {
  FooterNavigationContentArea?: InputMaybe<_IContentWhereInput>;
  FooterNavigationSubLinks?: InputMaybe<LinkWhereInput>;
  HomePageHeroContentArea?: InputMaybe<_IContentWhereInput>;
  HomePageMainContentArea?: InputMaybe<_IContentWhereInput>;
  MainNavigationContentArea?: InputMaybe<_IContentWhereInput>;
  SeoSettings?: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  SiteImageLogo?: InputMaybe<ContentReferenceWhereInput>;
  UtilityNavigationContentArea?: InputMaybe<_IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
};

export type StringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `ends_with` retrieves matches that end with a certain value (suffix). */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export enum SynonymSlot {
  /** synonym slot 1 */
  ONE = 'ONE',
  /** synonym slot 2 */
  TWO = 'TWO'
}

export type SysContentFolderOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type SysContentFolderWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
};

export type TestimonialElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  customerImage?: InputMaybe<ContentReferenceOrderByInput>;
  referenceText?: InputMaybe<RichTextOrderByInput>;
};

export type TestimonialElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<TestimonialElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<TestimonialElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<TestimonialElementWhereInput>>>;
  customerImage?: InputMaybe<ContentReferenceWhereInput>;
  referenceText?: InputMaybe<RichTextWhereInput>;
};

export type TextBlockOrderByInput = {
  TextBlockDescription?: InputMaybe<RichTextOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type TextBlockWhereInput = {
  TextBlockDescription?: InputMaybe<RichTextWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
};

export type VideoElementOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  placeholder?: InputMaybe<ContentReferenceOrderByInput>;
  video?: InputMaybe<ContentReferenceOrderByInput>;
};

export type VideoElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<VideoElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<VideoElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<VideoElementWhereInput>>>;
  placeholder?: InputMaybe<ContentReferenceWhereInput>;
  video?: InputMaybe<ContentReferenceWhereInput>;
};

export type VideoMediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type VideoMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
};

export type VideoOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type VideoWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<VideoWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<VideoWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<VideoWhereInput>>>;
};

export type _ComponentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ComponentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
};

export type _ContentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ContentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
};

export type _ExperienceOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _ExperienceWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _FolderOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _FolderWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
};

export type _IContentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _IContentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
};

export type _ImageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ImageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
};

export type _MediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _MediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
};

export type _PageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _PageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
};

export type _SectionOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _SectionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _VideoOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _VideoWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
};

export enum system_Locales {
  ALL = 'ALL',
  NEUTRAL = 'NEUTRAL'
}

export type BlogListingBlockDataFragment = { __typename?: 'BlogListingBlock', showFilters?: boolean | null, selectedPageSize?: number | null, _metadata?: { __typename?: 'ContentMetadata', name?: string | null } | { __typename?: 'InstanceMetadata', name?: string | null } | { __typename?: 'ItemMetadata', name?: string | null } | { __typename?: 'MediaMetadata', name?: string | null } | null } & { ' $fragmentName'?: 'BlogListingBlockDataFragment' };

export type ButtonBlockDataFragment = { __typename?: 'ButtonBlock', children?: string | null, className?: string | null, buttonType?: string | null, buttonVariant?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'ButtonBlockDataFragment' };

export type ButtonBlockPropertyDataFragment = { __typename?: 'ButtonBlockProperty', children?: string | null, className?: string | null, buttonType?: string | null, buttonVariant?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'ButtonBlockPropertyDataFragment' };

export type CardBlockDataFragment = { __typename?: 'CardBlock', cardColor?: string | null, cardHeading?: string | null, cardSubheading?: string | null, cardImageLayout?: string | null, cardButton?: { __typename?: 'ButtonBlockProperty', className?: string | null, children?: string | null, buttonType?: string | null, buttonVariant?: string | null, url?: (
      { __typename?: 'ContentUrl' }
      & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
    ) | null } | null, cardDescription?: { __typename?: 'RichText', json?: any | null, html?: string | null } | null, cardIcon?: (
    { __typename?: 'ContentReference' }
    & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
  ) | null, cardImage?: (
    { __typename?: 'ContentReference' }
    & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
  ) | null } & { ' $fragmentName'?: 'CardBlockDataFragment' };

export type CarouselBlockDataFragment = { __typename?: 'CarouselBlock', CarouselItemsContentArea?: Array<(
    { __typename?: 'ArticleListElement' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ArticleListElement_Fragment': IContentListItem_ArticleListElement_Fragment } }
  ) | (
    { __typename?: 'BlankExperience' }
    & { ' $fragmentRefs'?: { 'IContentListItem_BlankExperience_Fragment': IContentListItem_BlankExperience_Fragment } }
  ) | (
    { __typename?: 'BlankSection' }
    & { ' $fragmentRefs'?: { 'IContentListItem_BlankSection_Fragment': IContentListItem_BlankSection_Fragment } }
  ) | (
    { __typename?: 'BlogListingBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_BlogListingBlock_Fragment': IContentListItem_BlogListingBlock_Fragment } }
  ) | (
    { __typename?: 'BlogPostPage' }
    & { ' $fragmentRefs'?: { 'IContentListItem_BlogPostPage_Fragment': IContentListItem_BlogPostPage_Fragment } }
  ) | (
    { __typename?: 'ButtonBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ButtonBlock_Fragment': IContentListItem_ButtonBlock_Fragment } }
  ) | (
    { __typename?: 'CTAElement' }
    & { ' $fragmentRefs'?: { 'IContentListItem_CTAElement_Fragment': IContentListItem_CTAElement_Fragment } }
  ) | (
    { __typename?: 'CardBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_CardBlock_Fragment': IContentListItem_CardBlock_Fragment } }
  ) | (
    { __typename?: 'CarouselBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_CarouselBlock_Fragment': IContentListItem_CarouselBlock_Fragment } }
  ) | (
    { __typename?: 'ContentRecsBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ContentRecsBlock_Fragment': IContentListItem_ContentRecsBlock_Fragment } }
  ) | (
    { __typename?: 'ContentRecsElement' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ContentRecsElement_Fragment': IContentListItem_ContentRecsElement_Fragment } }
  ) | (
    { __typename?: 'GenericMedia' }
    & { ' $fragmentRefs'?: { 'IContentListItem_GenericMedia_Fragment': IContentListItem_GenericMedia_Fragment } }
  ) | (
    { __typename?: 'HeadingElement' }
    & { ' $fragmentRefs'?: { 'IContentListItem_HeadingElement_Fragment': IContentListItem_HeadingElement_Fragment } }
  ) | (
    { __typename?: 'HeroBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_HeroBlock_Fragment': IContentListItem_HeroBlock_Fragment } }
  ) | (
    { __typename?: 'HomePageHeroBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_HomePageHeroBlock_Fragment': IContentListItem_HomePageHeroBlock_Fragment } }
  ) | (
    { __typename?: 'HtmlBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_HtmlBlock_Fragment': IContentListItem_HtmlBlock_Fragment } }
  ) | (
    { __typename?: 'ImageElement' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ImageElement_Fragment': IContentListItem_ImageElement_Fragment } }
  ) | (
    { __typename?: 'ImageMedia' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ImageMedia_Fragment': IContentListItem_ImageMedia_Fragment } }
  ) | (
    { __typename?: 'LandingPage' }
    & { ' $fragmentRefs'?: { 'IContentListItem_LandingPage_Fragment': IContentListItem_LandingPage_Fragment } }
  ) | (
    { __typename?: 'LayoutContainerBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_LayoutContainerBlock_Fragment': IContentListItem_LayoutContainerBlock_Fragment } }
  ) | (
    { __typename?: 'MegaMenuGroupBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_MegaMenuGroupBlock_Fragment': IContentListItem_MegaMenuGroupBlock_Fragment } }
  ) | (
    { __typename?: 'MenuNavigationBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_MenuNavigationBlock_Fragment': IContentListItem_MenuNavigationBlock_Fragment } }
  ) | (
    { __typename?: 'OdpEmbedBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_OdpEmbedBlock_Fragment': IContentListItem_OdpEmbedBlock_Fragment } }
  ) | (
    { __typename?: 'PageSeoSettings' }
    & { ' $fragmentRefs'?: { 'IContentListItem_PageSeoSettings_Fragment': IContentListItem_PageSeoSettings_Fragment } }
  ) | (
    { __typename?: 'ParagraphElement' }
    & { ' $fragmentRefs'?: { 'IContentListItem_ParagraphElement_Fragment': IContentListItem_ParagraphElement_Fragment } }
  ) | (
    { __typename?: 'QuoteBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_QuoteBlock_Fragment': IContentListItem_QuoteBlock_Fragment } }
  ) | (
    { __typename?: 'StandardPage' }
    & { ' $fragmentRefs'?: { 'IContentListItem_StandardPage_Fragment': IContentListItem_StandardPage_Fragment } }
  ) | (
    { __typename?: 'StartPage' }
    & { ' $fragmentRefs'?: { 'IContentListItem_StartPage_Fragment': IContentListItem_StartPage_Fragment } }
  ) | (
    { __typename?: 'SysContentFolder' }
    & { ' $fragmentRefs'?: { 'IContentListItem_SysContentFolder_Fragment': IContentListItem_SysContentFolder_Fragment } }
  ) | (
    { __typename?: 'TestimonialElement' }
    & { ' $fragmentRefs'?: { 'IContentListItem_TestimonialElement_Fragment': IContentListItem_TestimonialElement_Fragment } }
  ) | (
    { __typename?: 'TextBlock' }
    & { ' $fragmentRefs'?: { 'IContentListItem_TextBlock_Fragment': IContentListItem_TextBlock_Fragment } }
  ) | (
    { __typename?: 'Video' }
    & { ' $fragmentRefs'?: { 'IContentListItem_Video_Fragment': IContentListItem_Video_Fragment } }
  ) | (
    { __typename?: 'VideoElement' }
    & { ' $fragmentRefs'?: { 'IContentListItem_VideoElement_Fragment': IContentListItem_VideoElement_Fragment } }
  ) | (
    { __typename?: 'VideoMedia' }
    & { ' $fragmentRefs'?: { 'IContentListItem_VideoMedia_Fragment': IContentListItem_VideoMedia_Fragment } }
  ) | (
    { __typename?: '_Component' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Component_Fragment': IContentListItem__Component_Fragment } }
  ) | (
    { __typename?: '_Content' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Content_Fragment': IContentListItem__Content_Fragment } }
  ) | (
    { __typename?: '_Experience' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Experience_Fragment': IContentListItem__Experience_Fragment } }
  ) | (
    { __typename?: '_Folder' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Folder_Fragment': IContentListItem__Folder_Fragment } }
  ) | (
    { __typename?: '_Image' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Image_Fragment': IContentListItem__Image_Fragment } }
  ) | (
    { __typename?: '_Media' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Media_Fragment': IContentListItem__Media_Fragment } }
  ) | (
    { __typename?: '_Page' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Page_Fragment': IContentListItem__Page_Fragment } }
  ) | (
    { __typename?: '_Section' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Section_Fragment': IContentListItem__Section_Fragment } }
  ) | (
    { __typename?: '_Video' }
    & { ' $fragmentRefs'?: { 'IContentListItem__Video_Fragment': IContentListItem__Video_Fragment } }
  ) | null> | null } & { ' $fragmentName'?: 'CarouselBlockDataFragment' };

export type ContentRecsBlockDataFragment = { __typename?: 'ContentRecsBlock', BlockDeliveryApiKey?: string | null, BlockRecommendationCount?: number | null } & { ' $fragmentName'?: 'ContentRecsBlockDataFragment' };

export type HeroBlockDataFragment = { __typename?: 'HeroBlock', eyebrow?: string | null, heroHeading?: string | null, heroSubheading?: string | null, heroColor?: string | null, heroImage?: (
    { __typename?: 'ContentReference' }
    & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
  ) | null, heroDescription?: { __typename?: 'RichText', json?: any | null, html?: string | null } | null, heroButton?: (
    { __typename?: 'ButtonBlockProperty' }
    & { ' $fragmentRefs'?: { 'ButtonBlockPropertyDataFragment': ButtonBlockPropertyDataFragment } }
  ) | null } & { ' $fragmentName'?: 'HeroBlockDataFragment' };

export type HomePageHeroBlockDataFragment = { __typename?: 'HomePageHeroBlock', homeHeroHeading?: string | null, homeHeroSubheading?: string | null, leftImage?: (
    { __typename?: 'ContentReference' }
    & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
  ) | null, rightImage?: (
    { __typename?: 'ContentReference' }
    & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
  ) | null, homeHeroButton?: (
    { __typename?: 'ButtonBlockProperty' }
    & { ' $fragmentRefs'?: { 'ButtonBlockPropertyDataFragment': ButtonBlockPropertyDataFragment } }
  ) | null } & { ' $fragmentName'?: 'HomePageHeroBlockDataFragment' };

export type LayoutContainerBlockDataFragment = { __typename?: 'LayoutContainerBlock', columns?: number | null, gap?: string | null, containerColor?: string | null, marginTop?: string | null, marginBottom?: string | null, paddingBottom?: string | null, paddingTop?: string | null, LayoutContentArea?: Array<(
    { __typename?: 'ArticleListElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ArticleListElement_Fragment': BlockData_ArticleListElement_Fragment } }
  ) | (
    { __typename?: 'BlankExperience' }
    & { ' $fragmentRefs'?: { 'BlockData_BlankExperience_Fragment': BlockData_BlankExperience_Fragment } }
  ) | (
    { __typename?: 'BlankSection' }
    & { ' $fragmentRefs'?: { 'BlockData_BlankSection_Fragment': BlockData_BlankSection_Fragment;'BlankSectionDataFragment': BlankSectionDataFragment } }
  ) | (
    { __typename?: 'BlogListingBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_BlogListingBlock_Fragment': BlockData_BlogListingBlock_Fragment;'BlogListingBlockDataFragment': BlogListingBlockDataFragment } }
  ) | (
    { __typename?: 'BlogPostPage' }
    & { ' $fragmentRefs'?: { 'BlockData_BlogPostPage_Fragment': BlockData_BlogPostPage_Fragment } }
  ) | (
    { __typename?: 'ButtonBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ButtonBlock_Fragment': BlockData_ButtonBlock_Fragment;'ButtonBlockDataFragment': ButtonBlockDataFragment } }
  ) | (
    { __typename?: 'CTAElement' }
    & { ' $fragmentRefs'?: { 'BlockData_CTAElement_Fragment': BlockData_CTAElement_Fragment } }
  ) | (
    { __typename?: 'CardBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_CardBlock_Fragment': BlockData_CardBlock_Fragment;'CardBlockDataFragment': CardBlockDataFragment } }
  ) | (
    { __typename?: 'CarouselBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_CarouselBlock_Fragment': BlockData_CarouselBlock_Fragment;'CarouselBlockDataFragment': CarouselBlockDataFragment } }
  ) | (
    { __typename?: 'ContentRecsBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ContentRecsBlock_Fragment': BlockData_ContentRecsBlock_Fragment;'ContentRecsBlockDataFragment': ContentRecsBlockDataFragment } }
  ) | (
    { __typename?: 'ContentRecsElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ContentRecsElement_Fragment': BlockData_ContentRecsElement_Fragment } }
  ) | (
    { __typename?: 'GenericMedia' }
    & { ' $fragmentRefs'?: { 'BlockData_GenericMedia_Fragment': BlockData_GenericMedia_Fragment } }
  ) | (
    { __typename?: 'HeadingElement' }
    & { ' $fragmentRefs'?: { 'BlockData_HeadingElement_Fragment': BlockData_HeadingElement_Fragment } }
  ) | (
    { __typename?: 'HeroBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HeroBlock_Fragment': BlockData_HeroBlock_Fragment;'HeroBlockDataFragment': HeroBlockDataFragment } }
  ) | (
    { __typename?: 'HomePageHeroBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HomePageHeroBlock_Fragment': BlockData_HomePageHeroBlock_Fragment;'HomePageHeroBlockDataFragment': HomePageHeroBlockDataFragment } }
  ) | (
    { __typename?: 'HtmlBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HtmlBlock_Fragment': BlockData_HtmlBlock_Fragment } }
  ) | (
    { __typename?: 'ImageElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ImageElement_Fragment': BlockData_ImageElement_Fragment } }
  ) | (
    { __typename?: 'ImageMedia' }
    & { ' $fragmentRefs'?: { 'BlockData_ImageMedia_Fragment': BlockData_ImageMedia_Fragment } }
  ) | (
    { __typename?: 'LandingPage' }
    & { ' $fragmentRefs'?: { 'BlockData_LandingPage_Fragment': BlockData_LandingPage_Fragment } }
  ) | (
    { __typename?: 'LayoutContainerBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_LayoutContainerBlock_Fragment': BlockData_LayoutContainerBlock_Fragment;'LayoutContainerBlockDataFragment': LayoutContainerBlockDataFragment } }
  ) | (
    { __typename?: 'MegaMenuGroupBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_MegaMenuGroupBlock_Fragment': BlockData_MegaMenuGroupBlock_Fragment } }
  ) | (
    { __typename?: 'MenuNavigationBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_MenuNavigationBlock_Fragment': BlockData_MenuNavigationBlock_Fragment } }
  ) | (
    { __typename?: 'OdpEmbedBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_OdpEmbedBlock_Fragment': BlockData_OdpEmbedBlock_Fragment;'OdpEmbedBlockDataFragment': OdpEmbedBlockDataFragment } }
  ) | (
    { __typename?: 'PageSeoSettings' }
    & { ' $fragmentRefs'?: { 'BlockData_PageSeoSettings_Fragment': BlockData_PageSeoSettings_Fragment } }
  ) | (
    { __typename?: 'ParagraphElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ParagraphElement_Fragment': BlockData_ParagraphElement_Fragment } }
  ) | (
    { __typename?: 'QuoteBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_QuoteBlock_Fragment': BlockData_QuoteBlock_Fragment;'QuoteBlockDataFragment': QuoteBlockDataFragment } }
  ) | (
    { __typename?: 'StandardPage' }
    & { ' $fragmentRefs'?: { 'BlockData_StandardPage_Fragment': BlockData_StandardPage_Fragment } }
  ) | (
    { __typename?: 'StartPage' }
    & { ' $fragmentRefs'?: { 'BlockData_StartPage_Fragment': BlockData_StartPage_Fragment } }
  ) | (
    { __typename?: 'SysContentFolder' }
    & { ' $fragmentRefs'?: { 'BlockData_SysContentFolder_Fragment': BlockData_SysContentFolder_Fragment } }
  ) | (
    { __typename?: 'TestimonialElement' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialElement_Fragment': BlockData_TestimonialElement_Fragment } }
  ) | (
    { __typename?: 'TextBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TextBlock_Fragment': BlockData_TextBlock_Fragment;'TextBlockDataFragment': TextBlockDataFragment } }
  ) | (
    { __typename?: 'Video' }
    & { ' $fragmentRefs'?: { 'BlockData_Video_Fragment': BlockData_Video_Fragment } }
  ) | (
    { __typename?: 'VideoElement' }
    & { ' $fragmentRefs'?: { 'BlockData_VideoElement_Fragment': BlockData_VideoElement_Fragment } }
  ) | (
    { __typename?: 'VideoMedia' }
    & { ' $fragmentRefs'?: { 'BlockData_VideoMedia_Fragment': BlockData_VideoMedia_Fragment } }
  ) | (
    { __typename?: '_Component' }
    & { ' $fragmentRefs'?: { 'BlockData__Component_Fragment': BlockData__Component_Fragment } }
  ) | (
    { __typename?: '_Content' }
    & { ' $fragmentRefs'?: { 'BlockData__Content_Fragment': BlockData__Content_Fragment } }
  ) | (
    { __typename?: '_Experience' }
    & { ' $fragmentRefs'?: { 'BlockData__Experience_Fragment': BlockData__Experience_Fragment } }
  ) | (
    { __typename?: '_Folder' }
    & { ' $fragmentRefs'?: { 'BlockData__Folder_Fragment': BlockData__Folder_Fragment } }
  ) | (
    { __typename?: '_Image' }
    & { ' $fragmentRefs'?: { 'BlockData__Image_Fragment': BlockData__Image_Fragment } }
  ) | (
    { __typename?: '_Media' }
    & { ' $fragmentRefs'?: { 'BlockData__Media_Fragment': BlockData__Media_Fragment } }
  ) | (
    { __typename?: '_Page' }
    & { ' $fragmentRefs'?: { 'BlockData__Page_Fragment': BlockData__Page_Fragment } }
  ) | (
    { __typename?: '_Section' }
    & { ' $fragmentRefs'?: { 'BlockData__Section_Fragment': BlockData__Section_Fragment } }
  ) | (
    { __typename?: '_Video' }
    & { ' $fragmentRefs'?: { 'BlockData__Video_Fragment': BlockData__Video_Fragment } }
  ) | null> | null, backgroundImage?: (
    { __typename?: 'ContentReference' }
    & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
  ) | null } & { ' $fragmentName'?: 'LayoutContainerBlockDataFragment' };

export type OdpEmbedBlockDataFragment = { __typename?: 'OdpEmbedBlock', ContentId?: string | null } & { ' $fragmentName'?: 'OdpEmbedBlockDataFragment' };

export type PageSeoSettingsPropertyDataFragment = { __typename?: 'PageSeoSettingsProperty', MetaTitle?: string | null, MetaDescription?: string | null, GraphType?: string | null, SharingImage?: (
    { __typename?: 'ContentReference' }
    & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
  ) | null } & { ' $fragmentName'?: 'PageSeoSettingsPropertyDataFragment' };

export type QuoteBlockDataFragment = { __typename?: 'QuoteBlock', quote?: string | null, color?: string | null, active?: boolean | null, name?: string | null, location?: string | null, profilePicture?: (
    { __typename?: 'ContentReference' }
    & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
  ) | null } & { ' $fragmentName'?: 'QuoteBlockDataFragment' };

export type TextBlockDataFragment = { __typename?: 'TextBlock', overline?: string | null, headingSize?: string | null, heading?: string | null, center?: boolean | null, width?: string | null, className?: string | null, description?: { __typename?: 'RichText', json?: any | null, html?: string | null } | null } & { ' $fragmentName'?: 'TextBlockDataFragment' };

export type ArticleListElementDataFragment = { __typename?: 'ArticleListElement', articleListCount?: number | null } & { ' $fragmentName'?: 'ArticleListElementDataFragment' };

export type getArticleListElementItemsQueryVariables = Exact<{
  count: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type getArticleListElementItemsQuery = { __typename?: 'Query', BlogPostPage?: { __typename?: 'BlogPostPageOutput', items?: Array<(
      { __typename?: 'BlogPostPage', blogTitle?: string | null, blogSubtitle?: string | null, blogAuthor?: string | null, articleMeta?: { __typename?: 'ContentMetadata', key?: string | null, published?: any | null, lastModified?: any | null } | { __typename?: 'InstanceMetadata', key?: string | null, published?: any | null, lastModified?: any | null } | { __typename?: 'ItemMetadata', key?: string | null, published?: any | null, lastModified?: any | null } | { __typename?: 'MediaMetadata', key?: string | null, published?: any | null, lastModified?: any | null } | null, blogImage?: (
        { __typename?: 'ContentReference' }
        & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
      ) | null, blogBody?: { __typename?: 'RichText', json?: any | null } | null }
      & { ' $fragmentRefs'?: { 'IContentData_BlogPostPage_Fragment': IContentData_BlogPostPage_Fragment } }
    ) | null> | null } | null };

export type CTAElementDataFragment = { __typename?: 'CTAElement', cta_text?: string | null, cta_link?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'CTAElementDataFragment' };

export type ContentRecsElementDataFragment = { __typename?: 'ContentRecsElement', ElementDeliveryApiKey?: string | null, ElementRecommendationCount?: number | null } & { ' $fragmentName'?: 'ContentRecsElementDataFragment' };

export type HeadingElementDataFragment = { __typename?: 'HeadingElement', headingText?: string | null } & { ' $fragmentName'?: 'HeadingElementDataFragment' };

export type ImageElementDataFragment = { __typename?: 'ImageElement', altText?: string | null, imageLink?: (
    { __typename?: 'ContentReference' }
    & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
  ) | null } & { ' $fragmentName'?: 'ImageElementDataFragment' };

export type ParagraphElementDataFragment = { __typename?: 'ParagraphElement', text?: { __typename?: 'RichText', json?: any | null } | null } & { ' $fragmentName'?: 'ParagraphElementDataFragment' };

export type TestimonialElementDataFragment = { __typename?: 'TestimonialElement', customerName?: string | null, customerLocation?: string | null, referenceTitle?: string | null, customerImage?: (
    { __typename?: 'ContentReference' }
    & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
  ) | null, referenceText?: { __typename?: 'RichText', json?: any | null } | null } & { ' $fragmentName'?: 'TestimonialElementDataFragment' };

export type VideoElementDataFragment = { __typename?: 'VideoElement', title?: string | null, video?: (
    { __typename?: 'ContentReference' }
    & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
  ) | null, placeholder?: (
    { __typename?: 'ContentReference' }
    & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
  ) | null } & { ' $fragmentName'?: 'VideoElementDataFragment' };

export type BlankExperienceDataFragment = (
  { __typename?: 'BlankExperience', BlankExperienceSeoSettings?: (
    { __typename?: 'PageSeoSettingsProperty' }
    & { ' $fragmentRefs'?: { 'PageSeoSettingsPropertyDataFragment': PageSeoSettingsPropertyDataFragment } }
  ) | null }
  & { ' $fragmentRefs'?: { 'ExperienceData_BlankExperience_Fragment': ExperienceData_BlankExperience_Fragment } }
) & { ' $fragmentName'?: 'BlankExperienceDataFragment' };

export type getBlankExperienceMetaDataQueryVariables = Exact<{
  key: Scalars['String']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type getBlankExperienceMetaDataQuery = { __typename?: 'Query', page?: { __typename?: 'BlankExperienceOutput', items?: Array<{ __typename?: 'BlankExperience', meta?: { __typename?: 'ContentMetadata', displayName?: string | null } | { __typename?: 'InstanceMetadata', displayName?: string | null } | { __typename?: 'ItemMetadata', displayName?: string | null } | { __typename?: 'MediaMetadata', displayName?: string | null } | null, seo?: { __typename?: 'PageSeoSettingsProperty', title?: string | null, description?: string | null, type?: string | null, image?: (
          { __typename?: 'ContentReference' }
          & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
        ) | null } | null } | null> | null } | null };

export type getBlogPostPageMetaDataQueryVariables = Exact<{
  key: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type getBlogPostPageMetaDataQuery = { __typename?: 'Query', BlogPostPage?: { __typename?: 'BlogPostPageOutput', pages?: Array<{ __typename?: 'BlogPostPage', Heading?: string | null, _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, key?: string | null, version?: string | null, locale?: string | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, key?: string | null, version?: string | null, locale?: string | null } | { __typename?: 'ItemMetadata', displayName?: string | null, key?: string | null, version?: string | null, locale?: string | null } | { __typename?: 'MediaMetadata', displayName?: string | null, key?: string | null, version?: string | null, locale?: string | null } | null, BlogPostPromoImage?: (
        { __typename?: 'ContentReference' }
        & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
      ) | null, SeoSettings?: { __typename?: 'PageSeoSettingsProperty', MetaTitle?: string | null, MetaDescription?: string | null, GraphType?: string | null, SharingImage?: (
          { __typename?: 'ContentReference' }
          & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
        ) | null } | null } | null> | null } | null };

export type BlogPostPageDataFragment = { __typename?: 'BlogPostPage', blogTitle?: string | null, blogSubtitle?: string | null, blogAuthor?: string | null, blogImage?: (
    { __typename?: 'ContentReference' }
    & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
  ) | null, blogBody?: { __typename?: 'RichText', json?: any | null } | null } & { ' $fragmentName'?: 'BlogPostPageDataFragment' };

export type BlogPostPageSearchResultFragment = { __typename?: 'BlogPostPage', title?: string | null, author?: string | null, image?: (
    { __typename?: 'ContentReference' }
    & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
  ) | null, seodata?: { __typename?: 'PageSeoSettingsProperty', MetaTitle?: string | null, MetaDescription?: string | null } | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null } & { ' $fragmentName'?: 'BlogPostPageSearchResultFragment' };

export type getLandingPageMetaDataQueryVariables = Exact<{
  key: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type getLandingPageMetaDataQuery = { __typename?: 'Query', LandingPage?: { __typename?: 'LandingPageOutput', pages?: Array<{ __typename?: 'LandingPage', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, key?: string | null, version?: string | null, locale?: string | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, key?: string | null, version?: string | null, locale?: string | null } | { __typename?: 'ItemMetadata', displayName?: string | null, key?: string | null, version?: string | null, locale?: string | null } | { __typename?: 'MediaMetadata', displayName?: string | null, key?: string | null, version?: string | null, locale?: string | null } | null, SeoSettings?: { __typename?: 'PageSeoSettingsProperty', MetaTitle?: string | null, MetaDescription?: string | null, GraphType?: string | null, SharingImage?: (
          { __typename?: 'ContentReference' }
          & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
        ) | null } | null } | null> | null } | null };

export type LandingPageDataFragment = { __typename?: 'LandingPage', TopContentArea?: Array<(
    { __typename?: 'ArticleListElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ArticleListElement_Fragment': BlockData_ArticleListElement_Fragment } }
  ) | (
    { __typename?: 'BlankExperience' }
    & { ' $fragmentRefs'?: { 'BlockData_BlankExperience_Fragment': BlockData_BlankExperience_Fragment } }
  ) | (
    { __typename?: 'BlankSection' }
    & { ' $fragmentRefs'?: { 'BlockData_BlankSection_Fragment': BlockData_BlankSection_Fragment;'BlankSectionDataFragment': BlankSectionDataFragment } }
  ) | (
    { __typename?: 'BlogListingBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_BlogListingBlock_Fragment': BlockData_BlogListingBlock_Fragment;'BlogListingBlockDataFragment': BlogListingBlockDataFragment } }
  ) | (
    { __typename?: 'BlogPostPage' }
    & { ' $fragmentRefs'?: { 'BlockData_BlogPostPage_Fragment': BlockData_BlogPostPage_Fragment } }
  ) | (
    { __typename?: 'ButtonBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ButtonBlock_Fragment': BlockData_ButtonBlock_Fragment;'ButtonBlockDataFragment': ButtonBlockDataFragment } }
  ) | (
    { __typename?: 'CTAElement' }
    & { ' $fragmentRefs'?: { 'BlockData_CTAElement_Fragment': BlockData_CTAElement_Fragment } }
  ) | (
    { __typename?: 'CardBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_CardBlock_Fragment': BlockData_CardBlock_Fragment;'CardBlockDataFragment': CardBlockDataFragment } }
  ) | (
    { __typename?: 'CarouselBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_CarouselBlock_Fragment': BlockData_CarouselBlock_Fragment;'CarouselBlockDataFragment': CarouselBlockDataFragment } }
  ) | (
    { __typename?: 'ContentRecsBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ContentRecsBlock_Fragment': BlockData_ContentRecsBlock_Fragment;'ContentRecsBlockDataFragment': ContentRecsBlockDataFragment } }
  ) | (
    { __typename?: 'ContentRecsElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ContentRecsElement_Fragment': BlockData_ContentRecsElement_Fragment } }
  ) | (
    { __typename?: 'GenericMedia' }
    & { ' $fragmentRefs'?: { 'BlockData_GenericMedia_Fragment': BlockData_GenericMedia_Fragment } }
  ) | (
    { __typename?: 'HeadingElement' }
    & { ' $fragmentRefs'?: { 'BlockData_HeadingElement_Fragment': BlockData_HeadingElement_Fragment } }
  ) | (
    { __typename?: 'HeroBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HeroBlock_Fragment': BlockData_HeroBlock_Fragment;'HeroBlockDataFragment': HeroBlockDataFragment } }
  ) | (
    { __typename?: 'HomePageHeroBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HomePageHeroBlock_Fragment': BlockData_HomePageHeroBlock_Fragment;'HomePageHeroBlockDataFragment': HomePageHeroBlockDataFragment } }
  ) | (
    { __typename?: 'HtmlBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HtmlBlock_Fragment': BlockData_HtmlBlock_Fragment } }
  ) | (
    { __typename?: 'ImageElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ImageElement_Fragment': BlockData_ImageElement_Fragment } }
  ) | (
    { __typename?: 'ImageMedia' }
    & { ' $fragmentRefs'?: { 'BlockData_ImageMedia_Fragment': BlockData_ImageMedia_Fragment } }
  ) | (
    { __typename?: 'LandingPage' }
    & { ' $fragmentRefs'?: { 'BlockData_LandingPage_Fragment': BlockData_LandingPage_Fragment } }
  ) | (
    { __typename?: 'LayoutContainerBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_LayoutContainerBlock_Fragment': BlockData_LayoutContainerBlock_Fragment;'LayoutContainerBlockDataFragment': LayoutContainerBlockDataFragment } }
  ) | (
    { __typename?: 'MegaMenuGroupBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_MegaMenuGroupBlock_Fragment': BlockData_MegaMenuGroupBlock_Fragment } }
  ) | (
    { __typename?: 'MenuNavigationBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_MenuNavigationBlock_Fragment': BlockData_MenuNavigationBlock_Fragment } }
  ) | (
    { __typename?: 'OdpEmbedBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_OdpEmbedBlock_Fragment': BlockData_OdpEmbedBlock_Fragment;'OdpEmbedBlockDataFragment': OdpEmbedBlockDataFragment } }
  ) | (
    { __typename?: 'PageSeoSettings' }
    & { ' $fragmentRefs'?: { 'BlockData_PageSeoSettings_Fragment': BlockData_PageSeoSettings_Fragment } }
  ) | (
    { __typename?: 'ParagraphElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ParagraphElement_Fragment': BlockData_ParagraphElement_Fragment } }
  ) | (
    { __typename?: 'QuoteBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_QuoteBlock_Fragment': BlockData_QuoteBlock_Fragment;'QuoteBlockDataFragment': QuoteBlockDataFragment } }
  ) | (
    { __typename?: 'StandardPage' }
    & { ' $fragmentRefs'?: { 'BlockData_StandardPage_Fragment': BlockData_StandardPage_Fragment } }
  ) | (
    { __typename?: 'StartPage' }
    & { ' $fragmentRefs'?: { 'BlockData_StartPage_Fragment': BlockData_StartPage_Fragment } }
  ) | (
    { __typename?: 'SysContentFolder' }
    & { ' $fragmentRefs'?: { 'BlockData_SysContentFolder_Fragment': BlockData_SysContentFolder_Fragment } }
  ) | (
    { __typename?: 'TestimonialElement' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialElement_Fragment': BlockData_TestimonialElement_Fragment } }
  ) | (
    { __typename?: 'TextBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TextBlock_Fragment': BlockData_TextBlock_Fragment;'TextBlockDataFragment': TextBlockDataFragment } }
  ) | (
    { __typename?: 'Video' }
    & { ' $fragmentRefs'?: { 'BlockData_Video_Fragment': BlockData_Video_Fragment } }
  ) | (
    { __typename?: 'VideoElement' }
    & { ' $fragmentRefs'?: { 'BlockData_VideoElement_Fragment': BlockData_VideoElement_Fragment } }
  ) | (
    { __typename?: 'VideoMedia' }
    & { ' $fragmentRefs'?: { 'BlockData_VideoMedia_Fragment': BlockData_VideoMedia_Fragment } }
  ) | (
    { __typename?: '_Component' }
    & { ' $fragmentRefs'?: { 'BlockData__Component_Fragment': BlockData__Component_Fragment } }
  ) | (
    { __typename?: '_Content' }
    & { ' $fragmentRefs'?: { 'BlockData__Content_Fragment': BlockData__Content_Fragment } }
  ) | (
    { __typename?: '_Experience' }
    & { ' $fragmentRefs'?: { 'BlockData__Experience_Fragment': BlockData__Experience_Fragment } }
  ) | (
    { __typename?: '_Folder' }
    & { ' $fragmentRefs'?: { 'BlockData__Folder_Fragment': BlockData__Folder_Fragment } }
  ) | (
    { __typename?: '_Image' }
    & { ' $fragmentRefs'?: { 'BlockData__Image_Fragment': BlockData__Image_Fragment } }
  ) | (
    { __typename?: '_Media' }
    & { ' $fragmentRefs'?: { 'BlockData__Media_Fragment': BlockData__Media_Fragment } }
  ) | (
    { __typename?: '_Page' }
    & { ' $fragmentRefs'?: { 'BlockData__Page_Fragment': BlockData__Page_Fragment } }
  ) | (
    { __typename?: '_Section' }
    & { ' $fragmentRefs'?: { 'BlockData__Section_Fragment': BlockData__Section_Fragment } }
  ) | (
    { __typename?: '_Video' }
    & { ' $fragmentRefs'?: { 'BlockData__Video_Fragment': BlockData__Video_Fragment } }
  ) | null> | null, MainContentArea?: Array<(
    { __typename?: 'ArticleListElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ArticleListElement_Fragment': BlockData_ArticleListElement_Fragment } }
  ) | (
    { __typename?: 'BlankExperience' }
    & { ' $fragmentRefs'?: { 'BlockData_BlankExperience_Fragment': BlockData_BlankExperience_Fragment } }
  ) | (
    { __typename?: 'BlankSection' }
    & { ' $fragmentRefs'?: { 'BlockData_BlankSection_Fragment': BlockData_BlankSection_Fragment;'BlankSectionDataFragment': BlankSectionDataFragment } }
  ) | (
    { __typename?: 'BlogListingBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_BlogListingBlock_Fragment': BlockData_BlogListingBlock_Fragment;'BlogListingBlockDataFragment': BlogListingBlockDataFragment } }
  ) | (
    { __typename?: 'BlogPostPage' }
    & { ' $fragmentRefs'?: { 'BlockData_BlogPostPage_Fragment': BlockData_BlogPostPage_Fragment } }
  ) | (
    { __typename?: 'ButtonBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ButtonBlock_Fragment': BlockData_ButtonBlock_Fragment;'ButtonBlockDataFragment': ButtonBlockDataFragment } }
  ) | (
    { __typename?: 'CTAElement' }
    & { ' $fragmentRefs'?: { 'BlockData_CTAElement_Fragment': BlockData_CTAElement_Fragment } }
  ) | (
    { __typename?: 'CardBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_CardBlock_Fragment': BlockData_CardBlock_Fragment;'CardBlockDataFragment': CardBlockDataFragment } }
  ) | (
    { __typename?: 'CarouselBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_CarouselBlock_Fragment': BlockData_CarouselBlock_Fragment;'CarouselBlockDataFragment': CarouselBlockDataFragment } }
  ) | (
    { __typename?: 'ContentRecsBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ContentRecsBlock_Fragment': BlockData_ContentRecsBlock_Fragment;'ContentRecsBlockDataFragment': ContentRecsBlockDataFragment } }
  ) | (
    { __typename?: 'ContentRecsElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ContentRecsElement_Fragment': BlockData_ContentRecsElement_Fragment } }
  ) | (
    { __typename?: 'GenericMedia' }
    & { ' $fragmentRefs'?: { 'BlockData_GenericMedia_Fragment': BlockData_GenericMedia_Fragment } }
  ) | (
    { __typename?: 'HeadingElement' }
    & { ' $fragmentRefs'?: { 'BlockData_HeadingElement_Fragment': BlockData_HeadingElement_Fragment } }
  ) | (
    { __typename?: 'HeroBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HeroBlock_Fragment': BlockData_HeroBlock_Fragment;'HeroBlockDataFragment': HeroBlockDataFragment } }
  ) | (
    { __typename?: 'HomePageHeroBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HomePageHeroBlock_Fragment': BlockData_HomePageHeroBlock_Fragment;'HomePageHeroBlockDataFragment': HomePageHeroBlockDataFragment } }
  ) | (
    { __typename?: 'HtmlBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HtmlBlock_Fragment': BlockData_HtmlBlock_Fragment } }
  ) | (
    { __typename?: 'ImageElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ImageElement_Fragment': BlockData_ImageElement_Fragment } }
  ) | (
    { __typename?: 'ImageMedia' }
    & { ' $fragmentRefs'?: { 'BlockData_ImageMedia_Fragment': BlockData_ImageMedia_Fragment } }
  ) | (
    { __typename?: 'LandingPage' }
    & { ' $fragmentRefs'?: { 'BlockData_LandingPage_Fragment': BlockData_LandingPage_Fragment } }
  ) | (
    { __typename?: 'LayoutContainerBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_LayoutContainerBlock_Fragment': BlockData_LayoutContainerBlock_Fragment;'LayoutContainerBlockDataFragment': LayoutContainerBlockDataFragment } }
  ) | (
    { __typename?: 'MegaMenuGroupBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_MegaMenuGroupBlock_Fragment': BlockData_MegaMenuGroupBlock_Fragment } }
  ) | (
    { __typename?: 'MenuNavigationBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_MenuNavigationBlock_Fragment': BlockData_MenuNavigationBlock_Fragment } }
  ) | (
    { __typename?: 'OdpEmbedBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_OdpEmbedBlock_Fragment': BlockData_OdpEmbedBlock_Fragment;'OdpEmbedBlockDataFragment': OdpEmbedBlockDataFragment } }
  ) | (
    { __typename?: 'PageSeoSettings' }
    & { ' $fragmentRefs'?: { 'BlockData_PageSeoSettings_Fragment': BlockData_PageSeoSettings_Fragment } }
  ) | (
    { __typename?: 'ParagraphElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ParagraphElement_Fragment': BlockData_ParagraphElement_Fragment } }
  ) | (
    { __typename?: 'QuoteBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_QuoteBlock_Fragment': BlockData_QuoteBlock_Fragment;'QuoteBlockDataFragment': QuoteBlockDataFragment } }
  ) | (
    { __typename?: 'StandardPage' }
    & { ' $fragmentRefs'?: { 'BlockData_StandardPage_Fragment': BlockData_StandardPage_Fragment } }
  ) | (
    { __typename?: 'StartPage' }
    & { ' $fragmentRefs'?: { 'BlockData_StartPage_Fragment': BlockData_StartPage_Fragment } }
  ) | (
    { __typename?: 'SysContentFolder' }
    & { ' $fragmentRefs'?: { 'BlockData_SysContentFolder_Fragment': BlockData_SysContentFolder_Fragment } }
  ) | (
    { __typename?: 'TestimonialElement' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialElement_Fragment': BlockData_TestimonialElement_Fragment } }
  ) | (
    { __typename?: 'TextBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TextBlock_Fragment': BlockData_TextBlock_Fragment;'TextBlockDataFragment': TextBlockDataFragment } }
  ) | (
    { __typename?: 'Video' }
    & { ' $fragmentRefs'?: { 'BlockData_Video_Fragment': BlockData_Video_Fragment } }
  ) | (
    { __typename?: 'VideoElement' }
    & { ' $fragmentRefs'?: { 'BlockData_VideoElement_Fragment': BlockData_VideoElement_Fragment } }
  ) | (
    { __typename?: 'VideoMedia' }
    & { ' $fragmentRefs'?: { 'BlockData_VideoMedia_Fragment': BlockData_VideoMedia_Fragment } }
  ) | (
    { __typename?: '_Component' }
    & { ' $fragmentRefs'?: { 'BlockData__Component_Fragment': BlockData__Component_Fragment } }
  ) | (
    { __typename?: '_Content' }
    & { ' $fragmentRefs'?: { 'BlockData__Content_Fragment': BlockData__Content_Fragment } }
  ) | (
    { __typename?: '_Experience' }
    & { ' $fragmentRefs'?: { 'BlockData__Experience_Fragment': BlockData__Experience_Fragment } }
  ) | (
    { __typename?: '_Folder' }
    & { ' $fragmentRefs'?: { 'BlockData__Folder_Fragment': BlockData__Folder_Fragment } }
  ) | (
    { __typename?: '_Image' }
    & { ' $fragmentRefs'?: { 'BlockData__Image_Fragment': BlockData__Image_Fragment } }
  ) | (
    { __typename?: '_Media' }
    & { ' $fragmentRefs'?: { 'BlockData__Media_Fragment': BlockData__Media_Fragment } }
  ) | (
    { __typename?: '_Page' }
    & { ' $fragmentRefs'?: { 'BlockData__Page_Fragment': BlockData__Page_Fragment } }
  ) | (
    { __typename?: '_Section' }
    & { ' $fragmentRefs'?: { 'BlockData__Section_Fragment': BlockData__Section_Fragment } }
  ) | (
    { __typename?: '_Video' }
    & { ' $fragmentRefs'?: { 'BlockData__Video_Fragment': BlockData__Video_Fragment } }
  ) | null> | null } & { ' $fragmentName'?: 'LandingPageDataFragment' };

export type getStandardPageMetaDataQueryVariables = Exact<{
  key: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type getStandardPageMetaDataQuery = { __typename?: 'Query', StandardPage?: { __typename?: 'StandardPageOutput', pages?: Array<{ __typename?: 'StandardPage', StandardPageHeading?: string | null, _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, key?: string | null, version?: string | null, locale?: string | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, key?: string | null, version?: string | null, locale?: string | null } | { __typename?: 'ItemMetadata', displayName?: string | null, key?: string | null, version?: string | null, locale?: string | null } | { __typename?: 'MediaMetadata', displayName?: string | null, key?: string | null, version?: string | null, locale?: string | null } | null, StandardPromoImage?: (
        { __typename?: 'ContentReference' }
        & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
      ) | null, SeoSettings?: { __typename?: 'PageSeoSettingsProperty', MetaTitle?: string | null, MetaDescription?: string | null, GraphType?: string | null, SharingImage?: (
          { __typename?: 'ContentReference' }
          & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
        ) | null } | null } | null> | null } | null };

export type StandardPageDataFragment = { __typename?: 'StandardPage', sptitle?: string | null, spsubtitle?: string | null, spimage?: (
    { __typename?: 'ContentReference' }
    & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
  ) | null, spdescription?: { __typename?: 'RichText', json?: any | null } | null } & { ' $fragmentName'?: 'StandardPageDataFragment' };

export type getStartPageMetaDataQueryVariables = Exact<{
  key: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type getStartPageMetaDataQuery = { __typename?: 'Query', StartPage?: { __typename?: 'StartPageOutput', pages?: Array<{ __typename?: 'StartPage', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, key?: string | null, version?: string | null, locale?: string | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, key?: string | null, version?: string | null, locale?: string | null } | { __typename?: 'ItemMetadata', displayName?: string | null, key?: string | null, version?: string | null, locale?: string | null } | { __typename?: 'MediaMetadata', displayName?: string | null, key?: string | null, version?: string | null, locale?: string | null } | null, SiteImageLogo?: (
        { __typename?: 'ContentReference' }
        & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
      ) | null, SeoSettings?: { __typename?: 'PageSeoSettingsProperty', MetaTitle?: string | null, MetaDescription?: string | null, GraphType?: string | null, SharingImage?: (
          { __typename?: 'ContentReference' }
          & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
        ) | null } | null } | null> | null } | null };

export type StartPageDataFragment = { __typename?: 'StartPage', HomePageHeroContentArea?: Array<(
    { __typename?: 'ArticleListElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ArticleListElement_Fragment': BlockData_ArticleListElement_Fragment } }
  ) | (
    { __typename?: 'BlankExperience' }
    & { ' $fragmentRefs'?: { 'BlockData_BlankExperience_Fragment': BlockData_BlankExperience_Fragment } }
  ) | (
    { __typename?: 'BlankSection' }
    & { ' $fragmentRefs'?: { 'BlockData_BlankSection_Fragment': BlockData_BlankSection_Fragment;'BlankSectionDataFragment': BlankSectionDataFragment } }
  ) | (
    { __typename?: 'BlogListingBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_BlogListingBlock_Fragment': BlockData_BlogListingBlock_Fragment;'BlogListingBlockDataFragment': BlogListingBlockDataFragment } }
  ) | (
    { __typename?: 'BlogPostPage' }
    & { ' $fragmentRefs'?: { 'BlockData_BlogPostPage_Fragment': BlockData_BlogPostPage_Fragment } }
  ) | (
    { __typename?: 'ButtonBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ButtonBlock_Fragment': BlockData_ButtonBlock_Fragment;'ButtonBlockDataFragment': ButtonBlockDataFragment } }
  ) | (
    { __typename?: 'CTAElement' }
    & { ' $fragmentRefs'?: { 'BlockData_CTAElement_Fragment': BlockData_CTAElement_Fragment } }
  ) | (
    { __typename?: 'CardBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_CardBlock_Fragment': BlockData_CardBlock_Fragment;'CardBlockDataFragment': CardBlockDataFragment } }
  ) | (
    { __typename?: 'CarouselBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_CarouselBlock_Fragment': BlockData_CarouselBlock_Fragment;'CarouselBlockDataFragment': CarouselBlockDataFragment } }
  ) | (
    { __typename?: 'ContentRecsBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ContentRecsBlock_Fragment': BlockData_ContentRecsBlock_Fragment;'ContentRecsBlockDataFragment': ContentRecsBlockDataFragment } }
  ) | (
    { __typename?: 'ContentRecsElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ContentRecsElement_Fragment': BlockData_ContentRecsElement_Fragment } }
  ) | (
    { __typename?: 'GenericMedia' }
    & { ' $fragmentRefs'?: { 'BlockData_GenericMedia_Fragment': BlockData_GenericMedia_Fragment } }
  ) | (
    { __typename?: 'HeadingElement' }
    & { ' $fragmentRefs'?: { 'BlockData_HeadingElement_Fragment': BlockData_HeadingElement_Fragment } }
  ) | (
    { __typename?: 'HeroBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HeroBlock_Fragment': BlockData_HeroBlock_Fragment;'HeroBlockDataFragment': HeroBlockDataFragment } }
  ) | (
    { __typename?: 'HomePageHeroBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HomePageHeroBlock_Fragment': BlockData_HomePageHeroBlock_Fragment;'HomePageHeroBlockDataFragment': HomePageHeroBlockDataFragment } }
  ) | (
    { __typename?: 'HtmlBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HtmlBlock_Fragment': BlockData_HtmlBlock_Fragment } }
  ) | (
    { __typename?: 'ImageElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ImageElement_Fragment': BlockData_ImageElement_Fragment } }
  ) | (
    { __typename?: 'ImageMedia' }
    & { ' $fragmentRefs'?: { 'BlockData_ImageMedia_Fragment': BlockData_ImageMedia_Fragment } }
  ) | (
    { __typename?: 'LandingPage' }
    & { ' $fragmentRefs'?: { 'BlockData_LandingPage_Fragment': BlockData_LandingPage_Fragment } }
  ) | (
    { __typename?: 'LayoutContainerBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_LayoutContainerBlock_Fragment': BlockData_LayoutContainerBlock_Fragment;'LayoutContainerBlockDataFragment': LayoutContainerBlockDataFragment } }
  ) | (
    { __typename?: 'MegaMenuGroupBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_MegaMenuGroupBlock_Fragment': BlockData_MegaMenuGroupBlock_Fragment } }
  ) | (
    { __typename?: 'MenuNavigationBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_MenuNavigationBlock_Fragment': BlockData_MenuNavigationBlock_Fragment } }
  ) | (
    { __typename?: 'OdpEmbedBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_OdpEmbedBlock_Fragment': BlockData_OdpEmbedBlock_Fragment;'OdpEmbedBlockDataFragment': OdpEmbedBlockDataFragment } }
  ) | (
    { __typename?: 'PageSeoSettings' }
    & { ' $fragmentRefs'?: { 'BlockData_PageSeoSettings_Fragment': BlockData_PageSeoSettings_Fragment } }
  ) | (
    { __typename?: 'ParagraphElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ParagraphElement_Fragment': BlockData_ParagraphElement_Fragment } }
  ) | (
    { __typename?: 'QuoteBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_QuoteBlock_Fragment': BlockData_QuoteBlock_Fragment;'QuoteBlockDataFragment': QuoteBlockDataFragment } }
  ) | (
    { __typename?: 'StandardPage' }
    & { ' $fragmentRefs'?: { 'BlockData_StandardPage_Fragment': BlockData_StandardPage_Fragment } }
  ) | (
    { __typename?: 'StartPage' }
    & { ' $fragmentRefs'?: { 'BlockData_StartPage_Fragment': BlockData_StartPage_Fragment } }
  ) | (
    { __typename?: 'SysContentFolder' }
    & { ' $fragmentRefs'?: { 'BlockData_SysContentFolder_Fragment': BlockData_SysContentFolder_Fragment } }
  ) | (
    { __typename?: 'TestimonialElement' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialElement_Fragment': BlockData_TestimonialElement_Fragment } }
  ) | (
    { __typename?: 'TextBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TextBlock_Fragment': BlockData_TextBlock_Fragment;'TextBlockDataFragment': TextBlockDataFragment } }
  ) | (
    { __typename?: 'Video' }
    & { ' $fragmentRefs'?: { 'BlockData_Video_Fragment': BlockData_Video_Fragment } }
  ) | (
    { __typename?: 'VideoElement' }
    & { ' $fragmentRefs'?: { 'BlockData_VideoElement_Fragment': BlockData_VideoElement_Fragment } }
  ) | (
    { __typename?: 'VideoMedia' }
    & { ' $fragmentRefs'?: { 'BlockData_VideoMedia_Fragment': BlockData_VideoMedia_Fragment } }
  ) | (
    { __typename?: '_Component' }
    & { ' $fragmentRefs'?: { 'BlockData__Component_Fragment': BlockData__Component_Fragment } }
  ) | (
    { __typename?: '_Content' }
    & { ' $fragmentRefs'?: { 'BlockData__Content_Fragment': BlockData__Content_Fragment } }
  ) | (
    { __typename?: '_Experience' }
    & { ' $fragmentRefs'?: { 'BlockData__Experience_Fragment': BlockData__Experience_Fragment } }
  ) | (
    { __typename?: '_Folder' }
    & { ' $fragmentRefs'?: { 'BlockData__Folder_Fragment': BlockData__Folder_Fragment } }
  ) | (
    { __typename?: '_Image' }
    & { ' $fragmentRefs'?: { 'BlockData__Image_Fragment': BlockData__Image_Fragment } }
  ) | (
    { __typename?: '_Media' }
    & { ' $fragmentRefs'?: { 'BlockData__Media_Fragment': BlockData__Media_Fragment } }
  ) | (
    { __typename?: '_Page' }
    & { ' $fragmentRefs'?: { 'BlockData__Page_Fragment': BlockData__Page_Fragment } }
  ) | (
    { __typename?: '_Section' }
    & { ' $fragmentRefs'?: { 'BlockData__Section_Fragment': BlockData__Section_Fragment } }
  ) | (
    { __typename?: '_Video' }
    & { ' $fragmentRefs'?: { 'BlockData__Video_Fragment': BlockData__Video_Fragment } }
  ) | null> | null, HomePageMainContentArea?: Array<(
    { __typename?: 'ArticleListElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ArticleListElement_Fragment': BlockData_ArticleListElement_Fragment } }
  ) | (
    { __typename?: 'BlankExperience' }
    & { ' $fragmentRefs'?: { 'BlockData_BlankExperience_Fragment': BlockData_BlankExperience_Fragment } }
  ) | (
    { __typename?: 'BlankSection' }
    & { ' $fragmentRefs'?: { 'BlockData_BlankSection_Fragment': BlockData_BlankSection_Fragment;'BlankSectionDataFragment': BlankSectionDataFragment } }
  ) | (
    { __typename?: 'BlogListingBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_BlogListingBlock_Fragment': BlockData_BlogListingBlock_Fragment;'BlogListingBlockDataFragment': BlogListingBlockDataFragment } }
  ) | (
    { __typename?: 'BlogPostPage' }
    & { ' $fragmentRefs'?: { 'BlockData_BlogPostPage_Fragment': BlockData_BlogPostPage_Fragment } }
  ) | (
    { __typename?: 'ButtonBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ButtonBlock_Fragment': BlockData_ButtonBlock_Fragment;'ButtonBlockDataFragment': ButtonBlockDataFragment } }
  ) | (
    { __typename?: 'CTAElement' }
    & { ' $fragmentRefs'?: { 'BlockData_CTAElement_Fragment': BlockData_CTAElement_Fragment } }
  ) | (
    { __typename?: 'CardBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_CardBlock_Fragment': BlockData_CardBlock_Fragment;'CardBlockDataFragment': CardBlockDataFragment } }
  ) | (
    { __typename?: 'CarouselBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_CarouselBlock_Fragment': BlockData_CarouselBlock_Fragment;'CarouselBlockDataFragment': CarouselBlockDataFragment } }
  ) | (
    { __typename?: 'ContentRecsBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_ContentRecsBlock_Fragment': BlockData_ContentRecsBlock_Fragment;'ContentRecsBlockDataFragment': ContentRecsBlockDataFragment } }
  ) | (
    { __typename?: 'ContentRecsElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ContentRecsElement_Fragment': BlockData_ContentRecsElement_Fragment } }
  ) | (
    { __typename?: 'GenericMedia' }
    & { ' $fragmentRefs'?: { 'BlockData_GenericMedia_Fragment': BlockData_GenericMedia_Fragment } }
  ) | (
    { __typename?: 'HeadingElement' }
    & { ' $fragmentRefs'?: { 'BlockData_HeadingElement_Fragment': BlockData_HeadingElement_Fragment } }
  ) | (
    { __typename?: 'HeroBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HeroBlock_Fragment': BlockData_HeroBlock_Fragment;'HeroBlockDataFragment': HeroBlockDataFragment } }
  ) | (
    { __typename?: 'HomePageHeroBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HomePageHeroBlock_Fragment': BlockData_HomePageHeroBlock_Fragment;'HomePageHeroBlockDataFragment': HomePageHeroBlockDataFragment } }
  ) | (
    { __typename?: 'HtmlBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_HtmlBlock_Fragment': BlockData_HtmlBlock_Fragment } }
  ) | (
    { __typename?: 'ImageElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ImageElement_Fragment': BlockData_ImageElement_Fragment } }
  ) | (
    { __typename?: 'ImageMedia' }
    & { ' $fragmentRefs'?: { 'BlockData_ImageMedia_Fragment': BlockData_ImageMedia_Fragment } }
  ) | (
    { __typename?: 'LandingPage' }
    & { ' $fragmentRefs'?: { 'BlockData_LandingPage_Fragment': BlockData_LandingPage_Fragment } }
  ) | (
    { __typename?: 'LayoutContainerBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_LayoutContainerBlock_Fragment': BlockData_LayoutContainerBlock_Fragment;'LayoutContainerBlockDataFragment': LayoutContainerBlockDataFragment } }
  ) | (
    { __typename?: 'MegaMenuGroupBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_MegaMenuGroupBlock_Fragment': BlockData_MegaMenuGroupBlock_Fragment } }
  ) | (
    { __typename?: 'MenuNavigationBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_MenuNavigationBlock_Fragment': BlockData_MenuNavigationBlock_Fragment } }
  ) | (
    { __typename?: 'OdpEmbedBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_OdpEmbedBlock_Fragment': BlockData_OdpEmbedBlock_Fragment;'OdpEmbedBlockDataFragment': OdpEmbedBlockDataFragment } }
  ) | (
    { __typename?: 'PageSeoSettings' }
    & { ' $fragmentRefs'?: { 'BlockData_PageSeoSettings_Fragment': BlockData_PageSeoSettings_Fragment } }
  ) | (
    { __typename?: 'ParagraphElement' }
    & { ' $fragmentRefs'?: { 'BlockData_ParagraphElement_Fragment': BlockData_ParagraphElement_Fragment } }
  ) | (
    { __typename?: 'QuoteBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_QuoteBlock_Fragment': BlockData_QuoteBlock_Fragment;'QuoteBlockDataFragment': QuoteBlockDataFragment } }
  ) | (
    { __typename?: 'StandardPage' }
    & { ' $fragmentRefs'?: { 'BlockData_StandardPage_Fragment': BlockData_StandardPage_Fragment } }
  ) | (
    { __typename?: 'StartPage' }
    & { ' $fragmentRefs'?: { 'BlockData_StartPage_Fragment': BlockData_StartPage_Fragment } }
  ) | (
    { __typename?: 'SysContentFolder' }
    & { ' $fragmentRefs'?: { 'BlockData_SysContentFolder_Fragment': BlockData_SysContentFolder_Fragment } }
  ) | (
    { __typename?: 'TestimonialElement' }
    & { ' $fragmentRefs'?: { 'BlockData_TestimonialElement_Fragment': BlockData_TestimonialElement_Fragment } }
  ) | (
    { __typename?: 'TextBlock' }
    & { ' $fragmentRefs'?: { 'BlockData_TextBlock_Fragment': BlockData_TextBlock_Fragment;'TextBlockDataFragment': TextBlockDataFragment } }
  ) | (
    { __typename?: 'Video' }
    & { ' $fragmentRefs'?: { 'BlockData_Video_Fragment': BlockData_Video_Fragment } }
  ) | (
    { __typename?: 'VideoElement' }
    & { ' $fragmentRefs'?: { 'BlockData_VideoElement_Fragment': BlockData_VideoElement_Fragment } }
  ) | (
    { __typename?: 'VideoMedia' }
    & { ' $fragmentRefs'?: { 'BlockData_VideoMedia_Fragment': BlockData_VideoMedia_Fragment } }
  ) | (
    { __typename?: '_Component' }
    & { ' $fragmentRefs'?: { 'BlockData__Component_Fragment': BlockData__Component_Fragment } }
  ) | (
    { __typename?: '_Content' }
    & { ' $fragmentRefs'?: { 'BlockData__Content_Fragment': BlockData__Content_Fragment } }
  ) | (
    { __typename?: '_Experience' }
    & { ' $fragmentRefs'?: { 'BlockData__Experience_Fragment': BlockData__Experience_Fragment } }
  ) | (
    { __typename?: '_Folder' }
    & { ' $fragmentRefs'?: { 'BlockData__Folder_Fragment': BlockData__Folder_Fragment } }
  ) | (
    { __typename?: '_Image' }
    & { ' $fragmentRefs'?: { 'BlockData__Image_Fragment': BlockData__Image_Fragment } }
  ) | (
    { __typename?: '_Media' }
    & { ' $fragmentRefs'?: { 'BlockData__Media_Fragment': BlockData__Media_Fragment } }
  ) | (
    { __typename?: '_Page' }
    & { ' $fragmentRefs'?: { 'BlockData__Page_Fragment': BlockData__Page_Fragment } }
  ) | (
    { __typename?: '_Section' }
    & { ' $fragmentRefs'?: { 'BlockData__Section_Fragment': BlockData__Section_Fragment } }
  ) | (
    { __typename?: '_Video' }
    & { ' $fragmentRefs'?: { 'BlockData__Video_Fragment': BlockData__Video_Fragment } }
  ) | null> | null } & { ' $fragmentName'?: 'StartPageDataFragment' };

export type StartPageSearchDataFragment = { __typename?: 'StartPage', seodata?: { __typename?: 'PageSeoSettingsProperty', MetaTitle?: string | null, MetaDescription?: string | null, SharingImage?: (
      { __typename?: 'ContentReference' }
      & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
    ) | null } | null } & { ' $fragmentName'?: 'StartPageSearchDataFragment' };

export type BlankSectionDataFragment = { __typename?: 'BlankSection', _metadata?: { __typename?: 'ContentMetadata', key?: string | null } | { __typename?: 'InstanceMetadata', key?: string | null } | { __typename?: 'ItemMetadata', key?: string | null } | { __typename?: 'MediaMetadata', key?: string | null } | null } & { ' $fragmentName'?: 'BlankSectionDataFragment' };

export type getFooterQueryVariables = Exact<{
  locale?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type getFooterQuery = { __typename?: 'Query', menuItems?: { __typename?: 'StartPageOutput', items?: Array<{ __typename?: 'StartPage', footerCopyright?: string | null, footerSubLinks?: Array<(
        { __typename?: 'Link' }
        & { ' $fragmentRefs'?: { 'LinkItemDataFragment': LinkItemDataFragment } }
      ) | null> | null, footerNavigation?: Array<{ __typename: 'ArticleListElement' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'BlogListingBlock' } | { __typename: 'BlogPostPage' } | { __typename: 'ButtonBlock' } | { __typename: 'CTAElement' } | { __typename: 'CardBlock' } | { __typename: 'CarouselBlock' } | { __typename: 'ContentRecsBlock' } | { __typename: 'ContentRecsElement' } | { __typename: 'GenericMedia' } | { __typename: 'HeadingElement' } | { __typename: 'HeroBlock' } | { __typename: 'HomePageHeroBlock' } | (
        { __typename: 'HtmlBlock' }
        & { ' $fragmentRefs'?: { 'HtmlBlockFragment': HtmlBlockFragment } }
      ) | { __typename: 'ImageElement' } | { __typename: 'ImageMedia' } | { __typename: 'LandingPage' } | { __typename: 'LayoutContainerBlock' } | { __typename: 'MegaMenuGroupBlock' } | (
        { __typename: 'MenuNavigationBlock' }
        & { ' $fragmentRefs'?: { 'FooterMenuNavigationItemFragment': FooterMenuNavigationItemFragment } }
      ) | { __typename: 'OdpEmbedBlock' } | { __typename: 'PageSeoSettings' } | { __typename: 'ParagraphElement' } | { __typename: 'QuoteBlock' } | { __typename: 'StandardPage' } | { __typename: 'StartPage' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialElement' } | { __typename: 'TextBlock' } | { __typename: 'Video' } | { __typename: 'VideoElement' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null> | null } | null };

export type HtmlBlockFragment = { __typename: 'HtmlBlock', title?: string | null, content?: { __typename?: 'RichText', json?: any | null, html?: string | null } | null } & { ' $fragmentName'?: 'HtmlBlockFragment' };

export type FooterMenuNavigationItemFragment = { __typename: 'MenuNavigationBlock', title?: string | null, items?: Array<{ __typename?: 'Link', title?: string | null, target?: string | null, text?: string | null, url?: (
      { __typename?: 'ContentUrl' }
      & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
    ) | null } | null> | null } & { ' $fragmentName'?: 'FooterMenuNavigationItemFragment' };

export type getHeaderQueryVariables = Exact<{
  locale?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type getHeaderQuery = { __typename?: 'Query', menuItems?: { __typename?: 'StartPageOutput', items?: Array<{ __typename?: 'StartPage', logo?: (
        { __typename?: 'ContentReference' }
        & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
      ) | null, headerNavigation?: Array<{ __typename?: 'ArticleListElement' } | { __typename?: 'BlankExperience' } | { __typename?: 'BlankSection' } | { __typename?: 'BlogListingBlock' } | { __typename?: 'BlogPostPage' } | { __typename?: 'ButtonBlock' } | { __typename?: 'CTAElement' } | { __typename?: 'CardBlock' } | { __typename?: 'CarouselBlock' } | { __typename?: 'ContentRecsBlock' } | { __typename?: 'ContentRecsElement' } | { __typename?: 'GenericMedia' } | { __typename?: 'HeadingElement' } | { __typename?: 'HeroBlock' } | { __typename?: 'HomePageHeroBlock' } | { __typename?: 'HtmlBlock' } | { __typename?: 'ImageElement' } | { __typename?: 'ImageMedia' } | { __typename?: 'LandingPage' } | { __typename?: 'LayoutContainerBlock' } | (
        { __typename?: 'MegaMenuGroupBlock' }
        & { ' $fragmentRefs'?: { 'MegaMenuItemFragment': MegaMenuItemFragment } }
      ) | { __typename?: 'MenuNavigationBlock' } | { __typename?: 'OdpEmbedBlock' } | { __typename?: 'PageSeoSettings' } | { __typename?: 'ParagraphElement' } | { __typename?: 'QuoteBlock' } | { __typename?: 'StandardPage' } | { __typename?: 'StartPage' } | { __typename?: 'SysContentFolder' } | { __typename?: 'TestimonialElement' } | { __typename?: 'TextBlock' } | { __typename?: 'Video' } | { __typename?: 'VideoElement' } | { __typename?: 'VideoMedia' } | { __typename?: '_Component' } | { __typename?: '_Content' } | { __typename?: '_Experience' } | { __typename?: '_Folder' } | { __typename?: '_Image' } | { __typename?: '_Media' } | { __typename?: '_Page' } | { __typename?: '_Section' } | { __typename?: '_Video' } | null> | null, UtilityNavigationContentArea?: Array<(
        { __typename?: 'ArticleListElement' }
        & { ' $fragmentRefs'?: { 'MenuItem_ArticleListElement_Fragment': MenuItem_ArticleListElement_Fragment } }
      ) | (
        { __typename?: 'BlankExperience' }
        & { ' $fragmentRefs'?: { 'MenuItem_BlankExperience_Fragment': MenuItem_BlankExperience_Fragment } }
      ) | (
        { __typename?: 'BlankSection' }
        & { ' $fragmentRefs'?: { 'MenuItem_BlankSection_Fragment': MenuItem_BlankSection_Fragment } }
      ) | (
        { __typename?: 'BlogListingBlock' }
        & { ' $fragmentRefs'?: { 'MenuItem_BlogListingBlock_Fragment': MenuItem_BlogListingBlock_Fragment } }
      ) | (
        { __typename?: 'BlogPostPage' }
        & { ' $fragmentRefs'?: { 'MenuItem_BlogPostPage_Fragment': MenuItem_BlogPostPage_Fragment } }
      ) | (
        { __typename?: 'ButtonBlock' }
        & { ' $fragmentRefs'?: { 'MenuItem_ButtonBlock_Fragment': MenuItem_ButtonBlock_Fragment } }
      ) | (
        { __typename?: 'CTAElement' }
        & { ' $fragmentRefs'?: { 'MenuItem_CTAElement_Fragment': MenuItem_CTAElement_Fragment } }
      ) | (
        { __typename?: 'CardBlock' }
        & { ' $fragmentRefs'?: { 'MenuItem_CardBlock_Fragment': MenuItem_CardBlock_Fragment } }
      ) | (
        { __typename?: 'CarouselBlock' }
        & { ' $fragmentRefs'?: { 'MenuItem_CarouselBlock_Fragment': MenuItem_CarouselBlock_Fragment } }
      ) | (
        { __typename?: 'ContentRecsBlock' }
        & { ' $fragmentRefs'?: { 'MenuItem_ContentRecsBlock_Fragment': MenuItem_ContentRecsBlock_Fragment } }
      ) | (
        { __typename?: 'ContentRecsElement' }
        & { ' $fragmentRefs'?: { 'MenuItem_ContentRecsElement_Fragment': MenuItem_ContentRecsElement_Fragment } }
      ) | (
        { __typename?: 'GenericMedia' }
        & { ' $fragmentRefs'?: { 'MenuItem_GenericMedia_Fragment': MenuItem_GenericMedia_Fragment } }
      ) | (
        { __typename?: 'HeadingElement' }
        & { ' $fragmentRefs'?: { 'MenuItem_HeadingElement_Fragment': MenuItem_HeadingElement_Fragment } }
      ) | (
        { __typename?: 'HeroBlock' }
        & { ' $fragmentRefs'?: { 'MenuItem_HeroBlock_Fragment': MenuItem_HeroBlock_Fragment } }
      ) | (
        { __typename?: 'HomePageHeroBlock' }
        & { ' $fragmentRefs'?: { 'MenuItem_HomePageHeroBlock_Fragment': MenuItem_HomePageHeroBlock_Fragment } }
      ) | (
        { __typename?: 'HtmlBlock' }
        & { ' $fragmentRefs'?: { 'MenuItem_HtmlBlock_Fragment': MenuItem_HtmlBlock_Fragment } }
      ) | (
        { __typename?: 'ImageElement' }
        & { ' $fragmentRefs'?: { 'MenuItem_ImageElement_Fragment': MenuItem_ImageElement_Fragment } }
      ) | (
        { __typename?: 'ImageMedia' }
        & { ' $fragmentRefs'?: { 'MenuItem_ImageMedia_Fragment': MenuItem_ImageMedia_Fragment } }
      ) | (
        { __typename?: 'LandingPage' }
        & { ' $fragmentRefs'?: { 'MenuItem_LandingPage_Fragment': MenuItem_LandingPage_Fragment } }
      ) | (
        { __typename?: 'LayoutContainerBlock' }
        & { ' $fragmentRefs'?: { 'MenuItem_LayoutContainerBlock_Fragment': MenuItem_LayoutContainerBlock_Fragment } }
      ) | (
        { __typename?: 'MegaMenuGroupBlock' }
        & { ' $fragmentRefs'?: { 'MenuItem_MegaMenuGroupBlock_Fragment': MenuItem_MegaMenuGroupBlock_Fragment } }
      ) | (
        { __typename?: 'MenuNavigationBlock' }
        & { ' $fragmentRefs'?: { 'MenuItem_MenuNavigationBlock_Fragment': MenuItem_MenuNavigationBlock_Fragment } }
      ) | (
        { __typename?: 'OdpEmbedBlock' }
        & { ' $fragmentRefs'?: { 'MenuItem_OdpEmbedBlock_Fragment': MenuItem_OdpEmbedBlock_Fragment } }
      ) | (
        { __typename?: 'PageSeoSettings' }
        & { ' $fragmentRefs'?: { 'MenuItem_PageSeoSettings_Fragment': MenuItem_PageSeoSettings_Fragment } }
      ) | (
        { __typename?: 'ParagraphElement' }
        & { ' $fragmentRefs'?: { 'MenuItem_ParagraphElement_Fragment': MenuItem_ParagraphElement_Fragment } }
      ) | (
        { __typename?: 'QuoteBlock' }
        & { ' $fragmentRefs'?: { 'MenuItem_QuoteBlock_Fragment': MenuItem_QuoteBlock_Fragment } }
      ) | (
        { __typename?: 'StandardPage' }
        & { ' $fragmentRefs'?: { 'MenuItem_StandardPage_Fragment': MenuItem_StandardPage_Fragment } }
      ) | (
        { __typename?: 'StartPage' }
        & { ' $fragmentRefs'?: { 'MenuItem_StartPage_Fragment': MenuItem_StartPage_Fragment } }
      ) | (
        { __typename?: 'SysContentFolder' }
        & { ' $fragmentRefs'?: { 'MenuItem_SysContentFolder_Fragment': MenuItem_SysContentFolder_Fragment } }
      ) | (
        { __typename?: 'TestimonialElement' }
        & { ' $fragmentRefs'?: { 'MenuItem_TestimonialElement_Fragment': MenuItem_TestimonialElement_Fragment } }
      ) | (
        { __typename?: 'TextBlock' }
        & { ' $fragmentRefs'?: { 'MenuItem_TextBlock_Fragment': MenuItem_TextBlock_Fragment } }
      ) | (
        { __typename?: 'Video' }
        & { ' $fragmentRefs'?: { 'MenuItem_Video_Fragment': MenuItem_Video_Fragment } }
      ) | (
        { __typename?: 'VideoElement' }
        & { ' $fragmentRefs'?: { 'MenuItem_VideoElement_Fragment': MenuItem_VideoElement_Fragment } }
      ) | (
        { __typename?: 'VideoMedia' }
        & { ' $fragmentRefs'?: { 'MenuItem_VideoMedia_Fragment': MenuItem_VideoMedia_Fragment } }
      ) | (
        { __typename?: '_Component' }
        & { ' $fragmentRefs'?: { 'MenuItem__Component_Fragment': MenuItem__Component_Fragment } }
      ) | (
        { __typename?: '_Content' }
        & { ' $fragmentRefs'?: { 'MenuItem__Content_Fragment': MenuItem__Content_Fragment } }
      ) | (
        { __typename?: '_Experience' }
        & { ' $fragmentRefs'?: { 'MenuItem__Experience_Fragment': MenuItem__Experience_Fragment } }
      ) | (
        { __typename?: '_Folder' }
        & { ' $fragmentRefs'?: { 'MenuItem__Folder_Fragment': MenuItem__Folder_Fragment } }
      ) | (
        { __typename?: '_Image' }
        & { ' $fragmentRefs'?: { 'MenuItem__Image_Fragment': MenuItem__Image_Fragment } }
      ) | (
        { __typename?: '_Media' }
        & { ' $fragmentRefs'?: { 'MenuItem__Media_Fragment': MenuItem__Media_Fragment } }
      ) | (
        { __typename?: '_Page' }
        & { ' $fragmentRefs'?: { 'MenuItem__Page_Fragment': MenuItem__Page_Fragment } }
      ) | (
        { __typename?: '_Section' }
        & { ' $fragmentRefs'?: { 'MenuItem__Section_Fragment': MenuItem__Section_Fragment } }
      ) | (
        { __typename?: '_Video' }
        & { ' $fragmentRefs'?: { 'MenuItem__Video_Fragment': MenuItem__Video_Fragment } }
      ) | null> | null } | null> | null } | null };

export type MegaMenuItemFragment = { __typename?: 'MegaMenuGroupBlock', menuName?: string | null, menuData?: Array<(
    { __typename?: 'ArticleListElement' }
    & { ' $fragmentRefs'?: { 'MenuItem_ArticleListElement_Fragment': MenuItem_ArticleListElement_Fragment } }
  ) | (
    { __typename?: 'BlankExperience' }
    & { ' $fragmentRefs'?: { 'MenuItem_BlankExperience_Fragment': MenuItem_BlankExperience_Fragment } }
  ) | (
    { __typename?: 'BlankSection' }
    & { ' $fragmentRefs'?: { 'MenuItem_BlankSection_Fragment': MenuItem_BlankSection_Fragment } }
  ) | (
    { __typename?: 'BlogListingBlock' }
    & { ' $fragmentRefs'?: { 'MenuItem_BlogListingBlock_Fragment': MenuItem_BlogListingBlock_Fragment } }
  ) | (
    { __typename?: 'BlogPostPage' }
    & { ' $fragmentRefs'?: { 'MenuItem_BlogPostPage_Fragment': MenuItem_BlogPostPage_Fragment } }
  ) | (
    { __typename?: 'ButtonBlock' }
    & { ' $fragmentRefs'?: { 'MenuItem_ButtonBlock_Fragment': MenuItem_ButtonBlock_Fragment } }
  ) | (
    { __typename?: 'CTAElement' }
    & { ' $fragmentRefs'?: { 'MenuItem_CTAElement_Fragment': MenuItem_CTAElement_Fragment } }
  ) | (
    { __typename?: 'CardBlock' }
    & { ' $fragmentRefs'?: { 'MenuItem_CardBlock_Fragment': MenuItem_CardBlock_Fragment } }
  ) | (
    { __typename?: 'CarouselBlock' }
    & { ' $fragmentRefs'?: { 'MenuItem_CarouselBlock_Fragment': MenuItem_CarouselBlock_Fragment } }
  ) | (
    { __typename?: 'ContentRecsBlock' }
    & { ' $fragmentRefs'?: { 'MenuItem_ContentRecsBlock_Fragment': MenuItem_ContentRecsBlock_Fragment } }
  ) | (
    { __typename?: 'ContentRecsElement' }
    & { ' $fragmentRefs'?: { 'MenuItem_ContentRecsElement_Fragment': MenuItem_ContentRecsElement_Fragment } }
  ) | (
    { __typename?: 'GenericMedia' }
    & { ' $fragmentRefs'?: { 'MenuItem_GenericMedia_Fragment': MenuItem_GenericMedia_Fragment } }
  ) | (
    { __typename?: 'HeadingElement' }
    & { ' $fragmentRefs'?: { 'MenuItem_HeadingElement_Fragment': MenuItem_HeadingElement_Fragment } }
  ) | (
    { __typename?: 'HeroBlock' }
    & { ' $fragmentRefs'?: { 'MenuItem_HeroBlock_Fragment': MenuItem_HeroBlock_Fragment } }
  ) | (
    { __typename?: 'HomePageHeroBlock' }
    & { ' $fragmentRefs'?: { 'MenuItem_HomePageHeroBlock_Fragment': MenuItem_HomePageHeroBlock_Fragment } }
  ) | (
    { __typename?: 'HtmlBlock' }
    & { ' $fragmentRefs'?: { 'MenuItem_HtmlBlock_Fragment': MenuItem_HtmlBlock_Fragment } }
  ) | (
    { __typename?: 'ImageElement' }
    & { ' $fragmentRefs'?: { 'MenuItem_ImageElement_Fragment': MenuItem_ImageElement_Fragment } }
  ) | (
    { __typename?: 'ImageMedia' }
    & { ' $fragmentRefs'?: { 'MenuItem_ImageMedia_Fragment': MenuItem_ImageMedia_Fragment } }
  ) | (
    { __typename?: 'LandingPage' }
    & { ' $fragmentRefs'?: { 'MenuItem_LandingPage_Fragment': MenuItem_LandingPage_Fragment } }
  ) | (
    { __typename?: 'LayoutContainerBlock' }
    & { ' $fragmentRefs'?: { 'MenuItem_LayoutContainerBlock_Fragment': MenuItem_LayoutContainerBlock_Fragment } }
  ) | (
    { __typename?: 'MegaMenuGroupBlock' }
    & { ' $fragmentRefs'?: { 'MenuItem_MegaMenuGroupBlock_Fragment': MenuItem_MegaMenuGroupBlock_Fragment } }
  ) | (
    { __typename?: 'MenuNavigationBlock' }
    & { ' $fragmentRefs'?: { 'MenuItem_MenuNavigationBlock_Fragment': MenuItem_MenuNavigationBlock_Fragment } }
  ) | (
    { __typename?: 'OdpEmbedBlock' }
    & { ' $fragmentRefs'?: { 'MenuItem_OdpEmbedBlock_Fragment': MenuItem_OdpEmbedBlock_Fragment } }
  ) | (
    { __typename?: 'PageSeoSettings' }
    & { ' $fragmentRefs'?: { 'MenuItem_PageSeoSettings_Fragment': MenuItem_PageSeoSettings_Fragment } }
  ) | (
    { __typename?: 'ParagraphElement' }
    & { ' $fragmentRefs'?: { 'MenuItem_ParagraphElement_Fragment': MenuItem_ParagraphElement_Fragment } }
  ) | (
    { __typename?: 'QuoteBlock' }
    & { ' $fragmentRefs'?: { 'MenuItem_QuoteBlock_Fragment': MenuItem_QuoteBlock_Fragment } }
  ) | (
    { __typename?: 'StandardPage' }
    & { ' $fragmentRefs'?: { 'MenuItem_StandardPage_Fragment': MenuItem_StandardPage_Fragment } }
  ) | (
    { __typename?: 'StartPage' }
    & { ' $fragmentRefs'?: { 'MenuItem_StartPage_Fragment': MenuItem_StartPage_Fragment } }
  ) | (
    { __typename?: 'SysContentFolder' }
    & { ' $fragmentRefs'?: { 'MenuItem_SysContentFolder_Fragment': MenuItem_SysContentFolder_Fragment } }
  ) | (
    { __typename?: 'TestimonialElement' }
    & { ' $fragmentRefs'?: { 'MenuItem_TestimonialElement_Fragment': MenuItem_TestimonialElement_Fragment } }
  ) | (
    { __typename?: 'TextBlock' }
    & { ' $fragmentRefs'?: { 'MenuItem_TextBlock_Fragment': MenuItem_TextBlock_Fragment } }
  ) | (
    { __typename?: 'Video' }
    & { ' $fragmentRefs'?: { 'MenuItem_Video_Fragment': MenuItem_Video_Fragment } }
  ) | (
    { __typename?: 'VideoElement' }
    & { ' $fragmentRefs'?: { 'MenuItem_VideoElement_Fragment': MenuItem_VideoElement_Fragment } }
  ) | (
    { __typename?: 'VideoMedia' }
    & { ' $fragmentRefs'?: { 'MenuItem_VideoMedia_Fragment': MenuItem_VideoMedia_Fragment } }
  ) | (
    { __typename?: '_Component' }
    & { ' $fragmentRefs'?: { 'MenuItem__Component_Fragment': MenuItem__Component_Fragment } }
  ) | (
    { __typename?: '_Content' }
    & { ' $fragmentRefs'?: { 'MenuItem__Content_Fragment': MenuItem__Content_Fragment } }
  ) | (
    { __typename?: '_Experience' }
    & { ' $fragmentRefs'?: { 'MenuItem__Experience_Fragment': MenuItem__Experience_Fragment } }
  ) | (
    { __typename?: '_Folder' }
    & { ' $fragmentRefs'?: { 'MenuItem__Folder_Fragment': MenuItem__Folder_Fragment } }
  ) | (
    { __typename?: '_Image' }
    & { ' $fragmentRefs'?: { 'MenuItem__Image_Fragment': MenuItem__Image_Fragment } }
  ) | (
    { __typename?: '_Media' }
    & { ' $fragmentRefs'?: { 'MenuItem__Media_Fragment': MenuItem__Media_Fragment } }
  ) | (
    { __typename?: '_Page' }
    & { ' $fragmentRefs'?: { 'MenuItem__Page_Fragment': MenuItem__Page_Fragment } }
  ) | (
    { __typename?: '_Section' }
    & { ' $fragmentRefs'?: { 'MenuItem__Section_Fragment': MenuItem__Section_Fragment } }
  ) | (
    { __typename?: '_Video' }
    & { ' $fragmentRefs'?: { 'MenuItem__Video_Fragment': MenuItem__Video_Fragment } }
  ) | null> | null } & { ' $fragmentName'?: 'MegaMenuItemFragment' };

type MenuItem_ArticleListElement_Fragment = { __typename: 'ArticleListElement' } & { ' $fragmentName'?: 'MenuItem_ArticleListElement_Fragment' };

type MenuItem_BlankExperience_Fragment = { __typename: 'BlankExperience' } & { ' $fragmentName'?: 'MenuItem_BlankExperience_Fragment' };

type MenuItem_BlankSection_Fragment = { __typename: 'BlankSection' } & { ' $fragmentName'?: 'MenuItem_BlankSection_Fragment' };

type MenuItem_BlogListingBlock_Fragment = { __typename: 'BlogListingBlock' } & { ' $fragmentName'?: 'MenuItem_BlogListingBlock_Fragment' };

type MenuItem_BlogPostPage_Fragment = { __typename: 'BlogPostPage' } & { ' $fragmentName'?: 'MenuItem_BlogPostPage_Fragment' };

type MenuItem_ButtonBlock_Fragment = (
  { __typename: 'ButtonBlock' }
  & { ' $fragmentRefs'?: { 'MenuButtonFragment': MenuButtonFragment } }
) & { ' $fragmentName'?: 'MenuItem_ButtonBlock_Fragment' };

type MenuItem_CTAElement_Fragment = { __typename: 'CTAElement' } & { ' $fragmentName'?: 'MenuItem_CTAElement_Fragment' };

type MenuItem_CardBlock_Fragment = (
  { __typename: 'CardBlock' }
  & { ' $fragmentRefs'?: { 'MenuCardItemFragment': MenuCardItemFragment } }
) & { ' $fragmentName'?: 'MenuItem_CardBlock_Fragment' };

type MenuItem_CarouselBlock_Fragment = { __typename: 'CarouselBlock' } & { ' $fragmentName'?: 'MenuItem_CarouselBlock_Fragment' };

type MenuItem_ContentRecsBlock_Fragment = { __typename: 'ContentRecsBlock' } & { ' $fragmentName'?: 'MenuItem_ContentRecsBlock_Fragment' };

type MenuItem_ContentRecsElement_Fragment = { __typename: 'ContentRecsElement' } & { ' $fragmentName'?: 'MenuItem_ContentRecsElement_Fragment' };

type MenuItem_GenericMedia_Fragment = { __typename: 'GenericMedia' } & { ' $fragmentName'?: 'MenuItem_GenericMedia_Fragment' };

type MenuItem_HeadingElement_Fragment = { __typename: 'HeadingElement' } & { ' $fragmentName'?: 'MenuItem_HeadingElement_Fragment' };

type MenuItem_HeroBlock_Fragment = { __typename: 'HeroBlock' } & { ' $fragmentName'?: 'MenuItem_HeroBlock_Fragment' };

type MenuItem_HomePageHeroBlock_Fragment = { __typename: 'HomePageHeroBlock' } & { ' $fragmentName'?: 'MenuItem_HomePageHeroBlock_Fragment' };

type MenuItem_HtmlBlock_Fragment = { __typename: 'HtmlBlock' } & { ' $fragmentName'?: 'MenuItem_HtmlBlock_Fragment' };

type MenuItem_ImageElement_Fragment = { __typename: 'ImageElement' } & { ' $fragmentName'?: 'MenuItem_ImageElement_Fragment' };

type MenuItem_ImageMedia_Fragment = { __typename: 'ImageMedia' } & { ' $fragmentName'?: 'MenuItem_ImageMedia_Fragment' };

type MenuItem_LandingPage_Fragment = { __typename: 'LandingPage' } & { ' $fragmentName'?: 'MenuItem_LandingPage_Fragment' };

type MenuItem_LayoutContainerBlock_Fragment = { __typename: 'LayoutContainerBlock' } & { ' $fragmentName'?: 'MenuItem_LayoutContainerBlock_Fragment' };

type MenuItem_MegaMenuGroupBlock_Fragment = { __typename: 'MegaMenuGroupBlock' } & { ' $fragmentName'?: 'MenuItem_MegaMenuGroupBlock_Fragment' };

type MenuItem_MenuNavigationBlock_Fragment = (
  { __typename: 'MenuNavigationBlock' }
  & { ' $fragmentRefs'?: { 'MenuNavigationItemFragment': MenuNavigationItemFragment } }
) & { ' $fragmentName'?: 'MenuItem_MenuNavigationBlock_Fragment' };

type MenuItem_OdpEmbedBlock_Fragment = { __typename: 'OdpEmbedBlock' } & { ' $fragmentName'?: 'MenuItem_OdpEmbedBlock_Fragment' };

type MenuItem_PageSeoSettings_Fragment = { __typename: 'PageSeoSettings' } & { ' $fragmentName'?: 'MenuItem_PageSeoSettings_Fragment' };

type MenuItem_ParagraphElement_Fragment = { __typename: 'ParagraphElement' } & { ' $fragmentName'?: 'MenuItem_ParagraphElement_Fragment' };

type MenuItem_QuoteBlock_Fragment = { __typename: 'QuoteBlock' } & { ' $fragmentName'?: 'MenuItem_QuoteBlock_Fragment' };

type MenuItem_StandardPage_Fragment = { __typename: 'StandardPage' } & { ' $fragmentName'?: 'MenuItem_StandardPage_Fragment' };

type MenuItem_StartPage_Fragment = { __typename: 'StartPage' } & { ' $fragmentName'?: 'MenuItem_StartPage_Fragment' };

type MenuItem_SysContentFolder_Fragment = { __typename: 'SysContentFolder' } & { ' $fragmentName'?: 'MenuItem_SysContentFolder_Fragment' };

type MenuItem_TestimonialElement_Fragment = { __typename: 'TestimonialElement' } & { ' $fragmentName'?: 'MenuItem_TestimonialElement_Fragment' };

type MenuItem_TextBlock_Fragment = { __typename: 'TextBlock' } & { ' $fragmentName'?: 'MenuItem_TextBlock_Fragment' };

type MenuItem_Video_Fragment = { __typename: 'Video' } & { ' $fragmentName'?: 'MenuItem_Video_Fragment' };

type MenuItem_VideoElement_Fragment = { __typename: 'VideoElement' } & { ' $fragmentName'?: 'MenuItem_VideoElement_Fragment' };

type MenuItem_VideoMedia_Fragment = { __typename: 'VideoMedia' } & { ' $fragmentName'?: 'MenuItem_VideoMedia_Fragment' };

type MenuItem__Component_Fragment = { __typename: '_Component' } & { ' $fragmentName'?: 'MenuItem__Component_Fragment' };

type MenuItem__Content_Fragment = { __typename: '_Content' } & { ' $fragmentName'?: 'MenuItem__Content_Fragment' };

type MenuItem__Experience_Fragment = { __typename: '_Experience' } & { ' $fragmentName'?: 'MenuItem__Experience_Fragment' };

type MenuItem__Folder_Fragment = { __typename: '_Folder' } & { ' $fragmentName'?: 'MenuItem__Folder_Fragment' };

type MenuItem__Image_Fragment = { __typename: '_Image' } & { ' $fragmentName'?: 'MenuItem__Image_Fragment' };

type MenuItem__Media_Fragment = { __typename: '_Media' } & { ' $fragmentName'?: 'MenuItem__Media_Fragment' };

type MenuItem__Page_Fragment = { __typename: '_Page' } & { ' $fragmentName'?: 'MenuItem__Page_Fragment' };

type MenuItem__Section_Fragment = { __typename: '_Section' } & { ' $fragmentName'?: 'MenuItem__Section_Fragment' };

type MenuItem__Video_Fragment = { __typename: '_Video' } & { ' $fragmentName'?: 'MenuItem__Video_Fragment' };

export type MenuItemFragment = MenuItem_ArticleListElement_Fragment | MenuItem_BlankExperience_Fragment | MenuItem_BlankSection_Fragment | MenuItem_BlogListingBlock_Fragment | MenuItem_BlogPostPage_Fragment | MenuItem_ButtonBlock_Fragment | MenuItem_CTAElement_Fragment | MenuItem_CardBlock_Fragment | MenuItem_CarouselBlock_Fragment | MenuItem_ContentRecsBlock_Fragment | MenuItem_ContentRecsElement_Fragment | MenuItem_GenericMedia_Fragment | MenuItem_HeadingElement_Fragment | MenuItem_HeroBlock_Fragment | MenuItem_HomePageHeroBlock_Fragment | MenuItem_HtmlBlock_Fragment | MenuItem_ImageElement_Fragment | MenuItem_ImageMedia_Fragment | MenuItem_LandingPage_Fragment | MenuItem_LayoutContainerBlock_Fragment | MenuItem_MegaMenuGroupBlock_Fragment | MenuItem_MenuNavigationBlock_Fragment | MenuItem_OdpEmbedBlock_Fragment | MenuItem_PageSeoSettings_Fragment | MenuItem_ParagraphElement_Fragment | MenuItem_QuoteBlock_Fragment | MenuItem_StandardPage_Fragment | MenuItem_StartPage_Fragment | MenuItem_SysContentFolder_Fragment | MenuItem_TestimonialElement_Fragment | MenuItem_TextBlock_Fragment | MenuItem_Video_Fragment | MenuItem_VideoElement_Fragment | MenuItem_VideoMedia_Fragment | MenuItem__Component_Fragment | MenuItem__Content_Fragment | MenuItem__Experience_Fragment | MenuItem__Folder_Fragment | MenuItem__Image_Fragment | MenuItem__Media_Fragment | MenuItem__Page_Fragment | MenuItem__Section_Fragment | MenuItem__Video_Fragment;

export type MenuButtonFragment = { __typename: 'ButtonBlock', text?: string | null, type?: string | null, variant?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'MenuButtonFragment' };

export type MenuNavigationItemFragment = { __typename: 'MenuNavigationBlock', title?: string | null, items?: Array<(
    { __typename?: 'Link' }
    & { ' $fragmentRefs'?: { 'LinkItemDataFragment': LinkItemDataFragment } }
  ) | null> | null } & { ' $fragmentName'?: 'MenuNavigationItemFragment' };

export type MenuCardItemFragment = { __typename: 'CardBlock', heading?: string | null, subheading?: string | null, color?: string | null, description?: { __typename?: 'RichText', json?: any | null } | null, image?: { __typename?: 'ContentReference', src?: (
      { __typename?: 'ContentUrl' }
      & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
    ) | null } | null, link?: { __typename?: 'ButtonBlockProperty', title?: string | null, url?: (
      { __typename?: 'ContentUrl' }
      & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
    ) | null } | null } & { ' $fragmentName'?: 'MenuCardItemFragment' };

export type LinkItemDataFragment = { __typename?: 'Link', title?: string | null, text?: string | null, target?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'LinkItemDataFragment' };

export type getArticlesQueryVariables = Exact<{
  pageSize?: Scalars['Int']['input'];
  start?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  author?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Date']['input']>;
  publishedEnd?: InputMaybe<Scalars['Date']['input']>;
}>;


export type getArticlesQuery = { __typename?: 'Query', getArticles?: { __typename?: 'BlogPostPageOutput', total?: number | null, items?: Array<(
      { __typename?: 'BlogPostPage', title?: string | null, author?: string | null, _metadata?: { __typename?: 'ContentMetadata', status?: string | null, published?: any | null } | { __typename?: 'InstanceMetadata', status?: string | null, published?: any | null } | { __typename?: 'ItemMetadata', status?: string | null, published?: any | null } | { __typename?: 'MediaMetadata', status?: string | null, published?: any | null } | null, description?: { __typename?: 'PageSeoSettingsProperty', text?: string | null } | null, image?: (
        { __typename?: 'ContentReference' }
        & { ' $fragmentRefs'?: { 'ReferenceDataFragment': ReferenceDataFragment } }
      ) | null }
      & { ' $fragmentRefs'?: { 'IContentData_BlogPostPage_Fragment': IContentData_BlogPostPage_Fragment } }
    ) | null> | null, facets?: { __typename?: 'BlogPostPageFacet', author?: Array<{ __typename?: 'StringFacet', count?: number | null, name?: string | null } | null> | null, _metadata?: { __typename?: 'IContentMetadataFacet', published?: Array<{ __typename?: 'DateFacet', count?: number | null, name?: string | null } | null> | null } | null } | null } | null };

export type searchContentQueryVariables = Exact<{
  term: Scalars['String']['input'];
  topInterest?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  withinLocale?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  types?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  pageSize?: Scalars['Int']['input'];
  start?: Scalars['Int']['input'];
}>;


export type searchContentQuery = { __typename?: 'Query', Content?: { __typename?: '_ContentOutput', total?: number | null, items?: Array<(
      { __typename?: 'ArticleListElement', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_ArticleListElement_Fragment': SearchData_ArticleListElement_Fragment } }
    ) | (
      { __typename?: 'BlankExperience', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_BlankExperience_Fragment': SearchData_BlankExperience_Fragment } }
    ) | (
      { __typename?: 'BlankSection', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_BlankSection_Fragment': SearchData_BlankSection_Fragment } }
    ) | (
      { __typename?: 'BlogListingBlock', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_BlogListingBlock_Fragment': SearchData_BlogListingBlock_Fragment } }
    ) | (
      { __typename?: 'BlogPostPage', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_BlogPostPage_Fragment': SearchData_BlogPostPage_Fragment;'BlogPostPageSearchResultFragment': BlogPostPageSearchResultFragment } }
    ) | (
      { __typename?: 'ButtonBlock', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_ButtonBlock_Fragment': SearchData_ButtonBlock_Fragment } }
    ) | (
      { __typename?: 'CTAElement', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_CTAElement_Fragment': SearchData_CTAElement_Fragment } }
    ) | (
      { __typename?: 'CardBlock', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_CardBlock_Fragment': SearchData_CardBlock_Fragment } }
    ) | (
      { __typename?: 'CarouselBlock', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_CarouselBlock_Fragment': SearchData_CarouselBlock_Fragment } }
    ) | (
      { __typename?: 'ContentRecsBlock', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_ContentRecsBlock_Fragment': SearchData_ContentRecsBlock_Fragment } }
    ) | (
      { __typename?: 'ContentRecsElement', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_ContentRecsElement_Fragment': SearchData_ContentRecsElement_Fragment } }
    ) | (
      { __typename?: 'GenericMedia', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_GenericMedia_Fragment': SearchData_GenericMedia_Fragment } }
    ) | (
      { __typename?: 'HeadingElement', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_HeadingElement_Fragment': SearchData_HeadingElement_Fragment } }
    ) | (
      { __typename?: 'HeroBlock', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_HeroBlock_Fragment': SearchData_HeroBlock_Fragment } }
    ) | (
      { __typename?: 'HomePageHeroBlock', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_HomePageHeroBlock_Fragment': SearchData_HomePageHeroBlock_Fragment } }
    ) | (
      { __typename?: 'HtmlBlock', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_HtmlBlock_Fragment': SearchData_HtmlBlock_Fragment } }
    ) | (
      { __typename?: 'ImageElement', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_ImageElement_Fragment': SearchData_ImageElement_Fragment } }
    ) | (
      { __typename?: 'ImageMedia', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_ImageMedia_Fragment': SearchData_ImageMedia_Fragment } }
    ) | (
      { __typename?: 'LandingPage', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_LandingPage_Fragment': SearchData_LandingPage_Fragment } }
    ) | (
      { __typename?: 'LayoutContainerBlock', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_LayoutContainerBlock_Fragment': SearchData_LayoutContainerBlock_Fragment } }
    ) | (
      { __typename?: 'MegaMenuGroupBlock', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_MegaMenuGroupBlock_Fragment': SearchData_MegaMenuGroupBlock_Fragment } }
    ) | (
      { __typename?: 'MenuNavigationBlock', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_MenuNavigationBlock_Fragment': SearchData_MenuNavigationBlock_Fragment } }
    ) | (
      { __typename?: 'OdpEmbedBlock', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_OdpEmbedBlock_Fragment': SearchData_OdpEmbedBlock_Fragment } }
    ) | (
      { __typename?: 'PageSeoSettings', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_PageSeoSettings_Fragment': SearchData_PageSeoSettings_Fragment } }
    ) | (
      { __typename?: 'ParagraphElement', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_ParagraphElement_Fragment': SearchData_ParagraphElement_Fragment } }
    ) | (
      { __typename?: 'QuoteBlock', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_QuoteBlock_Fragment': SearchData_QuoteBlock_Fragment } }
    ) | (
      { __typename?: 'StandardPage', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_StandardPage_Fragment': SearchData_StandardPage_Fragment } }
    ) | (
      { __typename?: 'StartPage', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_StartPage_Fragment': SearchData_StartPage_Fragment;'StartPageSearchDataFragment': StartPageSearchDataFragment } }
    ) | (
      { __typename?: 'SysContentFolder', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_SysContentFolder_Fragment': SearchData_SysContentFolder_Fragment } }
    ) | (
      { __typename?: 'TestimonialElement', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_TestimonialElement_Fragment': SearchData_TestimonialElement_Fragment } }
    ) | (
      { __typename?: 'TextBlock', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_TextBlock_Fragment': SearchData_TextBlock_Fragment } }
    ) | (
      { __typename?: 'Video', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_Video_Fragment': SearchData_Video_Fragment } }
    ) | (
      { __typename?: 'VideoElement', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_VideoElement_Fragment': SearchData_VideoElement_Fragment } }
    ) | (
      { __typename?: 'VideoMedia', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData_VideoMedia_Fragment': SearchData_VideoMedia_Fragment } }
    ) | (
      { __typename?: '_Component', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData__Component_Fragment': SearchData__Component_Fragment } }
    ) | (
      { __typename?: '_Content', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData__Content_Fragment': SearchData__Content_Fragment } }
    ) | (
      { __typename?: '_Experience', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData__Experience_Fragment': SearchData__Experience_Fragment } }
    ) | (
      { __typename?: '_Folder', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData__Folder_Fragment': SearchData__Folder_Fragment } }
    ) | (
      { __typename?: '_Image', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData__Image_Fragment': SearchData__Image_Fragment } }
    ) | (
      { __typename?: '_Media', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData__Media_Fragment': SearchData__Media_Fragment } }
    ) | (
      { __typename?: '_Page', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData__Page_Fragment': SearchData__Page_Fragment } }
    ) | (
      { __typename?: '_Section', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData__Section_Fragment': SearchData__Section_Fragment } }
    ) | (
      { __typename?: '_Video', _score?: number | null, preview?: Array<string | null> | null, _metadata?: { __typename?: 'ContentMetadata', published?: any | null } | { __typename?: 'InstanceMetadata', published?: any | null } | { __typename?: 'ItemMetadata', published?: any | null } | { __typename?: 'MediaMetadata', published?: any | null } | null }
      & { ' $fragmentRefs'?: { 'SearchData__Video_Fragment': SearchData__Video_Fragment } }
    ) | null> | null, facets?: { __typename?: '_ContentFacet', _metadata?: { __typename?: 'IContentMetadataFacet', types?: Array<{ __typename?: 'StringFacet', name?: string | null, count?: number | null } | null> | null, locale?: Array<{ __typename?: 'StringFacet', name?: string | null, count?: number | null } | null> | null } | null } | null } | null };

type SearchData_ArticleListElement_Fragment = (
  { __typename?: 'ArticleListElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ArticleListElement_Fragment': IContentData_ArticleListElement_Fragment } }
) & { ' $fragmentName'?: 'SearchData_ArticleListElement_Fragment' };

type SearchData_BlankExperience_Fragment = (
  { __typename?: 'BlankExperience' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankExperience_Fragment': IContentData_BlankExperience_Fragment } }
) & { ' $fragmentName'?: 'SearchData_BlankExperience_Fragment' };

type SearchData_BlankSection_Fragment = (
  { __typename?: 'BlankSection' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment } }
) & { ' $fragmentName'?: 'SearchData_BlankSection_Fragment' };

type SearchData_BlogListingBlock_Fragment = (
  { __typename?: 'BlogListingBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_BlogListingBlock_Fragment': IContentData_BlogListingBlock_Fragment } }
) & { ' $fragmentName'?: 'SearchData_BlogListingBlock_Fragment' };

type SearchData_BlogPostPage_Fragment = (
  { __typename?: 'BlogPostPage' }
  & { ' $fragmentRefs'?: { 'IContentData_BlogPostPage_Fragment': IContentData_BlogPostPage_Fragment } }
) & { ' $fragmentName'?: 'SearchData_BlogPostPage_Fragment' };

type SearchData_ButtonBlock_Fragment = (
  { __typename?: 'ButtonBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment } }
) & { ' $fragmentName'?: 'SearchData_ButtonBlock_Fragment' };

type SearchData_CTAElement_Fragment = (
  { __typename?: 'CTAElement' }
  & { ' $fragmentRefs'?: { 'IContentData_CTAElement_Fragment': IContentData_CTAElement_Fragment } }
) & { ' $fragmentName'?: 'SearchData_CTAElement_Fragment' };

type SearchData_CardBlock_Fragment = (
  { __typename?: 'CardBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_CardBlock_Fragment': IContentData_CardBlock_Fragment } }
) & { ' $fragmentName'?: 'SearchData_CardBlock_Fragment' };

type SearchData_CarouselBlock_Fragment = (
  { __typename?: 'CarouselBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_CarouselBlock_Fragment': IContentData_CarouselBlock_Fragment } }
) & { ' $fragmentName'?: 'SearchData_CarouselBlock_Fragment' };

type SearchData_ContentRecsBlock_Fragment = (
  { __typename?: 'ContentRecsBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ContentRecsBlock_Fragment': IContentData_ContentRecsBlock_Fragment } }
) & { ' $fragmentName'?: 'SearchData_ContentRecsBlock_Fragment' };

type SearchData_ContentRecsElement_Fragment = (
  { __typename?: 'ContentRecsElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ContentRecsElement_Fragment': IContentData_ContentRecsElement_Fragment } }
) & { ' $fragmentName'?: 'SearchData_ContentRecsElement_Fragment' };

type SearchData_GenericMedia_Fragment = (
  { __typename?: 'GenericMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_GenericMedia_Fragment': IContentData_GenericMedia_Fragment } }
) & { ' $fragmentName'?: 'SearchData_GenericMedia_Fragment' };

type SearchData_HeadingElement_Fragment = (
  { __typename?: 'HeadingElement' }
  & { ' $fragmentRefs'?: { 'IContentData_HeadingElement_Fragment': IContentData_HeadingElement_Fragment } }
) & { ' $fragmentName'?: 'SearchData_HeadingElement_Fragment' };

type SearchData_HeroBlock_Fragment = (
  { __typename?: 'HeroBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment } }
) & { ' $fragmentName'?: 'SearchData_HeroBlock_Fragment' };

type SearchData_HomePageHeroBlock_Fragment = (
  { __typename?: 'HomePageHeroBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HomePageHeroBlock_Fragment': IContentData_HomePageHeroBlock_Fragment } }
) & { ' $fragmentName'?: 'SearchData_HomePageHeroBlock_Fragment' };

type SearchData_HtmlBlock_Fragment = (
  { __typename?: 'HtmlBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HtmlBlock_Fragment': IContentData_HtmlBlock_Fragment } }
) & { ' $fragmentName'?: 'SearchData_HtmlBlock_Fragment' };

type SearchData_ImageElement_Fragment = (
  { __typename?: 'ImageElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageElement_Fragment': IContentData_ImageElement_Fragment } }
) & { ' $fragmentName'?: 'SearchData_ImageElement_Fragment' };

type SearchData_ImageMedia_Fragment = (
  { __typename?: 'ImageMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageMedia_Fragment': IContentData_ImageMedia_Fragment } }
) & { ' $fragmentName'?: 'SearchData_ImageMedia_Fragment' };

type SearchData_LandingPage_Fragment = (
  { __typename?: 'LandingPage' }
  & { ' $fragmentRefs'?: { 'IContentData_LandingPage_Fragment': IContentData_LandingPage_Fragment } }
) & { ' $fragmentName'?: 'SearchData_LandingPage_Fragment' };

type SearchData_LayoutContainerBlock_Fragment = (
  { __typename?: 'LayoutContainerBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_LayoutContainerBlock_Fragment': IContentData_LayoutContainerBlock_Fragment } }
) & { ' $fragmentName'?: 'SearchData_LayoutContainerBlock_Fragment' };

type SearchData_MegaMenuGroupBlock_Fragment = (
  { __typename?: 'MegaMenuGroupBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment } }
) & { ' $fragmentName'?: 'SearchData_MegaMenuGroupBlock_Fragment' };

type SearchData_MenuNavigationBlock_Fragment = (
  { __typename?: 'MenuNavigationBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_MenuNavigationBlock_Fragment': IContentData_MenuNavigationBlock_Fragment } }
) & { ' $fragmentName'?: 'SearchData_MenuNavigationBlock_Fragment' };

type SearchData_OdpEmbedBlock_Fragment = (
  { __typename?: 'OdpEmbedBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_OdpEmbedBlock_Fragment': IContentData_OdpEmbedBlock_Fragment } }
) & { ' $fragmentName'?: 'SearchData_OdpEmbedBlock_Fragment' };

type SearchData_PageSeoSettings_Fragment = (
  { __typename?: 'PageSeoSettings' }
  & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment } }
) & { ' $fragmentName'?: 'SearchData_PageSeoSettings_Fragment' };

type SearchData_ParagraphElement_Fragment = (
  { __typename?: 'ParagraphElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ParagraphElement_Fragment': IContentData_ParagraphElement_Fragment } }
) & { ' $fragmentName'?: 'SearchData_ParagraphElement_Fragment' };

type SearchData_QuoteBlock_Fragment = (
  { __typename?: 'QuoteBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_QuoteBlock_Fragment': IContentData_QuoteBlock_Fragment } }
) & { ' $fragmentName'?: 'SearchData_QuoteBlock_Fragment' };

type SearchData_StandardPage_Fragment = (
  { __typename?: 'StandardPage' }
  & { ' $fragmentRefs'?: { 'IContentData_StandardPage_Fragment': IContentData_StandardPage_Fragment } }
) & { ' $fragmentName'?: 'SearchData_StandardPage_Fragment' };

type SearchData_StartPage_Fragment = (
  { __typename?: 'StartPage' }
  & { ' $fragmentRefs'?: { 'IContentData_StartPage_Fragment': IContentData_StartPage_Fragment } }
) & { ' $fragmentName'?: 'SearchData_StartPage_Fragment' };

type SearchData_SysContentFolder_Fragment = (
  { __typename?: 'SysContentFolder' }
  & { ' $fragmentRefs'?: { 'IContentData_SysContentFolder_Fragment': IContentData_SysContentFolder_Fragment } }
) & { ' $fragmentName'?: 'SearchData_SysContentFolder_Fragment' };

type SearchData_TestimonialElement_Fragment = (
  { __typename?: 'TestimonialElement' }
  & { ' $fragmentRefs'?: { 'IContentData_TestimonialElement_Fragment': IContentData_TestimonialElement_Fragment } }
) & { ' $fragmentName'?: 'SearchData_TestimonialElement_Fragment' };

type SearchData_TextBlock_Fragment = (
  { __typename?: 'TextBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment } }
) & { ' $fragmentName'?: 'SearchData_TextBlock_Fragment' };

type SearchData_Video_Fragment = (
  { __typename?: 'Video' }
  & { ' $fragmentRefs'?: { 'IContentData_Video_Fragment': IContentData_Video_Fragment } }
) & { ' $fragmentName'?: 'SearchData_Video_Fragment' };

type SearchData_VideoElement_Fragment = (
  { __typename?: 'VideoElement' }
  & { ' $fragmentRefs'?: { 'IContentData_VideoElement_Fragment': IContentData_VideoElement_Fragment } }
) & { ' $fragmentName'?: 'SearchData_VideoElement_Fragment' };

type SearchData_VideoMedia_Fragment = (
  { __typename?: 'VideoMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_VideoMedia_Fragment': IContentData_VideoMedia_Fragment } }
) & { ' $fragmentName'?: 'SearchData_VideoMedia_Fragment' };

type SearchData__Component_Fragment = (
  { __typename?: '_Component' }
  & { ' $fragmentRefs'?: { 'IContentData__Component_Fragment': IContentData__Component_Fragment } }
) & { ' $fragmentName'?: 'SearchData__Component_Fragment' };

type SearchData__Content_Fragment = (
  { __typename?: '_Content' }
  & { ' $fragmentRefs'?: { 'IContentData__Content_Fragment': IContentData__Content_Fragment } }
) & { ' $fragmentName'?: 'SearchData__Content_Fragment' };

type SearchData__Experience_Fragment = (
  { __typename?: '_Experience' }
  & { ' $fragmentRefs'?: { 'IContentData__Experience_Fragment': IContentData__Experience_Fragment } }
) & { ' $fragmentName'?: 'SearchData__Experience_Fragment' };

type SearchData__Folder_Fragment = (
  { __typename?: '_Folder' }
  & { ' $fragmentRefs'?: { 'IContentData__Folder_Fragment': IContentData__Folder_Fragment } }
) & { ' $fragmentName'?: 'SearchData__Folder_Fragment' };

type SearchData__Image_Fragment = (
  { __typename?: '_Image' }
  & { ' $fragmentRefs'?: { 'IContentData__Image_Fragment': IContentData__Image_Fragment } }
) & { ' $fragmentName'?: 'SearchData__Image_Fragment' };

type SearchData__Media_Fragment = (
  { __typename?: '_Media' }
  & { ' $fragmentRefs'?: { 'IContentData__Media_Fragment': IContentData__Media_Fragment } }
) & { ' $fragmentName'?: 'SearchData__Media_Fragment' };

type SearchData__Page_Fragment = (
  { __typename?: '_Page' }
  & { ' $fragmentRefs'?: { 'IContentData__Page_Fragment': IContentData__Page_Fragment } }
) & { ' $fragmentName'?: 'SearchData__Page_Fragment' };

type SearchData__Section_Fragment = (
  { __typename?: '_Section' }
  & { ' $fragmentRefs'?: { 'IContentData__Section_Fragment': IContentData__Section_Fragment } }
) & { ' $fragmentName'?: 'SearchData__Section_Fragment' };

type SearchData__Video_Fragment = (
  { __typename?: '_Video' }
  & { ' $fragmentRefs'?: { 'IContentData__Video_Fragment': IContentData__Video_Fragment } }
) & { ' $fragmentName'?: 'SearchData__Video_Fragment' };

export type SearchDataFragment = SearchData_ArticleListElement_Fragment | SearchData_BlankExperience_Fragment | SearchData_BlankSection_Fragment | SearchData_BlogListingBlock_Fragment | SearchData_BlogPostPage_Fragment | SearchData_ButtonBlock_Fragment | SearchData_CTAElement_Fragment | SearchData_CardBlock_Fragment | SearchData_CarouselBlock_Fragment | SearchData_ContentRecsBlock_Fragment | SearchData_ContentRecsElement_Fragment | SearchData_GenericMedia_Fragment | SearchData_HeadingElement_Fragment | SearchData_HeroBlock_Fragment | SearchData_HomePageHeroBlock_Fragment | SearchData_HtmlBlock_Fragment | SearchData_ImageElement_Fragment | SearchData_ImageMedia_Fragment | SearchData_LandingPage_Fragment | SearchData_LayoutContainerBlock_Fragment | SearchData_MegaMenuGroupBlock_Fragment | SearchData_MenuNavigationBlock_Fragment | SearchData_OdpEmbedBlock_Fragment | SearchData_PageSeoSettings_Fragment | SearchData_ParagraphElement_Fragment | SearchData_QuoteBlock_Fragment | SearchData_StandardPage_Fragment | SearchData_StartPage_Fragment | SearchData_SysContentFolder_Fragment | SearchData_TestimonialElement_Fragment | SearchData_TextBlock_Fragment | SearchData_Video_Fragment | SearchData_VideoElement_Fragment | SearchData_VideoMedia_Fragment | SearchData__Component_Fragment | SearchData__Content_Fragment | SearchData__Experience_Fragment | SearchData__Folder_Fragment | SearchData__Image_Fragment | SearchData__Media_Fragment | SearchData__Page_Fragment | SearchData__Section_Fragment | SearchData__Video_Fragment;

type IContentData_ArticleListElement_Fragment = { __typename?: 'ArticleListElement', _type: 'ArticleListElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ArticleListElement_Fragment' };

type IContentData_BlankExperience_Fragment = { __typename?: 'BlankExperience', _type: 'BlankExperience', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_BlankExperience_Fragment' };

type IContentData_BlankSection_Fragment = { __typename?: 'BlankSection', _type: 'BlankSection', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_BlankSection_Fragment' };

type IContentData_BlogListingBlock_Fragment = { __typename?: 'BlogListingBlock', _type: 'BlogListingBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_BlogListingBlock_Fragment' };

type IContentData_BlogPostPage_Fragment = { __typename?: 'BlogPostPage', _type: 'BlogPostPage', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_BlogPostPage_Fragment' };

type IContentData_ButtonBlock_Fragment = { __typename?: 'ButtonBlock', _type: 'ButtonBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ButtonBlock_Fragment' };

type IContentData_CTAElement_Fragment = { __typename?: 'CTAElement', _type: 'CTAElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_CTAElement_Fragment' };

type IContentData_CardBlock_Fragment = { __typename?: 'CardBlock', _type: 'CardBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_CardBlock_Fragment' };

type IContentData_CarouselBlock_Fragment = { __typename?: 'CarouselBlock', _type: 'CarouselBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_CarouselBlock_Fragment' };

type IContentData_ContentRecsBlock_Fragment = { __typename?: 'ContentRecsBlock', _type: 'ContentRecsBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ContentRecsBlock_Fragment' };

type IContentData_ContentRecsElement_Fragment = { __typename?: 'ContentRecsElement', _type: 'ContentRecsElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ContentRecsElement_Fragment' };

type IContentData_GenericMedia_Fragment = { __typename?: 'GenericMedia', _type: 'GenericMedia', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_GenericMedia_Fragment' };

type IContentData_HeadingElement_Fragment = { __typename?: 'HeadingElement', _type: 'HeadingElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_HeadingElement_Fragment' };

type IContentData_HeroBlock_Fragment = { __typename?: 'HeroBlock', _type: 'HeroBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_HeroBlock_Fragment' };

type IContentData_HomePageHeroBlock_Fragment = { __typename?: 'HomePageHeroBlock', _type: 'HomePageHeroBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_HomePageHeroBlock_Fragment' };

type IContentData_HtmlBlock_Fragment = { __typename?: 'HtmlBlock', _type: 'HtmlBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_HtmlBlock_Fragment' };

type IContentData_ImageElement_Fragment = { __typename?: 'ImageElement', _type: 'ImageElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ImageElement_Fragment' };

type IContentData_ImageMedia_Fragment = { __typename?: 'ImageMedia', _type: 'ImageMedia', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ImageMedia_Fragment' };

type IContentData_LandingPage_Fragment = { __typename?: 'LandingPage', _type: 'LandingPage', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_LandingPage_Fragment' };

type IContentData_LayoutContainerBlock_Fragment = { __typename?: 'LayoutContainerBlock', _type: 'LayoutContainerBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_LayoutContainerBlock_Fragment' };

type IContentData_MegaMenuGroupBlock_Fragment = { __typename?: 'MegaMenuGroupBlock', _type: 'MegaMenuGroupBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_MegaMenuGroupBlock_Fragment' };

type IContentData_MenuNavigationBlock_Fragment = { __typename?: 'MenuNavigationBlock', _type: 'MenuNavigationBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_MenuNavigationBlock_Fragment' };

type IContentData_OdpEmbedBlock_Fragment = { __typename?: 'OdpEmbedBlock', _type: 'OdpEmbedBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_OdpEmbedBlock_Fragment' };

type IContentData_PageSeoSettings_Fragment = { __typename?: 'PageSeoSettings', _type: 'PageSeoSettings', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_PageSeoSettings_Fragment' };

type IContentData_ParagraphElement_Fragment = { __typename?: 'ParagraphElement', _type: 'ParagraphElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_ParagraphElement_Fragment' };

type IContentData_QuoteBlock_Fragment = { __typename?: 'QuoteBlock', _type: 'QuoteBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_QuoteBlock_Fragment' };

type IContentData_StandardPage_Fragment = { __typename?: 'StandardPage', _type: 'StandardPage', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_StandardPage_Fragment' };

type IContentData_StartPage_Fragment = { __typename?: 'StartPage', _type: 'StartPage', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_StartPage_Fragment' };

type IContentData_SysContentFolder_Fragment = { __typename?: 'SysContentFolder', _type: 'SysContentFolder', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_SysContentFolder_Fragment' };

type IContentData_TestimonialElement_Fragment = { __typename?: 'TestimonialElement', _type: 'TestimonialElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_TestimonialElement_Fragment' };

type IContentData_TextBlock_Fragment = { __typename?: 'TextBlock', _type: 'TextBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_TextBlock_Fragment' };

type IContentData_Video_Fragment = { __typename?: 'Video', _type: 'Video', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_Video_Fragment' };

type IContentData_VideoElement_Fragment = { __typename?: 'VideoElement', _type: 'VideoElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_VideoElement_Fragment' };

type IContentData_VideoMedia_Fragment = { __typename?: 'VideoMedia', _type: 'VideoMedia', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData_VideoMedia_Fragment' };

type IContentData__Component_Fragment = { __typename?: '_Component', _type: '_Component', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Component_Fragment' };

type IContentData__Content_Fragment = { __typename?: '_Content', _type: '_Content', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Content_Fragment' };

type IContentData__Experience_Fragment = { __typename?: '_Experience', _type: '_Experience', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Experience_Fragment' };

type IContentData__Folder_Fragment = { __typename?: '_Folder', _type: '_Folder', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Folder_Fragment' };

type IContentData__Image_Fragment = { __typename?: '_Image', _type: '_Image', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Image_Fragment' };

type IContentData__Media_Fragment = { __typename?: '_Media', _type: '_Media', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Media_Fragment' };

type IContentData__Page_Fragment = { __typename?: '_Page', _type: '_Page', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Page_Fragment' };

type IContentData__Section_Fragment = { __typename?: '_Section', _type: '_Section', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Section_Fragment' };

type IContentData__Video_Fragment = { __typename?: '_Video', _type: '_Video', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IContentData__Video_Fragment' };

export type IContentDataFragment = IContentData_ArticleListElement_Fragment | IContentData_BlankExperience_Fragment | IContentData_BlankSection_Fragment | IContentData_BlogListingBlock_Fragment | IContentData_BlogPostPage_Fragment | IContentData_ButtonBlock_Fragment | IContentData_CTAElement_Fragment | IContentData_CardBlock_Fragment | IContentData_CarouselBlock_Fragment | IContentData_ContentRecsBlock_Fragment | IContentData_ContentRecsElement_Fragment | IContentData_GenericMedia_Fragment | IContentData_HeadingElement_Fragment | IContentData_HeroBlock_Fragment | IContentData_HomePageHeroBlock_Fragment | IContentData_HtmlBlock_Fragment | IContentData_ImageElement_Fragment | IContentData_ImageMedia_Fragment | IContentData_LandingPage_Fragment | IContentData_LayoutContainerBlock_Fragment | IContentData_MegaMenuGroupBlock_Fragment | IContentData_MenuNavigationBlock_Fragment | IContentData_OdpEmbedBlock_Fragment | IContentData_PageSeoSettings_Fragment | IContentData_ParagraphElement_Fragment | IContentData_QuoteBlock_Fragment | IContentData_StandardPage_Fragment | IContentData_StartPage_Fragment | IContentData_SysContentFolder_Fragment | IContentData_TestimonialElement_Fragment | IContentData_TextBlock_Fragment | IContentData_Video_Fragment | IContentData_VideoElement_Fragment | IContentData_VideoMedia_Fragment | IContentData__Component_Fragment | IContentData__Content_Fragment | IContentData__Experience_Fragment | IContentData__Folder_Fragment | IContentData__Image_Fragment | IContentData__Media_Fragment | IContentData__Page_Fragment | IContentData__Section_Fragment | IContentData__Video_Fragment;

type CompositionData_CompositionComponentNode_Fragment = { __typename?: 'CompositionComponentNode', type?: string | null, key?: string | null, name?: string | null, layoutType?: string | null, template?: string | null, component?: (
    { __typename?: 'ArticleListElement' }
    & { ' $fragmentRefs'?: { 'ElementData_ArticleListElement_Fragment': ElementData_ArticleListElement_Fragment;'ArticleListElementDataFragment': ArticleListElementDataFragment } }
  ) | (
    { __typename?: 'BlankSection' }
    & { ' $fragmentRefs'?: { 'ElementData_BlankSection_Fragment': ElementData_BlankSection_Fragment } }
  ) | (
    { __typename?: 'BlogListingBlock' }
    & { ' $fragmentRefs'?: { 'ElementData_BlogListingBlock_Fragment': ElementData_BlogListingBlock_Fragment } }
  ) | (
    { __typename?: 'ButtonBlock' }
    & { ' $fragmentRefs'?: { 'ElementData_ButtonBlock_Fragment': ElementData_ButtonBlock_Fragment } }
  ) | (
    { __typename?: 'CTAElement' }
    & { ' $fragmentRefs'?: { 'ElementData_CTAElement_Fragment': ElementData_CTAElement_Fragment;'CTAElementDataFragment': CTAElementDataFragment } }
  ) | (
    { __typename?: 'CardBlock' }
    & { ' $fragmentRefs'?: { 'ElementData_CardBlock_Fragment': ElementData_CardBlock_Fragment } }
  ) | (
    { __typename?: 'CarouselBlock' }
    & { ' $fragmentRefs'?: { 'ElementData_CarouselBlock_Fragment': ElementData_CarouselBlock_Fragment } }
  ) | (
    { __typename?: 'ContentRecsBlock' }
    & { ' $fragmentRefs'?: { 'ElementData_ContentRecsBlock_Fragment': ElementData_ContentRecsBlock_Fragment } }
  ) | (
    { __typename?: 'ContentRecsElement' }
    & { ' $fragmentRefs'?: { 'ElementData_ContentRecsElement_Fragment': ElementData_ContentRecsElement_Fragment;'ContentRecsElementDataFragment': ContentRecsElementDataFragment } }
  ) | (
    { __typename?: 'HeadingElement' }
    & { ' $fragmentRefs'?: { 'ElementData_HeadingElement_Fragment': ElementData_HeadingElement_Fragment;'HeadingElementDataFragment': HeadingElementDataFragment } }
  ) | (
    { __typename?: 'HeroBlock' }
    & { ' $fragmentRefs'?: { 'ElementData_HeroBlock_Fragment': ElementData_HeroBlock_Fragment } }
  ) | (
    { __typename?: 'HomePageHeroBlock' }
    & { ' $fragmentRefs'?: { 'ElementData_HomePageHeroBlock_Fragment': ElementData_HomePageHeroBlock_Fragment } }
  ) | (
    { __typename?: 'HtmlBlock' }
    & { ' $fragmentRefs'?: { 'ElementData_HtmlBlock_Fragment': ElementData_HtmlBlock_Fragment } }
  ) | (
    { __typename?: 'ImageElement' }
    & { ' $fragmentRefs'?: { 'ElementData_ImageElement_Fragment': ElementData_ImageElement_Fragment;'ImageElementDataFragment': ImageElementDataFragment } }
  ) | (
    { __typename?: 'LayoutContainerBlock' }
    & { ' $fragmentRefs'?: { 'ElementData_LayoutContainerBlock_Fragment': ElementData_LayoutContainerBlock_Fragment } }
  ) | (
    { __typename?: 'MegaMenuGroupBlock' }
    & { ' $fragmentRefs'?: { 'ElementData_MegaMenuGroupBlock_Fragment': ElementData_MegaMenuGroupBlock_Fragment } }
  ) | (
    { __typename?: 'MenuNavigationBlock' }
    & { ' $fragmentRefs'?: { 'ElementData_MenuNavigationBlock_Fragment': ElementData_MenuNavigationBlock_Fragment } }
  ) | (
    { __typename?: 'OdpEmbedBlock' }
    & { ' $fragmentRefs'?: { 'ElementData_OdpEmbedBlock_Fragment': ElementData_OdpEmbedBlock_Fragment } }
  ) | (
    { __typename?: 'PageSeoSettings' }
    & { ' $fragmentRefs'?: { 'ElementData_PageSeoSettings_Fragment': ElementData_PageSeoSettings_Fragment } }
  ) | (
    { __typename?: 'ParagraphElement' }
    & { ' $fragmentRefs'?: { 'ElementData_ParagraphElement_Fragment': ElementData_ParagraphElement_Fragment;'ParagraphElementDataFragment': ParagraphElementDataFragment } }
  ) | (
    { __typename?: 'QuoteBlock' }
    & { ' $fragmentRefs'?: { 'ElementData_QuoteBlock_Fragment': ElementData_QuoteBlock_Fragment } }
  ) | (
    { __typename?: 'TestimonialElement' }
    & { ' $fragmentRefs'?: { 'ElementData_TestimonialElement_Fragment': ElementData_TestimonialElement_Fragment;'TestimonialElementDataFragment': TestimonialElementDataFragment } }
  ) | (
    { __typename?: 'TextBlock' }
    & { ' $fragmentRefs'?: { 'ElementData_TextBlock_Fragment': ElementData_TextBlock_Fragment } }
  ) | (
    { __typename?: 'VideoElement' }
    & { ' $fragmentRefs'?: { 'ElementData_VideoElement_Fragment': ElementData_VideoElement_Fragment;'VideoElementDataFragment': VideoElementDataFragment } }
  ) | (
    { __typename?: '_Component' }
    & { ' $fragmentRefs'?: { 'ElementData__Component_Fragment': ElementData__Component_Fragment } }
  ) | (
    { __typename?: '_Section' }
    & { ' $fragmentRefs'?: { 'ElementData__Section_Fragment': ElementData__Section_Fragment } }
  ) | null, settings?: Array<{ __typename?: 'CompositionDisplaySetting', key?: string | null, value?: string | null } | null> | null } & { ' $fragmentName'?: 'CompositionData_CompositionComponentNode_Fragment' };

type CompositionData_CompositionNode_Fragment = { __typename?: 'CompositionNode', type?: string | null, key?: string | null, name?: string | null, layoutType?: string | null, template?: string | null, settings?: Array<{ __typename?: 'CompositionDisplaySetting', key?: string | null, value?: string | null } | null> | null } & { ' $fragmentName'?: 'CompositionData_CompositionNode_Fragment' };

type CompositionData_CompositionStructureNode_Fragment = { __typename?: 'CompositionStructureNode', type?: string | null, key?: string | null, name?: string | null, layoutType?: string | null, template?: string | null, nodes?: Array<{ __typename?: 'CompositionComponentNode', name?: string | null } | { __typename?: 'CompositionNode', name?: string | null } | { __typename?: 'CompositionStructureNode', name?: string | null } | null> | null, settings?: Array<{ __typename?: 'CompositionDisplaySetting', key?: string | null, value?: string | null } | null> | null } & { ' $fragmentName'?: 'CompositionData_CompositionStructureNode_Fragment' };

export type CompositionDataFragment = CompositionData_CompositionComponentNode_Fragment | CompositionData_CompositionNode_Fragment | CompositionData_CompositionStructureNode_Fragment;

type IElementData_ArticleListElement_Fragment = { __typename?: 'ArticleListElement', _type: 'ArticleListElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_ArticleListElement_Fragment' };

type IElementData_BlankSection_Fragment = { __typename?: 'BlankSection', _type: 'BlankSection', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_BlankSection_Fragment' };

type IElementData_BlogListingBlock_Fragment = { __typename?: 'BlogListingBlock', _type: 'BlogListingBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_BlogListingBlock_Fragment' };

type IElementData_ButtonBlock_Fragment = { __typename?: 'ButtonBlock', _type: 'ButtonBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_ButtonBlock_Fragment' };

type IElementData_CTAElement_Fragment = { __typename?: 'CTAElement', _type: 'CTAElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_CTAElement_Fragment' };

type IElementData_CardBlock_Fragment = { __typename?: 'CardBlock', _type: 'CardBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_CardBlock_Fragment' };

type IElementData_CarouselBlock_Fragment = { __typename?: 'CarouselBlock', _type: 'CarouselBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_CarouselBlock_Fragment' };

type IElementData_ContentRecsBlock_Fragment = { __typename?: 'ContentRecsBlock', _type: 'ContentRecsBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_ContentRecsBlock_Fragment' };

type IElementData_ContentRecsElement_Fragment = { __typename?: 'ContentRecsElement', _type: 'ContentRecsElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_ContentRecsElement_Fragment' };

type IElementData_HeadingElement_Fragment = { __typename?: 'HeadingElement', _type: 'HeadingElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_HeadingElement_Fragment' };

type IElementData_HeroBlock_Fragment = { __typename?: 'HeroBlock', _type: 'HeroBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_HeroBlock_Fragment' };

type IElementData_HomePageHeroBlock_Fragment = { __typename?: 'HomePageHeroBlock', _type: 'HomePageHeroBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_HomePageHeroBlock_Fragment' };

type IElementData_HtmlBlock_Fragment = { __typename?: 'HtmlBlock', _type: 'HtmlBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_HtmlBlock_Fragment' };

type IElementData_ImageElement_Fragment = { __typename?: 'ImageElement', _type: 'ImageElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_ImageElement_Fragment' };

type IElementData_LayoutContainerBlock_Fragment = { __typename?: 'LayoutContainerBlock', _type: 'LayoutContainerBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_LayoutContainerBlock_Fragment' };

type IElementData_MegaMenuGroupBlock_Fragment = { __typename?: 'MegaMenuGroupBlock', _type: 'MegaMenuGroupBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_MegaMenuGroupBlock_Fragment' };

type IElementData_MenuNavigationBlock_Fragment = { __typename?: 'MenuNavigationBlock', _type: 'MenuNavigationBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_MenuNavigationBlock_Fragment' };

type IElementData_OdpEmbedBlock_Fragment = { __typename?: 'OdpEmbedBlock', _type: 'OdpEmbedBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_OdpEmbedBlock_Fragment' };

type IElementData_PageSeoSettings_Fragment = { __typename?: 'PageSeoSettings', _type: 'PageSeoSettings', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_PageSeoSettings_Fragment' };

type IElementData_ParagraphElement_Fragment = { __typename?: 'ParagraphElement', _type: 'ParagraphElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_ParagraphElement_Fragment' };

type IElementData_QuoteBlock_Fragment = { __typename?: 'QuoteBlock', _type: 'QuoteBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_QuoteBlock_Fragment' };

type IElementData_TestimonialElement_Fragment = { __typename?: 'TestimonialElement', _type: 'TestimonialElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_TestimonialElement_Fragment' };

type IElementData_TextBlock_Fragment = { __typename?: 'TextBlock', _type: 'TextBlock', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_TextBlock_Fragment' };

type IElementData_VideoElement_Fragment = { __typename?: 'VideoElement', _type: 'VideoElement', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData_VideoElement_Fragment' };

type IElementData__Component_Fragment = { __typename?: '_Component', _type: '_Component', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData__Component_Fragment' };

type IElementData__Section_Fragment = { __typename?: '_Section', _type: '_Section', _metadata?: (
    { __typename?: 'ContentMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ContentMetadata_Fragment': IContentInfo_ContentMetadata_Fragment } }
  ) | (
    { __typename?: 'InstanceMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_InstanceMetadata_Fragment': IContentInfo_InstanceMetadata_Fragment } }
  ) | (
    { __typename?: 'ItemMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_ItemMetadata_Fragment': IContentInfo_ItemMetadata_Fragment } }
  ) | (
    { __typename?: 'MediaMetadata' }
    & { ' $fragmentRefs'?: { 'IContentInfo_MediaMetadata_Fragment': IContentInfo_MediaMetadata_Fragment } }
  ) | null } & { ' $fragmentName'?: 'IElementData__Section_Fragment' };

export type IElementDataFragment = IElementData_ArticleListElement_Fragment | IElementData_BlankSection_Fragment | IElementData_BlogListingBlock_Fragment | IElementData_ButtonBlock_Fragment | IElementData_CTAElement_Fragment | IElementData_CardBlock_Fragment | IElementData_CarouselBlock_Fragment | IElementData_ContentRecsBlock_Fragment | IElementData_ContentRecsElement_Fragment | IElementData_HeadingElement_Fragment | IElementData_HeroBlock_Fragment | IElementData_HomePageHeroBlock_Fragment | IElementData_HtmlBlock_Fragment | IElementData_ImageElement_Fragment | IElementData_LayoutContainerBlock_Fragment | IElementData_MegaMenuGroupBlock_Fragment | IElementData_MenuNavigationBlock_Fragment | IElementData_OdpEmbedBlock_Fragment | IElementData_PageSeoSettings_Fragment | IElementData_ParagraphElement_Fragment | IElementData_QuoteBlock_Fragment | IElementData_TestimonialElement_Fragment | IElementData_TextBlock_Fragment | IElementData_VideoElement_Fragment | IElementData__Component_Fragment | IElementData__Section_Fragment;

type ElementData_ArticleListElement_Fragment = (
  { __typename?: 'ArticleListElement' }
  & { ' $fragmentRefs'?: { 'IElementData_ArticleListElement_Fragment': IElementData_ArticleListElement_Fragment } }
) & { ' $fragmentName'?: 'ElementData_ArticleListElement_Fragment' };

type ElementData_BlankSection_Fragment = (
  { __typename?: 'BlankSection' }
  & { ' $fragmentRefs'?: { 'IElementData_BlankSection_Fragment': IElementData_BlankSection_Fragment } }
) & { ' $fragmentName'?: 'ElementData_BlankSection_Fragment' };

type ElementData_BlogListingBlock_Fragment = (
  { __typename?: 'BlogListingBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_BlogListingBlock_Fragment': IElementData_BlogListingBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_BlogListingBlock_Fragment' };

type ElementData_ButtonBlock_Fragment = (
  { __typename?: 'ButtonBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_ButtonBlock_Fragment': IElementData_ButtonBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_ButtonBlock_Fragment' };

type ElementData_CTAElement_Fragment = (
  { __typename?: 'CTAElement' }
  & { ' $fragmentRefs'?: { 'IElementData_CTAElement_Fragment': IElementData_CTAElement_Fragment } }
) & { ' $fragmentName'?: 'ElementData_CTAElement_Fragment' };

type ElementData_CardBlock_Fragment = (
  { __typename?: 'CardBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_CardBlock_Fragment': IElementData_CardBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_CardBlock_Fragment' };

type ElementData_CarouselBlock_Fragment = (
  { __typename?: 'CarouselBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_CarouselBlock_Fragment': IElementData_CarouselBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_CarouselBlock_Fragment' };

type ElementData_ContentRecsBlock_Fragment = (
  { __typename?: 'ContentRecsBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_ContentRecsBlock_Fragment': IElementData_ContentRecsBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_ContentRecsBlock_Fragment' };

type ElementData_ContentRecsElement_Fragment = (
  { __typename?: 'ContentRecsElement' }
  & { ' $fragmentRefs'?: { 'IElementData_ContentRecsElement_Fragment': IElementData_ContentRecsElement_Fragment } }
) & { ' $fragmentName'?: 'ElementData_ContentRecsElement_Fragment' };

type ElementData_HeadingElement_Fragment = (
  { __typename?: 'HeadingElement' }
  & { ' $fragmentRefs'?: { 'IElementData_HeadingElement_Fragment': IElementData_HeadingElement_Fragment } }
) & { ' $fragmentName'?: 'ElementData_HeadingElement_Fragment' };

type ElementData_HeroBlock_Fragment = (
  { __typename?: 'HeroBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_HeroBlock_Fragment': IElementData_HeroBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_HeroBlock_Fragment' };

type ElementData_HomePageHeroBlock_Fragment = (
  { __typename?: 'HomePageHeroBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_HomePageHeroBlock_Fragment': IElementData_HomePageHeroBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_HomePageHeroBlock_Fragment' };

type ElementData_HtmlBlock_Fragment = (
  { __typename?: 'HtmlBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_HtmlBlock_Fragment': IElementData_HtmlBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_HtmlBlock_Fragment' };

type ElementData_ImageElement_Fragment = (
  { __typename?: 'ImageElement' }
  & { ' $fragmentRefs'?: { 'IElementData_ImageElement_Fragment': IElementData_ImageElement_Fragment } }
) & { ' $fragmentName'?: 'ElementData_ImageElement_Fragment' };

type ElementData_LayoutContainerBlock_Fragment = (
  { __typename?: 'LayoutContainerBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_LayoutContainerBlock_Fragment': IElementData_LayoutContainerBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_LayoutContainerBlock_Fragment' };

type ElementData_MegaMenuGroupBlock_Fragment = (
  { __typename?: 'MegaMenuGroupBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_MegaMenuGroupBlock_Fragment': IElementData_MegaMenuGroupBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_MegaMenuGroupBlock_Fragment' };

type ElementData_MenuNavigationBlock_Fragment = (
  { __typename?: 'MenuNavigationBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_MenuNavigationBlock_Fragment': IElementData_MenuNavigationBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_MenuNavigationBlock_Fragment' };

type ElementData_OdpEmbedBlock_Fragment = (
  { __typename?: 'OdpEmbedBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_OdpEmbedBlock_Fragment': IElementData_OdpEmbedBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_OdpEmbedBlock_Fragment' };

type ElementData_PageSeoSettings_Fragment = (
  { __typename?: 'PageSeoSettings' }
  & { ' $fragmentRefs'?: { 'IElementData_PageSeoSettings_Fragment': IElementData_PageSeoSettings_Fragment } }
) & { ' $fragmentName'?: 'ElementData_PageSeoSettings_Fragment' };

type ElementData_ParagraphElement_Fragment = (
  { __typename?: 'ParagraphElement' }
  & { ' $fragmentRefs'?: { 'IElementData_ParagraphElement_Fragment': IElementData_ParagraphElement_Fragment } }
) & { ' $fragmentName'?: 'ElementData_ParagraphElement_Fragment' };

type ElementData_QuoteBlock_Fragment = (
  { __typename?: 'QuoteBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_QuoteBlock_Fragment': IElementData_QuoteBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_QuoteBlock_Fragment' };

type ElementData_TestimonialElement_Fragment = (
  { __typename?: 'TestimonialElement' }
  & { ' $fragmentRefs'?: { 'IElementData_TestimonialElement_Fragment': IElementData_TestimonialElement_Fragment } }
) & { ' $fragmentName'?: 'ElementData_TestimonialElement_Fragment' };

type ElementData_TextBlock_Fragment = (
  { __typename?: 'TextBlock' }
  & { ' $fragmentRefs'?: { 'IElementData_TextBlock_Fragment': IElementData_TextBlock_Fragment } }
) & { ' $fragmentName'?: 'ElementData_TextBlock_Fragment' };

type ElementData_VideoElement_Fragment = (
  { __typename?: 'VideoElement' }
  & { ' $fragmentRefs'?: { 'IElementData_VideoElement_Fragment': IElementData_VideoElement_Fragment } }
) & { ' $fragmentName'?: 'ElementData_VideoElement_Fragment' };

type ElementData__Component_Fragment = (
  { __typename?: '_Component' }
  & { ' $fragmentRefs'?: { 'IElementData__Component_Fragment': IElementData__Component_Fragment } }
) & { ' $fragmentName'?: 'ElementData__Component_Fragment' };

type ElementData__Section_Fragment = (
  { __typename?: '_Section' }
  & { ' $fragmentRefs'?: { 'IElementData__Section_Fragment': IElementData__Section_Fragment } }
) & { ' $fragmentName'?: 'ElementData__Section_Fragment' };

export type ElementDataFragment = ElementData_ArticleListElement_Fragment | ElementData_BlankSection_Fragment | ElementData_BlogListingBlock_Fragment | ElementData_ButtonBlock_Fragment | ElementData_CTAElement_Fragment | ElementData_CardBlock_Fragment | ElementData_CarouselBlock_Fragment | ElementData_ContentRecsBlock_Fragment | ElementData_ContentRecsElement_Fragment | ElementData_HeadingElement_Fragment | ElementData_HeroBlock_Fragment | ElementData_HomePageHeroBlock_Fragment | ElementData_HtmlBlock_Fragment | ElementData_ImageElement_Fragment | ElementData_LayoutContainerBlock_Fragment | ElementData_MegaMenuGroupBlock_Fragment | ElementData_MenuNavigationBlock_Fragment | ElementData_OdpEmbedBlock_Fragment | ElementData_PageSeoSettings_Fragment | ElementData_ParagraphElement_Fragment | ElementData_QuoteBlock_Fragment | ElementData_TestimonialElement_Fragment | ElementData_TextBlock_Fragment | ElementData_VideoElement_Fragment | ElementData__Component_Fragment | ElementData__Section_Fragment;

type BlockData_ArticleListElement_Fragment = (
  { __typename?: 'ArticleListElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ArticleListElement_Fragment': IContentData_ArticleListElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ArticleListElement_Fragment' };

type BlockData_BlankExperience_Fragment = (
  { __typename?: 'BlankExperience' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankExperience_Fragment': IContentData_BlankExperience_Fragment } }
) & { ' $fragmentName'?: 'BlockData_BlankExperience_Fragment' };

type BlockData_BlankSection_Fragment = (
  { __typename?: 'BlankSection' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment } }
) & { ' $fragmentName'?: 'BlockData_BlankSection_Fragment' };

type BlockData_BlogListingBlock_Fragment = (
  { __typename?: 'BlogListingBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_BlogListingBlock_Fragment': IContentData_BlogListingBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_BlogListingBlock_Fragment' };

type BlockData_BlogPostPage_Fragment = (
  { __typename?: 'BlogPostPage' }
  & { ' $fragmentRefs'?: { 'IContentData_BlogPostPage_Fragment': IContentData_BlogPostPage_Fragment } }
) & { ' $fragmentName'?: 'BlockData_BlogPostPage_Fragment' };

type BlockData_ButtonBlock_Fragment = (
  { __typename?: 'ButtonBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ButtonBlock_Fragment' };

type BlockData_CTAElement_Fragment = (
  { __typename?: 'CTAElement' }
  & { ' $fragmentRefs'?: { 'IContentData_CTAElement_Fragment': IContentData_CTAElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_CTAElement_Fragment' };

type BlockData_CardBlock_Fragment = (
  { __typename?: 'CardBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_CardBlock_Fragment': IContentData_CardBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_CardBlock_Fragment' };

type BlockData_CarouselBlock_Fragment = (
  { __typename?: 'CarouselBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_CarouselBlock_Fragment': IContentData_CarouselBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_CarouselBlock_Fragment' };

type BlockData_ContentRecsBlock_Fragment = (
  { __typename?: 'ContentRecsBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ContentRecsBlock_Fragment': IContentData_ContentRecsBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ContentRecsBlock_Fragment' };

type BlockData_ContentRecsElement_Fragment = (
  { __typename?: 'ContentRecsElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ContentRecsElement_Fragment': IContentData_ContentRecsElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ContentRecsElement_Fragment' };

type BlockData_GenericMedia_Fragment = (
  { __typename?: 'GenericMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_GenericMedia_Fragment': IContentData_GenericMedia_Fragment } }
) & { ' $fragmentName'?: 'BlockData_GenericMedia_Fragment' };

type BlockData_HeadingElement_Fragment = (
  { __typename?: 'HeadingElement' }
  & { ' $fragmentRefs'?: { 'IContentData_HeadingElement_Fragment': IContentData_HeadingElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_HeadingElement_Fragment' };

type BlockData_HeroBlock_Fragment = (
  { __typename?: 'HeroBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_HeroBlock_Fragment' };

type BlockData_HomePageHeroBlock_Fragment = (
  { __typename?: 'HomePageHeroBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HomePageHeroBlock_Fragment': IContentData_HomePageHeroBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_HomePageHeroBlock_Fragment' };

type BlockData_HtmlBlock_Fragment = (
  { __typename?: 'HtmlBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HtmlBlock_Fragment': IContentData_HtmlBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_HtmlBlock_Fragment' };

type BlockData_ImageElement_Fragment = (
  { __typename?: 'ImageElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageElement_Fragment': IContentData_ImageElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ImageElement_Fragment' };

type BlockData_ImageMedia_Fragment = (
  { __typename?: 'ImageMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageMedia_Fragment': IContentData_ImageMedia_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ImageMedia_Fragment' };

type BlockData_LandingPage_Fragment = (
  { __typename?: 'LandingPage' }
  & { ' $fragmentRefs'?: { 'IContentData_LandingPage_Fragment': IContentData_LandingPage_Fragment } }
) & { ' $fragmentName'?: 'BlockData_LandingPage_Fragment' };

type BlockData_LayoutContainerBlock_Fragment = (
  { __typename?: 'LayoutContainerBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_LayoutContainerBlock_Fragment': IContentData_LayoutContainerBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_LayoutContainerBlock_Fragment' };

type BlockData_MegaMenuGroupBlock_Fragment = (
  { __typename?: 'MegaMenuGroupBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_MegaMenuGroupBlock_Fragment' };

type BlockData_MenuNavigationBlock_Fragment = (
  { __typename?: 'MenuNavigationBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_MenuNavigationBlock_Fragment': IContentData_MenuNavigationBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_MenuNavigationBlock_Fragment' };

type BlockData_OdpEmbedBlock_Fragment = (
  { __typename?: 'OdpEmbedBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_OdpEmbedBlock_Fragment': IContentData_OdpEmbedBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_OdpEmbedBlock_Fragment' };

type BlockData_PageSeoSettings_Fragment = (
  { __typename?: 'PageSeoSettings' }
  & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment } }
) & { ' $fragmentName'?: 'BlockData_PageSeoSettings_Fragment' };

type BlockData_ParagraphElement_Fragment = (
  { __typename?: 'ParagraphElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ParagraphElement_Fragment': IContentData_ParagraphElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ParagraphElement_Fragment' };

type BlockData_QuoteBlock_Fragment = (
  { __typename?: 'QuoteBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_QuoteBlock_Fragment': IContentData_QuoteBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_QuoteBlock_Fragment' };

type BlockData_StandardPage_Fragment = (
  { __typename?: 'StandardPage' }
  & { ' $fragmentRefs'?: { 'IContentData_StandardPage_Fragment': IContentData_StandardPage_Fragment } }
) & { ' $fragmentName'?: 'BlockData_StandardPage_Fragment' };

type BlockData_StartPage_Fragment = (
  { __typename?: 'StartPage' }
  & { ' $fragmentRefs'?: { 'IContentData_StartPage_Fragment': IContentData_StartPage_Fragment } }
) & { ' $fragmentName'?: 'BlockData_StartPage_Fragment' };

type BlockData_SysContentFolder_Fragment = (
  { __typename?: 'SysContentFolder' }
  & { ' $fragmentRefs'?: { 'IContentData_SysContentFolder_Fragment': IContentData_SysContentFolder_Fragment } }
) & { ' $fragmentName'?: 'BlockData_SysContentFolder_Fragment' };

type BlockData_TestimonialElement_Fragment = (
  { __typename?: 'TestimonialElement' }
  & { ' $fragmentRefs'?: { 'IContentData_TestimonialElement_Fragment': IContentData_TestimonialElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_TestimonialElement_Fragment' };

type BlockData_TextBlock_Fragment = (
  { __typename?: 'TextBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_TextBlock_Fragment' };

type BlockData_Video_Fragment = (
  { __typename?: 'Video' }
  & { ' $fragmentRefs'?: { 'IContentData_Video_Fragment': IContentData_Video_Fragment } }
) & { ' $fragmentName'?: 'BlockData_Video_Fragment' };

type BlockData_VideoElement_Fragment = (
  { __typename?: 'VideoElement' }
  & { ' $fragmentRefs'?: { 'IContentData_VideoElement_Fragment': IContentData_VideoElement_Fragment } }
) & { ' $fragmentName'?: 'BlockData_VideoElement_Fragment' };

type BlockData_VideoMedia_Fragment = (
  { __typename?: 'VideoMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_VideoMedia_Fragment': IContentData_VideoMedia_Fragment } }
) & { ' $fragmentName'?: 'BlockData_VideoMedia_Fragment' };

type BlockData__Component_Fragment = (
  { __typename?: '_Component' }
  & { ' $fragmentRefs'?: { 'IContentData__Component_Fragment': IContentData__Component_Fragment } }
) & { ' $fragmentName'?: 'BlockData__Component_Fragment' };

type BlockData__Content_Fragment = (
  { __typename?: '_Content' }
  & { ' $fragmentRefs'?: { 'IContentData__Content_Fragment': IContentData__Content_Fragment } }
) & { ' $fragmentName'?: 'BlockData__Content_Fragment' };

type BlockData__Experience_Fragment = (
  { __typename?: '_Experience' }
  & { ' $fragmentRefs'?: { 'IContentData__Experience_Fragment': IContentData__Experience_Fragment } }
) & { ' $fragmentName'?: 'BlockData__Experience_Fragment' };

type BlockData__Folder_Fragment = (
  { __typename?: '_Folder' }
  & { ' $fragmentRefs'?: { 'IContentData__Folder_Fragment': IContentData__Folder_Fragment } }
) & { ' $fragmentName'?: 'BlockData__Folder_Fragment' };

type BlockData__Image_Fragment = (
  { __typename?: '_Image' }
  & { ' $fragmentRefs'?: { 'IContentData__Image_Fragment': IContentData__Image_Fragment } }
) & { ' $fragmentName'?: 'BlockData__Image_Fragment' };

type BlockData__Media_Fragment = (
  { __typename?: '_Media' }
  & { ' $fragmentRefs'?: { 'IContentData__Media_Fragment': IContentData__Media_Fragment } }
) & { ' $fragmentName'?: 'BlockData__Media_Fragment' };

type BlockData__Page_Fragment = (
  { __typename?: '_Page' }
  & { ' $fragmentRefs'?: { 'IContentData__Page_Fragment': IContentData__Page_Fragment } }
) & { ' $fragmentName'?: 'BlockData__Page_Fragment' };

type BlockData__Section_Fragment = (
  { __typename?: '_Section' }
  & { ' $fragmentRefs'?: { 'IContentData__Section_Fragment': IContentData__Section_Fragment } }
) & { ' $fragmentName'?: 'BlockData__Section_Fragment' };

type BlockData__Video_Fragment = (
  { __typename?: '_Video' }
  & { ' $fragmentRefs'?: { 'IContentData__Video_Fragment': IContentData__Video_Fragment } }
) & { ' $fragmentName'?: 'BlockData__Video_Fragment' };

export type BlockDataFragment = BlockData_ArticleListElement_Fragment | BlockData_BlankExperience_Fragment | BlockData_BlankSection_Fragment | BlockData_BlogListingBlock_Fragment | BlockData_BlogPostPage_Fragment | BlockData_ButtonBlock_Fragment | BlockData_CTAElement_Fragment | BlockData_CardBlock_Fragment | BlockData_CarouselBlock_Fragment | BlockData_ContentRecsBlock_Fragment | BlockData_ContentRecsElement_Fragment | BlockData_GenericMedia_Fragment | BlockData_HeadingElement_Fragment | BlockData_HeroBlock_Fragment | BlockData_HomePageHeroBlock_Fragment | BlockData_HtmlBlock_Fragment | BlockData_ImageElement_Fragment | BlockData_ImageMedia_Fragment | BlockData_LandingPage_Fragment | BlockData_LayoutContainerBlock_Fragment | BlockData_MegaMenuGroupBlock_Fragment | BlockData_MenuNavigationBlock_Fragment | BlockData_OdpEmbedBlock_Fragment | BlockData_PageSeoSettings_Fragment | BlockData_ParagraphElement_Fragment | BlockData_QuoteBlock_Fragment | BlockData_StandardPage_Fragment | BlockData_StartPage_Fragment | BlockData_SysContentFolder_Fragment | BlockData_TestimonialElement_Fragment | BlockData_TextBlock_Fragment | BlockData_Video_Fragment | BlockData_VideoElement_Fragment | BlockData_VideoMedia_Fragment | BlockData__Component_Fragment | BlockData__Content_Fragment | BlockData__Experience_Fragment | BlockData__Folder_Fragment | BlockData__Image_Fragment | BlockData__Media_Fragment | BlockData__Page_Fragment | BlockData__Section_Fragment | BlockData__Video_Fragment;

type PageData_ArticleListElement_Fragment = (
  { __typename?: 'ArticleListElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ArticleListElement_Fragment': IContentData_ArticleListElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_ArticleListElement_Fragment' };

type PageData_BlankExperience_Fragment = (
  { __typename?: 'BlankExperience' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankExperience_Fragment': IContentData_BlankExperience_Fragment } }
) & { ' $fragmentName'?: 'PageData_BlankExperience_Fragment' };

type PageData_BlankSection_Fragment = (
  { __typename?: 'BlankSection' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment } }
) & { ' $fragmentName'?: 'PageData_BlankSection_Fragment' };

type PageData_BlogListingBlock_Fragment = (
  { __typename?: 'BlogListingBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_BlogListingBlock_Fragment': IContentData_BlogListingBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_BlogListingBlock_Fragment' };

type PageData_BlogPostPage_Fragment = (
  { __typename?: 'BlogPostPage' }
  & { ' $fragmentRefs'?: { 'IContentData_BlogPostPage_Fragment': IContentData_BlogPostPage_Fragment } }
) & { ' $fragmentName'?: 'PageData_BlogPostPage_Fragment' };

type PageData_ButtonBlock_Fragment = (
  { __typename?: 'ButtonBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_ButtonBlock_Fragment' };

type PageData_CTAElement_Fragment = (
  { __typename?: 'CTAElement' }
  & { ' $fragmentRefs'?: { 'IContentData_CTAElement_Fragment': IContentData_CTAElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_CTAElement_Fragment' };

type PageData_CardBlock_Fragment = (
  { __typename?: 'CardBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_CardBlock_Fragment': IContentData_CardBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_CardBlock_Fragment' };

type PageData_CarouselBlock_Fragment = (
  { __typename?: 'CarouselBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_CarouselBlock_Fragment': IContentData_CarouselBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_CarouselBlock_Fragment' };

type PageData_ContentRecsBlock_Fragment = (
  { __typename?: 'ContentRecsBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ContentRecsBlock_Fragment': IContentData_ContentRecsBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_ContentRecsBlock_Fragment' };

type PageData_ContentRecsElement_Fragment = (
  { __typename?: 'ContentRecsElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ContentRecsElement_Fragment': IContentData_ContentRecsElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_ContentRecsElement_Fragment' };

type PageData_GenericMedia_Fragment = (
  { __typename?: 'GenericMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_GenericMedia_Fragment': IContentData_GenericMedia_Fragment } }
) & { ' $fragmentName'?: 'PageData_GenericMedia_Fragment' };

type PageData_HeadingElement_Fragment = (
  { __typename?: 'HeadingElement' }
  & { ' $fragmentRefs'?: { 'IContentData_HeadingElement_Fragment': IContentData_HeadingElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_HeadingElement_Fragment' };

type PageData_HeroBlock_Fragment = (
  { __typename?: 'HeroBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_HeroBlock_Fragment' };

type PageData_HomePageHeroBlock_Fragment = (
  { __typename?: 'HomePageHeroBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HomePageHeroBlock_Fragment': IContentData_HomePageHeroBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_HomePageHeroBlock_Fragment' };

type PageData_HtmlBlock_Fragment = (
  { __typename?: 'HtmlBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HtmlBlock_Fragment': IContentData_HtmlBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_HtmlBlock_Fragment' };

type PageData_ImageElement_Fragment = (
  { __typename?: 'ImageElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageElement_Fragment': IContentData_ImageElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_ImageElement_Fragment' };

type PageData_ImageMedia_Fragment = (
  { __typename?: 'ImageMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageMedia_Fragment': IContentData_ImageMedia_Fragment } }
) & { ' $fragmentName'?: 'PageData_ImageMedia_Fragment' };

type PageData_LandingPage_Fragment = (
  { __typename?: 'LandingPage' }
  & { ' $fragmentRefs'?: { 'IContentData_LandingPage_Fragment': IContentData_LandingPage_Fragment } }
) & { ' $fragmentName'?: 'PageData_LandingPage_Fragment' };

type PageData_LayoutContainerBlock_Fragment = (
  { __typename?: 'LayoutContainerBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_LayoutContainerBlock_Fragment': IContentData_LayoutContainerBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_LayoutContainerBlock_Fragment' };

type PageData_MegaMenuGroupBlock_Fragment = (
  { __typename?: 'MegaMenuGroupBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_MegaMenuGroupBlock_Fragment' };

type PageData_MenuNavigationBlock_Fragment = (
  { __typename?: 'MenuNavigationBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_MenuNavigationBlock_Fragment': IContentData_MenuNavigationBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_MenuNavigationBlock_Fragment' };

type PageData_OdpEmbedBlock_Fragment = (
  { __typename?: 'OdpEmbedBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_OdpEmbedBlock_Fragment': IContentData_OdpEmbedBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_OdpEmbedBlock_Fragment' };

type PageData_PageSeoSettings_Fragment = (
  { __typename?: 'PageSeoSettings' }
  & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment } }
) & { ' $fragmentName'?: 'PageData_PageSeoSettings_Fragment' };

type PageData_ParagraphElement_Fragment = (
  { __typename?: 'ParagraphElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ParagraphElement_Fragment': IContentData_ParagraphElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_ParagraphElement_Fragment' };

type PageData_QuoteBlock_Fragment = (
  { __typename?: 'QuoteBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_QuoteBlock_Fragment': IContentData_QuoteBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_QuoteBlock_Fragment' };

type PageData_StandardPage_Fragment = (
  { __typename?: 'StandardPage' }
  & { ' $fragmentRefs'?: { 'IContentData_StandardPage_Fragment': IContentData_StandardPage_Fragment } }
) & { ' $fragmentName'?: 'PageData_StandardPage_Fragment' };

type PageData_StartPage_Fragment = (
  { __typename?: 'StartPage' }
  & { ' $fragmentRefs'?: { 'IContentData_StartPage_Fragment': IContentData_StartPage_Fragment } }
) & { ' $fragmentName'?: 'PageData_StartPage_Fragment' };

type PageData_SysContentFolder_Fragment = (
  { __typename?: 'SysContentFolder' }
  & { ' $fragmentRefs'?: { 'IContentData_SysContentFolder_Fragment': IContentData_SysContentFolder_Fragment } }
) & { ' $fragmentName'?: 'PageData_SysContentFolder_Fragment' };

type PageData_TestimonialElement_Fragment = (
  { __typename?: 'TestimonialElement' }
  & { ' $fragmentRefs'?: { 'IContentData_TestimonialElement_Fragment': IContentData_TestimonialElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_TestimonialElement_Fragment' };

type PageData_TextBlock_Fragment = (
  { __typename?: 'TextBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_TextBlock_Fragment' };

type PageData_Video_Fragment = (
  { __typename?: 'Video' }
  & { ' $fragmentRefs'?: { 'IContentData_Video_Fragment': IContentData_Video_Fragment } }
) & { ' $fragmentName'?: 'PageData_Video_Fragment' };

type PageData_VideoElement_Fragment = (
  { __typename?: 'VideoElement' }
  & { ' $fragmentRefs'?: { 'IContentData_VideoElement_Fragment': IContentData_VideoElement_Fragment } }
) & { ' $fragmentName'?: 'PageData_VideoElement_Fragment' };

type PageData_VideoMedia_Fragment = (
  { __typename?: 'VideoMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_VideoMedia_Fragment': IContentData_VideoMedia_Fragment } }
) & { ' $fragmentName'?: 'PageData_VideoMedia_Fragment' };

type PageData__Component_Fragment = (
  { __typename?: '_Component' }
  & { ' $fragmentRefs'?: { 'IContentData__Component_Fragment': IContentData__Component_Fragment } }
) & { ' $fragmentName'?: 'PageData__Component_Fragment' };

type PageData__Content_Fragment = (
  { __typename?: '_Content' }
  & { ' $fragmentRefs'?: { 'IContentData__Content_Fragment': IContentData__Content_Fragment } }
) & { ' $fragmentName'?: 'PageData__Content_Fragment' };

type PageData__Experience_Fragment = (
  { __typename?: '_Experience' }
  & { ' $fragmentRefs'?: { 'IContentData__Experience_Fragment': IContentData__Experience_Fragment } }
) & { ' $fragmentName'?: 'PageData__Experience_Fragment' };

type PageData__Folder_Fragment = (
  { __typename?: '_Folder' }
  & { ' $fragmentRefs'?: { 'IContentData__Folder_Fragment': IContentData__Folder_Fragment } }
) & { ' $fragmentName'?: 'PageData__Folder_Fragment' };

type PageData__Image_Fragment = (
  { __typename?: '_Image' }
  & { ' $fragmentRefs'?: { 'IContentData__Image_Fragment': IContentData__Image_Fragment } }
) & { ' $fragmentName'?: 'PageData__Image_Fragment' };

type PageData__Media_Fragment = (
  { __typename?: '_Media' }
  & { ' $fragmentRefs'?: { 'IContentData__Media_Fragment': IContentData__Media_Fragment } }
) & { ' $fragmentName'?: 'PageData__Media_Fragment' };

type PageData__Page_Fragment = (
  { __typename?: '_Page' }
  & { ' $fragmentRefs'?: { 'IContentData__Page_Fragment': IContentData__Page_Fragment } }
) & { ' $fragmentName'?: 'PageData__Page_Fragment' };

type PageData__Section_Fragment = (
  { __typename?: '_Section' }
  & { ' $fragmentRefs'?: { 'IContentData__Section_Fragment': IContentData__Section_Fragment } }
) & { ' $fragmentName'?: 'PageData__Section_Fragment' };

type PageData__Video_Fragment = (
  { __typename?: '_Video' }
  & { ' $fragmentRefs'?: { 'IContentData__Video_Fragment': IContentData__Video_Fragment } }
) & { ' $fragmentName'?: 'PageData__Video_Fragment' };

export type PageDataFragment = PageData_ArticleListElement_Fragment | PageData_BlankExperience_Fragment | PageData_BlankSection_Fragment | PageData_BlogListingBlock_Fragment | PageData_BlogPostPage_Fragment | PageData_ButtonBlock_Fragment | PageData_CTAElement_Fragment | PageData_CardBlock_Fragment | PageData_CarouselBlock_Fragment | PageData_ContentRecsBlock_Fragment | PageData_ContentRecsElement_Fragment | PageData_GenericMedia_Fragment | PageData_HeadingElement_Fragment | PageData_HeroBlock_Fragment | PageData_HomePageHeroBlock_Fragment | PageData_HtmlBlock_Fragment | PageData_ImageElement_Fragment | PageData_ImageMedia_Fragment | PageData_LandingPage_Fragment | PageData_LayoutContainerBlock_Fragment | PageData_MegaMenuGroupBlock_Fragment | PageData_MenuNavigationBlock_Fragment | PageData_OdpEmbedBlock_Fragment | PageData_PageSeoSettings_Fragment | PageData_ParagraphElement_Fragment | PageData_QuoteBlock_Fragment | PageData_StandardPage_Fragment | PageData_StartPage_Fragment | PageData_SysContentFolder_Fragment | PageData_TestimonialElement_Fragment | PageData_TextBlock_Fragment | PageData_Video_Fragment | PageData_VideoElement_Fragment | PageData_VideoMedia_Fragment | PageData__Component_Fragment | PageData__Content_Fragment | PageData__Experience_Fragment | PageData__Folder_Fragment | PageData__Image_Fragment | PageData__Media_Fragment | PageData__Page_Fragment | PageData__Section_Fragment | PageData__Video_Fragment;

export type LinkDataFragment = { __typename?: 'ContentUrl', base?: string | null, hierarchical?: string | null, default?: string | null } & { ' $fragmentName'?: 'LinkDataFragment' };

export type ReferenceDataFragment = { __typename?: 'ContentReference', key?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'ReferenceDataFragment' };

type IContentInfo_ContentMetadata_Fragment = { __typename?: 'ContentMetadata', key?: string | null, locale?: string | null, types?: Array<string | null> | null, displayName?: string | null, version?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'IContentInfo_ContentMetadata_Fragment' };

type IContentInfo_InstanceMetadata_Fragment = { __typename?: 'InstanceMetadata', key?: string | null, locale?: string | null, types?: Array<string | null> | null, displayName?: string | null, version?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'IContentInfo_InstanceMetadata_Fragment' };

type IContentInfo_ItemMetadata_Fragment = { __typename?: 'ItemMetadata', key?: string | null, locale?: string | null, types?: Array<string | null> | null, displayName?: string | null, version?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'IContentInfo_ItemMetadata_Fragment' };

type IContentInfo_MediaMetadata_Fragment = { __typename?: 'MediaMetadata', key?: string | null, locale?: string | null, types?: Array<string | null> | null, displayName?: string | null, version?: string | null, url?: (
    { __typename?: 'ContentUrl' }
    & { ' $fragmentRefs'?: { 'LinkDataFragment': LinkDataFragment } }
  ) | null } & { ' $fragmentName'?: 'IContentInfo_MediaMetadata_Fragment' };

export type IContentInfoFragment = IContentInfo_ContentMetadata_Fragment | IContentInfo_InstanceMetadata_Fragment | IContentInfo_ItemMetadata_Fragment | IContentInfo_MediaMetadata_Fragment;

type IContentListItem_ArticleListElement_Fragment = (
  { __typename?: 'ArticleListElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ArticleListElement_Fragment': IContentData_ArticleListElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ArticleListElement_Fragment' };

type IContentListItem_BlankExperience_Fragment = (
  { __typename?: 'BlankExperience' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankExperience_Fragment': IContentData_BlankExperience_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_BlankExperience_Fragment' };

type IContentListItem_BlankSection_Fragment = (
  { __typename?: 'BlankSection' }
  & { ' $fragmentRefs'?: { 'IContentData_BlankSection_Fragment': IContentData_BlankSection_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_BlankSection_Fragment' };

type IContentListItem_BlogListingBlock_Fragment = (
  { __typename?: 'BlogListingBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_BlogListingBlock_Fragment': IContentData_BlogListingBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_BlogListingBlock_Fragment' };

type IContentListItem_BlogPostPage_Fragment = (
  { __typename?: 'BlogPostPage' }
  & { ' $fragmentRefs'?: { 'IContentData_BlogPostPage_Fragment': IContentData_BlogPostPage_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_BlogPostPage_Fragment' };

type IContentListItem_ButtonBlock_Fragment = (
  { __typename?: 'ButtonBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ButtonBlock_Fragment' };

type IContentListItem_CTAElement_Fragment = (
  { __typename?: 'CTAElement' }
  & { ' $fragmentRefs'?: { 'IContentData_CTAElement_Fragment': IContentData_CTAElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_CTAElement_Fragment' };

type IContentListItem_CardBlock_Fragment = (
  { __typename?: 'CardBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_CardBlock_Fragment': IContentData_CardBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_CardBlock_Fragment' };

type IContentListItem_CarouselBlock_Fragment = (
  { __typename?: 'CarouselBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_CarouselBlock_Fragment': IContentData_CarouselBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_CarouselBlock_Fragment' };

type IContentListItem_ContentRecsBlock_Fragment = (
  { __typename?: 'ContentRecsBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ContentRecsBlock_Fragment': IContentData_ContentRecsBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ContentRecsBlock_Fragment' };

type IContentListItem_ContentRecsElement_Fragment = (
  { __typename?: 'ContentRecsElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ContentRecsElement_Fragment': IContentData_ContentRecsElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ContentRecsElement_Fragment' };

type IContentListItem_GenericMedia_Fragment = (
  { __typename?: 'GenericMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_GenericMedia_Fragment': IContentData_GenericMedia_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_GenericMedia_Fragment' };

type IContentListItem_HeadingElement_Fragment = (
  { __typename?: 'HeadingElement' }
  & { ' $fragmentRefs'?: { 'IContentData_HeadingElement_Fragment': IContentData_HeadingElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_HeadingElement_Fragment' };

type IContentListItem_HeroBlock_Fragment = (
  { __typename?: 'HeroBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_HeroBlock_Fragment' };

type IContentListItem_HomePageHeroBlock_Fragment = (
  { __typename?: 'HomePageHeroBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HomePageHeroBlock_Fragment': IContentData_HomePageHeroBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_HomePageHeroBlock_Fragment' };

type IContentListItem_HtmlBlock_Fragment = (
  { __typename?: 'HtmlBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HtmlBlock_Fragment': IContentData_HtmlBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_HtmlBlock_Fragment' };

type IContentListItem_ImageElement_Fragment = (
  { __typename?: 'ImageElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageElement_Fragment': IContentData_ImageElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ImageElement_Fragment' };

type IContentListItem_ImageMedia_Fragment = (
  { __typename?: 'ImageMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_ImageMedia_Fragment': IContentData_ImageMedia_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ImageMedia_Fragment' };

type IContentListItem_LandingPage_Fragment = (
  { __typename?: 'LandingPage' }
  & { ' $fragmentRefs'?: { 'IContentData_LandingPage_Fragment': IContentData_LandingPage_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_LandingPage_Fragment' };

type IContentListItem_LayoutContainerBlock_Fragment = (
  { __typename?: 'LayoutContainerBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_LayoutContainerBlock_Fragment': IContentData_LayoutContainerBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_LayoutContainerBlock_Fragment' };

type IContentListItem_MegaMenuGroupBlock_Fragment = (
  { __typename?: 'MegaMenuGroupBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_MegaMenuGroupBlock_Fragment' };

type IContentListItem_MenuNavigationBlock_Fragment = (
  { __typename?: 'MenuNavigationBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_MenuNavigationBlock_Fragment': IContentData_MenuNavigationBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_MenuNavigationBlock_Fragment' };

type IContentListItem_OdpEmbedBlock_Fragment = (
  { __typename?: 'OdpEmbedBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_OdpEmbedBlock_Fragment': IContentData_OdpEmbedBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_OdpEmbedBlock_Fragment' };

type IContentListItem_PageSeoSettings_Fragment = (
  { __typename?: 'PageSeoSettings' }
  & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_PageSeoSettings_Fragment' };

type IContentListItem_ParagraphElement_Fragment = (
  { __typename?: 'ParagraphElement' }
  & { ' $fragmentRefs'?: { 'IContentData_ParagraphElement_Fragment': IContentData_ParagraphElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_ParagraphElement_Fragment' };

type IContentListItem_QuoteBlock_Fragment = (
  { __typename?: 'QuoteBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_QuoteBlock_Fragment': IContentData_QuoteBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_QuoteBlock_Fragment' };

type IContentListItem_StandardPage_Fragment = (
  { __typename?: 'StandardPage' }
  & { ' $fragmentRefs'?: { 'IContentData_StandardPage_Fragment': IContentData_StandardPage_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_StandardPage_Fragment' };

type IContentListItem_StartPage_Fragment = (
  { __typename?: 'StartPage' }
  & { ' $fragmentRefs'?: { 'IContentData_StartPage_Fragment': IContentData_StartPage_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_StartPage_Fragment' };

type IContentListItem_SysContentFolder_Fragment = (
  { __typename?: 'SysContentFolder' }
  & { ' $fragmentRefs'?: { 'IContentData_SysContentFolder_Fragment': IContentData_SysContentFolder_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_SysContentFolder_Fragment' };

type IContentListItem_TestimonialElement_Fragment = (
  { __typename?: 'TestimonialElement' }
  & { ' $fragmentRefs'?: { 'IContentData_TestimonialElement_Fragment': IContentData_TestimonialElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_TestimonialElement_Fragment' };

type IContentListItem_TextBlock_Fragment = (
  { __typename?: 'TextBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_TextBlock_Fragment' };

type IContentListItem_Video_Fragment = (
  { __typename?: 'Video' }
  & { ' $fragmentRefs'?: { 'IContentData_Video_Fragment': IContentData_Video_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_Video_Fragment' };

type IContentListItem_VideoElement_Fragment = (
  { __typename?: 'VideoElement' }
  & { ' $fragmentRefs'?: { 'IContentData_VideoElement_Fragment': IContentData_VideoElement_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_VideoElement_Fragment' };

type IContentListItem_VideoMedia_Fragment = (
  { __typename?: 'VideoMedia' }
  & { ' $fragmentRefs'?: { 'IContentData_VideoMedia_Fragment': IContentData_VideoMedia_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem_VideoMedia_Fragment' };

type IContentListItem__Component_Fragment = (
  { __typename?: '_Component' }
  & { ' $fragmentRefs'?: { 'IContentData__Component_Fragment': IContentData__Component_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Component_Fragment' };

type IContentListItem__Content_Fragment = (
  { __typename?: '_Content' }
  & { ' $fragmentRefs'?: { 'IContentData__Content_Fragment': IContentData__Content_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Content_Fragment' };

type IContentListItem__Experience_Fragment = (
  { __typename?: '_Experience' }
  & { ' $fragmentRefs'?: { 'IContentData__Experience_Fragment': IContentData__Experience_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Experience_Fragment' };

type IContentListItem__Folder_Fragment = (
  { __typename?: '_Folder' }
  & { ' $fragmentRefs'?: { 'IContentData__Folder_Fragment': IContentData__Folder_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Folder_Fragment' };

type IContentListItem__Image_Fragment = (
  { __typename?: '_Image' }
  & { ' $fragmentRefs'?: { 'IContentData__Image_Fragment': IContentData__Image_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Image_Fragment' };

type IContentListItem__Media_Fragment = (
  { __typename?: '_Media' }
  & { ' $fragmentRefs'?: { 'IContentData__Media_Fragment': IContentData__Media_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Media_Fragment' };

type IContentListItem__Page_Fragment = (
  { __typename?: '_Page' }
  & { ' $fragmentRefs'?: { 'IContentData__Page_Fragment': IContentData__Page_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Page_Fragment' };

type IContentListItem__Section_Fragment = (
  { __typename?: '_Section' }
  & { ' $fragmentRefs'?: { 'IContentData__Section_Fragment': IContentData__Section_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Section_Fragment' };

type IContentListItem__Video_Fragment = (
  { __typename?: '_Video' }
  & { ' $fragmentRefs'?: { 'IContentData__Video_Fragment': IContentData__Video_Fragment } }
) & { ' $fragmentName'?: 'IContentListItem__Video_Fragment' };

export type IContentListItemFragment = IContentListItem_ArticleListElement_Fragment | IContentListItem_BlankExperience_Fragment | IContentListItem_BlankSection_Fragment | IContentListItem_BlogListingBlock_Fragment | IContentListItem_BlogPostPage_Fragment | IContentListItem_ButtonBlock_Fragment | IContentListItem_CTAElement_Fragment | IContentListItem_CardBlock_Fragment | IContentListItem_CarouselBlock_Fragment | IContentListItem_ContentRecsBlock_Fragment | IContentListItem_ContentRecsElement_Fragment | IContentListItem_GenericMedia_Fragment | IContentListItem_HeadingElement_Fragment | IContentListItem_HeroBlock_Fragment | IContentListItem_HomePageHeroBlock_Fragment | IContentListItem_HtmlBlock_Fragment | IContentListItem_ImageElement_Fragment | IContentListItem_ImageMedia_Fragment | IContentListItem_LandingPage_Fragment | IContentListItem_LayoutContainerBlock_Fragment | IContentListItem_MegaMenuGroupBlock_Fragment | IContentListItem_MenuNavigationBlock_Fragment | IContentListItem_OdpEmbedBlock_Fragment | IContentListItem_PageSeoSettings_Fragment | IContentListItem_ParagraphElement_Fragment | IContentListItem_QuoteBlock_Fragment | IContentListItem_StandardPage_Fragment | IContentListItem_StartPage_Fragment | IContentListItem_SysContentFolder_Fragment | IContentListItem_TestimonialElement_Fragment | IContentListItem_TextBlock_Fragment | IContentListItem_Video_Fragment | IContentListItem_VideoElement_Fragment | IContentListItem_VideoMedia_Fragment | IContentListItem__Component_Fragment | IContentListItem__Content_Fragment | IContentListItem__Experience_Fragment | IContentListItem__Folder_Fragment | IContentListItem__Image_Fragment | IContentListItem__Media_Fragment | IContentListItem__Page_Fragment | IContentListItem__Section_Fragment | IContentListItem__Video_Fragment;

type ExperienceData_BlankExperience_Fragment = { __typename?: 'BlankExperience', composition?: (
    { __typename?: 'CompositionStructureNode' }
    & { ' $fragmentRefs'?: { 'CompositionData_CompositionStructureNode_Fragment': CompositionData_CompositionStructureNode_Fragment } }
  ) | null } & { ' $fragmentName'?: 'ExperienceData_BlankExperience_Fragment' };

type ExperienceData__Experience_Fragment = { __typename?: '_Experience', composition?: (
    { __typename?: 'CompositionStructureNode' }
    & { ' $fragmentRefs'?: { 'CompositionData_CompositionStructureNode_Fragment': CompositionData_CompositionStructureNode_Fragment } }
  ) | null } & { ' $fragmentName'?: 'ExperienceData__Experience_Fragment' };

export type ExperienceDataFragment = ExperienceData_BlankExperience_Fragment | ExperienceData__Experience_Fragment;

export type getContentByIdQueryVariables = Exact<{
  key: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<Locales> | Locales>;
  path?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
}>;


export type getContentByIdQuery = { __typename?: 'Query', content?: { __typename?: '_ContentOutput', total?: number | null, items?: Array<(
      { __typename?: 'ArticleListElement' }
      & { ' $fragmentRefs'?: { 'BlockData_ArticleListElement_Fragment': BlockData_ArticleListElement_Fragment;'PageData_ArticleListElement_Fragment': PageData_ArticleListElement_Fragment } }
    ) | (
      { __typename?: 'BlankExperience' }
      & { ' $fragmentRefs'?: { 'BlockData_BlankExperience_Fragment': BlockData_BlankExperience_Fragment;'PageData_BlankExperience_Fragment': PageData_BlankExperience_Fragment;'BlankExperienceDataFragment': BlankExperienceDataFragment } }
    ) | (
      { __typename?: 'BlankSection' }
      & { ' $fragmentRefs'?: { 'BlockData_BlankSection_Fragment': BlockData_BlankSection_Fragment;'PageData_BlankSection_Fragment': PageData_BlankSection_Fragment;'BlankSectionDataFragment': BlankSectionDataFragment } }
    ) | (
      { __typename?: 'BlogListingBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_BlogListingBlock_Fragment': BlockData_BlogListingBlock_Fragment;'PageData_BlogListingBlock_Fragment': PageData_BlogListingBlock_Fragment;'BlogListingBlockDataFragment': BlogListingBlockDataFragment } }
    ) | (
      { __typename?: 'BlogPostPage' }
      & { ' $fragmentRefs'?: { 'BlockData_BlogPostPage_Fragment': BlockData_BlogPostPage_Fragment;'PageData_BlogPostPage_Fragment': PageData_BlogPostPage_Fragment;'BlogPostPageDataFragment': BlogPostPageDataFragment } }
    ) | (
      { __typename?: 'ButtonBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_ButtonBlock_Fragment': BlockData_ButtonBlock_Fragment;'PageData_ButtonBlock_Fragment': PageData_ButtonBlock_Fragment;'ButtonBlockDataFragment': ButtonBlockDataFragment } }
    ) | (
      { __typename?: 'CTAElement' }
      & { ' $fragmentRefs'?: { 'BlockData_CTAElement_Fragment': BlockData_CTAElement_Fragment;'PageData_CTAElement_Fragment': PageData_CTAElement_Fragment } }
    ) | (
      { __typename?: 'CardBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_CardBlock_Fragment': BlockData_CardBlock_Fragment;'PageData_CardBlock_Fragment': PageData_CardBlock_Fragment;'CardBlockDataFragment': CardBlockDataFragment } }
    ) | (
      { __typename?: 'CarouselBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_CarouselBlock_Fragment': BlockData_CarouselBlock_Fragment;'PageData_CarouselBlock_Fragment': PageData_CarouselBlock_Fragment;'CarouselBlockDataFragment': CarouselBlockDataFragment } }
    ) | (
      { __typename?: 'ContentRecsBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_ContentRecsBlock_Fragment': BlockData_ContentRecsBlock_Fragment;'PageData_ContentRecsBlock_Fragment': PageData_ContentRecsBlock_Fragment;'ContentRecsBlockDataFragment': ContentRecsBlockDataFragment } }
    ) | (
      { __typename?: 'ContentRecsElement' }
      & { ' $fragmentRefs'?: { 'BlockData_ContentRecsElement_Fragment': BlockData_ContentRecsElement_Fragment;'PageData_ContentRecsElement_Fragment': PageData_ContentRecsElement_Fragment } }
    ) | (
      { __typename?: 'GenericMedia' }
      & { ' $fragmentRefs'?: { 'BlockData_GenericMedia_Fragment': BlockData_GenericMedia_Fragment;'PageData_GenericMedia_Fragment': PageData_GenericMedia_Fragment } }
    ) | (
      { __typename?: 'HeadingElement' }
      & { ' $fragmentRefs'?: { 'BlockData_HeadingElement_Fragment': BlockData_HeadingElement_Fragment;'PageData_HeadingElement_Fragment': PageData_HeadingElement_Fragment } }
    ) | (
      { __typename?: 'HeroBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_HeroBlock_Fragment': BlockData_HeroBlock_Fragment;'PageData_HeroBlock_Fragment': PageData_HeroBlock_Fragment;'HeroBlockDataFragment': HeroBlockDataFragment } }
    ) | (
      { __typename?: 'HomePageHeroBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_HomePageHeroBlock_Fragment': BlockData_HomePageHeroBlock_Fragment;'PageData_HomePageHeroBlock_Fragment': PageData_HomePageHeroBlock_Fragment;'HomePageHeroBlockDataFragment': HomePageHeroBlockDataFragment } }
    ) | (
      { __typename?: 'HtmlBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_HtmlBlock_Fragment': BlockData_HtmlBlock_Fragment;'PageData_HtmlBlock_Fragment': PageData_HtmlBlock_Fragment } }
    ) | (
      { __typename?: 'ImageElement' }
      & { ' $fragmentRefs'?: { 'BlockData_ImageElement_Fragment': BlockData_ImageElement_Fragment;'PageData_ImageElement_Fragment': PageData_ImageElement_Fragment } }
    ) | (
      { __typename?: 'ImageMedia' }
      & { ' $fragmentRefs'?: { 'BlockData_ImageMedia_Fragment': BlockData_ImageMedia_Fragment;'PageData_ImageMedia_Fragment': PageData_ImageMedia_Fragment } }
    ) | (
      { __typename?: 'LandingPage' }
      & { ' $fragmentRefs'?: { 'BlockData_LandingPage_Fragment': BlockData_LandingPage_Fragment;'PageData_LandingPage_Fragment': PageData_LandingPage_Fragment;'LandingPageDataFragment': LandingPageDataFragment } }
    ) | (
      { __typename?: 'LayoutContainerBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_LayoutContainerBlock_Fragment': BlockData_LayoutContainerBlock_Fragment;'PageData_LayoutContainerBlock_Fragment': PageData_LayoutContainerBlock_Fragment;'LayoutContainerBlockDataFragment': LayoutContainerBlockDataFragment } }
    ) | (
      { __typename?: 'MegaMenuGroupBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_MegaMenuGroupBlock_Fragment': BlockData_MegaMenuGroupBlock_Fragment;'PageData_MegaMenuGroupBlock_Fragment': PageData_MegaMenuGroupBlock_Fragment } }
    ) | (
      { __typename?: 'MenuNavigationBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_MenuNavigationBlock_Fragment': BlockData_MenuNavigationBlock_Fragment;'PageData_MenuNavigationBlock_Fragment': PageData_MenuNavigationBlock_Fragment } }
    ) | (
      { __typename?: 'OdpEmbedBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_OdpEmbedBlock_Fragment': BlockData_OdpEmbedBlock_Fragment;'PageData_OdpEmbedBlock_Fragment': PageData_OdpEmbedBlock_Fragment;'OdpEmbedBlockDataFragment': OdpEmbedBlockDataFragment } }
    ) | (
      { __typename?: 'PageSeoSettings' }
      & { ' $fragmentRefs'?: { 'BlockData_PageSeoSettings_Fragment': BlockData_PageSeoSettings_Fragment;'PageData_PageSeoSettings_Fragment': PageData_PageSeoSettings_Fragment } }
    ) | (
      { __typename?: 'ParagraphElement' }
      & { ' $fragmentRefs'?: { 'BlockData_ParagraphElement_Fragment': BlockData_ParagraphElement_Fragment;'PageData_ParagraphElement_Fragment': PageData_ParagraphElement_Fragment } }
    ) | (
      { __typename?: 'QuoteBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_QuoteBlock_Fragment': BlockData_QuoteBlock_Fragment;'PageData_QuoteBlock_Fragment': PageData_QuoteBlock_Fragment;'QuoteBlockDataFragment': QuoteBlockDataFragment } }
    ) | (
      { __typename?: 'StandardPage' }
      & { ' $fragmentRefs'?: { 'BlockData_StandardPage_Fragment': BlockData_StandardPage_Fragment;'PageData_StandardPage_Fragment': PageData_StandardPage_Fragment;'StandardPageDataFragment': StandardPageDataFragment } }
    ) | (
      { __typename?: 'StartPage' }
      & { ' $fragmentRefs'?: { 'BlockData_StartPage_Fragment': BlockData_StartPage_Fragment;'PageData_StartPage_Fragment': PageData_StartPage_Fragment;'StartPageDataFragment': StartPageDataFragment } }
    ) | (
      { __typename?: 'SysContentFolder' }
      & { ' $fragmentRefs'?: { 'BlockData_SysContentFolder_Fragment': BlockData_SysContentFolder_Fragment;'PageData_SysContentFolder_Fragment': PageData_SysContentFolder_Fragment } }
    ) | (
      { __typename?: 'TestimonialElement' }
      & { ' $fragmentRefs'?: { 'BlockData_TestimonialElement_Fragment': BlockData_TestimonialElement_Fragment;'PageData_TestimonialElement_Fragment': PageData_TestimonialElement_Fragment } }
    ) | (
      { __typename?: 'TextBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_TextBlock_Fragment': BlockData_TextBlock_Fragment;'PageData_TextBlock_Fragment': PageData_TextBlock_Fragment;'TextBlockDataFragment': TextBlockDataFragment } }
    ) | (
      { __typename?: 'Video' }
      & { ' $fragmentRefs'?: { 'BlockData_Video_Fragment': BlockData_Video_Fragment;'PageData_Video_Fragment': PageData_Video_Fragment } }
    ) | (
      { __typename?: 'VideoElement' }
      & { ' $fragmentRefs'?: { 'BlockData_VideoElement_Fragment': BlockData_VideoElement_Fragment;'PageData_VideoElement_Fragment': PageData_VideoElement_Fragment } }
    ) | (
      { __typename?: 'VideoMedia' }
      & { ' $fragmentRefs'?: { 'BlockData_VideoMedia_Fragment': BlockData_VideoMedia_Fragment;'PageData_VideoMedia_Fragment': PageData_VideoMedia_Fragment } }
    ) | (
      { __typename?: '_Component' }
      & { ' $fragmentRefs'?: { 'BlockData__Component_Fragment': BlockData__Component_Fragment;'PageData__Component_Fragment': PageData__Component_Fragment } }
    ) | (
      { __typename?: '_Content' }
      & { ' $fragmentRefs'?: { 'BlockData__Content_Fragment': BlockData__Content_Fragment;'PageData__Content_Fragment': PageData__Content_Fragment } }
    ) | (
      { __typename?: '_Experience' }
      & { ' $fragmentRefs'?: { 'BlockData__Experience_Fragment': BlockData__Experience_Fragment;'PageData__Experience_Fragment': PageData__Experience_Fragment } }
    ) | (
      { __typename?: '_Folder' }
      & { ' $fragmentRefs'?: { 'BlockData__Folder_Fragment': BlockData__Folder_Fragment;'PageData__Folder_Fragment': PageData__Folder_Fragment } }
    ) | (
      { __typename?: '_Image' }
      & { ' $fragmentRefs'?: { 'BlockData__Image_Fragment': BlockData__Image_Fragment;'PageData__Image_Fragment': PageData__Image_Fragment } }
    ) | (
      { __typename?: '_Media' }
      & { ' $fragmentRefs'?: { 'BlockData__Media_Fragment': BlockData__Media_Fragment;'PageData__Media_Fragment': PageData__Media_Fragment } }
    ) | (
      { __typename?: '_Page' }
      & { ' $fragmentRefs'?: { 'BlockData__Page_Fragment': BlockData__Page_Fragment;'PageData__Page_Fragment': PageData__Page_Fragment } }
    ) | (
      { __typename?: '_Section' }
      & { ' $fragmentRefs'?: { 'BlockData__Section_Fragment': BlockData__Section_Fragment;'PageData__Section_Fragment': PageData__Section_Fragment } }
    ) | (
      { __typename?: '_Video' }
      & { ' $fragmentRefs'?: { 'BlockData__Video_Fragment': BlockData__Video_Fragment;'PageData__Video_Fragment': PageData__Video_Fragment } }
    ) | null> | null } | null };

export type getContentByPathQueryVariables = Exact<{
  path: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<Locales> | Locales>;
  domain?: InputMaybe<Scalars['String']['input']>;
}>;


export type getContentByPathQuery = { __typename?: 'Query', content?: { __typename?: '_ContentOutput', total?: number | null, items?: Array<(
      { __typename?: 'ArticleListElement' }
      & { ' $fragmentRefs'?: { 'PageData_ArticleListElement_Fragment': PageData_ArticleListElement_Fragment } }
    ) | (
      { __typename?: 'BlankExperience' }
      & { ' $fragmentRefs'?: { 'PageData_BlankExperience_Fragment': PageData_BlankExperience_Fragment;'BlankExperienceDataFragment': BlankExperienceDataFragment } }
    ) | (
      { __typename?: 'BlankSection' }
      & { ' $fragmentRefs'?: { 'PageData_BlankSection_Fragment': PageData_BlankSection_Fragment } }
    ) | (
      { __typename?: 'BlogListingBlock' }
      & { ' $fragmentRefs'?: { 'PageData_BlogListingBlock_Fragment': PageData_BlogListingBlock_Fragment } }
    ) | (
      { __typename?: 'BlogPostPage' }
      & { ' $fragmentRefs'?: { 'PageData_BlogPostPage_Fragment': PageData_BlogPostPage_Fragment;'BlogPostPageDataFragment': BlogPostPageDataFragment } }
    ) | (
      { __typename?: 'ButtonBlock' }
      & { ' $fragmentRefs'?: { 'PageData_ButtonBlock_Fragment': PageData_ButtonBlock_Fragment } }
    ) | (
      { __typename?: 'CTAElement' }
      & { ' $fragmentRefs'?: { 'PageData_CTAElement_Fragment': PageData_CTAElement_Fragment } }
    ) | (
      { __typename?: 'CardBlock' }
      & { ' $fragmentRefs'?: { 'PageData_CardBlock_Fragment': PageData_CardBlock_Fragment } }
    ) | (
      { __typename?: 'CarouselBlock' }
      & { ' $fragmentRefs'?: { 'PageData_CarouselBlock_Fragment': PageData_CarouselBlock_Fragment } }
    ) | (
      { __typename?: 'ContentRecsBlock' }
      & { ' $fragmentRefs'?: { 'PageData_ContentRecsBlock_Fragment': PageData_ContentRecsBlock_Fragment } }
    ) | (
      { __typename?: 'ContentRecsElement' }
      & { ' $fragmentRefs'?: { 'PageData_ContentRecsElement_Fragment': PageData_ContentRecsElement_Fragment } }
    ) | (
      { __typename?: 'GenericMedia' }
      & { ' $fragmentRefs'?: { 'PageData_GenericMedia_Fragment': PageData_GenericMedia_Fragment } }
    ) | (
      { __typename?: 'HeadingElement' }
      & { ' $fragmentRefs'?: { 'PageData_HeadingElement_Fragment': PageData_HeadingElement_Fragment } }
    ) | (
      { __typename?: 'HeroBlock' }
      & { ' $fragmentRefs'?: { 'PageData_HeroBlock_Fragment': PageData_HeroBlock_Fragment } }
    ) | (
      { __typename?: 'HomePageHeroBlock' }
      & { ' $fragmentRefs'?: { 'PageData_HomePageHeroBlock_Fragment': PageData_HomePageHeroBlock_Fragment } }
    ) | (
      { __typename?: 'HtmlBlock' }
      & { ' $fragmentRefs'?: { 'PageData_HtmlBlock_Fragment': PageData_HtmlBlock_Fragment } }
    ) | (
      { __typename?: 'ImageElement' }
      & { ' $fragmentRefs'?: { 'PageData_ImageElement_Fragment': PageData_ImageElement_Fragment } }
    ) | (
      { __typename?: 'ImageMedia' }
      & { ' $fragmentRefs'?: { 'PageData_ImageMedia_Fragment': PageData_ImageMedia_Fragment } }
    ) | (
      { __typename?: 'LandingPage' }
      & { ' $fragmentRefs'?: { 'PageData_LandingPage_Fragment': PageData_LandingPage_Fragment;'LandingPageDataFragment': LandingPageDataFragment } }
    ) | (
      { __typename?: 'LayoutContainerBlock' }
      & { ' $fragmentRefs'?: { 'PageData_LayoutContainerBlock_Fragment': PageData_LayoutContainerBlock_Fragment } }
    ) | (
      { __typename?: 'MegaMenuGroupBlock' }
      & { ' $fragmentRefs'?: { 'PageData_MegaMenuGroupBlock_Fragment': PageData_MegaMenuGroupBlock_Fragment } }
    ) | (
      { __typename?: 'MenuNavigationBlock' }
      & { ' $fragmentRefs'?: { 'PageData_MenuNavigationBlock_Fragment': PageData_MenuNavigationBlock_Fragment } }
    ) | (
      { __typename?: 'OdpEmbedBlock' }
      & { ' $fragmentRefs'?: { 'PageData_OdpEmbedBlock_Fragment': PageData_OdpEmbedBlock_Fragment } }
    ) | (
      { __typename?: 'PageSeoSettings' }
      & { ' $fragmentRefs'?: { 'PageData_PageSeoSettings_Fragment': PageData_PageSeoSettings_Fragment } }
    ) | (
      { __typename?: 'ParagraphElement' }
      & { ' $fragmentRefs'?: { 'PageData_ParagraphElement_Fragment': PageData_ParagraphElement_Fragment } }
    ) | (
      { __typename?: 'QuoteBlock' }
      & { ' $fragmentRefs'?: { 'PageData_QuoteBlock_Fragment': PageData_QuoteBlock_Fragment } }
    ) | (
      { __typename?: 'StandardPage' }
      & { ' $fragmentRefs'?: { 'PageData_StandardPage_Fragment': PageData_StandardPage_Fragment;'StandardPageDataFragment': StandardPageDataFragment } }
    ) | (
      { __typename?: 'StartPage' }
      & { ' $fragmentRefs'?: { 'PageData_StartPage_Fragment': PageData_StartPage_Fragment;'StartPageDataFragment': StartPageDataFragment } }
    ) | (
      { __typename?: 'SysContentFolder' }
      & { ' $fragmentRefs'?: { 'PageData_SysContentFolder_Fragment': PageData_SysContentFolder_Fragment } }
    ) | (
      { __typename?: 'TestimonialElement' }
      & { ' $fragmentRefs'?: { 'PageData_TestimonialElement_Fragment': PageData_TestimonialElement_Fragment } }
    ) | (
      { __typename?: 'TextBlock' }
      & { ' $fragmentRefs'?: { 'PageData_TextBlock_Fragment': PageData_TextBlock_Fragment } }
    ) | (
      { __typename?: 'Video' }
      & { ' $fragmentRefs'?: { 'PageData_Video_Fragment': PageData_Video_Fragment } }
    ) | (
      { __typename?: 'VideoElement' }
      & { ' $fragmentRefs'?: { 'PageData_VideoElement_Fragment': PageData_VideoElement_Fragment } }
    ) | (
      { __typename?: 'VideoMedia' }
      & { ' $fragmentRefs'?: { 'PageData_VideoMedia_Fragment': PageData_VideoMedia_Fragment } }
    ) | (
      { __typename?: '_Component' }
      & { ' $fragmentRefs'?: { 'PageData__Component_Fragment': PageData__Component_Fragment } }
    ) | (
      { __typename?: '_Content' }
      & { ' $fragmentRefs'?: { 'PageData__Content_Fragment': PageData__Content_Fragment } }
    ) | (
      { __typename?: '_Experience' }
      & { ' $fragmentRefs'?: { 'PageData__Experience_Fragment': PageData__Experience_Fragment } }
    ) | (
      { __typename?: '_Folder' }
      & { ' $fragmentRefs'?: { 'PageData__Folder_Fragment': PageData__Folder_Fragment } }
    ) | (
      { __typename?: '_Image' }
      & { ' $fragmentRefs'?: { 'PageData__Image_Fragment': PageData__Image_Fragment } }
    ) | (
      { __typename?: '_Media' }
      & { ' $fragmentRefs'?: { 'PageData__Media_Fragment': PageData__Media_Fragment } }
    ) | (
      { __typename?: '_Page' }
      & { ' $fragmentRefs'?: { 'PageData__Page_Fragment': PageData__Page_Fragment } }
    ) | (
      { __typename?: '_Section' }
      & { ' $fragmentRefs'?: { 'PageData__Section_Fragment': PageData__Section_Fragment } }
    ) | (
      { __typename?: '_Video' }
      & { ' $fragmentRefs'?: { 'PageData__Video_Fragment': PageData__Video_Fragment } }
    ) | null> | null } | null };

export type getContentTypeQueryVariables = Exact<{
  key: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<Locales> | Locales>;
  path?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
}>;


export type getContentTypeQuery = { __typename?: 'Query', content?: { __typename?: '_ContentOutput', total?: number | null, items?: Array<{ __typename?: 'ArticleListElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'BlankExperience', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'BlankSection', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'BlogListingBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'BlogPostPage', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ButtonBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'CTAElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'CardBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'CarouselBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ContentRecsBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ContentRecsElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'GenericMedia', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'HeadingElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'HeroBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'HomePageHeroBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'HtmlBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ImageElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ImageMedia', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'LandingPage', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'LayoutContainerBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'MegaMenuGroupBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'MenuNavigationBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'OdpEmbedBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'PageSeoSettings', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'ParagraphElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'QuoteBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'StandardPage', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'StartPage', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'SysContentFolder', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'TestimonialElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'TextBlock', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'Video', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'VideoElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'VideoMedia', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Component', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Content', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Experience', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Folder', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Image', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Media', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Page', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Section', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Video', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | null> | null } | null };

export const LinkDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<LinkDataFragment, unknown>;
export const ReferenceDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<ReferenceDataFragment, unknown>;
export const PageSeoSettingsPropertyDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageSeoSettingsPropertyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageSeoSettingsProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"MetaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"MetaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"SharingImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"GraphType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<PageSeoSettingsPropertyDataFragment, unknown>;
export const IContentInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<IContentInfoFragment, unknown>;
export const IElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<IElementDataFragment, unknown>;
export const ElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<ElementDataFragment, unknown>;
export const ArticleListElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleListElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleListElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articleListCount"}}]}}]} as unknown as DocumentNode<ArticleListElementDataFragment, unknown>;
export const CTAElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CTAElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"cta_text"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"cta_link"},"name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<CTAElementDataFragment, unknown>;
export const ContentRecsElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentRecsElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentRecsElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ElementDeliveryApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ElementRecommendationCount"}}]}}]} as unknown as DocumentNode<ContentRecsElementDataFragment, unknown>;
export const HeadingElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeadingElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeadingElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headingText"}}]}}]} as unknown as DocumentNode<HeadingElementDataFragment, unknown>;
export const ImageElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<ImageElementDataFragment, unknown>;
export const ParagraphElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ParagraphElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}}]} as unknown as DocumentNode<ParagraphElementDataFragment, unknown>;
export const TestimonialElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"customerLocation"}},{"kind":"Field","name":{"kind":"Name","value":"customerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"referenceTitle"}},{"kind":"Field","name":{"kind":"Name","value":"referenceText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<TestimonialElementDataFragment, unknown>;
export const VideoElementDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"placeholder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<VideoElementDataFragment, unknown>;
export const CompositionDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}},{"kind":"Field","alias":{"kind":"Name","value":"layoutType"},"name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","alias":{"kind":"Name","value":"template"},"name":{"kind":"Name","value":"displayTemplateKey"}},{"kind":"Field","alias":{"kind":"Name","value":"settings"},"name":{"kind":"Name","value":"displaySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"recursive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"depth"},"value":{"kind":"IntValue","value":"10"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionComponentNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"component"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleListElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentRecsElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeadingElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ParagraphElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoElementData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleListElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleListElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articleListCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CTAElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"cta_text"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"cta_link"},"name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentRecsElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentRecsElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ElementDeliveryApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ElementRecommendationCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeadingElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeadingElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headingText"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ParagraphElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"customerLocation"}},{"kind":"Field","name":{"kind":"Name","value":"customerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"referenceTitle"}},{"kind":"Field","name":{"kind":"Name","value":"referenceText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"placeholder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}}]} as unknown as DocumentNode<CompositionDataFragment, unknown>;
export const ExperienceDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleListElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleListElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articleListCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CTAElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"cta_text"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"cta_link"},"name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentRecsElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentRecsElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ElementDeliveryApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ElementRecommendationCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeadingElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeadingElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headingText"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ParagraphElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"customerLocation"}},{"kind":"Field","name":{"kind":"Name","value":"customerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"referenceTitle"}},{"kind":"Field","name":{"kind":"Name","value":"referenceText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"placeholder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}},{"kind":"Field","alias":{"kind":"Name","value":"layoutType"},"name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","alias":{"kind":"Name","value":"template"},"name":{"kind":"Name","value":"displayTemplateKey"}},{"kind":"Field","alias":{"kind":"Name","value":"settings"},"name":{"kind":"Name","value":"displaySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"recursive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"depth"},"value":{"kind":"IntValue","value":"10"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionComponentNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"component"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleListElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentRecsElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeadingElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ParagraphElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoElementData"}}]}}]}}]}}]} as unknown as DocumentNode<ExperienceDataFragment, unknown>;
export const BlankExperienceDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlankExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlankExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BlankExperienceSeoSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageSeoSettingsPropertyData"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleListElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleListElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articleListCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CTAElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"cta_text"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"cta_link"},"name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentRecsElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentRecsElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ElementDeliveryApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ElementRecommendationCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeadingElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeadingElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headingText"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ParagraphElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"customerLocation"}},{"kind":"Field","name":{"kind":"Name","value":"customerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"referenceTitle"}},{"kind":"Field","name":{"kind":"Name","value":"referenceText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"placeholder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}},{"kind":"Field","alias":{"kind":"Name","value":"layoutType"},"name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","alias":{"kind":"Name","value":"template"},"name":{"kind":"Name","value":"displayTemplateKey"}},{"kind":"Field","alias":{"kind":"Name","value":"settings"},"name":{"kind":"Name","value":"displaySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"recursive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"depth"},"value":{"kind":"IntValue","value":"10"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionComponentNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"component"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleListElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentRecsElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeadingElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ParagraphElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoElementData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageSeoSettingsPropertyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageSeoSettingsProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"MetaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"MetaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"SharingImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"GraphType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionData"}}]}}]}}]} as unknown as DocumentNode<BlankExperienceDataFragment, unknown>;
export const BlogPostPageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogPostPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogPostPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"blogTitle"},"name":{"kind":"Name","value":"Heading"}},{"kind":"Field","alias":{"kind":"Name","value":"blogSubtitle"},"name":{"kind":"Name","value":"ArticleSubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"blogImage"},"name":{"kind":"Name","value":"BlogPostPromoImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"blogBody"},"name":{"kind":"Name","value":"BlogPostBody"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"blogAuthor"},"name":{"kind":"Name","value":"ArticleAuthor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<BlogPostPageDataFragment, unknown>;
export const BlogPostPageSearchResultFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogPostPageSearchResult"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogPostPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"Heading"}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"BlogPostPromoImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"author"},"name":{"kind":"Name","value":"ArticleAuthor"}},{"kind":"Field","alias":{"kind":"Name","value":"seodata"},"name":{"kind":"Name","value":"SeoSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"MetaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"MetaDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"published"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<BlogPostPageSearchResultFragment, unknown>;
export const IContentDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<IContentDataFragment, unknown>;
export const BlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<BlockDataFragment, unknown>;
export const BlogListingBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogListingBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogListingBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"showFilters"},"name":{"kind":"Name","value":"BlogListingShowFilters"}},{"kind":"Field","alias":{"kind":"Name","value":"selectedPageSize"},"name":{"kind":"Name","value":"BlogListingItemCount"}}]}}]} as unknown as DocumentNode<BlogListingBlockDataFragment, unknown>;
export const ButtonBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"className"},"name":{"kind":"Name","value":"ButtonClass"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonType"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonVariant"},"name":{"kind":"Name","value":"ButtonVariant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<ButtonBlockDataFragment, unknown>;
export const CardBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"cardButton"},"name":{"kind":"Name","value":"CardButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"className"},"name":{"kind":"Name","value":"ButtonClass"}},{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonType"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"buttonVariant"},"name":{"kind":"Name","value":"ButtonVariant"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"cardColor"},"name":{"kind":"Name","value":"CardColor"}},{"kind":"Field","alias":{"kind":"Name","value":"cardDescription"},"name":{"kind":"Name","value":"CardDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"cardHeading"},"name":{"kind":"Name","value":"CardHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"cardIcon"},"name":{"kind":"Name","value":"CardIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"cardImage"},"name":{"kind":"Name","value":"CardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"cardSubheading"},"name":{"kind":"Name","value":"CardSubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"cardImageLayout"},"name":{"kind":"Name","value":"ImageLayout"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<CardBlockDataFragment, unknown>;
export const IContentListItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<IContentListItemFragment, unknown>;
export const CarouselBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CarouselBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CarouselBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CarouselItemsContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}}]} as unknown as DocumentNode<CarouselBlockDataFragment, unknown>;
export const ContentRecsBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentRecsBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentRecsBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BlockDeliveryApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"BlockRecommendationCount"}}]}}]} as unknown as DocumentNode<ContentRecsBlockDataFragment, unknown>;
export const ButtonBlockPropertyDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockPropertyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"className"},"name":{"kind":"Name","value":"ButtonClass"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonType"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonVariant"},"name":{"kind":"Name","value":"ButtonVariant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<ButtonBlockPropertyDataFragment, unknown>;
export const HeroBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heroImage"},"name":{"kind":"Name","value":"HeroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"eyebrow"},"name":{"kind":"Name","value":"Eyebrow"}},{"kind":"Field","alias":{"kind":"Name","value":"heroHeading"},"name":{"kind":"Name","value":"Heading"}},{"kind":"Field","alias":{"kind":"Name","value":"heroSubheading"},"name":{"kind":"Name","value":"SubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"heroDescription"},"name":{"kind":"Name","value":"Description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"heroColor"},"name":{"kind":"Name","value":"HeroColor"}},{"kind":"Field","alias":{"kind":"Name","value":"heroButton"},"name":{"kind":"Name","value":"HeroButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockPropertyData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockPropertyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"className"},"name":{"kind":"Name","value":"ButtonClass"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonType"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonVariant"},"name":{"kind":"Name","value":"ButtonVariant"}}]}}]} as unknown as DocumentNode<HeroBlockDataFragment, unknown>;
export const HomePageHeroBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HomePageHeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomePageHeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"homeHeroHeading"},"name":{"kind":"Name","value":"HomeHeroBlockHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"homeHeroSubheading"},"name":{"kind":"Name","value":"HomeHeroBlockSubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"leftImage"},"name":{"kind":"Name","value":"HomeHeroLeftImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"rightImage"},"name":{"kind":"Name","value":"HomeHeroRightImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"homeHeroButton"},"name":{"kind":"Name","value":"HomeHeroButtonBlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockPropertyData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockPropertyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"className"},"name":{"kind":"Name","value":"ButtonClass"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonType"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonVariant"},"name":{"kind":"Name","value":"ButtonVariant"}}]}}]} as unknown as DocumentNode<HomePageHeroBlockDataFragment, unknown>;
export const OdpEmbedBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OdpEmbedBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OdpEmbedBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ContentId"}}]}}]} as unknown as DocumentNode<OdpEmbedBlockDataFragment, unknown>;
export const QuoteBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuoteBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"quote"},"name":{"kind":"Name","value":"QuoteText"}},{"kind":"Field","alias":{"kind":"Name","value":"color"},"name":{"kind":"Name","value":"QuoteColor"}},{"kind":"Field","alias":{"kind":"Name","value":"active"},"name":{"kind":"Name","value":"QuoteActive"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"QuoteProfileName"}},{"kind":"Field","alias":{"kind":"Name","value":"profilePicture"},"name":{"kind":"Name","value":"QuoteProfilePicture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"location"},"name":{"kind":"Name","value":"QuoteProfileLocation"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<QuoteBlockDataFragment, unknown>;
export const TextBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"overline"},"name":{"kind":"Name","value":"TextBlockOverline"}},{"kind":"Field","alias":{"kind":"Name","value":"headingSize"},"name":{"kind":"Name","value":"TextBlockHeadingSize"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"TextBlockHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"TextBlockDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"center"},"name":{"kind":"Name","value":"TextCenter"}},{"kind":"Field","alias":{"kind":"Name","value":"width"},"name":{"kind":"Name","value":"TextBlockWidth"}},{"kind":"Field","alias":{"kind":"Name","value":"className"},"name":{"kind":"Name","value":"TextClassName"}}]}}]} as unknown as DocumentNode<TextBlockDataFragment, unknown>;
export const BlankSectionDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlankSectionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlankSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}}]} as unknown as DocumentNode<BlankSectionDataFragment, unknown>;
export const LayoutContainerBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayoutContainerBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutContainerBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"columns"},"name":{"kind":"Name","value":"ColumnsCount"}},{"kind":"Field","alias":{"kind":"Name","value":"gap"},"name":{"kind":"Name","value":"GapSize"}},{"kind":"Field","name":{"kind":"Name","value":"LayoutContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListingBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CarouselBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentRecsBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HomePageHeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayoutContainerBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OdpEmbedBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankSectionData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"containerColor"},"name":{"kind":"Name","value":"ContainerBackgroundColor"}},{"kind":"Field","alias":{"kind":"Name","value":"backgroundImage"},"name":{"kind":"Name","value":"ContainerBackgroundImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"marginTop"},"name":{"kind":"Name","value":"ContainerMarginTop"}},{"kind":"Field","alias":{"kind":"Name","value":"marginBottom"},"name":{"kind":"Name","value":"ContainerMarginBottom"}},{"kind":"Field","alias":{"kind":"Name","value":"paddingBottom"},"name":{"kind":"Name","value":"ContainerPaddingBottom"}},{"kind":"Field","alias":{"kind":"Name","value":"paddingTop"},"name":{"kind":"Name","value":"ContainerPaddingTop"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockPropertyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"className"},"name":{"kind":"Name","value":"ButtonClass"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonType"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonVariant"},"name":{"kind":"Name","value":"ButtonVariant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogListingBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogListingBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"showFilters"},"name":{"kind":"Name","value":"BlogListingShowFilters"}},{"kind":"Field","alias":{"kind":"Name","value":"selectedPageSize"},"name":{"kind":"Name","value":"BlogListingItemCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"className"},"name":{"kind":"Name","value":"ButtonClass"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonType"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonVariant"},"name":{"kind":"Name","value":"ButtonVariant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"cardButton"},"name":{"kind":"Name","value":"CardButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"className"},"name":{"kind":"Name","value":"ButtonClass"}},{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonType"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"buttonVariant"},"name":{"kind":"Name","value":"ButtonVariant"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"cardColor"},"name":{"kind":"Name","value":"CardColor"}},{"kind":"Field","alias":{"kind":"Name","value":"cardDescription"},"name":{"kind":"Name","value":"CardDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"cardHeading"},"name":{"kind":"Name","value":"CardHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"cardIcon"},"name":{"kind":"Name","value":"CardIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"cardImage"},"name":{"kind":"Name","value":"CardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"cardSubheading"},"name":{"kind":"Name","value":"CardSubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"cardImageLayout"},"name":{"kind":"Name","value":"ImageLayout"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CarouselBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CarouselBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CarouselItemsContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentRecsBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentRecsBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BlockDeliveryApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"BlockRecommendationCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heroImage"},"name":{"kind":"Name","value":"HeroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"eyebrow"},"name":{"kind":"Name","value":"Eyebrow"}},{"kind":"Field","alias":{"kind":"Name","value":"heroHeading"},"name":{"kind":"Name","value":"Heading"}},{"kind":"Field","alias":{"kind":"Name","value":"heroSubheading"},"name":{"kind":"Name","value":"SubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"heroDescription"},"name":{"kind":"Name","value":"Description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"heroColor"},"name":{"kind":"Name","value":"HeroColor"}},{"kind":"Field","alias":{"kind":"Name","value":"heroButton"},"name":{"kind":"Name","value":"HeroButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockPropertyData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HomePageHeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomePageHeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"homeHeroHeading"},"name":{"kind":"Name","value":"HomeHeroBlockHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"homeHeroSubheading"},"name":{"kind":"Name","value":"HomeHeroBlockSubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"leftImage"},"name":{"kind":"Name","value":"HomeHeroLeftImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"rightImage"},"name":{"kind":"Name","value":"HomeHeroRightImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"homeHeroButton"},"name":{"kind":"Name","value":"HomeHeroButtonBlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockPropertyData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OdpEmbedBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OdpEmbedBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ContentId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuoteBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"quote"},"name":{"kind":"Name","value":"QuoteText"}},{"kind":"Field","alias":{"kind":"Name","value":"color"},"name":{"kind":"Name","value":"QuoteColor"}},{"kind":"Field","alias":{"kind":"Name","value":"active"},"name":{"kind":"Name","value":"QuoteActive"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"QuoteProfileName"}},{"kind":"Field","alias":{"kind":"Name","value":"profilePicture"},"name":{"kind":"Name","value":"QuoteProfilePicture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"location"},"name":{"kind":"Name","value":"QuoteProfileLocation"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"overline"},"name":{"kind":"Name","value":"TextBlockOverline"}},{"kind":"Field","alias":{"kind":"Name","value":"headingSize"},"name":{"kind":"Name","value":"TextBlockHeadingSize"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"TextBlockHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"TextBlockDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"center"},"name":{"kind":"Name","value":"TextCenter"}},{"kind":"Field","alias":{"kind":"Name","value":"width"},"name":{"kind":"Name","value":"TextBlockWidth"}},{"kind":"Field","alias":{"kind":"Name","value":"className"},"name":{"kind":"Name","value":"TextClassName"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlankSectionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlankSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayoutContainerBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutContainerBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"columns"},"name":{"kind":"Name","value":"ColumnsCount"}},{"kind":"Field","alias":{"kind":"Name","value":"gap"},"name":{"kind":"Name","value":"GapSize"}},{"kind":"Field","name":{"kind":"Name","value":"LayoutContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListingBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CarouselBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentRecsBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HomePageHeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayoutContainerBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OdpEmbedBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankSectionData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"containerColor"},"name":{"kind":"Name","value":"ContainerBackgroundColor"}},{"kind":"Field","alias":{"kind":"Name","value":"backgroundImage"},"name":{"kind":"Name","value":"ContainerBackgroundImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"marginTop"},"name":{"kind":"Name","value":"ContainerMarginTop"}},{"kind":"Field","alias":{"kind":"Name","value":"marginBottom"},"name":{"kind":"Name","value":"ContainerMarginBottom"}},{"kind":"Field","alias":{"kind":"Name","value":"paddingBottom"},"name":{"kind":"Name","value":"ContainerPaddingBottom"}},{"kind":"Field","alias":{"kind":"Name","value":"paddingTop"},"name":{"kind":"Name","value":"ContainerPaddingTop"}}]}}]} as unknown as DocumentNode<LayoutContainerBlockDataFragment, unknown>;
export const LandingPageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LandingPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LandingPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"TopContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListingBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CarouselBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentRecsBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HomePageHeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayoutContainerBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OdpEmbedBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankSectionData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"MainContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListingBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CarouselBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentRecsBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HomePageHeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayoutContainerBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OdpEmbedBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankSectionData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockPropertyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"className"},"name":{"kind":"Name","value":"ButtonClass"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonType"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonVariant"},"name":{"kind":"Name","value":"ButtonVariant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogListingBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogListingBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"showFilters"},"name":{"kind":"Name","value":"BlogListingShowFilters"}},{"kind":"Field","alias":{"kind":"Name","value":"selectedPageSize"},"name":{"kind":"Name","value":"BlogListingItemCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"className"},"name":{"kind":"Name","value":"ButtonClass"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonType"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonVariant"},"name":{"kind":"Name","value":"ButtonVariant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"cardButton"},"name":{"kind":"Name","value":"CardButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"className"},"name":{"kind":"Name","value":"ButtonClass"}},{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonType"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"buttonVariant"},"name":{"kind":"Name","value":"ButtonVariant"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"cardColor"},"name":{"kind":"Name","value":"CardColor"}},{"kind":"Field","alias":{"kind":"Name","value":"cardDescription"},"name":{"kind":"Name","value":"CardDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"cardHeading"},"name":{"kind":"Name","value":"CardHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"cardIcon"},"name":{"kind":"Name","value":"CardIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"cardImage"},"name":{"kind":"Name","value":"CardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"cardSubheading"},"name":{"kind":"Name","value":"CardSubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"cardImageLayout"},"name":{"kind":"Name","value":"ImageLayout"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CarouselBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CarouselBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CarouselItemsContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentRecsBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentRecsBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BlockDeliveryApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"BlockRecommendationCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heroImage"},"name":{"kind":"Name","value":"HeroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"eyebrow"},"name":{"kind":"Name","value":"Eyebrow"}},{"kind":"Field","alias":{"kind":"Name","value":"heroHeading"},"name":{"kind":"Name","value":"Heading"}},{"kind":"Field","alias":{"kind":"Name","value":"heroSubheading"},"name":{"kind":"Name","value":"SubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"heroDescription"},"name":{"kind":"Name","value":"Description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"heroColor"},"name":{"kind":"Name","value":"HeroColor"}},{"kind":"Field","alias":{"kind":"Name","value":"heroButton"},"name":{"kind":"Name","value":"HeroButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockPropertyData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HomePageHeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomePageHeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"homeHeroHeading"},"name":{"kind":"Name","value":"HomeHeroBlockHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"homeHeroSubheading"},"name":{"kind":"Name","value":"HomeHeroBlockSubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"leftImage"},"name":{"kind":"Name","value":"HomeHeroLeftImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"rightImage"},"name":{"kind":"Name","value":"HomeHeroRightImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"homeHeroButton"},"name":{"kind":"Name","value":"HomeHeroButtonBlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockPropertyData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OdpEmbedBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OdpEmbedBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ContentId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuoteBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"quote"},"name":{"kind":"Name","value":"QuoteText"}},{"kind":"Field","alias":{"kind":"Name","value":"color"},"name":{"kind":"Name","value":"QuoteColor"}},{"kind":"Field","alias":{"kind":"Name","value":"active"},"name":{"kind":"Name","value":"QuoteActive"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"QuoteProfileName"}},{"kind":"Field","alias":{"kind":"Name","value":"profilePicture"},"name":{"kind":"Name","value":"QuoteProfilePicture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"location"},"name":{"kind":"Name","value":"QuoteProfileLocation"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"overline"},"name":{"kind":"Name","value":"TextBlockOverline"}},{"kind":"Field","alias":{"kind":"Name","value":"headingSize"},"name":{"kind":"Name","value":"TextBlockHeadingSize"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"TextBlockHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"TextBlockDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"center"},"name":{"kind":"Name","value":"TextCenter"}},{"kind":"Field","alias":{"kind":"Name","value":"width"},"name":{"kind":"Name","value":"TextBlockWidth"}},{"kind":"Field","alias":{"kind":"Name","value":"className"},"name":{"kind":"Name","value":"TextClassName"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlankSectionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlankSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayoutContainerBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutContainerBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"columns"},"name":{"kind":"Name","value":"ColumnsCount"}},{"kind":"Field","alias":{"kind":"Name","value":"gap"},"name":{"kind":"Name","value":"GapSize"}},{"kind":"Field","name":{"kind":"Name","value":"LayoutContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListingBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CarouselBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentRecsBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HomePageHeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayoutContainerBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OdpEmbedBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankSectionData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"containerColor"},"name":{"kind":"Name","value":"ContainerBackgroundColor"}},{"kind":"Field","alias":{"kind":"Name","value":"backgroundImage"},"name":{"kind":"Name","value":"ContainerBackgroundImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"marginTop"},"name":{"kind":"Name","value":"ContainerMarginTop"}},{"kind":"Field","alias":{"kind":"Name","value":"marginBottom"},"name":{"kind":"Name","value":"ContainerMarginBottom"}},{"kind":"Field","alias":{"kind":"Name","value":"paddingBottom"},"name":{"kind":"Name","value":"ContainerPaddingBottom"}},{"kind":"Field","alias":{"kind":"Name","value":"paddingTop"},"name":{"kind":"Name","value":"ContainerPaddingTop"}}]}}]} as unknown as DocumentNode<LandingPageDataFragment, unknown>;
export const StandardPageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StandardPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StandardPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"sptitle"},"name":{"kind":"Name","value":"StandardPageHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"spsubtitle"},"name":{"kind":"Name","value":"StandardSubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"spimage"},"name":{"kind":"Name","value":"StandardPromoImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"spdescription"},"name":{"kind":"Name","value":"MainBody"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<StandardPageDataFragment, unknown>;
export const StartPageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StartPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StartPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"HomePageHeroContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListingBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CarouselBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentRecsBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HomePageHeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayoutContainerBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OdpEmbedBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankSectionData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"HomePageMainContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListingBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CarouselBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentRecsBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HomePageHeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayoutContainerBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OdpEmbedBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankSectionData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockPropertyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"className"},"name":{"kind":"Name","value":"ButtonClass"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonType"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonVariant"},"name":{"kind":"Name","value":"ButtonVariant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogListingBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogListingBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"showFilters"},"name":{"kind":"Name","value":"BlogListingShowFilters"}},{"kind":"Field","alias":{"kind":"Name","value":"selectedPageSize"},"name":{"kind":"Name","value":"BlogListingItemCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"className"},"name":{"kind":"Name","value":"ButtonClass"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonType"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonVariant"},"name":{"kind":"Name","value":"ButtonVariant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"cardButton"},"name":{"kind":"Name","value":"CardButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"className"},"name":{"kind":"Name","value":"ButtonClass"}},{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonType"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"buttonVariant"},"name":{"kind":"Name","value":"ButtonVariant"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"cardColor"},"name":{"kind":"Name","value":"CardColor"}},{"kind":"Field","alias":{"kind":"Name","value":"cardDescription"},"name":{"kind":"Name","value":"CardDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"cardHeading"},"name":{"kind":"Name","value":"CardHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"cardIcon"},"name":{"kind":"Name","value":"CardIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"cardImage"},"name":{"kind":"Name","value":"CardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"cardSubheading"},"name":{"kind":"Name","value":"CardSubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"cardImageLayout"},"name":{"kind":"Name","value":"ImageLayout"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CarouselBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CarouselBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CarouselItemsContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentRecsBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentRecsBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BlockDeliveryApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"BlockRecommendationCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heroImage"},"name":{"kind":"Name","value":"HeroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"eyebrow"},"name":{"kind":"Name","value":"Eyebrow"}},{"kind":"Field","alias":{"kind":"Name","value":"heroHeading"},"name":{"kind":"Name","value":"Heading"}},{"kind":"Field","alias":{"kind":"Name","value":"heroSubheading"},"name":{"kind":"Name","value":"SubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"heroDescription"},"name":{"kind":"Name","value":"Description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"heroColor"},"name":{"kind":"Name","value":"HeroColor"}},{"kind":"Field","alias":{"kind":"Name","value":"heroButton"},"name":{"kind":"Name","value":"HeroButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockPropertyData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HomePageHeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomePageHeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"homeHeroHeading"},"name":{"kind":"Name","value":"HomeHeroBlockHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"homeHeroSubheading"},"name":{"kind":"Name","value":"HomeHeroBlockSubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"leftImage"},"name":{"kind":"Name","value":"HomeHeroLeftImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"rightImage"},"name":{"kind":"Name","value":"HomeHeroRightImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"homeHeroButton"},"name":{"kind":"Name","value":"HomeHeroButtonBlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockPropertyData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OdpEmbedBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OdpEmbedBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ContentId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuoteBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"quote"},"name":{"kind":"Name","value":"QuoteText"}},{"kind":"Field","alias":{"kind":"Name","value":"color"},"name":{"kind":"Name","value":"QuoteColor"}},{"kind":"Field","alias":{"kind":"Name","value":"active"},"name":{"kind":"Name","value":"QuoteActive"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"QuoteProfileName"}},{"kind":"Field","alias":{"kind":"Name","value":"profilePicture"},"name":{"kind":"Name","value":"QuoteProfilePicture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"location"},"name":{"kind":"Name","value":"QuoteProfileLocation"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"overline"},"name":{"kind":"Name","value":"TextBlockOverline"}},{"kind":"Field","alias":{"kind":"Name","value":"headingSize"},"name":{"kind":"Name","value":"TextBlockHeadingSize"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"TextBlockHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"TextBlockDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"center"},"name":{"kind":"Name","value":"TextCenter"}},{"kind":"Field","alias":{"kind":"Name","value":"width"},"name":{"kind":"Name","value":"TextBlockWidth"}},{"kind":"Field","alias":{"kind":"Name","value":"className"},"name":{"kind":"Name","value":"TextClassName"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlankSectionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlankSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayoutContainerBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutContainerBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"columns"},"name":{"kind":"Name","value":"ColumnsCount"}},{"kind":"Field","alias":{"kind":"Name","value":"gap"},"name":{"kind":"Name","value":"GapSize"}},{"kind":"Field","name":{"kind":"Name","value":"LayoutContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListingBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CarouselBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentRecsBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HomePageHeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayoutContainerBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OdpEmbedBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankSectionData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"containerColor"},"name":{"kind":"Name","value":"ContainerBackgroundColor"}},{"kind":"Field","alias":{"kind":"Name","value":"backgroundImage"},"name":{"kind":"Name","value":"ContainerBackgroundImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"marginTop"},"name":{"kind":"Name","value":"ContainerMarginTop"}},{"kind":"Field","alias":{"kind":"Name","value":"marginBottom"},"name":{"kind":"Name","value":"ContainerMarginBottom"}},{"kind":"Field","alias":{"kind":"Name","value":"paddingBottom"},"name":{"kind":"Name","value":"ContainerPaddingBottom"}},{"kind":"Field","alias":{"kind":"Name","value":"paddingTop"},"name":{"kind":"Name","value":"ContainerPaddingTop"}}]}}]} as unknown as DocumentNode<StartPageDataFragment, unknown>;
export const StartPageSearchDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StartPageSearchData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StartPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"seodata"},"name":{"kind":"Name","value":"SeoSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"MetaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"MetaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"SharingImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<StartPageSearchDataFragment, unknown>;
export const HtmlBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HtmlBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HtmlBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"HtmlBlockHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"HtmlContent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<HtmlBlockFragment, unknown>;
export const FooterMenuNavigationItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterMenuNavigationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuNavigationBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<FooterMenuNavigationItemFragment, unknown>;
export const LinkItemDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<LinkItemDataFragment, unknown>;
export const MenuNavigationItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuNavigationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuNavigationBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkItemData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<MenuNavigationItemFragment, unknown>;
export const MenuCardItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuCardItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"CardHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"subheading"},"name":{"kind":"Name","value":"CardSubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"CardDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"color"},"name":{"kind":"Name","value":"CardColor"}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"CardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"src"},"name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"CardButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<MenuCardItemFragment, unknown>;
export const MenuButtonFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuButton"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"type"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"variant"},"name":{"kind":"Name","value":"ButtonVariant"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]} as unknown as DocumentNode<MenuButtonFragment, unknown>;
export const MenuItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuNavigationItem"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuCardItem"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuButton"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuNavigationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuNavigationBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkItemData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuCardItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"CardHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"subheading"},"name":{"kind":"Name","value":"CardSubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"CardDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"color"},"name":{"kind":"Name","value":"CardColor"}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"CardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"src"},"name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"CardButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuButton"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"type"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"variant"},"name":{"kind":"Name","value":"ButtonVariant"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<MenuItemFragment, unknown>;
export const MegaMenuItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MegaMenuItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MegaMenuGroupBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"menuName"},"name":{"kind":"Name","value":"MenuMenuHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"menuData"},"name":{"kind":"Name","value":"MegaMenuContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuNavigationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuNavigationBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkItemData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuCardItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"CardHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"subheading"},"name":{"kind":"Name","value":"CardSubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"CardDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"color"},"name":{"kind":"Name","value":"CardColor"}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"CardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"src"},"name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"CardButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuButton"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"type"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"variant"},"name":{"kind":"Name","value":"ButtonVariant"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuNavigationItem"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuCardItem"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuButton"}}]}}]} as unknown as DocumentNode<MegaMenuItemFragment, unknown>;
export const SearchDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SearchData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<SearchDataFragment, unknown>;
export const PageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<PageDataFragment, unknown>;
export const getArticleListElementItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getArticleListElementItems"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"count"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BlogPostPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"published"},"value":{"kind":"EnumValue","value":"DESC"}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"count"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"Published","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"Field","alias":{"kind":"Name","value":"articleMeta"},"name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"lastModified"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"blogTitle"},"name":{"kind":"Name","value":"Heading"}},{"kind":"Field","alias":{"kind":"Name","value":"blogSubtitle"},"name":{"kind":"Name","value":"ArticleSubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"blogImage"},"name":{"kind":"Name","value":"BlogPostPromoImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"blogBody"},"name":{"kind":"Name","value":"BlogPostBody"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"blogAuthor"},"name":{"kind":"Name","value":"ArticleAuthor"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<getArticleListElementItemsQuery, getArticleListElementItemsQueryVariables>;
export const getBlankExperienceMetaDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBlankExperienceMetaData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"page"},"name":{"kind":"Name","value":"BlankExperience"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"meta"},"name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"seo"},"name":{"kind":"Name","value":"BlankExperienceSeoSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MetaTitle"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"MetaDescription"}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"SharingImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"type"},"name":{"kind":"Name","value":"GraphType"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<getBlankExperienceMetaDataQuery, getBlankExperienceMetaDataQueryVariables>;
export const getBlogPostPageMetaDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBlogPostPageMetaData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BlogPostPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"pages"},"name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Heading"}},{"kind":"Field","name":{"kind":"Name","value":"BlogPostPromoImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"SeoSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"MetaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"MetaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"SharingImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"GraphType"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<getBlogPostPageMetaDataQuery, getBlogPostPageMetaDataQueryVariables>;
export const getLandingPageMetaDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLandingPageMetaData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"LandingPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"pages"},"name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}}]}},{"kind":"Field","name":{"kind":"Name","value":"SeoSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"MetaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"MetaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"SharingImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"GraphType"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<getLandingPageMetaDataQuery, getLandingPageMetaDataQueryVariables>;
export const getStandardPageMetaDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getStandardPageMetaData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"StandardPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"pages"},"name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}}]}},{"kind":"Field","name":{"kind":"Name","value":"StandardPageHeading"}},{"kind":"Field","name":{"kind":"Name","value":"StandardPromoImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"SeoSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"MetaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"MetaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"SharingImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"GraphType"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<getStandardPageMetaDataQuery, getStandardPageMetaDataQueryVariables>;
export const getStartPageMetaDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getStartPageMetaData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"StartPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"pages"},"name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}}]}},{"kind":"Field","name":{"kind":"Name","value":"SiteImageLogo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"SeoSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"MetaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"MetaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"SharingImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"GraphType"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<getStartPageMetaDataQuery, getStartPageMetaDataQueryVariables>;
export const getFooterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getFooter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}},"defaultValue":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"menuItems"},"name":{"kind":"Name","value":"StartPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"footerSubLinks"},"name":{"kind":"Name","value":"FooterNavigationSubLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkItemData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"footerCopyright"},"name":{"kind":"Name","value":"FooterNavigationCopyrightText"}},{"kind":"Field","alias":{"kind":"Name","value":"footerNavigation"},"name":{"kind":"Name","value":"FooterNavigationContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterMenuNavigationItem"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HtmlBlock"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterMenuNavigationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuNavigationBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HtmlBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HtmlBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"HtmlBlockHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"HtmlContent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<getFooterQuery, getFooterQueryVariables>;
export const getHeaderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHeader"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"menuItems"},"name":{"kind":"Name","value":"StartPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"logo"},"name":{"kind":"Name","value":"SiteImageLogo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"headerNavigation"},"name":{"kind":"Name","value":"MainNavigationContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MegaMenuItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"UtilityNavigationContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuItem"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuNavigationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuNavigationBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkItemData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuCardItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"CardHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"subheading"},"name":{"kind":"Name","value":"CardSubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"CardDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"color"},"name":{"kind":"Name","value":"CardColor"}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"CardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"src"},"name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"CardButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuButton"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"type"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"variant"},"name":{"kind":"Name","value":"ButtonVariant"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuNavigationItem"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuCardItem"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuButton"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MegaMenuItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MegaMenuGroupBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"menuName"},"name":{"kind":"Name","value":"MenuMenuHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"menuData"},"name":{"kind":"Name","value":"MegaMenuContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuItem"}}]}}]}}]} as unknown as DocumentNode<getHeaderQuery, getHeaderQueryVariables>;
export const getArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getArticles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":{"kind":"IntValue","value":"10"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":{"kind":"IntValue","value":"0"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"author"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"published"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publishedEnd"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"getArticles"},"name":{"kind":"Name","value":"BlogPostPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"published"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"published"}}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"published"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publishedEnd"}}}]}}]}}]}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"Published","block":false}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"published"},"value":{"kind":"EnumValue","value":"DESC"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"published"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"Heading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"SeoSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"MetaDescription"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"author"},"name":{"kind":"Name","value":"ArticleAuthor"}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"BlogPostPromoImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"facets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"author"},"name":{"kind":"Name","value":"ArticleAuthor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderType"},"value":{"kind":"EnumValue","value":"VALUE"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"ASC"}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"author"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"published"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"unit"},"value":{"kind":"EnumValue","value":"DAY"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}}]} as unknown as DocumentNode<getArticlesQuery, getArticlesQueryVariables>;
export const searchContentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchContent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"term"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"topInterest"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"withinLocale"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"types"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":{"kind":"IntValue","value":"25"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"Content"},"name":{"kind":"Name","value":"_Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_fulltext"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"match"},"value":{"kind":"Variable","name":{"kind":"Name","value":"term"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_fulltext"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"match"},"value":{"kind":"Variable","name":{"kind":"Name","value":"topInterest"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"boost"},"value":{"kind":"IntValue","value":"200"}}]}}]}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"types"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"StringValue","value":"_Page","block":false}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_ranking"},"value":{"kind":"EnumValue","value":"SEMANTIC"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"withinLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_score"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SearchData"}},{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"published"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"preview"},"name":{"kind":"Name","value":"_fulltext"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"highlight"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"enabled"},"value":{"kind":"BooleanValue","value":true}},{"kind":"ObjectField","name":{"kind":"Name","value":"startToken"},"value":{"kind":"StringValue","value":"<span>","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"endToken"},"value":{"kind":"StringValue","value":"</span>","block":false}}]}}]},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogPostPageSearchResult"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StartPageSearchData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"types"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"Field","name":{"kind":"Name","value":"locale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SearchData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogPostPageSearchResult"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogPostPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"Heading"}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"BlogPostPromoImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"author"},"name":{"kind":"Name","value":"ArticleAuthor"}},{"kind":"Field","alias":{"kind":"Name","value":"seodata"},"name":{"kind":"Name","value":"SeoSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"MetaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"MetaDescription"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"published"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StartPageSearchData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StartPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"seodata"},"name":{"kind":"Name","value":"SeoSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"MetaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"MetaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"SharingImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}}]}}]} as unknown as DocumentNode<searchContentQuery, searchContentQueryVariables>;
export const getContentByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContentById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"domain"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"_Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"hierarchical"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"base"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"domain"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListingBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CarouselBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentRecsBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HomePageHeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayoutContainerBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OdpEmbedBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankSectionData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankExperienceData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogPostPageData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LandingPageData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StandardPageData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StartPageData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockPropertyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"className"},"name":{"kind":"Name","value":"ButtonClass"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonType"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonVariant"},"name":{"kind":"Name","value":"ButtonVariant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogListingBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogListingBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"showFilters"},"name":{"kind":"Name","value":"BlogListingShowFilters"}},{"kind":"Field","alias":{"kind":"Name","value":"selectedPageSize"},"name":{"kind":"Name","value":"BlogListingItemCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"className"},"name":{"kind":"Name","value":"ButtonClass"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonType"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonVariant"},"name":{"kind":"Name","value":"ButtonVariant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"cardButton"},"name":{"kind":"Name","value":"CardButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"className"},"name":{"kind":"Name","value":"ButtonClass"}},{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonType"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"buttonVariant"},"name":{"kind":"Name","value":"ButtonVariant"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"cardColor"},"name":{"kind":"Name","value":"CardColor"}},{"kind":"Field","alias":{"kind":"Name","value":"cardDescription"},"name":{"kind":"Name","value":"CardDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"cardHeading"},"name":{"kind":"Name","value":"CardHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"cardIcon"},"name":{"kind":"Name","value":"CardIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"cardImage"},"name":{"kind":"Name","value":"CardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"cardSubheading"},"name":{"kind":"Name","value":"CardSubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"cardImageLayout"},"name":{"kind":"Name","value":"ImageLayout"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CarouselBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CarouselBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CarouselItemsContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentRecsBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentRecsBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BlockDeliveryApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"BlockRecommendationCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heroImage"},"name":{"kind":"Name","value":"HeroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"eyebrow"},"name":{"kind":"Name","value":"Eyebrow"}},{"kind":"Field","alias":{"kind":"Name","value":"heroHeading"},"name":{"kind":"Name","value":"Heading"}},{"kind":"Field","alias":{"kind":"Name","value":"heroSubheading"},"name":{"kind":"Name","value":"SubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"heroDescription"},"name":{"kind":"Name","value":"Description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"heroColor"},"name":{"kind":"Name","value":"HeroColor"}},{"kind":"Field","alias":{"kind":"Name","value":"heroButton"},"name":{"kind":"Name","value":"HeroButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockPropertyData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HomePageHeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomePageHeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"homeHeroHeading"},"name":{"kind":"Name","value":"HomeHeroBlockHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"homeHeroSubheading"},"name":{"kind":"Name","value":"HomeHeroBlockSubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"leftImage"},"name":{"kind":"Name","value":"HomeHeroLeftImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"rightImage"},"name":{"kind":"Name","value":"HomeHeroRightImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"homeHeroButton"},"name":{"kind":"Name","value":"HomeHeroButtonBlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockPropertyData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OdpEmbedBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OdpEmbedBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ContentId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuoteBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"quote"},"name":{"kind":"Name","value":"QuoteText"}},{"kind":"Field","alias":{"kind":"Name","value":"color"},"name":{"kind":"Name","value":"QuoteColor"}},{"kind":"Field","alias":{"kind":"Name","value":"active"},"name":{"kind":"Name","value":"QuoteActive"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"QuoteProfileName"}},{"kind":"Field","alias":{"kind":"Name","value":"profilePicture"},"name":{"kind":"Name","value":"QuoteProfilePicture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"location"},"name":{"kind":"Name","value":"QuoteProfileLocation"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"overline"},"name":{"kind":"Name","value":"TextBlockOverline"}},{"kind":"Field","alias":{"kind":"Name","value":"headingSize"},"name":{"kind":"Name","value":"TextBlockHeadingSize"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"TextBlockHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"TextBlockDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"center"},"name":{"kind":"Name","value":"TextCenter"}},{"kind":"Field","alias":{"kind":"Name","value":"width"},"name":{"kind":"Name","value":"TextBlockWidth"}},{"kind":"Field","alias":{"kind":"Name","value":"className"},"name":{"kind":"Name","value":"TextClassName"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlankSectionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlankSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageSeoSettingsPropertyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageSeoSettingsProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"MetaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"MetaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"SharingImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"GraphType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleListElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleListElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articleListCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CTAElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"cta_text"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"cta_link"},"name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentRecsElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentRecsElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ElementDeliveryApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ElementRecommendationCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeadingElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeadingElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headingText"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ParagraphElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"customerLocation"}},{"kind":"Field","name":{"kind":"Name","value":"customerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"referenceTitle"}},{"kind":"Field","name":{"kind":"Name","value":"referenceText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"placeholder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}},{"kind":"Field","alias":{"kind":"Name","value":"layoutType"},"name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","alias":{"kind":"Name","value":"template"},"name":{"kind":"Name","value":"displayTemplateKey"}},{"kind":"Field","alias":{"kind":"Name","value":"settings"},"name":{"kind":"Name","value":"displaySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"recursive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"depth"},"value":{"kind":"IntValue","value":"10"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionComponentNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"component"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleListElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentRecsElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeadingElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ParagraphElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoElementData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayoutContainerBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutContainerBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"columns"},"name":{"kind":"Name","value":"ColumnsCount"}},{"kind":"Field","alias":{"kind":"Name","value":"gap"},"name":{"kind":"Name","value":"GapSize"}},{"kind":"Field","name":{"kind":"Name","value":"LayoutContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListingBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CarouselBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentRecsBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HomePageHeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayoutContainerBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OdpEmbedBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankSectionData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"containerColor"},"name":{"kind":"Name","value":"ContainerBackgroundColor"}},{"kind":"Field","alias":{"kind":"Name","value":"backgroundImage"},"name":{"kind":"Name","value":"ContainerBackgroundImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"marginTop"},"name":{"kind":"Name","value":"ContainerMarginTop"}},{"kind":"Field","alias":{"kind":"Name","value":"marginBottom"},"name":{"kind":"Name","value":"ContainerMarginBottom"}},{"kind":"Field","alias":{"kind":"Name","value":"paddingBottom"},"name":{"kind":"Name","value":"ContainerPaddingBottom"}},{"kind":"Field","alias":{"kind":"Name","value":"paddingTop"},"name":{"kind":"Name","value":"ContainerPaddingTop"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlankExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlankExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BlankExperienceSeoSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageSeoSettingsPropertyData"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogPostPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogPostPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"blogTitle"},"name":{"kind":"Name","value":"Heading"}},{"kind":"Field","alias":{"kind":"Name","value":"blogSubtitle"},"name":{"kind":"Name","value":"ArticleSubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"blogImage"},"name":{"kind":"Name","value":"BlogPostPromoImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"blogBody"},"name":{"kind":"Name","value":"BlogPostBody"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"blogAuthor"},"name":{"kind":"Name","value":"ArticleAuthor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LandingPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LandingPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"TopContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListingBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CarouselBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentRecsBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HomePageHeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayoutContainerBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OdpEmbedBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankSectionData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"MainContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListingBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CarouselBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentRecsBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HomePageHeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayoutContainerBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OdpEmbedBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankSectionData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StandardPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StandardPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"sptitle"},"name":{"kind":"Name","value":"StandardPageHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"spsubtitle"},"name":{"kind":"Name","value":"StandardSubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"spimage"},"name":{"kind":"Name","value":"StandardPromoImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"spdescription"},"name":{"kind":"Name","value":"MainBody"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StartPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StartPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"HomePageHeroContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListingBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CarouselBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentRecsBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HomePageHeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayoutContainerBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OdpEmbedBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankSectionData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"HomePageMainContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListingBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CarouselBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentRecsBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HomePageHeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayoutContainerBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OdpEmbedBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankSectionData"}}]}}]}}]} as unknown as DocumentNode<getContentByIdQuery, getContentByIdQueryVariables>;
export const getContentByPathDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContentByPath"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"domain"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"_Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"default"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"base"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"domain"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankExperienceData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogPostPageData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LandingPageData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StandardPageData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"StartPageData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContentMetadata"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ReferenceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageSeoSettingsPropertyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageSeoSettingsProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"MetaTitle"}},{"kind":"Field","name":{"kind":"Name","value":"MetaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"SharingImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"GraphType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentInfo"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"_type"},"name":{"kind":"Name","value":"__typename"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IElementData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleListElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleListElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"articleListCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CTAElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CTAElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"cta_text"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"cta_link"},"name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentRecsElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentRecsElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ElementDeliveryApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"ElementRecommendationCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeadingElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeadingElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"headingText"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"imageLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ParagraphElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TestimonialElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TestimonialElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerName"}},{"kind":"Field","name":{"kind":"Name","value":"customerLocation"}},{"kind":"Field","name":{"kind":"Name","value":"customerImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"referenceTitle"}},{"kind":"Field","name":{"kind":"Name","value":"referenceText"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoElementData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"placeholder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompositionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}},{"kind":"Field","alias":{"kind":"Name","value":"layoutType"},"name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","alias":{"kind":"Name","value":"template"},"name":{"kind":"Name","value":"displayTemplateKey"}},{"kind":"Field","alias":{"kind":"Name","value":"settings"},"name":{"kind":"Name","value":"displaySettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"recursive"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"depth"},"value":{"kind":"IntValue","value":"10"}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ICompositionComponentNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"component"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ArticleListElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CTAElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentRecsElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeadingElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ParagraphElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TestimonialElementData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"VideoElementData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompositionData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogListingBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogListingBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"displayName"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"showFilters"},"name":{"kind":"Name","value":"BlogListingShowFilters"}},{"kind":"Field","alias":{"kind":"Name","value":"selectedPageSize"},"name":{"kind":"Name","value":"BlogListingItemCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"className"},"name":{"kind":"Name","value":"ButtonClass"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonType"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonVariant"},"name":{"kind":"Name","value":"ButtonVariant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"cardButton"},"name":{"kind":"Name","value":"CardButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"className"},"name":{"kind":"Name","value":"ButtonClass"}},{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonType"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"buttonVariant"},"name":{"kind":"Name","value":"ButtonVariant"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"cardColor"},"name":{"kind":"Name","value":"CardColor"}},{"kind":"Field","alias":{"kind":"Name","value":"cardDescription"},"name":{"kind":"Name","value":"CardDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"cardHeading"},"name":{"kind":"Name","value":"CardHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"cardIcon"},"name":{"kind":"Name","value":"CardIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"cardImage"},"name":{"kind":"Name","value":"CardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"cardSubheading"},"name":{"kind":"Name","value":"CardSubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"cardImageLayout"},"name":{"kind":"Name","value":"ImageLayout"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentListItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CarouselBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CarouselBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CarouselItemsContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentListItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentRecsBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentRecsBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BlockDeliveryApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"BlockRecommendationCount"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockPropertyData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlockProperty"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"className"},"name":{"kind":"Name","value":"ButtonClass"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonType"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"buttonVariant"},"name":{"kind":"Name","value":"ButtonVariant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heroImage"},"name":{"kind":"Name","value":"HeroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"eyebrow"},"name":{"kind":"Name","value":"Eyebrow"}},{"kind":"Field","alias":{"kind":"Name","value":"heroHeading"},"name":{"kind":"Name","value":"Heading"}},{"kind":"Field","alias":{"kind":"Name","value":"heroSubheading"},"name":{"kind":"Name","value":"SubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"heroDescription"},"name":{"kind":"Name","value":"Description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"heroColor"},"name":{"kind":"Name","value":"HeroColor"}},{"kind":"Field","alias":{"kind":"Name","value":"heroButton"},"name":{"kind":"Name","value":"HeroButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockPropertyData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HomePageHeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HomePageHeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"homeHeroHeading"},"name":{"kind":"Name","value":"HomeHeroBlockHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"homeHeroSubheading"},"name":{"kind":"Name","value":"HomeHeroBlockSubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"leftImage"},"name":{"kind":"Name","value":"HomeHeroLeftImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"rightImage"},"name":{"kind":"Name","value":"HomeHeroRightImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"homeHeroButton"},"name":{"kind":"Name","value":"HomeHeroButtonBlock"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockPropertyData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OdpEmbedBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OdpEmbedBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ContentId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuoteBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"quote"},"name":{"kind":"Name","value":"QuoteText"}},{"kind":"Field","alias":{"kind":"Name","value":"color"},"name":{"kind":"Name","value":"QuoteColor"}},{"kind":"Field","alias":{"kind":"Name","value":"active"},"name":{"kind":"Name","value":"QuoteActive"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"QuoteProfileName"}},{"kind":"Field","alias":{"kind":"Name","value":"profilePicture"},"name":{"kind":"Name","value":"QuoteProfilePicture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"location"},"name":{"kind":"Name","value":"QuoteProfileLocation"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"overline"},"name":{"kind":"Name","value":"TextBlockOverline"}},{"kind":"Field","alias":{"kind":"Name","value":"headingSize"},"name":{"kind":"Name","value":"TextBlockHeadingSize"}},{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"TextBlockHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"TextBlockDescription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"center"},"name":{"kind":"Name","value":"TextCenter"}},{"kind":"Field","alias":{"kind":"Name","value":"width"},"name":{"kind":"Name","value":"TextBlockWidth"}},{"kind":"Field","alias":{"kind":"Name","value":"className"},"name":{"kind":"Name","value":"TextClassName"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlankSectionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlankSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LayoutContainerBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LayoutContainerBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"columns"},"name":{"kind":"Name","value":"ColumnsCount"}},{"kind":"Field","alias":{"kind":"Name","value":"gap"},"name":{"kind":"Name","value":"GapSize"}},{"kind":"Field","name":{"kind":"Name","value":"LayoutContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListingBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CarouselBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentRecsBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HomePageHeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayoutContainerBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OdpEmbedBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankSectionData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"containerColor"},"name":{"kind":"Name","value":"ContainerBackgroundColor"}},{"kind":"Field","alias":{"kind":"Name","value":"backgroundImage"},"name":{"kind":"Name","value":"ContainerBackgroundImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"marginTop"},"name":{"kind":"Name","value":"ContainerMarginTop"}},{"kind":"Field","alias":{"kind":"Name","value":"marginBottom"},"name":{"kind":"Name","value":"ContainerMarginBottom"}},{"kind":"Field","alias":{"kind":"Name","value":"paddingBottom"},"name":{"kind":"Name","value":"ContainerPaddingBottom"}},{"kind":"Field","alias":{"kind":"Name","value":"paddingTop"},"name":{"kind":"Name","value":"ContainerPaddingTop"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlankExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlankExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"BlankExperienceSeoSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageSeoSettingsPropertyData"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ExperienceData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogPostPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogPostPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"blogTitle"},"name":{"kind":"Name","value":"Heading"}},{"kind":"Field","alias":{"kind":"Name","value":"blogSubtitle"},"name":{"kind":"Name","value":"ArticleSubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"blogImage"},"name":{"kind":"Name","value":"BlogPostPromoImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"blogBody"},"name":{"kind":"Name","value":"BlogPostBody"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"blogAuthor"},"name":{"kind":"Name","value":"ArticleAuthor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LandingPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LandingPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"TopContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListingBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CarouselBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentRecsBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HomePageHeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayoutContainerBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OdpEmbedBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankSectionData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"MainContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListingBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CarouselBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentRecsBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HomePageHeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayoutContainerBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OdpEmbedBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankSectionData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StandardPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StandardPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"sptitle"},"name":{"kind":"Name","value":"StandardPageHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"spsubtitle"},"name":{"kind":"Name","value":"StandardSubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"spimage"},"name":{"kind":"Name","value":"StandardPromoImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ReferenceData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"spdescription"},"name":{"kind":"Name","value":"MainBody"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StartPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StartPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"HomePageHeroContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListingBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CarouselBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentRecsBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HomePageHeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayoutContainerBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OdpEmbedBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankSectionData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"HomePageMainContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogListingBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ButtonBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CarouselBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentRecsBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HomePageHeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LayoutContainerBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"OdpEmbedBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuoteBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlankSectionData"}}]}}]}}]} as unknown as DocumentNode<getContentByPathQuery, getContentByPathQueryVariables>;
export const getContentTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContentType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"domain"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"_Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"hierarchical"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"base"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"domain"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"}}]}}]}}]}}]}}]} as unknown as DocumentNode<getContentTypeQuery, getContentTypeQueryVariables>;