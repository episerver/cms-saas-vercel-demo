import type { ApiService } from './types';
export declare const GraphInfoApiService: ApiService<GraphInfoApiResponse>;
export default GraphInfoApiService;
export type GraphInfoApiResponse = {
    hooks: {
        url: string;
        hasQueryParams?: boolean;
        method?: string;
    }[];
    sources: {
        label: string;
        languages: string[];
    }[];
};
