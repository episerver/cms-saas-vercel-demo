export class ResourcesService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Store stop words
     * Stop words are the words in a stop list (or stop list or negative dictionary) which are filtered out (stopped) before or after processing of natural language data (text) because they are insignificant
     * @param requestBody
     * @param languageRouting
     * @returns void
     * @throws ApiError
     */
    upsertStopwordHandler(requestBody, languageRouting) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/resources/stopwords',
            query: {
                'language_routing': languageRouting,
            },
            body: requestBody,
            mediaType: 'text/plain',
        });
    }
    /**
     * Store synonyms
     * When you write a query, you can use synonyms to expand the keywords to get results that users otherwise may not have found.
     * This reduces the problem of getting too few or no results, leading to fewer chances of conversions or even search abandonment.
     * For example, if you search for "H2O", you mat want to find results that contain "water".
     * This happens when you store synonyms in Optimizely Graph and enable them per field in your query. Otherwise, many relevant results may not be retrieved.
     * @param requestBody
     * @param languageRouting
     * @param synonymSlot
     * @returns void
     * @throws ApiError
     */
    upsertSynonymHandler(requestBody, languageRouting, synonymSlot = 'one') {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/resources/synonyms',
            query: {
                'language_routing': languageRouting,
                'synonym_slot': synonymSlot,
            },
            body: requestBody,
            mediaType: 'text/plain',
        });
    }
}
