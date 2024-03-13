export class QueryGraphQlService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
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
    getGraphQlv2Handler(query, mutation, operationName, variables) {
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
    postGraphQlv2Handler(requestBody) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/content/v2',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
