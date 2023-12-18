import "server-only"
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc"
import { createNewClient, ForceHmacAuthentication } from '@remkoj/optimizely-dxp-react'
import fragmentTypes from '@gql/fragment-types.json'
import type { InMemoryCacheConfig } from "@apollo/client"
import * as React from 'react'

const { possibleTypes } = fragmentTypes

// Base cache configuration
const cacheConfig : InMemoryCacheConfig = {
    possibleTypes,
    typePolicies: {
        "ContentModelReference": { keyFields: false },
        "ContentModelReferenceSearch": { keyFields: false }
    }
}

// Add policies for all IContent based content types
possibleTypes.IContent.forEach(iContentType => {
    cacheConfig.typePolicies = cacheConfig.typePolicies ?? {}
    cacheConfig.typePolicies[iContentType] = { 
        keyFields: false
    }
})

//@ToDo: Make content cacheable, without assumptions on the query created

export const { getClient : getServerClient } = registerApolloClient(() => createNewClient(undefined, undefined, undefined, cacheConfig))
export const getAuthorizedServerClient = React.cache((token: string = ForceHmacAuthentication) => createNewClient(undefined, token, undefined, {
    ...cacheConfig,
    resultCaching: false,
    resultCacheMaxSize: 0
}))