import { type CliModule } from '../types.js'
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

import { wellknownRoute, routeFile, flagsFile, optiFlags, sdkFile, optiDataFileConfigKey, dataFileHandler } from './_convention.js'
import { upsertAttributes } from '../operations/index.js'

export const SetupCommand : CliModule = {
    command: "setup",
    describe: "Run the initial setup of Feature Experimentation for Next.JS (App Router) on Vercel",
    async handler(args, opts) {
        process.stdout.write(`🚧 Running initial feature experimentation setup\n\n`)
        const { nosrc, path: cwd, envfile, key, project, token } = args

        if (!fs.existsSync(cwd))
            throw new Error(`The specified working directory does not exist! - ${cwd}`)

        if (!nosrc && !fs.existsSync(path.join(cwd, 'src')))
            throw new Error(`The source folder does not exist and 'nosrc' was not specified!`)

        const wellKnownApi = path.resolve(path.join(cwd, nosrc ? '.' : 'src', wellknownRoute, routeFile))
        if (!fs.existsSync(wellKnownApi)) {
            process.stdout.write("Creating Vercel well-known API route\n")
            const dirname = path.dirname(wellKnownApi)
            fs.mkdirSync(dirname, { recursive: true })
            fs.writeFileSync(wellKnownApi, routeHandlerTpl)
        }
        
        const datafileApi = path.resolve(path.join(cwd, nosrc ? '.' : 'src', dataFileHandler, routeFile))
        if (!fs.existsSync(datafileApi)) {
            process.stdout.write("Creating Optimizely Datafile webhook handler\n")
            const dirname = path.dirname(datafileApi)
            fs.mkdirSync(dirname, { recursive: true })
            fs.writeFileSync(datafileApi, datafileApiTpl)
        }

        const flagsProvider = path.resolve(path.join(cwd, nosrc ? '.' : 'src', flagsFile))
        if (!fs.existsSync(flagsProvider)) {
            process.stdout.write("Creating Next.JS flags provider\n")
            fs.writeFileSync(flagsProvider, flagsProviderTpl)
        }

        const userContextProvider = path.resolve(path.join(cwd, nosrc ? '.' : 'src', sdkFile))
        if (!fs.existsSync(userContextProvider)) {
            process.stdout.write("Creating Feature Experimentation User Context provider\n")
            fs.writeFileSync(userContextProvider, userContextProviderTpl)
        }

        const optiFlagsFile = path.resolve(path.join(cwd, optiFlags))
        if (!fs.existsSync(optiFlagsFile)) {
            process.stdout.write("Creating Optimizely FX Flags file\n")
            fs.writeFileSync(optiFlagsFile, "{}")
        }

        let envConfig = fs.existsSync(path.join(cwd, envfile)) ? fs.readFileSync(path.join(cwd, envfile)).toString() : ""
        let lineValue = ""
        if (lineValue = envConfig.match(new RegExp(`^OPTIMIZELY_FX_SDKKEY=(.+)$`, 'gm'))?.at(0)) {
            envConfig.replace(lineValue, `OPTIMIZELY_FX_SDKKEY=${ key }`)
        } else {
            process.stdout.write("Adding environment variable: OPTIMIZELY_FX_SDKKEY\n")
            envConfig += `\nOPTIMIZELY_FX_SDKKEY=${ key }`
        }
        if (lineValue = envConfig.match(new RegExp(`^OPTIMIZELY_FX_PROJECT=(.+)$`, 'gm'))?.at(0)) {
            envConfig.replace(lineValue, `OPTIMIZELY_FX_PROJECT=${ project }`)
        } else {
            process.stdout.write("Adding environment variable: OPTIMIZELY_FX_PROJECT\n")
            envConfig += `\nOPTIMIZELY_FX_PROJECT=${ project }`
        }
        if (lineValue = envConfig.match(new RegExp(`^OPTIMIZELY_FX_PAT=(.+)$`, 'gm'))?.at(0)) {
            envConfig.replace(lineValue, `OPTIMIZELY_FX_PAT=${ token }`)
        } else {
            process.stdout.write("Adding environment variable: OPTIMIZELY_FX_PAT\n")
            envConfig += `\nOPTIMIZELY_FX_PAT=${ token }`
        }
        if (!envConfig.match(new RegExp(`^FLAGS_SECRET=(.+)$`, 'gm'))?.at(0)) {
            process.stdout.write("Adding environment variable: FLAGS_SECRET\n")
            const randomToken = crypto.randomBytes(32).toString('base64url')
            envConfig += `\nFLAGS_SECRET=${ randomToken }`
        }
        process.stdout.write(`Updating ${ envfile }\n`)
        fs.writeFileSync(path.join(cwd, envfile), envConfig)

        process.stdout.write(`Registering default attributes in Feature Experimentation\n`)
        await upsertAttributes([
            {
                key: "user-agent",
                description: "Browser"
            },{
                key: "platform",
                description: "Operating system"
            },{
                key: "geo-continent",
                description: "GeoIP: Continent"
            },{
                key: "geo-country",
                description: "GeoIP: Country"
            },{
                key: "geo-region",
                description: "GeoIP: Region"
            },{
                key: "geo-city",
                description: "GeoIP: City"
            },{
                key: "geo-timezone",
                description: "GeoIP: Timezone"
            }
        ], { accessToken: token, projectId: project })

        process.stdout.write(`\n🚀 Done! You can now add flags by:
   - Using 'yarn opti-fx pull' to download your feature configuration`)
    }
}

