/**
 * The version of the current Optimizely DXP React SDK
 */
export const Version = '0.0.1'

// Export library
export * from './config'
export * from './types'
export * from './routing'
export * from './client'
export * as Errors from './errors'
export * as Utils from './utilities'
export * from './channel-repository'

export { createClient as default } from './client'