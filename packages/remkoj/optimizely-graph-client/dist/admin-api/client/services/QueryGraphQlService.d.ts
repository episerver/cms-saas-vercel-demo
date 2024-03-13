import type { GraphQLRequest } from '../models/GraphQLRequest.js';
import type { GraphQLResponse } from '../models/GraphQLResponse.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export declare class QueryGraphQlService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Execute graphql query
     * Retrieve content respect to graphql query
     * @param query
     * @param mutation
     * @param operationName
     * @param variables
     * @returns GraphQLResponse Returns query result
     * @throws ApiError
     */
    getGraphQlv2Handler(query?: string, mutation?: string, operationName?: string, variables?: string): CancelablePromise<GraphQLResponse>;
    /**
     * Execute graphql query
     * Retrieve content respect to graphql query
     * @param requestBody
     * @returns GraphQLResponse Returns query result
     * @throws ApiError
     */
    postGraphQlv2Handler(requestBody?: GraphQLRequest): CancelablePromise<GraphQLResponse>;
}
