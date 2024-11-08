import { type CliModule } from '../types.js'
import fs from 'node:fs'
import path from 'node:path'

import { wellknownRoute, routeFile, flagsFile, optiFlags, optiDataFileConfigKey, sdkFile } from './_convention.js'

type OptiFlagsConfigFile = {
    [ flagKey: string]: {
        description?: string
        variables?: {
            [variableKey: string]: {
                description?: string
                type: 'integer' | 'boolean' | 'string' | 'json' | 'double'
                default: string | boolean | number | object
            }
        }
    }
}

export const PullCommand : CliModule = {
    command: "pull",
    describe: "Update the optiflags.json and flags.ts from FX; without removing flags or variables so the site won't break",
    async handler(args, opts) {
        const { path: cwd, nosrc, project, token } = args
        const flagsConfigFile = path.normalize(path.join(cwd, optiFlags))
        const flagsConfig : OptiFlagsConfigFile = fs.existsSync(flagsConfigFile) ? JSON.parse(fs.readFileSync(flagsConfigFile).toString()) : {}
        const flagsListing = await getAllFlags(project, token)

        //Add/Update the flags from Optimizely Feature Experimentation to the configuration
        flagsListing.items.map(async (flag: any) => {
            flagsConfig[flag.key] = {
                description: flag.description,
                variables: flagsConfig[flag.key]?.variables ?? {}
            }
            for (const variableKey of Object.getOwnPropertyNames(flag.variable_definitions)) {
                const variableData = flag.variable_definitions[variableKey]
                flagsConfig[flag.key]['variables'][variableKey] = {
                    description: variableData.description,
                    type: variableData.type,
                    default: parseValue(variableData.type, variableData.default_value)
                }
            }
        })

        // Async write of config file, don't await the result
        fs.writeFile(flagsConfigFile, JSON.stringify(flagsConfig, undefined, 2), (err) => {
            if (err)
                console.error(`‼ Error updating the flags configuration file ${ optiFlags }`)
            else
                console.log(`✔ Flags configuration file ${ optiFlags } updated`)
        })

        // Prepare processing
        const flagExports = []
        const allFlags = Object.getOwnPropertyNames(flagsConfig).map(flagKey => {return { key: flagKey, ...flagsConfig[flagKey]}})

        // Process all flags into the flags.ts file
        await Promise.all(allFlags.map(async flag => {
            const flagVariable = flag.key.split('-').map((p,i) => i == 0 ? p : p[0].toUpperCase() + p.substring(1)).join("")    

            const variationData = await getAllVariations(project, flag.key, token) as { items: { name: string, enabled: boolean, variables: { [variableKey: string]: { type: string, value: string }} }[]}
            const variations = variationData.items.map(variation => 
            {
                return `{
            label: "${ variation.name }",
            value: ${ defintionsToDefault(variation.variables, 'value', variation.enabled) }
        }`
            })

            let flagCode = `export const ${ flagVariable } = flag<OptimizelyFlag<${ defintionsToType(flag.variables) }>>({
    key: '${ flag.key }',
    origin: 'https://app.optimizely.com/v2/projects/${ project }/flags/manage/${ flag.key }/variations',
    description: '${ flag.description ?? '' }',
    defaultValue: ${ defintionsToDefault(flag.variables, 'default', false) },
    async decide() {
        const ctx = await getUserContext()
        const decision = ctx?.decide('${ flag.key }') as TypedOptimizelyDecision<${ defintionsToType(flag.variables) }>
        if (!decision)
            throw new Error("No decision made by Optimizely Feature Experimentation")
        return {
            _enabled: decision.enabled,
            ...decision.variables
        }
    },
    options: [
        ${ variations.join(",\n        ")}
    ]
})`;
            flagExports.push(flagCode)
        }));
    
        // Build contents for flags.ts
        const flagsts = path.normalize(path.join(cwd, nosrc ? '.' : 'src', flagsFile))

        // Write contents to file
        fs.writeFile(flagsts, intro + flagExports.join("\n\n"), (err) => {
            const flagsMsgPath = path.normalize(path.join(nosrc ? '.' : 'src', flagsFile))
            if (err)
                console.error(`‼ Error updating the Vercel flags file ${ flagsMsgPath }`)
            else
                console.log(`✔ Vercel flags file ${ flagsMsgPath } updated`)
        })
    }
}

export default PullCommand


function defintionsToDefault<T extends Record<string,any>>(obj: T, fieldName: keyof T[string] = "default_value", enabled = true ) {
    const newObj = {
        _enabled: enabled
    }

    for (var entry of Object.getOwnPropertyNames(obj)) {
        newObj[entry] = parseValue(obj[entry].type, obj[entry][fieldName])
    }

    return JSON.stringify(newObj)
}

/**
 * Process a value reported from the Optimizely FX API
 * 
 * @param       type    The value type reported
 * @param       value   The string encoded version of the value
 * @returns     The parsed value
 */
function parseValue(type: string, value: string) : string | boolean | number | object
{
    switch (type) {
        case 'boolean':
            return value == 'true'
        case 'integer':
            return Number.parseInt(value)
        case 'double':
            return Number.parseFloat(value)
        default:
            return value
    }
}

function defintionsToType(obj) 
{
    const entries = []
    for (var entry of Object.getOwnPropertyNames(obj)) {
        let typeName = obj[entry].type
        switch (obj[entry].type) {
            case 'json':
                typeName = 'any'
                break;
            case 'integer':
            case 'double':
                typeName = 'number'
                break;
        }
        entries.push(`${entry}: ${typeName}`)
    }
    return `{ ${ entries.join(', ') } }`
}

async function getAllFlags(projectId: string, accessToken: string)
{
    return fetch(`https://api.optimizely.com/flags/v1/projects/${ projectId }/flags?archived=false&per_page=10`, { headers: { Authorization: `Bearer ${ accessToken }`}}).then(r => r.json())
}

async function getAllVariations(projectId: string, flagKey: string, accessToken: string)
{
    return fetch(`https://api.optimizely.com/flags/v1/projects/${ projectId }/flags/${flagKey}/variations?archived=false&per_page=10`, { headers: { Authorization: `Bearer ${ accessToken }`}}).then(r => r.ok ? r.json() : { items: [] })
}

const intro = `// Auto generated flags.ts from Optimizely Feature Experimentation
import { unstable_flag as flag } from '@vercel/flags/next';
import { type OptimizelyDecision } from '@optimizely/optimizely-sdk/lite';
import { getUserContext } from './${ path.basename(sdkFile, '.ts') }';

type OptimizelyFlag<T extends { [variableKey: string]: unknown }> = {
  _enabled: boolean
} & T

type TypedOptimizelyDecision<T extends { [variableKey: string]: unknown }> = Omit<OptimizelyDecision, 'variables'> & {
  variables: T
}

`
