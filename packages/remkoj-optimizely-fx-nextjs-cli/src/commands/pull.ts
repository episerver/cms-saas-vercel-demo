import { type CliModule } from '../types.js'
import fs from 'node:fs'
import path from 'node:path'

import { wellknownRoute, routeFile, flagsFile, optiFlags, optiDataFileConfigKey, sdkFile } from './_convention.js'

export const PullCommand : CliModule = {
    command: "pull",
    describe: "Add new feature flags from Optimizely Feature Experimentation to the codebase and update the options for each flag.",
    async handler(args, opts) {
        const { path: cwd, nosrc, project, token } = args
        const flagsListing = await getAllFlags(project, token)
        const flagExports = []

        await Promise.all(flagsListing.items.map(async flag => {
            const flagVariable = flag.key.split('-').map((p,i) => i == 0 ? p : p[0].toUpperCase() + p.subString(1)).join("")

            const variations = await getAllVariations(project, flag.key, token)

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
    origin: 'https://app.optimizely.com/v2/projects/${ project }/flags/manage/${ flag.key }',
    description: '${ flag.description }',
    defaultValue: {
        flagKey: "${ flag.key }",
        enabled: false,
        ruleKey: null,
        variationKey: null,
        reasons: ["Vercel Flags Fallback Value"],
        variables: ${ defintionsToDefault(flag.variable_definitions) }
    },
    async decide() {
        const ctx = await getUserContext()
        const decision = ctx?.decide('${ flag.key }') as TypedOptimizelyDecision<${ defintionsToType(flag.variable_definitions) }> | undefined
        if (!decision)
            throw new Error("No decision made by Optimizely Feature Experimentation")
        return decision
    },
    options: [
        ${ variationCodes.join(",\n        ")}
    ]
})`;

        flagExports.push(flagCode)

    }))
    
    const flagsts = path.normalize(path.join(cwd, nosrc ? '.' : 'src', flagsFile))

    await (new Promise((resolve, reject) => {
        fs.writeFile(flagsts, intro + flagExports.join("\n\n"), (err) => {
            if (err)
                reject(err)
            else
                resolve(undefined)
        })
    }))
    }
}

export default PullCommand


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

async function getAllFlags(projectId: string, accessToken: string)
{
    return fetch(`https://api.optimizely.com/flags/v1/projects/${ projectId }/flags?archived=false&per_page=10`, { headers: { Authorization: `Bearer ${ accessToken }`}}).then(r => r.json())
}

async function getAllVariations(projectId: string, flagKey: string, accessToken: string)
{
    return fetch(`https://api.optimizely.com/flags/v1/projects/${ projectId }/flags/${flagKey}/variations?archived=false&per_page=10`, { headers: { Authorization: `Bearer ${ accessToken }`}}).then(r => r.json())
}

const intro = `// Auto generated flags.ts from Optimizely Feature Experimentation
import { unstable_flag as flag } from '@vercel/flags/next';
import { type OptimizelyDecision } from '@optimizely/optimizely-sdk/lite';
import { getUserContext } from './${ path.basename(sdkFile, '.ts') }';

type TypedOptimizelyDecision<T extends { [variableKey: string]: unknown }> = Omit<OptimizelyDecision, 'variables' | 'userContext'> & {
  variables: T
}

`
