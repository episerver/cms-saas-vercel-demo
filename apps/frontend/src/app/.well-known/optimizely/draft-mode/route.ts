import { NextResponse, type NextRequest } from "next/server";
import { readEnvironmentVariables } from "@remkoj/optimizely-graph-client";
import { draftMode } from "next/headers";

const actions : ["enable","disable","toggle"] = ["enable","disable","toggle"]
type Action = typeof actions[number]

function isValidAction(toTest?: string | null) : toTest is Action
{
    return toTest ? (actions as string[]).includes(toTest) : false
}

/**
 * Enpoint to manually enable/disable the draftMode when the application has been
 * deployed any non-vercel environment. For Vercel hosted environments the preferred
 * method of enabling draft mode is to use the `draftMode` toggle in the Vercel
 * toolbar.
 * 
 * @param       req     The web request to be handled
 * @returns     A redirect to the homepage with draftMode enabled, or an HTTP error
 */
export async function GET(req: NextRequest) : Promise<NextResponse>
{
    const requestToken = req.nextUrl.searchParams.get('token')
    const configToken = readEnvironmentVariables()?.publish
    const action = req.nextUrl.searchParams.get('action')

    if (!configToken) {
        console.warn("Draft mode endpoint disabled - no publish token configured")
        return NextResponse.json({ status: 403, message: "Forbidden" }, { status: 403 })
    }

    if (!(isValidAction(action) && requestToken)) {
        console.warn("Draft mode enpoint invoked without a token")
        return NextResponse.json({ status: 400, message: "Bad request" }, { status: 400 })
    }

    if (requestToken !== configToken) {
        console.warn("Draft mode endpoint disabled - Request token doesn't match publish token")
        return NextResponse.json({ status: 403, message: "Forbidden" }, { status: 403 })
    }

    const drafts = await draftMode()
    switch (action) {
        case 'enable':
            drafts.enable();
            break;
        case 'disable':
            drafts.disable();
            break;
        default:
            if (drafts.isEnabled)
                drafts.disable();
            else
                drafts.enable();
            break;
    }
    return NextResponse.redirect(new URL("/"+req.nextUrl.basePath, req.nextUrl), { status: 307 })
}