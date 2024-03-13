export type GraphQLRequest = {
    query?: string;
    mutation?: string;
    operationName?: string;
    variables?: Record<string, string>;
};
