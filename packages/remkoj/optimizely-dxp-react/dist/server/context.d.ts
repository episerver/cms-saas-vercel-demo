import 'server-only';
import type { ComponentFactory } from '../types';
import type { IOptiGraphClient } from "@remkoj/optimizely-graph-client";
export type EditableContentId = {
    id: number | null;
    workId?: number | null;
    guidValue?: string | null;
} | {
    id?: number | null;
    workId?: number | null;
    guidValue: string | null;
};
export interface ServerContext {
    readonly inEditMode: Readonly<boolean>;
    readonly isDevelopment: boolean;
    readonly isDebug: boolean;
    readonly isDebugOrDevelopment: boolean;
    readonly client?: IOptiGraphClient;
    readonly factory: ComponentFactory;
    readonly forceEditorWarnings: boolean;
    readonly locale?: string;
    setInEditMode(newValue: boolean): ServerContext;
    setOptimizelyGraphClient(newValue: IOptiGraphClient): ServerContext;
    setComponentFactory(newValue: ComponentFactory): ServerContext;
    setForceEditorWarnings(newValue: boolean): ServerContext;
    setLocale(newValue: string | undefined): ServerContext;
    setEditableContentId(newId: EditableContentId): ServerContext;
    isEditableContent(id: EditableContentId): boolean;
}
/**
 * Retrieve the working instance of the component factory, which is memoized through the React.cache()
 * server side react method. This ensures the context will not be shared across pre-renders / requests.
 */
export declare const getServerContext: () => ServerContext;
export default getServerContext;
