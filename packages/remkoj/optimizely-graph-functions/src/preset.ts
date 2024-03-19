import type { Types } from '@graphql-codegen/plugin-helpers'
import type * as OptlyFunctionsTypes from './types'
import * as fragmentMatcherPlugin from '@graphql-codegen/fragment-matcher'
import * as optlyFunctionsPlugin from './index'
import { preset as clientPreset, type ClientPresetConfig } from '@graphql-codegen/client-preset'
import { fragments, queries } from './documents'
import { extractPluginConfigAndApplyDefaults } from './utils'

export type OptimizelyGraphFunctionsPresetConfig = ClientPresetConfig & OptlyFunctionsTypes.OptimizelyFunctionOptions

const defaultOptions : Partial<OptlyFunctionsTypes.OptimizelyFunctionOptions> = {
    optlyFunctions: [
        'getContentByPath',
        'getContentById'
    ],
    optlyPrettyQuery: false
}

export const preset : Types.OutputPreset<OptimizelyGraphFunctionsPresetConfig> =
{
    prepareDocuments: async (outputFilePath, outputSpecificDocuments) => [...outputSpecificDocuments, `!${outputFilePath}`, ...fragments, ...queries],
    buildGeneratesSection: async (options)  => {
        const baseGenerates = await clientPreset.buildGeneratesSection(options)
        //console.log(baseGenerates)
        //console.log(Object.getOwnPropertyNames(options.presetConfig), options.baseOutputDir)
        const indexFilePluginIndex = baseGenerates.findIndex(fileDefinition => fileDefinition.filename.endsWith("index.ts"))
        const indexFilePlugin = indexFilePluginIndex >= 0 ? baseGenerates.splice(indexFilePluginIndex, 1) : []
        baseGenerates.push({
            filename: `${ options.baseOutputDir }fragment-types.json`,
            pluginMap: {
                //[`add`]: addPlugin,
                [`fragment-matcher`]: fragmentMatcherPlugin,
              },
              plugins: [
                //{ [`add`]: { content: `/* eslint-disable */` } },
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
        })
        baseGenerates.unshift({
            filename: `${ options.baseOutputDir }functions.ts`,
            pluginMap: {
                ['optly-functions']: optlyFunctionsPlugin
            },
            plugins: [
                {
                    ['optly-functions']: {}
                }
            ],
            schema: options.schema,
            config: extractPluginConfigAndApplyDefaults(options.presetConfig, defaultOptions),
            documents: options.documents,
            documentTransforms: options.documentTransforms
        })

        // Add functions
        if (indexFilePlugin.length > 0) {
            const currentContent = indexFilePlugin[0]?.plugins[0]?.add?.content
            if (currentContent)
                indexFilePlugin[0].plugins[0].add.content = `export * as Schema from "./graphql";\n${currentContent}\nexport * from "./functions";`
        }

        // Re-add the indexFilePlugin at the end
        baseGenerates.push(...indexFilePlugin)

        return baseGenerates
    },
}

export default { preset }