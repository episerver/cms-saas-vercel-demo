export class InvalidContentLinkError extends Error {
    get contentLink() {
        return this._contentLink;
    }
    constructor(invalidContentLink, message) {
        super(message ?? "Invalid content link");
        this._contentLink = invalidContentLink;
    }
}
//# sourceMappingURL=errors.js.map