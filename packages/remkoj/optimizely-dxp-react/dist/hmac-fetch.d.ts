type FetchType = typeof fetch;
export declare function createEpiHmacFetch(appKey: string, secret: string): FetchType;
export declare function epiHmacFetch(...args: Parameters<FetchType>): ReturnType<FetchType>;
export default epiHmacFetch;
