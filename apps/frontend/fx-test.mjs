import nextEnv from '@next/env';
import fs from 'node:fs';
import path from 'node:path';

const {loadedEnvFiles} = nextEnv.loadEnvConfig(process.cwd());
const flagsFile = path.normalize(path.join(process.cwd(),'src/flags.ts'))

console.log(`Loaded environment from: ${ loadedEnvFiles.map(x => x.path).join(', ')}`);
console.log(`Generating Vercel Flags File: ${ flagsFile }`)


//Read environment
const sdkKey = process.env.OPTIMIZELY_FX_SDKKEY;
const projectId = process.env.OPTIMIZELY_FX_PROJECT;
const accessToken = process.env.OPTIMIZELY_FX_PAT;
const environment = process.env.NODE_ENV || 'development';

//Run 
(async () => {
    const flagsListing = await getAllFlags()
    const flagExports = []

    await Promise.all(flagsListing.items.map(async flag => {
        //console.log(flag)
        const flagVariable = flag.key.split('-').map((p,i) => i == 0 ? p : p[0].toUpperCase() + p.subString(1)).join("")
        //console.log(flagVariable, flagVariablesType)

        const variations = await getAllVariations(flag.key)

        const variationCodes = variations.items.map(variation => {
            return `{
            label: "${ variation.name }",
            value: {
                flagKey: "${ flag.key }",
                enabled: ${ variation.key == "off" ? "false" : "true" },
                ruleKey: null,
                variationKey: "${ variation.key }",
                reasons: ["Vercel Toolbar Override"],
                variables: ${ defintionsToDefault(variation.variables, 'value') }
            }                
        }`
        })

        let flagCode = `export const ${ flagVariable } = flag<TypedOptimizelyDecision<${ defintionsToType(flag.variable_definitions) }>>({
    key: '${ flag.key }',
    origin: 'https://app.optimizely.com/v2/projects/${ projectId }/flags/manage/${ flag.key }',
    description: '${ flag.description }',
    defaultValue: {
        flagKey: "${ flag.key }",
        enabled: false,
        ruleKey: null,
        variationKey: null,
        reasons: ["Vercel Flags Fallback Value"],
        variables: ${ defintionsToDefault(flag.variable_definitions) }
    },
    decide() {
        throw new Error("Not implemented yet")
    },
    options: [
        ${ variationCodes.join(",\n        ")}
    ]
})`;

        flagExports.push(flagCode)

    }))
    
    await (new Promise((resolve, reject) => {
        fs.writeFile(flagsFile, intro + flagExports.join("\n\n"), (err) => {
            if (err)
                reject(err)
            else
                resolve()
        })
    }))

})().then(() => {
    console.log("Done")
});

function defintionsToDefault(obj, fieldName = "default_value") {
    const newObj = {}

    for (var entry of Object.getOwnPropertyNames(obj)) {
        switch (obj[entry].type) {
            case 'boolean':
                newObj[entry] = obj[entry][fieldName] == 'true'
                break;
            default:
                newObj[entry] = obj[entry][fieldName]
                break;
        }
    }

    return JSON.stringify(newObj)
}

function defintionsToType(obj) 
{
    const entries = []
    for (var entry of Object.getOwnPropertyNames(obj)) {
        entries.push(`${entry}: ${obj[entry].type == 'json' ? 'any' : obj[entry].type}`)
    }
    return `{ ${ entries.join(', ') } }`
}

async function getAllFlags()
{
    return fetch(`https://api.optimizely.com/flags/v1/projects/${ projectId }/flags?archived=false&environment=${ environment }&per_page=10`, { headers: { Authorization: `Bearer ${ accessToken }`}}).then(r => r.json())
}

async function getAllVariations(flagKey)
{
    return fetch(`https://api.optimizely.com/flags/v1/projects/${ projectId }/flags/${flagKey}/variations?archived=false&per_page=10`, { headers: { Authorization: `Bearer ${ accessToken }`}}).then(r => r.json())
}

const intro = `// Auto generated flags.ts from Optimizely Feature Experimentation
import { unstable_flag as flag } from '@vercel/flags/next';
import { type FlagDefinitionsType, type ProviderData } from '@vercel/flags';
import { get } from '@vercel/edge-config'
import { type OptimizelyDecision } from '@optimizely/optimizely-sdk/lite'

type TypedOptimizelyDecision<T extends { [variableKey: string]: unknown }> = Omit<OptimizelyDecision, 'variables' | 'userContext'> & {
  variables: T
}

`
