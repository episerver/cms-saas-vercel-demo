export type OptimizelyGraphConfigInternal = {
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
    dxp_url?: string

    /**
     * The auto-generated domain for the deployment
     */
    deploy_domain?: string

    /**
     * Set to true to enable debug output to the console
     */
    debug: boolean

    /**
     * Set to true to log all GraphQL queries to the console
     */
    query_log: boolean

    /**
     * Optimizely Graph Secret, this value must never leave the server side
     */
    secret?: string

    /**
     * Optimizely Graph AppKey, this value must never leave the server side
     */
    app_key?: string
}

export type OptimizelyGraphConfig = Partial<Omit<OptimizelyGraphConfigInternal, 'single_key'>> & Pick<OptimizelyGraphConfigInternal, 'single_key'>

/**
 * @deprecated Reference OptimizelyGraphConfig
 */
export type ContentGraphConfig = OptimizelyGraphConfig