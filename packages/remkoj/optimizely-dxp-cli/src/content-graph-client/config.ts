export type ContentGraphConfig = {
    /**
     * Optimizely Graph Secret, this value must never leave the server side
     */
    secret: string
    /**
     * Optimizely Graph AppKey, this value must never leave the server side
     */
    app_key: string
    /**
     * Optimizely Graph AppKey, it is recommended to not let this key leave the server side
     */
    single_key: string
    /**
     * Optimizely Graph Service domain, it is recommended to not let this key leave the server side
     */
    gateway: string
    /**
     * Optimizely CMS Domain, it is recommended to not let this key leave the server side
     */
    dxp_url: string
    /**
     * Flag to configure is GraphQL queries must be logged
     */
    query_log: boolean
    /**
     * The auto-generated domain for the deployment
     */
    deploy_domain: string
}


/**
 * Read the ContentGraph configuration from the environment, reading
 * the configuration. If the configuration isn't found, it falls back
 * to the NEXT_PUBLIC_ prefixed equivalents.
 * 
 * The following environment variables are read
 * 
 * - OPTIMIZELY_CONTENTGRAPH_SECRET
 * - OPTIMIZELY_CONTENTGRAPH_APP_KEY
 * - OPTIMIZELY_CONTENTGRAPH_SINGLE_KEY
 * - OPTIMIZELY_CONTENTGRAPH_GATEWAY
 * 
 * If no configuration is found, an empty string is returned
 * 
 * @returns     The inferred configuration
 */
export function getContentGraphConfig(defaults?: Partial<ContentGraphConfig>) : ContentGraphConfig
{
    return {
        ...defaults,
        secret: process?.env?.OPTIMIZELY_CONTENTGRAPH_SECRET ?? process?.env?.NEXT_PUBLIC_OPTIMIZELY_CONTENTGRAPH_SECRET ?? '',
        app_key: process?.env?.OPTIMIZELY_CONTENTGRAPH_APP_KEY ?? process?.env?.NEXT_PUBLIC_OPTIMIZELY_CONTENTGRAPH_APP_KEY ?? '',
        single_key: process?.env?.OPTIMIZELY_CONTENTGRAPH_SINGLE_KEY ?? process?.env?.NEXT_PUBLIC_OPTIMIZELY_CONTENTGRAPH_SINGLE_KEY ?? '',
        gateway: process?.env?.OPTIMIZELY_CONTENTGRAPH_GATEWAY ?? process?.env?.NEXT_PUBLIC_OPTIMIZELY_CONTENTGRAPH_GATEWAY ?? 'https://cg.optimizely.com',
        query_log: process?.env?.OPTIMIZELY_CONTENTGRAPH_QUERY_LOG ?
                            (process?.env?.OPTIMIZELY_CONTENTGRAPH_QUERY_LOG == '1' || process?.env?.OPTIMIZELY_CONTENTGRAPH_QUERY_LOG?.toLocaleLowerCase() == 'true') :
                            false,
        deploy_domain: process?.env?.SITE_DOMAIN ?? process?.env?.NEXT_PUBLIC_SITE_DOMAIN ?? 'localhost:3000',
        dxp_url: process?.env?.DXP_URL ?? process?.env?.NEXT_PUBLIC_DXP_URL ?? 'http://localhost:8000/'
    }
}

/**
 * Validate the configuration
 * 
 * @param toValidate The configuration object
 * @param forPublishedOnly Whether to only validate for published content access
 * @returns 
 */
export function validateContentGraphConfig(toValidate: ContentGraphConfig, forPublishedOnly: boolean = true) : boolean
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

export default getContentGraphConfig