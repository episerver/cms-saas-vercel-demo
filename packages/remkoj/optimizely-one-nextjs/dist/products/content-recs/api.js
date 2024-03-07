import * as EnvTools from '../../utils/env';
import EnvVars from '../../env-vars';
export class ContentRecsClient {
    _config;
    get defaultConfig() {
        return {
            clientId: EnvTools.readValue(EnvVars.ContentRecsClient, ''),
            deliveryId: EnvTools.readValueAsInt(EnvVars.ContentRecsDelivery, 0),
            deliveryKey: EnvTools.readValue(EnvVars.ContentRecsDeliveryKey, ''),
            host: EnvTools.readValue(EnvVars.ContentRecsHost, 'https://api.idio.co')
        };
    }
    get client() {
        return this._config.clientId;
    }
    get delivery() {
        return this._config.deliveryId;
    }
    constructor(options) {
        this._config = { ...this.defaultConfig, ...options };
        if (this._config.clientId == '' || this._config.deliveryId == 0 || this._config.deliveryKey == '')
            throw new ContentRecsError("Invalid ContentRecs configuration", this._config.clientId, this._config.deliveryId);
    }
    async getContentTopics(visitorId) {
        if (!visitorId || visitorId == "")
            return [];
        const profileUrl = new URL(`/1.0/users/idio_visitor_id:${visitorId}/topics`, this._config.host);
        profileUrl.searchParams.set('key', this._config.deliveryKey);
        const topics = await fetch(profileUrl).then(r => r.json()).catch(() => undefined);
        return (topics?.topic ?? []).map(x => x.title);
    }
}
export class ContentRecsError extends Error {
    deliveryId;
    clientId;
    constructor(message, clientId, deliveryId, options) {
        super(message, options);
        this.deliveryId = deliveryId;
        this.clientId = clientId;
    }
}
