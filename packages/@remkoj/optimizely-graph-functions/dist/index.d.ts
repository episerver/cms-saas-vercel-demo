import type { CodegenPlugin, PluginFunction, PluginValidateFn } from '@graphql-codegen/plugin-helpers';
export type PluginOptions = {
    functions?: string[];
    prettyPrintQuery?: boolean;
    clientPath?: string;
};
export declare const DefaultFunctions: string[];
export declare function pickPluginOptions(options: Record<string, any>): PluginOptions;
/**
 * Validate the plugin configuration
 *
 * @param schema
 * @param document
 * @param config
 * @param outputFile
 * @param allPlugins
 * @param pluginContext
 */
export declare const validate: PluginValidateFn<PluginOptions>;
/**
 * Actual Plugin logic
 *
 * @param schema
 * @param documents
 * @param config
 * @param info
 * @returns
 */
export declare const plugin: PluginFunction<PluginOptions>;
declare const _default: CodegenPlugin<PluginOptions>;
export default _default;
