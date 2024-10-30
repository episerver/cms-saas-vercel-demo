"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    `query getContentById($id: Int, $workId: Int, $guidValue: String, $locale: [Locales!], $isCommonDraft: Boolean) {
        content: Content(
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
    `query getContentByPath($path: String!, $locale: [Locales], $siteId: String) {
        content: Content(
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
    }`,
    `query getContentType($id: Int, $workId: Int, $guidValue: String, $locale: [Locales]) {
        content: Content(
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
    }`
];
//# sourceMappingURL=queries.cms12.js.map