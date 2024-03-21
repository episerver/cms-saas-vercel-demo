import { type ComponentFactory, type ContentLink } from '@remkoj/optimizely-dxp-react';
import { type OptimizelyGraphConfig, type IOptiGraphClient } from '@remkoj/optimizely-graph-client';
import { Metadata } from 'next';
export declare class MetaDataResolver {
    private _cgClient;
    constructor(clientOrConfig?: OptimizelyGraphConfig | IOptiGraphClient);
    /**
     * Resolve the meta data for a component, if it has a meta-data method exposed.
     *
     * @param factory       The component factory used to load the component
     * @param contentLink   The link to the component for which the meta-data should be retrieved
     * @param contentType   The content type of the component
     * @param locale        The locale to be used, in a ContentGraph locale format
     * @returns             A Promise for the metadata of the given content type & instance
     */
    resolve(factory: ComponentFactory, contentLink: ContentLink, contentType: string[], locale: string): Promise<Metadata>;
}
export default MetaDataResolver;
