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

export type OptlyWebGet = {
    state: {
        getPageStates: (filters?: { isActive: boolean }) => { 
            [id: string]: { 
                id: string, 
                apiName: string, 
                name: string | null, 
                isActive: boolean 
            }
        },
        getExperimentStates: (filters?: { isActive: boolean }) => {
            [id: string]: {
                audiences: any[]
                experimentName: string | null
                id: string
                isActive: boolean
                isInExperimentHoldback: boolean
                reason?: undefined | string
                variation: {
                    id: string
                    name: string | null
                }
                visitorRedirected: boolean
            }
        },
        getCampaignStates: (filters?: { isActive: boolean }) => {
            [id: string]: {
                allExperiments: {
                    id: string
                    name: string
                }[]
                audiences: {
                    id: string
                    name: string
                }[]
                campaignName: string
                experiment: {
                    campaignName: string
                    id: string
                    name: string
                }
                id: string
                isActive: boolean
                isInCampaignHoldback: boolean
                reason?: any
                variation: {
                    id: string
                    name: string
                }
                visitorRedirected: boolean
            }
        }
    }
    data: {
        projectId: string
        accountId: string
        revision: string
    }
}