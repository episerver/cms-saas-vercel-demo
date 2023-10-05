export class InvalidContentLinkError extends Error {
    _contentLink;
    get contentLink() {
        return this._contentLink;
    }
    constructor(invalidContentLink, message) {
        super(message ?? "Invalid content link");
        this._contentLink = invalidContentLink;
    }
}
