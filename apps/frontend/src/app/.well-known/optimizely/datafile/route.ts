import { type NextRequest, NextResponse } from "next/server"

async function handler(req: NextRequest)
{
    const {edgeConfigId, vercelTeam, vercelToken, token, sdkkey} = readEnv()

    const reqToken = req.nextUrl.searchParams.get('token')
    if (!token || token != reqToken)
        return new NextResponse("Not authorized", { status: 401 })

    if (!edgeConfigId || !vercelTeam || !vercelToken || !sdkkey)
        return new NextResponse("Incorrect configuration", { status: 401 })

    const datafile = await fetch(`https://cdn.optimizely.com/datafiles/${ sdkkey }.json`).then(result => result.json())

    const storeResult = await fetch(`https://api.vercel.com/v1/edge-config/${ edgeConfigId }/items?slug=${ vercelTeam }`, {
        "body": JSON.stringify({
            items: [{
                description: "Optimizely FX Datafile",
                key: "optimizely-fx-data-file",
                operation: "upsert",
                value: datafile
            },{
                description: "Optimizely FX Datafile",
                key: "optimizely-fx-enabled",
                operation: "upsert",
                value: true
            }]
        }),
        "headers": {
          "Authorization": `Bearer ${ vercelToken }`,
          "Content-Type": "application/json"
        },
        "method": "PATCH"
    }).then(result => result.json())

    if (storeResult.status != 'ok')
        return NextResponse.json(storeResult, { status: 500 })

    return NextResponse.json(storeResult)
}

export const POST = handler
export const GET = handler
export const runtime = 'edge'

function readEnv() 
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
    const sdkkey = process.env.OPTIMIZELY_FX_SDKKEY

    return { edgeConfigId, vercelTeam, vercelToken, token, sdkkey }
}