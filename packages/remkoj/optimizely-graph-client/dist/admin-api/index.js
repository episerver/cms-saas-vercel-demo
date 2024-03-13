import { readEnvironmentVariables, applyConfigDefaults, validateConfig } from '../config.js';
import { OptimizelyGraphAdminApi } from './client/index.js';
export * from './client/index.js';
export function isApiError(error) {
    if (typeof error != 'object' || error == null)
        return false;
    return typeof error.status == 'number' && typeof error.url == 'string';
}
export function createClient(config) {
    const graphConfig = applyConfigDefaults(config ?? readEnvironmentVariables());
    if (!validateConfig(graphConfig, true))
        throw new Error("The Optimizely Graph Admin API requires the App Key and Secret to be defined");
    const client = new OptimizelyGraphAdminApi({
        BASE: graphConfig.gateway,
        CREDENTIALS: "include",
        USERNAME: graphConfig.app_key,
        PASSWORD: graphConfig.secret
    });
    return client;
}
export default createClient;
