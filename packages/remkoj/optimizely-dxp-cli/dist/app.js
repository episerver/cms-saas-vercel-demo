import yargs from 'yargs';
import { getEnvConfig, validateConfig } from './content-graph-client/index.js';
import { isDemanded } from './utils/index.js';
export function createCliApp(scriptName, version, epilogue) {
    const config = getEnvConfig({
        'gateway': 'https://cg.optimizely.com'
    });
    return yargs(process.argv)
        .scriptName(scriptName)
        .version(version ?? "development")
        .usage('$0 <cmd> [args]')
        .option("dxp_url", { alias: "du", description: "Optimizely CMS URL", string: true, type: "string", demandOption: isDemanded(config.dxp_url), default: config.dxp_url })
        .option("deploy_domain", { alias: "dd", description: "Frontend domain", string: true, type: "string", demandOption: isDemanded(config.deploy_domain), default: config.deploy_domain })
        .option('app_key', { alias: "ak", description: "Content Graph App Key", string: true, type: "string", demandOption: isDemanded(config.app_key), default: config.app_key })
        .option('secret', { alias: "s", description: "Content Graph Secret", string: true, type: "string", demandOption: isDemanded(config.secret), default: config.secret })
        .option('single_key', { alias: "sk", description: "Content Graph Single Key", string: true, type: "string", demandOption: isDemanded(config.single_key), default: config.single_key })
        .option('gateway', { alias: "g", description: "Content Graph Gateway", string: true, type: "string", demandOption: isDemanded(config.gateway), default: config.gateway })
        .option('verbose', { description: "Enable query logging", boolean: true, type: 'boolean', demandOption: false, default: config.query_log })
        .demandCommand(1, 1)
        .showHelpOnFail(true)
        .epilogue(epilogue ?? `Copyright Remko Jantzen - 2023-${(new Date(Date.now())).getFullYear()}`)
        .help();
}
export function getArgsConfig(args) {
    const config = {
        dxp_url: args.dxp_url,
        deploy_domain: args.deploy_domain,
        app_key: args.app_key,
        secret: args.secret,
        single_key: args.single_key,
        gateway: args.gateway,
        query_log: args.verbose
    };
    if (!validateConfig(config, false))
        throw new Error("Invalid Content-Graph connection details provided");
    return config;
}
export function getFrontendURL(config) {
    const host = config.deploy_domain;
    const hostname = host.split(":")[0];
    const scheme = hostname == 'localhost' || hostname.endsWith(".local") ? 'http:' : 'https:';
    return new URL(`${scheme}//${host}/`);
}
export default createCliApp;
