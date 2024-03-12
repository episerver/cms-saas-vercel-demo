import { Services, type ContentGraphConfig, type ContentGraphClient } from '@remkoj/optimizely-graph-client';
import { type FunctionComponent, type PropsWithChildren } from 'react';
export declare const OptimizelyRouterProvider: FunctionComponent<PropsWithChildren<{
    clientOrConfig: ContentGraphClient | ContentGraphConfig;
}>>;
export declare const useOptimizelyRouter: () => Services.RouteResolver;
