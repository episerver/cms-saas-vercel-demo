import yargs from 'yargs'
import { type OptiCmsApp } from './types.js'
import { readEnvConfig } from './config.js'

export function createOptiCmsApp(scriptName: string, version?: string, epilogue?: string) : OptiCmsApp
{
    const config = readEnvConfig()

    return yargs(process.argv)
        .scriptName(scriptName)
        .version(version ?? "development")
        .usage('$0 <cmd> [args]')
        .option("path", { alias: "d", description: "Application root folder", string: true, type: "string", demandOption: false, default: process.cwd() })
        .option("token", { alias: "t", description: "Personal access token", string: true, type: "string", demandOption: isDemanded(config.token), default: config.token })
        .option("project", { alias: "p", description: "FX Project ID", string: true, type: "string", demandOption: isDemanded(config.project), default: config.project })
        .option("key", { alias: "k", description: "FX Project Environment SDK Key", string: true, type: "string", demandOption: isDemanded(config.key), default: config.key })
        .option("envfile", { alias: "e", description: "The local .env file to use", string: true, type: "string", demandOption: false, default: '.env.local' })
        .option("nosrc", { alias: "n", description: "Flag to indicate that the project does not use the src folder", boolean: true, type: 'boolean', demandOption: false, default: false})
        .option('verbose', { description: "Enable logging", boolean: true, type: 'boolean', demandOption: false, default: config.debug })
        .demandCommand(1,1)
        .showHelpOnFail(true)
        .epilogue(epilogue ?? `Copyright Remko Jantzen - 2023-${ (new Date(Date.now())).getFullYear() }`)
        .help()
}

export default createOptiCmsApp

function isDemanded(value: any)
{
    if (value == undefined || value == null)
        return true
    switch (typeof(value))
    {
        case 'string':
            return value == ""
    }
    return false
}