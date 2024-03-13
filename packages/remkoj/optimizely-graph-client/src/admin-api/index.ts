import { readEnvironmentVariables, applyConfigDefaults, validateConfig, type OptimizelyGraphConfig } from '../config.js'
import { OptimizelyGraphAdminApi, type ApiError } from './client/index.js'

export  * from './client/index.js'

export function isApiError(error: any) : error is ApiError
{
    if (typeof error != 'object' || error == null)
        return false
    return typeof (error as ApiError).status == 'number' && typeof (error as ApiError).url == 'string'
}

export function createClient(config?: OptimizelyGraphConfig) : OptimizelyGraphAdminApi
{
    const graphConfig = applyConfigDefaults(config ?? readEnvironmentVariables())
    if (!validateConfig(graphConfig, true))
        throw new Error("The Optimizely Graph Admin API requires the App Key and Secret to be defined")

    const client = new OptimizelyGraphAdminApi({
        BASE: graphConfig.gateway,
        CREDENTIALS: "include",
        USERNAME: graphConfig.app_key,
        PASSWORD: graphConfig.secret
    })
    return client
}

export default createClient