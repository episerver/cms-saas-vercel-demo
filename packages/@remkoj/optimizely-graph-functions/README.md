# Optimizely GraphQL Codegen Plugin
GraphQL Codegen plugin and preset which generate both the GraphQL type definitions and a few convenienece methods for useage with [Optimizely Graph Client](../optimizely-graph-client/README.md).

## Install package
To install using Yarn, use the following command:

```bash
yarn add --dev @remkoj/optimizely-graph-functions
```

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
        './src/gql/': {
            preset: OptimizelyGraphPreset,
            presetConfig: {
                // By default the preset will not support recursive queries, 
                // however if your content model requires it, you can enable
                // it here.
                //
                // When setting recursion to `true` it requires additional
                // steps to work
                recursion: false,

                // The GQL tag to be used to identify inline GraphQL queries
                gqlTagName: 'gql',

                // Configure the fragments that will be spread into the utility
                // partial fragments. You can use any fragment here, however 
                // the system is designed for the following receiving 
                // fragments:
                // - PageData => For all page-level components
                // - BlockData => For everyting that can be rendered as
                //                individual component
                // - ElementData => For all element types that are useable
                //                  within Visual Builder
                injections: [
                    {
                        // Add from all Pages, as .page.graphql file
                        into: "PageData",
                        pathRegex: "src\/components\/cms\/.*\.page\.graphql$"
                    },
                    {
                        // Add from all Experiences, as .experience.graphql file
                        into: "PageData",
                        pathRegex: "src\/components\/cms\/.*\.experience\.graphql$"
                    },
                    {
                        // Add from all Blocks, as .component.graphql file
                        into: "BlockData",
                        pathRegex: "src\/components\/cms\/.*\.component\.graphql$"
                    },
                    {
                        // Add from all Elements, as .element.graphql file
                        into: "ElementData",
                        pathRegex: "src\/components\/cms\/.*\.element\.graphql$"
                    }
                ],
            } as OptimizelyGraphPresetOptions
        }
    },
    ignoreNoDocuments: false
}

export default config
```

The presetConfig of the `OptimizelyGraphPreset` is an extension of the configuration for the [Client Preset](https://the-guild.dev/graphql/codegen/plugins/presets/preset-client) of GraphQL Codegen. It adds the following configuration options:

| Configuration option | Usage |
| --- | --- |
| recursion | Set to `true` to automatically generate recursive queries to iterate down the result.<br><br>The default logic of GraphQL Codegen contains an infite loop when disabling the recursion check. To patch this, a custom resolution must be added to the root `package.json`. This resolution must set the resolution for `@graphql-codegen/visitor-plugin-common` to the patched file [provided within this repository](../../dependencies/graphql-codegen-visitor-plugin-common-v5.3.1-patched.tgz) |
| injections | A set of rules to define how individual fragments will be used to construct the master queries. Each rule has the following options: <br/>- `into`:  The name of the Fragment to inject into<br/>- `pathRegex`: The regular expression to be applied ot the file name to see if the fragment should be included with the `into` Fragment<br/>- `nameRegex`: The regular expression to be applied to the name of the Fragment
| documents | The standard rules for preset specific documents, however there are four standard documents available:<br/>- `opti-cms:/queries/13` (included by default)<br/>- `opti-cms:/queries/12`<br/>- `opti-cms:/fragments/13` (included by default)<br/>- `opti-cms:/fragments/12`<br/>*The defaults are only applied when there's no document starting with `opti-cms:` defined*
| functions | The list of GraphQL Functions that should be made available in the `functions.ts` file. When specified, this overrides the default list.<br/>*Default value: `['getContentType','getContentByPath','getContentById']`*
| verbose | Set to `true` to enable debugging output of the preset, loader, plugin and transform |


## Usage
After running the code generation, you can use the following API's (assuming the folder where the generated files are stored is available at `@/gql`):

### Option 1: Direct methods
Only the methods specified by the `functions` preset configuration are available using this method.

```typescript
import { getContentById, getContentByPath } from "@/gql/functions"
import createClient from "@remkoj/optimizely-graph-client"

const client = createClient({
    single_key: "your single key here"
})

const contentFromId = await getContentById(client, { guidValue: '00000000-0000-0000-0000-000000000000', locale: 'en' })
const contentFromPath = await getContentByPath(client, { path: '/en' })
```

### Option 2: Enhanced Client
All GraphQL operations (e.g. Queries, Mutations, ...) defined within the documents are available using this method.

```typescript
import { getSdk } from "@/gql/client"
import createClient from "@remkoj/optimizely-graph-client"

const client = getSdk(createClient({
    single_key: "your single key here"
}))
const contentId = '00000000-0000-0000-0000-000000000000'
const locale = Schema.Locales.En

const contentItem = await client.getContentById({ guidValue: contentId, locale })
```

## Query Fragments
The preset automatically injects a number of fragments and documents into the generated code. These can be found in their respective document:

- [`opti-cms:/queries/13`](./src/documents/queries.cms13.ts)
- [`opti-cms:/queries/12`](./src/documents/queries.cms12.ts)
- [`opti-cms:/fragments/13`](./src/documents/fragments.cms13.ts)
- [`opti-cms:/fragments/12`](./src/documents/fragments.cms12.ts)
