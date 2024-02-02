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

/** A listing of blog articles.  This page allows you to filter articles by author, date, and categories. */
export type BlogListingPage = IContent & IData & {
  __typename?: 'BlogListingPage';
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


/** A listing of blog articles.  This page allows you to filter articles by author, date, and categories. */
export type BlogListingPage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlogListingPageAutocomplete = {
  __typename?: 'BlogListingPageAutocomplete';
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


export type BlogListingPageAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BlogListingPageAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BlogListingPageAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BlogListingPageAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BlogListingPageAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BlogListingPageAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BlogListingPageAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type BlogListingPageFacet = {
  __typename?: 'BlogListingPageFacet';
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
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type BlogListingPageFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlogListingPageFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type BlogListingPageFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlogListingPageFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type BlogListingPageFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlogListingPageFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlogListingPageFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlogListingPageFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlogListingPageFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type BlogListingPageFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlogListingPageFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type BlogListingPageFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlogListingPageFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type BlogListingPageFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type BlogListingPageOrderByInput = {
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

export type BlogListingPageOutput = {
  __typename?: 'BlogListingPageOutput';
  autocomplete?: Maybe<BlogListingPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BlogListingPageFacet>;
  items?: Maybe<Array<Maybe<BlogListingPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BlogListingPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogListingPageWhereInput = {
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
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<BlogListingPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlogListingPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlogListingPageWhereInput>>>;
};

/** Represents a single blog post */
export type BlogPostPage = IContent & IData & {
  __typename?: 'BlogPostPage';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The main body for this blog post */
  BlogPostBody?: Maybe<Scalars['String']['output']>;
  BlogPostPromoImage?: Maybe<ContentModelReference>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  /** The heading for this blog post */
  Heading?: Maybe<Scalars['String']['output']>;
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


/** Represents a single blog post */
export type BlogPostPage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlogPostPageAutocomplete = {
  __typename?: 'BlogPostPageAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  BlogPostPromoImage?: Maybe<ContentModelReferenceAutocomplete>;
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


export type BlogPostPageAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BlogPostPageAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BlogPostPageAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BlogPostPageAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BlogPostPageAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BlogPostPageAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type BlogPostPageAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type BlogPostPageFacet = {
  __typename?: 'BlogPostPageFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  BlogPostBody?: Maybe<Array<Maybe<StringFacet>>>;
  BlogPostPromoImage?: Maybe<ContentModelReferenceFacet>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  Heading?: Maybe<Array<Maybe<StringFacet>>>;
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


export type BlogPostPageFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlogPostPageFacetBlogPostBodyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlogPostPageFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type BlogPostPageFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlogPostPageFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type BlogPostPageFacetHeadingArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlogPostPageFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlogPostPageFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlogPostPageFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlogPostPageFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlogPostPageFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type BlogPostPageFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlogPostPageFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type BlogPostPageFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlogPostPageFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type BlogPostPageFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type BlogPostPageOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  BlogPostBody?: InputMaybe<OrderBy>;
  BlogPostPromoImage?: InputMaybe<ContentModelReferenceOrderByInput>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  Heading?: InputMaybe<OrderBy>;
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

export type BlogPostPageOutput = {
  __typename?: 'BlogPostPageOutput';
  autocomplete?: Maybe<BlogPostPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BlogPostPageFacet>;
  items?: Maybe<Array<Maybe<BlogPostPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BlogPostPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogPostPageWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  BlogPostBody?: InputMaybe<SearchableStringFilterInput>;
  BlogPostPromoImage?: InputMaybe<ContentModelReferenceWhereInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  Heading?: InputMaybe<SearchableStringFilterInput>;
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
  _and?: InputMaybe<Array<InputMaybe<BlogPostPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlogPostPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlogPostPageWhereInput>>>;
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

/** Represents an instance of a button */
export type ButtonBlock = IContent & IData & {
  __typename?: 'ButtonBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The css class for adding custom styles too */
  ButtonClass?: Maybe<Scalars['String']['output']>;
  /** The text of the button */
  ButtonText?: Maybe<Scalars['String']['output']>;
  /** The type of button to display */
  ButtonType?: Maybe<Scalars['String']['output']>;
  ButtonUrl?: Maybe<Scalars['String']['output']>;
  /** The type of button to display */
  ButtonVariant?: Maybe<Scalars['String']['output']>;
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


/** Represents an instance of a button */
export type ButtonBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ButtonBlockAutocomplete = {
  __typename?: 'ButtonBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ButtonClass?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ButtonType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ButtonUrl?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ButtonVariant?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
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


export type ButtonBlockAutocompleteButtonClassArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ButtonBlockAutocompleteButtonTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ButtonBlockAutocompleteButtonUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ButtonBlockAutocompleteButtonVariantArgs = {
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
  ButtonClass?: Maybe<Array<Maybe<StringFacet>>>;
  ButtonText?: Maybe<Array<Maybe<StringFacet>>>;
  ButtonType?: Maybe<Array<Maybe<StringFacet>>>;
  ButtonUrl?: Maybe<Array<Maybe<StringFacet>>>;
  ButtonVariant?: Maybe<Array<Maybe<StringFacet>>>;
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


export type ButtonBlockFacetButtonClassArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ButtonBlockFacetButtonTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ButtonBlockFacetButtonTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ButtonBlockFacetButtonUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ButtonBlockFacetButtonVariantArgs = {
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
  ButtonClass?: InputMaybe<OrderBy>;
  ButtonText?: InputMaybe<OrderBy>;
  ButtonType?: InputMaybe<OrderBy>;
  ButtonUrl?: InputMaybe<OrderBy>;
  ButtonVariant?: InputMaybe<OrderBy>;
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
  ButtonClass?: InputMaybe<StringFilterInput>;
  ButtonText?: InputMaybe<SearchableStringFilterInput>;
  ButtonType?: InputMaybe<StringFilterInput>;
  ButtonUrl?: InputMaybe<StringFilterInput>;
  ButtonVariant?: InputMaybe<StringFilterInput>;
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

export type CardBlock = IContent & IData & {
  __typename?: 'CardBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CardButton?: Maybe<CardBlockBlockData>;
  CardColor?: Maybe<Scalars['String']['output']>;
  CardDescription?: Maybe<Scalars['String']['output']>;
  CardHeading?: Maybe<Scalars['String']['output']>;
  CardIcon?: Maybe<ContentModelReference>;
  CardImage?: Maybe<ContentModelReferenceSearch>;
  CardSubHeading?: Maybe<Scalars['String']['output']>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  ImageLayout?: Maybe<Scalars['String']['output']>;
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


export type CardBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type CardBlockAutocomplete = {
  __typename?: 'CardBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CardButton?: Maybe<CardBlockBlockDataAutocomplete>;
  CardColor?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CardIcon?: Maybe<ContentModelReferenceAutocomplete>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  ImageLayout?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CardBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CardBlockAutocompleteCardColorArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CardBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CardBlockAutocompleteImageLayoutArgs = {
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


export type CardBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CardBlockBlockData = {
  __typename?: 'CardBlockBlockData';
  ButtonClass?: Maybe<Scalars['String']['output']>;
  ButtonText?: Maybe<Scalars['String']['output']>;
  ButtonType?: Maybe<Scalars['String']['output']>;
  ButtonUrl?: Maybe<Scalars['String']['output']>;
  ButtonVariant?: Maybe<Scalars['String']['output']>;
};

export type CardBlockBlockDataAutocomplete = {
  __typename?: 'CardBlockBlockDataAutocomplete';
  ButtonClass?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ButtonText?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ButtonType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ButtonUrl?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ButtonVariant?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CardBlockBlockDataAutocompleteButtonClassArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CardBlockBlockDataAutocompleteButtonTextArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CardBlockBlockDataAutocompleteButtonTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CardBlockBlockDataAutocompleteButtonUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CardBlockBlockDataAutocompleteButtonVariantArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CardBlockBlockDataFacet = {
  __typename?: 'CardBlockBlockDataFacet';
  ButtonClass?: Maybe<Array<Maybe<StringFacet>>>;
  ButtonText?: Maybe<Array<Maybe<StringFacet>>>;
  ButtonType?: Maybe<Array<Maybe<StringFacet>>>;
  ButtonUrl?: Maybe<Array<Maybe<StringFacet>>>;
  ButtonVariant?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CardBlockBlockDataFacetButtonClassArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CardBlockBlockDataFacetButtonTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CardBlockBlockDataFacetButtonTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CardBlockBlockDataFacetButtonUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CardBlockBlockDataFacetButtonVariantArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CardBlockBlockDataOrderByInput = {
  ButtonClass?: InputMaybe<OrderBy>;
  ButtonText?: InputMaybe<OrderBy>;
  ButtonType?: InputMaybe<OrderBy>;
  ButtonUrl?: InputMaybe<OrderBy>;
  ButtonVariant?: InputMaybe<OrderBy>;
};

export type CardBlockBlockDataWhereInput = {
  ButtonClass?: InputMaybe<StringFilterInput>;
  ButtonText?: InputMaybe<StringFilterInput>;
  ButtonType?: InputMaybe<StringFilterInput>;
  ButtonUrl?: InputMaybe<StringFilterInput>;
  ButtonVariant?: InputMaybe<StringFilterInput>;
};

export type CardBlockFacet = {
  __typename?: 'CardBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  CardButton?: Maybe<CardBlockBlockDataFacet>;
  CardColor?: Maybe<Array<Maybe<StringFacet>>>;
  CardDescription?: Maybe<Array<Maybe<StringFacet>>>;
  CardHeading?: Maybe<Array<Maybe<StringFacet>>>;
  CardIcon?: Maybe<ContentModelReferenceFacet>;
  CardImage?: Maybe<ContentModelReferenceSearchFacet>;
  CardSubHeading?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  ImageLayout?: Maybe<Array<Maybe<StringFacet>>>;
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


export type CardBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CardBlockFacetCardColorArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CardBlockFacetCardDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CardBlockFacetCardHeadingArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CardBlockFacetCardSubHeadingArgs = {
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


export type CardBlockFacetImageLayoutArgs = {
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


export type CardBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CardBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  CardButton?: InputMaybe<CardBlockBlockDataOrderByInput>;
  CardColor?: InputMaybe<OrderBy>;
  CardDescription?: InputMaybe<OrderBy>;
  CardHeading?: InputMaybe<OrderBy>;
  CardIcon?: InputMaybe<ContentModelReferenceOrderByInput>;
  CardImage?: InputMaybe<ContentModelReferenceSearchOrderByInput>;
  CardSubHeading?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  ImageLayout?: InputMaybe<OrderBy>;
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
  CardButton?: InputMaybe<CardBlockBlockDataWhereInput>;
  CardColor?: InputMaybe<StringFilterInput>;
  CardDescription?: InputMaybe<SearchableStringFilterInput>;
  CardHeading?: InputMaybe<SearchableStringFilterInput>;
  CardIcon?: InputMaybe<ContentModelReferenceWhereInput>;
  CardImage?: InputMaybe<ContentModelReferenceSearchWhereInput>;
  CardSubHeading?: InputMaybe<SearchableStringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  ImageLayout?: InputMaybe<StringFilterInput>;
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
  _and?: InputMaybe<Array<InputMaybe<CardBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<CardBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<CardBlockWhereInput>>>;
};

export type CarouselBlock = IContent & IData & {
  __typename?: 'CarouselBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  CarouselItemsContentArea?: Maybe<Array<Maybe<ContentAreaItemModelSearch>>>;
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
  CarouselItemsContentArea?: Maybe<ContentAreaItemModelSearchFacet>;
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
  CarouselItemsContentArea?: InputMaybe<ContentAreaItemModelSearchOrderByInput>;
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
  CarouselItemsContentArea?: InputMaybe<ContentAreaItemModelSearchWhereInput>;
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

/** A page to group / hold content that is not an actual page.  This page is not url-addressable. */
export type ContainerPage = IContent & IData & {
  __typename?: 'ContainerPage';
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


/** A page to group / hold content that is not an actual page.  This page is not url-addressable. */
export type ContainerPage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ContainerPageAutocomplete = {
  __typename?: 'ContainerPageAutocomplete';
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


export type ContainerPageAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContainerPageAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContainerPageAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContainerPageAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContainerPageAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContainerPageAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContainerPageAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContainerPageFacet = {
  __typename?: 'ContainerPageFacet';
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
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContainerPageFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContainerPageFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContainerPageFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContainerPageFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContainerPageFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContainerPageFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContainerPageFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContainerPageFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContainerPageFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContainerPageFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContainerPageFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContainerPageFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContainerPageFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type ContainerPageFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContainerPageOrderByInput = {
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

export type ContainerPageOutput = {
  __typename?: 'ContainerPageOutput';
  autocomplete?: Maybe<ContainerPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ContainerPageFacet>;
  items?: Maybe<Array<Maybe<ContainerPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ContainerPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContainerPageWhereInput = {
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
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<ContainerPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ContainerPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ContainerPageWhereInput>>>;
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

/** Hero */
export type HeroBlock = IContent & IData & {
  __typename?: 'HeroBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  Eyebrow?: Maybe<Scalars['String']['output']>;
  Heading?: Maybe<Scalars['String']['output']>;
  /** The cta or normal navigation button for the hero */
  HeroButton?: Maybe<HeroBlockBlockData>;
  HeroColor?: Maybe<Scalars['String']['output']>;
  Icon?: Maybe<Scalars['String']['output']>;
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
  /** The subheading for this block */
  SubHeading?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** Hero */
export type HeroBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type HeroBlockAutocomplete = {
  __typename?: 'HeroBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  HeroButton?: Maybe<HeroBlockBlockDataAutocomplete>;
  HeroColor?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Icon?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
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


export type HeroBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeroBlockAutocompleteHeroColorArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeroBlockAutocompleteIconArgs = {
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

export type HeroBlockBlockData = {
  __typename?: 'HeroBlockBlockData';
  ButtonClass?: Maybe<Scalars['String']['output']>;
  ButtonText?: Maybe<Scalars['String']['output']>;
  ButtonType?: Maybe<Scalars['String']['output']>;
  ButtonUrl?: Maybe<Scalars['String']['output']>;
  ButtonVariant?: Maybe<Scalars['String']['output']>;
};

export type HeroBlockBlockDataAutocomplete = {
  __typename?: 'HeroBlockBlockDataAutocomplete';
  ButtonClass?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ButtonText?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ButtonType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ButtonUrl?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ButtonVariant?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type HeroBlockBlockDataAutocompleteButtonClassArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeroBlockBlockDataAutocompleteButtonTextArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeroBlockBlockDataAutocompleteButtonTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeroBlockBlockDataAutocompleteButtonUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HeroBlockBlockDataAutocompleteButtonVariantArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type HeroBlockBlockDataFacet = {
  __typename?: 'HeroBlockBlockDataFacet';
  ButtonClass?: Maybe<Array<Maybe<StringFacet>>>;
  ButtonText?: Maybe<Array<Maybe<StringFacet>>>;
  ButtonType?: Maybe<Array<Maybe<StringFacet>>>;
  ButtonUrl?: Maybe<Array<Maybe<StringFacet>>>;
  ButtonVariant?: Maybe<Array<Maybe<StringFacet>>>;
};


export type HeroBlockBlockDataFacetButtonClassArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockBlockDataFacetButtonTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockBlockDataFacetButtonTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockBlockDataFacetButtonUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockBlockDataFacetButtonVariantArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type HeroBlockBlockDataOrderByInput = {
  ButtonClass?: InputMaybe<OrderBy>;
  ButtonText?: InputMaybe<OrderBy>;
  ButtonType?: InputMaybe<OrderBy>;
  ButtonUrl?: InputMaybe<OrderBy>;
  ButtonVariant?: InputMaybe<OrderBy>;
};

export type HeroBlockBlockDataWhereInput = {
  ButtonClass?: InputMaybe<StringFilterInput>;
  ButtonText?: InputMaybe<StringFilterInput>;
  ButtonType?: InputMaybe<StringFilterInput>;
  ButtonUrl?: InputMaybe<StringFilterInput>;
  ButtonVariant?: InputMaybe<StringFilterInput>;
};

export type HeroBlockFacet = {
  __typename?: 'HeroBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  Description?: Maybe<Array<Maybe<StringFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  Eyebrow?: Maybe<Array<Maybe<StringFacet>>>;
  Heading?: Maybe<Array<Maybe<StringFacet>>>;
  HeroButton?: Maybe<HeroBlockBlockDataFacet>;
  HeroColor?: Maybe<Array<Maybe<StringFacet>>>;
  Icon?: Maybe<Array<Maybe<StringFacet>>>;
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
  SubHeading?: Maybe<Array<Maybe<StringFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type HeroBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
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


export type HeroBlockFacetDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetEyebrowArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetHeadingArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetHeroColorArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetIconArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
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


export type HeroBlockFacetSubHeadingArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HeroBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type HeroBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  Description?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  Eyebrow?: InputMaybe<OrderBy>;
  Heading?: InputMaybe<OrderBy>;
  HeroButton?: InputMaybe<HeroBlockBlockDataOrderByInput>;
  HeroColor?: InputMaybe<OrderBy>;
  Icon?: InputMaybe<OrderBy>;
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
  SubHeading?: InputMaybe<OrderBy>;
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
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  Description?: InputMaybe<SearchableStringFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  Eyebrow?: InputMaybe<SearchableStringFilterInput>;
  Heading?: InputMaybe<SearchableStringFilterInput>;
  HeroButton?: InputMaybe<HeroBlockBlockDataWhereInput>;
  HeroColor?: InputMaybe<StringFilterInput>;
  Icon?: InputMaybe<StringFilterInput>;
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
  SubHeading?: InputMaybe<SearchableStringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
};

/** Hero displayed on the home page */
export type HomePageHeroBlock = IContent & IData & {
  __typename?: 'HomePageHeroBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  HomeHeroBlockHeading?: Maybe<Scalars['String']['output']>;
  HomeHeroBlockSubHeading?: Maybe<Scalars['String']['output']>;
  /** The button for this hero */
  HomeHeroButtonBlock?: Maybe<HomePageHeroBlockBlockData>;
  /** The image displayed on the left side of the hero */
  HomeHeroLeftImage?: Maybe<ContentModelReference>;
  HomeHeroRightImage?: Maybe<ContentModelReferenceSearch>;
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


/** Hero displayed on the home page */
export type HomePageHeroBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type HomePageHeroBlockAutocomplete = {
  __typename?: 'HomePageHeroBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  HomeHeroButtonBlock?: Maybe<HomePageHeroBlockBlockDataAutocomplete>;
  HomeHeroLeftImage?: Maybe<ContentModelReferenceAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type HomePageHeroBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HomePageHeroBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HomePageHeroBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HomePageHeroBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HomePageHeroBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HomePageHeroBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HomePageHeroBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type HomePageHeroBlockBlockData = {
  __typename?: 'HomePageHeroBlockBlockData';
  ButtonClass?: Maybe<Scalars['String']['output']>;
  ButtonText?: Maybe<Scalars['String']['output']>;
  ButtonType?: Maybe<Scalars['String']['output']>;
  ButtonUrl?: Maybe<Scalars['String']['output']>;
  ButtonVariant?: Maybe<Scalars['String']['output']>;
};

export type HomePageHeroBlockBlockDataAutocomplete = {
  __typename?: 'HomePageHeroBlockBlockDataAutocomplete';
  ButtonClass?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ButtonText?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ButtonType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ButtonUrl?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ButtonVariant?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type HomePageHeroBlockBlockDataAutocompleteButtonClassArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HomePageHeroBlockBlockDataAutocompleteButtonTextArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HomePageHeroBlockBlockDataAutocompleteButtonTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HomePageHeroBlockBlockDataAutocompleteButtonUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HomePageHeroBlockBlockDataAutocompleteButtonVariantArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type HomePageHeroBlockBlockDataFacet = {
  __typename?: 'HomePageHeroBlockBlockDataFacet';
  ButtonClass?: Maybe<Array<Maybe<StringFacet>>>;
  ButtonText?: Maybe<Array<Maybe<StringFacet>>>;
  ButtonType?: Maybe<Array<Maybe<StringFacet>>>;
  ButtonUrl?: Maybe<Array<Maybe<StringFacet>>>;
  ButtonVariant?: Maybe<Array<Maybe<StringFacet>>>;
};


export type HomePageHeroBlockBlockDataFacetButtonClassArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HomePageHeroBlockBlockDataFacetButtonTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HomePageHeroBlockBlockDataFacetButtonTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HomePageHeroBlockBlockDataFacetButtonUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HomePageHeroBlockBlockDataFacetButtonVariantArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type HomePageHeroBlockBlockDataOrderByInput = {
  ButtonClass?: InputMaybe<OrderBy>;
  ButtonText?: InputMaybe<OrderBy>;
  ButtonType?: InputMaybe<OrderBy>;
  ButtonUrl?: InputMaybe<OrderBy>;
  ButtonVariant?: InputMaybe<OrderBy>;
};

export type HomePageHeroBlockBlockDataWhereInput = {
  ButtonClass?: InputMaybe<StringFilterInput>;
  ButtonText?: InputMaybe<StringFilterInput>;
  ButtonType?: InputMaybe<StringFilterInput>;
  ButtonUrl?: InputMaybe<StringFilterInput>;
  ButtonVariant?: InputMaybe<StringFilterInput>;
};

export type HomePageHeroBlockFacet = {
  __typename?: 'HomePageHeroBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  HomeHeroBlockHeading?: Maybe<Array<Maybe<StringFacet>>>;
  HomeHeroBlockSubHeading?: Maybe<Array<Maybe<StringFacet>>>;
  HomeHeroButtonBlock?: Maybe<HomePageHeroBlockBlockDataFacet>;
  HomeHeroLeftImage?: Maybe<ContentModelReferenceFacet>;
  HomeHeroRightImage?: Maybe<ContentModelReferenceSearchFacet>;
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


export type HomePageHeroBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HomePageHeroBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HomePageHeroBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HomePageHeroBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HomePageHeroBlockFacetHomeHeroBlockHeadingArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HomePageHeroBlockFacetHomeHeroBlockSubHeadingArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HomePageHeroBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HomePageHeroBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HomePageHeroBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HomePageHeroBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HomePageHeroBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HomePageHeroBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HomePageHeroBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HomePageHeroBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HomePageHeroBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HomePageHeroBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type HomePageHeroBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  HomeHeroBlockHeading?: InputMaybe<OrderBy>;
  HomeHeroBlockSubHeading?: InputMaybe<OrderBy>;
  HomeHeroButtonBlock?: InputMaybe<HomePageHeroBlockBlockDataOrderByInput>;
  HomeHeroLeftImage?: InputMaybe<ContentModelReferenceOrderByInput>;
  HomeHeroRightImage?: InputMaybe<ContentModelReferenceSearchOrderByInput>;
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

export type HomePageHeroBlockOutput = {
  __typename?: 'HomePageHeroBlockOutput';
  autocomplete?: Maybe<HomePageHeroBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<HomePageHeroBlockFacet>;
  items?: Maybe<Array<Maybe<HomePageHeroBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type HomePageHeroBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HomePageHeroBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  HomeHeroBlockHeading?: InputMaybe<SearchableStringFilterInput>;
  HomeHeroBlockSubHeading?: InputMaybe<SearchableStringFilterInput>;
  HomeHeroButtonBlock?: InputMaybe<HomePageHeroBlockBlockDataWhereInput>;
  HomeHeroLeftImage?: InputMaybe<ContentModelReferenceWhereInput>;
  HomeHeroRightImage?: InputMaybe<ContentModelReferenceSearchWhereInput>;
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
  _and?: InputMaybe<Array<InputMaybe<HomePageHeroBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HomePageHeroBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HomePageHeroBlockWhereInput>>>;
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

export type HtmlBlock = IContent & IData & {
  __typename?: 'HtmlBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  HtmlBlockHeading?: Maybe<Scalars['String']['output']>;
  HtmlContent?: Maybe<Scalars['String']['output']>;
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


export type HtmlBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type HtmlBlockAutocomplete = {
  __typename?: 'HtmlBlockAutocomplete';
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


export type HtmlBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HtmlBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HtmlBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HtmlBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HtmlBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HtmlBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type HtmlBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type HtmlBlockFacet = {
  __typename?: 'HtmlBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  HtmlBlockHeading?: Maybe<Array<Maybe<StringFacet>>>;
  HtmlContent?: Maybe<Array<Maybe<StringFacet>>>;
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


export type HtmlBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HtmlBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HtmlBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HtmlBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HtmlBlockFacetHtmlBlockHeadingArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HtmlBlockFacetHtmlContentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HtmlBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HtmlBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HtmlBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HtmlBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HtmlBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HtmlBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HtmlBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HtmlBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type HtmlBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type HtmlBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type HtmlBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  HtmlBlockHeading?: InputMaybe<OrderBy>;
  HtmlContent?: InputMaybe<OrderBy>;
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

export type HtmlBlockOutput = {
  __typename?: 'HtmlBlockOutput';
  autocomplete?: Maybe<HtmlBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<HtmlBlockFacet>;
  items?: Maybe<Array<Maybe<HtmlBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type HtmlBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HtmlBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  HtmlBlockHeading?: InputMaybe<SearchableStringFilterInput>;
  HtmlContent?: InputMaybe<SearchableStringFilterInput>;
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
  _and?: InputMaybe<Array<InputMaybe<HtmlBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HtmlBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HtmlBlockWhereInput>>>;
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

/** Allows you to specify the layout for the blocks that come after this block */
export type LayoutContainerBlock = IContent & IData & {
  __typename?: 'LayoutContainerBlock';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ColumnsCount?: Maybe<Scalars['Int']['output']>;
  ContainerBackgroundColor?: Maybe<Scalars['String']['output']>;
  ContainerBackgroundImage?: Maybe<ContentModelReference>;
  ContainerMarginBottom?: Maybe<Scalars['String']['output']>;
  ContainerMarginTop?: Maybe<Scalars['String']['output']>;
  ContainerPaddingBottom?: Maybe<Scalars['String']['output']>;
  ContainerPaddingTop?: Maybe<Scalars['String']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  GapSize?: Maybe<Scalars['String']['output']>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  LayoutContentArea?: Maybe<Array<Maybe<ContentAreaItemModel>>>;
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


/** Allows you to specify the layout for the blocks that come after this block */
export type LayoutContainerBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type LayoutContainerBlockAutocomplete = {
  __typename?: 'LayoutContainerBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContainerBackgroundColor?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ContainerBackgroundImage?: Maybe<ContentModelReferenceAutocomplete>;
  ContainerMarginBottom?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ContainerMarginTop?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ContainerPaddingBottom?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ContainerPaddingTop?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  GapSize?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  LayoutContentArea?: Maybe<ContentAreaItemModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type LayoutContainerBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LayoutContainerBlockAutocompleteContainerBackgroundColorArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LayoutContainerBlockAutocompleteContainerMarginBottomArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LayoutContainerBlockAutocompleteContainerMarginTopArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LayoutContainerBlockAutocompleteContainerPaddingBottomArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LayoutContainerBlockAutocompleteContainerPaddingTopArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LayoutContainerBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LayoutContainerBlockAutocompleteGapSizeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LayoutContainerBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LayoutContainerBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LayoutContainerBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LayoutContainerBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LayoutContainerBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LayoutContainerBlockFacet = {
  __typename?: 'LayoutContainerBlockFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ColumnsCount?: Maybe<Array<Maybe<NumberFacet>>>;
  ContainerBackgroundColor?: Maybe<Array<Maybe<StringFacet>>>;
  ContainerBackgroundImage?: Maybe<ContentModelReferenceFacet>;
  ContainerMarginBottom?: Maybe<Array<Maybe<StringFacet>>>;
  ContainerMarginTop?: Maybe<Array<Maybe<StringFacet>>>;
  ContainerPaddingBottom?: Maybe<Array<Maybe<StringFacet>>>;
  ContainerPaddingTop?: Maybe<Array<Maybe<StringFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  GapSize?: Maybe<Array<Maybe<StringFacet>>>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  LayoutContentArea?: Maybe<ContentAreaItemModelFacet>;
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


export type LayoutContainerBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LayoutContainerBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LayoutContainerBlockFacetColumnsCountArgs = {
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type LayoutContainerBlockFacetContainerBackgroundColorArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LayoutContainerBlockFacetContainerMarginBottomArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LayoutContainerBlockFacetContainerMarginTopArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LayoutContainerBlockFacetContainerPaddingBottomArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LayoutContainerBlockFacetContainerPaddingTopArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LayoutContainerBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LayoutContainerBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LayoutContainerBlockFacetGapSizeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LayoutContainerBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LayoutContainerBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LayoutContainerBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LayoutContainerBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LayoutContainerBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LayoutContainerBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LayoutContainerBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LayoutContainerBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LayoutContainerBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type LayoutContainerBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LayoutContainerBlockOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ColumnsCount?: InputMaybe<OrderBy>;
  ContainerBackgroundColor?: InputMaybe<OrderBy>;
  ContainerBackgroundImage?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContainerMarginBottom?: InputMaybe<OrderBy>;
  ContainerMarginTop?: InputMaybe<OrderBy>;
  ContainerPaddingBottom?: InputMaybe<OrderBy>;
  ContainerPaddingTop?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  GapSize?: InputMaybe<OrderBy>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  LayoutContentArea?: InputMaybe<ContentAreaItemModelOrderByInput>;
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

export type LayoutContainerBlockOutput = {
  __typename?: 'LayoutContainerBlockOutput';
  autocomplete?: Maybe<LayoutContainerBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<LayoutContainerBlockFacet>;
  items?: Maybe<Array<Maybe<LayoutContainerBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type LayoutContainerBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LayoutContainerBlockWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ColumnsCount?: InputMaybe<IntFilterInput>;
  ContainerBackgroundColor?: InputMaybe<StringFilterInput>;
  ContainerBackgroundImage?: InputMaybe<ContentModelReferenceWhereInput>;
  ContainerMarginBottom?: InputMaybe<StringFilterInput>;
  ContainerMarginTop?: InputMaybe<StringFilterInput>;
  ContainerPaddingBottom?: InputMaybe<StringFilterInput>;
  ContainerPaddingTop?: InputMaybe<StringFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  GapSize?: InputMaybe<StringFilterInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  LayoutContentArea?: InputMaybe<ContentAreaItemModelWhereInput>;
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
  _and?: InputMaybe<Array<InputMaybe<LayoutContainerBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<LayoutContainerBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<LayoutContainerBlockWhereInput>>>;
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

export enum LinkTypes {
  Default = 'DEFAULT'
}

export enum Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL',
  En = 'en'
}

export type MegaMenuGroupBlock = IContent & IData & {
  __typename?: 'MegaMenuGroupBlock';
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
  MegaMenuContentArea?: Maybe<Array<Maybe<ContentAreaItemModel>>>;
  MegaMenuUrl?: Maybe<Scalars['String']['output']>;
  MenuMenuHeading?: Maybe<Scalars['String']['output']>;
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


export type MegaMenuGroupBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type MegaMenuGroupBlockAutocomplete = {
  __typename?: 'MegaMenuGroupBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  MegaMenuContentArea?: Maybe<ContentAreaItemModelAutocomplete>;
  MenuMenuHeading?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type MegaMenuGroupBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type MegaMenuGroupBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type MegaMenuGroupBlockAutocompleteMenuMenuHeadingArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type MegaMenuGroupBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type MegaMenuGroupBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type MegaMenuGroupBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type MegaMenuGroupBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type MegaMenuGroupBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type MegaMenuGroupBlockFacet = {
  __typename?: 'MegaMenuGroupBlockFacet';
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
  MegaMenuContentArea?: Maybe<ContentAreaItemModelFacet>;
  MegaMenuUrl?: Maybe<Array<Maybe<StringFacet>>>;
  MenuMenuHeading?: Maybe<Array<Maybe<StringFacet>>>;
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


export type MegaMenuGroupBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MegaMenuGroupBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MegaMenuGroupBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MegaMenuGroupBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MegaMenuGroupBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MegaMenuGroupBlockFacetMegaMenuUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MegaMenuGroupBlockFacetMenuMenuHeadingArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MegaMenuGroupBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MegaMenuGroupBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MegaMenuGroupBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MegaMenuGroupBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MegaMenuGroupBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MegaMenuGroupBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MegaMenuGroupBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MegaMenuGroupBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MegaMenuGroupBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type MegaMenuGroupBlockOrderByInput = {
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
  MegaMenuContentArea?: InputMaybe<ContentAreaItemModelOrderByInput>;
  MegaMenuUrl?: InputMaybe<OrderBy>;
  MenuMenuHeading?: InputMaybe<OrderBy>;
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

export type MegaMenuGroupBlockOutput = {
  __typename?: 'MegaMenuGroupBlockOutput';
  autocomplete?: Maybe<MegaMenuGroupBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<MegaMenuGroupBlockFacet>;
  items?: Maybe<Array<Maybe<MegaMenuGroupBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type MegaMenuGroupBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MegaMenuGroupBlockWhereInput = {
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
  MegaMenuContentArea?: InputMaybe<ContentAreaItemModelWhereInput>;
  MegaMenuUrl?: InputMaybe<SearchableStringFilterInput>;
  MenuMenuHeading?: InputMaybe<StringFilterInput>;
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
  _and?: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
};

export type MenuNavigationBlock = IContent & IData & {
  __typename?: 'MenuNavigationBlock';
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
  MenuNavigationHeading?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  NavigationLinks?: Maybe<Array<Maybe<LinkItemNode>>>;
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


export type MenuNavigationBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type MenuNavigationBlockAutocomplete = {
  __typename?: 'MenuNavigationBlockAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  MenuNavigationHeading?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  NavigationLinks?: Maybe<LinkItemNodeAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type MenuNavigationBlockAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type MenuNavigationBlockAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type MenuNavigationBlockAutocompleteMenuNavigationHeadingArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type MenuNavigationBlockAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type MenuNavigationBlockAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type MenuNavigationBlockAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type MenuNavigationBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type MenuNavigationBlockAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type MenuNavigationBlockFacet = {
  __typename?: 'MenuNavigationBlockFacet';
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
  MenuNavigationHeading?: Maybe<Array<Maybe<StringFacet>>>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  NavigationLinks?: Maybe<LinkItemNodeFacet>;
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


export type MenuNavigationBlockFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MenuNavigationBlockFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MenuNavigationBlockFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MenuNavigationBlockFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MenuNavigationBlockFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MenuNavigationBlockFacetMenuNavigationHeadingArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MenuNavigationBlockFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MenuNavigationBlockFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MenuNavigationBlockFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MenuNavigationBlockFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MenuNavigationBlockFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MenuNavigationBlockFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MenuNavigationBlockFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type MenuNavigationBlockFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type MenuNavigationBlockFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type MenuNavigationBlockOrderByInput = {
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
  MenuNavigationHeading?: InputMaybe<OrderBy>;
  Name?: InputMaybe<OrderBy>;
  NavigationLinks?: InputMaybe<LinkItemNodeOrderByInput>;
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

export type MenuNavigationBlockOutput = {
  __typename?: 'MenuNavigationBlockOutput';
  autocomplete?: Maybe<MenuNavigationBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<MenuNavigationBlockFacet>;
  items?: Maybe<Array<Maybe<MenuNavigationBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type MenuNavigationBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MenuNavigationBlockWhereInput = {
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
  MenuNavigationHeading?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  NavigationLinks?: InputMaybe<LinkItemNodeWhereInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<MenuNavigationBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<MenuNavigationBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<MenuNavigationBlockWhereInput>>>;
};

export type NumberFacet = {
  __typename?: 'NumberFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum OrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum OrderByFacetType {
  Count = 'COUNT',
  Value = 'VALUE'
}

export type Query = {
  __typename?: 'Query';
  BlogListingPage?: Maybe<BlogListingPageOutput>;
  BlogPostPage?: Maybe<BlogPostPageOutput>;
  ButtonBlock?: Maybe<ButtonBlockOutput>;
  CardBlock?: Maybe<CardBlockOutput>;
  CarouselBlock?: Maybe<CarouselBlockOutput>;
  ContainerPage?: Maybe<ContainerPageOutput>;
  Content?: Maybe<ContentOutput>;
  DAMAsset?: Maybe<DamAssetOutput>;
  DAMImageAsset?: Maybe<DamImageAssetOutput>;
  DAMVideoAsset?: Maybe<DamVideoAssetOutput>;
  Data?: Maybe<DataOutput>;
  HeroBlock?: Maybe<HeroBlockOutput>;
  HomePageHeroBlock?: Maybe<HomePageHeroBlockOutput>;
  HtmlBlock?: Maybe<HtmlBlockOutput>;
  LayoutContainerBlock?: Maybe<LayoutContainerBlockOutput>;
  MegaMenuGroupBlock?: Maybe<MegaMenuGroupBlockOutput>;
  MenuNavigationBlock?: Maybe<MenuNavigationBlockOutput>;
  QuoteBlock?: Maybe<QuoteBlockOutput>;
  SiteDefinition?: Maybe<SiteDefinitionOutput>;
  StandardPage?: Maybe<StandardPageOutput>;
  StartPage?: Maybe<StartPageOutput>;
  TextBlock?: Maybe<TextBlockOutput>;
};


export type QueryBlogListingPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlogListingPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogListingPageWhereInput>;
};


export type QueryBlogPostPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlogPostPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogPostPageWhereInput>;
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


export type QueryContainerPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContainerPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContainerPageWhereInput>;
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


export type QueryHeroBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeroBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeroBlockWhereInput>;
};


export type QueryHomePageHeroBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HomePageHeroBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HomePageHeroBlockWhereInput>;
};


export type QueryHtmlBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HtmlBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HtmlBlockWhereInput>;
};


export type QueryLayoutContainerBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LayoutContainerBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LayoutContainerBlockWhereInput>;
};


export type QueryMegaMenuGroupBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MegaMenuGroupBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MegaMenuGroupBlockWhereInput>;
};


export type QueryMenuNavigationBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MenuNavigationBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MenuNavigationBlockWhereInput>;
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


export type QueryStandardPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<StandardPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StandardPageWhereInput>;
};


export type QueryStartPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<StartPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StartPageWhereInput>;
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
  BlogListingPage?: Maybe<BlogListingPageOutput>;
  BlogPostPage?: Maybe<BlogPostPageOutput>;
  ButtonBlock?: Maybe<ButtonBlockOutput>;
  CardBlock?: Maybe<CardBlockOutput>;
  CarouselBlock?: Maybe<CarouselBlockOutput>;
  ContainerPage?: Maybe<ContainerPageOutput>;
  Content?: Maybe<ContentOutput>;
  DAMAsset?: Maybe<DamAssetOutput>;
  DAMImageAsset?: Maybe<DamImageAssetOutput>;
  DAMVideoAsset?: Maybe<DamVideoAssetOutput>;
  Data?: Maybe<DataOutput>;
  HeroBlock?: Maybe<HeroBlockOutput>;
  HomePageHeroBlock?: Maybe<HomePageHeroBlockOutput>;
  HtmlBlock?: Maybe<HtmlBlockOutput>;
  LayoutContainerBlock?: Maybe<LayoutContainerBlockOutput>;
  MegaMenuGroupBlock?: Maybe<MegaMenuGroupBlockOutput>;
  MenuNavigationBlock?: Maybe<MenuNavigationBlockOutput>;
  QuoteBlock?: Maybe<QuoteBlockOutput>;
  SiteDefinition?: Maybe<SiteDefinitionOutput>;
  StandardPage?: Maybe<StandardPageOutput>;
  StartPage?: Maybe<StartPageOutput>;
  TextBlock?: Maybe<TextBlockOutput>;
};


export type QueryRefBlogListingPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlogListingPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogListingPageWhereInput>;
};


export type QueryRefBlogPostPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlogPostPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogPostPageWhereInput>;
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


export type QueryRefContainerPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContainerPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ContainerPageWhereInput>;
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


export type QueryRefHeroBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeroBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HeroBlockWhereInput>;
};


export type QueryRefHomePageHeroBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HomePageHeroBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HomePageHeroBlockWhereInput>;
};


export type QueryRefHtmlBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HtmlBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<HtmlBlockWhereInput>;
};


export type QueryRefLayoutContainerBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LayoutContainerBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LayoutContainerBlockWhereInput>;
};


export type QueryRefMegaMenuGroupBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MegaMenuGroupBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MegaMenuGroupBlockWhereInput>;
};


export type QueryRefMenuNavigationBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MenuNavigationBlockOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MenuNavigationBlockWhereInput>;
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


export type QueryRefStandardPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<StandardPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StandardPageWhereInput>;
};


export type QueryRefStartPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<StartPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StartPageWhereInput>;
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

/** A block used to display a quote. */
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
  QuoteActive?: Maybe<Scalars['Bool']['output']>;
  /** The color for this quote */
  QuoteColor?: Maybe<Scalars['String']['output']>;
  /** The location / company of the author */
  QuoteProfileLocation?: Maybe<Scalars['String']['output']>;
  /** The name of this author */
  QuoteProfileName?: Maybe<Scalars['String']['output']>;
  /** The profile photo for the author of this quote */
  QuoteProfilePicture?: Maybe<ContentModelReference>;
  /** Represents user's quote */
  QuoteText?: Maybe<Scalars['String']['output']>;
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


/** A block used to display a quote. */
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
  QuoteColor?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  QuoteProfileName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  QuoteProfilePicture?: Maybe<ContentModelReferenceAutocomplete>;
  QuoteText?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
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


export type QuoteBlockAutocompleteQuoteColorArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type QuoteBlockAutocompleteQuoteProfileNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type QuoteBlockAutocompleteQuoteTextArgs = {
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
  QuoteActive?: Maybe<Array<Maybe<StringFacet>>>;
  QuoteColor?: Maybe<Array<Maybe<StringFacet>>>;
  QuoteProfileLocation?: Maybe<Array<Maybe<StringFacet>>>;
  QuoteProfileName?: Maybe<Array<Maybe<StringFacet>>>;
  QuoteProfilePicture?: Maybe<ContentModelReferenceFacet>;
  QuoteText?: Maybe<Array<Maybe<StringFacet>>>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
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


export type QuoteBlockFacetQuoteActiveArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type QuoteBlockFacetQuoteColorArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type QuoteBlockFacetQuoteProfileLocationArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type QuoteBlockFacetQuoteProfileNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type QuoteBlockFacetQuoteTextArgs = {
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
  QuoteActive?: InputMaybe<OrderBy>;
  QuoteColor?: InputMaybe<OrderBy>;
  QuoteProfileLocation?: InputMaybe<OrderBy>;
  QuoteProfileName?: InputMaybe<OrderBy>;
  QuoteProfilePicture?: InputMaybe<ContentModelReferenceOrderByInput>;
  QuoteText?: InputMaybe<OrderBy>;
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
  QuoteActive?: InputMaybe<BoolFilterInput>;
  QuoteColor?: InputMaybe<StringFilterInput>;
  QuoteProfileLocation?: InputMaybe<SearchableStringFilterInput>;
  QuoteProfileName?: InputMaybe<StringFilterInput>;
  QuoteProfilePicture?: InputMaybe<ContentModelReferenceWhereInput>;
  QuoteText?: InputMaybe<StringFilterInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
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

/** A standard content page for xhtml / block layouts. */
export type StandardPage = IContent & IData & {
  __typename?: 'StandardPage';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  /** The main body for this page */
  MainBody?: Maybe<Scalars['String']['output']>;
  MainContentArea?: Maybe<Array<Maybe<ContentAreaItemModel>>>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  StandardPageHeading?: Maybe<Scalars['String']['output']>;
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


/** A standard content page for xhtml / block layouts. */
export type StandardPage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type StandardPageAutocomplete = {
  __typename?: 'StandardPageAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MainContentArea?: Maybe<ContentAreaItemModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  StandardPageHeading?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type StandardPageAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StandardPageAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StandardPageAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StandardPageAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StandardPageAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StandardPageAutocompleteStandardPageHeadingArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StandardPageAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StandardPageAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type StandardPageFacet = {
  __typename?: 'StandardPageFacet';
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
  MainContentArea?: Maybe<ContentAreaItemModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  StandardPageHeading?: Maybe<Array<Maybe<StringFacet>>>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type StandardPageFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StandardPageFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type StandardPageFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StandardPageFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type StandardPageFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StandardPageFacetMainBodyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StandardPageFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StandardPageFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StandardPageFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StandardPageFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type StandardPageFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StandardPageFacetStandardPageHeadingArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StandardPageFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type StandardPageFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StandardPageFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type StandardPageFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type StandardPageOrderByInput = {
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
  MainContentArea?: InputMaybe<ContentAreaItemModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  StandardPageHeading?: InputMaybe<OrderBy>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
};

export type StandardPageOutput = {
  __typename?: 'StandardPageOutput';
  autocomplete?: Maybe<StandardPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<StandardPageFacet>;
  items?: Maybe<Array<Maybe<StandardPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type StandardPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StandardPageWhereInput = {
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
  MainContentArea?: InputMaybe<ContentAreaItemModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  StandardPageHeading?: InputMaybe<StringFilterInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<StandardPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<StandardPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<StandardPageWhereInput>>>;
};

/** The start/home page for this site. */
export type StartPage = IContent & IData & {
  __typename?: 'StartPage';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<Array<Maybe<CategoryModel>>>;
  Changed?: Maybe<Scalars['Date']['output']>;
  ContentLink?: Maybe<ContentModelReference>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Created?: Maybe<Scalars['Date']['output']>;
  ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
  FooterNavigationContentArea?: Maybe<Array<Maybe<ContentAreaItemModelSearch>>>;
  FooterNavigationCopyrightText?: Maybe<Scalars['String']['output']>;
  FooterNavigationSubLinks?: Maybe<Array<Maybe<LinkItemNode>>>;
  HomePageHeroContentArea?: Maybe<Array<Maybe<ContentAreaItemModel>>>;
  HomePageMainContentArea?: Maybe<Array<Maybe<ContentAreaItemModel>>>;
  IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
  Language?: Maybe<ContentLanguageModel>;
  MainNavigationContentArea?: Maybe<Array<Maybe<ContentAreaItemModel>>>;
  MasterLanguage?: Maybe<ContentLanguageModel>;
  Name?: Maybe<Scalars['String']['output']>;
  ParentLink?: Maybe<ContentModelReference>;
  RelativePath?: Maybe<Scalars['String']['output']>;
  RouteSegment?: Maybe<Scalars['String']['output']>;
  Saved?: Maybe<Scalars['Date']['output']>;
  SiteId?: Maybe<Scalars['String']['output']>;
  /** The logo for this site */
  SiteImageLogo?: Maybe<ContentModelReference>;
  StartPublish?: Maybe<Scalars['Date']['output']>;
  Status?: Maybe<Scalars['String']['output']>;
  StopPublish?: Maybe<Scalars['Date']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  UtilityNavigationContentArea?: Maybe<Array<Maybe<ContentAreaItemModel>>>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


/** The start/home page for this site. */
export type StartPage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type StartPageAutocomplete = {
  __typename?: 'StartPageAutocomplete';
  Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Category?: Maybe<CategoryModelAutocomplete>;
  ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
  ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
  FooterNavigationCopyrightText?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  FooterNavigationSubLinks?: Maybe<LinkItemNodeAutocomplete>;
  HomePageHeroContentArea?: Maybe<ContentAreaItemModelAutocomplete>;
  HomePageMainContentArea?: Maybe<ContentAreaItemModelAutocomplete>;
  Language?: Maybe<ContentLanguageModelAutocomplete>;
  MainNavigationContentArea?: Maybe<ContentAreaItemModelAutocomplete>;
  MasterLanguage?: Maybe<ContentLanguageModelAutocomplete>;
  ParentLink?: Maybe<ContentModelReferenceAutocomplete>;
  RelativePath?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  RouteSegment?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteId?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  SiteImageLogo?: Maybe<ContentModelReferenceAutocomplete>;
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  Url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  UtilityNavigationContentArea?: Maybe<ContentAreaItemModelAutocomplete>;
};


export type StartPageAutocompleteAncestorsArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StartPageAutocompleteContentTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StartPageAutocompleteFooterNavigationCopyrightTextArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StartPageAutocompleteRelativePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StartPageAutocompleteRouteSegmentArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StartPageAutocompleteSiteIdArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StartPageAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type StartPageAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type StartPageFacet = {
  __typename?: 'StartPageFacet';
  Ancestors?: Maybe<Array<Maybe<StringFacet>>>;
  Category?: Maybe<CategoryModelFacet>;
  Changed?: Maybe<Array<Maybe<DateFacet>>>;
  ContentLink?: Maybe<ContentModelReferenceFacet>;
  ContentType?: Maybe<Array<Maybe<StringFacet>>>;
  Created?: Maybe<Array<Maybe<DateFacet>>>;
  ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
  FooterNavigationContentArea?: Maybe<ContentAreaItemModelSearchFacet>;
  FooterNavigationCopyrightText?: Maybe<Array<Maybe<StringFacet>>>;
  FooterNavigationSubLinks?: Maybe<LinkItemNodeFacet>;
  HomePageHeroContentArea?: Maybe<ContentAreaItemModelFacet>;
  HomePageMainContentArea?: Maybe<ContentAreaItemModelFacet>;
  IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
  Language?: Maybe<ContentLanguageModelFacet>;
  MainNavigationContentArea?: Maybe<ContentAreaItemModelFacet>;
  MasterLanguage?: Maybe<ContentLanguageModelFacet>;
  Name?: Maybe<Array<Maybe<StringFacet>>>;
  ParentLink?: Maybe<ContentModelReferenceFacet>;
  RelativePath?: Maybe<Array<Maybe<StringFacet>>>;
  RouteSegment?: Maybe<Array<Maybe<StringFacet>>>;
  Saved?: Maybe<Array<Maybe<DateFacet>>>;
  SiteId?: Maybe<Array<Maybe<StringFacet>>>;
  SiteImageLogo?: Maybe<ContentModelReferenceFacet>;
  StartPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Status?: Maybe<Array<Maybe<StringFacet>>>;
  StopPublish?: Maybe<Array<Maybe<DateFacet>>>;
  Url?: Maybe<Array<Maybe<StringFacet>>>;
  UtilityNavigationContentArea?: Maybe<ContentAreaItemModelFacet>;
};


export type StartPageFacetAncestorsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StartPageFacetChangedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type StartPageFacetContentTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StartPageFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type StartPageFacetFooterNavigationCopyrightTextArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StartPageFacetIsCommonDraftArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StartPageFacetNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StartPageFacetRelativePathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StartPageFacetRouteSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StartPageFacetSavedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type StartPageFacetSiteIdArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StartPageFacetStartPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type StartPageFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type StartPageFacetStopPublishArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type StartPageFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type StartPageOrderByInput = {
  Ancestors?: InputMaybe<OrderBy>;
  Category?: InputMaybe<CategoryModelOrderByInput>;
  Changed?: InputMaybe<OrderBy>;
  ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  ContentType?: InputMaybe<OrderBy>;
  Created?: InputMaybe<OrderBy>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
  FooterNavigationContentArea?: InputMaybe<ContentAreaItemModelSearchOrderByInput>;
  FooterNavigationCopyrightText?: InputMaybe<OrderBy>;
  FooterNavigationSubLinks?: InputMaybe<LinkItemNodeOrderByInput>;
  HomePageHeroContentArea?: InputMaybe<ContentAreaItemModelOrderByInput>;
  HomePageMainContentArea?: InputMaybe<ContentAreaItemModelOrderByInput>;
  IsCommonDraft?: InputMaybe<OrderBy>;
  Language?: InputMaybe<ContentLanguageModelOrderByInput>;
  MainNavigationContentArea?: InputMaybe<ContentAreaItemModelOrderByInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelOrderByInput>;
  Name?: InputMaybe<OrderBy>;
  ParentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
  RelativePath?: InputMaybe<OrderBy>;
  RouteSegment?: InputMaybe<OrderBy>;
  Saved?: InputMaybe<OrderBy>;
  SiteId?: InputMaybe<OrderBy>;
  SiteImageLogo?: InputMaybe<ContentModelReferenceOrderByInput>;
  StartPublish?: InputMaybe<OrderBy>;
  Status?: InputMaybe<OrderBy>;
  StopPublish?: InputMaybe<OrderBy>;
  Url?: InputMaybe<OrderBy>;
  UtilityNavigationContentArea?: InputMaybe<ContentAreaItemModelOrderByInput>;
  _ranking?: InputMaybe<Ranking>;
};

export type StartPageOutput = {
  __typename?: 'StartPageOutput';
  autocomplete?: Maybe<StartPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<StartPageFacet>;
  items?: Maybe<Array<Maybe<StartPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type StartPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StartPageWhereInput = {
  Ancestors?: InputMaybe<StringFilterInput>;
  Category?: InputMaybe<CategoryModelWhereInput>;
  Changed?: InputMaybe<DateFilterInput>;
  ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  ContentType?: InputMaybe<StringFilterInput>;
  Created?: InputMaybe<DateFilterInput>;
  ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
  FooterNavigationContentArea?: InputMaybe<ContentAreaItemModelSearchWhereInput>;
  FooterNavigationCopyrightText?: InputMaybe<StringFilterInput>;
  FooterNavigationSubLinks?: InputMaybe<LinkItemNodeWhereInput>;
  HomePageHeroContentArea?: InputMaybe<ContentAreaItemModelWhereInput>;
  HomePageMainContentArea?: InputMaybe<ContentAreaItemModelWhereInput>;
  IsCommonDraft?: InputMaybe<BoolFilterInput>;
  Language?: InputMaybe<ContentLanguageModelWhereInput>;
  MainNavigationContentArea?: InputMaybe<ContentAreaItemModelWhereInput>;
  MasterLanguage?: InputMaybe<ContentLanguageModelWhereInput>;
  Name?: InputMaybe<SearchableStringFilterInput>;
  ParentLink?: InputMaybe<ContentModelReferenceWhereInput>;
  RelativePath?: InputMaybe<StringFilterInput>;
  RouteSegment?: InputMaybe<StringFilterInput>;
  Saved?: InputMaybe<DateFilterInput>;
  SiteId?: InputMaybe<StringFilterInput>;
  SiteImageLogo?: InputMaybe<ContentModelReferenceWhereInput>;
  StartPublish?: InputMaybe<DateFilterInput>;
  Status?: InputMaybe<StringFilterInput>;
  StopPublish?: InputMaybe<DateFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  UtilityNavigationContentArea?: InputMaybe<ContentAreaItemModelWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
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
  TextBlockDescription?: Maybe<Scalars['String']['output']>;
  TextBlockHeading?: Maybe<Scalars['String']['output']>;
  TextBlockHeadingSize?: Maybe<Scalars['String']['output']>;
  TextBlockOverline?: Maybe<Scalars['String']['output']>;
  TextBlockWidth?: Maybe<Scalars['String']['output']>;
  TextCenter?: Maybe<Scalars['Bool']['output']>;
  TextClassName?: Maybe<Scalars['String']['output']>;
  Url?: Maybe<Scalars['String']['output']>;
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


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
  Status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  TextBlockHeadingSize?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  TextBlockWidth?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  TextClassName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
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


export type TextBlockAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type TextBlockAutocompleteTextBlockHeadingSizeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type TextBlockAutocompleteTextBlockWidthArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type TextBlockAutocompleteTextClassNameArgs = {
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
  TextBlockDescription?: Maybe<Array<Maybe<StringFacet>>>;
  TextBlockHeading?: Maybe<Array<Maybe<StringFacet>>>;
  TextBlockHeadingSize?: Maybe<Array<Maybe<StringFacet>>>;
  TextBlockOverline?: Maybe<Array<Maybe<StringFacet>>>;
  TextBlockWidth?: Maybe<Array<Maybe<StringFacet>>>;
  TextCenter?: Maybe<Array<Maybe<StringFacet>>>;
  TextClassName?: Maybe<Array<Maybe<StringFacet>>>;
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


export type TextBlockFacetTextBlockDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextBlockFacetTextBlockHeadingArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextBlockFacetTextBlockHeadingSizeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextBlockFacetTextBlockOverlineArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextBlockFacetTextBlockWidthArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextBlockFacetTextCenterArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type TextBlockFacetTextClassNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
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
  TextBlockDescription?: InputMaybe<OrderBy>;
  TextBlockHeading?: InputMaybe<OrderBy>;
  TextBlockHeadingSize?: InputMaybe<OrderBy>;
  TextBlockOverline?: InputMaybe<OrderBy>;
  TextBlockWidth?: InputMaybe<OrderBy>;
  TextCenter?: InputMaybe<OrderBy>;
  TextClassName?: InputMaybe<OrderBy>;
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
  TextBlockDescription?: InputMaybe<SearchableStringFilterInput>;
  TextBlockHeading?: InputMaybe<SearchableStringFilterInput>;
  TextBlockHeadingSize?: InputMaybe<StringFilterInput>;
  TextBlockOverline?: InputMaybe<SearchableStringFilterInput>;
  TextBlockWidth?: InputMaybe<StringFilterInput>;
  TextCenter?: InputMaybe<BoolFilterInput>;
  TextClassName?: InputMaybe<StringFilterInput>;
  Url?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
};

export enum System_Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL'
}

export type FooterNavigationNewQueryVariables = Exact<{
  locale?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type FooterNavigationNewQuery = { __typename?: 'Query', menuItems?: { __typename?: 'StartPageOutput', items?: Array<{ __typename?: 'StartPage', footerCopyright?: string | null, footerSubLinks?: Array<{ __typename?: 'LinkItemNode', url?: string | null, text?: string | null } | null> | null, footerNavigation?: Array<{ __typename?: 'ContentAreaItemModelSearch', contentLink?: { __typename?: 'ContentModelReferenceSearch', navigationItem?: (
            { __typename?: 'BlogListingPage' }
            & { ' $fragmentRefs'?: { 'FooterNavigationBlock_BlogListingPage_Fragment': FooterNavigationBlock_BlogListingPage_Fragment } }
          ) | (
            { __typename?: 'BlogPostPage' }
            & { ' $fragmentRefs'?: { 'FooterNavigationBlock_BlogPostPage_Fragment': FooterNavigationBlock_BlogPostPage_Fragment } }
          ) | (
            { __typename?: 'ButtonBlock' }
            & { ' $fragmentRefs'?: { 'FooterNavigationBlock_ButtonBlock_Fragment': FooterNavigationBlock_ButtonBlock_Fragment } }
          ) | (
            { __typename?: 'CardBlock' }
            & { ' $fragmentRefs'?: { 'FooterNavigationBlock_CardBlock_Fragment': FooterNavigationBlock_CardBlock_Fragment } }
          ) | (
            { __typename?: 'CarouselBlock' }
            & { ' $fragmentRefs'?: { 'FooterNavigationBlock_CarouselBlock_Fragment': FooterNavigationBlock_CarouselBlock_Fragment } }
          ) | (
            { __typename?: 'ContainerPage' }
            & { ' $fragmentRefs'?: { 'FooterNavigationBlock_ContainerPage_Fragment': FooterNavigationBlock_ContainerPage_Fragment } }
          ) | (
            { __typename?: 'Content' }
            & { ' $fragmentRefs'?: { 'FooterNavigationBlock_Content_Fragment': FooterNavigationBlock_Content_Fragment } }
          ) | (
            { __typename?: 'DAMAsset' }
            & { ' $fragmentRefs'?: { 'FooterNavigationBlock_DamAsset_Fragment': FooterNavigationBlock_DamAsset_Fragment } }
          ) | (
            { __typename?: 'DAMImageAsset' }
            & { ' $fragmentRefs'?: { 'FooterNavigationBlock_DamImageAsset_Fragment': FooterNavigationBlock_DamImageAsset_Fragment } }
          ) | (
            { __typename?: 'DAMVideoAsset' }
            & { ' $fragmentRefs'?: { 'FooterNavigationBlock_DamVideoAsset_Fragment': FooterNavigationBlock_DamVideoAsset_Fragment } }
          ) | (
            { __typename?: 'HeroBlock' }
            & { ' $fragmentRefs'?: { 'FooterNavigationBlock_HeroBlock_Fragment': FooterNavigationBlock_HeroBlock_Fragment } }
          ) | (
            { __typename?: 'HomePageHeroBlock' }
            & { ' $fragmentRefs'?: { 'FooterNavigationBlock_HomePageHeroBlock_Fragment': FooterNavigationBlock_HomePageHeroBlock_Fragment } }
          ) | (
            { __typename?: 'HtmlBlock' }
            & { ' $fragmentRefs'?: { 'FooterNavigationBlock_HtmlBlock_Fragment': FooterNavigationBlock_HtmlBlock_Fragment } }
          ) | (
            { __typename?: 'LayoutContainerBlock' }
            & { ' $fragmentRefs'?: { 'FooterNavigationBlock_LayoutContainerBlock_Fragment': FooterNavigationBlock_LayoutContainerBlock_Fragment } }
          ) | (
            { __typename?: 'MegaMenuGroupBlock' }
            & { ' $fragmentRefs'?: { 'FooterNavigationBlock_MegaMenuGroupBlock_Fragment': FooterNavigationBlock_MegaMenuGroupBlock_Fragment } }
          ) | (
            { __typename?: 'MenuNavigationBlock' }
            & { ' $fragmentRefs'?: { 'FooterNavigationBlock_MenuNavigationBlock_Fragment': FooterNavigationBlock_MenuNavigationBlock_Fragment } }
          ) | (
            { __typename?: 'QuoteBlock' }
            & { ' $fragmentRefs'?: { 'FooterNavigationBlock_QuoteBlock_Fragment': FooterNavigationBlock_QuoteBlock_Fragment } }
          ) | (
            { __typename?: 'StandardPage' }
            & { ' $fragmentRefs'?: { 'FooterNavigationBlock_StandardPage_Fragment': FooterNavigationBlock_StandardPage_Fragment } }
          ) | (
            { __typename?: 'StartPage' }
            & { ' $fragmentRefs'?: { 'FooterNavigationBlock_StartPage_Fragment': FooterNavigationBlock_StartPage_Fragment } }
          ) | (
            { __typename?: 'TextBlock' }
            & { ' $fragmentRefs'?: { 'FooterNavigationBlock_TextBlock_Fragment': FooterNavigationBlock_TextBlock_Fragment } }
          ) | null } | null } | null> | null } | null> | null } | null };

type FooterNavigationBlock_BlogListingPage_Fragment = { __typename?: 'BlogListingPage' } & { ' $fragmentName'?: 'FooterNavigationBlock_BlogListingPage_Fragment' };

type FooterNavigationBlock_BlogPostPage_Fragment = { __typename?: 'BlogPostPage' } & { ' $fragmentName'?: 'FooterNavigationBlock_BlogPostPage_Fragment' };

type FooterNavigationBlock_ButtonBlock_Fragment = { __typename?: 'ButtonBlock' } & { ' $fragmentName'?: 'FooterNavigationBlock_ButtonBlock_Fragment' };

type FooterNavigationBlock_CardBlock_Fragment = { __typename?: 'CardBlock' } & { ' $fragmentName'?: 'FooterNavigationBlock_CardBlock_Fragment' };

type FooterNavigationBlock_CarouselBlock_Fragment = { __typename?: 'CarouselBlock' } & { ' $fragmentName'?: 'FooterNavigationBlock_CarouselBlock_Fragment' };

type FooterNavigationBlock_ContainerPage_Fragment = { __typename?: 'ContainerPage' } & { ' $fragmentName'?: 'FooterNavigationBlock_ContainerPage_Fragment' };

type FooterNavigationBlock_Content_Fragment = { __typename?: 'Content' } & { ' $fragmentName'?: 'FooterNavigationBlock_Content_Fragment' };

type FooterNavigationBlock_DamAsset_Fragment = { __typename?: 'DAMAsset' } & { ' $fragmentName'?: 'FooterNavigationBlock_DamAsset_Fragment' };

type FooterNavigationBlock_DamImageAsset_Fragment = { __typename?: 'DAMImageAsset' } & { ' $fragmentName'?: 'FooterNavigationBlock_DamImageAsset_Fragment' };

type FooterNavigationBlock_DamVideoAsset_Fragment = { __typename?: 'DAMVideoAsset' } & { ' $fragmentName'?: 'FooterNavigationBlock_DamVideoAsset_Fragment' };

type FooterNavigationBlock_HeroBlock_Fragment = { __typename?: 'HeroBlock' } & { ' $fragmentName'?: 'FooterNavigationBlock_HeroBlock_Fragment' };

type FooterNavigationBlock_HomePageHeroBlock_Fragment = { __typename?: 'HomePageHeroBlock' } & { ' $fragmentName'?: 'FooterNavigationBlock_HomePageHeroBlock_Fragment' };

type FooterNavigationBlock_HtmlBlock_Fragment = (
  { __typename?: 'HtmlBlock' }
  & { ' $fragmentRefs'?: { 'HtmlBlockFragment': HtmlBlockFragment } }
) & { ' $fragmentName'?: 'FooterNavigationBlock_HtmlBlock_Fragment' };

type FooterNavigationBlock_LayoutContainerBlock_Fragment = { __typename?: 'LayoutContainerBlock' } & { ' $fragmentName'?: 'FooterNavigationBlock_LayoutContainerBlock_Fragment' };

type FooterNavigationBlock_MegaMenuGroupBlock_Fragment = { __typename?: 'MegaMenuGroupBlock' } & { ' $fragmentName'?: 'FooterNavigationBlock_MegaMenuGroupBlock_Fragment' };

type FooterNavigationBlock_MenuNavigationBlock_Fragment = (
  { __typename?: 'MenuNavigationBlock' }
  & { ' $fragmentRefs'?: { 'FooterMenuNavigationItemFragment': FooterMenuNavigationItemFragment } }
) & { ' $fragmentName'?: 'FooterNavigationBlock_MenuNavigationBlock_Fragment' };

type FooterNavigationBlock_QuoteBlock_Fragment = { __typename?: 'QuoteBlock' } & { ' $fragmentName'?: 'FooterNavigationBlock_QuoteBlock_Fragment' };

type FooterNavigationBlock_StandardPage_Fragment = { __typename?: 'StandardPage' } & { ' $fragmentName'?: 'FooterNavigationBlock_StandardPage_Fragment' };

type FooterNavigationBlock_StartPage_Fragment = { __typename?: 'StartPage' } & { ' $fragmentName'?: 'FooterNavigationBlock_StartPage_Fragment' };

type FooterNavigationBlock_TextBlock_Fragment = { __typename?: 'TextBlock' } & { ' $fragmentName'?: 'FooterNavigationBlock_TextBlock_Fragment' };

export type FooterNavigationBlockFragment = FooterNavigationBlock_BlogListingPage_Fragment | FooterNavigationBlock_BlogPostPage_Fragment | FooterNavigationBlock_ButtonBlock_Fragment | FooterNavigationBlock_CardBlock_Fragment | FooterNavigationBlock_CarouselBlock_Fragment | FooterNavigationBlock_ContainerPage_Fragment | FooterNavigationBlock_Content_Fragment | FooterNavigationBlock_DamAsset_Fragment | FooterNavigationBlock_DamImageAsset_Fragment | FooterNavigationBlock_DamVideoAsset_Fragment | FooterNavigationBlock_HeroBlock_Fragment | FooterNavigationBlock_HomePageHeroBlock_Fragment | FooterNavigationBlock_HtmlBlock_Fragment | FooterNavigationBlock_LayoutContainerBlock_Fragment | FooterNavigationBlock_MegaMenuGroupBlock_Fragment | FooterNavigationBlock_MenuNavigationBlock_Fragment | FooterNavigationBlock_QuoteBlock_Fragment | FooterNavigationBlock_StandardPage_Fragment | FooterNavigationBlock_StartPage_Fragment | FooterNavigationBlock_TextBlock_Fragment;

export type HtmlBlockFragment = { __typename?: 'HtmlBlock', title?: string | null, content?: string | null } & { ' $fragmentName'?: 'HtmlBlockFragment' };

export type FooterMenuNavigationItemFragment = { __typename?: 'MenuNavigationBlock', title?: string | null, items?: Array<{ __typename?: 'LinkItemNode', url?: string | null, title?: string | null, target?: string | null, text?: string | null } | null> | null } & { ' $fragmentName'?: 'FooterMenuNavigationItemFragment' };

export type NavigationsQueryVariables = Exact<{
  locale?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type NavigationsQuery = { __typename?: 'Query', menuItems?: { __typename?: 'StartPageOutput', items?: Array<{ __typename?: 'StartPage', headerNavigation?: Array<{ __typename?: 'ContentAreaItemModel', contentLink?: { __typename?: 'ContentModelReference', navigationItem?: { __typename?: 'BlogListingPage' } | { __typename?: 'BlogPostPage' } | { __typename?: 'ButtonBlock' } | { __typename?: 'CardBlock' } | { __typename?: 'CarouselBlock' } | { __typename?: 'ContainerPage' } | { __typename?: 'Content' } | { __typename?: 'DAMAsset' } | { __typename?: 'DAMImageAsset' } | { __typename?: 'DAMVideoAsset' } | { __typename?: 'HeroBlock' } | { __typename?: 'HomePageHeroBlock' } | { __typename?: 'HtmlBlock' } | { __typename?: 'LayoutContainerBlock' } | (
            { __typename?: 'MegaMenuGroupBlock' }
            & { ' $fragmentRefs'?: { 'MegaMenuItemFragment': MegaMenuItemFragment } }
          ) | { __typename?: 'MenuNavigationBlock' } | { __typename?: 'QuoteBlock' } | { __typename?: 'StandardPage' } | { __typename?: 'StartPage' } | { __typename?: 'TextBlock' } | null } | null } | null> | null, UtilityNavigationContentArea?: Array<{ __typename?: 'ContentAreaItemModel', ContentLink?: { __typename?: 'ContentModelReference', navigationItem?: (
            { __typename?: 'BlogListingPage' }
            & { ' $fragmentRefs'?: { 'Block_BlogListingPage_Fragment': Block_BlogListingPage_Fragment } }
          ) | (
            { __typename?: 'BlogPostPage' }
            & { ' $fragmentRefs'?: { 'Block_BlogPostPage_Fragment': Block_BlogPostPage_Fragment } }
          ) | (
            { __typename?: 'ButtonBlock' }
            & { ' $fragmentRefs'?: { 'Block_ButtonBlock_Fragment': Block_ButtonBlock_Fragment } }
          ) | (
            { __typename?: 'CardBlock' }
            & { ' $fragmentRefs'?: { 'Block_CardBlock_Fragment': Block_CardBlock_Fragment } }
          ) | (
            { __typename?: 'CarouselBlock' }
            & { ' $fragmentRefs'?: { 'Block_CarouselBlock_Fragment': Block_CarouselBlock_Fragment } }
          ) | (
            { __typename?: 'ContainerPage' }
            & { ' $fragmentRefs'?: { 'Block_ContainerPage_Fragment': Block_ContainerPage_Fragment } }
          ) | (
            { __typename?: 'Content' }
            & { ' $fragmentRefs'?: { 'Block_Content_Fragment': Block_Content_Fragment } }
          ) | (
            { __typename?: 'DAMAsset' }
            & { ' $fragmentRefs'?: { 'Block_DamAsset_Fragment': Block_DamAsset_Fragment } }
          ) | (
            { __typename?: 'DAMImageAsset' }
            & { ' $fragmentRefs'?: { 'Block_DamImageAsset_Fragment': Block_DamImageAsset_Fragment } }
          ) | (
            { __typename?: 'DAMVideoAsset' }
            & { ' $fragmentRefs'?: { 'Block_DamVideoAsset_Fragment': Block_DamVideoAsset_Fragment } }
          ) | (
            { __typename?: 'HeroBlock' }
            & { ' $fragmentRefs'?: { 'Block_HeroBlock_Fragment': Block_HeroBlock_Fragment } }
          ) | (
            { __typename?: 'HomePageHeroBlock' }
            & { ' $fragmentRefs'?: { 'Block_HomePageHeroBlock_Fragment': Block_HomePageHeroBlock_Fragment } }
          ) | (
            { __typename?: 'HtmlBlock' }
            & { ' $fragmentRefs'?: { 'Block_HtmlBlock_Fragment': Block_HtmlBlock_Fragment } }
          ) | (
            { __typename?: 'LayoutContainerBlock' }
            & { ' $fragmentRefs'?: { 'Block_LayoutContainerBlock_Fragment': Block_LayoutContainerBlock_Fragment } }
          ) | (
            { __typename?: 'MegaMenuGroupBlock' }
            & { ' $fragmentRefs'?: { 'Block_MegaMenuGroupBlock_Fragment': Block_MegaMenuGroupBlock_Fragment } }
          ) | (
            { __typename?: 'MenuNavigationBlock' }
            & { ' $fragmentRefs'?: { 'Block_MenuNavigationBlock_Fragment': Block_MenuNavigationBlock_Fragment } }
          ) | (
            { __typename?: 'QuoteBlock' }
            & { ' $fragmentRefs'?: { 'Block_QuoteBlock_Fragment': Block_QuoteBlock_Fragment } }
          ) | (
            { __typename?: 'StandardPage' }
            & { ' $fragmentRefs'?: { 'Block_StandardPage_Fragment': Block_StandardPage_Fragment } }
          ) | (
            { __typename?: 'StartPage' }
            & { ' $fragmentRefs'?: { 'Block_StartPage_Fragment': Block_StartPage_Fragment } }
          ) | (
            { __typename?: 'TextBlock' }
            & { ' $fragmentRefs'?: { 'Block_TextBlock_Fragment': Block_TextBlock_Fragment } }
          ) | null } | null } | null> | null } | null> | null } | null };

export type MegaMenuItemFragment = { __typename?: 'MegaMenuGroupBlock', menuName?: string | null, menuData?: Array<{ __typename?: 'ContentAreaItemModel', contentLink?: { __typename?: 'ContentModelReference', menuList?: (
        { __typename?: 'BlogListingPage' }
        & { ' $fragmentRefs'?: { 'Block_BlogListingPage_Fragment': Block_BlogListingPage_Fragment } }
      ) | (
        { __typename?: 'BlogPostPage' }
        & { ' $fragmentRefs'?: { 'Block_BlogPostPage_Fragment': Block_BlogPostPage_Fragment } }
      ) | (
        { __typename?: 'ButtonBlock' }
        & { ' $fragmentRefs'?: { 'Block_ButtonBlock_Fragment': Block_ButtonBlock_Fragment } }
      ) | (
        { __typename?: 'CardBlock' }
        & { ' $fragmentRefs'?: { 'Block_CardBlock_Fragment': Block_CardBlock_Fragment } }
      ) | (
        { __typename?: 'CarouselBlock' }
        & { ' $fragmentRefs'?: { 'Block_CarouselBlock_Fragment': Block_CarouselBlock_Fragment } }
      ) | (
        { __typename?: 'ContainerPage' }
        & { ' $fragmentRefs'?: { 'Block_ContainerPage_Fragment': Block_ContainerPage_Fragment } }
      ) | (
        { __typename?: 'Content' }
        & { ' $fragmentRefs'?: { 'Block_Content_Fragment': Block_Content_Fragment } }
      ) | (
        { __typename?: 'DAMAsset' }
        & { ' $fragmentRefs'?: { 'Block_DamAsset_Fragment': Block_DamAsset_Fragment } }
      ) | (
        { __typename?: 'DAMImageAsset' }
        & { ' $fragmentRefs'?: { 'Block_DamImageAsset_Fragment': Block_DamImageAsset_Fragment } }
      ) | (
        { __typename?: 'DAMVideoAsset' }
        & { ' $fragmentRefs'?: { 'Block_DamVideoAsset_Fragment': Block_DamVideoAsset_Fragment } }
      ) | (
        { __typename?: 'HeroBlock' }
        & { ' $fragmentRefs'?: { 'Block_HeroBlock_Fragment': Block_HeroBlock_Fragment } }
      ) | (
        { __typename?: 'HomePageHeroBlock' }
        & { ' $fragmentRefs'?: { 'Block_HomePageHeroBlock_Fragment': Block_HomePageHeroBlock_Fragment } }
      ) | (
        { __typename?: 'HtmlBlock' }
        & { ' $fragmentRefs'?: { 'Block_HtmlBlock_Fragment': Block_HtmlBlock_Fragment } }
      ) | (
        { __typename?: 'LayoutContainerBlock' }
        & { ' $fragmentRefs'?: { 'Block_LayoutContainerBlock_Fragment': Block_LayoutContainerBlock_Fragment } }
      ) | (
        { __typename?: 'MegaMenuGroupBlock' }
        & { ' $fragmentRefs'?: { 'Block_MegaMenuGroupBlock_Fragment': Block_MegaMenuGroupBlock_Fragment } }
      ) | (
        { __typename?: 'MenuNavigationBlock' }
        & { ' $fragmentRefs'?: { 'Block_MenuNavigationBlock_Fragment': Block_MenuNavigationBlock_Fragment } }
      ) | (
        { __typename?: 'QuoteBlock' }
        & { ' $fragmentRefs'?: { 'Block_QuoteBlock_Fragment': Block_QuoteBlock_Fragment } }
      ) | (
        { __typename?: 'StandardPage' }
        & { ' $fragmentRefs'?: { 'Block_StandardPage_Fragment': Block_StandardPage_Fragment } }
      ) | (
        { __typename?: 'StartPage' }
        & { ' $fragmentRefs'?: { 'Block_StartPage_Fragment': Block_StartPage_Fragment } }
      ) | (
        { __typename?: 'TextBlock' }
        & { ' $fragmentRefs'?: { 'Block_TextBlock_Fragment': Block_TextBlock_Fragment } }
      ) | null } | null } | null> | null } & { ' $fragmentName'?: 'MegaMenuItemFragment' };

type Block_BlogListingPage_Fragment = { __typename?: 'BlogListingPage' } & { ' $fragmentName'?: 'Block_BlogListingPage_Fragment' };

type Block_BlogPostPage_Fragment = { __typename?: 'BlogPostPage' } & { ' $fragmentName'?: 'Block_BlogPostPage_Fragment' };

type Block_ButtonBlock_Fragment = (
  { __typename?: 'ButtonBlock' }
  & { ' $fragmentRefs'?: { 'ButtonFragment': ButtonFragment } }
) & { ' $fragmentName'?: 'Block_ButtonBlock_Fragment' };

type Block_CardBlock_Fragment = (
  { __typename?: 'CardBlock' }
  & { ' $fragmentRefs'?: { 'CardItemFragment': CardItemFragment } }
) & { ' $fragmentName'?: 'Block_CardBlock_Fragment' };

type Block_CarouselBlock_Fragment = { __typename?: 'CarouselBlock' } & { ' $fragmentName'?: 'Block_CarouselBlock_Fragment' };

type Block_ContainerPage_Fragment = { __typename?: 'ContainerPage' } & { ' $fragmentName'?: 'Block_ContainerPage_Fragment' };

type Block_Content_Fragment = { __typename?: 'Content' } & { ' $fragmentName'?: 'Block_Content_Fragment' };

type Block_DamAsset_Fragment = { __typename?: 'DAMAsset' } & { ' $fragmentName'?: 'Block_DamAsset_Fragment' };

type Block_DamImageAsset_Fragment = { __typename?: 'DAMImageAsset' } & { ' $fragmentName'?: 'Block_DamImageAsset_Fragment' };

type Block_DamVideoAsset_Fragment = { __typename?: 'DAMVideoAsset' } & { ' $fragmentName'?: 'Block_DamVideoAsset_Fragment' };

type Block_HeroBlock_Fragment = { __typename?: 'HeroBlock' } & { ' $fragmentName'?: 'Block_HeroBlock_Fragment' };

type Block_HomePageHeroBlock_Fragment = { __typename?: 'HomePageHeroBlock' } & { ' $fragmentName'?: 'Block_HomePageHeroBlock_Fragment' };

type Block_HtmlBlock_Fragment = { __typename?: 'HtmlBlock' } & { ' $fragmentName'?: 'Block_HtmlBlock_Fragment' };

type Block_LayoutContainerBlock_Fragment = { __typename?: 'LayoutContainerBlock' } & { ' $fragmentName'?: 'Block_LayoutContainerBlock_Fragment' };

type Block_MegaMenuGroupBlock_Fragment = { __typename?: 'MegaMenuGroupBlock' } & { ' $fragmentName'?: 'Block_MegaMenuGroupBlock_Fragment' };

type Block_MenuNavigationBlock_Fragment = (
  { __typename?: 'MenuNavigationBlock' }
  & { ' $fragmentRefs'?: { 'MenuNavigationItemFragment': MenuNavigationItemFragment } }
) & { ' $fragmentName'?: 'Block_MenuNavigationBlock_Fragment' };

type Block_QuoteBlock_Fragment = { __typename?: 'QuoteBlock' } & { ' $fragmentName'?: 'Block_QuoteBlock_Fragment' };

type Block_StandardPage_Fragment = { __typename?: 'StandardPage' } & { ' $fragmentName'?: 'Block_StandardPage_Fragment' };

type Block_StartPage_Fragment = { __typename?: 'StartPage' } & { ' $fragmentName'?: 'Block_StartPage_Fragment' };

type Block_TextBlock_Fragment = { __typename?: 'TextBlock' } & { ' $fragmentName'?: 'Block_TextBlock_Fragment' };

export type BlockFragment = Block_BlogListingPage_Fragment | Block_BlogPostPage_Fragment | Block_ButtonBlock_Fragment | Block_CardBlock_Fragment | Block_CarouselBlock_Fragment | Block_ContainerPage_Fragment | Block_Content_Fragment | Block_DamAsset_Fragment | Block_DamImageAsset_Fragment | Block_DamVideoAsset_Fragment | Block_HeroBlock_Fragment | Block_HomePageHeroBlock_Fragment | Block_HtmlBlock_Fragment | Block_LayoutContainerBlock_Fragment | Block_MegaMenuGroupBlock_Fragment | Block_MenuNavigationBlock_Fragment | Block_QuoteBlock_Fragment | Block_StandardPage_Fragment | Block_StartPage_Fragment | Block_TextBlock_Fragment;

export type ButtonFragment = { __typename?: 'ButtonBlock', text?: string | null, url?: string | null, type?: string | null, variant?: string | null } & { ' $fragmentName'?: 'ButtonFragment' };

export type MenuNavigationItemFragment = { __typename?: 'MenuNavigationBlock', title?: string | null, items?: Array<{ __typename?: 'LinkItemNode', url?: string | null, title?: string | null, target?: string | null, text?: string | null } | null> | null } & { ' $fragmentName'?: 'MenuNavigationItemFragment' };

export type CardItemFragment = { __typename?: 'CardBlock', heading?: string | null, subheading?: string | null, description?: string | null, color?: string | null, image?: { __typename?: 'ContentModelReferenceSearch', src?: string | null } | null, link?: { __typename?: 'CardBlockBlockData', title?: string | null, url?: string | null } | null } & { ' $fragmentName'?: 'CardItemFragment' };

export type StartPageDataFragment = { __typename?: 'StartPage', HomePageHeroContentArea?: Array<{ __typename?: 'ContentAreaItemModel', ContentLink?: { __typename?: 'ContentModelReference', Expanded?: { __typename?: 'BlogListingPage', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'BlogPostPage', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'ButtonBlock', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'CardBlock', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'CarouselBlock', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'ContainerPage', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'Content', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'DAMAsset', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'DAMImageAsset', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'DAMVideoAsset', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'HeroBlock', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'HomePageHeroBlock', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'HtmlBlock', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'LayoutContainerBlock', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'MegaMenuGroupBlock', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'MenuNavigationBlock', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'QuoteBlock', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'StandardPage', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'StartPage', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'TextBlock', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | null } | null } | null> | null, HomePageMainContentArea?: Array<{ __typename?: 'ContentAreaItemModel', ContentLink?: { __typename?: 'ContentModelReference', Expanded?: { __typename?: 'BlogListingPage', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'BlogPostPage', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'ButtonBlock', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'CardBlock', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'CarouselBlock', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'ContainerPage', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'Content', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'DAMAsset', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'DAMImageAsset', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'DAMVideoAsset', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'HeroBlock', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'HomePageHeroBlock', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'HtmlBlock', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'LayoutContainerBlock', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'MegaMenuGroupBlock', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'MenuNavigationBlock', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'QuoteBlock', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'StandardPage', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'StartPage', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | { __typename?: 'TextBlock', _deleted?: any | null, _modified?: any | null, _score?: number | null, _id?: string | null, Name?: string | null, RouteSegment?: string | null, Url?: string | null, Changed?: any | null, Created?: any | null, StartPublish?: any | null, StopPublish?: any | null, Saved?: any | null, Status?: string | null, IsCommonDraft?: any | null, RelativePath?: string | null, SiteId?: string | null, ContentType?: Array<string | null> | null } | null } | null } | null> | null } & { ' $fragmentName'?: 'StartPageDataFragment' };

export type GetContentByPathBaseQueryVariables = Exact<{
  path: Scalars['String']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  siteId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetContentByPathBaseQuery = { __typename?: 'Query', Content?: { __typename?: 'ContentOutput', items?: Array<{ __typename?: 'BlogListingPage', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'BlogPostPage', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'ButtonBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'CardBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'CarouselBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'ContainerPage', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'Content', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'DAMAsset', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'DAMImageAsset', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'DAMVideoAsset', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'HeroBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'HomePageHeroBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'HtmlBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'LayoutContainerBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'MegaMenuGroupBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'MenuNavigationBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'QuoteBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'StandardPage', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'StartPage', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'TextBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | null> | null } | null };

export type GetGenericMetaDataQueryVariables = Exact<{
  path: Scalars['String']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  siteId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetGenericMetaDataQuery = { __typename?: 'Query', getGenericMetaData?: { __typename?: 'ContentOutput', items?: Array<{ __typename?: 'BlogListingPage', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'BlogPostPage', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'ButtonBlock', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'CardBlock', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'CarouselBlock', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'ContainerPage', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'Content', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'DAMAsset', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'DAMImageAsset', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'DAMVideoAsset', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'HeroBlock', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'HomePageHeroBlock', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'HtmlBlock', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'LayoutContainerBlock', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'MegaMenuGroupBlock', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'MenuNavigationBlock', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'QuoteBlock', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'StandardPage', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'StartPage', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | { __typename?: 'TextBlock', name?: string | null, canonical?: string | null, alternatives?: Array<{ __typename?: 'ContentLanguageModel', locale?: string | null, href?: string | null } | null> | null } | null> | null } | null };

export type GetContentByIdBaseQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
  workId?: InputMaybe<Scalars['Int']['input']>;
  guidValue?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<Locales> | Locales>;
  isCommonDraft?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetContentByIdBaseQuery = { __typename?: 'Query', Content?: { __typename?: 'ContentOutput', total?: number | null, items?: Array<{ __typename?: 'BlogListingPage', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'BlogPostPage', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'ButtonBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'CardBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'CarouselBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'ContainerPage', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'Content', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'DAMAsset', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'DAMImageAsset', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'DAMVideoAsset', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'HeroBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'HomePageHeroBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'HtmlBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'LayoutContainerBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'MegaMenuGroupBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'MenuNavigationBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'QuoteBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'StandardPage', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'StartPage', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | { __typename?: 'TextBlock', contentType?: Array<string | null> | null, path?: string | null, id?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } | null> | null } | null };

export type ContentLinkFragment = { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } & { ' $fragmentName'?: 'ContentLinkFragment' };

export type ContentLinkSearchFragment = { __typename?: 'ContentModelReferenceSearch', id?: number | null, workId?: number | null, guidValue?: string | null } & { ' $fragmentName'?: 'ContentLinkSearchFragment' };

type IContentData_BlogListingPage_Fragment = { __typename?: 'BlogListingPage', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_BlogListingPage_Fragment' };

type IContentData_BlogPostPage_Fragment = { __typename?: 'BlogPostPage', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_BlogPostPage_Fragment' };

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

type IContentData_ContainerPage_Fragment = { __typename?: 'ContainerPage', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_ContainerPage_Fragment' };

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

type IContentData_HeroBlock_Fragment = { __typename?: 'HeroBlock', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_HeroBlock_Fragment' };

type IContentData_HomePageHeroBlock_Fragment = { __typename?: 'HomePageHeroBlock', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_HomePageHeroBlock_Fragment' };

type IContentData_HtmlBlock_Fragment = { __typename?: 'HtmlBlock', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_HtmlBlock_Fragment' };

type IContentData_LayoutContainerBlock_Fragment = { __typename?: 'LayoutContainerBlock', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_LayoutContainerBlock_Fragment' };

type IContentData_MegaMenuGroupBlock_Fragment = { __typename?: 'MegaMenuGroupBlock', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_MegaMenuGroupBlock_Fragment' };

type IContentData_MenuNavigationBlock_Fragment = { __typename?: 'MenuNavigationBlock', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_MenuNavigationBlock_Fragment' };

type IContentData_QuoteBlock_Fragment = { __typename?: 'QuoteBlock', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_QuoteBlock_Fragment' };

type IContentData_StandardPage_Fragment = { __typename?: 'StandardPage', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_StandardPage_Fragment' };

type IContentData_StartPage_Fragment = { __typename?: 'StartPage', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_StartPage_Fragment' };

type IContentData_TextBlock_Fragment = { __typename?: 'TextBlock', contentType?: Array<string | null> | null, path?: string | null, id?: (
    { __typename?: 'ContentModelReference' }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null } & { ' $fragmentName'?: 'IContentData_TextBlock_Fragment' };

export type IContentDataFragment = IContentData_BlogListingPage_Fragment | IContentData_BlogPostPage_Fragment | IContentData_ButtonBlock_Fragment | IContentData_CardBlock_Fragment | IContentData_CarouselBlock_Fragment | IContentData_ContainerPage_Fragment | IContentData_Content_Fragment | IContentData_DamAsset_Fragment | IContentData_DamImageAsset_Fragment | IContentData_DamVideoAsset_Fragment | IContentData_HeroBlock_Fragment | IContentData_HomePageHeroBlock_Fragment | IContentData_HtmlBlock_Fragment | IContentData_LayoutContainerBlock_Fragment | IContentData_MegaMenuGroupBlock_Fragment | IContentData_MenuNavigationBlock_Fragment | IContentData_QuoteBlock_Fragment | IContentData_StandardPage_Fragment | IContentData_StartPage_Fragment | IContentData_TextBlock_Fragment;

export type ContentAreaItemDataFragment = { __typename?: 'ContentAreaItemModelSearch', displayOption?: string | null, item?: (
    { __typename?: 'ContentModelReferenceSearch', data?: (
      { __typename?: 'BlogListingPage' }
      & { ' $fragmentRefs'?: { 'BlockData_BlogListingPage_Fragment': BlockData_BlogListingPage_Fragment } }
    ) | (
      { __typename?: 'BlogPostPage' }
      & { ' $fragmentRefs'?: { 'BlockData_BlogPostPage_Fragment': BlockData_BlogPostPage_Fragment } }
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
      { __typename?: 'ContainerPage' }
      & { ' $fragmentRefs'?: { 'BlockData_ContainerPage_Fragment': BlockData_ContainerPage_Fragment } }
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
      { __typename?: 'HeroBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_HeroBlock_Fragment': BlockData_HeroBlock_Fragment } }
    ) | (
      { __typename?: 'HomePageHeroBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_HomePageHeroBlock_Fragment': BlockData_HomePageHeroBlock_Fragment } }
    ) | (
      { __typename?: 'HtmlBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_HtmlBlock_Fragment': BlockData_HtmlBlock_Fragment } }
    ) | (
      { __typename?: 'LayoutContainerBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_LayoutContainerBlock_Fragment': BlockData_LayoutContainerBlock_Fragment } }
    ) | (
      { __typename?: 'MegaMenuGroupBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_MegaMenuGroupBlock_Fragment': BlockData_MegaMenuGroupBlock_Fragment } }
    ) | (
      { __typename?: 'MenuNavigationBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_MenuNavigationBlock_Fragment': BlockData_MenuNavigationBlock_Fragment } }
    ) | (
      { __typename?: 'QuoteBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_QuoteBlock_Fragment': BlockData_QuoteBlock_Fragment } }
    ) | (
      { __typename?: 'StandardPage' }
      & { ' $fragmentRefs'?: { 'BlockData_StandardPage_Fragment': BlockData_StandardPage_Fragment } }
    ) | (
      { __typename?: 'StartPage' }
      & { ' $fragmentRefs'?: { 'BlockData_StartPage_Fragment': BlockData_StartPage_Fragment } }
    ) | (
      { __typename?: 'TextBlock' }
      & { ' $fragmentRefs'?: { 'BlockData_TextBlock_Fragment': BlockData_TextBlock_Fragment } }
    ) | null }
    & { ' $fragmentRefs'?: { 'ContentLinkSearchFragment': ContentLinkSearchFragment } }
  ) | null } & { ' $fragmentName'?: 'ContentAreaItemDataFragment' };

export type BlockContentAreaItemSearchDataFragment = { __typename?: 'ContentAreaItemModelSearch', displayOption?: string | null, item?: (
    { __typename?: 'ContentModelReferenceSearch', data?: (
      { __typename?: 'BlogListingPage' }
      & { ' $fragmentRefs'?: { 'IContentData_BlogListingPage_Fragment': IContentData_BlogListingPage_Fragment } }
    ) | (
      { __typename?: 'BlogPostPage' }
      & { ' $fragmentRefs'?: { 'IContentData_BlogPostPage_Fragment': IContentData_BlogPostPage_Fragment } }
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
      { __typename?: 'ContainerPage' }
      & { ' $fragmentRefs'?: { 'IContentData_ContainerPage_Fragment': IContentData_ContainerPage_Fragment } }
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
      { __typename?: 'HeroBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment } }
    ) | (
      { __typename?: 'HomePageHeroBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_HomePageHeroBlock_Fragment': IContentData_HomePageHeroBlock_Fragment } }
    ) | (
      { __typename?: 'HtmlBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_HtmlBlock_Fragment': IContentData_HtmlBlock_Fragment } }
    ) | (
      { __typename?: 'LayoutContainerBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_LayoutContainerBlock_Fragment': IContentData_LayoutContainerBlock_Fragment } }
    ) | (
      { __typename?: 'MegaMenuGroupBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment } }
    ) | (
      { __typename?: 'MenuNavigationBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_MenuNavigationBlock_Fragment': IContentData_MenuNavigationBlock_Fragment } }
    ) | (
      { __typename?: 'QuoteBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_QuoteBlock_Fragment': IContentData_QuoteBlock_Fragment } }
    ) | (
      { __typename?: 'StandardPage' }
      & { ' $fragmentRefs'?: { 'IContentData_StandardPage_Fragment': IContentData_StandardPage_Fragment } }
    ) | (
      { __typename?: 'StartPage' }
      & { ' $fragmentRefs'?: { 'IContentData_StartPage_Fragment': IContentData_StartPage_Fragment } }
    ) | (
      { __typename?: 'TextBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment } }
    ) | null }
    & { ' $fragmentRefs'?: { 'ContentLinkSearchFragment': ContentLinkSearchFragment } }
  ) | null } & { ' $fragmentName'?: 'BlockContentAreaItemSearchDataFragment' };

export type BlockContentAreaItemDataFragment = { __typename?: 'ContentAreaItemModel', displayOption?: string | null, item?: (
    { __typename?: 'ContentModelReference', data?: (
      { __typename?: 'BlogListingPage' }
      & { ' $fragmentRefs'?: { 'IContentData_BlogListingPage_Fragment': IContentData_BlogListingPage_Fragment } }
    ) | (
      { __typename?: 'BlogPostPage' }
      & { ' $fragmentRefs'?: { 'IContentData_BlogPostPage_Fragment': IContentData_BlogPostPage_Fragment } }
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
      { __typename?: 'ContainerPage' }
      & { ' $fragmentRefs'?: { 'IContentData_ContainerPage_Fragment': IContentData_ContainerPage_Fragment } }
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
      { __typename?: 'HeroBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment } }
    ) | (
      { __typename?: 'HomePageHeroBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_HomePageHeroBlock_Fragment': IContentData_HomePageHeroBlock_Fragment } }
    ) | (
      { __typename?: 'HtmlBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_HtmlBlock_Fragment': IContentData_HtmlBlock_Fragment } }
    ) | (
      { __typename?: 'LayoutContainerBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_LayoutContainerBlock_Fragment': IContentData_LayoutContainerBlock_Fragment } }
    ) | (
      { __typename?: 'MegaMenuGroupBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment } }
    ) | (
      { __typename?: 'MenuNavigationBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_MenuNavigationBlock_Fragment': IContentData_MenuNavigationBlock_Fragment } }
    ) | (
      { __typename?: 'QuoteBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_QuoteBlock_Fragment': IContentData_QuoteBlock_Fragment } }
    ) | (
      { __typename?: 'StandardPage' }
      & { ' $fragmentRefs'?: { 'IContentData_StandardPage_Fragment': IContentData_StandardPage_Fragment } }
    ) | (
      { __typename?: 'StartPage' }
      & { ' $fragmentRefs'?: { 'IContentData_StartPage_Fragment': IContentData_StartPage_Fragment } }
    ) | (
      { __typename?: 'TextBlock' }
      & { ' $fragmentRefs'?: { 'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment } }
    ) | null }
    & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
  ) | null } & { ' $fragmentName'?: 'BlockContentAreaItemDataFragment' };

export type LinkItemDataFragment = { __typename?: 'LinkItemNode', children?: string | null, title?: string | null, href?: string | null, target?: string | null, content?: { __typename?: 'ContentModelReference', href?: string | null, data?: { __typename?: 'BlogListingPage', path?: string | null } | { __typename?: 'BlogPostPage', path?: string | null } | { __typename?: 'ButtonBlock', path?: string | null } | { __typename?: 'CardBlock', path?: string | null } | { __typename?: 'CarouselBlock', path?: string | null } | { __typename?: 'ContainerPage', path?: string | null } | { __typename?: 'Content', path?: string | null } | { __typename?: 'DAMAsset', path?: string | null } | { __typename?: 'DAMImageAsset', path?: string | null } | { __typename?: 'DAMVideoAsset', path?: string | null } | { __typename?: 'HeroBlock', path?: string | null } | { __typename?: 'HomePageHeroBlock', path?: string | null } | { __typename?: 'HtmlBlock', path?: string | null } | { __typename?: 'LayoutContainerBlock', path?: string | null } | { __typename?: 'MegaMenuGroupBlock', path?: string | null } | { __typename?: 'MenuNavigationBlock', path?: string | null } | { __typename?: 'QuoteBlock', path?: string | null } | { __typename?: 'StandardPage', path?: string | null } | { __typename?: 'StartPage', path?: string | null } | { __typename?: 'TextBlock', path?: string | null } | null } | null } & { ' $fragmentName'?: 'LinkItemDataFragment' };

export type ImageDataFragment = (
  { __typename?: 'ContentModelReference', url?: string | null, data?: (
    { __typename?: 'BlogListingPage', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_BlogListingPage_Fragment': IContentData_BlogListingPage_Fragment } }
  ) | (
    { __typename?: 'BlogPostPage', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_BlogPostPage_Fragment': IContentData_BlogPostPage_Fragment } }
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
    { __typename?: 'ContainerPage', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_ContainerPage_Fragment': IContentData_ContainerPage_Fragment } }
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
    { __typename?: 'HeroBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment } }
  ) | (
    { __typename?: 'HomePageHeroBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_HomePageHeroBlock_Fragment': IContentData_HomePageHeroBlock_Fragment } }
  ) | (
    { __typename?: 'HtmlBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_HtmlBlock_Fragment': IContentData_HtmlBlock_Fragment } }
  ) | (
    { __typename?: 'LayoutContainerBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_LayoutContainerBlock_Fragment': IContentData_LayoutContainerBlock_Fragment } }
  ) | (
    { __typename?: 'MegaMenuGroupBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment } }
  ) | (
    { __typename?: 'MenuNavigationBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_MenuNavigationBlock_Fragment': IContentData_MenuNavigationBlock_Fragment } }
  ) | (
    { __typename?: 'QuoteBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_QuoteBlock_Fragment': IContentData_QuoteBlock_Fragment } }
  ) | (
    { __typename?: 'StandardPage', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_StandardPage_Fragment': IContentData_StandardPage_Fragment } }
  ) | (
    { __typename?: 'StartPage', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_StartPage_Fragment': IContentData_StartPage_Fragment } }
  ) | (
    { __typename?: 'TextBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment } }
  ) | null }
  & { ' $fragmentRefs'?: { 'ContentLinkFragment': ContentLinkFragment } }
) & { ' $fragmentName'?: 'ImageDataFragment' };

export type ImageDataSearchFragment = (
  { __typename?: 'ContentModelReferenceSearch', url?: string | null, data?: (
    { __typename?: 'BlogListingPage', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_BlogListingPage_Fragment': IContentData_BlogListingPage_Fragment } }
  ) | (
    { __typename?: 'BlogPostPage', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_BlogPostPage_Fragment': IContentData_BlogPostPage_Fragment } }
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
    { __typename?: 'ContainerPage', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_ContainerPage_Fragment': IContentData_ContainerPage_Fragment } }
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
    { __typename?: 'HeroBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment } }
  ) | (
    { __typename?: 'HomePageHeroBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_HomePageHeroBlock_Fragment': IContentData_HomePageHeroBlock_Fragment } }
  ) | (
    { __typename?: 'HtmlBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_HtmlBlock_Fragment': IContentData_HtmlBlock_Fragment } }
  ) | (
    { __typename?: 'LayoutContainerBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_LayoutContainerBlock_Fragment': IContentData_LayoutContainerBlock_Fragment } }
  ) | (
    { __typename?: 'MegaMenuGroupBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_MegaMenuGroupBlock_Fragment': IContentData_MegaMenuGroupBlock_Fragment } }
  ) | (
    { __typename?: 'MenuNavigationBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_MenuNavigationBlock_Fragment': IContentData_MenuNavigationBlock_Fragment } }
  ) | (
    { __typename?: 'QuoteBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_QuoteBlock_Fragment': IContentData_QuoteBlock_Fragment } }
  ) | (
    { __typename?: 'StandardPage', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_StandardPage_Fragment': IContentData_StandardPage_Fragment } }
  ) | (
    { __typename?: 'StartPage', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_StartPage_Fragment': IContentData_StartPage_Fragment } }
  ) | (
    { __typename?: 'TextBlock', url?: string | null, alt?: string | null, path?: string | null }
    & { ' $fragmentRefs'?: { 'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment } }
  ) | null }
  & { ' $fragmentRefs'?: { 'ContentLinkSearchFragment': ContentLinkSearchFragment } }
) & { ' $fragmentName'?: 'ImageDataSearchFragment' };

type BlockData_BlogListingPage_Fragment = (
  { __typename?: 'BlogListingPage' }
  & { ' $fragmentRefs'?: { 'IContentData_BlogListingPage_Fragment': IContentData_BlogListingPage_Fragment } }
) & { ' $fragmentName'?: 'BlockData_BlogListingPage_Fragment' };

type BlockData_BlogPostPage_Fragment = (
  { __typename?: 'BlogPostPage' }
  & { ' $fragmentRefs'?: { 'IContentData_BlogPostPage_Fragment': IContentData_BlogPostPage_Fragment } }
) & { ' $fragmentName'?: 'BlockData_BlogPostPage_Fragment' };

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

type BlockData_ContainerPage_Fragment = (
  { __typename?: 'ContainerPage' }
  & { ' $fragmentRefs'?: { 'IContentData_ContainerPage_Fragment': IContentData_ContainerPage_Fragment } }
) & { ' $fragmentName'?: 'BlockData_ContainerPage_Fragment' };

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

type BlockData_TextBlock_Fragment = (
  { __typename?: 'TextBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment } }
) & { ' $fragmentName'?: 'BlockData_TextBlock_Fragment' };

export type BlockDataFragment = BlockData_BlogListingPage_Fragment | BlockData_BlogPostPage_Fragment | BlockData_ButtonBlock_Fragment | BlockData_CardBlock_Fragment | BlockData_CarouselBlock_Fragment | BlockData_ContainerPage_Fragment | BlockData_Content_Fragment | BlockData_DamAsset_Fragment | BlockData_DamImageAsset_Fragment | BlockData_DamVideoAsset_Fragment | BlockData_HeroBlock_Fragment | BlockData_HomePageHeroBlock_Fragment | BlockData_HtmlBlock_Fragment | BlockData_LayoutContainerBlock_Fragment | BlockData_MegaMenuGroupBlock_Fragment | BlockData_MenuNavigationBlock_Fragment | BlockData_QuoteBlock_Fragment | BlockData_StandardPage_Fragment | BlockData_StartPage_Fragment | BlockData_TextBlock_Fragment;

type PageData_BlogListingPage_Fragment = (
  { __typename?: 'BlogListingPage' }
  & { ' $fragmentRefs'?: { 'IContentData_BlogListingPage_Fragment': IContentData_BlogListingPage_Fragment } }
) & { ' $fragmentName'?: 'PageData_BlogListingPage_Fragment' };

type PageData_BlogPostPage_Fragment = (
  { __typename?: 'BlogPostPage' }
  & { ' $fragmentRefs'?: { 'IContentData_BlogPostPage_Fragment': IContentData_BlogPostPage_Fragment } }
) & { ' $fragmentName'?: 'PageData_BlogPostPage_Fragment' };

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

type PageData_ContainerPage_Fragment = (
  { __typename?: 'ContainerPage' }
  & { ' $fragmentRefs'?: { 'IContentData_ContainerPage_Fragment': IContentData_ContainerPage_Fragment } }
) & { ' $fragmentName'?: 'PageData_ContainerPage_Fragment' };

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

type PageData_TextBlock_Fragment = (
  { __typename?: 'TextBlock' }
  & { ' $fragmentRefs'?: { 'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment } }
) & { ' $fragmentName'?: 'PageData_TextBlock_Fragment' };

export type PageDataFragment = PageData_BlogListingPage_Fragment | PageData_BlogPostPage_Fragment | PageData_ButtonBlock_Fragment | PageData_CardBlock_Fragment | PageData_CarouselBlock_Fragment | PageData_ContainerPage_Fragment | PageData_Content_Fragment | PageData_DamAsset_Fragment | PageData_DamImageAsset_Fragment | PageData_DamVideoAsset_Fragment | PageData_HeroBlock_Fragment | PageData_HomePageHeroBlock_Fragment | PageData_HtmlBlock_Fragment | PageData_LayoutContainerBlock_Fragment | PageData_MegaMenuGroupBlock_Fragment | PageData_MenuNavigationBlock_Fragment | PageData_QuoteBlock_Fragment | PageData_StandardPage_Fragment | PageData_StartPage_Fragment | PageData_TextBlock_Fragment;

export type ContentAreaItemBaseFragment = { __typename?: 'ContentAreaItemModelSearch', displayOption?: string | null, contentLink?: { __typename?: 'ContentModelReferenceSearch', id?: number | null, workId?: number | null, guidValue?: string | null, component?: { __typename?: 'BlogListingPage', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'BlogPostPage', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'ButtonBlock', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'CardBlock', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'CarouselBlock', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'ContainerPage', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'Content', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'DAMAsset', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'DAMImageAsset', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'DAMVideoAsset', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'HeroBlock', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'HomePageHeroBlock', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'HtmlBlock', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'LayoutContainerBlock', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'MegaMenuGroupBlock', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'MenuNavigationBlock', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'QuoteBlock', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'StandardPage', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'StartPage', path?: string | null, type?: Array<string | null> | null } | { __typename?: 'TextBlock', path?: string | null, type?: Array<string | null> | null } | null } | null } & { ' $fragmentName'?: 'ContentAreaItemBaseFragment' };

export type GetContentByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Int']['input']>;
  workId?: InputMaybe<Scalars['Int']['input']>;
  guidValue?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Array<Locales> | Locales>;
  isCommonDraft?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetContentByIdQuery = { __typename?: 'Query', Content?: { __typename?: 'ContentOutput', total?: number | null, items?: Array<(
      { __typename?: 'BlogListingPage' }
      & { ' $fragmentRefs'?: { 'PageData_BlogListingPage_Fragment': PageData_BlogListingPage_Fragment;'BlockData_BlogListingPage_Fragment': BlockData_BlogListingPage_Fragment } }
    ) | (
      { __typename?: 'BlogPostPage' }
      & { ' $fragmentRefs'?: { 'PageData_BlogPostPage_Fragment': PageData_BlogPostPage_Fragment;'BlockData_BlogPostPage_Fragment': BlockData_BlogPostPage_Fragment } }
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
      { __typename?: 'ContainerPage' }
      & { ' $fragmentRefs'?: { 'PageData_ContainerPage_Fragment': PageData_ContainerPage_Fragment;'BlockData_ContainerPage_Fragment': BlockData_ContainerPage_Fragment } }
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
      { __typename?: 'HeroBlock' }
      & { ' $fragmentRefs'?: { 'PageData_HeroBlock_Fragment': PageData_HeroBlock_Fragment;'BlockData_HeroBlock_Fragment': BlockData_HeroBlock_Fragment } }
    ) | (
      { __typename?: 'HomePageHeroBlock' }
      & { ' $fragmentRefs'?: { 'PageData_HomePageHeroBlock_Fragment': PageData_HomePageHeroBlock_Fragment;'BlockData_HomePageHeroBlock_Fragment': BlockData_HomePageHeroBlock_Fragment } }
    ) | (
      { __typename?: 'HtmlBlock' }
      & { ' $fragmentRefs'?: { 'PageData_HtmlBlock_Fragment': PageData_HtmlBlock_Fragment;'BlockData_HtmlBlock_Fragment': BlockData_HtmlBlock_Fragment } }
    ) | (
      { __typename?: 'LayoutContainerBlock' }
      & { ' $fragmentRefs'?: { 'PageData_LayoutContainerBlock_Fragment': PageData_LayoutContainerBlock_Fragment;'BlockData_LayoutContainerBlock_Fragment': BlockData_LayoutContainerBlock_Fragment } }
    ) | (
      { __typename?: 'MegaMenuGroupBlock' }
      & { ' $fragmentRefs'?: { 'PageData_MegaMenuGroupBlock_Fragment': PageData_MegaMenuGroupBlock_Fragment;'BlockData_MegaMenuGroupBlock_Fragment': BlockData_MegaMenuGroupBlock_Fragment } }
    ) | (
      { __typename?: 'MenuNavigationBlock' }
      & { ' $fragmentRefs'?: { 'PageData_MenuNavigationBlock_Fragment': PageData_MenuNavigationBlock_Fragment;'BlockData_MenuNavigationBlock_Fragment': BlockData_MenuNavigationBlock_Fragment } }
    ) | (
      { __typename?: 'QuoteBlock' }
      & { ' $fragmentRefs'?: { 'PageData_QuoteBlock_Fragment': PageData_QuoteBlock_Fragment;'BlockData_QuoteBlock_Fragment': BlockData_QuoteBlock_Fragment } }
    ) | (
      { __typename?: 'StandardPage' }
      & { ' $fragmentRefs'?: { 'PageData_StandardPage_Fragment': PageData_StandardPage_Fragment;'BlockData_StandardPage_Fragment': BlockData_StandardPage_Fragment } }
    ) | (
      { __typename?: 'StartPage' }
      & { ' $fragmentRefs'?: { 'PageData_StartPage_Fragment': PageData_StartPage_Fragment;'BlockData_StartPage_Fragment': BlockData_StartPage_Fragment } }
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
      { __typename?: 'BlogListingPage' }
      & { ' $fragmentRefs'?: { 'PageData_BlogListingPage_Fragment': PageData_BlogListingPage_Fragment } }
    ) | (
      { __typename?: 'BlogPostPage' }
      & { ' $fragmentRefs'?: { 'PageData_BlogPostPage_Fragment': PageData_BlogPostPage_Fragment } }
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
      { __typename?: 'ContainerPage' }
      & { ' $fragmentRefs'?: { 'PageData_ContainerPage_Fragment': PageData_ContainerPage_Fragment } }
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
      { __typename?: 'HeroBlock' }
      & { ' $fragmentRefs'?: { 'PageData_HeroBlock_Fragment': PageData_HeroBlock_Fragment } }
    ) | (
      { __typename?: 'HomePageHeroBlock' }
      & { ' $fragmentRefs'?: { 'PageData_HomePageHeroBlock_Fragment': PageData_HomePageHeroBlock_Fragment } }
    ) | (
      { __typename?: 'HtmlBlock' }
      & { ' $fragmentRefs'?: { 'PageData_HtmlBlock_Fragment': PageData_HtmlBlock_Fragment } }
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
      { __typename?: 'QuoteBlock' }
      & { ' $fragmentRefs'?: { 'PageData_QuoteBlock_Fragment': PageData_QuoteBlock_Fragment } }
    ) | (
      { __typename?: 'StandardPage' }
      & { ' $fragmentRefs'?: { 'PageData_StandardPage_Fragment': PageData_StandardPage_Fragment } }
    ) | (
      { __typename?: 'StartPage' }
      & { ' $fragmentRefs'?: { 'PageData_StartPage_Fragment': PageData_StartPage_Fragment } }
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


export type GetContentTypeQuery = { __typename?: 'Query', Content?: { __typename?: 'ContentOutput', total?: number | null, items?: Array<{ __typename?: 'BlogListingPage', ContentType?: Array<string | null> | null } | { __typename?: 'BlogPostPage', ContentType?: Array<string | null> | null } | { __typename?: 'ButtonBlock', ContentType?: Array<string | null> | null } | { __typename?: 'CardBlock', ContentType?: Array<string | null> | null } | { __typename?: 'CarouselBlock', ContentType?: Array<string | null> | null } | { __typename?: 'ContainerPage', ContentType?: Array<string | null> | null } | { __typename?: 'Content', ContentType?: Array<string | null> | null } | { __typename?: 'DAMAsset', ContentType?: Array<string | null> | null } | { __typename?: 'DAMImageAsset', ContentType?: Array<string | null> | null } | { __typename?: 'DAMVideoAsset', ContentType?: Array<string | null> | null } | { __typename?: 'HeroBlock', ContentType?: Array<string | null> | null } | { __typename?: 'HomePageHeroBlock', ContentType?: Array<string | null> | null } | { __typename?: 'HtmlBlock', ContentType?: Array<string | null> | null } | { __typename?: 'LayoutContainerBlock', ContentType?: Array<string | null> | null } | { __typename?: 'MegaMenuGroupBlock', ContentType?: Array<string | null> | null } | { __typename?: 'MenuNavigationBlock', ContentType?: Array<string | null> | null } | { __typename?: 'QuoteBlock', ContentType?: Array<string | null> | null } | { __typename?: 'StandardPage', ContentType?: Array<string | null> | null } | { __typename?: 'StartPage', ContentType?: Array<string | null> | null } | { __typename?: 'TextBlock', ContentType?: Array<string | null> | null } | null> | null } | null };

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


export type GetAllRoutesQuery = { __typename?: 'Query', Content?: { __typename?: 'ContentOutput', cursor?: string | null, total?: number | null, items?: Array<{ __typename?: 'BlogListingPage', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'BlogPostPage', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'ButtonBlock', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'CardBlock', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'CarouselBlock', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'ContainerPage', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'Content', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'DAMAsset', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'DAMImageAsset', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'DAMVideoAsset', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'HeroBlock', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'HomePageHeroBlock', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'HtmlBlock', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'LayoutContainerBlock', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'MegaMenuGroupBlock', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'MenuNavigationBlock', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'QuoteBlock', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'StandardPage', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'StartPage', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'TextBlock', path?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, url?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | null> | null } | null };

export type GetRouteByPathQueryVariables = Exact<{
  path: Scalars['String']['input'];
  siteId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetRouteByPathQuery = { __typename?: 'Query', Content?: { __typename?: 'ContentOutput', total?: number | null, items?: Array<{ __typename?: 'BlogListingPage', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'BlogPostPage', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'ButtonBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'CardBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'CarouselBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'ContainerPage', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'Content', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'DAMAsset', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'DAMImageAsset', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'DAMVideoAsset', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'HeroBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'HomePageHeroBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'HtmlBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'LayoutContainerBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'MegaMenuGroupBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'MenuNavigationBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'QuoteBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'StandardPage', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'StartPage', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'TextBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | null> | null } | null };

export type GetRouteByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
  workId?: InputMaybe<Scalars['Int']['input']>;
  locale: Array<InputMaybe<Locales>> | InputMaybe<Locales>;
}>;


export type GetRouteByIdQuery = { __typename?: 'Query', Content?: { __typename?: 'ContentOutput', total?: number | null, items?: Array<{ __typename?: 'BlogListingPage', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'BlogPostPage', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'ButtonBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'CardBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'CarouselBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'ContainerPage', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'Content', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'DAMAsset', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'DAMImageAsset', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'DAMVideoAsset', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'HeroBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'HomePageHeroBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'HtmlBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'LayoutContainerBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'MegaMenuGroupBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'MenuNavigationBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'QuoteBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'StandardPage', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'StartPage', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | { __typename?: 'TextBlock', route?: string | null, url?: string | null, name?: string | null, contentType?: Array<string | null> | null, slug?: string | null, changed?: any | null, published?: any | null, siteId?: string | null, locale?: { __typename?: 'ContentLanguageModel', name?: string | null } | null, contentLink?: { __typename?: 'ContentModelReference', id?: number | null, workId?: number | null, guidValue?: string | null } | null } | null> | null } | null };

export const FooterMenuNavigationItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterMenuNavigationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuNavigationBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Href"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"Title"}},{"kind":"Field","alias":{"kind":"Name","value":"target"},"name":{"kind":"Name","value":"Target"}},{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"Text"}}]}}]}}]} as unknown as DocumentNode<FooterMenuNavigationItemFragment, unknown>;
export const HtmlBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HtmlBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HtmlBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"HtmlBlockHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"HtmlContent"}}]}}]} as unknown as DocumentNode<HtmlBlockFragment, unknown>;
export const FooterNavigationBlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterNavigationBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterMenuNavigationItem"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HtmlBlock"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterMenuNavigationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuNavigationBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Href"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"Title"}},{"kind":"Field","alias":{"kind":"Name","value":"target"},"name":{"kind":"Name","value":"Target"}},{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"Text"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HtmlBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HtmlBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"HtmlBlockHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"HtmlContent"}}]}}]} as unknown as DocumentNode<FooterNavigationBlockFragment, unknown>;
export const MenuNavigationItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuNavigationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuNavigationBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Href"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"Title"}},{"kind":"Field","alias":{"kind":"Name","value":"target"},"name":{"kind":"Name","value":"Target"}},{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"Text"}}]}}]}}]} as unknown as DocumentNode<MenuNavigationItemFragment, unknown>;
export const CardItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"CardHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"subheading"},"name":{"kind":"Name","value":"CardSubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"CardDescription"}},{"kind":"Field","alias":{"kind":"Name","value":"color"},"name":{"kind":"Name","value":"CardColor"}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"CardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"src"},"name":{"kind":"Name","value":"Url"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"CardButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"}}]}}]}}]} as unknown as DocumentNode<CardItemFragment, unknown>;
export const ButtonFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"}},{"kind":"Field","alias":{"kind":"Name","value":"type"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"variant"},"name":{"kind":"Name","value":"ButtonVariant"}}]}}]} as unknown as DocumentNode<ButtonFragment, unknown>;
export const BlockFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Block"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuNavigationItem"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardItem"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuNavigationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuNavigationBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Href"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"Title"}},{"kind":"Field","alias":{"kind":"Name","value":"target"},"name":{"kind":"Name","value":"Target"}},{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"Text"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"CardHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"subheading"},"name":{"kind":"Name","value":"CardSubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"CardDescription"}},{"kind":"Field","alias":{"kind":"Name","value":"color"},"name":{"kind":"Name","value":"CardColor"}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"CardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"src"},"name":{"kind":"Name","value":"Url"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"CardButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"}},{"kind":"Field","alias":{"kind":"Name","value":"type"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"variant"},"name":{"kind":"Name","value":"ButtonVariant"}}]}}]} as unknown as DocumentNode<BlockFragment, unknown>;
export const MegaMenuItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MegaMenuItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MegaMenuGroupBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"menuName"},"name":{"kind":"Name","value":"MenuMenuHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"menuData"},"name":{"kind":"Name","value":"MegaMenuContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentLink"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"menuList"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Block"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuNavigationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuNavigationBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Href"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"Title"}},{"kind":"Field","alias":{"kind":"Name","value":"target"},"name":{"kind":"Name","value":"Target"}},{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"Text"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"CardHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"subheading"},"name":{"kind":"Name","value":"CardSubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"CardDescription"}},{"kind":"Field","alias":{"kind":"Name","value":"color"},"name":{"kind":"Name","value":"CardColor"}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"CardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"src"},"name":{"kind":"Name","value":"Url"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"CardButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"}},{"kind":"Field","alias":{"kind":"Name","value":"type"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"variant"},"name":{"kind":"Name","value":"ButtonVariant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Block"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuNavigationItem"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardItem"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}}]} as unknown as DocumentNode<MegaMenuItemFragment, unknown>;
export const StartPageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StartPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StartPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"HomePageHeroContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_deleted"}},{"kind":"Field","name":{"kind":"Name","value":"_modified"}},{"kind":"Field","name":{"kind":"Name","value":"_score"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"RouteSegment"}},{"kind":"Field","name":{"kind":"Name","value":"Url"}},{"kind":"Field","name":{"kind":"Name","value":"Changed"}},{"kind":"Field","name":{"kind":"Name","value":"Created"}},{"kind":"Field","name":{"kind":"Name","value":"StartPublish"}},{"kind":"Field","name":{"kind":"Name","value":"StopPublish"}},{"kind":"Field","name":{"kind":"Name","value":"Saved"}},{"kind":"Field","name":{"kind":"Name","value":"Status"}},{"kind":"Field","name":{"kind":"Name","value":"IsCommonDraft"}},{"kind":"Field","name":{"kind":"Name","value":"RelativePath"}},{"kind":"Field","name":{"kind":"Name","value":"SiteId"}},{"kind":"Field","name":{"kind":"Name","value":"ContentType"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"HomePageMainContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_deleted"}},{"kind":"Field","name":{"kind":"Name","value":"_modified"}},{"kind":"Field","name":{"kind":"Name","value":"_score"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"Name"}},{"kind":"Field","name":{"kind":"Name","value":"RouteSegment"}},{"kind":"Field","name":{"kind":"Name","value":"Url"}},{"kind":"Field","name":{"kind":"Name","value":"Changed"}},{"kind":"Field","name":{"kind":"Name","value":"Created"}},{"kind":"Field","name":{"kind":"Name","value":"StartPublish"}},{"kind":"Field","name":{"kind":"Name","value":"StopPublish"}},{"kind":"Field","name":{"kind":"Name","value":"Saved"}},{"kind":"Field","name":{"kind":"Name","value":"Status"}},{"kind":"Field","name":{"kind":"Name","value":"IsCommonDraft"}},{"kind":"Field","name":{"kind":"Name","value":"RelativePath"}},{"kind":"Field","name":{"kind":"Name","value":"SiteId"}},{"kind":"Field","name":{"kind":"Name","value":"ContentType"}}]}}]}}]}}]}}]} as unknown as DocumentNode<StartPageDataFragment, unknown>;
export const ContentLinkSearchFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLinkSearch"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReferenceSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}}]} as unknown as DocumentNode<ContentLinkSearchFragment, unknown>;
export const ContentLinkFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}}]} as unknown as DocumentNode<ContentLinkFragment, unknown>;
export const IContentDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}}]} as unknown as DocumentNode<IContentDataFragment, unknown>;
export const BlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]} as unknown as DocumentNode<BlockDataFragment, unknown>;
export const ContentAreaItemDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentAreaItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentAreaItemModelSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"item"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLinkSearch"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"displayOption"},"name":{"kind":"Name","value":"DisplayOption"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLinkSearch"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReferenceSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}}]} as unknown as DocumentNode<ContentAreaItemDataFragment, unknown>;
export const BlockContentAreaItemSearchDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockContentAreaItemSearchData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentAreaItemModelSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"item"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLinkSearch"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"displayOption"},"name":{"kind":"Name","value":"DisplayOption"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLinkSearch"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReferenceSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]} as unknown as DocumentNode<BlockContentAreaItemSearchDataFragment, unknown>;
export const BlockContentAreaItemDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockContentAreaItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentAreaItemModel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"item"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"displayOption"},"name":{"kind":"Name","value":"DisplayOption"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]} as unknown as DocumentNode<BlockContentAreaItemDataFragment, unknown>;
export const LinkItemDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkItemData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LinkItemNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"children"},"name":{"kind":"Name","value":"Text"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"Title"}},{"kind":"Field","alias":{"kind":"Name","value":"href"},"name":{"kind":"Name","value":"Href"}},{"kind":"Field","alias":{"kind":"Name","value":"target"},"name":{"kind":"Name","value":"Target"}},{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"href"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]}}]}}]} as unknown as DocumentNode<LinkItemDataFragment, unknown>;
export const ImageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"alt"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]} as unknown as DocumentNode<ImageDataFragment, unknown>;
export const ImageDataSearchFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageDataSearch"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReferenceSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLinkSearch"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"alt"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLinkSearch"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReferenceSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]} as unknown as DocumentNode<ImageDataSearchFragment, unknown>;
export const PageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]} as unknown as DocumentNode<PageDataFragment, unknown>;
export const ContentAreaItemBaseFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentAreaItemBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentAreaItemModelSearch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentLink"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}},{"kind":"Field","alias":{"kind":"Name","value":"component"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}},{"kind":"Field","alias":{"kind":"Name","value":"type"},"name":{"kind":"Name","value":"ContentType"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"displayOption"},"name":{"kind":"Name","value":"DisplayOption"}}]}}]} as unknown as DocumentNode<ContentAreaItemBaseFragment, unknown>;
export const FooterNavigationNewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FooterNavigationNew"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}},"defaultValue":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"menuItems"},"name":{"kind":"Name","value":"StartPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"footerSubLinks"},"name":{"kind":"Name","value":"FooterNavigationSubLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Href"}},{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"Text"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"footerCopyright"},"name":{"kind":"Name","value":"FooterNavigationCopyrightText"}},{"kind":"Field","alias":{"kind":"Name","value":"footerNavigation"},"name":{"kind":"Name","value":"FooterNavigationContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentLink"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"navigationItem"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterNavigationBlock"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterMenuNavigationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuNavigationBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Href"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"Title"}},{"kind":"Field","alias":{"kind":"Name","value":"target"},"name":{"kind":"Name","value":"Target"}},{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"Text"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HtmlBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HtmlBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"HtmlBlockHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"HtmlContent"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FooterNavigationBlock"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FooterMenuNavigationItem"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HtmlBlock"}}]}}]} as unknown as DocumentNode<FooterNavigationNewQuery, FooterNavigationNewQueryVariables>;
export const NavigationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Navigations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}},"defaultValue":{"kind":"EnumValue","value":"en"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"menuItems"},"name":{"kind":"Name","value":"StartPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"headerNavigation"},"name":{"kind":"Name","value":"MainNavigationContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentLink"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"navigationItem"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MegaMenuItem"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"UtilityNavigationContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"navigationItem"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Block"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MenuNavigationItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuNavigationBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"MenuNavigationHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"items"},"name":{"kind":"Name","value":"NavigationLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Href"}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"Title"}},{"kind":"Field","alias":{"kind":"Name","value":"target"},"name":{"kind":"Name","value":"Target"}},{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"Text"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CardItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CardBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"heading"},"name":{"kind":"Name","value":"CardHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"subheading"},"name":{"kind":"Name","value":"CardSubHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"description"},"name":{"kind":"Name","value":"CardDescription"}},{"kind":"Field","alias":{"kind":"Name","value":"color"},"name":{"kind":"Name","value":"CardColor"}},{"kind":"Field","alias":{"kind":"Name","value":"image"},"name":{"kind":"Name","value":"CardImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"src"},"name":{"kind":"Name","value":"Url"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"link"},"name":{"kind":"Name","value":"CardButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Button"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ButtonBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"text"},"name":{"kind":"Name","value":"ButtonText"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"ButtonUrl"}},{"kind":"Field","alias":{"kind":"Name","value":"type"},"name":{"kind":"Name","value":"ButtonType"}},{"kind":"Field","alias":{"kind":"Name","value":"variant"},"name":{"kind":"Name","value":"ButtonVariant"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Block"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MenuNavigationItem"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CardItem"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Button"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MegaMenuItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MegaMenuGroupBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"menuName"},"name":{"kind":"Name","value":"MenuMenuHeading"}},{"kind":"Field","alias":{"kind":"Name","value":"menuData"},"name":{"kind":"Name","value":"MegaMenuContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentLink"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"menuList"},"name":{"kind":"Name","value":"Expanded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Block"}}]}}]}}]}}]}}]} as unknown as DocumentNode<NavigationsQuery, NavigationsQueryVariables>;
export const GetContentByPathBaseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContentByPathBase"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"siteId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"RelativePath"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"SiteId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"siteId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]}}]}}]} as unknown as DocumentNode<GetContentByPathBaseQuery, GetContentByPathBaseQueryVariables>;
export const GetGenericMetaDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getGenericMetaData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"siteId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"getGenericMetaData"},"name":{"kind":"Name","value":"Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"RelativePath"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"SiteId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"siteId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"alternatives"},"name":{"kind":"Name","value":"ExistingLanguages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"href"},"name":{"kind":"Name","value":"Link"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"canonical"},"name":{"kind":"Name","value":"Url"}}]}}]}}]}}]} as unknown as DocumentNode<GetGenericMetaDataQuery, GetGenericMetaDataQueryVariables>;
export const GetContentByIdBaseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContentByIdBase"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"guidValue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isCommonDraft"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ContentLink"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"WorkId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"GuidValue"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"guidValue"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"IsCommonDraft"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isCommonDraft"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}}]}}]}}]} as unknown as DocumentNode<GetContentByIdBaseQuery, GetContentByIdBaseQueryVariables>;
export const GetContentByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContentById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"guidValue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isCommonDraft"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ContentLink"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"WorkId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"GuidValue"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"guidValue"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"IsCommonDraft"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isCommonDraft"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}}]} as unknown as DocumentNode<GetContentByIdQuery, GetContentByIdQueryVariables>;
export const GetContentByPathDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContentByPath"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"siteId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"RelativePath"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"SiteId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"siteId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageData"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentModelReference"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IContentData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentLink"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IContentData"}}]}}]} as unknown as DocumentNode<GetContentByPathQuery, GetContentByPathQueryVariables>;
export const GetContentTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContentType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"guidValue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ContentLink"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"GuidValue"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"guidValue"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"Id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"WorkId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workId"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ContentType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<GetContentTypeQuery, GetContentTypeQueryVariables>;
export const GetAllChannelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllChannels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"GetAllChannels"},"name":{"kind":"Name","value":"SiteDefinition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"channels"},"name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"domains"},"name":{"kind":"Name","value":"Hosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"type"},"name":{"kind":"Name","value":"Type"}},{"kind":"Field","alias":{"kind":"Name","value":"forLocale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"code"},"name":{"kind":"Name","value":"Name"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locales"},"name":{"kind":"Name","value":"Languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"code"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"UrlSegment"}},{"kind":"Field","alias":{"kind":"Name","value":"isDefault"},"name":{"kind":"Name","value":"IsMasterLanguage"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"ContentRoots"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"startPage"},"name":{"kind":"Name","value":"StartPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAllChannelsQuery, GetAllChannelsQueryVariables>;
export const GetChannelByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChannelById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"GetChannelById"},"name":{"kind":"Name","value":"SiteDefinition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"channels"},"name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"domains"},"name":{"kind":"Name","value":"Hosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"type"},"name":{"kind":"Name","value":"Type"}},{"kind":"Field","alias":{"kind":"Name","value":"forLocale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"code"},"name":{"kind":"Name","value":"Name"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locales"},"name":{"kind":"Name","value":"Languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"code"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"UrlSegment"}},{"kind":"Field","alias":{"kind":"Name","value":"isDefault"},"name":{"kind":"Name","value":"IsMasterLanguage"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"ContentRoots"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"startPage"},"name":{"kind":"Name","value":"StartPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetChannelByIdQuery, GetChannelByIdQueryVariables>;
export const GetChannelByDomainDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChannelByDomain"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"domain"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallback"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":{"kind":"StringValue","value":"___","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"GetChannelByDomain"},"name":{"kind":"Name","value":"SiteDefinition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Hosts"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"domain"}}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Hosts"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallback"}}}]}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"channels"},"name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"domains"},"name":{"kind":"Name","value":"Hosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"type"},"name":{"kind":"Name","value":"Type"}},{"kind":"Field","alias":{"kind":"Name","value":"forLocale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"code"},"name":{"kind":"Name","value":"Name"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"locales"},"name":{"kind":"Name","value":"Languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"code"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"UrlSegment"}},{"kind":"Field","alias":{"kind":"Name","value":"isDefault"},"name":{"kind":"Name","value":"IsMasterLanguage"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"content"},"name":{"kind":"Name","value":"ContentRoots"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"startPage"},"name":{"kind":"Name","value":"StartPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetChannelByDomainQuery, GetChannelByDomainQueryVariables>;
export const GetAllRoutesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllRoutes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"100"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"typeFilter"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"defaultValue":{"kind":"StringValue","value":"Page","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"siteId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":{"kind":"NullValue"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"RelativePath"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"exist"},"value":{"kind":"BooleanValue","value":true}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"ContentType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"typeFilter"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"SiteId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"siteId"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageSize"}}},{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"path"},"name":{"kind":"Name","value":"RelativePath"}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"contentLink"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"RouteSegment"}},{"kind":"Field","alias":{"kind":"Name","value":"changed"},"name":{"kind":"Name","value":"Changed"}},{"kind":"Field","alias":{"kind":"Name","value":"published"},"name":{"kind":"Name","value":"StartPublish"}},{"kind":"Field","alias":{"kind":"Name","value":"siteId"},"name":{"kind":"Name","value":"SiteId"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<GetAllRoutesQuery, GetAllRoutesQueryVariables>;
export const GetRouteByPathDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRouteByPath"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"path"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"siteId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"RelativePath"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"path"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"SiteId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"siteId"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"route"},"name":{"kind":"Name","value":"RelativePath"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"contentLink"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"RouteSegment"}},{"kind":"Field","alias":{"kind":"Name","value":"changed"},"name":{"kind":"Name","value":"Changed"}},{"kind":"Field","alias":{"kind":"Name","value":"published"},"name":{"kind":"Name","value":"StartPublish"}},{"kind":"Field","alias":{"kind":"Name","value":"siteId"},"name":{"kind":"Name","value":"SiteId"}}]}}]}}]}}]} as unknown as DocumentNode<GetRouteByPathQuery, GetRouteByPathQueryVariables>;
export const GetRouteByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRouteById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Locales"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ContentLink"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"Id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"WorkId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workId"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"ContentLink"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"WorkId"},"value":{"kind":"EnumValue","value":"DESC"}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"Status"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"route"},"name":{"kind":"Name","value":"RelativePath"}},{"kind":"Field","alias":{"kind":"Name","value":"url"},"name":{"kind":"Name","value":"Url"}},{"kind":"Field","alias":{"kind":"Name","value":"locale"},"name":{"kind":"Name","value":"Language"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"contentLink"},"name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"Id"}},{"kind":"Field","alias":{"kind":"Name","value":"workId"},"name":{"kind":"Name","value":"WorkId"}},{"kind":"Field","alias":{"kind":"Name","value":"guidValue"},"name":{"kind":"Name","value":"GuidValue"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"Name"}},{"kind":"Field","alias":{"kind":"Name","value":"contentType"},"name":{"kind":"Name","value":"ContentType"}},{"kind":"Field","alias":{"kind":"Name","value":"slug"},"name":{"kind":"Name","value":"RouteSegment"}},{"kind":"Field","alias":{"kind":"Name","value":"changed"},"name":{"kind":"Name","value":"Changed"}},{"kind":"Field","alias":{"kind":"Name","value":"published"},"name":{"kind":"Name","value":"StartPublish"}},{"kind":"Field","alias":{"kind":"Name","value":"siteId"},"name":{"kind":"Name","value":"SiteId"}}]}}]}}]}}]} as unknown as DocumentNode<GetRouteByIdQuery, GetRouteByIdQueryVariables>;