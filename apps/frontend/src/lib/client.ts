import "server-only"
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc"
import { createNewClient, ForceHmacAuthentication } from '@remkoj/optimizely-dxp-react'
import fragmentTypes from '@gql/fragment-types.json'
import type { InMemoryCacheConfig } from "@apollo/client"
import * as React from 'react'

const { possibleTypes } = fragmentTypes
const cacheConfig : InMemoryCacheConfig = {
    possibleTypes,
    typePolicies: {
    }
}

// Bad, bad practice, but needed as Inline blocks don't have an identifier
possibleTypes.IContent.forEach(iContentType => {
    cacheConfig.typePolicies = cacheConfig.typePolicies ?? {}
    cacheConfig.typePolicies[iContentType] = { keyFields: false }
})

export const { getClient : getServerClient } = registerApolloClient(() => createNewClient(undefined, undefined, undefined, cacheConfig))
export const getAuthorizedServerClient = React.cache((token: string = ForceHmacAuthentication) => createNewClient(undefined, token, undefined, {
    ...cacheConfig,
    resultCaching: false,
    resultCacheMaxSize: 0
}))