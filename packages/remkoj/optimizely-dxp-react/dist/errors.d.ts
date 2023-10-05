export declare class InvalidContentLinkError extends Error {
    protected _contentLink: any;
    get contentLink(): any;
    constructor(invalidContentLink?: any, message?: string);
}
