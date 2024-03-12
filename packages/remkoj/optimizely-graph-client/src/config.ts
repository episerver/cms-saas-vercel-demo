import type { ContentGraphConfig } from './types.js'
export type { ContentGraphConfig } from './types.js'

export function readEnvironmentVariables() : ContentGraphConfig
{
    const config : ContentGraphConfig = {
        secret: getOptional('OPTIMIZELY_GRAPH_SECRET', () => getOptional('OPTIMIZELY_CONTENTGRAPH_SECRET')),
        app_key: getOptional('OPTIMIZELY_GRAPH_APP_KEY', () => getOptional('OPTIMIZELY_CONTENTGRAPH_APP_KEY')),
        single_key: getOptional('OPTIMIZELY_GRAPH_SINGLE_KEY', () => getMandatory('OPTIMIZELY_CONTENTGRAPH_SINGLE_KEY')) as string,
        gateway: getOptional('OPTIMIZELY_GRAPH_GATEWAY', () => getOptional('OPTIMIZELY_CONTENTGRAPH_GATEWAY', 'https://cg.optimizely.com')) as string,
        deploy_domain: getOptional('SITE_DOMAIN', 'localhost:3000') as string,
        dxp_url: getOptional('OPTIMIZELY_CMS_URL', () => getOptional('DXP_URL', 'http://localhost:8000/')) as string,
        query_log: getBoolean('OPTIMIZELY_GRAPH_QUERY_LOG', () => getBoolean('OPTIMIZELY_CONTENTGRAPH_QUERY_LOG', false)),
        debug: getBoolean('OPTIMIZELY_DEBUG', () => getBoolean('DXP_DEBUG', false)),
    }
    return config
}

/**
 * Validate the configuration
 * 
 * @param toValidate The configuration object
 * @param forPublishedOnly Whether to only validate for published content access
 * @returns 
 */
export function validateConfig(toValidate: ContentGraphConfig, forPublishedOnly: boolean = true) : toValidate is ContentGraphConfig
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