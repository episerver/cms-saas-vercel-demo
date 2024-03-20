import type { CodegenPlugin, PluginFunction, PluginValidateFn } from '@graphql-codegen/plugin-helpers';
export type PluginOptions = {
    functions?: string[];
    prettyPrintQuery?: boolean;
    clientPath?: string;
};
export declare function pickPluginOptions(options: Record<string, any>): PluginOptions;
export declare const validate: PluginValidateFn<PluginOptions>;
export declare const plugin: PluginFunction<PluginOptions>;
declare const _default: CodegenPlugin<PluginOptions>;
export default _default;
