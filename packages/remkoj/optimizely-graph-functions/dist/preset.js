"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preset = void 0;
const tslib_1 = require("tslib");
const fragmentMatcherPlugin = tslib_1.__importStar(require("@graphql-codegen/fragment-matcher"));
const optlyFunctionsPlugin = tslib_1.__importStar(require("./index"));
const client_preset_1 = require("@graphql-codegen/client-preset");
const documents_1 = require("./documents");
const utils_1 = require("./utils");
const defaultOptions = {
    optlyFunctions: [
        'getContentByPath',
        'getContentById'
    ],
    optlyPrettyQuery: false
};
exports.preset = {
    prepareDocuments: async (outputFilePath, outputSpecificDocuments) => [...outputSpecificDocuments, `!${outputFilePath}`, ...documents_1.fragments, ...documents_1.queries],
    buildGeneratesSection: async (options) => {
        const baseGenerates = await client_preset_1.preset.buildGeneratesSection(options);
        const indexFilePluginIndex = baseGenerates.findIndex(fileDefinition => fileDefinition.filename.endsWith("index.ts"));
        const indexFilePlugin = indexFilePluginIndex >= 0 ? baseGenerates.splice(indexFilePluginIndex, 1) : [];
        baseGenerates.push({
            filename: `${options.baseOutputDir}fragment-types.json`,
            pluginMap: {
                [`fragment-matcher`]: fragmentMatcherPlugin,
            },
            plugins: [
                {
                    [`fragment-matcher`]: {},
                },
            ],
            schema: options.schema,
            config: {
                module: 'es2015',
                apolloClientVersion: 3,
                useExplicitTyping: true,
            },
            documents: [],
            documentTransforms: options.documentTransforms,
        });
        baseGenerates.unshift({
            filename: `${options.baseOutputDir}functions.ts`,
            pluginMap: {
                ['optly-functions']: optlyFunctionsPlugin
            },
            plugins: [
                {
                    ['optly-functions']: {}
                }
            ],
            schema: options.schema,
            config: (0, utils_1.extractPluginConfigAndApplyDefaults)(options.presetConfig, defaultOptions),
            documents: options.documents,
            documentTransforms: options.documentTransforms
        });
        if (indexFilePlugin.length > 0) {
            const currentContent = indexFilePlugin[0]?.plugins[0]?.add?.content;
            if (currentContent)
                indexFilePlugin[0].plugins[0].add.content = `export * as Schema from "./graphql";\n${currentContent}\nexport * from "./functions";`;
        }
        baseGenerates.push(...indexFilePlugin);
        return baseGenerates;
    },
};
exports.default = { preset: exports.preset };
//# sourceMappingURL=preset.js.map