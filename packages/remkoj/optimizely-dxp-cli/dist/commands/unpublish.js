import { getArgsConfig, getFrontendURL } from '../app.js';
import createAdminApi, { isApiError } from '@remkoj/optimizely-graph-client/admin';
export const publishToVercelModule = {
    command: ['unregister [path]'],
    handler: async (args) => {
        const cgConfig = getArgsConfig(args);
        const hookPath = args.path ?? '/';
        const token = args.publish_token;
        const token_id = args.token_id;
        if (!cgConfig.app_key || !cgConfig.secret)
            throw new Error("Make sure both the Optimizely Graph App Key & Secret have been defined");
        const adminApi = createAdminApi(cgConfig);
        if (typeof (token_id) == 'string' && token_id.length > 24) {
            process.stdout.write(`Removing Webhook with ID: ${token_id}\n`);
            try {
                await adminApi.webhooks.deleteWebhookHandler(token_id);
            }
            catch (e) {
                if (isApiError(e)) {
                    process.stderr.write(`!! Optimizely Graph returned an error: HTTP ${e.status}: ${e.statusText}\n`);
                    if (args.verbose)
                        console.error(e.body);
                    process.exitCode = 1;
                    return;
                }
                else {
                    process.stderr.write(`!! Optimizely Graph returned an error\n`);
                }
            }
            process.stdout.write(`Removed WebHook with ID ${token_id} from ContentGraph\n`);
            return;
        }
        const frontendUrl = getFrontendURL(cgConfig);
        const webhookTarget = new URL(hookPath, frontendUrl);
        if (token)
            webhookTarget.searchParams.set('token', token);
        process.stdout.write(`Removing webhook target: ${webhookTarget.href}\n`);
        if (webhookTarget.hostname == 'localhost') {
            process.stderr.write("!! Cannot register a localhost Site URL with Content Graph\n");
            process.exitCode = 1;
            return;
        }
        try {
            const currentHooks = await adminApi.webhooks.listWebhookHandler();
            const hooks = currentHooks.filter(x => x.request.url == webhookTarget.href);
            if (!hooks || hooks.length == 0) {
                process.stdout.write("Webhook not found, not removing anything\n");
                process.exitCode = 0;
                return;
            }
            await Promise.all(hooks.map(async (hook) => {
                const hookId = hook.id;
                process.stdout.write(`Removing Webhook with ID: ${hookId}\n`);
                await adminApi.webhooks.deleteWebhookHandler(hookId).then(() => process.stdout.write(`Removed WebHook with ID ${hookId} from ContentGraph\n`));
                return true;
            }));
        }
        catch (e) {
            if (isApiError(e)) {
                process.stderr.write(`!! Optimizely Graph returned an error: HTTP ${e.status}: ${e.statusText}\n`);
                if (args.verbose)
                    console.error(e.body);
                process.exitCode = 1;
                return;
            }
            else {
                process.stderr.write(`!! Optimizely Graph returned an error\n`);
            }
        }
        process.stdout.write("Done\n");
    },
    aliases: [],
    describe: "Removes a webhook from ContentGraph that invokes /api/content/publish on every publish in ContentGraph",
    builder: (args) => {
        const defaultToken = process.env.FRONTEND_PUBLISH_TOKEN || undefined;
        const hasDefaultToken = typeof (defaultToken) == 'string' && defaultToken.length > 0;
        args.positional('path', { type: "string", describe: "The frontend route to invoke to publish", default: "/api/content/publish", demandOption: false });
        args.option("publish_token", { alias: "pt", description: "Publishing token", string: true, type: "string", demandOption: !hasDefaultToken, default: defaultToken });
        args.option("token_id", { alias: "ti", description: "If set, removes this webhook only", string: true, type: "string", demandOption: false, default: undefined });
        return args;
    }
};
export default publishToVercelModule;
