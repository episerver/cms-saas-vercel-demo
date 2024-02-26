import * as EnvTools from '../../utils/env';
import * as Helpers from './helpers';
import EnvVars from '../../env-vars';
/**
 * A high level client for the Optimizely Data Platform, providing direct
 * access to some of it's functionality. For advanced capabilities please
 * connect directly to the GraphQL endpoint.
 */
export class DataPlatformClient {
    config;
    _privateKey;
    _publicKey;
    get privateKey() {
        return this._privateKey || "";
    }
    get trackerId() {
        return this._publicKey;
    }
    constructor(options) {
        const defaults = {
            endpoint: EnvTools.readValue(EnvVars.OdpService, "https://api.zaius.com/"),
            privateApiKey: EnvTools.readValue(EnvVars.OdpApiKey, ""),
            membershipTestChunkSize: 25
        };
        this.config = { ...defaults, ...options };
        [this._publicKey, this._privateKey] = Helpers.parseApiKey(this.config.privateApiKey);
        if (!this._publicKey)
            throw new DataPlatformError("The Optimizely Data Platform configuration doesn't contain a tracker id", this.trackerId);
        if (!this._privateKey)
            throw new DataPlatformError("The Optimizely Data Platform configuration doesn't contain private key information", this.trackerId);
    }
    /**
     * Retrieve a list of all audiences available within the  ODP Instance
     *
     * @param       throwOnError    Set to true when an error needs to be
     *                              thrown on an network error (instead of
     *                              returning an empty list)
     * @returns     The list of all audiences
     */
    async getAllAudiences(throwOnError = false) {
        const listAudiencesQuery = 'query GetAllAudiences { audiences { edges { node { name, description } } } }';
        const listResponse = await this.privateQuery(listAudiencesQuery);
        if (!listResponse.ok) {
            if (throwOnError)
                throw new DataPlatformError("Error listing all audiences within ODP", this.trackerId);
            console.error("Error listing all audiences within ODP");
            return [];
        }
        const listData = (await listResponse.json());
        return (listData?.data?.audiences?.edges?.map(e => { return { id: e.node.name, name: e.node.description }; }) ?? []);
    }
    async filterAudiences(vuid, audiences) {
        const query = 'query GetMyAudiences($vuid: String!, $audiences: [String!]!) { customer(vuid: $vuid) { audiences(subset: $audiences) { edges { node { name } } } } }';
        const variables = {
            vuid,
            audiences
        };
        const response = await this.privateQuery(query, variables);
        if (response.ok)
            return response.json()
                .then(ds => (ds?.data?.customer?.audiences?.edges ?? []).map(e => e.node.name));
        throw new DataPlatformError(`Error response from Optimizely Data Platform: ${response.status}: ${response.statusText}`, this.trackerId);
    }
    async getLastSearchTerms(vuid) {
        const query = `query LastSearchTerms ($vuid:String!) {
            events(vuid: $vuid, filter: "event_type='navigation'", order: {field: ts, direction: DESC}) {
                edges {
                    node {
                        search_term
                    }
                }
            }
        }`;
        const variables = { vuid };
        const responseData = await (await this.privateQuery(query, variables)).json();
        if (responseData.errors) {
            console.error("Error while fetching latest search terms, please check your keys");
            console.error(responseData.errors.map((e) => e.message).join('; '));
            return [];
        }
        const terms = (responseData.data?.events?.edges?.map((e) => e.node.search_term) ?? []);
        return terms;
    }
    async privateQuery(graphQuery, variables) {
        return fetch(new URL('/v3/graphql', this.config.endpoint), {
            method: "POST",
            body: JSON.stringify({ query: graphQuery, variables }),
            headers: {
                "content-type": "application/json",
                "x-api-key": this.privateKey
            }
        });
    }
    async query(graphQuery, variables) {
        return fetch(new URL('/v3/graphql', this.config.endpoint), {
            method: "POST",
            body: JSON.stringify({ query: graphQuery, variables }),
            headers: {
                "content-type": "application/json",
                "x-api-key": this.trackerId
            }
        });
    }
}
export class DataPlatformError extends Error {
    _trackerId;
    get trackerId() {
        return this._trackerId ?? '';
    }
    constructor(message, trackerId, options) {
        super(message, options);
        this._trackerId = trackerId;
    }
}
export default DataPlatformClient;
