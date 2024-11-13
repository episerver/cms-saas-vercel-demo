import { get } from '@vercel/edge-config'
import { headers } from 'next/headers'
import { createInstance, type Client  } from '@optimizely/optimizely-sdk/lite'

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
    let config = (await readDataFileFromEdgeConfig()) ?? (await readDataFileFromCDN())
    const fx = createInstance({
        datafile: config,
    })
    if (!fx)
        throw new Error("Optimizely Feature Experimentation initialization failed")
    
    await fx.onReady()
    return fx
}

export async function getUserContext()
{
    const fx = await getInstance()
    const headerData = await headers()
    const visitorId = headerData.get('x-visitorid')
    if (!visitorId)
        throw new Error("No visitor identifier provided by your middleware")
    
    const fx_ctx = fx.createUserContext(visitorId, {

    })
    //await fx_ctx?.fetchQualifiedSegments()
    return fx_ctx
}

export default getUserContext

async function readDataFileFromEdgeConfig() : Promise<string | undefined>
{
    return get<string>('optimizely-fx-data-file').catch(() => undefined)
}

async function readDataFileFromCDN() : Promise<string | undefined>
{
    const { sdkkey } = readConfigFromEnv()
    const response = await fetch(`https://cdn.optimizely.com/datafiles/${ sdkkey }.json`)
    if (!response.ok)
        return undefined
    return response.text().catch(() => undefined)
}