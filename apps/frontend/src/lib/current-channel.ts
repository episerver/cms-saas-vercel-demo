import 'server-only'
import * as React from 'react'
import { type ChannelDefinition } from '@remkoj/optimizely-dxp-react'
import currentChannel from '@/site-config'

/**
 * Retrieve the current channel definition from the Optimizely Content
 * Management System. 
 * 
 * @deprecated  Use the build-time cache from '@/site-config', this function
 *              will be removed in a future commit
 * @returns     The current channel
 * @throws      When the current channel cannot be resolved
 */
export const getCurrentChannel : () => Promise<ChannelDefinition> = React.cache(() => Promise.resolve(currentChannel))
export default getCurrentChannel