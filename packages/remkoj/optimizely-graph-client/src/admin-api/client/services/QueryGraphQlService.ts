/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GraphQLRequest } from '../models/GraphQLRequest.js';
import type { GraphQLResponse } from '../models/GraphQLResponse.js';
import type { CancelablePromise } from '../core/CancelablePromise.js';
import type { BaseHttpRequest } from '../core/BaseHttpRequest.js';
export class QueryGraphQlService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
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
    public getGraphQlv2Handler(
        query?: string,
        mutation?: string,
        operationName?: string,
        variables?: string,
    ): CancelablePromise<GraphQLResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/content/v2',
            query: {
                'query': query,
                'mutation': mutation,
                'operationName': operationName,
                'variables': variables,
            },
        });
    }
    /**
     * Execute graphql query
     * Retrieve content respect to graphql query
     * @param requestBody
     * @returns GraphQLResponse Returns query result
     * @throws ApiError
     */
    public postGraphQlv2Handler(
        requestBody?: GraphQLRequest,
    ): CancelablePromise<GraphQLResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/content/v2',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
