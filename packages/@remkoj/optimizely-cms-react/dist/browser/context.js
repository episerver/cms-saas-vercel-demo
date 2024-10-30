import { jsx as _jsx } from "react/jsx-runtime";
import { Services } from '@remkoj/optimizely-graph-client';
import { createContext, useContext } from 'react';
const RouteResolverContext = createContext(undefined);
export const OptimizelyRouterProvider = ({ clientOrConfig, children }) => {
    const router = new Services.RouteResolver(clientOrConfig);
    return _jsx(RouteResolverContext.Provider, { value: router, children: children });
};
export const useOptimizelyRouter = () => {
    const router = useContext(RouteResolverContext);
    if (router == undefined)
        throw new Error("useOptimizelyRouter can only be used within components that are contained within an OptimizelyRouterProvider");
    return router;
};
//# sourceMappingURL=context.js.map