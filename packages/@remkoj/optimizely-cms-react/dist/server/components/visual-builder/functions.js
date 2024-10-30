import { isContentLink, isInlineContentLink } from '@remkoj/optimizely-graph-client';
export function isElementNode(node) {
    return node.layoutType == "component";
}
export function isElementNodeOfType(node, test) {
    if (!isElementNode(node))
        return false;
    return test(node.component);
}
export function isStructureNode(node) {
    return !isElementNode(node);
}
export function isNode(toTest) {
    if (typeof (toTest) != 'object' || toTest == null)
        return false;
    const nodeTypes = ["experience", "section", "row", "column", "component"];
    const hasValidName = (typeof toTest.name == 'string' && (toTest.name?.length ?? 0) > 0) || toTest.name == null;
    const hasValidType = typeof toTest.layoutType == 'string' && nodeTypes.includes(toTest.layoutType);
    return hasValidName && hasValidType;
}
export function isContentType(toTest) {
    return Array.isArray(toTest) && toTest.every(x => typeof (x) == 'string' && x.length > 0);
}
export const defaultPropsFactory = (node) => {
    const contentType = node.component?._metadata?.types;
    if (!isContentType(contentType))
        throw new Error("Invalid content type: " + JSON.stringify(contentType));
    const contentLink = {
        key: node.component?._metadata?.key || node.key || undefined,
        version: node.component?._metadata?.version,
        locale: node.component?._metadata?.locale
    };
    if (!(isContentLink(contentLink) || isInlineContentLink(contentLink)))
        throw new Error("Invalid content link: " + JSON.stringify(contentLink));
    const layoutData = {
        type: node.type,
        layoutType: node.layoutType,
        template: node.template,
        settings: node.settings
    };
    return [contentLink, contentType, node.component, layoutData];
};
export const defaultNodePropsFactory = (node) => {
    const componentTypes = [
        // New style logic
        node.template && [node.template, ucFirst(node.type), ucFirst(node.layoutType), "Content"].filter(x => x),
        [ucFirst(node.type), ucFirst(node.layoutType), "Content"].filter(x => x),
        node.template && [node.template, ucFirst(node.layoutType), "Content"].filter(x => x),
        node.template && [node.template, "Styles", ucFirst(node.layoutType), "Content"].filter(x => x),
        node.template && [node.template, ucFirst(node.layoutType), "Nodes", "Content"].filter(x => x),
        // Old style logic
        [node.template, ucFirst(node.type), ucFirst(node.layoutType), "Component", "Content"].filter(x => x),
        (node.template && node.type) ? [node.type ? ucFirst(node.type) : null, ucFirst(node.layoutType), "Component", "Content"].filter(x => x) : null,
        // Fallback
        ["Node", "Content"],
        ["Node", "Component", "Content"]
    ].filter(x => x);
    const contentLink = { key: node.key ?? '' };
    const componentData = {};
    const layoutData = {
        type: node.type,
        layoutType: node.layoutType,
        template: node.template,
        settings: node.settings
    };
    if (!(isContentLink(contentLink) || isInlineContentLink(contentLink)))
        throw new Error("🔴 [VisualBuilder] Invalid content link: " + JSON.stringify(contentLink) + " - Node: " + JSON.stringify(node));
    return [contentLink, componentTypes, componentData, layoutData];
};
export function ucFirst(input) {
    if (typeof (input) == 'string' && input.length > 0)
        return input[0].toUpperCase() + input.substring(1);
    return null;
}
//# sourceMappingURL=functions.js.map