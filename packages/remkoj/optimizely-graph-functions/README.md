# Optimizely GraphQL Codegen Plugin
GraphQL Codegen plugin and preset which generate both the GraphQL type definitions and a few convenienece methods for useage with [Optimizely Graph Client](../optimizely-graph-client/README.md).

## Install package
This package is provided as part of the example site mono-repository and thus doesn't need to be installed separately.

## Configure package
Create a codegen.ts within your application root folder (e.g. apps/frontend/codegen.ts within the example site). Within the codegen.ts create the following configuration:

```typescript
import type { CodegenConfig  } from '@graphql-codegen/cli'
import getSchemaInfo from '@remkoj/optimizely-graph-client/codegen'

// If needed add logic to read/update the environment variables,
// or build a configuration object for the getSchemaInfo() below

// Create the configuration itself
const config: CodegenConfig = {
    // Get a fully pre-configured schema
    schema: getSchemaInfo(),

    // Add the location of your GraphQL queries, this assumes you're using an app folder
    documents: [ 'src/**/!(*.d).{ts,tsx}' ],
    generates: {
        // Output folder
        './gql/': {
            // Add the provided preset from this package
            //@ts-expect-error: Type of the preset isn't detected properly
            preset: '@remkoj/optimizely-graph-functions/preset',
            plugins: [],
            presetConfig: {
                // All options from the 'client' preset are valid here
                gqlTagName: 'gql',

                // Configure how block and page fragments can be identified
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
```

## Usage
After running the code generation, you can use the following API's (assuming the folder where the generated files are stored is available at '@/gql'):

```typescript
import { getContentById, getContentByPath } from '@/gql'

const client = /* fetch your client */

const contentFromId = await getContentById(client, { guidValue: '00000000-0000-0000-0000-000000000000', locale: 'en' })
const contentFromPath = await getContentByPath(client, { path: '/en' })
```