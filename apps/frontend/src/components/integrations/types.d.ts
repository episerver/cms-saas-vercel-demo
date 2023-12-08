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
    get?: <T extends keyof OptlyWebGet>(what: T) => OptlyWebGet[T]
    //get?: (what: string) => any
}

type OptlyWebGet = {
    state: {
        getPageStates: () => { 
            [id: string]: { 
                id: string, 
                apiName: string, 
                name: string | null, 
                isActive: boolean 
            }
        }
    }
    data: {
        projectId: string
        accountId: string
        revision: string
    }
}