import 'server-only'
import { type IOptiGraphClient } from "@remkoj/optimizely-graph-client"
import { getServerContext } from '@remkoj/optimizely-cms-react/rsc'
import { getServerClient } from "@remkoj/optimizely-cms-nextjs"
import { getSdk as getGeneratedSdk, type Sdk } from "@gql"
import { cache } from 'react'

/**
 * Get an instance of the SDK generated from the queries within the frontend.
 * 
 * @returns     The SDK Instance
 */
export const getSdk = cache<() => Sdk>(() => {
    const ctx = getServerContext()
    if (!ctx.client)
        ctx.setOptimizelyGraphClient(getServerClient())
    return getGeneratedSdk(ctx.client as IOptiGraphClient)
})

export default getSdk