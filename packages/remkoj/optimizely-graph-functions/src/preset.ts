import type { Types } from '@graphql-codegen/plugin-helpers'
import { fragments, queries } from './documents'

// Import base preset
import { preset as clientPreset, type ClientPresetConfig as ClientPresetOptions } from '@graphql-codegen/client-preset'

// Import injected parts
import plugin, { pickPluginOptions, type PluginOptions } from './index'
import transform, { pickTransformOptions, type TransformOptions } from './transform'

// Create preset configuration
export type PresetOptions = ClientPresetOptions & PluginOptions & TransformOptions

export const preset : Types.OutputPreset<PresetOptions> =
{
    prepareDocuments: async (outputFilePath, outputSpecificDocuments) => {
        // Get the base documents
        const documents = clientPreset.prepareDocuments ? await clientPreset.prepareDocuments(outputFilePath, outputSpecificDocuments) : [...outputSpecificDocuments, `!${outputFilePath}`]

        // Then add the implicit documents to it
        documents.push([...fragments, ...queries].join("\n"))

        // Finally return the extended array
        return documents
    },

    buildGeneratesSection: async (options)  => {
        options.documentTransforms = [
            {
                name: 'optly-transform',
                transformObject: transform,
                config: pickTransformOptions(options.presetConfig)
            }
        ]

        const section = await clientPreset.buildGeneratesSection(options)
        
        // Add the functions file
        section.push({
            filename: `${ options.baseOutputDir }functions.ts`,
            pluginMap: {
                ['optly-functions']: plugin
            },
            plugins: [
                {
                    ['optly-functions']: {}
                }
            ],
            schema: options.schema,
            config: pickPluginOptions(options.presetConfig),
            documents: options.documents,
            documentTransforms: options.documentTransforms
        })

        // Add functions to index plugin
        section.forEach((fileConfig, idx) => {
            if (fileConfig.filename.endsWith("index.ts")) {
                const currentContent = section[idx].plugins[0]?.add?.content
                if (currentContent)
                    section[idx].plugins[0].add.content = `export * as Schema from "./graphql";\n${currentContent}\nexport * from "./functions";`
            }
        })

        return section
    },
}

export default preset