import { gql } from 'graphql-request';
export const CmsContentFragments = {
    IContentDataProps: ["_metadata", "_type", "__typename"],
    ContentLink: gql `fragment ContentLink on ContentModelReference {
        id: Id,
        workId: WorkId,
        guidValue: GuidValue
    }`,
    ContentLinkSearch: gql `fragment ContentLinkSearch on ContentModelReferenceSearch {
        id: Id,
        workId: WorkId,
        guidValue: GuidValue
    }`,
    IContentData: gql `fragment IContentData on IContent {
        contentType: ContentType
        id: ContentLink {
            ...ContentLink
        }
        locale: Language {
            name: Name
        }
        path:RelativePath
    }`,
    ContentAreaItemData: gql `fragment ContentAreaItemData on ContentAreaItemModelSearch {
        item: ContentLink {
            ...ContentLinkSearch
            data: Expanded {
                ...BlockData
            }
        }
        displayOption:DisplayOption
    }`,
    BlockContentAreaItemSearchData: gql `fragment BlockContentAreaItemSearchData on ContentAreaItemModelSearch {
        item: ContentLink {
            ...ContentLinkSearch
            data: Expanded {
                ...IContentData
            }
        }
        displayOption:DisplayOption
    }`,
    BlockContentAreaItemData: gql `fragment BlockContentAreaItemData on ContentAreaItemModel {
        item: ContentLink {
            ...ContentLink
            data: Expanded {
                ...IContentData
            }
        }
        displayOption:DisplayOption
    }`,
    LinkItemData: gql `fragment LinkItemData on LinkItemNode {
      children: Text
      title: Title
      href: Href
      target: Target
      content: ContentLink {
        href: Url
        data: Expanded {
          path: RelativePath
        }
      }
    }`,
    ImageData: gql `fragment ImageData on ContentModelReference {
      ...ContentLink
      url: Url
      data: Expanded {
        ...IContentData
        url: Url
        alt: Name 
        path: RelativePath
      }
    }`,
    ImageDataSearch: gql `fragment ImageDataSearch on ContentModelReferenceSearch {
      ...ContentLinkSearch
      url: Url
      data: Expanded {
        ...IContentData
        url: Url
        alt: Name 
        path: RelativePath
      }
    }`,
    BlockData: gql `fragment BlockData on IContent {
        ...IContentData
    }`,
    PageData: gql `fragment PageData on IContent {
        ...IContentData
    }`
};
export const ContentAreaFragments = {
    ContentAreaItemBase: gql `fragment ContentAreaItemBase on ContentAreaItemModelSearch {
      contentLink:ContentLink { 
          id:Id
          workId:WorkId
          guidValue:GuidValue
          component:Expanded {
              path:RelativePath
              type:ContentType
          }
      }
      displayOption:DisplayOption
  }`
};
export const getContentById = gql `query getContentById($id: Int, $workId: Int, $guidValue: String, $locale: [Locales!], $isCommonDraft: Boolean) {
    content:_Content(
        where: {
            ContentLink: { 
                Id: { eq: $id }, 
                WorkId: { eq: $workId }, 
                GuidValue: { eq: $guidValue } 
            }
            IsCommonDraft: { eq: $isCommonDraft }
        }
        locale: $locale
    ) {
        total
        items {
            ...IContentData
            ...PageData
            ...BlockData
        }
    }
}`;
export const getContentByPath = gql `query getContentByPath($path: String!, $locale: [Locales], $siteId: String)
{
  content: _Content(
    where: {
      RelativePath: {
        eq: $path
      }
      SiteId: {
        eq: $siteId
      }
  	},
    locale: $locale
  ) {
    items {
      ...PageData
    }
  }
}`;
//# sourceMappingURL=queries.js.map