"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractPluginConfigAndApplyDefaults = exports.isIntoMatch = exports.isSelectionDefinitionNode = exports.isFragmentDefinitionNode = exports.isNotNullOrUndefined = void 0;
const graphql_1 = require("graphql");
function isNotNullOrUndefined(toTest) {
    return toTest ? true : false;
}
exports.isNotNullOrUndefined = isNotNullOrUndefined;
function isFragmentDefinitionNode(node) {
    return node?.kind == graphql_1.Kind.FRAGMENT_DEFINITION && node.name.value ? true : false;
}
exports.isFragmentDefinitionNode = isFragmentDefinitionNode;
function isSelectionDefinitionNode(node) {
    return node?.kind == graphql_1.Kind.OPERATION_DEFINITION || node?.kind == graphql_1.Kind.FRAGMENT_DEFINITION;
}
exports.isSelectionDefinitionNode = isSelectionDefinitionNode;
function isIntoMatch(toTest) {
    if (!toTest)
        return false;
    return toTest.match ? true : false;
}
exports.isIntoMatch = isIntoMatch;
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
exports.extractPluginConfigAndApplyDefaults = extractPluginConfigAndApplyDefaults;
//# sourceMappingURL=utils.js.map