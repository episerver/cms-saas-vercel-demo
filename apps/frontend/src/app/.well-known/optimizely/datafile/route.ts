// Auto generated route for /.well-known/optimizely/datafile by Optimizely Feature Experimentation.
import { type NextRequest, NextResponse } from "next/server";
import { updateDatafile } from "../../../../opti";

/**
 * This is the default handler for the "datafile changed" webhook that can be sent by 
 * Optimizely.
 */
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
