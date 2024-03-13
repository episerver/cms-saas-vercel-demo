import type { ApiService } from './types'
import * as EnvTools from '../utils/env'
import EnvVars from '../env-vars'
import * as Responses from './responses'
import createAdminApi from '@remkoj/optimizely-graph-client/admin'


export const GraphInfoApiService : ApiService<GraphInfoApiResponse> = {
    for: { path: '/graph', verb: 'get' },
    handler: async (query, cookies) => {
        // Check if the toolkit is enabled
        if (!EnvTools.readValueAsBoolean(EnvVars.HelperEnabled, false))
            return Responses.NotFound

        const adminApi = createAdminApi()
        
        const hooks = await adminApi.webhooks.listWebhookHandler()
        const sourceMap = await adminApi.definitionV3.getContentV3SourceHandler()
        const sources : any[] = []
        for (const sourceId in sourceMap) {
            const source = sourceMap[sourceId]
            sources.push({
                label: source.label,
                languages: source.languages
            })
        }
        
        return [{ 
            hooks: hooks.map(hook => {
                const hookUrl = new URL(hook.request.url)
                const visibleUrl = hookUrl.protocol + '//' + hookUrl.host + hookUrl.pathname
                return {
                    url: visibleUrl,
                    hasQueryParams: hook.request.url != visibleUrl,
                    method: hook.request.method
                }
            }),
            sources
        }, 200]
    }
}

export default GraphInfoApiService

export type GraphInfoApiResponse = {
    hooks: {
        url: string
        hasQueryParams?: boolean
        method?: string
    }[],
    sources: {
        label: string,
        languages: string[]
    }[]
}