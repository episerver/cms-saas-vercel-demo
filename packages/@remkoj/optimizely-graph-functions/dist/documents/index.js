"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queries = exports.fragments = exports.IContentDataProps = void 0;
const fragments_cms13_1 = __importDefault(require("./fragments.cms13"));
const queries_cms13_1 = __importDefault(require("./queries.cms13"));
/**
 * The list of standard properties
 *
 * @deprecated  Should not be used from @remkoj/optimizely-graph-functions, as it's a development only package
 */
exports.IContentDataProps = ["contentType", "id", "locale", "path", "__typename"];
/**
 * The standard (rawSDL) fragments for Optimizely CMS 13
 *
 * @deprecated  Not intended to be used outside of the @remkoj/optimizely-graph-functions package
 */
exports.fragments = fragments_cms13_1.default;
/**
 * The standard (rawSDL) fragments for Optimizely CMS 13
 *
 * @deprecated  Not intended to be used outside of the @remkoj/optimizely-graph-functions package
 */
exports.queries = queries_cms13_1.default;
//# sourceMappingURL=index.js.map