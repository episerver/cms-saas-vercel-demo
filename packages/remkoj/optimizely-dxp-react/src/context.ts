import { RouteResolver } from './routing'
import { createContext, useContext } from 'react'

const RouteResolverContext = createContext<RouteResolver>(new RouteResolver())

export const RouteResolverProvider = RouteResolverContext.Provider

export const useRouteResolver = () => {
    return useContext(RouteResolverContext)
}