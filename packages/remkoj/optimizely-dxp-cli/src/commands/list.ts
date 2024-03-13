import { getArgsConfig, type CliModule } from '../app.js'
import createAdminApi, { isApiError } from '@remkoj/optimizely-graph-client/admin'
import chalk from 'chalk'
import figures from 'figures'
import Table from 'cli-table3'

type PublishToVercelProps = { }

/**
 * An Yargs Command module
 * 
 * exports.command: string (or array of strings) that executes this command when given on the command line, first string may contain positional args
 * exports.aliases: array of strings (or a single string) representing aliases of exports.command, positional args defined in an alias are ignored
 * exports.describe: string used as the description for the command in help text, use false for a hidden command
 * exports.builder: object declaring the options the command accepts, or a function accepting and returning a yargs instance
 * exports.handler: a function which will be passed the parsed argv.
 * exports.deprecated: a boolean (or string) to show deprecation notice.
 */
export const publishToVercelModule : CliModule<PublishToVercelProps> = {
    command: ['list'],
    handler: async (args) => {
        // Read configuration
        const cgConfig = getArgsConfig(args)

        // Create secure client
        if (!cgConfig.app_key || !cgConfig.secret)
            throw new Error("Make sure both the Optimizely Graph App Key & Secret have been defined")

        const adminApi = createAdminApi(cgConfig)
        try {
            const currentHooks = await adminApi.webhooks.listWebhookHandler()
            const hooks = new Table({
                head: [chalk.yellow(chalk.bold("ID")),chalk.yellow(chalk.bold("Method")),chalk.yellow(chalk.bold("Url"))],
                colWidths: [ 38, 8, 100 ]
            })

            currentHooks.forEach(x => {
                hooks.push([x.id, x.request.method, x.request.url])
            })
            process.stdout.write(hooks.toString()+"\n")
            process.stdout.write(chalk.green(chalk.bold(figures.tick+" Done"))+"\n")
        } catch (e) {
            if (isApiError(e)) {
                process.stderr.write(chalk.redBright(`${ chalk.bold(figures.cross)} Optimizely Graph returned an error: HTTP ${ e.status }: ${ e.statusText }`)+"\n")
                if (args.verbose)
                    console.error(chalk.redBright(JSON.stringify(e.body, undefined, 4)))
            } else {
                process.stderr.write(chalk.redBright(`${ chalk.bold(figures.cross)} Optimizely Graph returned an unknown error`)+"\n")
                if (args.verbose)
                    console.error(chalk.redBright(e))
            }
            process.exitCode = 1
            return
        }
    },
    aliases: [], 
    describe: "List all webhooks in ContentGraph",
}

export default publishToVercelModule