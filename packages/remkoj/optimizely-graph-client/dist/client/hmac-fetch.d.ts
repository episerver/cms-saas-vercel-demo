export type FetchAPI = typeof fetch;
export declare function createHmacFetch(appKey: string, secret: string): FetchAPI;
export default createHmacFetch;
