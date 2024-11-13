import { type NextRequest, NextResponse } from "next/server"
import { readConfigFromEnv as readEnv } from "../../../../opti"

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