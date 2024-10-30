"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    `query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {
        content: _Content(
            where: {
                _or: [
                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }
                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }
                ]
            }
            locale: $locale
        ) {
            total
            items {
                ...BlockData
                ...PageData
            }
        }
    }`,
    `query getContentByPath($path: String!, $version: String, $locale: [Locales!], $domain: String) {
        content: _Content(
            where: {
                _metadata: { url: { default: { eq: $path }, base: { eq: $domain } }, version: { eq: $version }}
            }
            locale: $locale
        ) {
            total
            items {
                ...PageData
            }
        }
    }`,
    `query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {
        content: _Content(
            where: {
                _or: [
                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }
                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }
                ]
            }
            locale: $locale
        ) {
            total
            items {
                _metadata {
                    types
                }
            }
        }
    }`
];
//# sourceMappingURL=queries.cms13.js.map