import { getArgsConfig, getFrontendURL, type CliModule } from '../app.js'
import { createSecureFetch } from '../content-graph-client/index.js'

type PublishToVercelProps = { path: string, token_id:string, publish_token: string }

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
    command: ['unregister [path]'],
    handler: async (args) => {
        // Read configuration
        const cgConfig = getArgsConfig(args)
        const hookPath = args.path ?? '/'
        const token = args.publish_token
        const token_id = args.token_id

        // Create secure client
        const secureFetch = createSecureFetch(cgConfig.app_key, cgConfig.secret)

        // Specific id
        if (typeof(token_id) == 'string' && token_id.length > 24)
        {
            process.stdout.write(`Removing Webhook with ID: ${ token_id }\n`)
            const deleteResponse = await secureFetch(new URL(`/api/webhooks/${ token_id }?t=${ Date.now() }`, cgConfig.gateway), { method: "DELETE" })
            if (!deleteResponse.ok) {
                process.stderr.write(`!! Content Graph returned an error: HTTP ${ deleteResponse.status }: ${ deleteResponse.statusText }\n`)
                if (args.verbose)
                    console.error(await deleteResponse.json())
                process.exitCode = 1
                return
            }
            process.stdout.write(`Removed WebHook with ID ${ token_id } from ContentGraph\n`)
            return
        } 
        
        // Automatic
        const frontendUrl = getFrontendURL(cgConfig)
        const webhookTarget = new URL(hookPath, frontendUrl)
        if (token)
            webhookTarget.searchParams.set('token', token)
        process.stdout.write(`Removing webhook target: ${ webhookTarget.href}\n`)
        if (webhookTarget.hostname == 'localhost') {
            process.stderr.write("!! Cannot register a localhost Site URL with Content Graph\n")
            process.exitCode = 1
            return
        }

        // Get current hooks
        const response = await secureFetch(new URL(`/api/webhooks?t=${ Date.now() }`, cgConfig.gateway), {
            method: "GET"
        })
        if (!response.ok) {
            process.stderr.write(`!! Content Graph returned an error: HTTP ${ response.status }: ${ response.statusText }\n`)
            if (args.verbose)
                console.error(await response.json())
            process.exitCode = 1
            return
        }
        const currentHooks = (await response.json()) as {id: string, request: { url: string, method: string }}[]
        const hooks = currentHooks.filter(x => x.request.url == webhookTarget.href)

        // Check if the hook is present
        if (!hooks || hooks.length == 0) {
            process.stdout.write("Webhook not found, not removing anything\n")
            process.exitCode = 0
            return
        }

        // Run the delete request
        await Promise.all(
            hooks.map(async hook => {
                const hookId = hook.id
                process.stdout.write(`Removing Webhook with ID: ${ hookId }\n`)
                const deleteResponse = await secureFetch(new URL(`/api/webhooks/${ hookId }?t=${ Date.now() }`, cgConfig.gateway), { method: "DELETE" })
                if (!deleteResponse.ok) {
                    process.stderr.write(`!! Content Graph returned an error: HTTP ${ deleteResponse.status }: ${ deleteResponse.statusText }\n`)
                    if (args.verbose)
                        console.error(await deleteResponse.json())
                    process.exitCode = 1
                    return false
                }
                process.stdout.write(`Removed WebHook with ID ${ hookId } from ContentGraph\n`)
                return true
            })
        )
        process.stdout.write("Done\n")
    },
    aliases: [], 
    describe: "Removes a webhook from ContentGraph that invokes /api/content/publish on every publish in ContentGraph",
    builder: (args) => 
    {
        const defaultToken = process.env.FRONTEND_PUBLISH_TOKEN || undefined
        const hasDefaultToken = typeof(defaultToken) == 'string' && defaultToken.length > 0
        args.positional('path', { type: "string", describe: "The frontend route to invoke to publish", default: "/api/content/publish", demandOption: false })
        args.option("publish_token", { alias: "pt", description: "Publishing token", string: true, type: "string", demandOption: !hasDefaultToken, default: defaultToken })
        args.option("token_id", { alias: "ti", description: "If set, removes this webhook only", string: true, type: "string", demandOption: false, default: undefined })
        return args
    }
}

export default publishToVercelModule