import { Services, type OptimizelyGraphConfig, type IOptiGraphClient } from '@remkoj/optimizely-graph-client';
import { type FunctionComponent, type PropsWithChildren } from 'react';
export declare const OptimizelyRouterProvider: FunctionComponent<PropsWithChildren<{
    clientOrConfig: IOptiGraphClient | OptimizelyGraphConfig;
}>>;
export declare const useOptimizelyRouter: () => Services.RouteResolver;
