export type DataPlatformClientOptions = {
    privateApiKey: string;
    endpoint: string;
    membershipTestChunkSize: number;
};
export type DataPlatformAudienceList = {
    id: string;
    name: string;
}[];
/**
 * A high level client for the Optimizely Data Platform, providing direct
 * access to some of it's functionality. For advanced capabilities please
 * connect directly to the GraphQL endpoint.
 */
export declare class DataPlatformClient {
    protected readonly config: Readonly<DataPlatformClientOptions>;
    private readonly _privateKey;
    private readonly _publicKey;
    protected get privateKey(): string;
    get trackerId(): string;
    constructor(options?: Partial<DataPlatformClientOptions>);
    /**
     * Retrieve a list of all audiences available within the  ODP Instance
     *
     * @param       throwOnError    Set to true when an error needs to be
     *                              thrown on an network error (instead of
     *                              returning an empty list)
     * @returns     The list of all audiences
     */
    getAllAudiences(throwOnError?: boolean): Promise<DataPlatformAudienceList>;
    filterAudiences(vuid: string, audiences: string[]): Promise<string[]>;
    getLastSearchTerms(vuid: string): Promise<string[]>;
    protected privateQuery(graphQuery: string, variables?: Record<string, any>): Promise<Response>;
    query(graphQuery: string, variables?: Record<string, any>): Promise<Response>;
}
export declare class DataPlatformError extends Error {
    private _trackerId?;
    get trackerId(): string;
    constructor(message?: string, trackerId?: string, options?: ErrorOptions);
}
export default DataPlatformClient;
