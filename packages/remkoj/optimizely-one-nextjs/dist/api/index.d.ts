import 'server-only';
import { type NextRequest, NextResponse } from 'next/server';
import type { ApiService } from './types';
type RequestContext = {
    params: Record<string, string | string[]>;
};
type OptimizelyOneApi = (req: NextRequest, ctx: RequestContext) => Promise<NextResponse>;
export type OptimizelyOneApiConfig = {
    /**
     * The URL Parameter you've setup in your Next.JS router to catch the
     * full path to be handled.
     */
    pathParameterName: string;
    /**
     * Inject any project specific services into the OptimizelyOne API
     */
    services: ApiService[];
};
export declare function createOptimizelyOneApi(config?: Partial<OptimizelyOneApiConfig>): OptimizelyOneApi;
export {};
