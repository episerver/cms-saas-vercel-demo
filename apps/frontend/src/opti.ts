import { get } from '@vercel/edge-config'
import { headers } from 'next/headers'
import { createInstance, type OptimizelyUserContext, type UserAttributes  } from '@optimizely/optimizely-sdk/lite'
import { cache } from 'react'

/**
 * Retrieve an instance of the Optimizely FX client
 * 
 * @returns The the Optimizely FX client ready to use
 */
export const getInstance = cache(async () =>
{
    const { sdkkey } = readConfigFromEnv()
    if (!sdkkey)
        throw new Error("Optimizely Feature Experimentation key not present")

    let datafile = await getOptimizelyDataFile(sdkkey)
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
})

/**
 * Generic method to retrieve the user context for the current request
 * 
 * @param       attributes      Any additional attributes to be added
 * @returns     The User Context for Optimizely Feature Experimentation
 */
export async function getUserContext(attributes: UserAttributes = {}) : Promise<OptimizelyUserContext | null>
{
    const fx = await getInstance().catch(() => undefined)
    if (!fx)
        return null
    const headerData = headers()
    const visitorId = headerData.get('x-visitorid')
    if (!visitorId)
        throw new Error("No visitor identifier provided by your middleware")

    const fullAttributes = {
        "user-agent": headerData.get('user-agent'),
        "platform": headerData.get('sec-ch-ua-platform'),
        "geo-continent": headerData.get('x-vercel-ip-continent'),
        "geo-country": headerData.get('x-vercel-ip-country'),
        "geo-region": headerData.get('x-vercel-ip-country-region'),
        "geo-city": headerData.get('x-vercel-ip-city'),
        "geo-timezone": headerData.get('x-vercel-ip-timezone'),
        ...attributes
    }  

    const fx_ctx = fx.createUserContext(visitorId, fullAttributes)
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

    const datafile = await fetch(`https://cdn.optimizely.com/datafiles/${ sdkkey }.json`).then(result => result.ok ? result.json() as object : undefined).catch(() => undefined)
    if (!datafile)
        return { status: "error", message: "Error reading datafile", code: 500 }

    const storeResult = await fetch(`https://api.vercel.com/v1/edge-config/${ edgeConfigId }/items?slug=${ vercelTeam }`, {
        "body": JSON.stringify({
            items: [{
                description: "Optimizely FX Datafile",
                key: "optimizely-fx-"+sdkkey,
                operation: "upsert",
                value: datafile
            }]
        }),
        "headers": {
          "Authorization": `Bearer ${ vercelToken }`,
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

    const variations = await fetch(`https://api.optimizely.com/flags/v1/projects/${ projectId }/flags/${ flagKey }/variations?archived=false&per_page=100`, { headers: { Authorization: `Bearer ${ accessToken }`}}).then(r => r.json() as Record<string,any>).catch(() => undefined)
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
const getOptimizelyDataFile = cache(async (sdkkey: string) => {
    return (await readDataFileFromEdgeConfig(sdkkey)) ?? (await readDataFileFromCDN(sdkkey))
})

async function readDataFileFromEdgeConfig(sdkkey: string) : Promise<string | undefined>
{
    return get<string>("optimizely-fx-"+sdkkey).catch(() => undefined)
}

async function readDataFileFromCDN(sdkkey: string) : Promise<string | undefined>
{
    const response = await fetch(`https://cdn.optimizely.com/datafiles/${ sdkkey }.json`)
    if (!response.ok) return undefined
    return response.text().catch(() => undefined)
}

function readConfigFromEnv()
{
    // @ts-ignore: Node-Types may or may not be available
    const edgeConfigId = process.env.EDGE_CONFIG ? (new URL(process.env.EDGE_CONFIG)).pathname.substring(1) : undefined
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
