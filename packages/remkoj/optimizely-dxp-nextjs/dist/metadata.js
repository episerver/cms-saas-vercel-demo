import createClient, { isContentGraphClient } from '@remkoj/optimizely-graph-client';
import { isOptimizelyNextPageWithMetaData } from './page';
const DEBUG = process.env.DXP_DEBUG == '1';
export class MetaDataResolver {
    _cgClient;
    constructor(clientOrConfig) {
        this._cgClient = isContentGraphClient(clientOrConfig) ? clientOrConfig : createClient(clientOrConfig);
    }
    /**
     * Resolve the meta data for a component, if it has a meta-data method exposed.
     *
     * @param factory       The component factory used to load the component
     * @param contentLink   The link to the component for which the meta-data should be retrieved
     * @param contentType   The content type of the component
     * @param locale        The locale to be used, in a ContentGraph locale format
     * @returns             A Promise for the metadata of the given content type & instance
     */
    async resolve(factory, contentLink, contentType, locale) {
        if (DEBUG)
            console.log("Resolving metadata for:", contentLink, contentType, locale);
        if (locale.includes("-"))
            throw new Error("Invalid character detected within the locale");
        const Component = factory.resolve(contentType);
        if (!Component)
            return {};
        if (isOptimizelyNextPageWithMetaData(Component) && Component.getMetaData) {
            const meta = await Component.getMetaData(contentLink, locale, this._cgClient);
            if (DEBUG)
                console.log("Resolved metadata to:", meta);
            return meta;
        }
        return {};
    }
}
export default MetaDataResolver;
