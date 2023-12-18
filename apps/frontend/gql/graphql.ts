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
};

export type ArticleListPage = IContent & IData & {
  __typename?: 'ArticleListPage';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ArticleListBody?: Maybe<Scalars['String']['output']>;
  ArticleListHero?: Maybe<Array<Maybe<ContentAreaItemModelSearch>>>;
  ArticleListTitle?: Maybe<Scalars['String']['output']>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SeoSettings?: Maybe<ArticleListPageBlockData>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type ArticleListPage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ArticleListPageAutocomplete = {
  __typename?: 'ArticleListPageAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SeoSettings?: Maybe<ArticleListPageBlockDataAutocomplete>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ArticleListPageAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ArticleListPageAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ArticleListPageAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ArticleListPageAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ArticleListPageAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ArticleListPageAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ArticleListPageAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ArticleListPageBlockData = {
  __typename?: 'ArticleListPageBlockData';
  GraphType?: Maybe<Scalars['String']['output']>;
  MetaDescription?: Maybe<Scalars['String']['output']>;
  MetaTitle?: Maybe<Scalars['String']['output']>;
  SharingImage?: Maybe<ContentModelReference>;
};

export type ArticleListPageBlockDataAutocomplete = {
  __typename?: 'ArticleListPageBlockDataAutocomplete';
  GraphType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MetaDescription?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MetaTitle?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SharingImage?: Maybe<ContentModelReferenceAutocomplete>;
};


export type ArticleListPageBlockDataAutocompleteGraphTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ArticleListPageBlockDataAutocompleteMetaDescriptionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ArticleListPageBlockDataAutocompleteMetaTitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ArticleListPageBlockDataFacet = {
  __typename?: 'ArticleListPageBlockDataFacet';
  GraphType?: Maybe<Array<Maybe<StringFacet>>>;
  MetaDescription?: Maybe<Array<Maybe<StringFacet>>>;
  MetaTitle?: Maybe<Array<Maybe<StringFacet>>>;
  SharingImage?: Maybe<ContentModelReferenceFacet>;
};


export type ArticleListPageBlockDataFacetGraphTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticleListPageBlockDataFacetMetaDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticleListPageBlockDataFacetMetaTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ArticleListPageBlockDataOrderByInput = {
  GraphType?: InputMaybe<OrderBy>;
  MetaDescription?: InputMaybe<OrderBy>;
  MetaTitle?: InputMaybe<OrderBy>;
  SharingImage?: InputMaybe<ContentModelReferenceOrderByInput>;
};

export type ArticleListPageBlockDataWhereInput = {
  GraphType?: InputMaybe<StringFilterInput>;
  MetaDescription?: InputMaybe<StringFilterInput>;
  MetaTitle?: InputMaybe<StringFilterInput>;
  SharingImage?: InputMaybe<ContentModelReferenceWhereInput>;
};

export type ArticleListPageFacet = {
  __typename?: 'ArticleListPageFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  ArticleListBody?: Maybe<Array<Maybe<StringFacet>>>;
  ArticleListHero?: Maybe<ContentAreaItemModelSearchFacet>;
  ArticleListTitle?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SeoSettings?: Maybe<ArticleListPageBlockDataFacet>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ArticleListPageFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticleListPageFacetArticleListBodyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticleListPageFacetArticleListTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticleListPageFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ArticleListPageFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticleListPageFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ArticleListPageFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticleListPageFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticleListPageFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticleListPageFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticleListPageFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ArticleListPageFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticleListPageFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ArticleListPageFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticleListPageFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ArticleListPageFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ArticleListPageOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  ArticleListBody?: InputMaybe<OrderBy>;
  ArticleListHero?: InputMaybe<ContentAreaItemModelSearchOrderByInput>;
  ArticleListTitle?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SeoSettings?: InputMaybe<ArticleListPageBlockDataOrderByInput>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ArticleListPageOutput = {
  __typename?: 'ArticleListPageOutput';
  autocomplete?: Maybe<ArticleListPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ArticleListPageFacet>;
  items?: Maybe<Array<Maybe<ArticleListPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ArticleListPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleListPageWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  ArticleListBody?: InputMaybe<SearchableStringFilterInput>;
  ArticleListHero?: InputMaybe<ContentAreaItemModelSearchWhereInput>;
  ArticleListTitle?: InputMaybe<SearchableStringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SeoSettings?: InputMaybe<ArticleListPageBlockDataWhereInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ArticleListPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ArticleListPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ArticleListPageWhereInput>>>;
};

export type ArticlePage = IContent & IData & {
  __typename?: 'ArticlePage';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ArticleAuthor?: Maybe<Scalars['String']['output']>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MainBody?: Maybe<Scalars['String']['output']>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  PageImage?: Maybe<ContentModelReference>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  /** Configure the common properties to improve the indexing of the page by search engines */
  SeoSettings?: Maybe<ArticlePageBlockData>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type ArticlePage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ArticlePageAutocomplete = {
  __typename?: 'ArticlePageAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ArticleAuthor?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  PageImage?: Maybe<ContentModelReferenceAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SeoSettings?: Maybe<ArticlePageBlockDataAutocomplete>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ArticlePageAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ArticlePageAutocompleteArticleAuthorArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ArticlePageAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ArticlePageAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ArticlePageAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ArticlePageAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ArticlePageAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ArticlePageAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ArticlePageBlockData = {
  __typename?: 'ArticlePageBlockData';
  GraphType?: Maybe<Scalars['String']['output']>;
  MetaDescription?: Maybe<Scalars['String']['output']>;
  MetaTitle?: Maybe<Scalars['String']['output']>;
  SharingImage?: Maybe<ContentModelReference>;
};

export type ArticlePageBlockDataAutocomplete = {
  __typename?: 'ArticlePageBlockDataAutocomplete';
  GraphType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MetaDescription?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MetaTitle?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SharingImage?: Maybe<ContentModelReferenceAutocomplete>;
};


export type ArticlePageBlockDataAutocompleteGraphTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ArticlePageBlockDataAutocompleteMetaDescriptionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ArticlePageBlockDataAutocompleteMetaTitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ArticlePageBlockDataFacet = {
  __typename?: 'ArticlePageBlockDataFacet';
  GraphType?: Maybe<Array<Maybe<StringFacet>>>;
  MetaDescription?: Maybe<Array<Maybe<StringFacet>>>;
  MetaTitle?: Maybe<Array<Maybe<StringFacet>>>;
  SharingImage?: Maybe<ContentModelReferenceFacet>;
};


export type ArticlePageBlockDataFacetGraphTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticlePageBlockDataFacetMetaDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticlePageBlockDataFacetMetaTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ArticlePageBlockDataOrderByInput = {
  GraphType?: InputMaybe<OrderBy>;
  MetaDescription?: InputMaybe<OrderBy>;
  MetaTitle?: InputMaybe<OrderBy>;
  SharingImage?: InputMaybe<ContentModelReferenceOrderByInput>;
};

export type ArticlePageBlockDataWhereInput = {
  GraphType?: InputMaybe<StringFilterInput>;
  MetaDescription?: InputMaybe<StringFilterInput>;
  MetaTitle?: InputMaybe<StringFilterInput>;
  SharingImage?: InputMaybe<ContentModelReferenceWhereInput>;
};

export type ArticlePageFacet = {
  __typename?: 'ArticlePageFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  ArticleAuthor?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MainBody?: Maybe<Array<Maybe<StringFacet>>>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  PageImage?: Maybe<ContentModelReferenceFacet>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SeoSettings?: Maybe<ArticlePageBlockDataFacet>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ArticlePageFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticlePageFacetArticleAuthorArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticlePageFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ArticlePageFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticlePageFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ArticlePageFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticlePageFacetMainBodyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticlePageFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticlePageFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticlePageFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticlePageFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ArticlePageFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticlePageFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ArticlePageFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticlePageFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ArticlePageFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticlePageFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ArticlePageOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  ArticleAuthor?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MainBody?: InputMaybe<OrderBy>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  PageImage?: InputMaybe<ContentModelReferenceOrderByInput>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SeoSettings?: InputMaybe<ArticlePageBlockDataOrderByInput>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Title?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ArticlePageOutput = {
  __typename?: 'ArticlePageOutput';
  autocomplete?: Maybe<ArticlePageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ArticlePageFacet>;
  items?: Maybe<Array<Maybe<ArticlePage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ArticlePageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticlePageWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  ArticleAuthor?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MainBody?: InputMaybe<SearchableStringFilterInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  PageImage?: InputMaybe<ContentModelReferenceWhereInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SeoSettings?: InputMaybe<ArticlePageBlockDataWhereInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Title?: InputMaybe<SearchableStringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
};

export type BlobModel = {
  __typename?: 'BlobModel';
  Id?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
};

export type BlobModelAutocomplete = {
  __typename?: 'BlobModelAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type BlobModelAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BlobModelAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type BlobModelFacet = {
  __typename?: 'BlobModelFacet';
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type BlobModelFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlobModelFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type BlobModelOrderByInput = {
  Id?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
};

export type BlobModelWhereInput = {
  Id?: InputMaybe<StringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
};

export type BoolFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ButtonBlock = IContent & IData & {
  __typename?: 'ButtonBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ButtonLink?: Maybe<LinkItemNode>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type ButtonBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ButtonBlockAutocomplete = {
  __typename?: 'ButtonBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ButtonLink?: Maybe<LinkItemNodeAutocomplete>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ButtonBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ButtonBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ButtonBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ButtonBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ButtonBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ButtonBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ButtonBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ButtonBlockFacet = {
  __typename?: 'ButtonBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  ButtonLink?: Maybe<LinkItemNodeFacet>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ButtonBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ButtonBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ButtonBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ButtonBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ButtonBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ButtonBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ButtonBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ButtonBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ButtonBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ButtonBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ButtonBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ButtonBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ButtonBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ButtonBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ButtonBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  ButtonLink?: InputMaybe<LinkItemNodeOrderByInput>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ButtonBlockOutput = {
  __typename?: 'ButtonBlockOutput';
  autocomplete?: Maybe<ButtonBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ButtonBlockFacet>;
  items?: Maybe<Array<Maybe<ButtonBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ButtonBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ButtonBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  ButtonLink?: InputMaybe<LinkItemNodeWhereInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
};

/** A promotional card */
export type CardBlock = IContent & IData & {
  __typename?: 'CardBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  Image?: Maybe<ContentModelReference>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  Link?: Maybe<LinkItemNode>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** A promotional card */
export type CardBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type CardBlockAutocomplete = {
  __typename?: 'CardBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Description?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Image?: Maybe<ContentModelReferenceAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  Link?: Maybe<LinkItemNodeAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Title?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CardBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CardBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CardBlockAutocompleteDescriptionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CardBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CardBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CardBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CardBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CardBlockAutocompleteTitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CardBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CardBlockFacet = {
  __typename?: 'CardBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  Image?: Maybe<ContentModelReferenceFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  Link?: Maybe<LinkItemNodeFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CardBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CardBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CardBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CardBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CardBlockFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CardBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CardBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CardBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CardBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CardBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CardBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CardBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CardBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CardBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CardBlockFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CardBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CardBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  Image?: InputMaybe<ContentModelReferenceOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  Link?: InputMaybe<LinkItemNodeOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Title?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type CardBlockOutput = {
  __typename?: 'CardBlockOutput';
  autocomplete?: Maybe<CardBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<CardBlockFacet>;
  items?: Maybe<Array<Maybe<CardBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type CardBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CardBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  Description?: InputMaybe<StringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  Image?: InputMaybe<ContentModelReferenceWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  Link?: InputMaybe<LinkItemNodeWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<CardBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CardBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CardBlockWhereInput>>>;
};

/** Create a carousel with the selected components as slides */
export type CarouselBlock = IContent & IData & {
  __typename?: 'CarouselBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The slides shown in the carousel */
  CarouselSlides?: Maybe<Array<Maybe<ContentAreaItemModelSearch>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  /** When checked next/previous arrows might be shown by the frontend */
  ShowArrows?: Maybe<Scalars['Bool']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** Create a carousel with the selected components as slides */
export type CarouselBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type CarouselBlockAutocomplete = {
  __typename?: 'CarouselBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CarouselBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CarouselBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CarouselBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CarouselBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CarouselBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CarouselBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CarouselBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CarouselBlockFacet = {
  __typename?: 'CarouselBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  CarouselSlides?: Maybe<ContentAreaItemModelSearchFacet>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  ShowArrows?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CarouselBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CarouselBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CarouselBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CarouselBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CarouselBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CarouselBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CarouselBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CarouselBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CarouselBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CarouselBlockFacetShowArrowsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CarouselBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CarouselBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CarouselBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CarouselBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type CarouselBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CarouselBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  CarouselSlides?: InputMaybe<ContentAreaItemModelSearchOrderByInput>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  ShowArrows?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type CarouselBlockOutput = {
  __typename?: 'CarouselBlockOutput';
  autocomplete?: Maybe<CarouselBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<CarouselBlockFacet>;
  items?: Maybe<Array<Maybe<CarouselBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type CarouselBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CarouselBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  CarouselSlides?: InputMaybe<ContentAreaItemModelSearchWhereInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  ShowArrows?: InputMaybe<BoolFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<CarouselBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CarouselBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CarouselBlockWhereInput>>>;
};

export type CategoryModel = {
  __typename?: 'CategoryModel';
  Description?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['Int']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
};

export type CategoryModelAutocomplete = {
  __typename?: 'CategoryModelAutocomplete';
  Description?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CategoryModelAutocompleteDescriptionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CategoryModelAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CategoryModelFacet = {
  __typename?: 'CategoryModelFacet';
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  Id?: Maybe<Array<Maybe<NumberFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CategoryModelFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CategoryModelFacetIdArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type CategoryModelFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CategoryModelOrderByInput = {
  Description?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
};

export type CategoryModelWhereInput = {
  Description?: InputMaybe<StringFilterInput>;
  Id?: InputMaybe<IntFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
};

/** A Category within the Configured Commerce catalog */
export type ConfiguredCommerceCatalogCategory = IConfiguredCommerceCatalogEntry & IData & {
  __typename?: 'ConfiguredCommerceCatalogCategory';
  CatalogCategoryId: Scalars['String']['output'];
  CatalogParentCategoryId?: Maybe<Scalars['String']['output']>;
  Changed: Scalars['Date']['output'];
  Created: Scalars['Date']['output'];
  Id: Scalars['String']['output'];
  Language: ConfiguredCommerceLanguage;
  Name: Scalars['String']['output'];
  RelativePath?: Maybe<Scalars['String']['output']>;
  ShortDescription?: Maybe<Scalars['String']['output']>;
  StartPublish: Scalars['Date']['output'];
  StopPublish?: Maybe<Scalars['Date']['output']>;
  URI: Scalars['String']['output'];
  UrlSegment?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** A Category within the Configured Commerce catalog */
export type ConfiguredCommerceCatalogCategory_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ConfiguredCommerceCatalogCategoryAutocomplete = {
  __typename?: 'ConfiguredCommerceCatalogCategoryAutocomplete';
  CatalogCategoryId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CatalogParentCategoryId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Language?: Maybe<ConfiguredCommerceLanguageAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  URI?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  UrlSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ConfiguredCommerceCatalogCategoryAutocompleteCatalogCategoryIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ConfiguredCommerceCatalogCategoryAutocompleteCatalogParentCategoryIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ConfiguredCommerceCatalogCategoryAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ConfiguredCommerceCatalogCategoryAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ConfiguredCommerceCatalogCategoryAutocompleteUriArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ConfiguredCommerceCatalogCategoryAutocompleteUrlSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ConfiguredCommerceCatalogCategoryFacet = {
  __typename?: 'ConfiguredCommerceCatalogCategoryFacet';
  CatalogCategoryId?: Maybe<Array<Maybe<StringFacet>>>;
  CatalogParentCategoryId?: Maybe<Array<Maybe<StringFacet>>>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ConfiguredCommerceLanguageFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  ShortDescription?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  URI?: Maybe<Array<Maybe<StringFacet>>>;
  UrlSegment?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ConfiguredCommerceCatalogCategoryFacetCatalogCategoryIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ConfiguredCommerceCatalogCategoryFacetCatalogParentCategoryIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ConfiguredCommerceCatalogCategoryFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ConfiguredCommerceCatalogCategoryFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ConfiguredCommerceCatalogCategoryFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ConfiguredCommerceCatalogCategoryFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ConfiguredCommerceCatalogCategoryFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ConfiguredCommerceCatalogCategoryFacetShortDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ConfiguredCommerceCatalogCategoryFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ConfiguredCommerceCatalogCategoryFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ConfiguredCommerceCatalogCategoryFacetUriArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ConfiguredCommerceCatalogCategoryFacetUrlSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ConfiguredCommerceCatalogCategoryOrderByInput = {
  CatalogCategoryId?: InputMaybe<OrderBy>;
  CatalogParentCategoryId?: InputMaybe<OrderBy>;
  Changed?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ConfiguredCommerceLanguageOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  RelativePath?: InputMaybe<OrderBy>;
  ShortDescription?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  URI?: InputMaybe<OrderBy>;
  UrlSegment?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ConfiguredCommerceCatalogCategoryOutput = {
  __typename?: 'ConfiguredCommerceCatalogCategoryOutput';
  autocomplete?: Maybe<ConfiguredCommerceCatalogCategoryAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ConfiguredCommerceCatalogCategoryFacet>;
  items?: Maybe<Array<Maybe<ConfiguredCommerceCatalogCategory>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ConfiguredCommerceCatalogCategoryOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ConfiguredCommerceCatalogCategoryWhereInput = {
  CatalogCategoryId?: InputMaybe<StringFilterInput>;
  CatalogParentCategoryId?: InputMaybe<StringFilterInput>;
  Changed?: InputMaybe<DateFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  Id?: InputMaybe<StringFilterInput>;
  Language?: InputMaybe<ConfiguredCommerceLanguageWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  ShortDescription?: InputMaybe<SearchableStringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  URI?: InputMaybe<StringFilterInput>;
  UrlSegment?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ConfiguredCommerceCatalogCategoryWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ConfiguredCommerceCatalogCategoryWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ConfiguredCommerceCatalogCategoryWhereInput>>>;
};

/** Base object for configured commerce categories or products */
export type ConfiguredCommerceCatalogEntry = IConfiguredCommerceCatalogEntry & IData & {
  __typename?: 'ConfiguredCommerceCatalogEntry';
  Changed: Scalars['Date']['output'];
  Created: Scalars['Date']['output'];
  Id: Scalars['String']['output'];
  Language: ConfiguredCommerceLanguage;
  RelativePath?: Maybe<Scalars['String']['output']>;
  StartPublish: Scalars['Date']['output'];
  StopPublish?: Maybe<Scalars['Date']['output']>;
  URI: Scalars['String']['output'];
  UrlSegment?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** Base object for configured commerce categories or products */
export type ConfiguredCommerceCatalogEntry_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ConfiguredCommerceCatalogEntryAutocomplete = {
  __typename?: 'ConfiguredCommerceCatalogEntryAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Language?: Maybe<ConfiguredCommerceLanguageAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  URI?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  UrlSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ConfiguredCommerceCatalogEntryAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ConfiguredCommerceCatalogEntryAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ConfiguredCommerceCatalogEntryAutocompleteUriArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ConfiguredCommerceCatalogEntryAutocompleteUrlSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ConfiguredCommerceCatalogEntryFacet = {
  __typename?: 'ConfiguredCommerceCatalogEntryFacet';
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ConfiguredCommerceLanguageFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  URI?: Maybe<Array<Maybe<StringFacet>>>;
  UrlSegment?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ConfiguredCommerceCatalogEntryFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ConfiguredCommerceCatalogEntryFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ConfiguredCommerceCatalogEntryFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ConfiguredCommerceCatalogEntryFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ConfiguredCommerceCatalogEntryFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ConfiguredCommerceCatalogEntryFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ConfiguredCommerceCatalogEntryFacetUriArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ConfiguredCommerceCatalogEntryFacetUrlSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ConfiguredCommerceCatalogEntryOrderByInput = {
  Changed?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ConfiguredCommerceLanguageOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  URI?: InputMaybe<OrderBy>;
  UrlSegment?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ConfiguredCommerceCatalogEntryOutput = {
  __typename?: 'ConfiguredCommerceCatalogEntryOutput';
  autocomplete?: Maybe<ConfiguredCommerceCatalogEntryAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ConfiguredCommerceCatalogEntryFacet>;
  items?: Maybe<Array<Maybe<IConfiguredCommerceCatalogEntry>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ConfiguredCommerceCatalogEntryOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ConfiguredCommerceCatalogEntryWhereInput = {
  Changed?: InputMaybe<DateFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  Id?: InputMaybe<StringFilterInput>;
  Language?: InputMaybe<ConfiguredCommerceLanguageWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  URI?: InputMaybe<StringFilterInput>;
  UrlSegment?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ConfiguredCommerceCatalogEntryWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ConfiguredCommerceCatalogEntryWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ConfiguredCommerceCatalogEntryWhereInput>>>;
};

/** A Product within the Configured Commerce catalog */
export type ConfiguredCommerceCatalogProduct = IConfiguredCommerceCatalogEntry & IData & {
  __typename?: 'ConfiguredCommerceCatalogProduct';
  BasicListPrice?: Maybe<Scalars['Float']['output']>;
  BasicSaleEndDate?: Maybe<Scalars['Date']['output']>;
  BasicSalePrice?: Maybe<Scalars['Float']['output']>;
  BasicSaleStartDate?: Maybe<Scalars['Date']['output']>;
  Changed: Scalars['Date']['output'];
  Created: Scalars['Date']['output'];
  Id: Scalars['String']['output'];
  Language: ConfiguredCommerceLanguage;
  ProductNumber: Scalars['String']['output'];
  ProductTitle: Scalars['String']['output'];
  RelativePath?: Maybe<Scalars['String']['output']>;
  StartPublish: Scalars['Date']['output'];
  StopPublish?: Maybe<Scalars['Date']['output']>;
  URI: Scalars['String']['output'];
  UrlSegment?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** A Product within the Configured Commerce catalog */
export type ConfiguredCommerceCatalogProduct_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ConfiguredCommerceCatalogProductAutocomplete = {
  __typename?: 'ConfiguredCommerceCatalogProductAutocomplete';
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Language?: Maybe<ConfiguredCommerceLanguageAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  URI?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  UrlSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ConfiguredCommerceCatalogProductAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ConfiguredCommerceCatalogProductAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ConfiguredCommerceCatalogProductAutocompleteUriArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ConfiguredCommerceCatalogProductAutocompleteUrlSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ConfiguredCommerceCatalogProductFacet = {
  __typename?: 'ConfiguredCommerceCatalogProductFacet';
  BasicListPrice?: Maybe<Array<Maybe<NumberFacet>>>;
  BasicSaleEndDate?: Maybe<Array<Maybe<DateFacet>>>;
  BasicSalePrice?: Maybe<Array<Maybe<NumberFacet>>>;
  BasicSaleStartDate?: Maybe<Array<Maybe<DateFacet>>>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ConfiguredCommerceLanguageFacet>;
  ProductNumber?: Maybe<Array<Maybe<StringFacet>>>;
  ProductTitle?: Maybe<Array<Maybe<StringFacet>>>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  URI?: Maybe<Array<Maybe<StringFacet>>>;
  UrlSegment?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ConfiguredCommerceCatalogProductFacetBasicListPriceArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type ConfiguredCommerceCatalogProductFacetBasicSaleEndDateArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ConfiguredCommerceCatalogProductFacetBasicSalePriceArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type ConfiguredCommerceCatalogProductFacetBasicSaleStartDateArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ConfiguredCommerceCatalogProductFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ConfiguredCommerceCatalogProductFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ConfiguredCommerceCatalogProductFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ConfiguredCommerceCatalogProductFacetProductNumberArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ConfiguredCommerceCatalogProductFacetProductTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ConfiguredCommerceCatalogProductFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ConfiguredCommerceCatalogProductFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ConfiguredCommerceCatalogProductFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ConfiguredCommerceCatalogProductFacetUriArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ConfiguredCommerceCatalogProductFacetUrlSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ConfiguredCommerceCatalogProductOrderByInput = {
  BasicListPrice?: InputMaybe<OrderBy>;
  BasicSaleEndDate?: InputMaybe<OrderBy>;
  BasicSalePrice?: InputMaybe<OrderBy>;
  BasicSaleStartDate?: InputMaybe<OrderBy>;
  Changed?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ConfiguredCommerceLanguageOrderByInput>;
  ProductNumber?: InputMaybe<OrderBy>;
  ProductTitle?: InputMaybe<OrderBy>;
  RelativePath?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  URI?: InputMaybe<OrderBy>;
  UrlSegment?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ConfiguredCommerceCatalogProductOutput = {
  __typename?: 'ConfiguredCommerceCatalogProductOutput';
  autocomplete?: Maybe<ConfiguredCommerceCatalogProductAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ConfiguredCommerceCatalogProductFacet>;
  items?: Maybe<Array<Maybe<ConfiguredCommerceCatalogProduct>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ConfiguredCommerceCatalogProductOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ConfiguredCommerceCatalogProductWhereInput = {
  BasicListPrice?: InputMaybe<FloatFilterInput>;
  BasicSaleEndDate?: InputMaybe<DateFilterInput>;
  BasicSalePrice?: InputMaybe<FloatFilterInput>;
  BasicSaleStartDate?: InputMaybe<DateFilterInput>;
  Changed?: InputMaybe<DateFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  Id?: InputMaybe<StringFilterInput>;
  Language?: InputMaybe<ConfiguredCommerceLanguageWhereInput>;
  ProductNumber?: InputMaybe<SearchableStringFilterInput>;
  ProductTitle?: InputMaybe<SearchableStringFilterInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  URI?: InputMaybe<StringFilterInput>;
  UrlSegment?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ConfiguredCommerceCatalogProductWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ConfiguredCommerceCatalogProductWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ConfiguredCommerceCatalogProductWhereInput>>>;
};

export type ConfiguredCommerceLanguage = {
  __typename?: 'ConfiguredCommerceLanguage';
  CultureCode?: Maybe<Scalars['String']['output']>;
  DisplayName?: Maybe<Scalars['String']['output']>;
  Id: Scalars['String']['output'];
  IsDefault?: Maybe<Scalars['Boolean']['output']>;
  IsoCode: Scalars['String']['output'];
  Name: Scalars['String']['output'];
};

export type ConfiguredCommerceLanguageAutocomplete = {
  __typename?: 'ConfiguredCommerceLanguageAutocomplete';
  CultureCode?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  DisplayName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  IsDefault?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  IsoCode?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ConfiguredCommerceLanguageAutocompleteCultureCodeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ConfiguredCommerceLanguageAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ConfiguredCommerceLanguageAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ConfiguredCommerceLanguageAutocompleteIsDefaultArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ConfiguredCommerceLanguageAutocompleteIsoCodeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ConfiguredCommerceLanguageAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ConfiguredCommerceLanguageFacet = {
  __typename?: 'ConfiguredCommerceLanguageFacet';
  CultureCode?: Maybe<Array<Maybe<StringFacet>>>;
  DisplayName?: Maybe<Array<Maybe<StringFacet>>>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  IsDefault?: Maybe<Array<Maybe<StringFacet>>>;
  IsoCode?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ConfiguredCommerceLanguageFacetCultureCodeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ConfiguredCommerceLanguageFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ConfiguredCommerceLanguageFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ConfiguredCommerceLanguageFacetIsDefaultArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ConfiguredCommerceLanguageFacetIsoCodeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ConfiguredCommerceLanguageFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ConfiguredCommerceLanguageOrderByInput = {
  CultureCode?: InputMaybe<OrderBy>;
  DisplayName?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  IsDefault?: InputMaybe<OrderBy>;
  IsoCode?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
};

export type ConfiguredCommerceLanguageWhereInput = {
  CultureCode?: InputMaybe<StringFilterInput>;
  DisplayName?: InputMaybe<StringFilterInput>;
  Id?: InputMaybe<StringFilterInput>;
  IsDefault?: InputMaybe<StringFilterInput>;
  IsoCode?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
};

/** Pre-defined component compositions that can easily be reused, with container settings that match Grid Box positioning of children */
export type ContainerBlock = IContent & IData & {
  __typename?: 'ContainerBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  BackgroundColor?: Maybe<Scalars['String']['output']>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  /** The amount of space between the items within the grid */
  Gap?: Maybe<Scalars['String']['output']>;
  GridLayout?: Maybe<Scalars['String']['output']>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MainContainerArea?: Maybe<Array<Maybe<ContentAreaItemModelSearch>>>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  /** The amount of space around the grid */
  Spacing?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** Pre-defined component compositions that can easily be reused, with container settings that match Grid Box positioning of children */
export type ContainerBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ContainerBlockAutocomplete = {
  __typename?: 'ContainerBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  BackgroundColor?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Gap?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  GridLayout?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Spacing?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContainerBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContainerBlockAutocompleteBackgroundColorArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContainerBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContainerBlockAutocompleteGapArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContainerBlockAutocompleteGridLayoutArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContainerBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContainerBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContainerBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContainerBlockAutocompleteSpacingArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContainerBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContainerBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContainerBlockFacet = {
  __typename?: 'ContainerBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  BackgroundColor?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  Gap?: Maybe<Array<Maybe<StringFacet>>>;
  GridLayout?: Maybe<Array<Maybe<StringFacet>>>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MainContainerArea?: Maybe<ContentAreaItemModelSearchFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  Spacing?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContainerBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContainerBlockFacetBackgroundColorArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContainerBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContainerBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContainerBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContainerBlockFacetGapArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContainerBlockFacetGridLayoutArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContainerBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContainerBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContainerBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContainerBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContainerBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContainerBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContainerBlockFacetSpacingArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContainerBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContainerBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContainerBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContainerBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContainerBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  BackgroundColor?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  Gap?: InputMaybe<OrderBy>;
  GridLayout?: InputMaybe<OrderBy>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MainContainerArea?: InputMaybe<ContentAreaItemModelSearchOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  Spacing?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ContainerBlockOutput = {
  __typename?: 'ContainerBlockOutput';
  autocomplete?: Maybe<ContainerBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ContainerBlockFacet>;
  items?: Maybe<Array<Maybe<ContainerBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ContainerBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContainerBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  BackgroundColor?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  Gap?: InputMaybe<StringFilterInput>;
  GridLayout?: InputMaybe<StringFilterInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MainContainerArea?: InputMaybe<ContentAreaItemModelSearchWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  Spacing?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ContainerBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ContainerBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ContainerBlockWhereInput>>>;
};

export type Content = IContent & IData & {
  __typename?: 'Content';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Content_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ContentAreaItemModel = {
  __typename?: 'ContentAreaItemModel';
  ContentLink?: Maybe<ContentModelReference>;
  DisplayOption?: Maybe<Scalars['String']['output']>;
  InlineBlock?: Maybe<InlineBlockPropertyModel>;
  Tag?: Maybe<Scalars['String']['output']>;
};

export type ContentAreaItemModelAutocomplete = {
  __typename?: 'ContentAreaItemModelAutocomplete';
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  DisplayOption?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  InlineBlock?: Maybe<InlineBlockPropertyModelAutocomplete>;
  Tag?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentAreaItemModelAutocompleteDisplayOptionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAreaItemModelAutocompleteTagArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentAreaItemModelFacet = {
  __typename?: 'ContentAreaItemModelFacet';
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  DisplayOption?: Maybe<Array<Maybe<StringFacet>>>;
  InlineBlock?: Maybe<InlineBlockPropertyModelFacet>;
  Tag?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentAreaItemModelFacetDisplayOptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentAreaItemModelFacetTagArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentAreaItemModelOrderByInput = {
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  DisplayOption?: InputMaybe<OrderBy>;
  InlineBlock?: InputMaybe<InlineBlockPropertyModelOrderByInput>;
  Tag?: InputMaybe<OrderBy>;
};

export type ContentAreaItemModelSearch = {
  __typename?: 'ContentAreaItemModelSearch';
  ContentLink?: Maybe<ContentModelReferenceSearch>;
  DisplayOption?: Maybe<Scalars['String']['output']>;
  InlineBlock?: Maybe<InlineBlockPropertyModelSearch>;
  Tag?: Maybe<Scalars['String']['output']>;
};

export type ContentAreaItemModelSearchFacet = {
  __typename?: 'ContentAreaItemModelSearchFacet';
  ContentLink?: Maybe<ContentModelReferenceSearchFacet>;
  DisplayOption?: Maybe<Array<Maybe<StringFacet>>>;
  InlineBlock?: Maybe<InlineBlockPropertyModelSearchFacet>;
  Tag?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentAreaItemModelSearchFacetDisplayOptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentAreaItemModelSearchFacetTagArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentAreaItemModelSearchOrderByInput = {
  ContentLink?: InputMaybe<ContentModelReferenceSearchOrderByInput>;
  DisplayOption?: InputMaybe<OrderBy>;
  InlineBlock?: InputMaybe<InlineBlockPropertyModelSearchOrderByInput>;
  Tag?: InputMaybe<OrderBy>;
};

export type ContentAreaItemModelSearchWhereInput = {
  ContentLink?: InputMaybe<ContentModelReferenceSearchWhereInput>;
  DisplayOption?: InputMaybe<SearchableStringFilterInput>;
  InlineBlock?: InputMaybe<InlineBlockPropertyModelSearchWhereInput>;
  Tag?: InputMaybe<SearchableStringFilterInput>;
};

export type ContentAreaItemModelWhereInput = {
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  DisplayOption?: InputMaybe<StringFilterInput>;
  InlineBlock?: InputMaybe<InlineBlockPropertyModelWhereInput>;
  Tag?: InputMaybe<StringFilterInput>;
};

export type ContentAutocomplete = {
  __typename?: 'ContentAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentFacet = {
  __typename?: 'ContentFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContentFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentLanguageModel = {
  __typename?: 'ContentLanguageModel';
  DisplayName?: Maybe<Scalars['String']['output']>;
  Link?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
};

export type ContentLanguageModelAutocomplete = {
  __typename?: 'ContentLanguageModelAutocomplete';
  DisplayName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Link?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentLanguageModelAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentLanguageModelAutocompleteLinkArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentLanguageModelAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentLanguageModelFacet = {
  __typename?: 'ContentLanguageModelFacet';
  DisplayName?: Maybe<Array<Maybe<StringFacet>>>;
  Link?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentLanguageModelFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentLanguageModelFacetLinkArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentLanguageModelFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentLanguageModelOrderByInput = {
  DisplayName?: InputMaybe<OrderBy>;
  Link?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
};

export type ContentLanguageModelSearch = {
  __typename?: 'ContentLanguageModelSearch';
  DisplayName?: Maybe<Scalars['String']['output']>;
  Link?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
};

export type ContentLanguageModelSearchFacet = {
  __typename?: 'ContentLanguageModelSearchFacet';
  DisplayName?: Maybe<Array<Maybe<StringFacet>>>;
  Link?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentLanguageModelSearchFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentLanguageModelSearchFacetLinkArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentLanguageModelSearchFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentLanguageModelSearchOrderByInput = {
  DisplayName?: InputMaybe<OrderBy>;
  Link?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
};

export type ContentLanguageModelSearchWhereInput = {
  DisplayName?: InputMaybe<SearchableStringFilterInput>;
  Link?: InputMaybe<SearchableStringFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
};

export type ContentLanguageModelWhereInput = {
  DisplayName?: InputMaybe<StringFilterInput>;
  Link?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
};

export type ContentModelReference = {
  __typename?: 'ContentModelReference';
  Expanded?: Maybe<IContent>;
  GuidValue?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['Int']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  ProviderName?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  WorkId?: Maybe<Scalars['Int']['output']>;
};

export type ContentModelReferenceAutocomplete = {
  __typename?: 'ContentModelReferenceAutocomplete';
  GuidValue?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  ProviderName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentModelReferenceAutocompleteGuidValueArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentModelReferenceAutocompleteProviderNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentModelReferenceAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentModelReferenceFacet = {
  __typename?: 'ContentModelReferenceFacet';
  GuidValue?: Maybe<Array<Maybe<StringFacet>>>;
  Id?: Maybe<Array<Maybe<NumberFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  ProviderName?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  WorkId?: Maybe<Array<Maybe<NumberFacet>>>;
};


export type ContentModelReferenceFacetGuidValueArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceFacetIdArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type ContentModelReferenceFacetProviderNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceFacetWorkIdArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type ContentModelReferenceOrderByInput = {
  GuidValue?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  ProviderName?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  WorkId?: InputMaybe<OrderBy>;
};

export type ContentModelReferenceSearch = {
  __typename?: 'ContentModelReferenceSearch';
  Expanded?: Maybe<IContent>;
  GuidValue?: Maybe<Scalars['String']['output']>;
  Id?: Maybe<Scalars['Int']['output']>;
  Language?: Maybe<ContentLanguageModelSearch>;
  ProviderName?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  WorkId?: Maybe<Scalars['Int']['output']>;
};

export type ContentModelReferenceSearchFacet = {
  __typename?: 'ContentModelReferenceSearchFacet';
  GuidValue?: Maybe<Array<Maybe<StringFacet>>>;
  Id?: Maybe<Array<Maybe<NumberFacet>>>;
  Language?: Maybe<ContentLanguageModelSearchFacet>;
  ProviderName?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  WorkId?: Maybe<Array<Maybe<NumberFacet>>>;
};


export type ContentModelReferenceSearchFacetGuidValueArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceSearchFacetIdArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type ContentModelReferenceSearchFacetProviderNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceSearchFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentModelReferenceSearchFacetWorkIdArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type ContentModelReferenceSearchOrderByInput = {
  GuidValue?: InputMaybe<OrderBy>;
  Id?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelSearchOrderByInput>;
  ProviderName?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  WorkId?: InputMaybe<OrderBy>;
};

export type ContentModelReferenceSearchWhereInput = {
  GuidValue?: InputMaybe<StringFilterInput>;
  Id?: InputMaybe<IntFilterInput>;
  Language?: InputMaybe<ContentLanguageModelSearchWhereInput>;
  ProviderName?: InputMaybe<SearchableStringFilterInput>;
  Url?: InputMaybe<SearchableStringFilterInput>;
  WorkId?: InputMaybe<IntFilterInput>;
};

export type ContentModelReferenceWhereInput = {
  GuidValue?: InputMaybe<StringFilterInput>;
  Id?: InputMaybe<IntFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  ProviderName?: InputMaybe<StringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  WorkId?: InputMaybe<IntFilterInput>;
};

export type ContentOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ContentOutput = {
  __typename?: 'ContentOutput';
  autocomplete?: Maybe<ContentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ContentFacet>;
  items?: Maybe<Array<Maybe<IContent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ContentOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentRootsModel = {
  __typename?: 'ContentRootsModel';
  ContentAssetsRoot?: Maybe<ContentModelReference>;
  GlobalAssetsRoot?: Maybe<ContentModelReference>;
  RootPage?: Maybe<ContentModelReference>;
  SiteAssetsRoot?: Maybe<ContentModelReference>;
  StartPage?: Maybe<ContentModelReference>;
  WasteBasket?: Maybe<ContentModelReference>;
};

export type ContentRootsModelAutocomplete = {
  __typename?: 'ContentRootsModelAutocomplete';
  ContentAssetsRoot?: Maybe<ContentModelReferenceAutocomplete>;
  GlobalAssetsRoot?: Maybe<ContentModelReferenceAutocomplete>;
  RootPage?: Maybe<ContentModelReferenceAutocomplete>;
  SiteAssetsRoot?: Maybe<ContentModelReferenceAutocomplete>;
  StartPage?: Maybe<ContentModelReferenceAutocomplete>;
  WasteBasket?: Maybe<ContentModelReferenceAutocomplete>;
};

export type ContentRootsModelFacet = {
  __typename?: 'ContentRootsModelFacet';
  ContentAssetsRoot?: Maybe<ContentModelReferenceFacet>;
  GlobalAssetsRoot?: Maybe<ContentModelReferenceFacet>;
  RootPage?: Maybe<ContentModelReferenceFacet>;
  SiteAssetsRoot?: Maybe<ContentModelReferenceFacet>;
  StartPage?: Maybe<ContentModelReferenceFacet>;
  WasteBasket?: Maybe<ContentModelReferenceFacet>;
};

export type ContentRootsModelOrderByInput = {
  ContentAssetsRoot?: InputMaybe<ContentModelReferenceOrderByInput>;
  GlobalAssetsRoot?: InputMaybe<ContentModelReferenceOrderByInput>;
  RootPage?: InputMaybe<ContentModelReferenceOrderByInput>;
  SiteAssetsRoot?: InputMaybe<ContentModelReferenceOrderByInput>;
  StartPage?: InputMaybe<ContentModelReferenceOrderByInput>;
  WasteBasket?: InputMaybe<ContentModelReferenceOrderByInput>;
};

export type ContentRootsModelWhereInput = {
  ContentAssetsRoot?: InputMaybe<ContentModelReferenceWhereInput>;
  GlobalAssetsRoot?: InputMaybe<ContentModelReferenceWhereInput>;
  RootPage?: InputMaybe<ContentModelReferenceWhereInput>;
  SiteAssetsRoot?: InputMaybe<ContentModelReferenceWhereInput>;
  StartPage?: InputMaybe<ContentModelReferenceWhereInput>;
  WasteBasket?: InputMaybe<ContentModelReferenceWhereInput>;
};

export type ContentWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ContentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ContentWhereInput>>>;
};

/** Used by the DAM integration, cannot be edited */
export type DamAsset = IContent & IData & {
  __typename?: 'DAMAsset';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  Content?: Maybe<Scalars['String']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MimeType?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Thumbnail?: Maybe<BlobModel>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** Used by the DAM integration, cannot be edited */
export type DamAsset_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DamAssetAutocomplete = {
  __typename?: 'DAMAssetAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  MimeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Thumbnail?: Maybe<BlobModelAutocomplete>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type DamAssetAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamAssetAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamAssetAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamAssetAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamAssetAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamAssetAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamAssetAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamAssetAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type DamAssetFacet = {
  __typename?: 'DAMAssetFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  Content?: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MimeType?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Thumbnail?: Maybe<BlobModelFacet>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type DamAssetFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamAssetFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamAssetFacetContentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamAssetFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamAssetFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamAssetFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamAssetFacetMimeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamAssetFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamAssetFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamAssetFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamAssetFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamAssetFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamAssetFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamAssetFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamAssetFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamAssetFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type DamAssetOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  Content?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MimeType?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Thumbnail?: InputMaybe<BlobModelOrderByInput>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type DamAssetOutput = {
  __typename?: 'DAMAssetOutput';
  autocomplete?: Maybe<DamAssetAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<DamAssetFacet>;
  items?: Maybe<Array<Maybe<DamAsset>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DamAssetOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DamAssetWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  Content?: InputMaybe<SearchableStringFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MimeType?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Thumbnail?: InputMaybe<BlobModelWhereInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<DamAssetWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DamAssetWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DamAssetWhereInput>>>;
};

/** Used by the DAM integration, cannot be edited */
export type DamImageAsset = IContent & IData & {
  __typename?: 'DAMImageAsset';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  Content?: Maybe<Scalars['String']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MimeType?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Thumbnail?: Maybe<BlobModel>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** Used by the DAM integration, cannot be edited */
export type DamImageAsset_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DamImageAssetAutocomplete = {
  __typename?: 'DAMImageAssetAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  MimeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Thumbnail?: Maybe<BlobModelAutocomplete>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type DamImageAssetAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamImageAssetAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamImageAssetAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamImageAssetAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamImageAssetAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamImageAssetAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamImageAssetAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamImageAssetAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type DamImageAssetFacet = {
  __typename?: 'DAMImageAssetFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  Content?: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MimeType?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Thumbnail?: Maybe<BlobModelFacet>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type DamImageAssetFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamImageAssetFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamImageAssetFacetContentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamImageAssetFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamImageAssetFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamImageAssetFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamImageAssetFacetMimeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamImageAssetFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamImageAssetFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamImageAssetFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamImageAssetFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamImageAssetFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamImageAssetFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamImageAssetFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamImageAssetFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamImageAssetFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type DamImageAssetOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  Content?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MimeType?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Thumbnail?: InputMaybe<BlobModelOrderByInput>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type DamImageAssetOutput = {
  __typename?: 'DAMImageAssetOutput';
  autocomplete?: Maybe<DamImageAssetAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<DamImageAssetFacet>;
  items?: Maybe<Array<Maybe<DamImageAsset>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DamImageAssetOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DamImageAssetWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  Content?: InputMaybe<SearchableStringFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MimeType?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Thumbnail?: InputMaybe<BlobModelWhereInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<DamImageAssetWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DamImageAssetWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DamImageAssetWhereInput>>>;
};

/** Used by the DAM integration, cannot be edited */
export type DamVideoAsset = IContent & IData & {
  __typename?: 'DAMVideoAsset';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  Content?: Maybe<Scalars['String']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MimeType?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Thumbnail?: Maybe<BlobModel>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** Used by the DAM integration, cannot be edited */
export type DamVideoAsset_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DamVideoAssetAutocomplete = {
  __typename?: 'DAMVideoAssetAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  MimeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Thumbnail?: Maybe<BlobModelAutocomplete>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type DamVideoAssetAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamVideoAssetAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamVideoAssetAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamVideoAssetAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamVideoAssetAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamVideoAssetAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamVideoAssetAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type DamVideoAssetAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type DamVideoAssetFacet = {
  __typename?: 'DAMVideoAssetFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  Content?: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MimeType?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Thumbnail?: Maybe<BlobModelFacet>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type DamVideoAssetFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamVideoAssetFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamVideoAssetFacetContentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamVideoAssetFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamVideoAssetFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamVideoAssetFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamVideoAssetFacetMimeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamVideoAssetFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamVideoAssetFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamVideoAssetFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamVideoAssetFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamVideoAssetFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamVideoAssetFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamVideoAssetFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DamVideoAssetFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type DamVideoAssetFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type DamVideoAssetOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  Content?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MimeType?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Thumbnail?: InputMaybe<BlobModelOrderByInput>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type DamVideoAssetOutput = {
  __typename?: 'DAMVideoAssetOutput';
  autocomplete?: Maybe<DamVideoAssetAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<DamVideoAssetFacet>;
  items?: Maybe<Array<Maybe<DamVideoAsset>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DamVideoAssetOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DamVideoAssetWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  Content?: InputMaybe<SearchableStringFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MimeType?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Thumbnail?: InputMaybe<BlobModelWhereInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<DamVideoAssetWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DamVideoAssetWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DamVideoAssetWhereInput>>>;
};

export type Data = IData & {
  __typename?: 'Data';
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Data_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DataOrderByInput = {
  _ranking?: InputMaybe<Ranking>;
};

export type DataOutput = {
  __typename?: 'DataOutput';
  cursor?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<IData>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DataOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DataWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
};

export type DateFacet = {
  __typename?: 'DateFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum DateFacetUnit {
  /** Defined as 24 hours (86,400,000 milliseconds). All days begin at the earliest possible time, which is usually 00:00:00 (midnight). */
  Day = 'DAY',
  /** Defined as 60 minutes each (3,600,000 milliseconds). All hours begin at 00 minutes and 00 seconds. */
  Hour = 'HOUR',
  /** Defined as 1000 milliseconds each. */
  Minute = 'MINUTE'
}

export type DateFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Date']['input']>;
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

export type FloatFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Float']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Float']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Float']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Float']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Float']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Float']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Float']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type FooterConfigBlock = IContent & IData & {
  __typename?: 'FooterConfigBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  BrandButton?: Maybe<LinkItemNode>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  FooterChannelID?: Maybe<Scalars['String']['output']>;
  FooterLinkGroup1?: Maybe<FooterConfigBlockBlockData>;
  FooterLinkGroup2?: Maybe<FooterConfigBlockBlockData>;
  FooterLinkGroup3?: Maybe<FooterConfigBlockBlockData>;
  FooterLinkGroup4?: Maybe<FooterConfigBlockBlockData>;
  FooterLogo?: Maybe<Scalars['String']['output']>;
  FooterText?: Maybe<Scalars['String']['output']>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type FooterConfigBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type FooterConfigBlockAutocomplete = {
  __typename?: 'FooterConfigBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  BrandButton?: Maybe<LinkItemNodeAutocomplete>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  FooterChannelID?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  FooterLinkGroup1?: Maybe<FooterConfigBlockBlockDataAutocomplete>;
  FooterLinkGroup2?: Maybe<FooterConfigBlockBlockDataAutocomplete>;
  FooterLinkGroup3?: Maybe<FooterConfigBlockBlockDataAutocomplete>;
  FooterLinkGroup4?: Maybe<FooterConfigBlockBlockDataAutocomplete>;
  FooterLogo?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  FooterText?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type FooterConfigBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FooterConfigBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FooterConfigBlockAutocompleteFooterChannelIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FooterConfigBlockAutocompleteFooterLogoArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FooterConfigBlockAutocompleteFooterTextArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FooterConfigBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FooterConfigBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FooterConfigBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FooterConfigBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type FooterConfigBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type FooterConfigBlockBlockData = {
  __typename?: 'FooterConfigBlockBlockData';
  LinkListCaption?: Maybe<Scalars['String']['output']>;
  LinkListItems?: Maybe<Array<Maybe<LinkItemNode>>>;
};

export type FooterConfigBlockBlockDataAutocomplete = {
  __typename?: 'FooterConfigBlockBlockDataAutocomplete';
  LinkListCaption?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  LinkListItems?: Maybe<LinkItemNodeAutocomplete>;
};


export type FooterConfigBlockBlockDataAutocompleteLinkListCaptionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type FooterConfigBlockBlockDataFacet = {
  __typename?: 'FooterConfigBlockBlockDataFacet';
  LinkListCaption?: Maybe<Array<Maybe<StringFacet>>>;
  LinkListItems?: Maybe<LinkItemNodeFacet>;
};


export type FooterConfigBlockBlockDataFacetLinkListCaptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type FooterConfigBlockBlockDataOrderByInput = {
  LinkListCaption?: InputMaybe<OrderBy>;
  LinkListItems?: InputMaybe<LinkItemNodeOrderByInput>;
};

export type FooterConfigBlockBlockDataWhereInput = {
  LinkListCaption?: InputMaybe<StringFilterInput>;
  LinkListItems?: InputMaybe<LinkItemNodeWhereInput>;
};

export type FooterConfigBlockFacet = {
  __typename?: 'FooterConfigBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  BrandButton?: Maybe<LinkItemNodeFacet>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  FooterChannelID?: Maybe<Array<Maybe<StringFacet>>>;
  FooterLinkGroup1?: Maybe<FooterConfigBlockBlockDataFacet>;
  FooterLinkGroup2?: Maybe<FooterConfigBlockBlockDataFacet>;
  FooterLinkGroup3?: Maybe<FooterConfigBlockBlockDataFacet>;
  FooterLinkGroup4?: Maybe<FooterConfigBlockBlockDataFacet>;
  FooterLogo?: Maybe<Array<Maybe<StringFacet>>>;
  FooterText?: Maybe<Array<Maybe<StringFacet>>>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type FooterConfigBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterConfigBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type FooterConfigBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterConfigBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type FooterConfigBlockFacetFooterChannelIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterConfigBlockFacetFooterLogoArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterConfigBlockFacetFooterTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterConfigBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterConfigBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterConfigBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterConfigBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterConfigBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type FooterConfigBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterConfigBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type FooterConfigBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type FooterConfigBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type FooterConfigBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type FooterConfigBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  BrandButton?: InputMaybe<LinkItemNodeOrderByInput>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  FooterChannelID?: InputMaybe<OrderBy>;
  FooterLinkGroup1?: InputMaybe<FooterConfigBlockBlockDataOrderByInput>;
  FooterLinkGroup2?: InputMaybe<FooterConfigBlockBlockDataOrderByInput>;
  FooterLinkGroup3?: InputMaybe<FooterConfigBlockBlockDataOrderByInput>;
  FooterLinkGroup4?: InputMaybe<FooterConfigBlockBlockDataOrderByInput>;
  FooterLogo?: InputMaybe<OrderBy>;
  FooterText?: InputMaybe<OrderBy>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type FooterConfigBlockOutput = {
  __typename?: 'FooterConfigBlockOutput';
  autocomplete?: Maybe<FooterConfigBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<FooterConfigBlockFacet>;
  items?: Maybe<Array<Maybe<FooterConfigBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type FooterConfigBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FooterConfigBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  BrandButton?: InputMaybe<LinkItemNodeWhereInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  FooterChannelID?: InputMaybe<StringFilterInput>;
  FooterLinkGroup1?: InputMaybe<FooterConfigBlockBlockDataWhereInput>;
  FooterLinkGroup2?: InputMaybe<FooterConfigBlockBlockDataWhereInput>;
  FooterLinkGroup3?: InputMaybe<FooterConfigBlockBlockDataWhereInput>;
  FooterLinkGroup4?: InputMaybe<FooterConfigBlockBlockDataWhereInput>;
  FooterLogo?: InputMaybe<StringFilterInput>;
  FooterText?: InputMaybe<StringFilterInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<FooterConfigBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<FooterConfigBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<FooterConfigBlockWhereInput>>>;
};

/** Configuration of the website header */
export type HeaderConfigBlock = IContent & IData & {
  __typename?: 'HeaderConfigBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ChannelId?: Maybe<Scalars['String']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  /** Custom CSS to be injected into the frontend */
  CustomCSS?: Maybe<Scalars['String']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  NavMenuArea?: Maybe<Array<Maybe<ContentAreaItemModel>>>;
  ParentLink?: Maybe<ContentModelReference>;
  PromoText?: Maybe<Scalars['String']['output']>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  SiteLogo?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** Configuration of the website header */
export type HeaderConfigBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type HeaderConfigBlockAutocomplete = {
  __typename?: 'HeaderConfigBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ChannelId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CustomCSS?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  NavMenuArea?: Maybe<ContentAreaItemModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteLogo?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type HeaderConfigBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeaderConfigBlockAutocompleteChannelIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeaderConfigBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeaderConfigBlockAutocompleteCustomCssArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeaderConfigBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeaderConfigBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeaderConfigBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeaderConfigBlockAutocompleteSiteLogoArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeaderConfigBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeaderConfigBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type HeaderConfigBlockFacet = {
  __typename?: 'HeaderConfigBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ChannelId?: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  CustomCSS?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  NavMenuArea?: Maybe<ContentAreaItemModelFacet>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  PromoText?: Maybe<Array<Maybe<StringFacet>>>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  SiteLogo?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type HeaderConfigBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeaderConfigBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HeaderConfigBlockFacetChannelIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeaderConfigBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeaderConfigBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HeaderConfigBlockFacetCustomCssArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeaderConfigBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeaderConfigBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeaderConfigBlockFacetPromoTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeaderConfigBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeaderConfigBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeaderConfigBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HeaderConfigBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeaderConfigBlockFacetSiteLogoArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeaderConfigBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HeaderConfigBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeaderConfigBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HeaderConfigBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type HeaderConfigBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ChannelId?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  CustomCSS?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  NavMenuArea?: InputMaybe<ContentAreaItemModelOrderByInput>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  PromoText?: InputMaybe<OrderBy>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  SiteLogo?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type HeaderConfigBlockOutput = {
  __typename?: 'HeaderConfigBlockOutput';
  autocomplete?: Maybe<HeaderConfigBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<HeaderConfigBlockFacet>;
  items?: Maybe<Array<Maybe<HeaderConfigBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type HeaderConfigBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeaderConfigBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ChannelId?: InputMaybe<StringFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  CustomCSS?: InputMaybe<StringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  NavMenuArea?: InputMaybe<ContentAreaItemModelWhereInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  PromoText?: InputMaybe<SearchableStringFilterInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  SiteLogo?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<HeaderConfigBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HeaderConfigBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HeaderConfigBlockWhereInput>>>;
};

export type HeroBlock = IContent & IData & {
  __typename?: 'HeroBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Background?: Maybe<Scalars['String']['output']>;
  BannerLink?: Maybe<LinkItemNode>;
  BannerText?: Maybe<Scalars['String']['output']>;
  /** The main title shown on the banner */
  BannerTitle?: Maybe<Scalars['String']['output']>;
  CalloutOpacity?: Maybe<Scalars['Float']['output']>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type HeroBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type HeroBlockAutocomplete = {
  __typename?: 'HeroBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Background?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  BannerLink?: Maybe<LinkItemNodeAutocomplete>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type HeroBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeroBlockAutocompleteBackgroundArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeroBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeroBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeroBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeroBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeroBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeroBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type HeroBlockFacet = {
  __typename?: 'HeroBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Background?: Maybe<Array<Maybe<StringFacet>>>;
  BannerLink?: Maybe<LinkItemNodeFacet>;
  BannerText?: Maybe<Array<Maybe<StringFacet>>>;
  BannerTitle?: Maybe<Array<Maybe<StringFacet>>>;
  CalloutOpacity?: Maybe<Array<Maybe<NumberFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type HeroBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetBackgroundArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetBannerTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetBannerTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetCalloutOpacityArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type HeroBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HeroBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type HeroBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Background?: InputMaybe<OrderBy>;
  BannerLink?: InputMaybe<LinkItemNodeOrderByInput>;
  BannerText?: InputMaybe<OrderBy>;
  BannerTitle?: InputMaybe<OrderBy>;
  CalloutOpacity?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type HeroBlockOutput = {
  __typename?: 'HeroBlockOutput';
  autocomplete?: Maybe<HeroBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<HeroBlockFacet>;
  items?: Maybe<Array<Maybe<HeroBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type HeroBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeroBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Background?: InputMaybe<StringFilterInput>;
  BannerLink?: InputMaybe<LinkItemNodeWhereInput>;
  BannerText?: InputMaybe<SearchableStringFilterInput>;
  BannerTitle?: InputMaybe<SearchableStringFilterInput>;
  CalloutOpacity?: InputMaybe<FloatFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
};

/** Add a highlight text, with optional pay-off */
export type HighlightTextBlock = IContent & IData & {
  __typename?: 'HighlightTextBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  /** The pay off from the main text */
  PayOffText?: Maybe<Scalars['String']['output']>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  /** The main text shown to the visitor */
  Title?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** Add a highlight text, with optional pay-off */
export type HighlightTextBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type HighlightTextBlockAutocomplete = {
  __typename?: 'HighlightTextBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type HighlightTextBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HighlightTextBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HighlightTextBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HighlightTextBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HighlightTextBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HighlightTextBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HighlightTextBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type HighlightTextBlockFacet = {
  __typename?: 'HighlightTextBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  PayOffText?: Maybe<Array<Maybe<StringFacet>>>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type HighlightTextBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HighlightTextBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HighlightTextBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HighlightTextBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HighlightTextBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HighlightTextBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HighlightTextBlockFacetPayOffTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HighlightTextBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HighlightTextBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HighlightTextBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HighlightTextBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HighlightTextBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HighlightTextBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HighlightTextBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HighlightTextBlockFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HighlightTextBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type HighlightTextBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  PayOffText?: InputMaybe<OrderBy>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Title?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type HighlightTextBlockOutput = {
  __typename?: 'HighlightTextBlockOutput';
  autocomplete?: Maybe<HighlightTextBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<HighlightTextBlockFacet>;
  items?: Maybe<Array<Maybe<HighlightTextBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type HighlightTextBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HighlightTextBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  PayOffText?: InputMaybe<SearchableStringFilterInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Title?: InputMaybe<SearchableStringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<HighlightTextBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HighlightTextBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HighlightTextBlockWhereInput>>>;
};

export type HostDefinitionModel = {
  __typename?: 'HostDefinitionModel';
  Language?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  Type?: Maybe<Scalars['String']['output']>;
};

export type HostDefinitionModelAutocomplete = {
  __typename?: 'HostDefinitionModelAutocomplete';
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type HostDefinitionModelAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HostDefinitionModelAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type HostDefinitionModelFacet = {
  __typename?: 'HostDefinitionModelFacet';
  Language?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type HostDefinitionModelFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HostDefinitionModelFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type HostDefinitionModelOrderByInput = {
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  Type?: InputMaybe<OrderBy>;
};

export type HostDefinitionModelWhereInput = {
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<StringFilterInput>;
  Type?: InputMaybe<StringFilterInput>;
};

/** Base object for configured commerce categories or products */
export type IConfiguredCommerceCatalogEntry = {
  Changed: Scalars['Date']['output'];
  Created: Scalars['Date']['output'];
  Id: Scalars['String']['output'];
  Language: ConfiguredCommerceLanguage;
  RelativePath?: Maybe<Scalars['String']['output']>;
  StartPublish: Scalars['Date']['output'];
  StopPublish?: Maybe<Scalars['Date']['output']>;
  URI: Scalars['String']['output'];
  UrlSegment?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** Base object for configured commerce categories or products */
export type IConfiguredCommerceCatalogEntry_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type IContent = {
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IContent_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type IData = {
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IData_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type InlineBlockPropertyModel = {
  __typename?: 'InlineBlockPropertyModel';
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type InlineBlockPropertyModelAutocomplete = {
  __typename?: 'InlineBlockPropertyModelAutocomplete';
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type InlineBlockPropertyModelAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type InlineBlockPropertyModelFacet = {
  __typename?: 'InlineBlockPropertyModelFacet';
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type InlineBlockPropertyModelFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type InlineBlockPropertyModelOrderByInput = {
  ContentType?: InputMaybe<OrderBy>;
};

export type InlineBlockPropertyModelSearch = {
  __typename?: 'InlineBlockPropertyModelSearch';
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type InlineBlockPropertyModelSearchFacet = {
  __typename?: 'InlineBlockPropertyModelSearchFacet';
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
};


export type InlineBlockPropertyModelSearchFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type InlineBlockPropertyModelSearchOrderByInput = {
  ContentType?: InputMaybe<OrderBy>;
};

export type InlineBlockPropertyModelSearchWhereInput = {
  ContentType?: InputMaybe<SearchableStringFilterInput>;
};

export type InlineBlockPropertyModelWhereInput = {
  ContentType?: InputMaybe<StringFilterInput>;
};

export type IntFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Int']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Int']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Int']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Int']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Int']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

/** A page consisting of a single content area for flexible page layouts */
export type LandingPage = IContent & IData & {
  __typename?: 'LandingPage';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  LandingPageSeo?: Maybe<LandingPageBlockData>;
  Language?: Maybe<ContentLanguageModel>;
  /** Add blocks here to create the page */
  MainContentArea?: Maybe<Array<Maybe<ContentAreaItemModelSearch>>>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MetaDescription?: Maybe<Scalars['String']['output']>;
  /** Override the title with a specific value */
  MetaTitle?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  /** Content shown in a full-width container at the top of the page */
  TopContentArea?: Maybe<Array<Maybe<ContentAreaItemModelSearch>>>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** A page consisting of a single content area for flexible page layouts */
export type LandingPage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type LandingPageAutocomplete = {
  __typename?: 'LandingPageAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  LandingPageSeo?: Maybe<LandingPageBlockDataAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  MetaDescription?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type LandingPageAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LandingPageAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LandingPageAutocompleteMetaDescriptionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LandingPageAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LandingPageAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LandingPageAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LandingPageAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LandingPageAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LandingPageBlockData = {
  __typename?: 'LandingPageBlockData';
  GraphType?: Maybe<Scalars['String']['output']>;
  MetaDescription?: Maybe<Scalars['String']['output']>;
  MetaTitle?: Maybe<Scalars['String']['output']>;
  SharingImage?: Maybe<ContentModelReference>;
};

export type LandingPageBlockDataAutocomplete = {
  __typename?: 'LandingPageBlockDataAutocomplete';
  GraphType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MetaDescription?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MetaTitle?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SharingImage?: Maybe<ContentModelReferenceAutocomplete>;
};


export type LandingPageBlockDataAutocompleteGraphTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LandingPageBlockDataAutocompleteMetaDescriptionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LandingPageBlockDataAutocompleteMetaTitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LandingPageBlockDataFacet = {
  __typename?: 'LandingPageBlockDataFacet';
  GraphType?: Maybe<Array<Maybe<StringFacet>>>;
  MetaDescription?: Maybe<Array<Maybe<StringFacet>>>;
  MetaTitle?: Maybe<Array<Maybe<StringFacet>>>;
  SharingImage?: Maybe<ContentModelReferenceFacet>;
};


export type LandingPageBlockDataFacetGraphTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingPageBlockDataFacetMetaDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingPageBlockDataFacetMetaTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LandingPageBlockDataOrderByInput = {
  GraphType?: InputMaybe<OrderBy>;
  MetaDescription?: InputMaybe<OrderBy>;
  MetaTitle?: InputMaybe<OrderBy>;
  SharingImage?: InputMaybe<ContentModelReferenceOrderByInput>;
};

export type LandingPageBlockDataWhereInput = {
  GraphType?: InputMaybe<StringFilterInput>;
  MetaDescription?: InputMaybe<StringFilterInput>;
  MetaTitle?: InputMaybe<StringFilterInput>;
  SharingImage?: InputMaybe<ContentModelReferenceWhereInput>;
};

export type LandingPageFacet = {
  __typename?: 'LandingPageFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  LandingPageSeo?: Maybe<LandingPageBlockDataFacet>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MainContentArea?: Maybe<ContentAreaItemModelSearchFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MetaDescription?: Maybe<Array<Maybe<StringFacet>>>;
  MetaTitle?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  TopContentArea?: Maybe<ContentAreaItemModelSearchFacet>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type LandingPageFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingPageFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LandingPageFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingPageFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LandingPageFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingPageFacetMetaDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingPageFacetMetaTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingPageFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingPageFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingPageFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingPageFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LandingPageFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingPageFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LandingPageFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingPageFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LandingPageFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LandingPageOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  LandingPageSeo?: InputMaybe<LandingPageBlockDataOrderByInput>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MainContentArea?: InputMaybe<ContentAreaItemModelSearchOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MetaDescription?: InputMaybe<OrderBy>;
  MetaTitle?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  TopContentArea?: InputMaybe<ContentAreaItemModelSearchOrderByInput>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type LandingPageOutput = {
  __typename?: 'LandingPageOutput';
  autocomplete?: Maybe<LandingPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<LandingPageFacet>;
  items?: Maybe<Array<Maybe<LandingPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type LandingPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LandingPageWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  LandingPageSeo?: InputMaybe<LandingPageBlockDataWhereInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MainContentArea?: InputMaybe<ContentAreaItemModelSearchWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MetaDescription?: InputMaybe<StringFilterInput>;
  MetaTitle?: InputMaybe<SearchableStringFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  TopContentArea?: InputMaybe<ContentAreaItemModelSearchWhereInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
};

export type LinkItemNode = {
  __typename?: 'LinkItemNode';
  ContentLink?: Maybe<ContentModelReference>;
  Href?: Maybe<Scalars['String']['output']>;
  Target?: Maybe<Scalars['String']['output']>;
  Text?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
};

export type LinkItemNodeAutocomplete = {
  __typename?: 'LinkItemNodeAutocomplete';
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  Href?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Target?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Text?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Title?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type LinkItemNodeAutocompleteHrefArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LinkItemNodeAutocompleteTargetArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LinkItemNodeAutocompleteTextArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LinkItemNodeAutocompleteTitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LinkItemNodeFacet = {
  __typename?: 'LinkItemNodeFacet';
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  Href?: Maybe<Array<Maybe<StringFacet>>>;
  Target?: Maybe<Array<Maybe<StringFacet>>>;
  Text?: Maybe<Array<Maybe<StringFacet>>>;
  Title?: Maybe<Array<Maybe<StringFacet>>>;
};


export type LinkItemNodeFacetHrefArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkItemNodeFacetTargetArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkItemNodeFacetTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkItemNodeFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LinkItemNodeOrderByInput = {
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  Href?: InputMaybe<OrderBy>;
  Target?: InputMaybe<OrderBy>;
  Text?: InputMaybe<OrderBy>;
  Title?: InputMaybe<OrderBy>;
};

export type LinkItemNodeWhereInput = {
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  Href?: InputMaybe<StringFilterInput>;
  Target?: InputMaybe<StringFilterInput>;
  Text?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
};

/** Create a list of links which can be presented as part of another content item. */
export type LinkListBlock = IContent & IData & {
  __typename?: 'LinkListBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  /** The label intended to be placed above the list of links */
  LinkListCaption?: Maybe<Scalars['String']['output']>;
  LinkListItems?: Maybe<Array<Maybe<LinkItemNode>>>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** Create a list of links which can be presented as part of another content item. */
export type LinkListBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type LinkListBlockAutocomplete = {
  __typename?: 'LinkListBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  LinkListItems?: Maybe<LinkItemNodeAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type LinkListBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LinkListBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LinkListBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LinkListBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LinkListBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LinkListBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LinkListBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LinkListBlockFacet = {
  __typename?: 'LinkListBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  LinkListCaption?: Maybe<Array<Maybe<StringFacet>>>;
  LinkListItems?: Maybe<LinkItemNodeFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type LinkListBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkListBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LinkListBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkListBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LinkListBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkListBlockFacetLinkListCaptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkListBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkListBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkListBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkListBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LinkListBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkListBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LinkListBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkListBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LinkListBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LinkListBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  LinkListCaption?: InputMaybe<OrderBy>;
  LinkListItems?: InputMaybe<LinkItemNodeOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type LinkListBlockOutput = {
  __typename?: 'LinkListBlockOutput';
  autocomplete?: Maybe<LinkListBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<LinkListBlockFacet>;
  items?: Maybe<Array<Maybe<LinkListBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type LinkListBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LinkListBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  LinkListCaption?: InputMaybe<SearchableStringFilterInput>;
  LinkListItems?: InputMaybe<LinkItemNodeWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<LinkListBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<LinkListBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<LinkListBlockWhereInput>>>;
};

export enum LinkTypes {
  Childcategories = 'CHILDCATEGORIES',
  Default = 'DEFAULT',
  Parentcategory = 'PARENTCATEGORY'
}

export enum Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL',
  En = 'en',
  Nl = 'nl',
  NlBe = 'nl_BE'
}

/** Show a listing of locations, located as direct child of this page  */
export type LocationListPage = IContent & IData & {
  __typename?: 'LocationListPage';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  LocationListSeo?: Maybe<LocationListPageBlockData>;
  LocationListTitle?: Maybe<Scalars['String']['output']>;
  LocationsImage?: Maybe<ContentModelReferenceSearch>;
  LocationsIntroduction?: Maybe<Scalars['String']['output']>;
  LocationsMainContent?: Maybe<Array<Maybe<ContentAreaItemModelSearch>>>;
  LocationsTopArea?: Maybe<Array<Maybe<ContentAreaItemModelSearch>>>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** Show a listing of locations, located as direct child of this page  */
export type LocationListPage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type LocationListPageAutocomplete = {
  __typename?: 'LocationListPageAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  LocationListSeo?: Maybe<LocationListPageBlockDataAutocomplete>;
  LocationListTitle?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type LocationListPageAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LocationListPageAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LocationListPageAutocompleteLocationListTitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LocationListPageAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LocationListPageAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LocationListPageAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LocationListPageAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LocationListPageAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LocationListPageBlockData = {
  __typename?: 'LocationListPageBlockData';
  GraphType?: Maybe<Scalars['String']['output']>;
  MetaDescription?: Maybe<Scalars['String']['output']>;
  MetaTitle?: Maybe<Scalars['String']['output']>;
  SharingImage?: Maybe<ContentModelReference>;
};

export type LocationListPageBlockDataAutocomplete = {
  __typename?: 'LocationListPageBlockDataAutocomplete';
  GraphType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MetaDescription?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MetaTitle?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SharingImage?: Maybe<ContentModelReferenceAutocomplete>;
};


export type LocationListPageBlockDataAutocompleteGraphTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LocationListPageBlockDataAutocompleteMetaDescriptionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LocationListPageBlockDataAutocompleteMetaTitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LocationListPageBlockDataFacet = {
  __typename?: 'LocationListPageBlockDataFacet';
  GraphType?: Maybe<Array<Maybe<StringFacet>>>;
  MetaDescription?: Maybe<Array<Maybe<StringFacet>>>;
  MetaTitle?: Maybe<Array<Maybe<StringFacet>>>;
  SharingImage?: Maybe<ContentModelReferenceFacet>;
};


export type LocationListPageBlockDataFacetGraphTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationListPageBlockDataFacetMetaDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationListPageBlockDataFacetMetaTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LocationListPageBlockDataOrderByInput = {
  GraphType?: InputMaybe<OrderBy>;
  MetaDescription?: InputMaybe<OrderBy>;
  MetaTitle?: InputMaybe<OrderBy>;
  SharingImage?: InputMaybe<ContentModelReferenceOrderByInput>;
};

export type LocationListPageBlockDataWhereInput = {
  GraphType?: InputMaybe<StringFilterInput>;
  MetaDescription?: InputMaybe<StringFilterInput>;
  MetaTitle?: InputMaybe<StringFilterInput>;
  SharingImage?: InputMaybe<ContentModelReferenceWhereInput>;
};

export type LocationListPageFacet = {
  __typename?: 'LocationListPageFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  LocationListSeo?: Maybe<LocationListPageBlockDataFacet>;
  LocationListTitle?: Maybe<Array<Maybe<StringFacet>>>;
  LocationsImage?: Maybe<ContentModelReferenceSearchFacet>;
  LocationsIntroduction?: Maybe<Array<Maybe<StringFacet>>>;
  LocationsMainContent?: Maybe<ContentAreaItemModelSearchFacet>;
  LocationsTopArea?: Maybe<ContentAreaItemModelSearchFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type LocationListPageFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationListPageFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LocationListPageFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationListPageFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LocationListPageFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationListPageFacetLocationListTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationListPageFacetLocationsIntroductionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationListPageFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationListPageFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationListPageFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationListPageFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LocationListPageFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationListPageFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LocationListPageFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationListPageFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LocationListPageFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LocationListPageOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  LocationListSeo?: InputMaybe<LocationListPageBlockDataOrderByInput>;
  LocationListTitle?: InputMaybe<OrderBy>;
  LocationsImage?: InputMaybe<ContentModelReferenceSearchOrderByInput>;
  LocationsIntroduction?: InputMaybe<OrderBy>;
  LocationsMainContent?: InputMaybe<ContentAreaItemModelSearchOrderByInput>;
  LocationsTopArea?: InputMaybe<ContentAreaItemModelSearchOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type LocationListPageOutput = {
  __typename?: 'LocationListPageOutput';
  autocomplete?: Maybe<LocationListPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<LocationListPageFacet>;
  items?: Maybe<Array<Maybe<LocationListPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type LocationListPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LocationListPageWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  LocationListSeo?: InputMaybe<LocationListPageBlockDataWhereInput>;
  LocationListTitle?: InputMaybe<StringFilterInput>;
  LocationsImage?: InputMaybe<ContentModelReferenceSearchWhereInput>;
  LocationsIntroduction?: InputMaybe<SearchableStringFilterInput>;
  LocationsMainContent?: InputMaybe<ContentAreaItemModelSearchWhereInput>;
  LocationsTopArea?: InputMaybe<ContentAreaItemModelSearchWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<LocationListPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<LocationListPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<LocationListPageWhereInput>>>;
};

/** An office, service point or ATM location */
export type LocationPage = IContent & IData & {
  __typename?: 'LocationPage';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  LocationCity?: Maybe<Scalars['String']['output']>;
  LocationContinent?: Maybe<Scalars['String']['output']>;
  LocationCountry?: Maybe<Scalars['String']['output']>;
  LocationImage?: Maybe<ContentModelReferenceSearch>;
  LocationLatitude?: Maybe<Scalars['Float']['output']>;
  LocationLongitude?: Maybe<Scalars['Float']['output']>;
  LocationPhone?: Maybe<Scalars['String']['output']>;
  LocationPostalCode?: Maybe<Scalars['String']['output']>;
  LocationSeoSettings?: Maybe<LocationPageBlockData>;
  LocationServices?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  LocationState?: Maybe<Scalars['String']['output']>;
  LocationStreet1?: Maybe<Scalars['String']['output']>;
  LocationStreet2?: Maybe<Scalars['String']['output']>;
  LocationText?: Maybe<Scalars['String']['output']>;
  LocationTitle?: Maybe<Scalars['String']['output']>;
  LocationTopItem?: Maybe<Scalars['Bool']['output']>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** An office, service point or ATM location */
export type LocationPage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type LocationPageAutocomplete = {
  __typename?: 'LocationPageAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  LocationSeoSettings?: Maybe<LocationPageBlockDataAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type LocationPageAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LocationPageAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LocationPageAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LocationPageAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LocationPageAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LocationPageAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LocationPageAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LocationPageBlockData = {
  __typename?: 'LocationPageBlockData';
  GraphType?: Maybe<Scalars['String']['output']>;
  MetaDescription?: Maybe<Scalars['String']['output']>;
  MetaTitle?: Maybe<Scalars['String']['output']>;
  SharingImage?: Maybe<ContentModelReference>;
};

export type LocationPageBlockDataAutocomplete = {
  __typename?: 'LocationPageBlockDataAutocomplete';
  GraphType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MetaDescription?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MetaTitle?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SharingImage?: Maybe<ContentModelReferenceAutocomplete>;
};


export type LocationPageBlockDataAutocompleteGraphTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LocationPageBlockDataAutocompleteMetaDescriptionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LocationPageBlockDataAutocompleteMetaTitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LocationPageBlockDataFacet = {
  __typename?: 'LocationPageBlockDataFacet';
  GraphType?: Maybe<Array<Maybe<StringFacet>>>;
  MetaDescription?: Maybe<Array<Maybe<StringFacet>>>;
  MetaTitle?: Maybe<Array<Maybe<StringFacet>>>;
  SharingImage?: Maybe<ContentModelReferenceFacet>;
};


export type LocationPageBlockDataFacetGraphTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationPageBlockDataFacetMetaDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationPageBlockDataFacetMetaTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LocationPageBlockDataOrderByInput = {
  GraphType?: InputMaybe<OrderBy>;
  MetaDescription?: InputMaybe<OrderBy>;
  MetaTitle?: InputMaybe<OrderBy>;
  SharingImage?: InputMaybe<ContentModelReferenceOrderByInput>;
};

export type LocationPageBlockDataWhereInput = {
  GraphType?: InputMaybe<StringFilterInput>;
  MetaDescription?: InputMaybe<StringFilterInput>;
  MetaTitle?: InputMaybe<StringFilterInput>;
  SharingImage?: InputMaybe<ContentModelReferenceWhereInput>;
};

export type LocationPageFacet = {
  __typename?: 'LocationPageFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  LocationCity?: Maybe<Array<Maybe<StringFacet>>>;
  LocationContinent?: Maybe<Array<Maybe<StringFacet>>>;
  LocationCountry?: Maybe<Array<Maybe<StringFacet>>>;
  LocationImage?: Maybe<ContentModelReferenceSearchFacet>;
  LocationLatitude?: Maybe<Array<Maybe<NumberFacet>>>;
  LocationLongitude?: Maybe<Array<Maybe<NumberFacet>>>;
  LocationPhone?: Maybe<Array<Maybe<StringFacet>>>;
  LocationPostalCode?: Maybe<Array<Maybe<StringFacet>>>;
  LocationSeoSettings?: Maybe<LocationPageBlockDataFacet>;
  LocationServices?: Maybe<Array<Maybe<StringFacet>>>;
  LocationState?: Maybe<Array<Maybe<StringFacet>>>;
  LocationStreet1?: Maybe<Array<Maybe<StringFacet>>>;
  LocationStreet2?: Maybe<Array<Maybe<StringFacet>>>;
  LocationText?: Maybe<Array<Maybe<StringFacet>>>;
  LocationTitle?: Maybe<Array<Maybe<StringFacet>>>;
  LocationTopItem?: Maybe<Array<Maybe<StringFacet>>>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type LocationPageFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationPageFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LocationPageFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationPageFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LocationPageFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationPageFacetLocationCityArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationPageFacetLocationContinentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationPageFacetLocationCountryArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationPageFacetLocationLatitudeArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type LocationPageFacetLocationLongitudeArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type LocationPageFacetLocationPhoneArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationPageFacetLocationPostalCodeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationPageFacetLocationServicesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationPageFacetLocationStateArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationPageFacetLocationStreet1Args = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationPageFacetLocationStreet2Args = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationPageFacetLocationTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationPageFacetLocationTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationPageFacetLocationTopItemArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationPageFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationPageFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationPageFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationPageFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LocationPageFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationPageFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LocationPageFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LocationPageFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LocationPageFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LocationPageOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  LocationCity?: InputMaybe<OrderBy>;
  LocationContinent?: InputMaybe<OrderBy>;
  LocationCountry?: InputMaybe<OrderBy>;
  LocationImage?: InputMaybe<ContentModelReferenceSearchOrderByInput>;
  LocationLatitude?: InputMaybe<OrderBy>;
  LocationLongitude?: InputMaybe<OrderBy>;
  LocationPhone?: InputMaybe<OrderBy>;
  LocationPostalCode?: InputMaybe<OrderBy>;
  LocationSeoSettings?: InputMaybe<LocationPageBlockDataOrderByInput>;
  LocationServices?: InputMaybe<OrderBy>;
  LocationState?: InputMaybe<OrderBy>;
  LocationStreet1?: InputMaybe<OrderBy>;
  LocationStreet2?: InputMaybe<OrderBy>;
  LocationText?: InputMaybe<OrderBy>;
  LocationTitle?: InputMaybe<OrderBy>;
  LocationTopItem?: InputMaybe<OrderBy>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type LocationPageOutput = {
  __typename?: 'LocationPageOutput';
  autocomplete?: Maybe<LocationPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<LocationPageFacet>;
  items?: Maybe<Array<Maybe<LocationPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type LocationPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LocationPageWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  LocationCity?: InputMaybe<SearchableStringFilterInput>;
  LocationContinent?: InputMaybe<SearchableStringFilterInput>;
  LocationCountry?: InputMaybe<SearchableStringFilterInput>;
  LocationImage?: InputMaybe<ContentModelReferenceSearchWhereInput>;
  LocationLatitude?: InputMaybe<FloatFilterInput>;
  LocationLongitude?: InputMaybe<FloatFilterInput>;
  LocationPhone?: InputMaybe<SearchableStringFilterInput>;
  LocationPostalCode?: InputMaybe<SearchableStringFilterInput>;
  LocationSeoSettings?: InputMaybe<LocationPageBlockDataWhereInput>;
  LocationServices?: InputMaybe<SearchableStringFilterInput>;
  LocationState?: InputMaybe<SearchableStringFilterInput>;
  LocationStreet1?: InputMaybe<SearchableStringFilterInput>;
  LocationStreet2?: InputMaybe<SearchableStringFilterInput>;
  LocationText?: InputMaybe<SearchableStringFilterInput>;
  LocationTitle?: InputMaybe<SearchableStringFilterInput>;
  LocationTopItem?: InputMaybe<BoolFilterInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<LocationPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<LocationPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<LocationPageWhereInput>>>;
};

export type NavMenuItem = IContent & IData & {
  __typename?: 'NavMenuItem';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Label?: Maybe<Scalars['String']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  Links?: Maybe<Array<Maybe<LinkItemNode>>>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MenuContent?: Maybe<Array<Maybe<ContentAreaItemModel>>>;
  Name?: Maybe<Scalars['String']['output']>;
  NavItemBottomLink?: Maybe<LinkItemNode>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type NavMenuItem_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type NavMenuItemAutocomplete = {
  __typename?: 'NavMenuItemAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  Links?: Maybe<LinkItemNodeAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  MenuContent?: Maybe<ContentAreaItemModelAutocomplete>;
  NavItemBottomLink?: Maybe<LinkItemNodeAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type NavMenuItemAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NavMenuItemAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NavMenuItemAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NavMenuItemAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NavMenuItemAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NavMenuItemAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type NavMenuItemAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type NavMenuItemFacet = {
  __typename?: 'NavMenuItemFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Label?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  Links?: Maybe<LinkItemNodeFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MenuContent?: Maybe<ContentAreaItemModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  NavItemBottomLink?: Maybe<LinkItemNodeFacet>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type NavMenuItemFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NavMenuItemFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type NavMenuItemFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NavMenuItemFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type NavMenuItemFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NavMenuItemFacetLabelArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NavMenuItemFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NavMenuItemFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NavMenuItemFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NavMenuItemFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type NavMenuItemFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NavMenuItemFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type NavMenuItemFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type NavMenuItemFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type NavMenuItemFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type NavMenuItemOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Label?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  Links?: InputMaybe<LinkItemNodeOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MenuContent?: InputMaybe<ContentAreaItemModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  NavItemBottomLink?: InputMaybe<LinkItemNodeOrderByInput>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type NavMenuItemOutput = {
  __typename?: 'NavMenuItemOutput';
  autocomplete?: Maybe<NavMenuItemAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<NavMenuItemFacet>;
  items?: Maybe<Array<Maybe<NavMenuItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type NavMenuItemOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NavMenuItemWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Label?: InputMaybe<SearchableStringFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  Links?: InputMaybe<LinkItemNodeWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MenuContent?: InputMaybe<ContentAreaItemModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  NavItemBottomLink?: InputMaybe<LinkItemNodeWhereInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<NavMenuItemWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<NavMenuItemWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<NavMenuItemWhereInput>>>;
};

export type NumberFacet = {
  __typename?: 'NumberFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Place an embed from the Optimizely Data Platform into your site */
export type OdpEmbedBlock = IContent & IData & {
  __typename?: 'OdpEmbedBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  /** The Content ID shown on the Web Embed content you want to show */
  ContentId?: Maybe<Scalars['String']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** Place an embed from the Optimizely Data Platform into your site */
export type OdpEmbedBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OdpEmbedBlockAutocomplete = {
  __typename?: 'OdpEmbedBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type OdpEmbedBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type OdpEmbedBlockAutocompleteContentIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type OdpEmbedBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type OdpEmbedBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type OdpEmbedBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type OdpEmbedBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type OdpEmbedBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type OdpEmbedBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type OdpEmbedBlockFacet = {
  __typename?: 'OdpEmbedBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentId?: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type OdpEmbedBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type OdpEmbedBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type OdpEmbedBlockFacetContentIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type OdpEmbedBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type OdpEmbedBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type OdpEmbedBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type OdpEmbedBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type OdpEmbedBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type OdpEmbedBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type OdpEmbedBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type OdpEmbedBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type OdpEmbedBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type OdpEmbedBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type OdpEmbedBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type OdpEmbedBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type OdpEmbedBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentId?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type OdpEmbedBlockOutput = {
  __typename?: 'OdpEmbedBlockOutput';
  autocomplete?: Maybe<OdpEmbedBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OdpEmbedBlockFacet>;
  items?: Maybe<Array<Maybe<OdpEmbedBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OdpEmbedBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OdpEmbedBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentId?: InputMaybe<StringFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<OdpEmbedBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OdpEmbedBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OdpEmbedBlockWhereInput>>>;
};

export enum OrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum OrderByFacetType {
  Count = 'COUNT',
  Value = 'VALUE'
}

export type PageSeoSettings = IContent & IData & {
  __typename?: 'PageSeoSettings';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  GraphType?: Maybe<Scalars['String']['output']>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  MetaDescription?: Maybe<Scalars['String']['output']>;
  MetaTitle?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SharingImage?: Maybe<ContentModelReference>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type PageSeoSettings_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type PageSeoSettingsAutocomplete = {
  __typename?: 'PageSeoSettingsAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  GraphType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  MetaDescription?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MetaTitle?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SharingImage?: Maybe<ContentModelReferenceAutocomplete>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type PageSeoSettingsAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PageSeoSettingsAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PageSeoSettingsAutocompleteGraphTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PageSeoSettingsAutocompleteMetaDescriptionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PageSeoSettingsAutocompleteMetaTitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PageSeoSettingsAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PageSeoSettingsAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PageSeoSettingsAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PageSeoSettingsAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type PageSeoSettingsAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type PageSeoSettingsFacet = {
  __typename?: 'PageSeoSettingsFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  GraphType?: Maybe<Array<Maybe<StringFacet>>>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  MetaDescription?: Maybe<Array<Maybe<StringFacet>>>;
  MetaTitle?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SharingImage?: Maybe<ContentModelReferenceFacet>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type PageSeoSettingsFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PageSeoSettingsFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PageSeoSettingsFacetGraphTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsFacetMetaDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsFacetMetaTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PageSeoSettingsFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PageSeoSettingsFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type PageSeoSettingsFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type PageSeoSettingsOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  GraphType?: InputMaybe<OrderBy>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  MetaDescription?: InputMaybe<OrderBy>;
  MetaTitle?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SharingImage?: InputMaybe<ContentModelReferenceOrderByInput>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type PageSeoSettingsOutput = {
  __typename?: 'PageSeoSettingsOutput';
  autocomplete?: Maybe<PageSeoSettingsAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<PageSeoSettingsFacet>;
  items?: Maybe<Array<Maybe<PageSeoSettings>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type PageSeoSettingsOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageSeoSettingsWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  GraphType?: InputMaybe<StringFilterInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  MetaDescription?: InputMaybe<StringFilterInput>;
  MetaTitle?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SharingImage?: InputMaybe<ContentModelReferenceWhereInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
};

export type Product = IContent & IData & {
  __typename?: 'Product';
  AdditionalMedia?: Maybe<Array<Maybe<ContentModelReference>>>;
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  Downloads?: Maybe<Array<Maybe<ContentModelReference>>>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  HighlightedProperties?: Maybe<Array<Maybe<ContentAreaItemModelSearch>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MainImage?: Maybe<ContentModelReference>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  ProductCode?: Maybe<Scalars['String']['output']>;
  ProductDescription?: Maybe<Scalars['String']['output']>;
  ProductName?: Maybe<Scalars['String']['output']>;
  ProductTagLine?: Maybe<Scalars['String']['output']>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  ShortDescription?: Maybe<Scalars['String']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Product_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ProductAutocomplete = {
  __typename?: 'ProductAutocomplete';
  AdditionalMedia?: Maybe<ContentModelReferenceAutocomplete>;
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Downloads?: Maybe<ContentModelReferenceAutocomplete>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MainImage?: Maybe<ContentModelReferenceAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ProductName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ProductAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProductAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProductAutocompleteProductNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProductAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProductAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProductAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProductAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProductAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ProductFacet = {
  __typename?: 'ProductFacet';
  AdditionalMedia?: Maybe<ContentModelReferenceFacet>;
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  Downloads?: Maybe<ContentModelReferenceFacet>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  HighlightedProperties?: Maybe<ContentAreaItemModelSearchFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MainImage?: Maybe<ContentModelReferenceFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  ProductCode?: Maybe<Array<Maybe<StringFacet>>>;
  ProductDescription?: Maybe<Array<Maybe<StringFacet>>>;
  ProductName?: Maybe<Array<Maybe<StringFacet>>>;
  ProductTagLine?: Maybe<Array<Maybe<StringFacet>>>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  ShortDescription?: Maybe<Array<Maybe<StringFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ProductFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductFacetProductCodeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductFacetProductDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductFacetProductNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductFacetProductTagLineArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductFacetShortDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ProductOrderByInput = {
  AdditionalMedia?: InputMaybe<ContentModelReferenceOrderByInput>;
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  Downloads?: InputMaybe<ContentModelReferenceOrderByInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  HighlightedProperties?: InputMaybe<ContentAreaItemModelSearchOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MainImage?: InputMaybe<ContentModelReferenceOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ProductCode?: InputMaybe<OrderBy>;
  ProductDescription?: InputMaybe<OrderBy>;
  ProductName?: InputMaybe<OrderBy>;
  ProductTagLine?: InputMaybe<OrderBy>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  ShortDescription?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ProductOutput = {
  __typename?: 'ProductOutput';
  autocomplete?: Maybe<ProductAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ProductFacet>;
  items?: Maybe<Array<Maybe<Product>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ProductOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A detailed product property */
export type ProductTextProperty = IContent & IData & {
  __typename?: 'ProductTextProperty';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  PropertyName?: Maybe<Scalars['String']['output']>;
  PropertyValue?: Maybe<Scalars['String']['output']>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** A detailed product property */
export type ProductTextProperty_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ProductTextPropertyAutocomplete = {
  __typename?: 'ProductTextPropertyAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ProductTextPropertyAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProductTextPropertyAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProductTextPropertyAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProductTextPropertyAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProductTextPropertyAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProductTextPropertyAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ProductTextPropertyAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ProductTextPropertyFacet = {
  __typename?: 'ProductTextPropertyFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  PropertyName?: Maybe<Array<Maybe<StringFacet>>>;
  PropertyValue?: Maybe<Array<Maybe<StringFacet>>>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ProductTextPropertyFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductTextPropertyFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductTextPropertyFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductTextPropertyFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductTextPropertyFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductTextPropertyFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductTextPropertyFacetPropertyNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductTextPropertyFacetPropertyValueArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductTextPropertyFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductTextPropertyFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductTextPropertyFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductTextPropertyFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductTextPropertyFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductTextPropertyFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ProductTextPropertyFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductTextPropertyFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ProductTextPropertyOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  PropertyName?: InputMaybe<OrderBy>;
  PropertyValue?: InputMaybe<OrderBy>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type ProductTextPropertyOutput = {
  __typename?: 'ProductTextPropertyOutput';
  autocomplete?: Maybe<ProductTextPropertyAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ProductTextPropertyFacet>;
  items?: Maybe<Array<Maybe<ProductTextProperty>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ProductTextPropertyOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductTextPropertyWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  PropertyName?: InputMaybe<SearchableStringFilterInput>;
  PropertyValue?: InputMaybe<SearchableStringFilterInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ProductTextPropertyWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ProductTextPropertyWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ProductTextPropertyWhereInput>>>;
};

export type ProductWhereInput = {
  AdditionalMedia?: InputMaybe<ContentModelReferenceWhereInput>;
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  Downloads?: InputMaybe<ContentModelReferenceWhereInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  HighlightedProperties?: InputMaybe<ContentAreaItemModelSearchWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MainImage?: InputMaybe<ContentModelReferenceWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ProductCode?: InputMaybe<SearchableStringFilterInput>;
  ProductDescription?: InputMaybe<SearchableStringFilterInput>;
  ProductName?: InputMaybe<StringFilterInput>;
  ProductTagLine?: InputMaybe<SearchableStringFilterInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  ShortDescription?: InputMaybe<SearchableStringFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ProductWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ProductWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ProductWhereInput>>>;
};

export type Query = {
  __typename?: 'Query';
  ArticleListPage?: Maybe<ArticleListPageOutput>;
  ArticlePage?: Maybe<ArticlePageOutput>;
  ButtonBlock?: Maybe<ButtonBlockOutput>;
  CardBlock?: Maybe<CardBlockOutput>;
  CarouselBlock?: Maybe<CarouselBlockOutput>;
  ConfiguredCommerceCatalogCategory?: Maybe<ConfiguredCommerceCatalogCategoryOutput>;
  ConfiguredCommerceCatalogEntry?: Maybe<ConfiguredCommerceCatalogEntryOutput>;
  ConfiguredCommerceCatalogProduct?: Maybe<ConfiguredCommerceCatalogProductOutput>;
  ContainerBlock?: Maybe<ContainerBlockOutput>;
  Content?: Maybe<ContentOutput>;
  DAMAsset?: Maybe<DamAssetOutput>;
  DAMImageAsset?: Maybe<DamImageAssetOutput>;
  DAMVideoAsset?: Maybe<DamVideoAssetOutput>;
  Data?: Maybe<DataOutput>;
  FooterConfigBlock?: Maybe<FooterConfigBlockOutput>;
  HeaderConfigBlock?: Maybe<HeaderConfigBlockOutput>;
  HeroBlock?: Maybe<HeroBlockOutput>;
  HighlightTextBlock?: Maybe<HighlightTextBlockOutput>;
  LandingPage?: Maybe<LandingPageOutput>;
  LinkListBlock?: Maybe<LinkListBlockOutput>;
  LocationListPage?: Maybe<LocationListPageOutput>;
  LocationPage?: Maybe<LocationPageOutput>;
  NavMenuItem?: Maybe<NavMenuItemOutput>;
  OdpEmbedBlock?: Maybe<OdpEmbedBlockOutput>;
  PageSeoSettings?: Maybe<PageSeoSettingsOutput>;
  Product?: Maybe<ProductOutput>;
  ProductTextProperty?: Maybe<ProductTextPropertyOutput>;
  QuoteBlock?: Maybe<QuoteBlockOutput>;
  SiteDefinition?: Maybe<SiteDefinitionOutput>;
  TextBlock?: Maybe<TextBlockOutput>;
};


export type QueryArticleListPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticleListPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArticleListPageWhereInput>;
};


export type QueryArticlePageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticlePageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArticlePageWhereInput>;
};


export type QueryButtonBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ButtonBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ButtonBlockWhereInput>;
};


export type QueryCardBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CardBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CardBlockWhereInput>;
};


export type QueryCarouselBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CarouselBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CarouselBlockWhereInput>;
};


export type QueryConfiguredCommerceCatalogCategoryArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Occc1_Locales>>>;
  orderBy?: InputMaybe<ConfiguredCommerceCatalogCategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ConfiguredCommerceCatalogCategoryWhereInput>;
};


export type QueryConfiguredCommerceCatalogEntryArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Occc1_Locales>>>;
  orderBy?: InputMaybe<ConfiguredCommerceCatalogEntryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ConfiguredCommerceCatalogEntryWhereInput>;
};


export type QueryConfiguredCommerceCatalogProductArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Occc1_Locales>>>;
  orderBy?: InputMaybe<ConfiguredCommerceCatalogProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ConfiguredCommerceCatalogProductWhereInput>;
};


export type QueryContainerBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContainerBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContainerBlockWhereInput>;
};


export type QueryContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentWhereInput>;
};


export type QueryDamAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DamAssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DamAssetWhereInput>;
};


export type QueryDamImageAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DamImageAssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DamImageAssetWhereInput>;
};


export type QueryDamVideoAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DamVideoAssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DamVideoAssetWhereInput>;
};


export type QueryDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy?: InputMaybe<DataOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DataWhereInput>;
};


export type QueryFooterConfigBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FooterConfigBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FooterConfigBlockWhereInput>;
};


export type QueryHeaderConfigBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeaderConfigBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeaderConfigBlockWhereInput>;
};


export type QueryHeroBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeroBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeroBlockWhereInput>;
};


export type QueryHighlightTextBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HighlightTextBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HighlightTextBlockWhereInput>;
};


export type QueryLandingPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LandingPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LandingPageWhereInput>;
};


export type QueryLinkListBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LinkListBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LinkListBlockWhereInput>;
};


export type QueryLocationListPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LocationListPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LocationListPageWhereInput>;
};


export type QueryLocationPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LocationPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LocationPageWhereInput>;
};


export type QueryNavMenuItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<NavMenuItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavMenuItemWhereInput>;
};


export type QueryOdpEmbedBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OdpEmbedBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OdpEmbedBlockWhereInput>;
};


export type QueryPageSeoSettingsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PageSeoSettingsOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageSeoSettingsWhereInput>;
};


export type QueryProductArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryProductTextPropertyArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ProductTextPropertyOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductTextPropertyWhereInput>;
};


export type QueryQuoteBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<QuoteBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QuoteBlockWhereInput>;
};


export type QuerySiteDefinitionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SiteDefinitionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SiteDefinitionWhereInput>;
};


export type QueryTextBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TextBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TextBlockWhereInput>;
};

export type QueryRef = {
  __typename?: 'QueryRef';
  ArticleListPage?: Maybe<ArticleListPageOutput>;
  ArticlePage?: Maybe<ArticlePageOutput>;
  ButtonBlock?: Maybe<ButtonBlockOutput>;
  CardBlock?: Maybe<CardBlockOutput>;
  CarouselBlock?: Maybe<CarouselBlockOutput>;
  ConfiguredCommerceCatalogCategory?: Maybe<ConfiguredCommerceCatalogCategoryOutput>;
  ConfiguredCommerceCatalogEntry?: Maybe<ConfiguredCommerceCatalogEntryOutput>;
  ConfiguredCommerceCatalogProduct?: Maybe<ConfiguredCommerceCatalogProductOutput>;
  ContainerBlock?: Maybe<ContainerBlockOutput>;
  Content?: Maybe<ContentOutput>;
  DAMAsset?: Maybe<DamAssetOutput>;
  DAMImageAsset?: Maybe<DamImageAssetOutput>;
  DAMVideoAsset?: Maybe<DamVideoAssetOutput>;
  Data?: Maybe<DataOutput>;
  FooterConfigBlock?: Maybe<FooterConfigBlockOutput>;
  HeaderConfigBlock?: Maybe<HeaderConfigBlockOutput>;
  HeroBlock?: Maybe<HeroBlockOutput>;
  HighlightTextBlock?: Maybe<HighlightTextBlockOutput>;
  LandingPage?: Maybe<LandingPageOutput>;
  LinkListBlock?: Maybe<LinkListBlockOutput>;
  LocationListPage?: Maybe<LocationListPageOutput>;
  LocationPage?: Maybe<LocationPageOutput>;
  NavMenuItem?: Maybe<NavMenuItemOutput>;
  OdpEmbedBlock?: Maybe<OdpEmbedBlockOutput>;
  PageSeoSettings?: Maybe<PageSeoSettingsOutput>;
  Product?: Maybe<ProductOutput>;
  ProductTextProperty?: Maybe<ProductTextPropertyOutput>;
  QuoteBlock?: Maybe<QuoteBlockOutput>;
  SiteDefinition?: Maybe<SiteDefinitionOutput>;
  TextBlock?: Maybe<TextBlockOutput>;
};


export type QueryRefArticleListPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticleListPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArticleListPageWhereInput>;
};


export type QueryRefArticlePageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticlePageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ArticlePageWhereInput>;
};


export type QueryRefButtonBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ButtonBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ButtonBlockWhereInput>;
};


export type QueryRefCardBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CardBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CardBlockWhereInput>;
};


export type QueryRefCarouselBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<CarouselBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CarouselBlockWhereInput>;
};


export type QueryRefConfiguredCommerceCatalogCategoryArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Occc1_Locales>>>;
  orderBy?: InputMaybe<ConfiguredCommerceCatalogCategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ConfiguredCommerceCatalogCategoryWhereInput>;
};


export type QueryRefConfiguredCommerceCatalogEntryArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Occc1_Locales>>>;
  orderBy?: InputMaybe<ConfiguredCommerceCatalogEntryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ConfiguredCommerceCatalogEntryWhereInput>;
};


export type QueryRefConfiguredCommerceCatalogProductArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Occc1_Locales>>>;
  orderBy?: InputMaybe<ConfiguredCommerceCatalogProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ConfiguredCommerceCatalogProductWhereInput>;
};


export type QueryRefContainerBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContainerBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContainerBlockWhereInput>;
};


export type QueryRefContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContentWhereInput>;
};


export type QueryRefDamAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DamAssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DamAssetWhereInput>;
};


export type QueryRefDamImageAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DamImageAssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DamImageAssetWhereInput>;
};


export type QueryRefDamVideoAssetArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<DamVideoAssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DamVideoAssetWhereInput>;
};


export type QueryRefDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy?: InputMaybe<DataOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<DataWhereInput>;
};


export type QueryRefFooterConfigBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FooterConfigBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FooterConfigBlockWhereInput>;
};


export type QueryRefHeaderConfigBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeaderConfigBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeaderConfigBlockWhereInput>;
};


export type QueryRefHeroBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeroBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeroBlockWhereInput>;
};


export type QueryRefHighlightTextBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HighlightTextBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HighlightTextBlockWhereInput>;
};


export type QueryRefLandingPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LandingPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LandingPageWhereInput>;
};


export type QueryRefLinkListBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LinkListBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LinkListBlockWhereInput>;
};


export type QueryRefLocationListPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LocationListPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LocationListPageWhereInput>;
};


export type QueryRefLocationPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LocationPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LocationPageWhereInput>;
};


export type QueryRefNavMenuItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<NavMenuItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NavMenuItemWhereInput>;
};


export type QueryRefOdpEmbedBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OdpEmbedBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OdpEmbedBlockWhereInput>;
};


export type QueryRefPageSeoSettingsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<PageSeoSettingsOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageSeoSettingsWhereInput>;
};


export type QueryRefProductArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryRefProductTextPropertyArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ProductTextPropertyOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductTextPropertyWhereInput>;
};


export type QueryRefQuoteBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<QuoteBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QuoteBlockWhereInput>;
};


export type QueryRefSiteDefinitionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SiteDefinitionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SiteDefinitionWhereInput>;
};


export type QueryRefTextBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TextBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TextBlockWhereInput>;
};

/** Display a quote */
export type QuoteBlock = IContent & IData & {
  __typename?: 'QuoteBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  Photo?: Maybe<ContentModelReference>;
  Quotee?: Maybe<Scalars['String']['output']>;
  QuoteeLocation?: Maybe<Scalars['String']['output']>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  Role?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Text?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** Display a quote */
export type QuoteBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type QuoteBlockAutocomplete = {
  __typename?: 'QuoteBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  Photo?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type QuoteBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type QuoteBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type QuoteBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type QuoteBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type QuoteBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type QuoteBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type QuoteBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type QuoteBlockFacet = {
  __typename?: 'QuoteBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  Photo?: Maybe<ContentModelReferenceFacet>;
  Quotee?: Maybe<Array<Maybe<StringFacet>>>;
  QuoteeLocation?: Maybe<Array<Maybe<StringFacet>>>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  Role?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Text?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type QuoteBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type QuoteBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type QuoteBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type QuoteBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type QuoteBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type QuoteBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type QuoteBlockFacetQuoteeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type QuoteBlockFacetQuoteeLocationArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type QuoteBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type QuoteBlockFacetRoleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type QuoteBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type QuoteBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type QuoteBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type QuoteBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type QuoteBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type QuoteBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type QuoteBlockFacetTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type QuoteBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type QuoteBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  Photo?: InputMaybe<ContentModelReferenceOrderByInput>;
  Quotee?: InputMaybe<OrderBy>;
  QuoteeLocation?: InputMaybe<OrderBy>;
  RelativePath?: InputMaybe<OrderBy>;
  Role?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Text?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type QuoteBlockOutput = {
  __typename?: 'QuoteBlockOutput';
  autocomplete?: Maybe<QuoteBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<QuoteBlockFacet>;
  items?: Maybe<Array<Maybe<QuoteBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type QuoteBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuoteBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  Photo?: InputMaybe<ContentModelReferenceWhereInput>;
  Quotee?: InputMaybe<SearchableStringFilterInput>;
  QuoteeLocation?: InputMaybe<SearchableStringFilterInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  Role?: InputMaybe<SearchableStringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Text?: InputMaybe<SearchableStringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<QuoteBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<QuoteBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<QuoteBlockWhereInput>>>;
};

export type RangeFacetsInput = {
  from?: InputMaybe<Scalars['Int']['input']>;
  to?: InputMaybe<Scalars['Int']['input']>;
};

export enum Ranking {
  BoostOnly = 'BOOST_ONLY',
  Doc = 'DOC',
  Relevance = 'RELEVANCE',
  Semantic = 'SEMANTIC'
}

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

export type SiteDefinition = IData & {
  __typename?: 'SiteDefinition';
  ContentLink?: Maybe<ContentModelReference>;
  ContentRoots?: Maybe<ContentRootsModel>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  EditLocation?: Maybe<Scalars['String']['output']>;
  Hosts?: Maybe<Array<Maybe<HostDefinitionModel>>>;
  Id?: Maybe<Scalars['String']['output']>;
  Languages?: Maybe<Array<Maybe<SiteDefinitionLanguageModel>>>;
  Name?: Maybe<Scalars['String']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type SiteDefinition_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type SiteDefinitionAutocomplete = {
  __typename?: 'SiteDefinitionAutocomplete';
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentRoots?: Maybe<ContentRootsModelAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  EditLocation?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Hosts?: Maybe<HostDefinitionModelAutocomplete>;
  Id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Languages?: Maybe<SiteDefinitionLanguageModelAutocomplete>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type SiteDefinitionAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SiteDefinitionAutocompleteEditLocationArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SiteDefinitionAutocompleteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SiteDefinitionAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type SiteDefinitionFacet = {
  __typename?: 'SiteDefinitionFacet';
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentRoots?: Maybe<ContentRootsModelFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  EditLocation?: Maybe<Array<Maybe<StringFacet>>>;
  Hosts?: Maybe<HostDefinitionModelFacet>;
  Id?: Maybe<Array<Maybe<StringFacet>>>;
  Languages?: Maybe<SiteDefinitionLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
};


export type SiteDefinitionFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionFacetEditLocationArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionFacetIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type SiteDefinitionLanguageModel = {
  __typename?: 'SiteDefinitionLanguageModel';
  DisplayName?: Maybe<Scalars['String']['output']>;
  IsMasterLanguage?: Maybe<Scalars['Bool']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  UrlSegment?: Maybe<Scalars['String']['output']>;
};

export type SiteDefinitionLanguageModelAutocomplete = {
  __typename?: 'SiteDefinitionLanguageModelAutocomplete';
  DisplayName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  UrlSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type SiteDefinitionLanguageModelAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SiteDefinitionLanguageModelAutocompleteNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SiteDefinitionLanguageModelAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type SiteDefinitionLanguageModelAutocompleteUrlSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type SiteDefinitionLanguageModelFacet = {
  __typename?: 'SiteDefinitionLanguageModelFacet';
  DisplayName?: Maybe<Array<Maybe<StringFacet>>>;
  IsMasterLanguage?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  UrlSegment?: Maybe<Array<Maybe<StringFacet>>>;
};


export type SiteDefinitionLanguageModelFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionLanguageModelFacetIsMasterLanguageArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionLanguageModelFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionLanguageModelFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type SiteDefinitionLanguageModelFacetUrlSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type SiteDefinitionLanguageModelOrderByInput = {
  DisplayName?: InputMaybe<OrderBy>;
  IsMasterLanguage?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  UrlSegment?: InputMaybe<OrderBy>;
};

export type SiteDefinitionLanguageModelWhereInput = {
  DisplayName?: InputMaybe<StringFilterInput>;
  IsMasterLanguage?: InputMaybe<BoolFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  UrlSegment?: InputMaybe<StringFilterInput>;
};

export type SiteDefinitionOrderByInput = {
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentRoots?: InputMaybe<ContentRootsModelOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  EditLocation?: InputMaybe<OrderBy>;
  Hosts?: InputMaybe<HostDefinitionModelOrderByInput>;
  Id?: InputMaybe<OrderBy>;
  Languages?: InputMaybe<SiteDefinitionLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type SiteDefinitionOutput = {
  __typename?: 'SiteDefinitionOutput';
  autocomplete?: Maybe<SiteDefinitionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<SiteDefinitionFacet>;
  items?: Maybe<Array<Maybe<SiteDefinition>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type SiteDefinitionOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SiteDefinitionWhereInput = {
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentRoots?: InputMaybe<ContentRootsModelWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  EditLocation?: InputMaybe<StringFilterInput>;
  Hosts?: InputMaybe<HostDefinitionModelWhereInput>;
  Id?: InputMaybe<StringFilterInput>;
  Languages?: InputMaybe<SiteDefinitionLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<SiteDefinitionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<SiteDefinitionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<SiteDefinitionWhereInput>>>;
};

export type StringFacet = {
  __typename?: 'StringFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
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
  One = 'ONE',
  /** synonym slot 2 */
  Two = 'TWO'
}

/** Formatted text, supporting links */
export type TextBlock = IContent & IData & {
  __typename?: 'TextBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MainBody?: Maybe<Scalars['String']['output']>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  Spacing?: Maybe<Scalars['String']['output']>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** Formatted text, supporting links */
export type TextBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type TextBlockAutocomplete = {
  __typename?: 'TextBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Spacing?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type TextBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type TextBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type TextBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type TextBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type TextBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type TextBlockAutocompleteSpacingArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type TextBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type TextBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type TextBlockFacet = {
  __typename?: 'TextBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MainBody?: Maybe<Array<Maybe<StringFacet>>>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  Spacing?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type TextBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type TextBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type TextBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextBlockFacetMainBodyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type TextBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextBlockFacetSpacingArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type TextBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type TextBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type TextBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MainBody?: InputMaybe<OrderBy>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  Spacing?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type TextBlockOutput = {
  __typename?: 'TextBlockOutput';
  autocomplete?: Maybe<TextBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<TextBlockFacet>;
  items?: Maybe<Array<Maybe<TextBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type TextBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TextBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MainBody?: InputMaybe<SearchableStringFilterInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  Spacing?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
};

export enum Occc1_Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL',
  EnUs = 'en_us',
  FrCa = 'fr_ca',
  HeIl = 'he_il',
  NbNo = 'nb_no'
}

export enum System_Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL'
}

export type GetGenericMetaDataQueryVariables = Exact<{
  path: Scalars['String']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  siteId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetGenericMetaDataQuery = { __typename?: 'Query', getGenericMetaData?: { __typename?: 'ContentOutput', items?: Array<{ __typename?: 'ArticleListPage', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'ArticlePage', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'ButtonBlock', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'CardBlock', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'CarouselBlock', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'ContainerBlock', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'Content', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'DAMAsset', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'DAMImageAsset', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'DAMVideoAsset', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'FooterConfigBlock', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'HeaderConfigBlock', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'HeroBlock', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'HighlightTextBlock', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'LandingPage', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'LinkListBlock', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'LocationListPage', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'LocationPage', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'NavMenuItem', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'OdpEmbedBlock', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'PageSeoSettings', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'Product', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'ProductTextProperty', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'QuoteBlock', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'TextBlock', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | null> | null } | null };

export type GetPathByGuidQueryVariables = Exact<{
  guid: Scalars['String']['input'];
}>;


export type GetPathByGuidQuery = { __typename?: 'Query', pathByGuid?: { __typename?: 'ContentOutput', items?: Array<{ __typename?: 'ArticleListPage', path?: string | null, url?: string | null } | { __typename?: 'ArticlePage', path?: string | null, url?: string | null } | { __typename?: 'ButtonBlock', path?: string | null, url?: string | null } | { __typename?: 'CardBlock', path?: string | null, url?: string | null } | { __typename?: 'CarouselBlock', path?: string | null, url?: string | null } | { __typename?: 'ContainerBlock', path?: string | null, url?: string | null } | { __typename?: 'Content', path?: string | null, url?: string | null } | { __typename?: 'DAMAsset', path?: string | null, url?: string | null } | { __typename?: 'DAMImageAsset', path?: string | null, url?: string | null } | { __typename?: 'DAMVideoAsset', path?: string | null, url?: string | null } | { __typename?: 'FooterConfigBlock', path?: string | null, url?: string | null } | { __typename?: 'HeaderConfigBlock', path?: string | null, url?: string | null } | { __typename?: 'HeroBlock', path?: string | null, url?: string | null } | { __typename?: 'HighlightTextBlock', path?: string | null, url?: string | null } | { __typename?: 'LandingPage', path?: string | null, url?: string | null } | { __typename?: 'LinkListBlock', path?: string | null, url?: string | null } | { __typename?: 'LocationListPage', path?: string | null, url?: string | null } | { __typename?: 'LocationPage', path?: string | null, url?: string | null } | { __typename?: 'NavMenuItem', path?: string | null, url?: string | null } | { __typename?: 'OdpEmbedBlock', path?: string | null, url?: string | null } | { __typename?: 'PageSeoSettings', path?: string | null, url?: string | null } | { __typename?: 'Product', path?: string | null, url?: string | null } | { __typename?: 'ProductTextProperty', path?: string | null, url?: string | null } | { __typename?: 'QuoteBlock', path?: string | null, url?: string | null } | { __typename?: 'TextBlock', path?: string | null, url?: string | null } | null> | null } | null };

export type ContentSearchQueryVariables = Exact<{
  term: Scalars['String']['input'];
  topInterest?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  types?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ContentSearchQuery = { __typename?: 'Query', Content?: { __typename?: 'ContentOutput', total?: number | null, cursor?: string | null, items?: Array<{ __typename?: 'ArticleListPage', _score?: number | null, name?: string | null, url?: string | null, type?: Array<string | null> | null, changed?: any | null, published?: any | null } | { __typename?: 'ArticlePage', _score?: number | null, name?: string | null, url?: string | null, type?: Array<string | null> | null, changed?: any | null, published?: any | null } | { __typename?: 'ButtonBlock', _score?: number | null, name?: string | null, url?: string | null, type?: Array<string | null> | null, changed?: any | null, published?: any | null } | { __typename?: 'CardBlock', _score?: number | null, name?: string | null, url?: string | null, type?: Array<string | null> | null, changed?: any | null, published?: any | null } | { __typename?: 'CarouselBlock', _score?: number | null, name?: string | null, url?: string | null, type?: Array<string | null> | null, changed?: any | null, published?: any | null } | { __typename?: 'ContainerBlock', _score?: number | null, name?: string | null, url?: string | null, type?: Array<string | null> | null, changed?: any | null, published?: any | null } | { __typename?: 'Content', _score?: number | null, name?: string | null, url?: string | null, type?: Array<string | null> | null, changed?: any | null, published?: any | null } | { __typename?: 'DAMAsset', _score?: number | null, name?: string | null, url?: string | null, type?: Array<string | null> | null, changed?: any | null, published?: any | null } | { __typename?: 'DAMImageAsset', _score?: number | null, name?: string | null, url?: string | null, type?: Array<string | null> | null, changed?: any | null, published?: any | null } | { __typename?: 'DAMVideoAsset', _score?: number | null, name?: string | null, url?: string | null, type?: Array<string | null> | null, changed?: any | null, published?: any | null } | { __typename?: 'FooterConfigBlock', _score?: number | null, name?: string | null, url?: string | null, type?: Array<string | null> | null, changed?: any | null, published?: any | null } | { __typename?: 'HeaderConfigBlock', _score?: number | null, name?: string | null, url?: string | null, type?: Array<string | null> | null, changed?: any | null, published?: any | null } | { __typename?: 'HeroBlock', _score?: number | null, name?: string | null, url?: string | null, type?: Array<string | null> | null, changed?: any | null, published?: any | null } | { __typename?: 'HighlightTextBlock', _score?: number | null, name?: string | null, url?: string | null, type?: Array<string | null> | null, changed?: any | null, published?: any | null } | { __typename?: 'LandingPage', _score?: number | null, name?: string | null, url?: string | null, type?: Array<string | null> | null, changed?: any | null, published?: any | null } | { __typename?: 'LinkListBlock', _score?: number | null, name?: string | null, url?: string | null, type?: Array<string | null> | null, changed?: any | null, published?: any | null } | { __typename?: 'LocationListPage', _score?: number | null, name?: string | null, url?: string | null, type?: Array<string | null> | null, changed?: any | null, published?: any | null } | { __typename?: 'LocationPage', _score?: number | null, name?: string | null, url?: string | null, type?: Array<string | null> | null, changed?: any | null, published?: any | null } | { __typename?: 'NavMenuItem', _score?: number | null, name?: string | null, url?: string | null, type?: Array<string | null> | null, changed?: any | null, published?: any | null } | { __typename?: 'OdpEmbedBlock', _score?: number | null, name?: string | null, url?: string | null, type?: Array<string | null> | null, changed?: any | null, published?: any | null } | { __typename?: 'PageSeoSettings', _score?: number | null, name?: string | null, url?: string | null, type?: Array<string | null> | null, changed?: any | null, published?: any | null } | { __typename?: 'Product', _score?: number | null, name?: string | null, url?: string | null, type?: Array<string | null> | null, changed?: any | null, published?: any | null } | { __typename?: 'ProductTextProperty', _score?: number | null, name?: string | null, url?: string | null, type?: Array<string | null> | null, changed?: any | null, published?: any | null } | { __typename?: 'QuoteBlock', _score?: number | null, name?: string | null, url?: string | null, type?: Array<string | null> | null, changed?: any | null, published?: any | null } | { __typename?: 'TextBlock', _score?: number | null, name?: string | null, url?: string | null, type?: Array<string | null> | null, changed?: any | null, published?: any | null } | null> | null, facets?: { __typename?: 'ContentFacet', ContentType?: Array<{ __typename?: 'StringFacet', name?: string | null, count?: number | null } | null> | null, Language?: { __typename?: 'ContentLanguageModelFacet', Name?: Array<{ __typename?: 'StringFacet', name?: string | null, count?: number | null } | null> | null } | null } | null } | null };

export type ButtonBlockDataFragment = { __typename?: 'ButtonBlock', ButtonLink?: { __typename?: 'LinkItemNode', Href?: string | null, Title?: string | null, Target?: string | null, Text?: string | null } | null } & { ' $fragmentName'?: 'ButtonBlockDataFragment' };

export type GetButtonBlockDataQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
  workId?: InputMaybe<Scalars['Int']['input']>;
  guidValue?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type GetButtonBlockDataQuery = { __typename?: 'Query', ButtonBlock?: { __typename?: 'ButtonBlockOutput', items?: Array<{ __typename?: 'ButtonBlock', ButtonLink?: { __typename?: 'LinkItemNode', Href?: string | null, Title?: string | null, Target?: string | null, Text?: string | null } | null } | null> | null } | null };

export type CardBlockDataFragment = { __typename?: 'CardBlock', Title?: string | null, Description?: string | null, Image?: { __typename?: 'ContentModelReference', Url?: string | null, Expanded?: { __typename?: 'ArticleListPage', Name?: string | null, Path?: string | null } | { __typename?: 'ArticlePage', Name?: string | null, Path?: string | null } | { __typename?: 'ButtonBlock', Name?: string | null, Path?: string | null } | { __typename?: 'CardBlock', Name?: string | null, Path?: string | null } | { __typename?: 'CarouselBlock', Name?: string | null, Path?: string | null } | { __typename?: 'ContainerBlock', Name?: string | null, Path?: string | null } | { __typename?: 'Content', Name?: string | null, Path?: string | null } | { __typename?: 'DAMAsset', Name?: string | null, Path?: string | null } | { __typename?: 'DAMImageAsset', Name?: string | null, Path?: string | null } | { __typename?: 'DAMVideoAsset', Name?: string | null, Path?: string | null } | { __typename?: 'FooterConfigBlock', Name?: string | null, Path?: string | null } | { __typename?: 'HeaderConfigBlock', Name?: string | null, Path?: string | null } | { __typename?: 'HeroBlock', Name?: string | null, Path?: string | null } | { __typename?: 'HighlightTextBlock', Name?: string | null, Path?: string | null } | { __typename?: 'LandingPage', Name?: string | null, Path?: string | null } | { __typename?: 'LinkListBlock', Name?: string | null, Path?: string | null } | { __typename?: 'LocationListPage', Name?: string | null, Path?: string | null } | { __typename?: 'LocationPage', Name?: string | null, Path?: string | null } | { __typename?: 'NavMenuItem', Name?: string | null, Path?: string | null } | { __typename?: 'OdpEmbedBlock', Name?: string | null, Path?: string | null } | { __typename?: 'PageSeoSettings', Name?: string | null, Path?: string | null } | { __typename?: 'Product', Name?: string | null, Path?: string | null } | { __typename?: 'ProductTextProperty', Name?: string | null, Path?: string | null } | { __typename?: 'QuoteBlock', Name?: string | null, Path?: string | null } | { __typename?: 'TextBlock', Name?: string | null, Path?: string | null } | null } | null, Button?: (
    { __typename?: 'LinkItemNode' }
    & { ' $fragmentRefs'?: { 'LinkItemDataFragment': LinkItemDataFragment } }
  ) | null } & { ' $fragmentName'?: 'CardBlockDataFragment' };

export type CarouselBlockDataFragment = { __typename?: 'CarouselBlock', ShowArrows?: any | null, CarouselSlides?: Array<(
    { __typename?: 'ContentAreaItemModelSearch' }
    & { ' $fragmentRefs'?: { 'BlockContentAreaItemDataFragment': BlockContentAreaItemDataFragment } }
  ) | null> | null } & { ' $fragmentName'?: 'CarouselBlockDataFragment' };

export type ContainerBlockDataFragment = { __typename?: 'ContainerBlock', Gap?: string | null, Spacing?: string | null, GridLayout?: string | null, BackgroundColor?: string | null, MainContainerArea?: Array<(
    { __typename?: 'ContentAreaItemModelSearch' }
    & { ' $fragmentRefs'?: { 'BlockContentAreaItemDataFragment': BlockContentAreaItemDataFragment } }
  ) | null> | null } & { ' $fragmentName'?: 'ContainerBlockDataFragment' };

export type HeroBlockDataFragment = { __typename?: 'HeroBlock', Name?: string | null, Background?: string | null, BannerTitle?: string | null, BannerText?: string | null, CalloutOpacity?: number | null, BannerLink?: (
    { __typename?: 'LinkItemNode' }
    & { ' $fragmentRefs'?: { 'LinkItemDataFragment': LinkItemDataFragment } }
  ) | null } & { ' $fragmentName'?: 'HeroBlockDataFragment' };

export type HighlightBlockDataFragment = { __typename?: 'HighlightTextBlock', Title?: string | null, PayOffText?: string | null } & { ' $fragmentName'?: 'HighlightBlockDataFragment' };

export type ImageMediaDataFragment = { __typename?: 'Content', RelativePath?: string | null } & { ' $fragmentName'?: 'ImageMediaDataFragment' };

export type OdpEmbedBlockDataFragment = { __typename?: 'OdpEmbedBlock', ContentId?: string | null } & { ' $fragmentName'?: 'OdpEmbedBlockDataFragment' };

export type GetProductPropsQueryVariables = Exact<{
  code: Scalars['String']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type GetProductPropsQuery = { __typename?: 'Query', product?: { __typename?: 'ProductOutput', total?: number | null, items?: Array<{ __typename?: 'Product', code?: string | null, properties?: { __typename?: 'QueryRef', texts?: { __typename?: 'ProductTextPropertyOutput', items?: Array<{ __typename?: 'ProductTextProperty', label?: string | null, value?: string | null } | null> | null } | null } | null } | null> | null } | null };

export type ProductBlockDataFragment = { __typename?: 'Product', ProductCode?: string | null, ProductName?: string | null, ProductTagLine?: string | null, ShortDescription?: string | null, MainImage?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ImageDataFragment': ImageDataFragment } }
  ) | null } & { ' $fragmentName'?: 'ProductBlockDataFragment' };

export type QuoteDataFragment = { __typename?: 'QuoteBlock', Text?: string | null, Quotee?: string | null, Role?: string | null, QuoteeLocation?: string | null, Photo?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ImageDataFragment': ImageDataFragment } }
  ) | null } & { ' $fragmentName'?: 'QuoteDataFragment' };

export type TextBlockDataFragment = { __typename?: 'TextBlock', Spacing?: string | null, MainBody?: string | null } & { ' $fragmentName'?: 'TextBlockDataFragment' };

export type GetFooterQueryVariables = Exact<{
  channelId: Scalars['String']['input'];
  locale?: InputMaybe<Array<Locales> | Locales>;
}>;


export type GetFooterQuery = { __typename?: 'Query', FooterConfigBlock?: { __typename?: 'FooterConfigBlockOutput', total?: number | null, items?: Array<{ __typename?: 'FooterConfigBlock', logo?: string | null, text?: string | null, button?: (
        { __typename?: 'LinkItemNode' }
        & { ' $fragmentRefs'?: { 'FooterLinkDataFragment': FooterLinkDataFragment } }
      ) | null, firstLinks?: (
        { __typename?: 'FooterConfigBlockBlockData' }
        & { ' $fragmentRefs'?: { 'FooterLinksFragment': FooterLinksFragment } }
      ) | null, secondLinks?: (
        { __typename?: 'FooterConfigBlockBlockData' }
        & { ' $fragmentRefs'?: { 'FooterLinksFragment': FooterLinksFragment } }
      ) | null, thirdLinks?: (
        { __typename?: 'FooterConfigBlockBlockData' }
        & { ' $fragmentRefs'?: { 'FooterLinksFragment': FooterLinksFragment } }
      ) | null, fourthLinks?: (
        { __typename?: 'FooterConfigBlockBlockData' }
        & { ' $fragmentRefs'?: { 'FooterLinksFragment': FooterLinksFragment } }
      ) | null } | null> | null } | null };

export type FooterLinksFragment = { __typename?: 'FooterConfigBlockBlockData', caption?: string | null, items?: Array<(
    { __typename?: 'LinkItemNode' }
    & { ' $fragmentRefs'?: { 'FooterLinkDataFragment': FooterLinkDataFragment } }
  ) | null> | null } & { ' $fragmentName'?: 'FooterLinksFragment' };

export type FooterLinkDataFragment = { __typename?: 'LinkItemNode', href?: string | null, children?: string | null, title?: string | null, target?: string | null, content?: { __typename?: 'ContentModelReference', url?: string | null, data?: { __typename?: 'ArticleListPage', path?: string | null } | { __typename?: 'ArticlePage', path?: string | null } | { __typename?: 'ButtonBlock', path?: string | null } | { __typename?: 'CardBlock', path?: string | null } | { __typename?: 'CarouselBlock', path?: string | null } | { __typename?: 'ContainerBlock', path?: string | null } | { __typename?: 'Content', path?: string | null } | { __typename?: 'DAMAsset', path?: string | null } | { __typename?: 'DAMImageAsset', path?: string | null } | { __typename?: 'DAMVideoAsset', path?: string | null } | { __typename?: 'FooterConfigBlock', path?: string | null } | { __typename?: 'HeaderConfigBlock', path?: string | null } | { __typename?: 'HeroBlock', path?: string | null } | { __typename?: 'HighlightTextBlock', path?: string | null } | { __typename?: 'LandingPage', path?: string | null } | { __typename?: 'LinkListBlock', path?: string | null } | { __typename?: 'LocationListPage', path?: string | null } | { __typename?: 'LocationPage', path?: string | null } | { __typename?: 'NavMenuItem', path?: string | null } | { __typename?: 'OdpEmbedBlock', path?: string | null } | { __typename?: 'PageSeoSettings', path?: string | null } | { __typename?: 'Product', path?: string | null } | { __typename?: 'ProductTextProperty', path?: string | null } | { __typename?: 'QuoteBlock', path?: string | null } | { __typename?: 'TextBlock', path?: string | null } | null } | null } & { ' $fragmentName'?: 'FooterLinkDataFragment' };

export type GetHeaderDataQueryVariables = Exact<{
  siteId: Scalars['String']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type GetHeaderDataQuery = { __typename?: 'Query', HeaderConfigBlock?: { __typename?: 'HeaderConfigBlockOutput', items?: Array<{ __typename?: 'HeaderConfigBlock', Name?: string | null, SiteLogo?: string | null, ChannelId?: string | null, CustomCSS?: string | null, PromoText?: string | null, NavMenuArea?: Array<{ __typename?: 'ContentAreaItemModel', DisplayOption?: string | null, ContentLink?: { __typename?: 'ContentModelReference', Expanded?: { __typename?: 'ArticleListPage' } | { __typename?: 'ArticlePage' } | { __typename?: 'ButtonBlock' } | { __typename?: 'CardBlock' } | { __typename?: 'CarouselBlock' } | { __typename?: 'ContainerBlock' } | { __typename?: 'Content' } | { __typename?: 'DAMAsset' } | { __typename?: 'DAMImageAsset' } | { __typename?: 'DAMVideoAsset' } | { __typename?: 'FooterConfigBlock' } | { __typename?: 'HeaderConfigBlock' } | { __typename?: 'HeroBlock' } | { __typename?: 'HighlightTextBlock' } | { __typename?: 'LandingPage' } | { __typename?: 'LinkListBlock' } | { __typename?: 'LocationListPage' } | { __typename?: 'LocationPage' } | (
            { __typename?: 'NavMenuItem' }
            & { ' $fragmentRefs'?: { 'NavMenuItemDataFragment': NavMenuItemDataFragment } }
          ) | { __typename?: 'OdpEmbedBlock' } | { __typename?: 'PageSeoSettings' } | { __typename?: 'Product' } | { __typename?: 'ProductTextProperty' } | { __typename?: 'QuoteBlock' } | { __typename?: 'TextBlock' } | null } | null } | null> | null } | null> | null } | null };

export type NavMenuItemDataFragment = { __typename?: 'NavMenuItem', Name?: string | null, Label?: string | null, Links?: Array<{ __typename?: 'LinkItemNode', Href?: string | null, Text?: string | null, Title?: string | null, Target?: string | null, ContentLink?: { __typename?: 'ContentModelReference', Url?: string | null, Language?: { __typename?: 'ContentLanguageModel', Name?: string | null } | null, Expanded?: { __typename?: 'ArticleListPage', RelativePath?: string | null } | { __typename?: 'ArticlePage', RelativePath?: string | null } | { __typename?: 'ButtonBlock', RelativePath?: string | null } | { __typename?: 'CardBlock', RelativePath?: string | null } | { __typename?: 'CarouselBlock', RelativePath?: string | null } | { __typename?: 'ContainerBlock', RelativePath?: string | null } | { __typename?: 'Content', RelativePath?: string | null } | { __typename?: 'DAMAsset', RelativePath?: string | null } | { __typename?: 'DAMImageAsset', RelativePath?: string | null } | { __typename?: 'DAMVideoAsset', RelativePath?: string | null } | { __typename?: 'FooterConfigBlock', RelativePath?: string | null } | { __typename?: 'HeaderConfigBlock', RelativePath?: string | null } | { __typename?: 'HeroBlock', RelativePath?: string | null } | { __typename?: 'HighlightTextBlock', RelativePath?: string | null } | { __typename?: 'LandingPage', RelativePath?: string | null } | { __typename?: 'LinkListBlock', RelativePath?: string | null } | { __typename?: 'LocationListPage', RelativePath?: string | null } | { __typename?: 'LocationPage', RelativePath?: string | null } | { __typename?: 'NavMenuItem', RelativePath?: string | null } | { __typename?: 'OdpEmbedBlock', RelativePath?: string | null } | { __typename?: 'PageSeoSettings', RelativePath?: string | null } | { __typename?: 'Product', RelativePath?: string | null } | { __typename?: 'ProductTextProperty', RelativePath?: string | null } | { __typename?: 'QuoteBlock', RelativePath?: string | null } | { __typename?: 'TextBlock', RelativePath?: string | null } | null } | null } | null> | null, MenuContent?: Array<{ __typename?: 'ContentAreaItemModel', displayOption?: string | null, item?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null, data?: { __typename?: 'ArticleListPage', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'ArticlePage', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'ButtonBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'CardBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'CarouselBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'ContainerBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'Content', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'DAMAsset', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'DAMImageAsset', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'DAMVideoAsset', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'FooterConfigBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'HeaderConfigBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'HeroBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'HighlightTextBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'LandingPage', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'LinkListBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'LocationListPage', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'LocationPage', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'NavMenuItem', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'OdpEmbedBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'PageSeoSettings', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'Product', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'ProductTextProperty', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'QuoteBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'TextBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | null } | null } | null> | null, lastLink?: { __typename?: 'LinkItemNode', href?: string | null, title?: string | null, target?: string | null, text?: string | null, item?: { __typename?: 'ContentModelReference', url?: string | null, data?: { __typename?: 'ArticleListPage', path?: string | null } | { __typename?: 'ArticlePage', path?: string | null } | { __typename?: 'ButtonBlock', path?: string | null } | { __typename?: 'CardBlock', path?: string | null } | { __typename?: 'CarouselBlock', path?: string | null } | { __typename?: 'ContainerBlock', path?: string | null } | { __typename?: 'Content', path?: string | null } | { __typename?: 'DAMAsset', path?: string | null } | { __typename?: 'DAMImageAsset', path?: string | null } | { __typename?: 'DAMVideoAsset', path?: string | null } | { __typename?: 'FooterConfigBlock', path?: string | null } | { __typename?: 'HeaderConfigBlock', path?: string | null } | { __typename?: 'HeroBlock', path?: string | null } | { __typename?: 'HighlightTextBlock', path?: string | null } | { __typename?: 'LandingPage', path?: string | null } | { __typename?: 'LinkListBlock', path?: string | null } | { __typename?: 'LocationListPage', path?: string | null } | { __typename?: 'LocationPage', path?: string | null } | { __typename?: 'NavMenuItem', path?: string | null } | { __typename?: 'OdpEmbedBlock', path?: string | null } | { __typename?: 'PageSeoSettings', path?: string | null } | { __typename?: 'Product', path?: string | null } | { __typename?: 'ProductTextProperty', path?: string | null } | { __typename?: 'QuoteBlock', path?: string | null } | { __typename?: 'TextBlock', path?: string | null } | null } | null } | null } & { ' $fragmentName'?: 'NavMenuItemDataFragment' };

export type ArticleListPageDataFragment = { __typename?: 'ArticleListPage', Name?: string | null, ArticleListTitle?: string | null, ArticleListBody?: string | null, ArticleListHero?: Array<(
    { __typename?: 'ContentAreaItemModelSearch' }
    & { ' $fragmentRefs'?: { 'ContentAreaItemDataFragment': ContentAreaItemDataFragment } }
  ) | null> | null } & { ' $fragmentName'?: 'ArticleListPageDataFragment' };

export type GetArticleListMetaDataQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
  workId?: InputMaybe<Scalars['Int']['input']>;
  guidValue?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<Locales> | Locales>;
  isCommonDraft?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetArticleListMetaDataQuery = { __typename?: 'Query', getArticleListMetaData?: { __typename?: 'ArticleListPageOutput', count?: number | null, pages?: Array<{ __typename?: 'ArticleListPage', name?: string | null, head?: { __typename?: 'ArticleListPageBlockData', title?: string | null, description?: string | null, type?: string | null, image?: { __typename?: 'ContentModelReference', url?: string | null, data?: { __typename?: 'ArticleListPage', url?: string | null, path?: string | null } | { __typename?: 'ArticlePage', url?: string | null, path?: string | null } | { __typename?: 'ButtonBlock', url?: string | null, path?: string | null } | { __typename?: 'CardBlock', url?: string | null, path?: string | null } | { __typename?: 'CarouselBlock', url?: string | null, path?: string | null } | { __typename?: 'ContainerBlock', url?: string | null, path?: string | null } | { __typename?: 'Content', url?: string | null, path?: string | null } | { __typename?: 'DAMAsset', url?: string | null, path?: string | null } | { __typename?: 'DAMImageAsset', url?: string | null, path?: string | null } | { __typename?: 'DAMVideoAsset', url?: string | null, path?: string | null } | { __typename?: 'FooterConfigBlock', url?: string | null, path?: string | null } | { __typename?: 'HeaderConfigBlock', url?: string | null, path?: string | null } | { __typename?: 'HeroBlock', url?: string | null, path?: string | null } | { __typename?: 'HighlightTextBlock', url?: string | null, path?: string | null } | { __typename?: 'LandingPage', url?: string | null, path?: string | null } | { __typename?: 'LinkListBlock', url?: string | null, path?: string | null } | { __typename?: 'LocationListPage', url?: string | null, path?: string | null } | { __typename?: 'LocationPage', url?: string | null, path?: string | null } | { __typename?: 'NavMenuItem', url?: string | null, path?: string | null } | { __typename?: 'OdpEmbedBlock', url?: string | null, path?: string | null } | { __typename?: 'PageSeoSettings', url?: string | null, path?: string | null } | { __typename?: 'Product', url?: string | null, path?: string | null } | { __typename?: 'ProductTextProperty', url?: string | null, path?: string | null } | { __typename?: 'QuoteBlock', url?: string | null, path?: string | null } | { __typename?: 'TextBlock', url?: string | null, path?: string | null } | null } | null } | null } | null> | null } | null };

export type ArticlePageBlockDataFragment = { __typename?: 'ArticlePage', href?: string | null, name?: string | null, title?: string | null, author?: string | null, published?: any | null, image?: { __typename?: 'ContentModelReference', src?: string | null, data?: { __typename?: 'ArticleListPage', alt?: string | null } | { __typename?: 'ArticlePage', alt?: string | null } | { __typename?: 'ButtonBlock', alt?: string | null } | { __typename?: 'CardBlock', alt?: string | null } | { __typename?: 'CarouselBlock', alt?: string | null } | { __typename?: 'ContainerBlock', alt?: string | null } | { __typename?: 'Content', alt?: string | null } | { __typename?: 'DAMAsset', alt?: string | null } | { __typename?: 'DAMImageAsset', alt?: string | null } | { __typename?: 'DAMVideoAsset', alt?: string | null } | { __typename?: 'FooterConfigBlock', alt?: string | null } | { __typename?: 'HeaderConfigBlock', alt?: string | null } | { __typename?: 'HeroBlock', alt?: string | null } | { __typename?: 'HighlightTextBlock', alt?: string | null } | { __typename?: 'LandingPage', alt?: string | null } | { __typename?: 'LinkListBlock', alt?: string | null } | { __typename?: 'LocationListPage', alt?: string | null } | { __typename?: 'LocationPage', alt?: string | null } | { __typename?: 'NavMenuItem', alt?: string | null } | { __typename?: 'OdpEmbedBlock', alt?: string | null } | { __typename?: 'PageSeoSettings', alt?: string | null } | { __typename?: 'Product', alt?: string | null } | { __typename?: 'ProductTextProperty', alt?: string | null } | { __typename?: 'QuoteBlock', alt?: string | null } | { __typename?: 'TextBlock', alt?: string | null } | null } | null, meta?: { __typename?: 'ArticlePageBlockData', intro?: string | null } | null } & { ' $fragmentName'?: 'ArticlePageBlockDataFragment' };

export type ArticlePageDataFragment = { __typename?: 'ArticlePage', Title?: string | null, MainBody?: string | null, StartPublish?: any | null, ArticleAuthor?: string | null, PageImage?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ImageDataFragment': ImageDataFragment } }
  ) | null, SeoSettings?: { __typename?: 'ArticlePageBlockData', MetaDescription?: string | null } | null } & { ' $fragmentName'?: 'ArticlePageDataFragment' };

export type GetArticlePageMetaDataQueryVariables = Exact<{
  guid: Scalars['String']['input'];
  locale: Array<InputMaybe<Locales>> | InputMaybe<Locales>;
}>;


export type GetArticlePageMetaDataQuery = { __typename?: 'Query', ArticlePage?: { __typename?: 'ArticlePageOutput', items?: Array<{ __typename?: 'ArticlePage', name?: string | null, title?: string | null, published?: any | null, modified?: any | null, expires?: any | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', code?: string | null } | null, alternateLocales?: Array<{ __typename?: 'ContentLanguageModel', code?: string | null, url?: string | null } | null> | null, seo?: { __typename?: 'ArticlePageBlockData', metaTitle?: string | null, metaDescription?: string | null, type?: string | null, image?: { __typename?: 'ContentModelReference', id?: number | null, guidValue?: string | null, data?: { __typename?: 'ArticleListPage', url?: string | null, path?: string | null } | { __typename?: 'ArticlePage', url?: string | null, path?: string | null } | { __typename?: 'ButtonBlock', url?: string | null, path?: string | null } | { __typename?: 'CardBlock', url?: string | null, path?: string | null } | { __typename?: 'CarouselBlock', url?: string | null, path?: string | null } | { __typename?: 'ContainerBlock', url?: string | null, path?: string | null } | { __typename?: 'Content', url?: string | null, path?: string | null } | { __typename?: 'DAMAsset', url?: string | null, path?: string | null } | { __typename?: 'DAMImageAsset', url?: string | null, path?: string | null } | { __typename?: 'DAMVideoAsset', url?: string | null, path?: string | null } | { __typename?: 'FooterConfigBlock', url?: string | null, path?: string | null } | { __typename?: 'HeaderConfigBlock', url?: string | null, path?: string | null } | { __typename?: 'HeroBlock', url?: string | null, path?: string | null } | { __typename?: 'HighlightTextBlock', url?: string | null, path?: string | null } | { __typename?: 'LandingPage', url?: string | null, path?: string | null } | { __typename?: 'LinkListBlock', url?: string | null, path?: string | null } | { __typename?: 'LocationListPage', url?: string | null, path?: string | null } | { __typename?: 'LocationPage', url?: string | null, path?: string | null } | { __typename?: 'NavMenuItem', url?: string | null, path?: string | null } | { __typename?: 'OdpEmbedBlock', url?: string | null, path?: string | null } | { __typename?: 'PageSeoSettings', url?: string | null, path?: string | null } | { __typename?: 'Product', url?: string | null, path?: string | null } | { __typename?: 'ProductTextProperty', url?: string | null, path?: string | null } | { __typename?: 'QuoteBlock', url?: string | null, path?: string | null } | { __typename?: 'TextBlock', url?: string | null, path?: string | null } | null } | null } | null } | null> | null } | null };

export type LandingPageDataFragment = { __typename?: 'LandingPage', TopContentArea?: Array<(
    { __typename?: 'ContentAreaItemModelSearch' }
    & { ' $fragmentRefs'?: { 'ContentAreaItemDataFragment': ContentAreaItemDataFragment } }
  ) | null> | null, MainContentArea?: Array<(
    { __typename?: 'ContentAreaItemModelSearch' }
    & { ' $fragmentRefs'?: { 'ContentAreaItemDataFragment': ContentAreaItemDataFragment } }
  ) | null> | null } & { ' $fragmentName'?: 'LandingPageDataFragment' };

export type GetLandingPageMetaDataQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
  workId?: InputMaybe<Scalars['Int']['input']>;
  guidValue?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<Locales> | Locales>;
  isCommonDraft?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetLandingPageMetaDataQuery = { __typename?: 'Query', getLandingPageMetaData?: { __typename?: 'LandingPageOutput', count?: number | null, pages?: Array<{ __typename?: 'LandingPage', name?: string | null, head?: { __typename?: 'LandingPageBlockData', title?: string | null, description?: string | null, type?: string | null, image?: { __typename?: 'ContentModelReference', url?: string | null, data?: { __typename?: 'ArticleListPage', url?: string | null, path?: string | null } | { __typename?: 'ArticlePage', url?: string | null, path?: string | null } | { __typename?: 'ButtonBlock', url?: string | null, path?: string | null } | { __typename?: 'CardBlock', url?: string | null, path?: string | null } | { __typename?: 'CarouselBlock', url?: string | null, path?: string | null } | { __typename?: 'ContainerBlock', url?: string | null, path?: string | null } | { __typename?: 'Content', url?: string | null, path?: string | null } | { __typename?: 'DAMAsset', url?: string | null, path?: string | null } | { __typename?: 'DAMImageAsset', url?: string | null, path?: string | null } | { __typename?: 'DAMVideoAsset', url?: string | null, path?: string | null } | { __typename?: 'FooterConfigBlock', url?: string | null, path?: string | null } | { __typename?: 'HeaderConfigBlock', url?: string | null, path?: string | null } | { __typename?: 'HeroBlock', url?: string | null, path?: string | null } | { __typename?: 'HighlightTextBlock', url?: string | null, path?: string | null } | { __typename?: 'LandingPage', url?: string | null, path?: string | null } | { __typename?: 'LinkListBlock', url?: string | null, path?: string | null } | { __typename?: 'LocationListPage', url?: string | null, path?: string | null } | { __typename?: 'LocationPage', url?: string | null, path?: string | null } | { __typename?: 'NavMenuItem', url?: string | null, path?: string | null } | { __typename?: 'OdpEmbedBlock', url?: string | null, path?: string | null } | { __typename?: 'PageSeoSettings', url?: string | null, path?: string | null } | { __typename?: 'Product', url?: string | null, path?: string | null } | { __typename?: 'ProductTextProperty', url?: string | null, path?: string | null } | { __typename?: 'QuoteBlock', url?: string | null, path?: string | null } | { __typename?: 'TextBlock', url?: string | null, path?: string | null } | null } | null } | null } | null> | null } | null };

export type LocationListPageDataFragment = { __typename?: 'LocationListPage', LocationListTitle?: string | null, LocationsIntroduction?: string | null, LocationsImage?: (
    { __typename?: 'ContentModelReferenceSearch' }
    & { ' $fragmentRefs'?: { 'ImageDataSearchFragment': ImageDataSearchFragment } }
  ) | null, LocationsTopArea?: Array<(
    { __typename?: 'ContentAreaItemModelSearch' }
    & { ' $fragmentRefs'?: { 'ContentAreaItemDataFragment': ContentAreaItemDataFragment } }
  ) | null> | null, LocationsMainContent?: Array<(
    { __typename?: 'ContentAreaItemModelSearch' }
    & { ' $fragmentRefs'?: { 'ContentAreaItemDataFragment': ContentAreaItemDataFragment } }
  ) | null> | null } & { ' $fragmentName'?: 'LocationListPageDataFragment' };

export type LocationPageDataFragment = { __typename?: 'LocationPage', Name?: string | null, LocationTitle?: string | null, LocationServices?: Array<string | null> | null, LocationStreet1?: string | null, LocationStreet2?: string | null, LocationPostalCode?: string | null, LocationCity?: string | null, LocationState?: string | null, LocationCountry?: string | null, LocationContinent?: string | null, LocationPhone?: string | null, LocationLatitude?: number | null, LocationLongitude?: number | null, LocationText?: string | null, ParentLink?: { __typename?: 'ContentModelReference', Url?: string | null, Expanded?: { __typename?: 'ArticleListPage', RelativePath?: string | null } | { __typename?: 'ArticlePage', RelativePath?: string | null } | { __typename?: 'ButtonBlock', RelativePath?: string | null } | { __typename?: 'CardBlock', RelativePath?: string | null } | { __typename?: 'CarouselBlock', RelativePath?: string | null } | { __typename?: 'ContainerBlock', RelativePath?: string | null } | { __typename?: 'Content', RelativePath?: string | null } | { __typename?: 'DAMAsset', RelativePath?: string | null } | { __typename?: 'DAMImageAsset', RelativePath?: string | null } | { __typename?: 'DAMVideoAsset', RelativePath?: string | null } | { __typename?: 'FooterConfigBlock', RelativePath?: string | null } | { __typename?: 'HeaderConfigBlock', RelativePath?: string | null } | { __typename?: 'HeroBlock', RelativePath?: string | null } | { __typename?: 'HighlightTextBlock', RelativePath?: string | null } | { __typename?: 'LandingPage', RelativePath?: string | null } | { __typename?: 'LinkListBlock', RelativePath?: string | null } | { __typename?: 'LocationListPage', RelativePath?: string | null } | { __typename?: 'LocationPage', RelativePath?: string | null } | { __typename?: 'NavMenuItem', RelativePath?: string | null } | { __typename?: 'OdpEmbedBlock', RelativePath?: string | null } | { __typename?: 'PageSeoSettings', RelativePath?: string | null } | { __typename?: 'Product', RelativePath?: string | null } | { __typename?: 'ProductTextProperty', RelativePath?: string | null } | { __typename?: 'QuoteBlock', RelativePath?: string | null } | { __typename?: 'TextBlock', RelativePath?: string | null } | null } | null, LocationImage?: (
    { __typename?: 'ContentModelReferenceSearch' }
    & { ' $fragmentRefs'?: { 'ImageDataSearchFragment': ImageDataSearchFragment } }
  ) | null } & { ' $fragmentName'?: 'LocationPageDataFragment' };

export type GetArticlesQueryVariables = Exact<{
  parent: Scalars['String']['input'];
  pageSize?: Scalars['Int']['input'];
  start?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  author?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  published?: InputMaybe<Scalars['Date']['input']>;
  publishedEnd?: InputMaybe<Scalars['Date']['input']>;
}>;


export type GetArticlesQuery = { __typename?: 'Query', getArticles?: { __typename?: 'ArticlePageOutput', total?: number | null, items?: Array<{ __typename?: 'ArticlePage', name?: string | null, title?: string | null, url?: string | null, path?: string | null, author?: string | null, published?: any | null, id?: { __typename?: 'ContentModelReference', guid?: string | null } | null, description?: { __typename?: 'ArticlePageBlockData', text?: string | null } | null, image?: { __typename?: 'ContentModelReference', url?: string | null, data?: { __typename?: 'ArticleListPage', url?: string | null, path?: string | null } | { __typename?: 'ArticlePage', url?: string | null, path?: string | null } | { __typename?: 'ButtonBlock', url?: string | null, path?: string | null } | { __typename?: 'CardBlock', url?: string | null, path?: string | null } | { __typename?: 'CarouselBlock', url?: string | null, path?: string | null } | { __typename?: 'ContainerBlock', url?: string | null, path?: string | null } | { __typename?: 'Content', url?: string | null, path?: string | null } | { __typename?: 'DAMAsset', url?: string | null, path?: string | null } | { __typename?: 'DAMImageAsset', url?: string | null, path?: string | null } | { __typename?: 'DAMVideoAsset', url?: string | null, path?: string | null } | { __typename?: 'FooterConfigBlock', url?: string | null, path?: string | null } | { __typename?: 'HeaderConfigBlock', url?: string | null, path?: string | null } | { __typename?: 'HeroBlock', url?: string | null, path?: string | null } | { __typename?: 'HighlightTextBlock', url?: string | null, path?: string | null } | { __typename?: 'LandingPage', url?: string | null, path?: string | null } | { __typename?: 'LinkListBlock', url?: string | null, path?: string | null } | { __typename?: 'LocationListPage', url?: string | null, path?: string | null } | { __typename?: 'LocationPage', url?: string | null, path?: string | null } | { __typename?: 'NavMenuItem', url?: string | null, path?: string | null } | { __typename?: 'OdpEmbedBlock', url?: string | null, path?: string | null } | { __typename?: 'PageSeoSettings', url?: string | null, path?: string | null } | { __typename?: 'Product', url?: string | null, path?: string | null } | { __typename?: 'ProductTextProperty', url?: string | null, path?: string | null } | { __typename?: 'QuoteBlock', url?: string | null, path?: string | null } | { __typename?: 'TextBlock', url?: string | null, path?: string | null } | null } | null } | null> | null, facets?: { __typename?: 'ArticlePageFacet', author?: Array<{ __typename?: 'StringFacet', count?: number | null, name?: string | null } | null> | null, published?: Array<{ __typename?: 'DateFacet', count?: number | null, name?: string | null } | null> | null } | null } | null };

export type LocationTopContentFragment = { __typename?: 'LocationPage', isTopContent?: any | null } & { ' $fragmentName'?: 'LocationTopContentFragment' };

export type LocationGeoLocationFragment = { __typename?: 'LocationPage', lon?: number | null, lat?: number | null } & { ' $fragmentName'?: 'LocationGeoLocationFragment' };

export type GetLocationsListQueryVariables = Exact<{
  parentId: Scalars['String']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  withGeoLocation?: Scalars['Boolean']['input'];
  withTopContent?: Scalars['Boolean']['input'];
  orderBy?: InputMaybe<LocationPageOrderByInput>;
  continents?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  services?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type GetLocationsListQuery = { __typename?: 'Query', getLocationsList?: { __typename?: 'LocationPageOutput', facets?: { __typename?: 'LocationPageFacet', continent?: Array<{ __typename?: 'StringFacet', name?: string | null, count?: number | null } | null> | null, services?: Array<{ __typename?: 'StringFacet', name?: string | null, count?: number | null } | null> | null } | null, items?: Array<(
      { __typename?: 'LocationPage', path?: string | null, slug?: string | null, title?: string | null, street1?: string | null, street2?: string | null, city?: string | null, postalCode?: string | null, state?: string | null, country?: string | null, continent?: string | null, services?: Array<string | null> | null, id?: { __typename?: 'ContentModelReference', id?: number | null, guid?: string | null } | null }
      & { ' $fragmentRefs'?: { 'LocationGeoLocationFragment': LocationGeoLocationFragment;'LocationTopContentFragment': LocationTopContentFragment } }
    ) | null> | null } | null };

export type ContentLinkFragment = { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } & { ' $fragmentName'?: 'ContentLinkFragment' };

export type ContentLinkSearchFragment = { __typename?: 'ContentModelReferenceSearch', id?: number | null, workId?: number | null, guidValue?: string | null } & { ' $fragmentName'?: 'ContentLinkSearchFragment' };

type IContentData_ArticleListPage_Fragment = { __typename?: 'ArticleListPage', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_ArticleListPage_Fragment' };

type IContentData_ArticlePage_Fragment = { __typename?: 'ArticlePage', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_ArticlePage_Fragment' };

type IContentData_ButtonBlock_Fragment = { __typename?: 'ButtonBlock', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_ButtonBlock_Fragment' };

type IContentData_CardBlock_Fragment = { __typename?: 'CardBlock', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_CardBlock_Fragment' };

type IContentData_CarouselBlock_Fragment = { __typename?: 'CarouselBlock', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_CarouselBlock_Fragment' };

type IContentData_ContainerBlock_Fragment = { __typename?: 'ContainerBlock', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_ContainerBlock_Fragment' };

type IContentData_Content_Fragment = { __typename?: 'Content', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_Content_Fragment' };

type IContentData_DamAsset_Fragment = { __typename?: 'DAMAsset', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_DamAsset_Fragment' };

type IContentData_DamImageAsset_Fragment = { __typename?: 'DAMImageAsset', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_DamImageAsset_Fragment' };

type IContentData_DamVideoAsset_Fragment = { __typename?: 'DAMVideoAsset', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_DamVideoAsset_Fragment' };

type IContentData_FooterConfigBlock_Fragment = { __typename?: 'FooterConfigBlock', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_FooterConfigBlock_Fragment' };

type IContentData_HeaderConfigBlock_Fragment = { __typename?: 'HeaderConfigBlock', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_HeaderConfigBlock_Fragment' };

type IContentData_HeroBlock_Fragment = { __typename?: 'HeroBlock', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_HeroBlock_Fragment' };

type IContentData_HighlightTextBlock_Fragment = { __typename?: 'HighlightTextBlock', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_HighlightTextBlock_Fragment' };

type IContentData_LandingPage_Fragment = { __typename?: 'LandingPage', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_LandingPage_Fragment' };

type IContentData_LinkListBlock_Fragment = { __typename?: 'LinkListBlock', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_LinkListBlock_Fragment' };

type IContentData_LocationListPage_Fragment = { __typename?: 'LocationListPage', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_LocationListPage_Fragment' };

type IContentData_LocationPage_Fragment = { __typename?: 'LocationPage', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_LocationPage_Fragment' };

type IContentData_NavMenuItem_Fragment = { __typename?: 'NavMenuItem', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_NavMenuItem_Fragment' };

type IContentData_OdpEmbedBlock_Fragment = { __typename?: 'OdpEmbedBlock', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_OdpEmbedBlock_Fragment' };

type IContentData_PageSeoSettings_Fragment = { __typename?: 'PageSeoSettings', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_PageSeoSettings_Fragment' };

type IContentData_Product_Fragment = { __typename?: 'Product', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_Product_Fragment' };

type IContentData_ProductTextProperty_Fragment = { __typename?: 'ProductTextProperty', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_ProductTextProperty_Fragment' };

type IContentData_QuoteBlock_Fragment = { __typename?: 'QuoteBlock', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_QuoteBlock_Fragment' };

type IContentData_TextBlock_Fragment = { __typename?: 'TextBlock', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_TextBlock_Fragment' };

export type IContentDataFragment = IContentData_ArticleListPage_Fragment | IContentData_ArticlePage_Fragment | IContentData_ButtonBlock_Fragment | IContentData_CardBlock_Fragment | IContentData_CarouselBlock_Fragment | IContentData_ContainerBlock_Fragment | IContentData_Content_Fragment | IContentData_DamAsset_Fragment | IContentData_DamImageAsset_Fragment | IContentData_DamVideoAsset_Fragment | IContentData_FooterConfigBlock_Fragment | IContentData_HeaderConfigBlock_Fragment | IContentData_HeroBlock_Fragment | IContentData_HighlightTextBlock_Fragment | IContentData_LandingPage_Fragment | IContentData_LinkListBlock_Fragment | IContentData_LocationListPage_Fragment | IContentData_LocationPage_Fragment | IContentData_NavMenuItem_Fragment | IContentData_OdpEmbedBlock_Fragment | IContentData_PageSeoSettings_Fragment | IContentData_Product_Fragment | IContentData_ProductTextProperty_Fragment | IContentData_QuoteBlock_Fragment | IContentData_TextBlock_Fragment;

export type ContentAreaItemDataFragment = { __typename?: 'ContentAreaItemModelSearch', displayOption?: string | null, item?: (
    { __typename?: 'ContentModelReferenceSearch', data?: (
      { __typename?: 'ArticleListPage' }
      & { ' $fragmentRefs'?: { 'BlockData_ArticleListPage_Fragment': BlockData_ArticleListPage_Fragment } }
    ) | (
      { __typename?: 'ArticlePage' }
      & { ' $fragmentRefs'?: { 'BlockData_ArticlePage_Fragment': BlockData_ArticlePage_Fragment } }
    ) | (
      { __typename?: 'ButtonBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_ButtonBlock_Fragment': BlockData_ButtonBlock_Fragment } }
    ) | (
      { __typename?: 'CardBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_CardBlock_Fragment': BlockData_CardBlock_Fragment } }
    ) | (
      { __typename?: 'CarouselBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_CarouselBlock_Fragment': BlockData_CarouselBlock_Fragment } }
    ) | (
      { __typename?: 'ContainerBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_ContainerBlock_Fragment': BlockData_ContainerBlock_Fragment } }
    ) | (
      { __typename?: 'Content' }
      & { ' $fragmentRefs'?: { 'BlockData_Content_Fragment': BlockData_Content_Fragment } }
    ) | (
      { __typename?: 'DAMAsset' }
      & { ' $fragmentRefs'?: { 'BlockData_DamAsset_Fragment': BlockData_DamAsset_Fragment } }
    ) | (
      { __typename?: 'DAMImageAsset' }
      & { ' $fragmentRefs'?: { 'BlockData_DamImageAsset_Fragment': BlockData_DamImageAsset_Fragment } }
    ) | (
      { __typename?: 'DAMVideoAsset' }
      & { ' $fragmentRefs'?: { 'BlockData_DamVideoAsset_Fragment': BlockData_DamVideoAsset_Fragment } }
    ) | (
      { __typename?: 'FooterConfigBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_FooterConfigBlock_Fragment': BlockData_FooterConfigBlock_Fragment } }
    ) | (
      { __typename?: 'HeaderConfigBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_HeaderConfigBlock_Fragment': BlockData_HeaderConfigBlock_Fragment } }
    ) | (
      { __typename?: 'HeroBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_HeroBlock_Fragment': BlockData_HeroBlock_Fragment } }
    ) | (
      { __typename?: 'HighlightTextBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_HighlightTextBlock_Fragment': BlockData_HighlightTextBlock_Fragment } }
    ) | (
      { __typename?: 'LandingPage' }
      & { ' $fragmentRefs'?: { 'BlockData_LandingPage_Fragment': BlockData_LandingPage_Fragment } }
    ) | (
      { __typename?: 'LinkListBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_LinkListBlock_Fragment': BlockData_LinkListBlock_Fragment } }
    ) | (
      { __typename?: 'LocationListPage' }
      & { ' $fragmentRefs'?: { 'BlockData_LocationListPage_Fragment': BlockData_LocationListPage_Fragment } }
    ) | (
      { __typename?: 'LocationPage' }
      & { ' $fragmentRefs'?: { 'BlockData_LocationPage_Fragment': BlockData_LocationPage_Fragment } }
    ) | (
      { __typename?: 'NavMenuItem' }
      & { ' $fragmentRefs'?: { 'BlockData_NavMenuItem_Fragment': BlockData_NavMenuItem_Fragment } }
    ) | (
      { __typename?: 'OdpEmbedBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_OdpEmbedBlock_Fragment': BlockData_OdpEmbedBlock_Fragment } }
    ) | (
      { __typename?: 'PageSeoSettings' }
      & { ' $fragmentRefs'?: { 'BlockData_PageSeoSettings_Fragment': BlockData_PageSeoSettings_Fragment } }
    ) | (
      { __typename?: 'Product' }
      & { ' $fragmentRefs'?: { 'BlockData_Product_Fragment': BlockData_Product_Fragment } }
    ) | (
      { __typename?: 'ProductTextProperty' }
      & { ' $fragmentRefs'?: { 'BlockData_ProductTextProperty_Fragment': BlockData_ProductTextProperty_Fragment } }
    ) | (
      { __typename?: 'QuoteBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_QuoteBlock_Fragment': BlockData_QuoteBlock_Fragment } }
    ) | (
      { __typename?: 'TextBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_TextBlock_Fragment': BlockData_TextBlock_Fragment } }
    ) | null }
    & { ' $fragmentRefs'?: { 'ContentLinkSearchFragment': ContentLinkSearchFragment } }
  ) | null } & { ' $fragmentName'?: 'ContentAreaItemDataFragment' };

export type BlockContentAreaItemDataFragment = { __typename?: 'ContentAreaItemModelSearch', displayOption?: string | null, item?: (
    { __typename?: 'ContentModelReferenceSearch', data?: (
      { __typename?: 'ArticleListPage' }
      & { ' $fragmentRefs'?: { 'IContentData_ArticleListPage_Fragment': IContentData_ArticleListPage_Fragment } }
    ) | (
      { __typename?: 'ArticlePage' }
      & { ' $fragmentRefs'?: { 'IContentData_ArticlePage_Fragment': IContentData_ArticlePage_Fragment } }
    ) | (
      { __typename?: 'ButtonBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment } }
    ) | (
      { __typename?: 'CardBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_CardBlock_Fragment': IContentData_CardBlock_Fragment } }
    ) | (
      { __typename?: 'CarouselBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_CarouselBlock_Fragment': IContentData_CarouselBlock_Fragment } }
    ) | (
      { __typename?: 'ContainerBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_ContainerBlock_Fragment': IContentData_ContainerBlock_Fragment } }
    ) | (
      { __typename?: 'Content' }
      & { ' $fragmentRefs'?: { 'IContentData_Content_Fragment': IContentData_Content_Fragment } }
    ) | (
      { __typename?: 'DAMAsset' }
      & { ' $fragmentRefs'?: { 'IContentData_DamAsset_Fragment': IContentData_DamAsset_Fragment } }
    ) | (
      { __typename?: 'DAMImageAsset' }
      & { ' $fragmentRefs'?: { 'IContentData_DamImageAsset_Fragment': IContentData_DamImageAsset_Fragment } }
    ) | (
      { __typename?: 'DAMVideoAsset' }
      & { ' $fragmentRefs'?: { 'IContentData_DamVideoAsset_Fragment': IContentData_DamVideoAsset_Fragment } }
    ) | (
      { __typename?: 'FooterConfigBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_FooterConfigBlock_Fragment': IContentData_FooterConfigBlock_Fragment } }
    ) | (
      { __typename?: 'HeaderConfigBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_HeaderConfigBlock_Fragment': IContentData_HeaderConfigBlock_Fragment } }
    ) | (
      { __typename?: 'HeroBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment } }
    ) | (
      { __typename?: 'HighlightTextBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_HighlightTextBlock_Fragment': IContentData_HighlightTextBlock_Fragment } }
    ) | (
      { __typename?: 'LandingPage' }
      & { ' $fragmentRefs'?: { 'IContentData_LandingPage_Fragment': IContentData_LandingPage_Fragment } }
    ) | (
      { __typename?: 'LinkListBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_LinkListBlock_Fragment': IContentData_LinkListBlock_Fragment } }
    ) | (
      { __typename?: 'LocationListPage' }
      & { ' $fragmentRefs'?: { 'IContentData_LocationListPage_Fragment': IContentData_LocationListPage_Fragment } }
    ) | (
      { __typename?: 'LocationPage' }
      & { ' $fragmentRefs'?: { 'IContentData_LocationPage_Fragment': IContentData_LocationPage_Fragment } }
    ) | (
      { __typename?: 'NavMenuItem' }
      & { ' $fragmentRefs'?: { 'IContentData_NavMenuItem_Fragment': IContentData_NavMenuItem_Fragment } }
    ) | (
      { __typename?: 'OdpEmbedBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_OdpEmbedBlock_Fragment': IContentData_OdpEmbedBlock_Fragment } }
    ) | (
      { __typename?: 'PageSeoSettings' }
      & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment } }
    ) | (
      { __typename?: 'Product' }
      & { ' $fragmentRefs'?: { 'IContentData_Product_Fragment': IContentData_Product_Fragment } }
    ) | (
      { __typename?: 'ProductTextProperty' }
      & { ' $fragmentRefs'?: { 'IContentData_ProductTextProperty_Fragment': IContentData_ProductTextProperty_Fragment } }
    ) | (
      { __typename?: 'QuoteBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_QuoteBlock_Fragment': IContentData_QuoteBlock_Fragment } }
    ) | (
      { __typename?: 'TextBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment } }
    ) | null }
    & { ' $fragmentRefs'?: { 'ContentLinkSearchFragment': ContentLinkSearchFragment } }
  ) | null } & { ' $fragmentName'?: 'BlockContentAreaItemDataFragment' };

export type LinkItemDataFragment = { __typename?: 'LinkItemNode', children?: string | null, title?: string | null, href?: string | null, target?: string | null, content?: { __typename?: 'ContentModelReference', href?: string | null, data?: { __typename?: 'ArticleListPage', path?: string | null } | { __typename?: 'ArticlePage', path?: string | null } | { __typename?: 'ButtonBlock', path?: string | null } | { __typename?: 'CardBlock', path?: string | null } | { __typename?: 'CarouselBlock', path?: string | null } | { __typename?: 'ContainerBlock', path?: string | null } | { __typename?: 'Content', path?: string | null } | { __typename?: 'DAMAsset', path?: string | null } | { __typename?: 'DAMImageAsset', path?: string | null } | { __typename?: 'DAMVideoAsset', path?: string | null } | { __typename?: 'FooterConfigBlock', path?: string | null } | { __typename?: 'HeaderConfigBlock', path?: string | null } | { __typename?: 'HeroBlock', path?: string | null } | { __typename?: 'HighlightTextBlock', path?: string | null } | { __typename?: 'LandingPage', path?: string | null } | { __typename?: 'LinkListBlock', path?: string | null } | { __typename?: 'LocationListPage', path?: string | null } | { __typename?: 'LocationPage', path?: string | null } | { __typename?: 'NavMenuItem', path?: string | null } | { __typename?: 'OdpEmbedBlock', path?: string | null } | { __typename?: 'PageSeoSettings', path?: string | null } | { __typename?: 'Product', path?: string | null } | { __typename?: 'ProductTextProperty', path?: string | null } | { __typename?: 'QuoteBlock', path?: string | null } | { __typename?: 'TextBlock', path?: string | null } | null } | null } & { ' $fragmentName'?: 'LinkItemDataFragment' };

export type ImageDataFragment = (
  { __typename?: 'ContentModelReference', url?: string | null, data?: (
    { __typename?: 'ArticleListPage', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_ArticleListPage_Fragment': IContentData_ArticleListPage_Fragment } }
  ) | (
    { __typename?: 'ArticlePage', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_ArticlePage_Fragment': IContentData_ArticlePage_Fragment } }
  ) | (
    { __typename?: 'ButtonBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment } }
  ) | (
    { __typename?: 'CardBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_CardBlock_Fragment': IContentData_CardBlock_Fragment } }
  ) | (
    { __typename?: 'CarouselBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_CarouselBlock_Fragment': IContentData_CarouselBlock_Fragment } }
  ) | (
    { __typename?: 'ContainerBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_ContainerBlock_Fragment': IContentData_ContainerBlock_Fragment } }
  ) | (
    { __typename?: 'Content', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_Content_Fragment': IContentData_Content_Fragment } }
  ) | (
    { __typename?: 'DAMAsset', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_DamAsset_Fragment': IContentData_DamAsset_Fragment } }
  ) | (
    { __typename?: 'DAMImageAsset', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_DamImageAsset_Fragment': IContentData_DamImageAsset_Fragment } }
  ) | (
    { __typename?: 'DAMVideoAsset', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_DamVideoAsset_Fragment': IContentData_DamVideoAsset_Fragment } }
  ) | (
    { __typename?: 'FooterConfigBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_FooterConfigBlock_Fragment': IContentData_FooterConfigBlock_Fragment } }
  ) | (
    { __typename?: 'HeaderConfigBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_HeaderConfigBlock_Fragment': IContentData_HeaderConfigBlock_Fragment } }
  ) | (
    { __typename?: 'HeroBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment } }
  ) | (
    { __typename?: 'HighlightTextBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_HighlightTextBlock_Fragment': IContentData_HighlightTextBlock_Fragment } }
  ) | (
    { __typename?: 'LandingPage', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_LandingPage_Fragment': IContentData_LandingPage_Fragment } }
  ) | (
    { __typename?: 'LinkListBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_LinkListBlock_Fragment': IContentData_LinkListBlock_Fragment } }
  ) | (
    { __typename?: 'LocationListPage', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_LocationListPage_Fragment': IContentData_LocationListPage_Fragment } }
  ) | (
    { __typename?: 'LocationPage', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_LocationPage_Fragment': IContentData_LocationPage_Fragment } }
  ) | (
    { __typename?: 'NavMenuItem', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_NavMenuItem_Fragment': IContentData_NavMenuItem_Fragment } }
  ) | (
    { __typename?: 'OdpEmbedBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_OdpEmbedBlock_Fragment': IContentData_OdpEmbedBlock_Fragment } }
  ) | (
    { __typename?: 'PageSeoSettings', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment } }
  ) | (
    { __typename?: 'Product', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_Product_Fragment': IContentData_Product_Fragment } }
  ) | (
    { __typename?: 'ProductTextProperty', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_ProductTextProperty_Fragment': IContentData_ProductTextProperty_Fragment } }
  ) | (
    { __typename?: 'QuoteBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_QuoteBlock_Fragment': IContentData_QuoteBlock_Fragment } }
  ) | (
    { __typename?: 'TextBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment } }
  ) | null }
  & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
) & { ' $fragmentName'?: 'ImageDataFragment' };

export type ImageDataSearchFragment = (
  { __typename?: 'ContentModelReferenceSearch', url?: string | null, data?: (
    { __typename?: 'ArticleListPage', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_ArticleListPage_Fragment': IContentData_ArticleListPage_Fragment } }
  ) | (
    { __typename?: 'ArticlePage', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_ArticlePage_Fragment': IContentData_ArticlePage_Fragment } }
  ) | (
    { __typename?: 'ButtonBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment } }
  ) | (
    { __typename?: 'CardBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_CardBlock_Fragment': IContentData_CardBlock_Fragment } }
  ) | (
    { __typename?: 'CarouselBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_CarouselBlock_Fragment': IContentData_CarouselBlock_Fragment } }
  ) | (
    { __typename?: 'ContainerBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_ContainerBlock_Fragment': IContentData_ContainerBlock_Fragment } }
  ) | (
    { __typename?: 'Content', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_Content_Fragment': IContentData_Content_Fragment } }
  ) | (
    { __typename?: 'DAMAsset', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_DamAsset_Fragment': IContentData_DamAsset_Fragment } }
  ) | (
    { __typename?: 'DAMImageAsset', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_DamImageAsset_Fragment': IContentData_DamImageAsset_Fragment } }
  ) | (
    { __typename?: 'DAMVideoAsset', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_DamVideoAsset_Fragment': IContentData_DamVideoAsset_Fragment } }
  ) | (
    { __typename?: 'FooterConfigBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_FooterConfigBlock_Fragment': IContentData_FooterConfigBlock_Fragment } }
  ) | (
    { __typename?: 'HeaderConfigBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_HeaderConfigBlock_Fragment': IContentData_HeaderConfigBlock_Fragment } }
  ) | (
    { __typename?: 'HeroBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment } }
  ) | (
    { __typename?: 'HighlightTextBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_HighlightTextBlock_Fragment': IContentData_HighlightTextBlock_Fragment } }
  ) | (
    { __typename?: 'LandingPage', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_LandingPage_Fragment': IContentData_LandingPage_Fragment } }
  ) | (
    { __typename?: 'LinkListBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_LinkListBlock_Fragment': IContentData_LinkListBlock_Fragment } }
  ) | (
    { __typename?: 'LocationListPage', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_LocationListPage_Fragment': IContentData_LocationListPage_Fragment } }
  ) | (
    { __typename?: 'LocationPage', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_LocationPage_Fragment': IContentData_LocationPage_Fragment } }
  ) | (
    { __typename?: 'NavMenuItem', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_NavMenuItem_Fragment': IContentData_NavMenuItem_Fragment } }
  ) | (
    { __typename?: 'OdpEmbedBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_OdpEmbedBlock_Fragment': IContentData_OdpEmbedBlock_Fragment } }
  ) | (
    { __typename?: 'PageSeoSettings', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment } }
  ) | (
    { __typename?: 'Product', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_Product_Fragment': IContentData_Product_Fragment } }
  ) | (
    { __typename?: 'ProductTextProperty', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_ProductTextProperty_Fragment': IContentData_ProductTextProperty_Fragment } }
  ) | (
    { __typename?: 'QuoteBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_QuoteBlock_Fragment': IContentData_QuoteBlock_Fragment } }
  ) | (
    { __typename?: 'TextBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment } }
  ) | null }
  & { ' $fragmentRefs'?: { 'ContentLinkSearchFragment': ContentLinkSearchFragment } }
) & { ' $fragmentName'?: 'ImageDataSearchFragment' };

type BlockData_ArticleListPage_Fragment = (
  { __typename?: 'ArticleListPage' }
  & { ' $fragmentRefs'?: { 'IContentData_ArticleListPage_Fragment': IContentData_ArticleListPage_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ArticleListPage_Fragment' };

type BlockData_ArticlePage_Fragment = (
  { __typename?: 'ArticlePage' }
  & { ' $fragmentRefs'?: { 'IContentData_ArticlePage_Fragment': IContentData_ArticlePage_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ArticlePage_Fragment' };

type BlockData_ButtonBlock_Fragment = (
  { __typename?: 'ButtonBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ButtonBlock_Fragment' };

type BlockData_CardBlock_Fragment = (
  { __typename?: 'CardBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_CardBlock_Fragment': IContentData_CardBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_CardBlock_Fragment' };

type BlockData_CarouselBlock_Fragment = (
  { __typename?: 'CarouselBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_CarouselBlock_Fragment': IContentData_CarouselBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_CarouselBlock_Fragment' };

type BlockData_ContainerBlock_Fragment = (
  { __typename?: 'ContainerBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ContainerBlock_Fragment': IContentData_ContainerBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ContainerBlock_Fragment' };

type BlockData_Content_Fragment = (
  { __typename?: 'Content' }
  & { ' $fragmentRefs'?: { 'IContentData_Content_Fragment': IContentData_Content_Fragment } }
) & { ' $fragmentName'?: 'BlockData_Content_Fragment' };

type BlockData_DamAsset_Fragment = (
  { __typename?: 'DAMAsset' }
  & { ' $fragmentRefs'?: { 'IContentData_DamAsset_Fragment': IContentData_DamAsset_Fragment } }
) & { ' $fragmentName'?: 'BlockData_DamAsset_Fragment' };

type BlockData_DamImageAsset_Fragment = (
  { __typename?: 'DAMImageAsset' }
  & { ' $fragmentRefs'?: { 'IContentData_DamImageAsset_Fragment': IContentData_DamImageAsset_Fragment } }
) & { ' $fragmentName'?: 'BlockData_DamImageAsset_Fragment' };

type BlockData_DamVideoAsset_Fragment = (
  { __typename?: 'DAMVideoAsset' }
  & { ' $fragmentRefs'?: { 'IContentData_DamVideoAsset_Fragment': IContentData_DamVideoAsset_Fragment } }
) & { ' $fragmentName'?: 'BlockData_DamVideoAsset_Fragment' };

type BlockData_FooterConfigBlock_Fragment = (
  { __typename?: 'FooterConfigBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_FooterConfigBlock_Fragment': IContentData_FooterConfigBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_FooterConfigBlock_Fragment' };

type BlockData_HeaderConfigBlock_Fragment = (
  { __typename?: 'HeaderConfigBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HeaderConfigBlock_Fragment': IContentData_HeaderConfigBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_HeaderConfigBlock_Fragment' };

type BlockData_HeroBlock_Fragment = (
  { __typename?: 'HeroBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_HeroBlock_Fragment' };

type BlockData_HighlightTextBlock_Fragment = (
  { __typename?: 'HighlightTextBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HighlightTextBlock_Fragment': IContentData_HighlightTextBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_HighlightTextBlock_Fragment' };

type BlockData_LandingPage_Fragment = (
  { __typename?: 'LandingPage' }
  & { ' $fragmentRefs'?: { 'IContentData_LandingPage_Fragment': IContentData_LandingPage_Fragment } }
) & { ' $fragmentName'?: 'BlockData_LandingPage_Fragment' };

type BlockData_LinkListBlock_Fragment = (
  { __typename?: 'LinkListBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_LinkListBlock_Fragment': IContentData_LinkListBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_LinkListBlock_Fragment' };

type BlockData_LocationListPage_Fragment = (
  { __typename?: 'LocationListPage' }
  & { ' $fragmentRefs'?: { 'IContentData_LocationListPage_Fragment': IContentData_LocationListPage_Fragment } }
) & { ' $fragmentName'?: 'BlockData_LocationListPage_Fragment' };

type BlockData_LocationPage_Fragment = (
  { __typename?: 'LocationPage' }
  & { ' $fragmentRefs'?: { 'IContentData_LocationPage_Fragment': IContentData_LocationPage_Fragment } }
) & { ' $fragmentName'?: 'BlockData_LocationPage_Fragment' };

type BlockData_NavMenuItem_Fragment = (
  { __typename?: 'NavMenuItem' }
  & { ' $fragmentRefs'?: { 'IContentData_NavMenuItem_Fragment': IContentData_NavMenuItem_Fragment } }
) & { ' $fragmentName'?: 'BlockData_NavMenuItem_Fragment' };

type BlockData_OdpEmbedBlock_Fragment = (
  { __typename?: 'OdpEmbedBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_OdpEmbedBlock_Fragment': IContentData_OdpEmbedBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_OdpEmbedBlock_Fragment' };

type BlockData_PageSeoSettings_Fragment = (
  { __typename?: 'PageSeoSettings' }
  & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment } }
) & { ' $fragmentName'?: 'BlockData_PageSeoSettings_Fragment' };

type BlockData_Product_Fragment = (
  { __typename?: 'Product' }
  & { ' $fragmentRefs'?: { 'IContentData_Product_Fragment': IContentData_Product_Fragment } }
) & { ' $fragmentName'?: 'BlockData_Product_Fragment' };

type BlockData_ProductTextProperty_Fragment = (
  { __typename?: 'ProductTextProperty' }
  & { ' $fragmentRefs'?: { 'IContentData_ProductTextProperty_Fragment': IContentData_ProductTextProperty_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ProductTextProperty_Fragment' };

type BlockData_QuoteBlock_Fragment = (
  { __typename?: 'QuoteBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_QuoteBlock_Fragment': IContentData_QuoteBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_QuoteBlock_Fragment' };

type BlockData_TextBlock_Fragment = (
  { __typename?: 'TextBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_TextBlock_Fragment' };

export type BlockDataFragment = BlockData_ArticleListPage_Fragment | BlockData_ArticlePage_Fragment | BlockData_ButtonBlock_Fragment | BlockData_CardBlock_Fragment | BlockData_CarouselBlock_Fragment | BlockData_ContainerBlock_Fragment | BlockData_Content_Fragment | BlockData_DamAsset_Fragment | BlockData_DamImageAsset_Fragment | BlockData_DamVideoAsset_Fragment | BlockData_FooterConfigBlock_Fragment | BlockData_HeaderConfigBlock_Fragment | BlockData_HeroBlock_Fragment | BlockData_HighlightTextBlock_Fragment | BlockData_LandingPage_Fragment | BlockData_LinkListBlock_Fragment | BlockData_LocationListPage_Fragment | BlockData_LocationPage_Fragment | BlockData_NavMenuItem_Fragment | BlockData_OdpEmbedBlock_Fragment | BlockData_PageSeoSettings_Fragment | BlockData_Product_Fragment | BlockData_ProductTextProperty_Fragment | BlockData_QuoteBlock_Fragment | BlockData_TextBlock_Fragment;

type PageData_ArticleListPage_Fragment = (
  { __typename?: 'ArticleListPage' }
  & { ' $fragmentRefs'?: { 'IContentData_ArticleListPage_Fragment': IContentData_ArticleListPage_Fragment } }
) & { ' $fragmentName'?: 'PageData_ArticleListPage_Fragment' };

type PageData_ArticlePage_Fragment = (
  { __typename?: 'ArticlePage' }
  & { ' $fragmentRefs'?: { 'IContentData_ArticlePage_Fragment': IContentData_ArticlePage_Fragment } }
) & { ' $fragmentName'?: 'PageData_ArticlePage_Fragment' };

type PageData_ButtonBlock_Fragment = (
  { __typename?: 'ButtonBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_ButtonBlock_Fragment' };

type PageData_CardBlock_Fragment = (
  { __typename?: 'CardBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_CardBlock_Fragment': IContentData_CardBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_CardBlock_Fragment' };

type PageData_CarouselBlock_Fragment = (
  { __typename?: 'CarouselBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_CarouselBlock_Fragment': IContentData_CarouselBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_CarouselBlock_Fragment' };

type PageData_ContainerBlock_Fragment = (
  { __typename?: 'ContainerBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_ContainerBlock_Fragment': IContentData_ContainerBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_ContainerBlock_Fragment' };

type PageData_Content_Fragment = (
  { __typename?: 'Content' }
  & { ' $fragmentRefs'?: { 'IContentData_Content_Fragment': IContentData_Content_Fragment } }
) & { ' $fragmentName'?: 'PageData_Content_Fragment' };

type PageData_DamAsset_Fragment = (
  { __typename?: 'DAMAsset' }
  & { ' $fragmentRefs'?: { 'IContentData_DamAsset_Fragment': IContentData_DamAsset_Fragment } }
) & { ' $fragmentName'?: 'PageData_DamAsset_Fragment' };

type PageData_DamImageAsset_Fragment = (
  { __typename?: 'DAMImageAsset' }
  & { ' $fragmentRefs'?: { 'IContentData_DamImageAsset_Fragment': IContentData_DamImageAsset_Fragment } }
) & { ' $fragmentName'?: 'PageData_DamImageAsset_Fragment' };

type PageData_DamVideoAsset_Fragment = (
  { __typename?: 'DAMVideoAsset' }
  & { ' $fragmentRefs'?: { 'IContentData_DamVideoAsset_Fragment': IContentData_DamVideoAsset_Fragment } }
) & { ' $fragmentName'?: 'PageData_DamVideoAsset_Fragment' };

type PageData_FooterConfigBlock_Fragment = (
  { __typename?: 'FooterConfigBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_FooterConfigBlock_Fragment': IContentData_FooterConfigBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_FooterConfigBlock_Fragment' };

type PageData_HeaderConfigBlock_Fragment = (
  { __typename?: 'HeaderConfigBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HeaderConfigBlock_Fragment': IContentData_HeaderConfigBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_HeaderConfigBlock_Fragment' };

type PageData_HeroBlock_Fragment = (
  { __typename?: 'HeroBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_HeroBlock_Fragment' };

type PageData_HighlightTextBlock_Fragment = (
  { __typename?: 'HighlightTextBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_HighlightTextBlock_Fragment': IContentData_HighlightTextBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_HighlightTextBlock_Fragment' };

type PageData_LandingPage_Fragment = (
  { __typename?: 'LandingPage' }
  & { ' $fragmentRefs'?: { 'IContentData_LandingPage_Fragment': IContentData_LandingPage_Fragment } }
) & { ' $fragmentName'?: 'PageData_LandingPage_Fragment' };

type PageData_LinkListBlock_Fragment = (
  { __typename?: 'LinkListBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_LinkListBlock_Fragment': IContentData_LinkListBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_LinkListBlock_Fragment' };

type PageData_LocationListPage_Fragment = (
  { __typename?: 'LocationListPage' }
  & { ' $fragmentRefs'?: { 'IContentData_LocationListPage_Fragment': IContentData_LocationListPage_Fragment } }
) & { ' $fragmentName'?: 'PageData_LocationListPage_Fragment' };

type PageData_LocationPage_Fragment = (
  { __typename?: 'LocationPage' }
  & { ' $fragmentRefs'?: { 'IContentData_LocationPage_Fragment': IContentData_LocationPage_Fragment } }
) & { ' $fragmentName'?: 'PageData_LocationPage_Fragment' };

type PageData_NavMenuItem_Fragment = (
  { __typename?: 'NavMenuItem' }
  & { ' $fragmentRefs'?: { 'IContentData_NavMenuItem_Fragment': IContentData_NavMenuItem_Fragment } }
) & { ' $fragmentName'?: 'PageData_NavMenuItem_Fragment' };

type PageData_OdpEmbedBlock_Fragment = (
  { __typename?: 'OdpEmbedBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_OdpEmbedBlock_Fragment': IContentData_OdpEmbedBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_OdpEmbedBlock_Fragment' };

type PageData_PageSeoSettings_Fragment = (
  { __typename?: 'PageSeoSettings' }
  & { ' $fragmentRefs'?: { 'IContentData_PageSeoSettings_Fragment': IContentData_PageSeoSettings_Fragment } }
) & { ' $fragmentName'?: 'PageData_PageSeoSettings_Fragment' };

type PageData_Product_Fragment = (
  { __typename?: 'Product' }
  & { ' $fragmentRefs'?: { 'IContentData_Product_Fragment': IContentData_Product_Fragment } }
) & { ' $fragmentName'?: 'PageData_Product_Fragment' };

type PageData_ProductTextProperty_Fragment = (
  { __typename?: 'ProductTextProperty' }
  & { ' $fragmentRefs'?: { 'IContentData_ProductTextProperty_Fragment': IContentData_ProductTextProperty_Fragment } }
) & { ' $fragmentName'?: 'PageData_ProductTextProperty_Fragment' };

type PageData_QuoteBlock_Fragment = (
  { __typename?: 'QuoteBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_QuoteBlock_Fragment': IContentData_QuoteBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_QuoteBlock_Fragment' };

type PageData_TextBlock_Fragment = (
  { __typename?: 'TextBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_TextBlock_Fragment' };

export type PageDataFragment = PageData_ArticleListPage_Fragment | PageData_ArticlePage_Fragment | PageData_ButtonBlock_Fragment | PageData_CardBlock_Fragment | PageData_CarouselBlock_Fragment | PageData_ContainerBlock_Fragment | PageData_Content_Fragment | PageData_DamAsset_Fragment | PageData_DamImageAsset_Fragment | PageData_DamVideoAsset_Fragment | PageData_FooterConfigBlock_Fragment | PageData_HeaderConfigBlock_Fragment | PageData_HeroBlock_Fragment | PageData_HighlightTextBlock_Fragment | PageData_LandingPage_Fragment | PageData_LinkListBlock_Fragment | PageData_LocationListPage_Fragment | PageData_LocationPage_Fragment | PageData_NavMenuItem_Fragment | PageData_OdpEmbedBlock_Fragment | PageData_PageSeoSettings_Fragment | PageData_Product_Fragment | PageData_ProductTextProperty_Fragment | PageData_QuoteBlock_Fragment | PageData_TextBlock_Fragment;

export type ContentAreaItemBaseFragment = { __typename?: 'ContentAreaItemModelSearch', displayOption?: string | null, contentLink?: { __typename?: 'ContentModelReferenceSearch', id?: number | null, workId?: number | null, guidValue?: string | null, component?: { __typename?: 'ArticleListPage', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'ArticlePage', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'ButtonBlock', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'CardBlock', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'CarouselBlock', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'ContainerBlock', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'Content', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'DAMAsset', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'DAMImageAsset', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'DAMVideoAsset', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'FooterConfigBlock', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'HeaderConfigBlock', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'HeroBlock', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'HighlightTextBlock', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'LandingPage', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'LinkListBlock', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'LocationListPage', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'LocationPage', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'NavMenuItem', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'OdpEmbedBlock', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'PageSeoSettings', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'Product', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'ProductTextProperty', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'QuoteBlock', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'TextBlock', path?: string | null, type?: Array<string | null> | null } | null } | null } & { ' $fragmentName'?: 'ContentAreaItemBaseFragment' };

export type GetContentByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
  workId?: InputMaybe<Scalars['Int']['input']>;
  guidValue?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<Locales> | Locales>;
  isCommonDraft?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetContentByIdQuery = { __typename?: 'Query', Content?: { __typename?: 'ContentOutput', total?: number | null, items?: Array<(
      { __typename?: 'ArticleListPage' }
      & { ' $fragmentRefs'?: { 'PageData_ArticleListPage_Fragment': PageData_ArticleListPage_Fragment;'BlockData_ArticleListPage_Fragment': BlockData_ArticleListPage_Fragment } }
    ) | (
      { __typename?: 'ArticlePage' }
      & { ' $fragmentRefs'?: { 'PageData_ArticlePage_Fragment': PageData_ArticlePage_Fragment;'BlockData_ArticlePage_Fragment': BlockData_ArticlePage_Fragment } }
    ) | (
      { __typename?: 'ButtonBlock' }
      & { ' $fragmentRefs'?: { 'PageData_ButtonBlock_Fragment': PageData_ButtonBlock_Fragment;'BlockData_ButtonBlock_Fragment': BlockData_ButtonBlock_Fragment } }
    ) | (
      { __typename?: 'CardBlock' }
      & { ' $fragmentRefs'?: { 'PageData_CardBlock_Fragment': PageData_CardBlock_Fragment;'BlockData_CardBlock_Fragment': BlockData_CardBlock_Fragment } }
    ) | (
      { __typename?: 'CarouselBlock' }
      & { ' $fragmentRefs'?: { 'PageData_CarouselBlock_Fragment': PageData_CarouselBlock_Fragment;'BlockData_CarouselBlock_Fragment': BlockData_CarouselBlock_Fragment } }
    ) | (
      { __typename?: 'ContainerBlock' }
      & { ' $fragmentRefs'?: { 'PageData_ContainerBlock_Fragment': PageData_ContainerBlock_Fragment;'BlockData_ContainerBlock_Fragment': BlockData_ContainerBlock_Fragment } }
    ) | (
      { __typename?: 'Content' }
      & { ' $fragmentRefs'?: { 'PageData_Content_Fragment': PageData_Content_Fragment;'BlockData_Content_Fragment': BlockData_Content_Fragment } }
    ) | (
      { __typename?: 'DAMAsset' }
      & { ' $fragmentRefs'?: { 'PageData_DamAsset_Fragment': PageData_DamAsset_Fragment;'BlockData_DamAsset_Fragment': BlockData_DamAsset_Fragment } }
    ) | (
      { __typename?: 'DAMImageAsset' }
      & { ' $fragmentRefs'?: { 'PageData_DamImageAsset_Fragment': PageData_DamImageAsset_Fragment;'BlockData_DamImageAsset_Fragment': BlockData_DamImageAsset_Fragment } }
    ) | (
      { __typename?: 'DAMVideoAsset' }
      & { ' $fragmentRefs'?: { 'PageData_DamVideoAsset_Fragment': PageData_DamVideoAsset_Fragment;'BlockData_DamVideoAsset_Fragment': BlockData_DamVideoAsset_Fragment } }
    ) | (
      { __typename?: 'FooterConfigBlock' }
      & { ' $fragmentRefs'?: { 'PageData_FooterConfigBlock_Fragment': PageData_FooterConfigBlock_Fragment;'BlockData_FooterConfigBlock_Fragment': BlockData_FooterConfigBlock_Fragment } }
    ) | (
      { __typename?: 'HeaderConfigBlock' }
      & { ' $fragmentRefs'?: { 'PageData_HeaderConfigBlock_Fragment': PageData_HeaderConfigBlock_Fragment;'BlockData_HeaderConfigBlock_Fragment': BlockData_HeaderConfigBlock_Fragment } }
    ) | (
      { __typename?: 'HeroBlock' }
      & { ' $fragmentRefs'?: { 'PageData_HeroBlock_Fragment': PageData_HeroBlock_Fragment;'BlockData_HeroBlock_Fragment': BlockData_HeroBlock_Fragment } }
    ) | (
      { __typename?: 'HighlightTextBlock' }
      & { ' $fragmentRefs'?: { 'PageData_HighlightTextBlock_Fragment': PageData_HighlightTextBlock_Fragment;'BlockData_HighlightTextBlock_Fragment': BlockData_HighlightTextBlock_Fragment } }
    ) | (
      { __typename?: 'LandingPage' }
      & { ' $fragmentRefs'?: { 'PageData_LandingPage_Fragment': PageData_LandingPage_Fragment;'BlockData_LandingPage_Fragment': BlockData_LandingPage_Fragment } }
    ) | (
      { __typename?: 'LinkListBlock' }
      & { ' $fragmentRefs'?: { 'PageData_LinkListBlock_Fragment': PageData_LinkListBlock_Fragment;'BlockData_LinkListBlock_Fragment': BlockData_LinkListBlock_Fragment } }
    ) | (
      { __typename?: 'LocationListPage' }
      & { ' $fragmentRefs'?: { 'PageData_LocationListPage_Fragment': PageData_LocationListPage_Fragment;'BlockData_LocationListPage_Fragment': BlockData_LocationListPage_Fragment } }
    ) | (
      { __typename?: 'LocationPage' }
      & { ' $fragmentRefs'?: { 'PageData_LocationPage_Fragment': PageData_LocationPage_Fragment;'BlockData_LocationPage_Fragment': BlockData_LocationPage_Fragment } }
    ) | (
      { __typename?: 'NavMenuItem' }
      & { ' $fragmentRefs'?: { 'PageData_NavMenuItem_Fragment': PageData_NavMenuItem_Fragment;'BlockData_NavMenuItem_Fragment': BlockData_NavMenuItem_Fragment } }
    ) | (
      { __typename?: 'OdpEmbedBlock' }
      & { ' $fragmentRefs'?: { 'PageData_OdpEmbedBlock_Fragment': PageData_OdpEmbedBlock_Fragment;'BlockData_OdpEmbedBlock_Fragment': BlockData_OdpEmbedBlock_Fragment } }
    ) | (
      { __typename?: 'PageSeoSettings' }
      & { ' $fragmentRefs'?: { 'PageData_PageSeoSettings_Fragment': PageData_PageSeoSettings_Fragment;'BlockData_PageSeoSettings_Fragment': BlockData_PageSeoSettings_Fragment } }
    ) | (
      { __typename?: 'Product' }
      & { ' $fragmentRefs'?: { 'PageData_Product_Fragment': PageData_Product_Fragment;'BlockData_Product_Fragment': BlockData_Product_Fragment } }
    ) | (
      { __typename?: 'ProductTextProperty' }
      & { ' $fragmentRefs'?: { 'PageData_ProductTextProperty_Fragment': PageData_ProductTextProperty_Fragment;'BlockData_ProductTextProperty_Fragment': BlockData_ProductTextProperty_Fragment } }
    ) | (
      { __typename?: 'QuoteBlock' }
      & { ' $fragmentRefs'?: { 'PageData_QuoteBlock_Fragment': PageData_QuoteBlock_Fragment;'BlockData_QuoteBlock_Fragment': BlockData_QuoteBlock_Fragment } }
    ) | (
      { __typename?: 'TextBlock' }
      & { ' $fragmentRefs'?: { 'PageData_TextBlock_Fragment': PageData_TextBlock_Fragment;'BlockData_TextBlock_Fragment': BlockData_TextBlock_Fragment } }
    ) | null> | null } | null };

export type GetContentByPathQueryVariables = Exact<{
  path: Scalars['String']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  siteId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetContentByPathQuery = { __typename?: 'Query', Content?: { __typename?: 'ContentOutput', items?: Array<(
      { __typename?: 'ArticleListPage' }
      & { ' $fragmentRefs'?: { 'PageData_ArticleListPage_Fragment': PageData_ArticleListPage_Fragment } }
    ) | (
      { __typename?: 'ArticlePage' }
      & { ' $fragmentRefs'?: { 'PageData_ArticlePage_Fragment': PageData_ArticlePage_Fragment } }
    ) | (
      { __typename?: 'ButtonBlock' }
      & { ' $fragmentRefs'?: { 'PageData_ButtonBlock_Fragment': PageData_ButtonBlock_Fragment } }
    ) | (
      { __typename?: 'CardBlock' }
      & { ' $fragmentRefs'?: { 'PageData_CardBlock_Fragment': PageData_CardBlock_Fragment } }
    ) | (
      { __typename?: 'CarouselBlock' }
      & { ' $fragmentRefs'?: { 'PageData_CarouselBlock_Fragment': PageData_CarouselBlock_Fragment } }
    ) | (
      { __typename?: 'ContainerBlock' }
      & { ' $fragmentRefs'?: { 'PageData_ContainerBlock_Fragment': PageData_ContainerBlock_Fragment } }
    ) | (
      { __typename?: 'Content' }
      & { ' $fragmentRefs'?: { 'PageData_Content_Fragment': PageData_Content_Fragment } }
    ) | (
      { __typename?: 'DAMAsset' }
      & { ' $fragmentRefs'?: { 'PageData_DamAsset_Fragment': PageData_DamAsset_Fragment } }
    ) | (
      { __typename?: 'DAMImageAsset' }
      & { ' $fragmentRefs'?: { 'PageData_DamImageAsset_Fragment': PageData_DamImageAsset_Fragment } }
    ) | (
      { __typename?: 'DAMVideoAsset' }
      & { ' $fragmentRefs'?: { 'PageData_DamVideoAsset_Fragment': PageData_DamVideoAsset_Fragment } }
    ) | (
      { __typename?: 'FooterConfigBlock' }
      & { ' $fragmentRefs'?: { 'PageData_FooterConfigBlock_Fragment': PageData_FooterConfigBlock_Fragment } }
    ) | (
      { __typename?: 'HeaderConfigBlock' }
      & { ' $fragmentRefs'?: { 'PageData_HeaderConfigBlock_Fragment': PageData_HeaderConfigBlock_Fragment } }
    ) | (
      { __typename?: 'HeroBlock' }
      & { ' $fragmentRefs'?: { 'PageData_HeroBlock_Fragment': PageData_HeroBlock_Fragment } }
    ) | (
      { __typename?: 'HighlightTextBlock' }
      & { ' $fragmentRefs'?: { 'PageData_HighlightTextBlock_Fragment': PageData_HighlightTextBlock_Fragment } }
    ) | (
      { __typename?: 'LandingPage' }
      & { ' $fragmentRefs'?: { 'PageData_LandingPage_Fragment': PageData_LandingPage_Fragment } }
    ) | (
      { __typename?: 'LinkListBlock' }
      & { ' $fragmentRefs'?: { 'PageData_LinkListBlock_Fragment': PageData_LinkListBlock_Fragment } }
    ) | (
      { __typename?: 'LocationListPage' }
      & { ' $fragmentRefs'?: { 'PageData_LocationListPage_Fragment': PageData_LocationListPage_Fragment } }
    ) | (
      { __typename?: 'LocationPage' }
      & { ' $fragmentRefs'?: { 'PageData_LocationPage_Fragment': PageData_LocationPage_Fragment } }
    ) | (
      { __typename?: 'NavMenuItem' }
      & { ' $fragmentRefs'?: { 'PageData_NavMenuItem_Fragment': PageData_NavMenuItem_Fragment } }
    ) | (
      { __typename?: 'OdpEmbedBlock' }
      & { ' $fragmentRefs'?: { 'PageData_OdpEmbedBlock_Fragment': PageData_OdpEmbedBlock_Fragment } }
    ) | (
      { __typename?: 'PageSeoSettings' }
      & { ' $fragmentRefs'?: { 'PageData_PageSeoSettings_Fragment': PageData_PageSeoSettings_Fragment } }
    ) | (
      { __typename?: 'Product' }
      & { ' $fragmentRefs'?: { 'PageData_Product_Fragment': PageData_Product_Fragment } }
    ) | (
      { __typename?: 'ProductTextProperty' }
      & { ' $fragmentRefs'?: { 'PageData_ProductTextProperty_Fragment': PageData_ProductTextProperty_Fragment } }
    ) | (
      { __typename?: 'QuoteBlock' }
      & { ' $fragmentRefs'?: { 'PageData_QuoteBlock_Fragment': PageData_QuoteBlock_Fragment } }
    ) | (
      { __typename?: 'TextBlock' }
      & { ' $fragmentRefs'?: { 'PageData_TextBlock_Fragment': PageData_TextBlock_Fragment } }
    ) | null> | null } | null };

export type GetContentTypeQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
  workId?: InputMaybe<Scalars['Int']['input']>;
  guidValue?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type GetContentTypeQuery = { __typename?: 'Query', Content?: { __typename?: 'ContentOutput', total?: number | null, items?: Array<{ __typename?: 'ArticleListPage', ContentType?: Array<string | null> | null } | { __typename?: 'ArticlePage', ContentType?: Array<string | null> | null } | { __typename?: 'ButtonBlock', ContentType?: Array<string | null> | null } | { __typename?: 'CardBlock', ContentType?: Array<string | null> | null } | { __typename?: 'CarouselBlock', ContentType?: Array<string | null> | null } | { __typename?: 'ContainerBlock', ContentType?: Array<string | null> | null } | { __typename?: 'Content', ContentType?: Array<string | null> | null } | { __typename?: 'DAMAsset', ContentType?: Array<string | null> | null } | { __typename?: 'DAMImageAsset', ContentType?: Array<string | null> | null } | { __typename?: 'DAMVideoAsset', ContentType?: Array<string | null> | null } | { __typename?: 'FooterConfigBlock', ContentType?: Array<string | null> | null } | { __typename?: 'HeaderConfigBlock', ContentType?: Array<string | null> | null } | { __typename?: 'HeroBlock', ContentType?: Array<string | null> | null } | { __typename?: 'HighlightTextBlock', ContentType?: Array<string | null> | null } | { __typename?: 'LandingPage', ContentType?: Array<string | null> | null } | { __typename?: 'LinkListBlock', ContentType?: Array<string | null> | null } | { __typename?: 'LocationListPage', ContentType?: Array<string | null> | null } | { __typename?: 'LocationPage', ContentType?: Array<string | null> | null } | { __typename?: 'NavMenuItem', ContentType?: Array<string | null> | null } | { __typename?: 'OdpEmbedBlock', ContentType?: Array<string | null> | null } | { __typename?: 'PageSeoSettings', ContentType?: Array<string | null> | null } | { __typename?: 'Product', ContentType?: Array<string | null> | null } | { __typename?: 'ProductTextProperty', ContentType?: Array<string | null> | null } | { __typename?: 'QuoteBlock', ContentType?: Array<string | null> | null } | { __typename?: 'TextBlock', ContentType?: Array<string | null> | null } | null> | null } | null };

export type GetAllChannelsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllChannelsQuery = { __typename?: 'Query', GetAllChannels?: { __typename?: 'SiteDefinitionOutput', channels?: Array<{ __typename?: 'SiteDefinition', id?: string | null, name?: string | null, domains?: Array<{ __typename?: 'HostDefinitionModel', name?: string | null, type?: string | null, forLocale?: { __typename?: 'ContentLanguageModel', code?: string | null } | null } | null> | null, locales?: Array<{ __typename?: 'SiteDefinitionLanguageModel', code?: string | null, slug?: string | null, isDefault?: any | null } | null> | null, content?: { __typename?: 'ContentRootsModel', startPage?: { __typename?: 'ContentModelReference', id?: number | null, guidValue?: string | null } | null } | null } | null> | null } | null };

export type GetChannelByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetChannelByIdQuery = { __typename?: 'Query', GetChannelById?: { __typename?: 'SiteDefinitionOutput', channels?: Array<{ __typename?: 'SiteDefinition', id?: string | null, name?: string | null, domains?: Array<{ __typename?: 'HostDefinitionModel', name?: string | null, type?: string | null, forLocale?: { __typename?: 'ContentLanguageModel', code?: string | null } | null } | null> | null, locales?: Array<{ __typename?: 'SiteDefinitionLanguageModel', code?: string | null, slug?: string | null, isDefault?: any | null } | null> | null, content?: { __typename?: 'ContentRootsModel', startPage?: { __typename?: 'ContentModelReference', id?: number | null, guidValue?: string | null } | null } | null } | null> | null } | null };

export type GetChannelByDomainQueryVariables = Exact<{
  domain: Scalars['String']['input'];
  fallback?: Scalars['String']['input'];
}>;


export type GetChannelByDomainQuery = { __typename?: 'Query', GetChannelByDomain?: { __typename?: 'SiteDefinitionOutput', channels?: Array<{ __typename?: 'SiteDefinition', id?: string | null, name?: string | null, domains?: Array<{ __typename?: 'HostDefinitionModel', name?: string | null, type?: string | null, forLocale?: { __typename?: 'ContentLanguageModel', code?: string | null } | null } | null> | null, locales?: Array<{ __typename?: 'SiteDefinitionLanguageModel', code?: string | null, slug?: string | null, isDefault?: any | null } | null> | null, content?: { __typename?: 'ContentRootsModel', startPage?: { __typename?: 'ContentModelReference', id?: number | null, guidValue?: string | null } | null } | null } | null> | null } | null };

export type GetAllRoutesQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  typeFilter?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  siteId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllRoutesQuery = { __typename?: 'Query', Content?: { __typename?: 'ContentOutput', cursor?: string | null, total?: number | null, items?: Array<{ __typename?: 'ArticleListPage', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'ArticlePage', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'ButtonBlock', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'CardBlock', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'CarouselBlock', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'ContainerBlock', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'Content', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'DAMAsset', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'DAMImageAsset', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'DAMVideoAsset', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'FooterConfigBlock', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'HeaderConfigBlock', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'HeroBlock', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'HighlightTextBlock', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'LandingPage', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'LinkListBlock', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'LocationListPage', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'LocationPage', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'NavMenuItem', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'OdpEmbedBlock', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'PageSeoSettings', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'Product', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'ProductTextProperty', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'QuoteBlock', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'TextBlock', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | null> | null } | null };

export type GetRouteByPathQueryVariables = Exact<{
  path: Scalars['String']['input'];
  siteId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetRouteByPathQuery = { __typename?: 'Query', Content?: { __typename?: 'ContentOutput', total?: number | null, items?: Array<{ __typename?: 'ArticleListPage', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'ArticlePage', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'ButtonBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'CardBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'CarouselBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'ContainerBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'Content', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'DAMAsset', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'DAMImageAsset', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'DAMVideoAsset', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'FooterConfigBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'HeaderConfigBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'HeroBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'HighlightTextBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'LandingPage', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'LinkListBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'LocationListPage', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'LocationPage', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'NavMenuItem', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'OdpEmbedBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'PageSeoSettings', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'Product', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'ProductTextProperty', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'QuoteBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'TextBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | null> | null } | null };

export type GetRouteByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
  workId?: InputMaybe<Scalars['Int']['input']>;
  locale: Array<InputMaybe<Locales>> | InputMaybe<Locales>;
}>;


export type GetRouteByIdQuery = { __typename?: 'Query', Content?: { __typename?: 'ContentOutput', total?: number | null, items?: Array<{ __typename?: 'ArticleListPage', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'ArticlePage', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'ButtonBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'CardBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'CarouselBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'ContainerBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'Content', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'DAMAsset', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'DAMImageAsset', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'DAMVideoAsset', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'FooterConfigBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'HeaderConfigBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'HeroBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'HighlightTextBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'LandingPage', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'LinkListBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'LocationListPage', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'LocationPage', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'NavMenuItem', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'OdpEmbedBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'PageSeoSettings', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'Product', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'ProductTextProperty', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'QuoteBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'TextBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | null> | null } | null };

export const ButtonBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ButtonBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ButtonLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Href"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Target"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}}]}}]}}]} as unknown as DocumentNode<ButtonBlockDataFragment, unknown>;
export const LinkItemDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkItemNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"Title"}},{"kind":"Field","alias":{"kind":"Name","value":"href"},"name":{"kind":"Name","value":"Href"}},{"kind":"Field","alias":{"kind":"Name","value":"target"},"name":{"kind":"Name","value":"Target"}},{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"href"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]}}]}}]} as unknown as DocumentNode<LinkItemDataFragment, unknown>;
export const CardBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Url"}},{"kind":"Field","name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"Path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"Button"},"name":{"kind":"Name","value":"Link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkItemData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkItemNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"Title"}},{"kind":"Field","alias":{"kind":"Name","value":"href"},"name":{"kind":"Name","value":"Href"}},{"kind":"Field","alias":{"kind":"Name","value":"target"},"name":{"kind":"Name","value":"Target"}},{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"href"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]}}]}}]} as unknown as DocumentNode<CardBlockDataFragment, unknown>;
export const ContentLinkSearchFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLinkSearch"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReferenceSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}}]} as unknown as DocumentNode<ContentLinkSearchFragment, unknown>;
export const ContentLinkFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}}]} as unknown as DocumentNode<ContentLinkFragment, unknown>;
export const IContentDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}}]} as unknown as DocumentNode<IContentDataFragment, unknown>;
export const BlockContentAreaItemDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockContentAreaItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentAreaItemModelSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"item"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLinkSearch"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"displayOption"},"name":{"kind":"Name","value":"DisplayOption"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLinkSearch"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReferenceSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]} as unknown as DocumentNode<BlockContentAreaItemDataFragment, unknown>;
export const CarouselBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CarouselBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CarouselBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CarouselSlides"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockContentAreaItemData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ShowArrows"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLinkSearch"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReferenceSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockContentAreaItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentAreaItemModelSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"item"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLinkSearch"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"displayOption"},"name":{"kind":"Name","value":"DisplayOption"}}]}}]} as unknown as DocumentNode<CarouselBlockDataFragment, unknown>;
export const ContainerBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContainerBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContainerBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"MainContainerArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockContentAreaItemData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Gap"}},{"kind":"Field","name":{"kind":"Name","value":"Spacing"}},{"kind":"Field","name":{"kind":"Name","value":"GridLayout"}},{"kind":"Field","name":{"kind":"Name","value":"BackgroundColor"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLinkSearch"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReferenceSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockContentAreaItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentAreaItemModelSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"item"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLinkSearch"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"displayOption"},"name":{"kind":"Name","value":"DisplayOption"}}]}}]} as unknown as DocumentNode<ContainerBlockDataFragment, unknown>;
export const HeroBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Background"}},{"kind":"Field","name":{"kind":"Name","value":"BannerTitle"}},{"kind":"Field","name":{"kind":"Name","value":"BannerText"}},{"kind":"Field","name":{"kind":"Name","value":"CalloutOpacity"}},{"kind":"Field","name":{"kind":"Name","value":"BannerLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkItemData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkItemNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"Title"}},{"kind":"Field","alias":{"kind":"Name","value":"href"},"name":{"kind":"Name","value":"Href"}},{"kind":"Field","alias":{"kind":"Name","value":"target"},"name":{"kind":"Name","value":"Target"}},{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"href"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]}}]}}]} as unknown as DocumentNode<HeroBlockDataFragment, unknown>;
export const HighlightBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HighlightBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HighlightTextBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"PayOffText"}}]}}]} as unknown as DocumentNode<HighlightBlockDataFragment, unknown>;
export const ImageMediaDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMediaData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Content"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"RelativePath"}}]}}]} as unknown as DocumentNode<ImageMediaDataFragment, unknown>;
export const OdpEmbedBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OdpEmbedBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OdpEmbedBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ContentId"}}]}}]} as unknown as DocumentNode<OdpEmbedBlockDataFragment, unknown>;
export const ImageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"alt"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]} as unknown as DocumentNode<ImageDataFragment, unknown>;
export const ProductBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ProductCode"}},{"kind":"Field","name":{"kind":"Name","value":"ProductName"}},{"kind":"Field","name":{"kind":"Name","value":"ProductTagLine"}},{"kind":"Field","name":{"kind":"Name","value":"ShortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"MainImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"alt"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]}}]} as unknown as DocumentNode<ProductBlockDataFragment, unknown>;
export const QuoteDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuoteData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuoteBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Quotee"}},{"kind":"Field","name":{"kind":"Name","value":"Role"}},{"kind":"Field","name":{"kind":"Name","value":"QuoteeLocation"}},{"kind":"Field","name":{"kind":"Name","value":"Photo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"alt"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]}}]} as unknown as DocumentNode<QuoteDataFragment, unknown>;
export const TextBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Spacing"}},{"kind":"Field","name":{"kind":"Name","value":"MainBody"}}]}}]} as unknown as DocumentNode<TextBlockDataFragment, unknown>;
export const FooterLinkDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterLinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkItemNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"href"},"name":{"kind":"Name","value":"Href"}},{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"Title"}},{"kind":"Field","alias":{"kind":"Name","value":"target"},"name":{"kind":"Name","value":"Target"}},{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]}}]}}]} as unknown as DocumentNode<FooterLinkDataFragment, unknown>;
export const FooterLinksFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterLinks"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterConfigBlockBlockData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"caption"},"name":{"kind":"Name","value":"LinkListCaption"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"LinkListItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterLinkData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterLinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkItemNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"href"},"name":{"kind":"Name","value":"Href"}},{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"Title"}},{"kind":"Field","alias":{"kind":"Name","value":"target"},"name":{"kind":"Name","value":"Target"}},{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]}}]}}]} as unknown as DocumentNode<FooterLinksFragment, unknown>;
export const NavMenuItemDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavMenuItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavMenuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Href"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Target"}},{"kind":"Field","name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Url"}},{"kind":"Field","name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"RelativePath"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"MenuContent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"item"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"displayOption"},"name":{"kind":"Name","value":"DisplayOption"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"lastLink"},"name":{"kind":"Name","value":"NavItemBottomLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"href"},"name":{"kind":"Name","value":"Href"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"Title"}},{"kind":"Field","alias":{"kind":"Name","value":"target"},"name":{"kind":"Name","value":"Target"}},{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"item"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]}}]}}]}}]} as unknown as DocumentNode<NavMenuItemDataFragment, unknown>;
export const BlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]} as unknown as DocumentNode<BlockDataFragment, unknown>;
export const ContentAreaItemDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentAreaItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentAreaItemModelSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"item"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLinkSearch"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"displayOption"},"name":{"kind":"Name","value":"DisplayOption"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLinkSearch"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReferenceSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}}]} as unknown as DocumentNode<ContentAreaItemDataFragment, unknown>;
export const ArticleListPageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticleListPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticleListPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"ArticleListTitle"}},{"kind":"Field","name":{"kind":"Name","value":"ArticleListBody"}},{"kind":"Field","name":{"kind":"Name","value":"ArticleListHero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentAreaItemData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLinkSearch"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReferenceSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentAreaItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentAreaItemModelSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"item"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLinkSearch"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"displayOption"},"name":{"kind":"Name","value":"DisplayOption"}}]}}]} as unknown as DocumentNode<ArticleListPageDataFragment, unknown>;
export const ArticlePageBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticlePageBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticlePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"href"},"name":{"kind":"Name","value":"RelativePath"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"Title"}},{"kind":"Field","alias":{"kind":"Name","value":"author"},"name":{"kind":"Name","value":"ArticleAuthor"}},{"kind":"Field","alias":{"kind":"Name","value":"published"},"name":{"kind":"Name","value":"StartPublish"}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"PageImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"src"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"alt"},"name":{"kind":"Name","value":"Name"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"meta"},"name":{"kind":"Name","value":"SeoSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"intro"},"name":{"kind":"Name","value":"MetaDescription"}}]}}]}}]} as unknown as DocumentNode<ArticlePageBlockDataFragment, unknown>;
export const ArticlePageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticlePageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticlePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"MainBody"}},{"kind":"Field","name":{"kind":"Name","value":"StartPublish"}},{"kind":"Field","name":{"kind":"Name","value":"ArticleAuthor"}},{"kind":"Field","name":{"kind":"Name","value":"PageImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"SeoSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"MetaDescription"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"alt"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]}}]} as unknown as DocumentNode<ArticlePageDataFragment, unknown>;
export const LandingPageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LandingPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LandingPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"TopContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentAreaItemData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"MainContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentAreaItemData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLinkSearch"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReferenceSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentAreaItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentAreaItemModelSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"item"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLinkSearch"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"displayOption"},"name":{"kind":"Name","value":"DisplayOption"}}]}}]} as unknown as DocumentNode<LandingPageDataFragment, unknown>;
export const ImageDataSearchFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageDataSearch"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReferenceSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLinkSearch"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"alt"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLinkSearch"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReferenceSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]} as unknown as DocumentNode<ImageDataSearchFragment, unknown>;
export const LocationListPageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationListPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LocationListPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"LocationListTitle"}},{"kind":"Field","name":{"kind":"Name","value":"LocationsIntroduction"}},{"kind":"Field","name":{"kind":"Name","value":"LocationsImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageDataSearch"}}]}},{"kind":"Field","name":{"kind":"Name","value":"LocationsTopArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentAreaItemData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"LocationsMainContent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentAreaItemData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLinkSearch"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReferenceSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageDataSearch"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReferenceSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLinkSearch"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"alt"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentAreaItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentAreaItemModelSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"item"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLinkSearch"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"displayOption"},"name":{"kind":"Name","value":"DisplayOption"}}]}}]} as unknown as DocumentNode<LocationListPageDataFragment, unknown>;
export const LocationPageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LocationPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ParentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Url"}},{"kind":"Field","name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"RelativePath"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"LocationTitle"}},{"kind":"Field","name":{"kind":"Name","value":"LocationServices"}},{"kind":"Field","name":{"kind":"Name","value":"LocationStreet1"}},{"kind":"Field","name":{"kind":"Name","value":"LocationStreet2"}},{"kind":"Field","name":{"kind":"Name","value":"LocationPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"LocationCity"}},{"kind":"Field","name":{"kind":"Name","value":"LocationState"}},{"kind":"Field","name":{"kind":"Name","value":"LocationCountry"}},{"kind":"Field","name":{"kind":"Name","value":"LocationContinent"}},{"kind":"Field","name":{"kind":"Name","value":"LocationPhone"}},{"kind":"Field","name":{"kind":"Name","value":"LocationLatitude"}},{"kind":"Field","name":{"kind":"Name","value":"LocationLongitude"}},{"kind":"Field","name":{"kind":"Name","value":"LocationText"}},{"kind":"Field","name":{"kind":"Name","value":"LocationImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageDataSearch"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLinkSearch"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReferenceSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageDataSearch"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReferenceSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLinkSearch"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"alt"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]}}]} as unknown as DocumentNode<LocationPageDataFragment, unknown>;
export const LocationTopContentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationTopContent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LocationPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"isTopContent"},"name":{"kind":"Name","value":"LocationTopItem"}}]}}]} as unknown as DocumentNode<LocationTopContentFragment, unknown>;
export const LocationGeoLocationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationGeoLocation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LocationPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"lon"},"name":{"kind":"Name","value":"LocationLongitude"}},{"kind":"Field","alias":{"kind":"Name","value":"lat"},"name":{"kind":"Name","value":"LocationLatitude"}}]}}]} as unknown as DocumentNode<LocationGeoLocationFragment, unknown>;
export const PageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]} as unknown as DocumentNode<PageDataFragment, unknown>;
export const ContentAreaItemBaseFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentAreaItemBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentAreaItemModelSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentLink"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}},{"kind":"Field","alias":{"kind":"Name","value":"component"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}},{"kind":"Field","alias":{"kind":"Name","value":"type"},"name":{"kind":"Name","value":"ContentType"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"displayOption"},"name":{"kind":"Name","value":"DisplayOption"}}]}}]} as unknown as DocumentNode<ContentAreaItemBaseFragment, unknown>;
export const GetGenericMetaDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getGenericMetaData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"siteId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"getGenericMetaData"},"name":{"kind":"Name","value":"Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"RelativePath"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"SiteId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"siteId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"alternatives"},"name":{"kind":"Name","value":"ExistingLanguages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"href"},"name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"canonical"},"name":{"kind":"Name","value":"Url"}}]}}]}}]}}]} as unknown as DocumentNode<GetGenericMetaDataQuery, GetGenericMetaDataQueryVariables>;
export const GetPathByGuidDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPathByGuid"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"guid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"pathByGuid"},"name":{"kind":"Name","value":"Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ContentLink"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"GuidValue"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"guid"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}}]}}]}}]}}]} as unknown as DocumentNode<GetPathByGuidQuery, GetPathByGuidQueryVariables>;
export const ContentSearchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ContentSearch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"term"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"topInterest"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"types"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_fulltext"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contains"},"value":{"kind":"Variable","name":{"kind":"Name","value":"term"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"boost"},"value":{"kind":"IntValue","value":"25"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_fulltext"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contains"},"value":{"kind":"Variable","name":{"kind":"Name","value":"topInterest"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"boost"},"value":{"kind":"IntValue","value":"5"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Url"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"exist"},"value":{"kind":"BooleanValue","value":true}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_ranking"},"value":{"kind":"EnumValue","value":"SEMANTIC"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_score"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"RelativePath"}},{"kind":"Field","alias":{"kind":"Name","value":"type"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"changed"},"name":{"kind":"Name","value":"Changed"}},{"kind":"Field","alias":{"kind":"Name","value":"published"},"name":{"kind":"Name","value":"StartPublish"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ContentType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"types"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ContentSearchQuery, ContentSearchQueryVariables>;
export const GetButtonBlockDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getButtonBlockData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"guidValue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lang"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ButtonBlock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ContentLink"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"GuidValue"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"guidValue"}}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ContentLink"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"WorkId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workId"}}}]}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lang"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ButtonLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Href"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Target"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetButtonBlockDataQuery, GetButtonBlockDataQueryVariables>;
export const GetProductPropsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProductProps"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"product"},"name":{"kind":"Name","value":"Product"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ProductCode"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"code"},"name":{"kind":"Name","value":"ProductCode"}},{"kind":"Field","alias":{"kind":"Name","value":"properties"},"name":{"kind":"Name","value":"_children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"texts"},"name":{"kind":"Name","value":"ProductTextProperty"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"label"},"name":{"kind":"Name","value":"PropertyName"}},{"kind":"Field","alias":{"kind":"Name","value":"value"},"name":{"kind":"Name","value":"PropertyValue"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProductPropsQuery, GetProductPropsQueryVariables>;
export const GetFooterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getFooter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"FooterConfigBlock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"FooterChannelID"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"channelId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"logo"},"name":{"kind":"Name","value":"FooterLogo"}},{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"FooterText"}},{"kind":"Field","alias":{"kind":"Name","value":"button"},"name":{"kind":"Name","value":"BrandButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterLinkData"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"firstLinks"},"name":{"kind":"Name","value":"FooterLinkGroup1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterLinks"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"secondLinks"},"name":{"kind":"Name","value":"FooterLinkGroup2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterLinks"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"thirdLinks"},"name":{"kind":"Name","value":"FooterLinkGroup3"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterLinks"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"fourthLinks"},"name":{"kind":"Name","value":"FooterLinkGroup4"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterLinks"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterLinkData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkItemNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"href"},"name":{"kind":"Name","value":"Href"}},{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"Title"}},{"kind":"Field","alias":{"kind":"Name","value":"target"},"name":{"kind":"Name","value":"Target"}},{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterLinks"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FooterConfigBlockBlockData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"caption"},"name":{"kind":"Name","value":"LinkListCaption"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"LinkListItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterLinkData"}}]}}]}}]} as unknown as DocumentNode<GetFooterQuery, GetFooterQueryVariables>;
export const GetHeaderDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHeaderData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"siteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"HeaderConfigBlock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ChannelId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"siteId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"SiteLogo"}},{"kind":"Field","name":{"kind":"Name","value":"ChannelId"}},{"kind":"Field","name":{"kind":"Name","value":"CustomCSS"}},{"kind":"Field","name":{"kind":"Name","value":"PromoText"}},{"kind":"Field","name":{"kind":"Name","value":"NavMenuArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DisplayOption"}},{"kind":"Field","name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NavMenuItemData"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NavMenuItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NavMenuItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Href"}},{"kind":"Field","name":{"kind":"Name","value":"Text"}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Target"}},{"kind":"Field","name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Url"}},{"kind":"Field","name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"RelativePath"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"MenuContent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"item"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"displayOption"},"name":{"kind":"Name","value":"DisplayOption"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"lastLink"},"name":{"kind":"Name","value":"NavItemBottomLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"href"},"name":{"kind":"Name","value":"Href"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"Title"}},{"kind":"Field","alias":{"kind":"Name","value":"target"},"name":{"kind":"Name","value":"Target"}},{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"item"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetHeaderDataQuery, GetHeaderDataQueryVariables>;
export const GetArticleListMetaDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getArticleListMetaData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"guidValue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isCommonDraft"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"getArticleListMetaData"},"name":{"kind":"Name","value":"ArticleListPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ContentLink"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"WorkId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"GuidValue"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"guidValue"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"IsCommonDraft"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isCommonDraft"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"count"},"name":{"kind":"Name","value":"total"}},{"kind":"Field","alias":{"kind":"Name","value":"pages"},"name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"head"},"name":{"kind":"Name","value":"SeoSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MetaTitle"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"MetaDescription"}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"SharingImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"type"},"name":{"kind":"Name","value":"GraphType"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetArticleListMetaDataQuery, GetArticleListMetaDataQueryVariables>;
export const GetArticlePageMetaDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArticlePageMetaData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"guid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ArticlePage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ContentLink"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"GuidValue"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"guid"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"Title"}},{"kind":"Field","alias":{"kind":"Name","value":"published"},"name":{"kind":"Name","value":"StartPublish"}},{"kind":"Field","alias":{"kind":"Name","value":"modified"},"name":{"kind":"Name","value":"Changed"}},{"kind":"Field","alias":{"kind":"Name","value":"expires"},"name":{"kind":"Name","value":"StopPublish"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"code"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"alternateLocales"},"name":{"kind":"Name","value":"ExistingLanguages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"code"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"seo"},"name":{"kind":"Name","value":"SeoSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"metaTitle"},"name":{"kind":"Name","value":"MetaTitle"}},{"kind":"Field","alias":{"kind":"Name","value":"metaDescription"},"name":{"kind":"Name","value":"MetaDescription"}},{"kind":"Field","alias":{"kind":"Name","value":"type"},"name":{"kind":"Name","value":"GraphType"}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"SharingImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetArticlePageMetaDataQuery, GetArticlePageMetaDataQueryVariables>;
export const GetLandingPageMetaDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLandingPageMetaData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"guidValue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isCommonDraft"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"getLandingPageMetaData"},"name":{"kind":"Name","value":"LandingPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ContentLink"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"WorkId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"GuidValue"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"guidValue"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"IsCommonDraft"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isCommonDraft"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"count"},"name":{"kind":"Name","value":"total"}},{"kind":"Field","alias":{"kind":"Name","value":"pages"},"name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"head"},"name":{"kind":"Name","value":"LandingPageSeo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MetaTitle"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"MetaDescription"}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"SharingImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"type"},"name":{"kind":"Name","value":"GraphType"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetLandingPageMetaDataQuery, GetLandingPageMetaDataQueryVariables>;
export const GetArticlesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetArticles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parent"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":{"kind":"IntValue","value":"10"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},"defaultValue":{"kind":"IntValue","value":"0"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"author"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"published"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publishedEnd"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"getArticles"},"name":{"kind":"Name","value":"ArticlePage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ParentLink"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"GuidValue"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parent"}}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"StartPublish"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"published"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"StartPublish"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publishedEnd"}}}]}}]}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"StartPublish"},"value":{"kind":"EnumValue","value":"DESC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"guid"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"Title"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"SeoSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"MetaDescription"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}},{"kind":"Field","alias":{"kind":"Name","value":"author"},"name":{"kind":"Name","value":"ArticleAuthor"}},{"kind":"Field","alias":{"kind":"Name","value":"published"},"name":{"kind":"Name","value":"StartPublish"}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"PageImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"facets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"author"},"name":{"kind":"Name","value":"ArticleAuthor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderType"},"value":{"kind":"EnumValue","value":"VALUE"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"ASC"}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"author"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"published"},"name":{"kind":"Name","value":"StartPublish"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"unit"},"value":{"kind":"EnumValue","value":"DAY"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetArticlesQuery, GetArticlesQueryVariables>;
export const GetLocationsListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLocationsList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"withGeoLocation"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"withTopContent"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocationPageOrderByInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"continents"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"services"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"getLocationsList"},"name":{"kind":"Name","value":"LocationPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ParentLink"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"GuidValue"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parentId"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"continent"},"name":{"kind":"Name","value":"LocationContinent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderType"},"value":{"kind":"EnumValue","value":"VALUE"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"ASC"}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"continents"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"services"},"name":{"kind":"Name","value":"LocationServices"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderType"},"value":{"kind":"EnumValue","value":"VALUE"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"ASC"}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"services"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"guid"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"RouteSegment"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"LocationTitle"}},{"kind":"Field","alias":{"kind":"Name","value":"street1"},"name":{"kind":"Name","value":"LocationStreet1"}},{"kind":"Field","alias":{"kind":"Name","value":"street2"},"name":{"kind":"Name","value":"LocationStreet2"}},{"kind":"Field","alias":{"kind":"Name","value":"city"},"name":{"kind":"Name","value":"LocationCity"}},{"kind":"Field","alias":{"kind":"Name","value":"postalCode"},"name":{"kind":"Name","value":"LocationPostalCode"}},{"kind":"Field","alias":{"kind":"Name","value":"state"},"name":{"kind":"Name","value":"LocationState"}},{"kind":"Field","alias":{"kind":"Name","value":"country"},"name":{"kind":"Name","value":"LocationCountry"}},{"kind":"Field","alias":{"kind":"Name","value":"continent"},"name":{"kind":"Name","value":"LocationContinent"}},{"kind":"Field","alias":{"kind":"Name","value":"services"},"name":{"kind":"Name","value":"LocationServices"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationGeoLocation"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"withGeoLocation"}}}]}]},{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationTopContent"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"withTopContent"}}}]}]}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationGeoLocation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LocationPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"lon"},"name":{"kind":"Name","value":"LocationLongitude"}},{"kind":"Field","alias":{"kind":"Name","value":"lat"},"name":{"kind":"Name","value":"LocationLatitude"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationTopContent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LocationPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"isTopContent"},"name":{"kind":"Name","value":"LocationTopItem"}}]}}]} as unknown as DocumentNode<GetLocationsListQuery, GetLocationsListQueryVariables>;
export const GetContentByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContentById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"guidValue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isCommonDraft"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ContentLink"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"WorkId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"GuidValue"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"guidValue"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"IsCommonDraft"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isCommonDraft"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}}]} as unknown as DocumentNode<GetContentByIdQuery, GetContentByIdQueryVariables>;
export const GetContentByPathDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContentByPath"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"siteId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"RelativePath"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"SiteId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"siteId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}}]} as unknown as DocumentNode<GetContentByPathQuery, GetContentByPathQueryVariables>;
export const GetContentTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContentType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"guidValue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ContentLink"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"GuidValue"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"guidValue"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"Id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"WorkId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workId"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ContentType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<GetContentTypeQuery, GetContentTypeQueryVariables>;
export const GetAllChannelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllChannels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"GetAllChannels"},"name":{"kind":"Name","value":"SiteDefinition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"channels"},"name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"domains"},"name":{"kind":"Name","value":"Hosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"type"},"name":{"kind":"Name","value":"Type"}},{"kind":"Field","alias":{"kind":"Name","value":"forLocale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"code"},"name":{"kind":"Name","value":"Name"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locales"},"name":{"kind":"Name","value":"Languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"code"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"UrlSegment"}},{"kind":"Field","alias":{"kind":"Name","value":"isDefault"},"name":{"kind":"Name","value":"IsMasterLanguage"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"ContentRoots"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"startPage"},"name":{"kind":"Name","value":"StartPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAllChannelsQuery, GetAllChannelsQueryVariables>;
export const GetChannelByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChannelById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"GetChannelById"},"name":{"kind":"Name","value":"SiteDefinition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"channels"},"name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"domains"},"name":{"kind":"Name","value":"Hosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"type"},"name":{"kind":"Name","value":"Type"}},{"kind":"Field","alias":{"kind":"Name","value":"forLocale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"code"},"name":{"kind":"Name","value":"Name"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locales"},"name":{"kind":"Name","value":"Languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"code"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"UrlSegment"}},{"kind":"Field","alias":{"kind":"Name","value":"isDefault"},"name":{"kind":"Name","value":"IsMasterLanguage"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"ContentRoots"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"startPage"},"name":{"kind":"Name","value":"StartPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetChannelByIdQuery, GetChannelByIdQueryVariables>;
export const GetChannelByDomainDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChannelByDomain"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"domain"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallback"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":{"kind":"StringValue","value":"___","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"GetChannelByDomain"},"name":{"kind":"Name","value":"SiteDefinition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Hosts"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"domain"}}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Hosts"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallback"}}}]}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"channels"},"name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"domains"},"name":{"kind":"Name","value":"Hosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"type"},"name":{"kind":"Name","value":"Type"}},{"kind":"Field","alias":{"kind":"Name","value":"forLocale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"code"},"name":{"kind":"Name","value":"Name"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locales"},"name":{"kind":"Name","value":"Languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"code"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"UrlSegment"}},{"kind":"Field","alias":{"kind":"Name","value":"isDefault"},"name":{"kind":"Name","value":"IsMasterLanguage"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"ContentRoots"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"startPage"},"name":{"kind":"Name","value":"StartPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetChannelByDomainQuery, GetChannelByDomainQueryVariables>;
export const GetAllRoutesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllRoutes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"100"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"typeFilter"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":{"kind":"StringValue","value":"Page","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"siteId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"RelativePath"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"exist"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"ContentType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"typeFilter"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"SiteId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"siteId"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"contentLink"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"RouteSegment"}},{"kind":"Field","alias":{"kind":"Name","value":"changed"},"name":{"kind":"Name","value":"Changed"}},{"kind":"Field","alias":{"kind":"Name","value":"published"},"name":{"kind":"Name","value":"StartPublish"}},{"kind":"Field","alias":{"kind":"Name","value":"siteId"},"name":{"kind":"Name","value":"SiteId"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<GetAllRoutesQuery, GetAllRoutesQueryVariables>;
export const GetRouteByPathDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRouteByPath"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"siteId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"RelativePath"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"SiteId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"siteId"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"route"},"name":{"kind":"Name","value":"RelativePath"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"contentLink"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"RouteSegment"}},{"kind":"Field","alias":{"kind":"Name","value":"changed"},"name":{"kind":"Name","value":"Changed"}},{"kind":"Field","alias":{"kind":"Name","value":"published"},"name":{"kind":"Name","value":"StartPublish"}},{"kind":"Field","alias":{"kind":"Name","value":"siteId"},"name":{"kind":"Name","value":"SiteId"}}]}}]}}]}}]} as unknown as DocumentNode<GetRouteByPathQuery, GetRouteByPathQueryVariables>;
export const GetRouteByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRouteById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ContentLink"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"WorkId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workId"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ContentLink"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"WorkId"},"value":{"kind":"EnumValue","value":"DESC"}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"Status"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"route"},"name":{"kind":"Name","value":"RelativePath"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"contentLink"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"RouteSegment"}},{"kind":"Field","alias":{"kind":"Name","value":"changed"},"name":{"kind":"Name","value":"Changed"}},{"kind":"Field","alias":{"kind":"Name","value":"published"},"name":{"kind":"Name","value":"StartPublish"}},{"kind":"Field","alias":{"kind":"Name","value":"siteId"},"name":{"kind":"Name","value":"SiteId"}}]}}]}}]}}]} as unknown as DocumentNode<GetRouteByIdQuery, GetRouteByIdQueryVariables>;