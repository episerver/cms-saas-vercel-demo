import { get } from '@vercel/edge-config'
import { headers } from 'next/headers'
import { createInstance, type Client, type OptimizelyUserContext, type UserAttributes  } from '@optimizely/optimizely-sdk/lite'

/**
 * Read the Optimizely Feature Experimenation and Vercel Edge Config
 * configuration from the Environment, for the default Vercel 
 * implementation of Optimizely Feature Experimentation
 * 
 * @returns     Configuration data
 */
export function readConfigFromEnv() 
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

    return { edgeConfigId, vercelTeam, vercelToken, token, sdkkey }
}

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

export default getUserContext

async function readDataFileFromEdgeConfig(sdkkey: string) : Promise<string | undefined>
{
    console.log("Loading edge config sdkKey",sdkkey)
    return get<string>("optimizely-fx-"+sdkkey).catch(() => undefined)
}

async function readDataFileFromCDN(sdkkey: string) : Promise<string | undefined>
{
    console.log("Loading cdn sdkKey",sdkkey)
    const response = await fetch(`https://cdn.optimizely.com/datafiles/${ sdkkey }.json`)
    if (!response.ok) return undefined
    return response.text().catch(() => undefined)
}