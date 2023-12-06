declare global
{
    interface Window {
        zaius?: OptimizelyDataPlatformApi
        _iaq?: OptimizelyContentRecsApi
        optimizely?: OptimizelyWebExperimentationApi
    }
}

export type OptimizelyDataPlatformApi = {
    event: (name: string, data?: { [param: string]: any }) => Promise<void>
    dispatch: (group: string, action: string, params?: { [param: string]: any }) => Promise<void>
    customer: (customerProps: any) => void
}

export type OptimizelyContentRecsApi = {
    push: (command: [string, any]) => void
}

export type OptimizelyWebExperimentationApi = {
    initialized: boolean
    push: (data: { type: string, [paramName: string]: any }) => void 
    get?: (what: string) => any
}