export { DataPlatformClient as Client, type DataPlatformError } from './api'
export * as Tools from './helpers'
import { DataPlatformClient as Client, DataPlatformError } from './api'
import * as Tools from './helpers'

export default {
    Client,
    Tools,
    DataPlatformError
}