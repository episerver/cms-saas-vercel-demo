import type { ContentGraphConfig } from './types.js';
export type { ContentGraphConfig } from './types.js';
export declare function readEnvironmentVariables(): ContentGraphConfig;
/**
 * Validate the configuration
 *
 * @param toValidate The configuration object
 * @param forPublishedOnly Whether to only validate for published content access
 * @returns
 */
export declare function validateConfig(toValidate: ContentGraphConfig, forPublishedOnly?: boolean): toValidate is ContentGraphConfig;
