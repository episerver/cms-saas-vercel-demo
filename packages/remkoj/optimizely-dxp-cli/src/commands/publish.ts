import { getArgsConfig, getFrontendURL, type CliModule } from '../app.js'
import { createSecureFetch } from '../content-graph-client/index.js'
import chalk from 'chalk'
import figures from 'figures'

type PublishToVercelProps = { path: string, verb: string, publish_token: string }

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
    command: ['register [path] [verb]'],
    handler: async (args) => {
        // Read configuration
        const cgConfig = getArgsConfig(args)
        const frontendUrl = getFrontendURL(cgConfig)
        const hookPath = args.path ?? '/'
        const verb = args.verb ?? 'POST'
        const token = args.publish_token
        const webhookTarget = new URL(hookPath, frontendUrl)
        if (token)
            webhookTarget.searchParams.set('token', token)
        process.stdout.write(`${ chalk.yellow(chalk.bold(figures.arrowRight))} Registering webhook target: ${ chalk.yellow(webhookTarget.href) }\n`)
        if (webhookTarget.hostname == 'localhost') {
            process.stderr.write(chalk.redBright(chalk.bold(figures.cross)+" Cannot register a localhost Site URL with Content Graph")+"\n")
            process.exitCode = 1
            return
        }

        // Create secure client
        const secureFetch = createSecureFetch(cgConfig.app_key, cgConfig.secret)

        // Get current hooks
        const response = await secureFetch(new URL(`/api/webhooks?cache=false&t=${ Date.now() }`, cgConfig.gateway), {
            method: "GET"
        })
        if (!response.ok) {
            process.stderr.write(chalk.redBright(`${chalk.bold(figures.cross)} Content Graph returned an error: HTTP ${ response.status }: ${ response.statusText }`)+"\n")
            if (args.verbose)
                console.error(chalk.redBright(await response.json()))
            process.exitCode = 1
            return
        }

        // Check if the hook is already installed
        const currentHooks = (await response.json()) as {id: string, request: { url: string, method: string }}[]
        if (currentHooks.some(x => x.request.url == webhookTarget.href)) 
        {
            process.stdout.write("\n"+chalk.greenBright(chalk.bold(figures.tick) + " Webhook already registered, no action needed")+"\n")
            process.exitCode = 0
            return
        }

        // Remove hooks to the same URL with different Query Parameters
        function urlWithoutSearch(url: URL) : URL
        {
            const newURL = new URL(url.href)
            for (const key in newURL.searchParams.keys)
                newURL.searchParams.delete(key)
            return newURL
        }
        const targetWithoutQuery = urlWithoutSearch(webhookTarget)
        await Promise.allSettled(currentHooks.map(hook => {
            const hookUrl = urlWithoutSearch(new URL(hook.request.url))
            if (hookUrl.href == targetWithoutQuery.href) {
                process.stdout.write(`${ chalk.yellow(chalk.bold(figures.arrowRight))} Removing webhook with incorrect query parameters: ${ chalk.yellow(hookUrl.href) }`)
                const hookId = hook.id
                return secureFetch(new URL(`/api/webhooks/${ hookId }?cache=false&t=${ Date.now() }`, cgConfig.gateway), { method: "DELETE" }).then(response => response.ok)
            }
            return Promise.resolve(true)
        }))

        // Register the hook
        const registerResponse = await secureFetch(
            new URL(`/api/webhooks?cache=false&t=${ Date.now() }`, cgConfig.gateway), 
            { 
                method: 'POST', 
                body: JSON.stringify({
                    request: {
                        url: webhookTarget.href,
                        method: verb
                    }
                })
            })
        
        if (!registerResponse.ok) {
            process.stderr.write(chalk.redBright(`${chalk.bold(figures.cross)} Content Graph returned an error: HTTP ${ response.status }: ${ response.statusText }`)+"\n")
            if (args.verbose)
                console.error(chalk.redBright(await response.json()))
            process.exitCode = 1
            return
        }

        process.stdout.write("\n"+chalk.greenBright(`${chalk.bold(figures.tick)} ${ webhookTarget.href } has been added as Webhook recipient to Content-Graph`)+"\n")
        
    },
    aliases: [], 
    describe: "Adds a webhook to ContentGraph that invokes /api/content/publish on every publish in ContentGraph",
    builder: (args) => 
    {
        const defaultToken = process.env.FRONTEND_PUBLISH_TOKEN || undefined
        const hasDefaultToken = typeof(defaultToken) == 'string' && defaultToken.length > 0

        args.positional('path', { type: "string", describe: "The frontend route to invoke to publish", default: "/api/content/publish", demandOption: false })
        args.positional('verb', { type: "string", describe: "The HTTP verb to be used when sending the webhook", default: "POST", demandOption: false })
        args.option("publish_token", { alias: "pt", description: "Publishing token", string: true, type: "string", demandOption: !hasDefaultToken, default: defaultToken })
        return args
    }
}

export default publishToVercelModule