"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectFragments = exports.documents = exports.DefaultFunctions = exports.queries = exports.fragments = exports.IContentDataProps = void 0;
exports.IContentDataProps = ["contentType", "id", "locale", "path", "__typename"];
exports.fragments = [
    `fragment ContentLink on ContentModelReference {
      id: Id,
      workId: WorkId,
      guidValue: GuidValue
    }`,
    `fragment ContentLinkSearch on ContentModelReferenceSearch {
      id: Id,
      workId: WorkId,
      guidValue: GuidValue
    }`,
    `fragment IContentData on IContent {
        contentType: ContentType
        id: ContentLink {
          ...ContentLink
        }
        locale: Language {
            name: Name
        }
        path:RelativePath
    }`,
    `fragment ContentAreaItemData on ContentAreaItemModelSearch {
        item: ContentLink {
            ...ContentLinkSearch
            data: Expanded {
            ...BlockData
            }
        }
        displayOption:DisplayOption
    }`,
    `fragment BlockContentAreaItemSearchData on ContentAreaItemModelSearch {
        item: ContentLink {
            ...ContentLinkSearch
            data: Expanded {
            ...IContentData
            }
        }
        displayOption:DisplayOption
    }`,
    `fragment BlockContentAreaItemData on ContentAreaItemModel {
        item: ContentLink {
            ...ContentLink
            data: Expanded {
            ...IContentData
            }
        }
        displayOption:DisplayOption
    }`,
    `fragment LinkItemData on LinkItemNode {
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
    `fragment ImageData on ContentModelReference {
      ...ContentLink
      url: Url
      data: Expanded {
        ...IContentData
        url: Url
        alt: Name 
        path: RelativePath
      }
    }`,
    `fragment ImageDataSearch on ContentModelReferenceSearch {
      ...ContentLinkSearch
      url: Url
      data: Expanded {
        ...IContentData
        url: Url
        alt: Name 
        path: RelativePath
      }
    }`,
    `fragment BlockData on IContent {
        ...IContentData
    }`,
    `fragment PageData on IContent {
        ...IContentData
    }`,
    `fragment ContentAreaItemBase on ContentAreaItemModelSearch {
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
];
exports.queries = [`query getContentById($id: Int, $workId: Int, $guidValue: String, $locale: [Locales!], $isCommonDraft: Boolean) {
    Content(
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
}`,
    `query getContentByPath($path: String!, $locale: [Locales], $siteId: String)
{
  Content(
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
}`, `query getContentType($id: Int, $workId: Int, $guidValue: String, $locale: [Locales])
{
  Content(
    where: {
      ContentLink: {
        GuidValue: {
          eq: $guidValue
        }
        Id: {
          eq: $id
        },
        WorkId: {
          eq: $workId
        }
      }
    },
    locale: $locale
    limit: 1
  ) {
    items {
    	ContentType
    },
    total
  }
}`];
exports.DefaultFunctions = ['getContentType', 'getContentByPath', 'getContentById'];
exports.documents = [...exports.queries, ...exports.fragments];
const injectFragments = (base) => {
    const baseIsArray = Array.isArray(base);
    return baseIsArray ? [...exports.fragments, ...base] : [...exports.fragments, base];
};
exports.injectFragments = injectFragments;
//# sourceMappingURL=documents.js.map