import 'server-only';
import type { ComponentFactory, GenericContext } from '../types.js';
import { type IOptiGraphClient, type ContentLink } from "@remkoj/optimizely-graph-client";
export interface ServerContext extends GenericContext {
    readonly forceEditorWarnings: boolean;
    setInEditMode(newValue: boolean): ServerContext;
    setOptimizelyGraphClient(newValue: IOptiGraphClient): ServerContext;
    setComponentFactory(newValue: ComponentFactory): ServerContext;
    setForceEditorWarnings(newValue: boolean): ServerContext;
    setLocale(newValue: string | undefined): ServerContext;
    setEditableContentId(newId: ContentLink): ServerContext;
    isEditableContent(id: ContentLink): boolean;
    setLocale(newValue: string | undefined): ServerContext;
    setOptimizelyGraphClient(newValue: IOptiGraphClient): ServerContext;
    setComponentFactory(newValue: ComponentFactory): ServerContext;
}
/**
 * Retrieve the working instance of the component factory, which is memoized through the React.cache()
 * server side react method. This ensures the context will not be shared across pre-renders / requests.
 */
export declare const getServerContext: () => ServerContext;
export default getServerContext;
