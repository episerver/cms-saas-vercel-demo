import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc"
import { createNewClient, USE_HMAC_TOKEN } from '@remkoj/optimizely-dxp-react'

export const { getClient : getServerClient } = registerApolloClient(
    () => createNewClient()
)
export const { getClient: getAuthorizedServerClient } = registerApolloClient(
    () => createNewClient(undefined, USE_HMAC_TOKEN)
)
