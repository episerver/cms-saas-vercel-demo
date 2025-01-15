// Leverage Next.JS configuration loading
import { loadEnvConfig } from '@next/env'
import figures from 'figures'
import chalk from 'chalk'
const loadEnvResult = loadEnvConfig(__dirname, undefined, console)
console.log(`${ chalk.greenBright(figures.tick) } Optimizely CMS Configuration`)
console.log(`  - Environments: ${ loadEnvResult.loadedEnvFiles.map(x => x.path).join(', ') }`)

// Actual code generation setup
import type { CodegenConfig  } from '@graphql-codegen/cli'
import getSchemaInfo from '@remkoj/optimizely-graph-client/codegen'
import OptimizelyGraphPreset, {type PresetOptions as OptimizelyGraphPresetOptions}  from '@remkoj/optimizely-graph-functions/preset'

// Create the configuration itself
const config: CodegenConfig = {
    schema: getSchemaInfo(),
    documents: [
        // Add local GraphQL files
        'src/**/*.graphql',
    ],
    generates: {
        './gql/': {
            //documents: ['opti-cms:/queries/13', 'opti-cms:/fragments/13'],
            preset: OptimizelyGraphPreset,
            presetConfig: {
                // By default the preset will generate recursive queries
                // untill multiple recursions are supported, this needs to
                // be disabled when there's more then one component that
                // will use recursion
                recursion: true,

                // The GQL tag to be used to identify inline GraphQL queries
                gqlTagName: 'gql',

                // Configure the fragments that will be spread into the utility
                // partial fragments. You can use any fragment here, however the
                // system is designed for the following receiving fragments:
                // - PageData => For all page-level components
                // - BlockData => For everyting that can be rendered as individual component
                // - ElementData => For all element types that are useable within Visual Builder
                injections: [
                    // Add Page/Experience GraphQL Files
                    {
                        into: "PageData",
                        pathRegex: "src\/components\/cms\/.*\.page\.graphql"
                    },
                    {
                        into: "PageData",
                        pathRegex: "src\/components\/cms\/.*\.experience\.graphql"
                    },

                    // Add Block/Component/Section GraphQL Files
                    {
                        into: "BlockData",
                        pathRegex: "src\/components\/cms\/.*\.block\.graphql"
                    },
                    {
                        into: "BlockData",
                        pathRegex: "src\/components\/cms\/.*\.component\.graphql"
                    },
                    {
                        into: "BlockData",
                        pathRegex: "src\/components\/cms\/.*\.section\.graphql"
                    },

                    // Add Element GraphQL Files
                    {
                        into: "ElementData",
                        pathRegex: "src\/components\/cms\/.*\.element\.graphql"
                    },

                    // Implementation Specific: Add Search GraphQL Files
                    {
                        into: "SearchData",
                        pathRegex: "src\/components\/cms\/.*\.search\.graphql"
                    },

                    // Implementation Specific: Add ContentArea items
                    {
                        into: "IContentListItem",
                        pathRegex: "src\/components\/cms\/.*\.contentarea\.graphql"
                    }

                ]
            } as OptimizelyGraphPresetOptions
        }
    },
    ignoreNoDocuments: false
}

export default config