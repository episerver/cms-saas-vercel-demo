"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotNullOrUndefined = isNotNullOrUndefined;
exports.isFragmentDefinitionNode = isFragmentDefinitionNode;
exports.isSelectionDefinitionNode = isSelectionDefinitionNode;
exports.isIntoMatch = isIntoMatch;
exports.extractPluginConfigAndApplyDefaults = extractPluginConfigAndApplyDefaults;
const graphql_1 = require("graphql");
function isNotNullOrUndefined(toTest) {
    return toTest ? true : false;
}
function isFragmentDefinitionNode(node) {
    return node?.kind == graphql_1.Kind.FRAGMENT_DEFINITION && node.name.value ? true : false;
}
function isSelectionDefinitionNode(node) {
    return node?.kind == graphql_1.Kind.OPERATION_DEFINITION || node?.kind == graphql_1.Kind.FRAGMENT_DEFINITION;
}
function isIntoMatch(toTest) {
    if (!toTest)
        return false;
    return toTest.match ? true : false;
}
function extractPluginConfigAndApplyDefaults(baseConfig, defaultValues) {
    const extractedConfig = {
        clientPath: baseConfig?.clientPath || undefined,
        functions: baseConfig?.functions || undefined,
        prettyPrintQuery: baseConfig?.prettyPrintQuery || undefined
    };
    for (const propName of Object.getOwnPropertyNames(extractedConfig))
        if (extractedConfig[propName] == null || extractedConfig[propName] == undefined)
            delete extractedConfig[propName];
    return {
        ...defaultValues,
        ...extractedConfig
    };
}
//# sourceMappingURL=utils.js.map