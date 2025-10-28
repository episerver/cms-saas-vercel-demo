import { NextResponse } from "next/server";
import { getDatafile } from "@/opti";

/**
 * Retrieve the Optimizely Datafile contents with a simple get request, as this may
 * expose undesired information, this endpoint is disabled by default in on-development
 * environments. 
 * 
 * @returns The Optimizely JSON
 */
export async function GET() : Promise<NextResponse>
{
    if (process.env.NODE_ENV !== 'development')
        return NextResponse.json({ status: 403, message: "Forbidden" }, { status: 403 })
    const df = await getDatafile()
    return NextResponse.json(df)
}

export const runtime = 'edge';