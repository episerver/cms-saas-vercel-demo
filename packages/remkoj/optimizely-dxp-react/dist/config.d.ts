export type ContentGraphConfig = {
    /**
     * Optimizely Graph Secret, this value must never leave the server side
     */
    secret: string;
    /**
     * Optimizely Graph AppKey, this value must never leave the server side
     */
    app_key: string;
    /**
     * Optimizely Graph AppKey, it is recommended to not let this key leave the server side
     */
    single_key: string;
    /**
     * Optimizely Graph Service domain, it is recommended to not let this key leave the server side
     */
    gateway: string;
    /**
     * Optimizely CMS Domain, it is recommended to not let this key leave the server side
     */
    dxp_url: string;
    /**
     * Flag to configure is GraphQL queries must be logged
     */
    query_log: boolean;
    /**
     * The auto-generated domain for the deployment
     */
    deploy_domain: string;
};
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
export declare function getContentGraphConfig(): ContentGraphConfig;
/**
 * Validate the configuration
 *
 * @param toValidate The configuration object
 * @param forPublishedOnly Whether to only validate for published content access
 * @returns
 */
export declare function validateContentGraphConfig(toValidate: ContentGraphConfig, forPublishedOnly?: boolean): boolean;
export default getContentGraphConfig;
