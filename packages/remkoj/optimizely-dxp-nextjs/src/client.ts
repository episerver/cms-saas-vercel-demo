import 'server-only'
import React from 'react'
import createClient, { type IOptiGraphClient } from '@remkoj/optimizely-graph-client'

const DBG = process.env.DXP_DEBUG == '1'

export const getServerClient : () => IOptiGraphClient = React.cache(() => {
    if (DBG)
        console.log('[ContentGraph Shared Client] Creating new ContentGraph client')
    return createClient()
})

export const getAuthorizedServerClient : (token?:string) => IOptiGraphClient = (token) => {
    if (DBG)
        console.log('[ContentGraph Shared Client] Updating cached client with authentication details')
    const client = getServerClient()
    client.updateAuthentication(token)
    if (DBG)
        console.log(`[ContentGraph Shared Client] Updated authentication, current mode: ${ client.currentAuthMode }`)
    return client
}

export default getServerClient()
