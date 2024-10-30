"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    `fragment IContentData on _IContent
    {
        _metadata {
            ...IContentInfo
        }
        _type: __typename
    }`,
    `fragment CompositionData on ICompositionNode {
        name: displayName
        layoutType: nodeType    
        type
        key
        template: displayTemplateKey
        settings: displaySettings {
            key
            value
        }
        ... on ICompositionStructureNode {
            nodes @recursive(depth: 10) {
                name: displayName
            }
        }
        ... on ICompositionComponentNode {
            component {
                ...ElementData
            }
        }
    }`,
    `fragment IElementData on _IComponent {
        _metadata {
            ...IContentInfo
        }
        _type: __typename
    }`,
    `fragment ElementData on _IComponent {
        ...IElementData
    }`,
    `fragment BlockData on _IContent {
        ...IContentData
    }`,
    `fragment PageData on _IContent {
        ...IContentData
    }`,
    `fragment LinkData on ContentUrl {
        base
        hierarchical
        default
    }`,
    `fragment ReferenceData on ContentReference {
        key
        url {
            ...LinkData
        }
    }`,
    `fragment IContentInfo on IContentMetadata {
        key
        locale
        types
        displayName
        version
        url {
            ...LinkData
        }
    }`,
    `fragment IContentListItem on _IContent {
        ...IContentData
    }`,
    `fragment ExperienceData on _IExperience {
        composition {
            ...CompositionData
        }
    }`,
    `fragment LinkItemData on Link {
        title
        text
        target
        url {
            ...LinkData
        }
    }`
];
//# sourceMappingURL=fragments.cms13.js.map