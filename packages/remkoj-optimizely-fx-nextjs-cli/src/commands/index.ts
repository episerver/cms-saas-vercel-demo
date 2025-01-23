import { type CliModuleList } from '../types.js'
import SetupCommand from './setup.js'
import PullCommand from './pull.js'

export const commands : CliModuleList = [
    SetupCommand,
    PullCommand
]
export default commands