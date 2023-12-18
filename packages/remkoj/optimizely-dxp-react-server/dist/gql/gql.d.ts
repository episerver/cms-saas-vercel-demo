import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
declare const documents: {
    "fragment ContentLink on ContentModelReference {\n      id: Id,\n      workId: WorkId,\n      guidValue: GuidValue\n    }": DocumentNode<types.ContentLinkFragment, unknown>;
    "fragment ContentLinkSearch on ContentModelReferenceSearch {\n      id: Id,\n      workId: WorkId,\n      guidValue: GuidValue\n    }": DocumentNode<types.ContentLinkSearchFragment, unknown>;
    "fragment IContentData on IContent {\n        contentType: ContentType\n        id: ContentLink {\n          ...ContentLink\n        }\n        locale: Language {\n            name: Name\n        }\n        path:RelativePath\n    }": DocumentNode<types.IContentDataFragment, unknown>;
    "fragment ContentAreaItemData on ContentAreaItemModelSearch {\n        item: ContentLink {\n            ...ContentLinkSearch\n            data: Expanded {\n            ...BlockData\n            }\n        }\n        displayOption:DisplayOption\n    }": DocumentNode<types.ContentAreaItemDataFragment, unknown>;
    "fragment BlockContentAreaItemData on ContentAreaItemModelSearch {\n        item: ContentLink {\n            ...ContentLinkSearch\n            data: Expanded {\n            ...IContentData\n            }\n        }\n        displayOption:DisplayOption\n    }": DocumentNode<types.BlockContentAreaItemDataFragment, unknown>;
    "fragment LinkItemData on LinkItemNode {\n      children: Text\n      title: Title\n      href: Href\n      target: Target\n      content: ContentLink {\n        href: Url\n        data: Expanded {\n          path: RelativePath\n        }\n      }\n    }": DocumentNode<types.LinkItemDataFragment, unknown>;
    "fragment ImageData on ContentModelReference {\n      ...ContentLink\n      url: Url\n      data: Expanded {\n        ...IContentData\n        url: Url\n        alt: Name \n        path: RelativePath\n      }\n    }": DocumentNode<types.ImageDataFragment, unknown>;
    "fragment ImageDataSearch on ContentModelReferenceSearch {\n      ...ContentLinkSearch\n      url: Url\n      data: Expanded {\n        ...IContentData\n        url: Url\n        alt: Name \n        path: RelativePath\n      }\n    }": DocumentNode<types.ImageDataSearchFragment, unknown>;
    "fragment BlockData on IContent {\n        ...IContentData\n    }": DocumentNode<types.BlockDataFragment, unknown>;
    "fragment PageData on IContent {\n        ...IContentData\n    }": DocumentNode<types.PageDataFragment, unknown>;
    "fragment ContentAreaItemBase on ContentAreaItemModelSearch {\n      contentLink:ContentLink { \n          id:Id\n          workId:WorkId\n          guidValue:GuidValue\n          component:Expanded {\n              path:RelativePath\n              type:ContentType\n          }\n      }\n      displayOption:DisplayOption\n  }": DocumentNode<types.ContentAreaItemBaseFragment, unknown>;
    "query getContentById($id: Int, $workId: Int, $guidValue: String, $locale: [Locales!], $isCommonDraft: Boolean) {\n    Content(\n        where: {\n            ContentLink: { \n                Id: { eq: $id }, \n                WorkId: { eq: $workId }, \n                GuidValue: { eq: $guidValue } \n            }\n            IsCommonDraft: { eq: $isCommonDraft }\n        }\n        locale: $locale\n    ) {\n        total\n        items {\n            ...PageData\n            ...BlockData\n        }\n    }\n}": DocumentNode<types.GetContentByIdQuery, types.Exact<{
        id?: types.InputMaybe<number> | undefined;
        workId?: types.InputMaybe<number> | undefined;
        guidValue?: types.InputMaybe<string> | undefined;
        locale?: types.InputMaybe<types.Locales | types.Locales[]> | undefined;
        isCommonDraft?: types.InputMaybe<boolean> | undefined;
    }>>;
    "query getContentByPath($path: String!, $locale: [Locales], $siteId: String)\n{\n  Content(\n    where: {\n      RelativePath: {\n        eq: $path\n      }\n      SiteId: {\n        eq: $siteId\n      }\n  \t},\n    locale: $locale\n  ) {\n    items {\n      ...PageData\n    }\n  }\n}": DocumentNode<types.GetContentByPathQuery, types.Exact<{
        path: string;
        locale?: types.InputMaybe<types.InputMaybe<types.Locales> | types.InputMaybe<types.Locales>[]> | undefined;
        siteId?: types.InputMaybe<string> | undefined;
    }>>;
    "query getContentType($id: Int, $workId: Int, $guidValue: String, $locale: [Locales])\n{\n  Content(\n    where: {\n      ContentLink: {\n        GuidValue: {\n          eq: $guidValue\n        }\n        Id: {\n          eq: $id\n        },\n        WorkId: {\n          eq: $workId\n        }\n      }\n    },\n    locale: $locale\n    limit: 1\n  ) {\n    items {\n    \tContentType\n    },\n    total\n  }\n}": DocumentNode<types.GetContentTypeQuery, types.Exact<{
        id?: types.InputMaybe<number> | undefined;
        workId?: types.InputMaybe<number> | undefined;
        guidValue?: types.InputMaybe<string> | undefined;
        locale?: types.InputMaybe<types.InputMaybe<types.Locales> | types.InputMaybe<types.Locales>[]> | undefined;
    }>>;
};
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export declare function gql(source: string): unknown;
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export declare function gql(source: "fragment ContentLink on ContentModelReference {\n      id: Id,\n      workId: WorkId,\n      guidValue: GuidValue\n    }"): (typeof documents)["fragment ContentLink on ContentModelReference {\n      id: Id,\n      workId: WorkId,\n      guidValue: GuidValue\n    }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export declare function gql(source: "fragment ContentLinkSearch on ContentModelReferenceSearch {\n      id: Id,\n      workId: WorkId,\n      guidValue: GuidValue\n    }"): (typeof documents)["fragment ContentLinkSearch on ContentModelReferenceSearch {\n      id: Id,\n      workId: WorkId,\n      guidValue: GuidValue\n    }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export declare function gql(source: "fragment IContentData on IContent {\n        contentType: ContentType\n        id: ContentLink {\n          ...ContentLink\n        }\n        locale: Language {\n            name: Name\n        }\n        path:RelativePath\n    }"): (typeof documents)["fragment IContentData on IContent {\n        contentType: ContentType\n        id: ContentLink {\n          ...ContentLink\n        }\n        locale: Language {\n            name: Name\n        }\n        path:RelativePath\n    }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export declare function gql(source: "fragment ContentAreaItemData on ContentAreaItemModelSearch {\n        item: ContentLink {\n            ...ContentLinkSearch\n            data: Expanded {\n            ...BlockData\n            }\n        }\n        displayOption:DisplayOption\n    }"): (typeof documents)["fragment ContentAreaItemData on ContentAreaItemModelSearch {\n        item: ContentLink {\n            ...ContentLinkSearch\n            data: Expanded {\n            ...BlockData\n            }\n        }\n        displayOption:DisplayOption\n    }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export declare function gql(source: "fragment BlockContentAreaItemData on ContentAreaItemModelSearch {\n        item: ContentLink {\n            ...ContentLinkSearch\n            data: Expanded {\n            ...IContentData\n            }\n        }\n        displayOption:DisplayOption\n    }"): (typeof documents)["fragment BlockContentAreaItemData on ContentAreaItemModelSearch {\n        item: ContentLink {\n            ...ContentLinkSearch\n            data: Expanded {\n            ...IContentData\n            }\n        }\n        displayOption:DisplayOption\n    }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export declare function gql(source: "fragment LinkItemData on LinkItemNode {\n      children: Text\n      title: Title\n      href: Href\n      target: Target\n      content: ContentLink {\n        href: Url\n        data: Expanded {\n          path: RelativePath\n        }\n      }\n    }"): (typeof documents)["fragment LinkItemData on LinkItemNode {\n      children: Text\n      title: Title\n      href: Href\n      target: Target\n      content: ContentLink {\n        href: Url\n        data: Expanded {\n          path: RelativePath\n        }\n      }\n    }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export declare function gql(source: "fragment ImageData on ContentModelReference {\n      ...ContentLink\n      url: Url\n      data: Expanded {\n        ...IContentData\n        url: Url\n        alt: Name \n        path: RelativePath\n      }\n    }"): (typeof documents)["fragment ImageData on ContentModelReference {\n      ...ContentLink\n      url: Url\n      data: Expanded {\n        ...IContentData\n        url: Url\n        alt: Name \n        path: RelativePath\n      }\n    }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export declare function gql(source: "fragment ImageDataSearch on ContentModelReferenceSearch {\n      ...ContentLinkSearch\n      url: Url\n      data: Expanded {\n        ...IContentData\n        url: Url\n        alt: Name \n        path: RelativePath\n      }\n    }"): (typeof documents)["fragment ImageDataSearch on ContentModelReferenceSearch {\n      ...ContentLinkSearch\n      url: Url\n      data: Expanded {\n        ...IContentData\n        url: Url\n        alt: Name \n        path: RelativePath\n      }\n    }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export declare function gql(source: "fragment BlockData on IContent {\n        ...IContentData\n    }"): (typeof documents)["fragment BlockData on IContent {\n        ...IContentData\n    }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export declare function gql(source: "fragment PageData on IContent {\n        ...IContentData\n    }"): (typeof documents)["fragment PageData on IContent {\n        ...IContentData\n    }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export declare function gql(source: "fragment ContentAreaItemBase on ContentAreaItemModelSearch {\n      contentLink:ContentLink { \n          id:Id\n          workId:WorkId\n          guidValue:GuidValue\n          component:Expanded {\n              path:RelativePath\n              type:ContentType\n          }\n      }\n      displayOption:DisplayOption\n  }"): (typeof documents)["fragment ContentAreaItemBase on ContentAreaItemModelSearch {\n      contentLink:ContentLink { \n          id:Id\n          workId:WorkId\n          guidValue:GuidValue\n          component:Expanded {\n              path:RelativePath\n              type:ContentType\n          }\n      }\n      displayOption:DisplayOption\n  }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export declare function gql(source: "query getContentById($id: Int, $workId: Int, $guidValue: String, $locale: [Locales!], $isCommonDraft: Boolean) {\n    Content(\n        where: {\n            ContentLink: { \n                Id: { eq: $id }, \n                WorkId: { eq: $workId }, \n                GuidValue: { eq: $guidValue } \n            }\n            IsCommonDraft: { eq: $isCommonDraft }\n        }\n        locale: $locale\n    ) {\n        total\n        items {\n            ...PageData\n            ...BlockData\n        }\n    }\n}"): (typeof documents)["query getContentById($id: Int, $workId: Int, $guidValue: String, $locale: [Locales!], $isCommonDraft: Boolean) {\n    Content(\n        where: {\n            ContentLink: { \n                Id: { eq: $id }, \n                WorkId: { eq: $workId }, \n                GuidValue: { eq: $guidValue } \n            }\n            IsCommonDraft: { eq: $isCommonDraft }\n        }\n        locale: $locale\n    ) {\n        total\n        items {\n            ...PageData\n            ...BlockData\n        }\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export declare function gql(source: "query getContentByPath($path: String!, $locale: [Locales], $siteId: String)\n{\n  Content(\n    where: {\n      RelativePath: {\n        eq: $path\n      }\n      SiteId: {\n        eq: $siteId\n      }\n  \t},\n    locale: $locale\n  ) {\n    items {\n      ...PageData\n    }\n  }\n}"): (typeof documents)["query getContentByPath($path: String!, $locale: [Locales], $siteId: String)\n{\n  Content(\n    where: {\n      RelativePath: {\n        eq: $path\n      }\n      SiteId: {\n        eq: $siteId\n      }\n  \t},\n    locale: $locale\n  ) {\n    items {\n      ...PageData\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export declare function gql(source: "query getContentType($id: Int, $workId: Int, $guidValue: String, $locale: [Locales])\n{\n  Content(\n    where: {\n      ContentLink: {\n        GuidValue: {\n          eq: $guidValue\n        }\n        Id: {\n          eq: $id\n        },\n        WorkId: {\n          eq: $workId\n        }\n      }\n    },\n    locale: $locale\n    limit: 1\n  ) {\n    items {\n    \tContentType\n    },\n    total\n  }\n}"): (typeof documents)["query getContentType($id: Int, $workId: Int, $guidValue: String, $locale: [Locales])\n{\n  Content(\n    where: {\n      ContentLink: {\n        GuidValue: {\n          eq: $guidValue\n        }\n        Id: {\n          eq: $id\n        },\n        WorkId: {\n          eq: $workId\n        }\n      }\n    },\n    locale: $locale\n    limit: 1\n  ) {\n    items {\n    \tContentType\n    },\n    total\n  }\n}"];
export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
export {};
