// Auto generated route for /.well-known/vercel/flags by Optimizely Feature Experimentation.
import { getProviderData, createFlagsDiscoveryEndpoint } from "flags/next";
import * as flags from '../../../../flags';
import { getFlagVariants } from '../../../../opti';

export const GET = createFlagsDiscoveryEndpoint(async (request) => {
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
    return provider;
})
