import { getArgsConfig } from '../app.js';
import { createHmacFetch as createSecureFetch } from '@remkoj/optimizely-graph-client/client';
import chalk from 'chalk';
import figures from 'figures';
import Table from 'cli-table3';
export const publishToVercelModule = {
    command: ['list'],
    handler: async (args) => {
        const cgConfig = getArgsConfig(args);
        if (!cgConfig.app_key || !cgConfig.secret)
            throw new Error("Make sure both the Optimizely Graph App Key & Secret have been defined");
        const secureFetch = createSecureFetch(cgConfig.app_key, cgConfig.secret);
        const response = await secureFetch(new URL(`/api/webhooks?cache=false&t=${Date.now()}`, cgConfig.gateway), {
            method: "GET"
        });
        if (!response.ok) {
            process.stderr.write(chalk.redBright(`${chalk.bold(figures.cross)} Content Graph returned an error: HTTP ${response.status}: ${response.statusText}`) + "\n");
            if (args.verbose)
                console.error(chalk.redBright(await response.json()));
            process.exitCode = 1;
            return;
        }
        const currentHooks = (await response.json());
        const hooks = new Table({
            head: [chalk.yellow(chalk.bold("ID")), chalk.yellow(chalk.bold("Method")), chalk.yellow(chalk.bold("Url"))],
            colWidths: [38, 8, 100]
        });
        currentHooks.forEach(x => {
            hooks.push([x.id, x.request.method, x.request.url]);
        });
        process.stdout.write(hooks.toString() + "\n");
        process.stdout.write(chalk.green(chalk.bold(figures.tick + " Done")) + "\n");
    },
    aliases: [],
    describe: "List all webhooks in ContentGraph",
};
export default publishToVercelModule;
