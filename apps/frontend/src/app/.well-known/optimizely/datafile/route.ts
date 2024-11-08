import { type NextRequest, NextResponse } from "next/server"

async function handler(req: NextRequest)
{
    const edgeConfigId = (new URL(process.env.EDGE_CONFIG)).pathname.substring(1)
    const token = process.env.OPTIMIZELY_PUBLISH_TOKEN

    const reqToken = req.nextUrl.searchParams.get('token')
    if (!token || token != reqToken)
        return new NextResponse("Not authorized", { status: 401 })

    /*await fetch("https://api.vercel.com/v1/edge-config/SOME_STRING_VALUE/token?slug=SOME_STRING_VALUE&teamId=SOME_STRING_VALUE", {
        "body": {
          "label": "SOME_STRING_VALUE"
        },
        "headers": {
          "Authorization": "Bearer <TOKEN>"
        },
        "method": "post"
    })*/

    console.log(edgeConfigId)

    return new NextResponse("test", { status: 200 })
}

export const POST = handler
export const GET = handler
export const runtime = 'edge'