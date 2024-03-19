import type { Types } from '@graphql-codegen/plugin-helpers';
import type * as OptlyFunctionsTypes from './types';
import { type ClientPresetConfig } from '@graphql-codegen/client-preset';
export type OptimizelyGraphFunctionsPresetConfig = ClientPresetConfig & OptlyFunctionsTypes.OptimizelyFunctionOptions;
export declare const preset: Types.OutputPreset<OptimizelyGraphFunctionsPresetConfig>;
declare const _default: {
    preset: Types.OutputPreset<OptimizelyGraphFunctionsPresetConfig>;
};
export default _default;
