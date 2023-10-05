export class InvalidContentLinkError extends Error
{
    protected _contentLink : any

    public get contentLink() : any 
    {
        return this._contentLink
    }

    public constructor(invalidContentLink?: any, message?: string)
    {
        super(message ?? "Invalid content link")
        this._contentLink = invalidContentLink
    }
}