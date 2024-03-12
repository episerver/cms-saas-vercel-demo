import type { GraphQLClient } from "graphql-request";
export type RequestMethod = InstanceType<typeof GraphQLClient>['request'];
export type QueryParams = {
    query: Parameters<RequestMethod>[0]['document'];
    variables: Parameters<RequestMethod>[0]['variables'];
};
