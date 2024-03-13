import type * as Types from './types.js';
export type { ContentGraphConfig, OptimizelyGraphConfigInternal, OptimizelyGraphConfig } from './types.js';
export declare function readEnvironmentVariables(): Types.OptimizelyGraphConfig;
export declare function applyConfigDefaults(configuredValues: Types.OptimizelyGraphConfig): Types.OptimizelyGraphConfigInternal;
/**
 * Validate the configuration
 *
 * @param toValidate The configuration object
 * @param forPublishedOnly Whether to only validate for published content access
 * @returns
 */
export declare function validateConfig(toValidate: Types.OptimizelyGraphConfig, forPublishedOnly?: boolean): toValidate is Types.OptimizelyGraphConfigInternal;
