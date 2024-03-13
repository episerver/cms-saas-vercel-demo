import { Services, type ContentGraphConfig, type ContentGraphClient } from '@remkoj/optimizely-graph-client'
import { createContext, useContext, type FunctionComponent, type PropsWithChildren } from 'react'

const RouteResolverContext = createContext<Services.RouteResolver | undefined>(undefined)

export const OptimizelyRouterProvider : FunctionComponent<PropsWithChildren<{ clientOrConfig: ContentGraphClient | ContentGraphConfig }>> = ({ clientOrConfig, children }) =>
{
    const router = new Services.RouteResolver(clientOrConfig)
    return <RouteResolverContext.Provider value={ router }>{ children }</RouteResolverContext.Provider>
}

export const useOptimizelyRouter : () => Services.RouteResolver = () => {
    const router = useContext(RouteResolverContext)
    if (router == undefined)
        throw new Error("useOptimizelyRouter can only be used within components that are contained within an OptimizelyRouterProvider")
    return router
}