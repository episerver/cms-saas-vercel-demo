import * as EnvTools from '../../utils/env'
import EnvVars from '../../env-vars'

export type ContentRecsOptions = {
    clientId: string
    deliveryId: number
    deliveryKey: string
    host: string
}

export class ContentRecsClient
{
    private readonly _config : Readonly<ContentRecsOptions>

    protected get defaultConfig() : ContentRecsOptions
    {
        return {
            clientId: EnvTools.readValue(EnvVars.ContentRecsClient, ''),
            deliveryId: EnvTools.readValueAsInt(EnvVars.ContentRecsDelivery, 0),
            deliveryKey: EnvTools.readValue(EnvVars.ContentRecsDeliveryKey, ''),
            host: EnvTools.readValue(EnvVars.ContentRecsHost, 'https://api.idio.co')
        }
    }

    public get client() : string
    {
        return this._config.clientId
    }

    public get delivery() : number
    {
        return this._config.deliveryId
    }

    public constructor(options?: Partial<ContentRecsOptions>)
    {
        this._config = { ...this.defaultConfig, ...options }
        if (this._config.clientId == '' || this._config.deliveryId == 0 || this._config.deliveryKey == '')
            throw new ContentRecsError("Invalid ContentRecs configuration", this._config.clientId, this._config.deliveryId)
    }

    public async getContentTopics(visitorId: string) : Promise<string[]>
    {
        if (!visitorId || visitorId == "")
            return []

        const profileUrl = new URL(`/1.0/users/idio_visitor_id:${ visitorId }/topics`, this._config.host)
        profileUrl.searchParams.set('key', this._config.deliveryKey)
        const topics = await fetch(profileUrl).then(r => r.json()).catch(() => undefined)
        return ((topics?.topic ?? []) as { title: string }[]).map(x => x.title)
    }
}

export class ContentRecsError extends Error
{
    public readonly deliveryId: number | undefined
    public readonly clientId: string | undefined

    public constructor (message?: string, clientId?: string, deliveryId?: number, options?: ErrorOptions) 
    {
        super(message, options)
        this.deliveryId = deliveryId
        this.clientId = clientId
    }
}