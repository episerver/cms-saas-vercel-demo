import { type OptimizelyGraphConfig } from '../config.js';
import { OptimizelyGraphAdminApi, type ApiError } from './client/index.js';
export * from './client/index.js';
export declare function isApiError(error: any): error is ApiError;
export declare function createClient(config?: OptimizelyGraphConfig): OptimizelyGraphAdminApi;
export default createClient;