export default SetupCommand

const routeHandlerTpl = `import { NextResponse, type NextRequest } from 'next/server';
import { verifyAccess, type ApiData } from '@vercel/flags';
import { unstable_getProviderData as getProviderData } from "@vercel/flags/next";
import * as flags from '../../../../flags';
import { getFlagVariants } from '../../../../opti';

export async function GET(request: NextRequest) {
    const access = await verifyAccess(request.headers.get('Authorization'));
    if (!access) return NextResponse.json(null, { status: 401 });

    //Retrieve the flags from the definitions file
    const provider = getProviderData(flags)
    const hints = new Map<string,string>()

    // Try loading the actual flag options
    for(const flagKey of Object.getOwnPropertyNames(provider.definitions))
    {
        const newOptions = await getFlagVariants(flagKey)
        if (Array.isArray(newOptions))
            provider.definitions[flagKey].options = newOptions
        else if (newOptions == false)
            hints.set("optly-fx-not-authorized","Using build time Optimizely Feature options")
        else if (newOptions == null)
            hints.set("optly-fx-fetch-error-"+flagKey,"Unable to fetch real time Optimizely Feature options for "+flagKey)
    }

    hints.forEach((text, key) => provider.hints.push({ key, text }))

    // Return the flag options
    return NextResponse.json<ApiData>(provider);
}`

const flagsProviderTpl = `// Auto generated flags.ts from Optimizely Feature Experimentation
'use server'
import { unstable_flag as flag } from '@vercel/flags/next';
import { type OptimizelyDecision } from '@optimizely/optimizely-sdk/lite';
import { getUserContext } from './${ path.basename(sdkFile, '.ts') }';

type TypedOptimizelyDecision<T extends { [variableKey: string]: unknown }> = Omit<OptimizelyDecision, 'variables' | 'userContext'> & {
  variables: T
}`

