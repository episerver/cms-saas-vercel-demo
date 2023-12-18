import type { CodegenConfig  } from '@graphql-codegen/cli'
import * as DotEnv from 'dotenv'
import { expand } from 'dotenv-expand'
import path from 'node:path'
import fs from 'node:fs'
import figures from 'figures'
import chalk from 'chalk'
import type { FragmentMatcherConfig } from '@graphql-codegen/fragment-matcher'


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

const cgGateway = `${ process.env.OPTIMIZELY_CONTENTGRAPH_GATEWAY }/content/v2?cache=false`

const schemaInfo : CodegenConfig['schema'] = {}
schemaInfo[cgGateway] = {
    headers: {
        Authorization: `epi-single ${ process.env.OPTIMIZELY_CONTENTGRAPH_SINGLE_KEY }`
    }
}

const config: CodegenConfig = {
    schema: schemaInfo,
    documents: [
        // Add local GQL files
        'src/**/*.graphql',

        // Add Definitions from components
        'src/**/!(*.d).{ts,tsx}',

        // Add Definitions from mono-repo
        '../../packages/**/!(*.d).{ts,tsx}'
    ],
    generates: {
        './gql/': {
            preset: 'client',
            plugins: [],
            presetConfig: {
                gqlTagName: 'gql'
            }
        },
        './gql/fragment-types.json': {
            plugins: ['fragment-matcher'],
            config: {
              module: 'es2015',
              apolloClientVersion: 3,
              useExplicitTyping: true
            } as FragmentMatcherConfig,
        },
        './gql/functions.ts': {
            plugins: ['codegen-plugin.js'],
            config: {
                optlyFunctions: [
                    'getContentByPath',
                    'getContentById'
                ],
                optlyInjections: [
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
                ]
            }
        }
    },
    ignoreNoDocuments: false
}

export default config