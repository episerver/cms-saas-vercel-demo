import { type OptimizelyGraphConfig } from './config.js';
export declare function getGraphQLCodegenSchema(config?: OptimizelyGraphConfig): SchemaInfo;
export type SchemaInfo = {
    [schemaUri: string]: {
        headers?: {
            [headerName: string]: string;
        };
    };
};
export default getGraphQLCodegenSchema;
