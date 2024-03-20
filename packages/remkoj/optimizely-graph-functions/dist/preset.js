"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preset = void 0;
const tslib_1 = require("tslib");
const documents_1 = require("./documents");
const client_preset_1 = require("@graphql-codegen/client-preset");
const index_1 = tslib_1.__importStar(require("./index"));
const transform_1 = tslib_1.__importStar(require("./transform"));
exports.preset = {
    prepareDocuments: async (outputFilePath, outputSpecificDocuments) => {
        const documents = client_preset_1.preset.prepareDocuments ? await client_preset_1.preset.prepareDocuments(outputFilePath, outputSpecificDocuments) : [...outputSpecificDocuments, `!${outputFilePath}`];
        documents.push([...documents_1.fragments, ...documents_1.queries].join("\n"));
        return documents;
    },
    buildGeneratesSection: async (options) => {
        options.documentTransforms = [
            {
                name: 'optly-transform',
                transformObject: transform_1.default,
                config: (0, transform_1.pickTransformOptions)(options.presetConfig)
            }
        ];
        const section = await client_preset_1.preset.buildGeneratesSection(options);
        section.push({
            filename: `${options.baseOutputDir}functions.ts`,
            pluginMap: {
                ['optly-functions']: index_1.default
            },
            plugins: [
                {
                    ['optly-functions']: {}
                }
            ],
            schema: options.schema,
            config: (0, index_1.pickPluginOptions)(options.presetConfig),
            documents: options.documents,
            documentTransforms: options.documentTransforms
        });
        section.forEach((fileConfig, idx) => {
            if (fileConfig.filename.endsWith("index.ts")) {
                const currentContent = section[idx].plugins[0]?.add?.content;
                if (currentContent)
                    section[idx].plugins[0].add.content = `export * as Schema from "./graphql";\n${currentContent}\nexport * from "./functions";`;
            }
        });
        return section;
    },
};
exports.default = exports.preset;
//# sourceMappingURL=preset.js.map