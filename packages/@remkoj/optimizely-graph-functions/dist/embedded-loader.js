"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
/**
 * Custom loader for embedded Optimizely CMS 12/13 fragments & queries. It
 * requires the document to be specified as an supported URI.
 *
 * `opti-cms:/(fragments|queries)/(12|13)`
 *
 * @param   documentUri     The identifier of the embedded fragments/queries to load
 * @param   config          The configuration
 */
const EmbeddedLoader = async (documentUri, config) => {
    const docId = new URL(documentUri);
    if (docId.protocol != "opti-cms:")
        throw new Error("[Optimizely Graph Functions - Embedded Documents] Unsupported protocol, only the \"opti-cms:\" protocol is supported");
    let rawData;
    switch (docId.pathname) {
        case "/fragments/13":
            rawData = require("./documents/fragments.cms13").default;
            break;
        case "/queries/13":
            rawData = require("./documents/queries.cms13").default;
            break;
        case "/fragments/12":
            rawData = require("./documents/fragments.cms12").default;
            break;
        case "/queries/12":
            rawData = require("./documents/queries.cms12").default;
            break;
        default:
            throw new Error(`[Optimizely Graph Functions - Embedded Documents] Path not found: ${docId.pathname}`);
    }
    return generateDocument(rawData, documentUri);
};
function generateDocument(rawData, location) {
    if (rawData == undefined)
        return undefined;
    const rawSDL = Array.isArray(rawData) ? rawData.join("\n\n") : rawData;
    const document = (0, graphql_1.parse)(rawSDL);
    return {
        document,
        location,
        rawSDL,
        hash: location
    };
}
exports.default = EmbeddedLoader;
//# sourceMappingURL=embedded-loader.js.map