import { type NextRequest, NextResponse } from "next/server"
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
export const runtime = 'edge'