import { type OptimizelyGraphConfig } from '../config.js';
import { OptimizelyGraphAdminApi } from './client/OptimizelyGraphAdminApi.js';
import { type ApiError } from './client/index.js';
export { OptimizelyGraphAdminApi } from './client/OptimizelyGraphAdminApi.js';
export { ApiError } from './client/core/ApiError.js';
export declare function isApiError(error: any): error is ApiError;
export declare function createClient(config?: OptimizelyGraphConfig): OptimizelyGraphAdminApi;
export default createClient;
