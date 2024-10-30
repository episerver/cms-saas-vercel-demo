"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    // Global required fragments
    `fragment BlockData on IContent {
    ...IContentData
  }`,
    `fragment PageData on IContent {
    ...IContentData
  }`,
    // NextJS:Create CLI Compatibility
    `fragment PageIContentListItem on ContentAreaItemModel {
    item: ContentLink {
      data: Expanded {
        ...BlockData
      }
    }
    displayOption:DisplayOption
  }`,
    `fragment PageIContentListItemSearch on ContentAreaItemModelSearch {
    item: ContentLink {
      data: Expanded {
        ...BlockData
      }
    }
    displayOption:DisplayOption
  }`,
    `fragment IContentListItem on ContentAreaItemModel {
    item: ContentLink {
      data: Expanded {
        ...RecursiveBlockData
      }
    }
    displayOption:DisplayOption
  }`,
    `fragment IContentListItemSearch on ContentAreaItemModelSearch {
    item: ContentLink {
      data: Expanded {
        ...RecursiveBlockData
      }
    }
    displayOption:DisplayOption
  }`,
    `fragment RecursiveBlockData on IContent {
    ...IContentData
  }`,
    `fragment ReferenceData on ContentModelReference {
    id: Id,
    version: WorkId,
    key: GuidValue
    data: Expanded {
      ...RecursiveBlockData
    }
  }`,
    `fragment ReferenceDataSearch on ContentModelReferenceSearch {
    id: Id,
    version: WorkId,
    key: GuidValue
    data: Expanded {
      ...RecursiveBlockData
    }
  }`,
    `fragment BinaryData on BlobModel {
    id: Id
    url: Url
  }`,
    `fragment ContentLink on ContentModelReference {
    id: Id,
    version: WorkId,
    key: GuidValue
    data: Expanded {
      ...RecursiveBlockData
    }
  }`,
    `fragment ContentLinkSearch on ContentModelReferenceSearch {
    id: Id,
    version: WorkId,
    key: GuidValue
    data: Expanded {
      ...RecursiveBlockData
    }
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
    `fragment LinkItemDataSearch on LinkItemNodeSearch {
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
    // Original CMS 12 Fragments
    `fragment IContentData on IContent {
    contentType: ContentType
    _metadata: ContentLink {
      id: Id,
      version: WorkId,
      key: GuidValue
    }
    locale: Language {
        name: Name
    }
    path:RelativePath
    _type: __typename
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
    }`
];
//# sourceMappingURL=fragments.cms12.js.map