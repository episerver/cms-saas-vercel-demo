import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {
    [key: string]: unknown;
}, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> = T | {
    [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: {
        input: string;
        output: string;
    };
    String: {
        input: string;
        output: string;
    };
    Boolean: {
        input: boolean;
        output: boolean;
    };
    Int: {
        input: number;
        output: number;
    };
    Float: {
        input: number;
        output: number;
    };
    Bool: {
        input: any;
        output: any;
    };
    Date: {
        input: any;
        output: any;
    };
};
export type ArticlePage = IContent & {
    __typename?: 'ArticlePage';
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
    StartPublish?: Maybe<Scalars['Date']['output']>;
    Status?: Maybe<Scalars['String']['output']>;
    StopPublish?: Maybe<Scalars['Date']['output']>;
    Title?: Maybe<Scalars['String']['output']>;
    Url?: Maybe<Scalars['String']['output']>;
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars['Bool']['output']>;
    _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    _modified?: Maybe<Scalars['Date']['output']>;
    _score?: Maybe<Scalars['Float']['output']>;
};
export type ArticlePageAutocomplete = {
    __typename?: 'ArticlePageAutocomplete';
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
export type ArticlePageAutocompleteAncestorsArgs = {
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
export type ArticlePageFacet = {
    __typename?: 'ArticlePageFacet';
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
export type ButtonBlock = IContent & {
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
    _modified?: Maybe<Scalars['Date']['output']>;
    _score?: Maybe<Scalars['Float']['output']>;
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
/** Pre-defined component compositions that can easily be reused */
export type ContainerBlock = IContent & {
    __typename?: 'ContainerBlock';
    Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    Category?: Maybe<Array<Maybe<CategoryModel>>>;
    Changed?: Maybe<Scalars['Date']['output']>;
    ContentLink?: Maybe<ContentModelReference>;
    ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    Created?: Maybe<Scalars['Date']['output']>;
    ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
    IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
    Language?: Maybe<ContentLanguageModel>;
    MainContentArea?: Maybe<Array<Maybe<ContentAreaItemModelSearch>>>;
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
    _modified?: Maybe<Scalars['Date']['output']>;
    _score?: Maybe<Scalars['Float']['output']>;
};
export type ContainerBlockAutocomplete = {
    __typename?: 'ContainerBlockAutocomplete';
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
export type ContainerBlockAutocompleteAncestorsArgs = {
    limit?: Scalars['Int']['input'];
    value: Scalars['String']['input'];
};
export type ContainerBlockAutocompleteContentTypeArgs = {
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
    Category?: Maybe<CategoryModelFacet>;
    Changed?: Maybe<Array<Maybe<DateFacet>>>;
    ContentLink?: Maybe<ContentModelReferenceFacet>;
    ContentType?: Maybe<Array<Maybe<StringFacet>>>;
    Created?: Maybe<Array<Maybe<DateFacet>>>;
    ExistingLanguages?: Maybe<ContentLanguageModelFacet>;
    IsCommonDraft?: Maybe<Array<Maybe<StringFacet>>>;
    Language?: Maybe<ContentLanguageModelFacet>;
    MainContentArea?: Maybe<ContentAreaItemModelSearchFacet>;
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
export type ContainerBlockFacetAncestorsArgs = {
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
    Category?: InputMaybe<CategoryModelOrderByInput>;
    Changed?: InputMaybe<OrderBy>;
    ContentLink?: InputMaybe<ContentModelReferenceOrderByInput>;
    ContentType?: InputMaybe<OrderBy>;
    Created?: InputMaybe<OrderBy>;
    ExistingLanguages?: InputMaybe<ContentLanguageModelOrderByInput>;
    IsCommonDraft?: InputMaybe<OrderBy>;
    Language?: InputMaybe<ContentLanguageModelOrderByInput>;
    MainContentArea?: InputMaybe<ContentAreaItemModelSearchOrderByInput>;
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
    Category?: InputMaybe<CategoryModelWhereInput>;
    Changed?: InputMaybe<DateFilterInput>;
    ContentLink?: InputMaybe<ContentModelReferenceWhereInput>;
    ContentType?: InputMaybe<StringFilterInput>;
    Created?: InputMaybe<DateFilterInput>;
    ExistingLanguages?: InputMaybe<ContentLanguageModelWhereInput>;
    IsCommonDraft?: InputMaybe<BoolFilterInput>;
    Language?: InputMaybe<ContentLanguageModelWhereInput>;
    MainContentArea?: InputMaybe<ContentAreaItemModelSearchWhereInput>;
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
    _and?: InputMaybe<Array<InputMaybe<ContainerBlockWhereInput>>>;
    _fulltext?: InputMaybe<SearchableStringFilterInput>;
    _modified?: InputMaybe<DateFilterInput>;
    _not?: InputMaybe<Array<InputMaybe<ContainerBlockWhereInput>>>;
    _or?: InputMaybe<Array<InputMaybe<ContainerBlockWhereInput>>>;
};
export type Content = IContent & {
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
    _modified?: Maybe<Scalars['Date']['output']>;
    _score?: Maybe<Scalars['Float']['output']>;
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
export type DateFacet = {
    __typename?: 'DateFacet';
    count?: Maybe<Scalars['Int']['output']>;
    name?: Maybe<Scalars['String']['output']>;
};
export declare enum DateFacetUnit {
    /** Defined as 24 hours (86,400,000 milliseconds). All days begin at the earliest possible time, which is usually 00:00:00 (midnight). */
    Day = "DAY",
    /** Defined as 60 minutes each (3,600,000 milliseconds). All hours begin at 00 minutes and 00 seconds. */
    Hour = "HOUR",
    /** Defined as 1000 milliseconds each. */
    Minute = "MINUTE"
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
/** Configuration of the website header */
export type HeaderConfigBlock = IContent & {
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
    _modified?: Maybe<Scalars['Date']['output']>;
    _score?: Maybe<Scalars['Float']['output']>;
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
export type HeroBlock = IContent & {
    __typename?: 'HeroBlock';
    Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    Background?: Maybe<Scalars['String']['output']>;
    BannerLink?: Maybe<LinkItemNode>;
    BannerText?: Maybe<Scalars['String']['output']>;
    /** The main title shown on the banner */
    BannerTitle?: Maybe<Scalars['String']['output']>;
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
    _modified?: Maybe<Scalars['Date']['output']>;
    _score?: Maybe<Scalars['Float']['output']>;
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
export type HighlightTextBlock = IContent & {
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
    _modified?: Maybe<Scalars['Date']['output']>;
    _score?: Maybe<Scalars['Float']['output']>;
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
    _modified?: Maybe<Scalars['Date']['output']>;
    _score?: Maybe<Scalars['Float']['output']>;
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
export type LandingPage = IContent & {
    __typename?: 'LandingPage';
    Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    Category?: Maybe<Array<Maybe<CategoryModel>>>;
    Changed?: Maybe<Scalars['Date']['output']>;
    ContentLink?: Maybe<ContentModelReference>;
    ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    Created?: Maybe<Scalars['Date']['output']>;
    ExistingLanguages?: Maybe<Array<Maybe<ContentLanguageModel>>>;
    IsCommonDraft?: Maybe<Scalars['Bool']['output']>;
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
    _modified?: Maybe<Scalars['Date']['output']>;
    _score?: Maybe<Scalars['Float']['output']>;
};
export type LandingPageAutocomplete = {
    __typename?: 'LandingPageAutocomplete';
    Ancestors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    Category?: Maybe<CategoryModelAutocomplete>;
    ContentLink?: Maybe<ContentModelReferenceAutocomplete>;
    ContentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    ExistingLanguages?: Maybe<ContentLanguageModelAutocomplete>;
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
export declare enum Locales {
    All = "ALL",
    Neutral = "NEUTRAL",
    En = "en",
    Nl = "nl",
    NlBe = "nl_BE"
}
export type NavMenuItem = IContent & {
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
    _modified?: Maybe<Scalars['Date']['output']>;
    _score?: Maybe<Scalars['Float']['output']>;
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
export declare enum OrderBy {
    Asc = "ASC",
    Desc = "DESC"
}
export declare enum OrderByFacetType {
    Count = "COUNT",
    Value = "VALUE"
}
export type Query = {
    __typename?: 'Query';
    ArticlePage?: Maybe<ArticlePageOutput>;
    ButtonBlock?: Maybe<ButtonBlockOutput>;
    ContainerBlock?: Maybe<ContainerBlockOutput>;
    Content?: Maybe<ContentOutput>;
    HeaderConfigBlock?: Maybe<HeaderConfigBlockOutput>;
    HeroBlock?: Maybe<HeroBlockOutput>;
    HighlightTextBlock?: Maybe<HighlightTextBlockOutput>;
    LandingPage?: Maybe<LandingPageOutput>;
    NavMenuItem?: Maybe<NavMenuItemOutput>;
    SiteDefinition?: Maybe<SiteDefinitionOutput>;
    TextBlock?: Maybe<TextBlockOutput>;
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
export type QueryNavMenuItemArgs = {
    cursor?: InputMaybe<Scalars['String']['input']>;
    ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Array<InputMaybe<Locales>>>;
    orderBy?: InputMaybe<NavMenuItemOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<NavMenuItemWhereInput>;
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
    ArticlePage?: Maybe<ArticlePageOutput>;
    ButtonBlock?: Maybe<ButtonBlockOutput>;
    ContainerBlock?: Maybe<ContainerBlockOutput>;
    Content?: Maybe<ContentOutput>;
    HeaderConfigBlock?: Maybe<HeaderConfigBlockOutput>;
    HeroBlock?: Maybe<HeroBlockOutput>;
    HighlightTextBlock?: Maybe<HighlightTextBlockOutput>;
    LandingPage?: Maybe<LandingPageOutput>;
    NavMenuItem?: Maybe<NavMenuItemOutput>;
    SiteDefinition?: Maybe<SiteDefinitionOutput>;
    TextBlock?: Maybe<TextBlockOutput>;
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
export type QueryRefNavMenuItemArgs = {
    cursor?: InputMaybe<Scalars['String']['input']>;
    ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    locale?: InputMaybe<Array<InputMaybe<Locales>>>;
    orderBy?: InputMaybe<NavMenuItemOrderByInput>;
    skip?: InputMaybe<Scalars['Int']['input']>;
    where?: InputMaybe<NavMenuItemWhereInput>;
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
export type RangeFacetsInput = {
    from?: InputMaybe<Scalars['Int']['input']>;
    to?: InputMaybe<Scalars['Int']['input']>;
};
export declare enum Ranking {
    BoostOnly = "BOOST_ONLY",
    Doc = "DOC",
    Relevance = "RELEVANCE"
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
export type SiteDefinition = {
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
    _modified?: Maybe<Scalars['Date']['output']>;
    _score?: Maybe<Scalars['Float']['output']>;
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
export declare enum SynonymSlot {
    /** synonym slot 1 */
    One = "ONE",
    /** synonym slot 2 */
    Two = "TWO"
}
/** Formatted text, supporting links */
export type TextBlock = IContent & {
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
    StartPublish?: Maybe<Scalars['Date']['output']>;
    Status?: Maybe<Scalars['String']['output']>;
    StopPublish?: Maybe<Scalars['Date']['output']>;
    Url?: Maybe<Scalars['String']['output']>;
    _children?: Maybe<QueryRef>;
    _deleted?: Maybe<Scalars['Bool']['output']>;
    _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
    _modified?: Maybe<Scalars['Date']['output']>;
    _score?: Maybe<Scalars['Float']['output']>;
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
export type ContentLinkFragment = {
    __typename?: 'ContentModelReference';
    id?: number | null;
    workId?: number | null;
    guidValue?: string | null;
} & {
    ' $fragmentName'?: 'ContentLinkFragment';
};
export type ContentLinkSearchFragment = {
    __typename?: 'ContentModelReferenceSearch';
    id?: number | null;
    workId?: number | null;
    guidValue?: string | null;
} & {
    ' $fragmentName'?: 'ContentLinkSearchFragment';
};
type IContentData_ArticlePage_Fragment = {
    __typename?: 'ArticlePage';
    contentType?: Array<string | null> | null;
    path?: string | null;
    id?: ({
        __typename?: 'ContentModelReference';
    } & {
        ' $fragmentRefs'?: {
            'ContentLinkFragment': ContentLinkFragment;
        };
    }) | null;
    locale?: {
        __typename?: 'ContentLanguageModel';
        name?: string | null;
    } | null;
} & {
    ' $fragmentName'?: 'IContentData_ArticlePage_Fragment';
};
type IContentData_ButtonBlock_Fragment = {
    __typename?: 'ButtonBlock';
    contentType?: Array<string | null> | null;
    path?: string | null;
    id?: ({
        __typename?: 'ContentModelReference';
    } & {
        ' $fragmentRefs'?: {
            'ContentLinkFragment': ContentLinkFragment;
        };
    }) | null;
    locale?: {
        __typename?: 'ContentLanguageModel';
        name?: string | null;
    } | null;
} & {
    ' $fragmentName'?: 'IContentData_ButtonBlock_Fragment';
};
type IContentData_ContainerBlock_Fragment = {
    __typename?: 'ContainerBlock';
    contentType?: Array<string | null> | null;
    path?: string | null;
    id?: ({
        __typename?: 'ContentModelReference';
    } & {
        ' $fragmentRefs'?: {
            'ContentLinkFragment': ContentLinkFragment;
        };
    }) | null;
    locale?: {
        __typename?: 'ContentLanguageModel';
        name?: string | null;
    } | null;
} & {
    ' $fragmentName'?: 'IContentData_ContainerBlock_Fragment';
};
type IContentData_Content_Fragment = {
    __typename?: 'Content';
    contentType?: Array<string | null> | null;
    path?: string | null;
    id?: ({
        __typename?: 'ContentModelReference';
    } & {
        ' $fragmentRefs'?: {
            'ContentLinkFragment': ContentLinkFragment;
        };
    }) | null;
    locale?: {
        __typename?: 'ContentLanguageModel';
        name?: string | null;
    } | null;
} & {
    ' $fragmentName'?: 'IContentData_Content_Fragment';
};
type IContentData_HeaderConfigBlock_Fragment = {
    __typename?: 'HeaderConfigBlock';
    contentType?: Array<string | null> | null;
    path?: string | null;
    id?: ({
        __typename?: 'ContentModelReference';
    } & {
        ' $fragmentRefs'?: {
            'ContentLinkFragment': ContentLinkFragment;
        };
    }) | null;
    locale?: {
        __typename?: 'ContentLanguageModel';
        name?: string | null;
    } | null;
} & {
    ' $fragmentName'?: 'IContentData_HeaderConfigBlock_Fragment';
};
type IContentData_HeroBlock_Fragment = {
    __typename?: 'HeroBlock';
    contentType?: Array<string | null> | null;
    path?: string | null;
    id?: ({
        __typename?: 'ContentModelReference';
    } & {
        ' $fragmentRefs'?: {
            'ContentLinkFragment': ContentLinkFragment;
        };
    }) | null;
    locale?: {
        __typename?: 'ContentLanguageModel';
        name?: string | null;
    } | null;
} & {
    ' $fragmentName'?: 'IContentData_HeroBlock_Fragment';
};
type IContentData_HighlightTextBlock_Fragment = {
    __typename?: 'HighlightTextBlock';
    contentType?: Array<string | null> | null;
    path?: string | null;
    id?: ({
        __typename?: 'ContentModelReference';
    } & {
        ' $fragmentRefs'?: {
            'ContentLinkFragment': ContentLinkFragment;
        };
    }) | null;
    locale?: {
        __typename?: 'ContentLanguageModel';
        name?: string | null;
    } | null;
} & {
    ' $fragmentName'?: 'IContentData_HighlightTextBlock_Fragment';
};
type IContentData_LandingPage_Fragment = {
    __typename?: 'LandingPage';
    contentType?: Array<string | null> | null;
    path?: string | null;
    id?: ({
        __typename?: 'ContentModelReference';
    } & {
        ' $fragmentRefs'?: {
            'ContentLinkFragment': ContentLinkFragment;
        };
    }) | null;
    locale?: {
        __typename?: 'ContentLanguageModel';
        name?: string | null;
    } | null;
} & {
    ' $fragmentName'?: 'IContentData_LandingPage_Fragment';
};
type IContentData_NavMenuItem_Fragment = {
    __typename?: 'NavMenuItem';
    contentType?: Array<string | null> | null;
    path?: string | null;
    id?: ({
        __typename?: 'ContentModelReference';
    } & {
        ' $fragmentRefs'?: {
            'ContentLinkFragment': ContentLinkFragment;
        };
    }) | null;
    locale?: {
        __typename?: 'ContentLanguageModel';
        name?: string | null;
    } | null;
} & {
    ' $fragmentName'?: 'IContentData_NavMenuItem_Fragment';
};
type IContentData_TextBlock_Fragment = {
    __typename?: 'TextBlock';
    contentType?: Array<string | null> | null;
    path?: string | null;
    id?: ({
        __typename?: 'ContentModelReference';
    } & {
        ' $fragmentRefs'?: {
            'ContentLinkFragment': ContentLinkFragment;
        };
    }) | null;
    locale?: {
        __typename?: 'ContentLanguageModel';
        name?: string | null;
    } | null;
} & {
    ' $fragmentName'?: 'IContentData_TextBlock_Fragment';
};
export type IContentDataFragment = IContentData_ArticlePage_Fragment | IContentData_ButtonBlock_Fragment | IContentData_ContainerBlock_Fragment | IContentData_Content_Fragment | IContentData_HeaderConfigBlock_Fragment | IContentData_HeroBlock_Fragment | IContentData_HighlightTextBlock_Fragment | IContentData_LandingPage_Fragment | IContentData_NavMenuItem_Fragment | IContentData_TextBlock_Fragment;
export type ContentAreaItemDataFragment = {
    __typename?: 'ContentAreaItemModelSearch';
    displayOption?: string | null;
    item?: ({
        __typename?: 'ContentModelReferenceSearch';
        data?: ({
            __typename?: 'ArticlePage';
        } & {
            ' $fragmentRefs'?: {
                'BlockData_ArticlePage_Fragment': BlockData_ArticlePage_Fragment;
            };
        }) | ({
            __typename?: 'ButtonBlock';
        } & {
            ' $fragmentRefs'?: {
                'BlockData_ButtonBlock_Fragment': BlockData_ButtonBlock_Fragment;
            };
        }) | ({
            __typename?: 'ContainerBlock';
        } & {
            ' $fragmentRefs'?: {
                'BlockData_ContainerBlock_Fragment': BlockData_ContainerBlock_Fragment;
            };
        }) | ({
            __typename?: 'Content';
        } & {
            ' $fragmentRefs'?: {
                'BlockData_Content_Fragment': BlockData_Content_Fragment;
            };
        }) | ({
            __typename?: 'HeaderConfigBlock';
        } & {
            ' $fragmentRefs'?: {
                'BlockData_HeaderConfigBlock_Fragment': BlockData_HeaderConfigBlock_Fragment;
            };
        }) | ({
            __typename?: 'HeroBlock';
        } & {
            ' $fragmentRefs'?: {
                'BlockData_HeroBlock_Fragment': BlockData_HeroBlock_Fragment;
            };
        }) | ({
            __typename?: 'HighlightTextBlock';
        } & {
            ' $fragmentRefs'?: {
                'BlockData_HighlightTextBlock_Fragment': BlockData_HighlightTextBlock_Fragment;
            };
        }) | ({
            __typename?: 'LandingPage';
        } & {
            ' $fragmentRefs'?: {
                'BlockData_LandingPage_Fragment': BlockData_LandingPage_Fragment;
            };
        }) | ({
            __typename?: 'NavMenuItem';
        } & {
            ' $fragmentRefs'?: {
                'BlockData_NavMenuItem_Fragment': BlockData_NavMenuItem_Fragment;
            };
        }) | ({
            __typename?: 'TextBlock';
        } & {
            ' $fragmentRefs'?: {
                'BlockData_TextBlock_Fragment': BlockData_TextBlock_Fragment;
            };
        }) | null;
    } & {
        ' $fragmentRefs'?: {
            'ContentLinkSearchFragment': ContentLinkSearchFragment;
        };
    }) | null;
} & {
    ' $fragmentName'?: 'ContentAreaItemDataFragment';
};
export type BlockContentAreaItemDataFragment = {
    __typename?: 'ContentAreaItemModelSearch';
    displayOption?: string | null;
    item?: ({
        __typename?: 'ContentModelReferenceSearch';
        data?: ({
            __typename?: 'ArticlePage';
        } & {
            ' $fragmentRefs'?: {
                'IContentData_ArticlePage_Fragment': IContentData_ArticlePage_Fragment;
            };
        }) | ({
            __typename?: 'ButtonBlock';
        } & {
            ' $fragmentRefs'?: {
                'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment;
            };
        }) | ({
            __typename?: 'ContainerBlock';
        } & {
            ' $fragmentRefs'?: {
                'IContentData_ContainerBlock_Fragment': IContentData_ContainerBlock_Fragment;
            };
        }) | ({
            __typename?: 'Content';
        } & {
            ' $fragmentRefs'?: {
                'IContentData_Content_Fragment': IContentData_Content_Fragment;
            };
        }) | ({
            __typename?: 'HeaderConfigBlock';
        } & {
            ' $fragmentRefs'?: {
                'IContentData_HeaderConfigBlock_Fragment': IContentData_HeaderConfigBlock_Fragment;
            };
        }) | ({
            __typename?: 'HeroBlock';
        } & {
            ' $fragmentRefs'?: {
                'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment;
            };
        }) | ({
            __typename?: 'HighlightTextBlock';
        } & {
            ' $fragmentRefs'?: {
                'IContentData_HighlightTextBlock_Fragment': IContentData_HighlightTextBlock_Fragment;
            };
        }) | ({
            __typename?: 'LandingPage';
        } & {
            ' $fragmentRefs'?: {
                'IContentData_LandingPage_Fragment': IContentData_LandingPage_Fragment;
            };
        }) | ({
            __typename?: 'NavMenuItem';
        } & {
            ' $fragmentRefs'?: {
                'IContentData_NavMenuItem_Fragment': IContentData_NavMenuItem_Fragment;
            };
        }) | ({
            __typename?: 'TextBlock';
        } & {
            ' $fragmentRefs'?: {
                'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment;
            };
        }) | null;
    } & {
        ' $fragmentRefs'?: {
            'ContentLinkSearchFragment': ContentLinkSearchFragment;
        };
    }) | null;
} & {
    ' $fragmentName'?: 'BlockContentAreaItemDataFragment';
};
export type LinkItemDataFragment = {
    __typename?: 'LinkItemNode';
    children?: string | null;
    title?: string | null;
    href?: string | null;
    target?: string | null;
    content?: {
        __typename?: 'ContentModelReference';
        href?: string | null;
        data?: {
            __typename?: 'ArticlePage';
            path?: string | null;
        } | {
            __typename?: 'ButtonBlock';
            path?: string | null;
        } | {
            __typename?: 'ContainerBlock';
            path?: string | null;
        } | {
            __typename?: 'Content';
            path?: string | null;
        } | {
            __typename?: 'HeaderConfigBlock';
            path?: string | null;
        } | {
            __typename?: 'HeroBlock';
            path?: string | null;
        } | {
            __typename?: 'HighlightTextBlock';
            path?: string | null;
        } | {
            __typename?: 'LandingPage';
            path?: string | null;
        } | {
            __typename?: 'NavMenuItem';
            path?: string | null;
        } | {
            __typename?: 'TextBlock';
            path?: string | null;
        } | null;
    } | null;
} & {
    ' $fragmentName'?: 'LinkItemDataFragment';
};
export type ImageDataFragment = ({
    __typename?: 'ContentModelReference';
    url?: string | null;
    data?: ({
        __typename?: 'ArticlePage';
        url?: string | null;
        alt?: string | null;
        path?: string | null;
    } & {
        ' $fragmentRefs'?: {
            'IContentData_ArticlePage_Fragment': IContentData_ArticlePage_Fragment;
        };
    }) | ({
        __typename?: 'ButtonBlock';
        url?: string | null;
        alt?: string | null;
        path?: string | null;
    } & {
        ' $fragmentRefs'?: {
            'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment;
        };
    }) | ({
        __typename?: 'ContainerBlock';
        url?: string | null;
        alt?: string | null;
        path?: string | null;
    } & {
        ' $fragmentRefs'?: {
            'IContentData_ContainerBlock_Fragment': IContentData_ContainerBlock_Fragment;
        };
    }) | ({
        __typename?: 'Content';
        url?: string | null;
        alt?: string | null;
        path?: string | null;
    } & {
        ' $fragmentRefs'?: {
            'IContentData_Content_Fragment': IContentData_Content_Fragment;
        };
    }) | ({
        __typename?: 'HeaderConfigBlock';
        url?: string | null;
        alt?: string | null;
        path?: string | null;
    } & {
        ' $fragmentRefs'?: {
            'IContentData_HeaderConfigBlock_Fragment': IContentData_HeaderConfigBlock_Fragment;
        };
    }) | ({
        __typename?: 'HeroBlock';
        url?: string | null;
        alt?: string | null;
        path?: string | null;
    } & {
        ' $fragmentRefs'?: {
            'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment;
        };
    }) | ({
        __typename?: 'HighlightTextBlock';
        url?: string | null;
        alt?: string | null;
        path?: string | null;
    } & {
        ' $fragmentRefs'?: {
            'IContentData_HighlightTextBlock_Fragment': IContentData_HighlightTextBlock_Fragment;
        };
    }) | ({
        __typename?: 'LandingPage';
        url?: string | null;
        alt?: string | null;
        path?: string | null;
    } & {
        ' $fragmentRefs'?: {
            'IContentData_LandingPage_Fragment': IContentData_LandingPage_Fragment;
        };
    }) | ({
        __typename?: 'NavMenuItem';
        url?: string | null;
        alt?: string | null;
        path?: string | null;
    } & {
        ' $fragmentRefs'?: {
            'IContentData_NavMenuItem_Fragment': IContentData_NavMenuItem_Fragment;
        };
    }) | ({
        __typename?: 'TextBlock';
        url?: string | null;
        alt?: string | null;
        path?: string | null;
    } & {
        ' $fragmentRefs'?: {
            'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment;
        };
    }) | null;
} & {
    ' $fragmentRefs'?: {
        'ContentLinkFragment': ContentLinkFragment;
    };
}) & {
    ' $fragmentName'?: 'ImageDataFragment';
};
export type ImageDataSearchFragment = ({
    __typename?: 'ContentModelReferenceSearch';
    url?: string | null;
    data?: ({
        __typename?: 'ArticlePage';
        url?: string | null;
        alt?: string | null;
        path?: string | null;
    } & {
        ' $fragmentRefs'?: {
            'IContentData_ArticlePage_Fragment': IContentData_ArticlePage_Fragment;
        };
    }) | ({
        __typename?: 'ButtonBlock';
        url?: string | null;
        alt?: string | null;
        path?: string | null;
    } & {
        ' $fragmentRefs'?: {
            'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment;
        };
    }) | ({
        __typename?: 'ContainerBlock';
        url?: string | null;
        alt?: string | null;
        path?: string | null;
    } & {
        ' $fragmentRefs'?: {
            'IContentData_ContainerBlock_Fragment': IContentData_ContainerBlock_Fragment;
        };
    }) | ({
        __typename?: 'Content';
        url?: string | null;
        alt?: string | null;
        path?: string | null;
    } & {
        ' $fragmentRefs'?: {
            'IContentData_Content_Fragment': IContentData_Content_Fragment;
        };
    }) | ({
        __typename?: 'HeaderConfigBlock';
        url?: string | null;
        alt?: string | null;
        path?: string | null;
    } & {
        ' $fragmentRefs'?: {
            'IContentData_HeaderConfigBlock_Fragment': IContentData_HeaderConfigBlock_Fragment;
        };
    }) | ({
        __typename?: 'HeroBlock';
        url?: string | null;
        alt?: string | null;
        path?: string | null;
    } & {
        ' $fragmentRefs'?: {
            'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment;
        };
    }) | ({
        __typename?: 'HighlightTextBlock';
        url?: string | null;
        alt?: string | null;
        path?: string | null;
    } & {
        ' $fragmentRefs'?: {
            'IContentData_HighlightTextBlock_Fragment': IContentData_HighlightTextBlock_Fragment;
        };
    }) | ({
        __typename?: 'LandingPage';
        url?: string | null;
        alt?: string | null;
        path?: string | null;
    } & {
        ' $fragmentRefs'?: {
            'IContentData_LandingPage_Fragment': IContentData_LandingPage_Fragment;
        };
    }) | ({
        __typename?: 'NavMenuItem';
        url?: string | null;
        alt?: string | null;
        path?: string | null;
    } & {
        ' $fragmentRefs'?: {
            'IContentData_NavMenuItem_Fragment': IContentData_NavMenuItem_Fragment;
        };
    }) | ({
        __typename?: 'TextBlock';
        url?: string | null;
        alt?: string | null;
        path?: string | null;
    } & {
        ' $fragmentRefs'?: {
            'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment;
        };
    }) | null;
} & {
    ' $fragmentRefs'?: {
        'ContentLinkSearchFragment': ContentLinkSearchFragment;
    };
}) & {
    ' $fragmentName'?: 'ImageDataSearchFragment';
};
type BlockData_ArticlePage_Fragment = ({
    __typename?: 'ArticlePage';
} & {
    ' $fragmentRefs'?: {
        'IContentData_ArticlePage_Fragment': IContentData_ArticlePage_Fragment;
    };
}) & {
    ' $fragmentName'?: 'BlockData_ArticlePage_Fragment';
};
type BlockData_ButtonBlock_Fragment = ({
    __typename?: 'ButtonBlock';
} & {
    ' $fragmentRefs'?: {
        'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment;
    };
}) & {
    ' $fragmentName'?: 'BlockData_ButtonBlock_Fragment';
};
type BlockData_ContainerBlock_Fragment = ({
    __typename?: 'ContainerBlock';
} & {
    ' $fragmentRefs'?: {
        'IContentData_ContainerBlock_Fragment': IContentData_ContainerBlock_Fragment;
    };
}) & {
    ' $fragmentName'?: 'BlockData_ContainerBlock_Fragment';
};
type BlockData_Content_Fragment = ({
    __typename?: 'Content';
} & {
    ' $fragmentRefs'?: {
        'IContentData_Content_Fragment': IContentData_Content_Fragment;
    };
}) & {
    ' $fragmentName'?: 'BlockData_Content_Fragment';
};
type BlockData_HeaderConfigBlock_Fragment = ({
    __typename?: 'HeaderConfigBlock';
} & {
    ' $fragmentRefs'?: {
        'IContentData_HeaderConfigBlock_Fragment': IContentData_HeaderConfigBlock_Fragment;
    };
}) & {
    ' $fragmentName'?: 'BlockData_HeaderConfigBlock_Fragment';
};
type BlockData_HeroBlock_Fragment = ({
    __typename?: 'HeroBlock';
} & {
    ' $fragmentRefs'?: {
        'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment;
    };
}) & {
    ' $fragmentName'?: 'BlockData_HeroBlock_Fragment';
};
type BlockData_HighlightTextBlock_Fragment = ({
    __typename?: 'HighlightTextBlock';
} & {
    ' $fragmentRefs'?: {
        'IContentData_HighlightTextBlock_Fragment': IContentData_HighlightTextBlock_Fragment;
    };
}) & {
    ' $fragmentName'?: 'BlockData_HighlightTextBlock_Fragment';
};
type BlockData_LandingPage_Fragment = ({
    __typename?: 'LandingPage';
} & {
    ' $fragmentRefs'?: {
        'IContentData_LandingPage_Fragment': IContentData_LandingPage_Fragment;
    };
}) & {
    ' $fragmentName'?: 'BlockData_LandingPage_Fragment';
};
type BlockData_NavMenuItem_Fragment = ({
    __typename?: 'NavMenuItem';
} & {
    ' $fragmentRefs'?: {
        'IContentData_NavMenuItem_Fragment': IContentData_NavMenuItem_Fragment;
    };
}) & {
    ' $fragmentName'?: 'BlockData_NavMenuItem_Fragment';
};
type BlockData_TextBlock_Fragment = ({
    __typename?: 'TextBlock';
} & {
    ' $fragmentRefs'?: {
        'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment;
    };
}) & {
    ' $fragmentName'?: 'BlockData_TextBlock_Fragment';
};
export type BlockDataFragment = BlockData_ArticlePage_Fragment | BlockData_ButtonBlock_Fragment | BlockData_ContainerBlock_Fragment | BlockData_Content_Fragment | BlockData_HeaderConfigBlock_Fragment | BlockData_HeroBlock_Fragment | BlockData_HighlightTextBlock_Fragment | BlockData_LandingPage_Fragment | BlockData_NavMenuItem_Fragment | BlockData_TextBlock_Fragment;
type PageData_ArticlePage_Fragment = ({
    __typename?: 'ArticlePage';
} & {
    ' $fragmentRefs'?: {
        'IContentData_ArticlePage_Fragment': IContentData_ArticlePage_Fragment;
    };
}) & {
    ' $fragmentName'?: 'PageData_ArticlePage_Fragment';
};
type PageData_ButtonBlock_Fragment = ({
    __typename?: 'ButtonBlock';
} & {
    ' $fragmentRefs'?: {
        'IContentData_ButtonBlock_Fragment': IContentData_ButtonBlock_Fragment;
    };
}) & {
    ' $fragmentName'?: 'PageData_ButtonBlock_Fragment';
};
type PageData_ContainerBlock_Fragment = ({
    __typename?: 'ContainerBlock';
} & {
    ' $fragmentRefs'?: {
        'IContentData_ContainerBlock_Fragment': IContentData_ContainerBlock_Fragment;
    };
}) & {
    ' $fragmentName'?: 'PageData_ContainerBlock_Fragment';
};
type PageData_Content_Fragment = ({
    __typename?: 'Content';
} & {
    ' $fragmentRefs'?: {
        'IContentData_Content_Fragment': IContentData_Content_Fragment;
    };
}) & {
    ' $fragmentName'?: 'PageData_Content_Fragment';
};
type PageData_HeaderConfigBlock_Fragment = ({
    __typename?: 'HeaderConfigBlock';
} & {
    ' $fragmentRefs'?: {
        'IContentData_HeaderConfigBlock_Fragment': IContentData_HeaderConfigBlock_Fragment;
    };
}) & {
    ' $fragmentName'?: 'PageData_HeaderConfigBlock_Fragment';
};
type PageData_HeroBlock_Fragment = ({
    __typename?: 'HeroBlock';
} & {
    ' $fragmentRefs'?: {
        'IContentData_HeroBlock_Fragment': IContentData_HeroBlock_Fragment;
    };
}) & {
    ' $fragmentName'?: 'PageData_HeroBlock_Fragment';
};
type PageData_HighlightTextBlock_Fragment = ({
    __typename?: 'HighlightTextBlock';
} & {
    ' $fragmentRefs'?: {
        'IContentData_HighlightTextBlock_Fragment': IContentData_HighlightTextBlock_Fragment;
    };
}) & {
    ' $fragmentName'?: 'PageData_HighlightTextBlock_Fragment';
};
type PageData_LandingPage_Fragment = ({
    __typename?: 'LandingPage';
} & {
    ' $fragmentRefs'?: {
        'IContentData_LandingPage_Fragment': IContentData_LandingPage_Fragment;
    };
}) & {
    ' $fragmentName'?: 'PageData_LandingPage_Fragment';
};
type PageData_NavMenuItem_Fragment = ({
    __typename?: 'NavMenuItem';
} & {
    ' $fragmentRefs'?: {
        'IContentData_NavMenuItem_Fragment': IContentData_NavMenuItem_Fragment;
    };
}) & {
    ' $fragmentName'?: 'PageData_NavMenuItem_Fragment';
};
type PageData_TextBlock_Fragment = ({
    __typename?: 'TextBlock';
} & {
    ' $fragmentRefs'?: {
        'IContentData_TextBlock_Fragment': IContentData_TextBlock_Fragment;
    };
}) & {
    ' $fragmentName'?: 'PageData_TextBlock_Fragment';
};
export type PageDataFragment = PageData_ArticlePage_Fragment | PageData_ButtonBlock_Fragment | PageData_ContainerBlock_Fragment | PageData_Content_Fragment | PageData_HeaderConfigBlock_Fragment | PageData_HeroBlock_Fragment | PageData_HighlightTextBlock_Fragment | PageData_LandingPage_Fragment | PageData_NavMenuItem_Fragment | PageData_TextBlock_Fragment;
export type ContentAreaItemBaseFragment = {
    __typename?: 'ContentAreaItemModelSearch';
    displayOption?: string | null;
    contentLink?: {
        __typename?: 'ContentModelReferenceSearch';
        id?: number | null;
        workId?: number | null;
        guidValue?: string | null;
        component?: {
            __typename?: 'ArticlePage';
            path?: string | null;
            type?: Array<string | null> | null;
        } | {
            __typename?: 'ButtonBlock';
            path?: string | null;
            type?: Array<string | null> | null;
        } | {
            __typename?: 'ContainerBlock';
            path?: string | null;
            type?: Array<string | null> | null;
        } | {
            __typename?: 'Content';
            path?: string | null;
            type?: Array<string | null> | null;
        } | {
            __typename?: 'HeaderConfigBlock';
            path?: string | null;
            type?: Array<string | null> | null;
        } | {
            __typename?: 'HeroBlock';
            path?: string | null;
            type?: Array<string | null> | null;
        } | {
            __typename?: 'HighlightTextBlock';
            path?: string | null;
            type?: Array<string | null> | null;
        } | {
            __typename?: 'LandingPage';
            path?: string | null;
            type?: Array<string | null> | null;
        } | {
            __typename?: 'NavMenuItem';
            path?: string | null;
            type?: Array<string | null> | null;
        } | {
            __typename?: 'TextBlock';
            path?: string | null;
            type?: Array<string | null> | null;
        } | null;
    } | null;
} & {
    ' $fragmentName'?: 'ContentAreaItemBaseFragment';
};
export type GetContentByIdQueryVariables = Exact<{
    id?: InputMaybe<Scalars['Int']['input']>;
    workId?: InputMaybe<Scalars['Int']['input']>;
    guidValue?: InputMaybe<Scalars['String']['input']>;
    locale?: InputMaybe<Array<Locales> | Locales>;
    isCommonDraft?: InputMaybe<Scalars['Boolean']['input']>;
}>;
export type GetContentByIdQuery = {
    __typename?: 'Query';
    Content?: {
        __typename?: 'ContentOutput';
        total?: number | null;
        items?: Array<({
            __typename?: 'ArticlePage';
        } & {
            ' $fragmentRefs'?: {
                'PageData_ArticlePage_Fragment': PageData_ArticlePage_Fragment;
                'BlockData_ArticlePage_Fragment': BlockData_ArticlePage_Fragment;
            };
        }) | ({
            __typename?: 'ButtonBlock';
        } & {
            ' $fragmentRefs'?: {
                'PageData_ButtonBlock_Fragment': PageData_ButtonBlock_Fragment;
                'BlockData_ButtonBlock_Fragment': BlockData_ButtonBlock_Fragment;
            };
        }) | ({
            __typename?: 'ContainerBlock';
        } & {
            ' $fragmentRefs'?: {
                'PageData_ContainerBlock_Fragment': PageData_ContainerBlock_Fragment;
                'BlockData_ContainerBlock_Fragment': BlockData_ContainerBlock_Fragment;
            };
        }) | ({
            __typename?: 'Content';
        } & {
            ' $fragmentRefs'?: {
                'PageData_Content_Fragment': PageData_Content_Fragment;
                'BlockData_Content_Fragment': BlockData_Content_Fragment;
            };
        }) | ({
            __typename?: 'HeaderConfigBlock';
        } & {
            ' $fragmentRefs'?: {
                'PageData_HeaderConfigBlock_Fragment': PageData_HeaderConfigBlock_Fragment;
                'BlockData_HeaderConfigBlock_Fragment': BlockData_HeaderConfigBlock_Fragment;
            };
        }) | ({
            __typename?: 'HeroBlock';
        } & {
            ' $fragmentRefs'?: {
                'PageData_HeroBlock_Fragment': PageData_HeroBlock_Fragment;
                'BlockData_HeroBlock_Fragment': BlockData_HeroBlock_Fragment;
            };
        }) | ({
            __typename?: 'HighlightTextBlock';
        } & {
            ' $fragmentRefs'?: {
                'PageData_HighlightTextBlock_Fragment': PageData_HighlightTextBlock_Fragment;
                'BlockData_HighlightTextBlock_Fragment': BlockData_HighlightTextBlock_Fragment;
            };
        }) | ({
            __typename?: 'LandingPage';
        } & {
            ' $fragmentRefs'?: {
                'PageData_LandingPage_Fragment': PageData_LandingPage_Fragment;
                'BlockData_LandingPage_Fragment': BlockData_LandingPage_Fragment;
            };
        }) | ({
            __typename?: 'NavMenuItem';
        } & {
            ' $fragmentRefs'?: {
                'PageData_NavMenuItem_Fragment': PageData_NavMenuItem_Fragment;
                'BlockData_NavMenuItem_Fragment': BlockData_NavMenuItem_Fragment;
            };
        }) | ({
            __typename?: 'TextBlock';
        } & {
            ' $fragmentRefs'?: {
                'PageData_TextBlock_Fragment': PageData_TextBlock_Fragment;
                'BlockData_TextBlock_Fragment': BlockData_TextBlock_Fragment;
            };
        }) | null> | null;
    } | null;
};
export type GetContentByPathQueryVariables = Exact<{
    path: Scalars['String']['input'];
    locale?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
    siteId?: InputMaybe<Scalars['String']['input']>;
}>;
export type GetContentByPathQuery = {
    __typename?: 'Query';
    Content?: {
        __typename?: 'ContentOutput';
        items?: Array<({
            __typename?: 'ArticlePage';
        } & {
            ' $fragmentRefs'?: {
                'PageData_ArticlePage_Fragment': PageData_ArticlePage_Fragment;
            };
        }) | ({
            __typename?: 'ButtonBlock';
        } & {
            ' $fragmentRefs'?: {
                'PageData_ButtonBlock_Fragment': PageData_ButtonBlock_Fragment;
            };
        }) | ({
            __typename?: 'ContainerBlock';
        } & {
            ' $fragmentRefs'?: {
                'PageData_ContainerBlock_Fragment': PageData_ContainerBlock_Fragment;
            };
        }) | ({
            __typename?: 'Content';
        } & {
            ' $fragmentRefs'?: {
                'PageData_Content_Fragment': PageData_Content_Fragment;
            };
        }) | ({
            __typename?: 'HeaderConfigBlock';
        } & {
            ' $fragmentRefs'?: {
                'PageData_HeaderConfigBlock_Fragment': PageData_HeaderConfigBlock_Fragment;
            };
        }) | ({
            __typename?: 'HeroBlock';
        } & {
            ' $fragmentRefs'?: {
                'PageData_HeroBlock_Fragment': PageData_HeroBlock_Fragment;
            };
        }) | ({
            __typename?: 'HighlightTextBlock';
        } & {
            ' $fragmentRefs'?: {
                'PageData_HighlightTextBlock_Fragment': PageData_HighlightTextBlock_Fragment;
            };
        }) | ({
            __typename?: 'LandingPage';
        } & {
            ' $fragmentRefs'?: {
                'PageData_LandingPage_Fragment': PageData_LandingPage_Fragment;
            };
        }) | ({
            __typename?: 'NavMenuItem';
        } & {
            ' $fragmentRefs'?: {
                'PageData_NavMenuItem_Fragment': PageData_NavMenuItem_Fragment;
            };
        }) | ({
            __typename?: 'TextBlock';
        } & {
            ' $fragmentRefs'?: {
                'PageData_TextBlock_Fragment': PageData_TextBlock_Fragment;
            };
        }) | null> | null;
    } | null;
};
export type GetContentTypeQueryVariables = Exact<{
    id?: InputMaybe<Scalars['Int']['input']>;
    workId?: InputMaybe<Scalars['Int']['input']>;
    guidValue?: InputMaybe<Scalars['String']['input']>;
    locale?: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;
export type GetContentTypeQuery = {
    __typename?: 'Query';
    Content?: {
        __typename?: 'ContentOutput';
        total?: number | null;
        items?: Array<{
            __typename?: 'ArticlePage';
            ContentType?: Array<string | null> | null;
        } | {
            __typename?: 'ButtonBlock';
            ContentType?: Array<string | null> | null;
        } | {
            __typename?: 'ContainerBlock';
            ContentType?: Array<string | null> | null;
        } | {
            __typename?: 'Content';
            ContentType?: Array<string | null> | null;
        } | {
            __typename?: 'HeaderConfigBlock';
            ContentType?: Array<string | null> | null;
        } | {
            __typename?: 'HeroBlock';
            ContentType?: Array<string | null> | null;
        } | {
            __typename?: 'HighlightTextBlock';
            ContentType?: Array<string | null> | null;
        } | {
            __typename?: 'LandingPage';
            ContentType?: Array<string | null> | null;
        } | {
            __typename?: 'NavMenuItem';
            ContentType?: Array<string | null> | null;
        } | {
            __typename?: 'TextBlock';
            ContentType?: Array<string | null> | null;
        } | null> | null;
    } | null;
};
export declare const ContentLinkSearchFragmentDoc: DocumentNode<ContentLinkSearchFragment, unknown>;
export declare const ContentLinkFragmentDoc: DocumentNode<ContentLinkFragment, unknown>;
export declare const IContentDataFragmentDoc: DocumentNode<IContentDataFragment, unknown>;
export declare const BlockDataFragmentDoc: DocumentNode<BlockDataFragment, unknown>;
export declare const ContentAreaItemDataFragmentDoc: DocumentNode<ContentAreaItemDataFragment, unknown>;
export declare const BlockContentAreaItemDataFragmentDoc: DocumentNode<BlockContentAreaItemDataFragment, unknown>;
export declare const LinkItemDataFragmentDoc: DocumentNode<LinkItemDataFragment, unknown>;
export declare const ImageDataFragmentDoc: DocumentNode<ImageDataFragment, unknown>;
export declare const ImageDataSearchFragmentDoc: DocumentNode<ImageDataSearchFragment, unknown>;
export declare const PageDataFragmentDoc: DocumentNode<PageDataFragment, unknown>;
export declare const ContentAreaItemBaseFragmentDoc: DocumentNode<ContentAreaItemBaseFragment, unknown>;
export declare const GetContentByIdDocument: DocumentNode<GetContentByIdQuery, Exact<{
    id?: InputMaybe<number> | undefined;
    workId?: InputMaybe<number> | undefined;
    guidValue?: InputMaybe<string> | undefined;
    locale?: InputMaybe<Locales | Locales[]> | undefined;
    isCommonDraft?: InputMaybe<boolean> | undefined;
}>>;
export declare const GetContentByPathDocument: DocumentNode<GetContentByPathQuery, Exact<{
    path: Scalars['String']['input'];
    locale?: InputMaybe<InputMaybe<Locales> | InputMaybe<Locales>[]> | undefined;
    siteId?: InputMaybe<string> | undefined;
}>>;
export declare const GetContentTypeDocument: DocumentNode<GetContentTypeQuery, Exact<{
    id?: InputMaybe<number> | undefined;
    workId?: InputMaybe<number> | undefined;
    guidValue?: InputMaybe<string> | undefined;
    locale?: InputMaybe<InputMaybe<Locales> | InputMaybe<Locales>[]> | undefined;
}>>;
export {};
