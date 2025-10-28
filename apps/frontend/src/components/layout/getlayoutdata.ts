import { createClient, type IOptiGraphClient, type OptimizelyGraphConfig, isOptiGraphClient, isOptiGraphConfig, localeToGraphLocale } from "@remkoj/optimizely-graph-client";
import { cache } from "react"
import { getSdk } from "@gql/client"
import { InputMaybe, Locales } from "@gql/graphql";

type GraphError = { response: { code: string, status: number, system: { message: string, auth: string} }}

/**
 * Shared method to read both header and footer data, providing caching to limit the number of
 * requests from the frontend to Optimizely Graph. This improves rendering times both while building
 * as will as while server side rendering.
 * 
 * @param       domain      The domain to fetch the layout for
 * @param       locale      The locale in which to fetch the layout
 * @returns     The layout data for both header & footer
 */
export const getLayoutData = cache(
    async (domain?: string | null, locale?: string | null, client?: IOptiGraphClient|OptimizelyGraphConfig) => { 
        const graphClient = client ? (isOptiGraphClient(client) ? client : (isOptiGraphConfig(client) ? createClient(client) : createClient())) : createClient()
        const sdk = getSdk(graphClient)
        const graphLocale = localeToGraphLocale(locale) as InputMaybe<Locales | Locales[]>
        try {
            const layoutDataResponse = await sdk.getLayoutData({ domain, locale: graphLocale })
            return layoutDataResponse.appLayout?.items?.at(0) ?? undefined
        } catch (error: any) {
            const e = error as GraphError
            console.error(`❌ [Optimizely Graph] [Error] ${e.response.code} ${e.response.system.message} ${e.response.system.auth}`)
            return undefined
        }
    }
)

export default getLayoutData