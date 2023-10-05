import type { CodegenPlugin } from '@graphql-codegen/plugin-helpers';
type OptimizelyFunctionInjection = {
    into: string;
    nameRegex?: string;
    pathRegex?: string;
};
type OptimizelyFunctionOptions = {
    optlyFunctions: string[];
    optlyInjections?: OptimizelyFunctionInjection[];
    optlyPrettyQuery?: boolean;
    clientPath?: string;
};
type OptimizelyGraphFunctionPlugin = CodegenPlugin<OptimizelyFunctionOptions>;
declare const plugin: OptimizelyGraphFunctionPlugin;
export default plugin;
