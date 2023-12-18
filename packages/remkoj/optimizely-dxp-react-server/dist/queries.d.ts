export declare const CmsContentFragments: {
    IContentDataProps: string[];
    ContentLink: import("@graphql-typed-document-node/core").TypedDocumentNode<import("./gql/graphql").ContentLinkFragment, unknown>;
    ContentLinkSearch: import("@graphql-typed-document-node/core").TypedDocumentNode<import("./gql/graphql").ContentLinkSearchFragment, unknown>;
    IContentData: import("@graphql-typed-document-node/core").TypedDocumentNode<import("./gql/graphql").IContentDataFragment, unknown>;
    ContentAreaItemData: import("@graphql-typed-document-node/core").TypedDocumentNode<import("./gql/graphql").ContentAreaItemDataFragment, unknown>;
    BlockContentAreaItemData: import("@graphql-typed-document-node/core").TypedDocumentNode<import("./gql/graphql").BlockContentAreaItemDataFragment, unknown>;
    LinkItemData: import("@graphql-typed-document-node/core").TypedDocumentNode<import("./gql/graphql").LinkItemDataFragment, unknown>;
    ImageData: import("@graphql-typed-document-node/core").TypedDocumentNode<import("./gql/graphql").ImageDataFragment, unknown>;
    ImageDataSearch: import("@graphql-typed-document-node/core").TypedDocumentNode<import("./gql/graphql").ImageDataSearchFragment, unknown>;
    BlockData: import("@graphql-typed-document-node/core").TypedDocumentNode<import("./gql/graphql").BlockDataFragment, unknown>;
    PageData: import("@graphql-typed-document-node/core").TypedDocumentNode<import("./gql/graphql").PageDataFragment, unknown>;
};
export declare const ContentAreaFragments: {
    ContentAreaItemBase: import("@graphql-typed-document-node/core").TypedDocumentNode<import("./gql/graphql").ContentAreaItemBaseFragment, unknown>;
};
export declare const getContentById: import("@graphql-typed-document-node/core").TypedDocumentNode<import("./gql/graphql").GetContentByIdQuery, import("./gql/graphql").Exact<{
    id?: import("./gql/graphql").InputMaybe<number> | undefined;
    workId?: import("./gql/graphql").InputMaybe<number> | undefined;
    guidValue?: import("./gql/graphql").InputMaybe<string> | undefined;
    locale?: import("./gql/graphql").InputMaybe<import("./gql/graphql").Locales | import("./gql/graphql").Locales[]> | undefined;
    isCommonDraft?: import("./gql/graphql").InputMaybe<boolean> | undefined;
}>>;
export declare const getContentByPath: import("@graphql-typed-document-node/core").TypedDocumentNode<import("./gql/graphql").GetContentByPathQuery, import("./gql/graphql").Exact<{
    path: string;
    locale?: import("./gql/graphql").InputMaybe<import("./gql/graphql").InputMaybe<import("./gql/graphql").Locales> | import("./gql/graphql").InputMaybe<import("./gql/graphql").Locales>[]> | undefined;
    siteId?: import("./gql/graphql").InputMaybe<string> | undefined;
}>>;
export declare const getContentTypeQuery: import("@graphql-typed-document-node/core").TypedDocumentNode<import("./gql/graphql").GetContentTypeQuery, import("./gql/graphql").Exact<{
    id?: import("./gql/graphql").InputMaybe<number> | undefined;
    workId?: import("./gql/graphql").InputMaybe<number> | undefined;
    guidValue?: import("./gql/graphql").InputMaybe<string> | undefined;
    locale?: import("./gql/graphql").InputMaybe<import("./gql/graphql").InputMaybe<import("./gql/graphql").Locales> | import("./gql/graphql").InputMaybe<import("./gql/graphql").Locales>[]> | undefined;
}>>;
