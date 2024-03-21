// Environment file parsing and updating
import * as DotEnv from 'dotenv'
import { expand } from 'dotenv-expand'
import path from 'node:path'
import fs from 'node:fs'
import figures from 'figures'
import chalk from 'chalk'

// Process environment files, to ensure the enviornment configuration is applied
const envFiles : string[] = [".env", ".env.local"]
if (process.env.NODE_ENV) {
    envFiles.push(`.env.${ process.env.NODE_ENV }`)
    envFiles.push(`.env.${ process.env.NODE_ENV }.local`)
}
envFiles.map(s => path.join(process.cwd(), s)).filter(s => fs.existsSync(s)).reverse().forEach(fileName => {
    var result = DotEnv.config({ path: fileName, override: false })
    expand(result)
    console.log(`${ chalk.greenBright(figures.tick) } Processed ${fileName}`)
})

// Actual code generation setup
import type { CodegenConfig  } from '@graphql-codegen/cli'
import getSchemaInfo from '@remkoj/optimizely-graph-client/codegen'
import OptimizelyGraphPreset, {type PresetOptions as OptimizelyGraphPresetOptions}  from '@remkoj/optimizely-graph-functions/preset'

// Create the configuration itself
const config: CodegenConfig = {
    schema: getSchemaInfo(),
    documents: [
        // Add local GQL files
        'src/**/*.graphql',

        // Add Definitions from components
        'src/**/!(*.d).{ts,tsx}'
    ],
    generates: {
        './gql/': {
            preset: OptimizelyGraphPreset,
            presetConfig: {
                gqlTagName: 'gql',
                injections: [
                    {
                        // Add from all pages, except colocated blocks
                        into: "PageData",
                        pathRegex: "src\/components\/page.*(?<!block\.tsx)$"
                    },
                    {
                        // Add from all blocks, included blocks colocated with pages
                        into: "BlockData",
                        pathRegex: "src\/components\/(block.*|page.*block.[tj]s[x]{0,1})$"
                    },
                    {
                        // Add from all blocks
                        into: "BlockData",
                        pathRegex: "src\/components\/block"
                    }
                ],
            } as OptimizelyGraphPresetOptions
        }
    },
    ignoreNoDocuments: false
}

export default config