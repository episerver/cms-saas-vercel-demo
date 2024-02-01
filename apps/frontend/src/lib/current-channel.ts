import 'server-only'
import * as React from 'react'
import { getServerClient } from './client'
import { ChannelRepository } from '@remkoj/optimizely-dxp-react'

/**
 * Retrieve the current channel definition from the Optimizely Content
 * Management System
 * 
 * @returns     The current channel
 * @throws      When the current channel cannot be resolved
 */
export const getCurrentChannel = React.cache(async () => {
    const optlyClient = getServerClient()
    const repo = new ChannelRepository(optlyClient)
    const chnl = await repo.getDefault()
    if (!chnl)
        throw new Error("Unable to resolve the current channel, verify your configuration")
    return chnl
})

export default getCurrentChannel