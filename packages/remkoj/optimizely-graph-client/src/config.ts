import type * as Types from './types.js'
export type { ContentGraphConfig, OptimizelyGraphConfigInternal, OptimizelyGraphConfig } from './types.js'

export function readEnvironmentVariables() : Types.OptimizelyGraphConfig
{
    const config : Types.OptimizelyGraphConfig = {
        secret: getOptional('OPTIMIZELY_GRAPH_SECRET', () => getOptional('OPTIMIZELY_CONTENTGRAPH_SECRET')),
        app_key: getOptional('OPTIMIZELY_GRAPH_APP_KEY', () => getOptional('OPTIMIZELY_CONTENTGRAPH_APP_KEY')),
        single_key: getOptional('OPTIMIZELY_GRAPH_SINGLE_KEY', () => getOptional('OPTIMIZELY_CONTENTGRAPH_SINGLE_KEY', '')) as string,
        gateway: getOptional('OPTIMIZELY_GRAPH_GATEWAY', () => getOptional('OPTIMIZELY_CONTENTGRAPH_GATEWAY')),
        deploy_domain: getOptional('SITE_DOMAIN'),
        dxp_url: getOptional('OPTIMIZELY_CMS_URL', () => getOptional('DXP_URL')),
        query_log: getBoolean('OPTIMIZELY_GRAPH_QUERY_LOG', () => getBoolean('OPTIMIZELY_CONTENTGRAPH_QUERY_LOG', false)),
        debug: getBoolean('OPTIMIZELY_DEBUG', () => getBoolean('DXP_DEBUG', false)),
    }
    return config
}

export function applyConfigDefaults(configuredValues: Types.OptimizelyGraphConfig) : Types.OptimizelyGraphConfigInternal
{
    const defaults : Types.OptimizelyGraphConfigInternal = {
        single_key: "",
        gateway: "https://cg.optimizely.com",
        dxp_url: "",
        deploy_domain: "",
        debug: false,
        query_log: false,
    }
    return {
        ...defaults,
        ...configuredValues
    }
}

/**
 * Validate the configuration
 * 
 * @param toValidate The configuration object
 * @param forPublishedOnly Whether to only validate for published content access
 * @returns 
 */
export function validateConfig(toValidate: Types.OptimizelyGraphConfig, forPublishedOnly: boolean = true) : toValidate is Types.OptimizelyGraphConfigInternal
{
    const hasSingleKey = isNonEmptyString(toValidate?.single_key)
    const hasGateway = isValidUrl(toValidate?.gateway)

    if (forPublishedOnly)
        return hasSingleKey && hasGateway

    const hasSecret = isNonEmptyString(toValidate?.secret)
    const hasAppKey = isNonEmptyString(toValidate?.app_key)

    return hasGateway && hasSingleKey && hasAppKey && hasSecret
}

function isNonEmptyString(toTest: any) : toTest is string
{
    return typeof(toTest) == 'string' && toTest.length > 0
}

function isValidUrl(toTest: any) : boolean 
{
    if (!isNonEmptyString(toTest)) 
        return false
    try {
        var u = new URL(toTest)
        if (u.protocol != 'https:')
            return false
        return true
    } catch {
        return false
    }
}

function getBoolean(envVarName: string, defaultValue: boolean | (() => boolean) = false) : boolean
{
    const currentValue = getOptional(envVarName)
    if (!currentValue) {
        if (typeof(defaultValue) == 'function')
            return defaultValue()
        return defaultValue
    }
    return currentValue == '1' || currentValue.toLowerCase() == 'true'
}

function getMandatory(envVarName: string) : string
{
    let value : string | undefined = undefined
    try {
        value = process.env[envVarName]
    } catch (e) {
        // Ignore on purpose
    }
    if (value == null || value == undefined || value.trim() == "")
        throw new Error(`The environment variable ${ envVarName } is required, but not set`)

    return value.trim()
}

function getOptional(envVarName: string, defaultValue?: string | (() => string | undefined) | undefined) : string | undefined
{
    try {
        return getMandatory(envVarName)
    } catch (e) {
        if (typeof(defaultValue) == 'function')
            return defaultValue()
        return defaultValue
    }
}