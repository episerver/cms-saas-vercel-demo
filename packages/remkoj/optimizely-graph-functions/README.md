# Optimizely GraphQL Codegen Plugin
GraphQL Codegen plugin and preset which generate both the GraphQL type definitions and a few convenienece methods for useage with [Optimizely Graph Client](../optimizely-graph-client/README.md).

## Install package
This package is provided as part of the example site mono-repository and thus doesn't need to be installed separately.

## Configure package
Create a codegen.ts within your application root folder (e.g. apps/frontend/codegen.ts within the example site). Within the codegen.ts create the following configuration:

```typescript
import type { CodegenConfig  } from '@graphql-codegen/cli'
import getSchemaInfo from '@remkoj/optimizely-graph-client/codegen'
import OptimizelyGraphPreset, {type PresetOptions as OptimizelyGraphPresetOptions}  from '@remkoj/optimizely-graph-functions/preset'

// This example assumes the configuration can be read from the environment variables, make sure .env files (if you use them) are processed prior to invoking getSchemaInfo()

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
```

## Usage
After running the code generation, you can use the following API's (assuming the folder where the generated files are stored is available at '@gql'):

### Option 1: Direct methods
```typescript
import { getContentById, getContentByPath } from '@gql'

const client = /* fetch your client */

const contentFromId = await getContentById(client, { guidValue: '00000000-0000-0000-0000-000000000000', locale: 'en' })
const contentFromPath = await getContentByPath(client, { path: '/en' })
```

### Option 2: Enhanced Client
```typescript
import { OptimizelyGraphClient, Schema } from '@gql'

const client = new OptimizelyGraphClient({
    single_key: "your single key here"
})
const contentId = '00000000-0000-0000-0000-000000000000'
const locale = Schema.Locales.En

const contentItem = await client.getContentById({ guidValue: contentId, locale })
```