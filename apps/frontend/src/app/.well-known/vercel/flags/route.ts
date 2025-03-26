// Auto generated route for /.well-known/vercel/flags by Optimizely Feature Experimentation.
import { NextResponse, type NextRequest } from 'next/server';
import { verifyAccess, type ApiData } from '@vercel/flags';
import { getProviderData } from "@vercel/flags/next";
import * as flags from '../../../../flags';
import { getFlagVariants } from '../../../../opti';

export async function GET(request: NextRequest) {
    const access = await verifyAccess(request.headers.get('Authorization'));
    if (!access) return NextResponse.json(null, { status: 401 });

    //Retrieve the flags from the definitions file
    const provider = getProviderData(flags)
    const hints = new Map<string, string>()

    // Try loading the actual flag options
    for (const flagKey in provider.definitions) {
        const newOptions = await getFlagVariants(flagKey)
        if (Array.isArray(newOptions))
            provider.definitions[flagKey].options = newOptions
        else if (newOptions == false)
            hints.set("optly-fx-not-authorized", "Using build time Optimizely Feature options")
        else if (newOptions == null)
            hints.set("optly-fx-fetch-error-" + flagKey, "Unable to fetch real time Optimizely Feature options for " + flagKey)
    }

    hints.forEach((text, key) => provider.hints.push({ key, text }))

    // Return the flag options
    return NextResponse.json<ApiData>(provider);
}
