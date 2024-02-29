export type ContentRecsOptions = {
    clientId: string;
    deliveryId: number;
    deliveryKey: string;
    host: string;
};
export declare class ContentRecsClient {
    private readonly _config;
    protected get defaultConfig(): ContentRecsOptions;
    get client(): string;
    get delivery(): number;
    constructor(options?: Partial<ContentRecsOptions>);
    getContentTopics(visitorId: string): Promise<string[]>;
}
export declare class ContentRecsError extends Error {
    readonly deliveryId: number | undefined;
    readonly clientId: string | undefined;
    constructor(message?: string, clientId?: string, deliveryId?: number, options?: ErrorOptions);
}
