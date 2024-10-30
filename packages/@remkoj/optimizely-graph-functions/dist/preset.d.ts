import { type Types } from '@graphql-codegen/plugin-helpers';
import { type ClientPresetConfig as ClientPresetOptions } from '@graphql-codegen/client-preset';
import { type PluginOptions } from './index';
import { type TransformOptions } from './types';
export type PresetOptions = ClientPresetOptions & PluginOptions & TransformOptions;
export declare const preset: Types.OutputPreset<PresetOptions>;
export default preset;
