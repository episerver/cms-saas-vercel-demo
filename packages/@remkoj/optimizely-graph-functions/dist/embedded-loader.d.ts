import { type Types } from '@graphql-codegen/plugin-helpers';
type LoaderConfig = {
    pluginContext?: {
        [key: string]: any;
    };
};
type LoaderFunction = (documentUri: string, config: LoaderConfig) => Promise<Types.DocumentFile | undefined | void>;
/**
 * Custom loader for embedded Optimizely CMS 12/13 fragments & queries. It
 * requires the document to be specified as an supported URI.
 *
 * `opti-cms:/(fragments|queries)/(12|13)`
 *
 * @param   documentUri     The identifier of the embedded fragments/queries to load
 * @param   config          The configuration
 */
declare const EmbeddedLoader: LoaderFunction;
export default EmbeddedLoader;