const userContextProviderTpl = `import { get } from '@vercel/edge-config'
import { headers } from 'next/headers'
import { createInstance, type Client, type OptimizelyUserContext, type UserAttributes  } from '@optimizely/optimizely-sdk/lite'

/**
 * Retrieve an instance of the Optimizely FX client
 * 
 * @returns The the Optimizely FX client ready to use
 */
export async function getInstance() : Promise<Client>
{
    const { sdkkey } = readConfigFromEnv()
    if (!sdkkey)
        throw new Error("Optimizely Feature Experimentation key not present")

    let datafile = (await readDataFileFromEdgeConfig(sdkkey)) ?? (await readDataFileFromCDN(sdkkey))
    if (!datafile)
        throw new Error("Unable to load datafile, check your sdkKey")
    const fx = createInstance({
        datafile
    })
    if (!fx)
        throw new Error("Optimizely Feature Experimentation not created")
    
    const { success, reason } = await fx.onReady()
    if (!success)
        throw new Error("Optimizely Feature Experimentation initialization failed: " + (reason??""))
    return fx
}

/**
 * Generic method to retrieve the user context for the current request
 * 
 * @param       attributes      Any additional attributes to be added
 * @returns     The User Context for Optimizely Feature Experimentation
 */
export async function getUserContext(attributes: UserAttributes = {}) : Promise<OptimizelyUserContext | null>
{
    const fx = await getInstance()
    const headerData = await headers()
    const visitorId = headerData.get('x-visitorid')
    if (!visitorId)
        throw new Error("No visitor identifier provided by your middleware")

    const fullAttributes = {
        "user-agent": headerData.get('user-agent'),
        "platform": headerData.get('sec-ch-ua-platform'),
        "geo-continent": headerData.get('x-vercel-ip-continent'),
        "geo-country": headerData.get('x-vercel-ip-country'),
        "geo-country-region": headerData.get('x-vercel-ip-country-region'),
        "geo-city": headerData.get('x-vercel-ip-city'),
        "geo-timezone": headerData.get('x-vercel-ip-timezone'),
        ...attributes
    }  

    const fx_ctx = fx.createUserContext(visitorId, fullAttributes)
    fx_ctx?.fetchQualifiedSegments
    //await fx_ctx?.fetchQualifiedSegments()
    return fx_ctx
}

/**
 * Update the Optimizely FX Datafile within the Vercel Edge Config, allowing
 * it to be read from there, instead of the Optimizely CDN.
 * 
 * @param       authToken       The token for the request
 * @returns     Status information
 */
export async function updateDatafile(authToken?: string | null) : Promise<{ status: "ok", data?: any }|{ status: "error", code: number, message: string, data?: any}>
{
    const {edgeConfigId, vercelTeam, vercelToken, token, sdkkey} = readConfigFromEnv()

    if (!token || token != authToken)
        return { status: "error", code: 401, message: "Not authorized"}

    if (!edgeConfigId || !vercelTeam || !vercelToken || !sdkkey)
        return { status: "error", message: "Incorrect configuration", code: 401 }

    const datafile = await fetch(\`https://cdn.optimizely.com/datafiles/\${ sdkkey }.json\`).then(result => result.ok ? result.json() as object : undefined).catch(() => undefined)
    if (!datafile)
        return { status: "error", message: "Error reading datafile", code: 500 }

    const storeResult = await fetch(\`https://api.vercel.com/v1/edge-config/\${ edgeConfigId }/items?slug=\${ vercelTeam }\`, {
        "body": JSON.stringify({
            items: [{
                description: "Optimizely FX Datafile",
                key: "${ optiDataFileConfigKey }-"+sdkkey,
                operation: "upsert",
                value: datafile
            }]
        }),
        "headers": {
          "Authorization": \`Bearer \${ vercelToken }\`,
          "Content-Type": "application/json"
        },
        "method": "PATCH"
    }).then(result => result.json() as Record<string,any>).catch(() => undefined)

    if (storeResult?.status != 'ok')
        return {status: "error", message: "Error storing datafile", data: storeResult, code: 500 }
    
    return { status: "ok", data: storeResult }
}

export async function getFlagVariants(flagKey: string) : Promise<false | null | Array<{ label: string, value: VariantValues }>>
{
    const { accessToken, projectId } = readConfigFromEnv()
    if (!projectId || !accessToken)
        return false

    const variations = await fetch(\`https://api.optimizely.com/flags/v1/projects/\${ projectId }/flags/\${ flagKey }/variations?archived=false&per_page=100\`, { headers: { Authorization: \`Bearer \${ accessToken }\`}}).then(r => r.json() as Record<string,any>).catch(() => undefined)
    if (!Array.isArray(variations?.items))
        return null

    return variations.items.map(item => 
    { 
        return {
            label: item.name,
            value: buildVariantValues(item)
        }
    })
}

export default getUserContext

//#region Internal functions
async function readDataFileFromEdgeConfig(sdkkey: string) : Promise<string | undefined>
{
    return get<string>("${ optiDataFileConfigKey }-"+sdkkey).catch(() => undefined)
}

async function readDataFileFromCDN(sdkkey: string) : Promise<string | undefined>
{
    const response = await fetch(\`https://cdn.optimizely.com/datafiles/\${ sdkkey }.json\`)
    if (!response.ok) return undefined
    return response.text().catch(() => undefined)
}

function readConfigFromEnv()
{
    // @ts-ignore: Node-Types may or may not be available
    const edgeConfigId = (new URL(process.env.EDGE_CONFIG)).pathname.substring(1)
    // @ts-ignore: Node-Types may or may not be available
    const vercelTeam = process.env.VERCEL_TEAM
    // @ts-ignore: Node-Types may or may not be available
    const vercelToken = process.env.VERCEL_TOKEN
    // @ts-ignore: Node-Types may or may not be available
    const token = process.env.OPTIMIZELY_PUBLISH_TOKEN
    // @ts-ignore: Node-Types may or may not be available
    const sdkkey = process.env.OPTIMIZELY_FX_SDKKEY || process.env.OPTIMIZELY_FX_SDK_KEY || process.env.OPTIMIZELY_SDK_KEY
    // @ts-ignore: Node-Types may or may not be available
    const accessToken = process.env.OPTIMIZELY_FX_PAT
    // @ts-ignore: Node-Types may or may not be available
    const projectId = process.env.OPTIMIZELY_FX_PROJECT

    return { edgeConfigId, vercelTeam, vercelToken, token, sdkkey, accessToken, projectId }
}

function buildVariantValues(variation: any, fieldName = "value") : VariantValues {
    const variantValues = {
        _enabled: variation.enabled
    }

    for (var entry of Object.getOwnPropertyNames(variation.variables)) {
        variantValues[entry] = parseValue(variation.variables[entry].type, variation.variables[entry][fieldName])
    }

    return variantValues
}

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
type VariantValues = {
    _enabled: boolean
} & VariantData
type VariantData = boolean | number | string | null | VariantObjectData | VariantArrayData
type VariantArrayData = ReadonlyArray<VariantData>
type VariantObjectData = { [fieldName:string]: VariantData }
//#endregion
`

const datafileApiTpl = `import { type NextRequest, NextResponse } from "next/server"
import { updateDatafile } from "../../../../opti"

async function handler(req: NextRequest)
{
    const token = req.nextUrl.searchParams.get('token')
    const updateResult = await updateDatafile(token)
    if (updateResult.status == "ok")
        return NextResponse.json({ message: "ok", data: updateResult.data })
    return NextResponse.json({ message: updateResult.message, data: updateResult.data }, { status: updateResult.code })
}

export const POST = handler
export const GET = handler
export const runtime = 'edge'`