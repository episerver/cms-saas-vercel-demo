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

## Query Fragments
The preset automatically injects the following fragments into your list of documents when generating the code. This allows optimization of the generated query size and normalize output so it can be used by the `CmsContent` and `CmsContentArea` components (Which are available in the `@remkoj/optimizely-dxp-react` package).

The following GraphQL Fragments are available:

| Name | Description |
| --- | --- |
| ContentLink | Get the fields needed from a ContentLink field, so it can be used to look up content |
| ContentLinkSearch | Get the fields needed from a ContentLink field, so it can be used to look up content, within a searchable context |
| IContentData | The fields on an IContent item needed by the `CmsContent` component to reliably determine the content type and load it's data
| ContentAreaItemData | Retrieve the items within a *searchable* ContentArea on a **Page** component, so that the content can be rendered by the `CmsContentArea` component
| BlockContentAreaItemData | Retrieve the items within a *non-searchable* ContentArea on a **Block** component, so that the content can be rendered by the `CmsContentArea` component |
| BlockContentAreaItemSearchData | Retrieve the items within a *searchable* ContentArea on a **Block** component, so that the content can be rendered by the `CmsContentArea` component |
| LinkItemData | |
| ImageData | |
| ImageDataSearch | |