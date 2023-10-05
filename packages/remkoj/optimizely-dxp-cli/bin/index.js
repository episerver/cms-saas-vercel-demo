#!/usr/bin/env node
/**
 * Frontend Utility providing helpers for common tasks when building a Vercel
 * hosted, Next.JS based website that uses Optimizely Content-Graph as content
 * repository
 * 
 * License: Apache 2
 * Copyright (c) 2023 - Remko Jantzen
 */

import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';
import * as path from 'node:path';
import path__default from 'node:path';
import yargs from 'yargs';
import '@apollo/client/core/index.js';
import '@apollo/client/link/error/index.js';
import Base64 from 'crypto-js/enc-base64.js';
import hmacSHA256 from 'crypto-js/hmac-sha256.js';
import md5 from 'crypto-js/md5.js';
import fetch, { Request } from 'node-fetch';
import chalk from 'chalk';
import figures from 'figures';
import Table from 'cli-table3';
import fs from 'node:fs';

function processEnvFile(suffix = "") {
    const envVars = dotenv.config({
        path: path.resolve(process.cwd(), `.env${suffix}`)
    });
    dotenvExpand.expand(envVars);
}
const envName = process.env.OPTI_BUILD_ENV ?? process.env.NODE_ENV ?? 'development';
processEnvFile(`.${envName}.local`);
processEnvFile(`.${envName}`);
processEnvFile('.local');
processEnvFile();

function getContentGraphConfig(defaults) {
    return {
        ...defaults,
        secret: process?.env?.OPTIMIZELY_CONTENTGRAPH_SECRET ?? process?.env?.NEXT_PUBLIC_OPTIMIZELY_CONTENTGRAPH_SECRET ?? '',
        app_key: process?.env?.OPTIMIZELY_CONTENTGRAPH_APP_KEY ?? process?.env?.NEXT_PUBLIC_OPTIMIZELY_CONTENTGRAPH_APP_KEY ?? '',
        single_key: process?.env?.OPTIMIZELY_CONTENTGRAPH_SINGLE_KEY ?? process?.env?.NEXT_PUBLIC_OPTIMIZELY_CONTENTGRAPH_SINGLE_KEY ?? '',
        gateway: process?.env?.OPTIMIZELY_CONTENTGRAPH_GATEWAY ?? process?.env?.NEXT_PUBLIC_OPTIMIZELY_CONTENTGRAPH_GATEWAY ?? 'https://cg.optimizely.com',
        query_log: process?.env?.OPTIMIZELY_CONTENTGRAPH_QUERY_LOG ?
            (process?.env?.OPTIMIZELY_CONTENTGRAPH_QUERY_LOG == '1' || process?.env?.OPTIMIZELY_CONTENTGRAPH_QUERY_LOG?.toLocaleLowerCase() == 'true') :
            false,
        deploy_domain: process?.env?.SITE_DOMAIN ?? process?.env?.NEXT_PUBLIC_SITE_DOMAIN ?? 'localhost:3000',
        dxp_url: process?.env?.DXP_URL ?? process?.env?.NEXT_PUBLIC_DXP_URL ?? 'http://localhost:8000/'
    };
}
function validateContentGraphConfig(toValidate, forPublishedOnly = true) {
    const hasSingleKey = isNonEmptyString(toValidate?.single_key);
    const hasGateway = isValidUrl(toValidate?.gateway);
    if (forPublishedOnly)
        return hasSingleKey && hasGateway;
    const hasSecret = isNonEmptyString(toValidate?.secret);
    const hasAppKey = isNonEmptyString(toValidate?.app_key);
    return hasGateway && hasSingleKey && hasAppKey && hasSecret;
}
function isNonEmptyString(toTest) {
    return typeof (toTest) == 'string' && toTest.length > 0;
}
function isValidUrl(toTest) {
    if (!isNonEmptyString(toTest))
        return false;
    try {
        var u = new URL(toTest);
        if (u.protocol != 'https:')
            return false;
        return true;
    }
    catch {
        return false;
    }
}

function createHmacFetch(appKey, secret) {
    function isRequest(toTest) {
        if (typeof (toTest) != 'object' || toTest == null)
            return false;
        if (toTest.href)
            return false;
        return toTest.url ? true : false;
    }
    function readStream(stream) {
        const chunks = [];
        return new Promise((resolve, reject) => {
            stream.on('data', chunk => chunks.push(chunk));
            stream.on('error', reject);
            stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
        });
    }
    return async function newFetch(...args) {
        const [input, init] = args;
        const url = new URL(isRequest(input) ? input.url : input.toString());
        const method = (isRequest(input) ? input.method : init?.method) ?? 'get';
        const secretBytes = Base64.parse(secret);
        const target = url.pathname + url.search;
        const timestamp = new Date().getTime();
        const nonce = Math.random().toString(36).substring(7);
        const body = isRequest(input) ?
            (input.body ? await readStream(input.body) : "") :
            new String(init?.body ?? "");
        const body_b64 = md5(String(body || "")).toString(Base64);
        const message = appKey + method + target + timestamp + nonce + body_b64;
        const hmac = hmacSHA256(message, secretBytes);
        const signature = Base64.stringify(hmac);
        const newRequest = isRequest(input) ? input.clone() : new Request(input, init);
        const authHeaderValue = `epi-hmac ${appKey}:${timestamp}:${nonce}:${signature}`;
        newRequest.headers.set('Authorization', authHeaderValue);
        return fetch(newRequest);
    };
}

process.env.NODE_ENV == 'development';

function isDemanded(value) {
    if (value == undefined || value == null)
        return true;
    switch (typeof (value)) {
        case 'string':
            return value == "";
    }
    return false;
}

function createCliApp(scriptName, version, epilogue) {
    const config = getContentGraphConfig({
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
function getArgsConfig(args) {
    const config = {
        dxp_url: args.dxp_url,
        deploy_domain: args.deploy_domain,
        app_key: args.app_key,
        secret: args.secret,
        single_key: args.single_key,
        gateway: args.gateway,
        query_log: args.verbose
    };
    if (!validateContentGraphConfig(config, false))
        throw new Error("Invalid Content-Graph connection details provided");
    return config;
}
function getFrontendURL(config) {
    const host = config.deploy_domain;
    const hostname = host.split(":")[0];
    const scheme = hostname == 'localhost' || hostname.endsWith(".local") ? 'http:' : 'https:';
    return new URL(`${scheme}//${host}/`);
}

const publishToVercelModule$2 = {
    command: ['register [path] [verb]'],
    handler: async (args) => {
        const cgConfig = getArgsConfig(args);
        const frontendUrl = getFrontendURL(cgConfig);
        const hookPath = args.path ?? '/';
        const verb = args.verb ?? 'POST';
        const token = args.publish_token;
        const webhookTarget = new URL(hookPath, frontendUrl);
        if (token)
            webhookTarget.searchParams.set('token', token);
        process.stdout.write(`${chalk.yellow(chalk.bold(figures.arrowRight))} Registering webhook target: ${chalk.yellow(webhookTarget.href)}\n`);
        if (webhookTarget.hostname == 'localhost') {
            process.stderr.write(chalk.redBright(chalk.bold(figures.cross) + " Cannot register a localhost Site URL with Content Graph") + "\n");
            process.exitCode = 1;
            return;
        }
        const secureFetch = createHmacFetch(cgConfig.app_key, cgConfig.secret);
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
        if (currentHooks.some(x => x.request.url == webhookTarget.href)) {
            process.stdout.write("\n" + chalk.greenBright(chalk.bold(figures.tick) + " Webhook already registered, no action needed") + "\n");
            process.exitCode = 0;
            return;
        }
        function urlWithoutSearch(url) {
            const newURL = new URL(url.href);
            for (const key in newURL.searchParams.keys)
                newURL.searchParams.delete(key);
            return newURL;
        }
        const targetWithoutQuery = urlWithoutSearch(webhookTarget);
        await Promise.allSettled(currentHooks.map(hook => {
            const hookUrl = urlWithoutSearch(new URL(hook.request.url));
            if (hookUrl.href == targetWithoutQuery.href) {
                process.stdout.write(`${chalk.yellow(chalk.bold(figures.arrowRight))} Removing webhook with incorrect query parameters: ${chalk.yellow(hookUrl.href)}`);
                const hookId = hook.id;
                return secureFetch(new URL(`/api/webhooks/${hookId}?cache=false&t=${Date.now()}`, cgConfig.gateway), { method: "DELETE" }).then(response => response.ok);
            }
            return Promise.resolve(true);
        }));
        const registerResponse = await secureFetch(new URL(`/api/webhooks?cache=false&t=${Date.now()}`, cgConfig.gateway), {
            method: 'POST',
            body: JSON.stringify({
                request: {
                    url: webhookTarget.href,
                    method: verb
                }
            })
        });
        if (!registerResponse.ok) {
            process.stderr.write(chalk.redBright(`${chalk.bold(figures.cross)} Content Graph returned an error: HTTP ${response.status}: ${response.statusText}`) + "\n");
            if (args.verbose)
                console.error(chalk.redBright(await response.json()));
            process.exitCode = 1;
            return;
        }
        process.stdout.write("\n" + chalk.greenBright(`${chalk.bold(figures.tick)} ${webhookTarget.href} has been added as Webhook recipient to Content-Graph`) + "\n");
    },
    aliases: [],
    describe: "Adds a webhook to ContentGraph that invokes /api/content/publish on every publish in ContentGraph",
    builder: (args) => {
        const defaultToken = process.env.FRONTEND_PUBLISH_TOKEN || undefined;
        const hasDefaultToken = typeof (defaultToken) == 'string' && defaultToken.length > 0;
        args.positional('path', { type: "string", describe: "The frontend route to invoke to publish", default: "/api/content/publish", demandOption: false });
        args.positional('verb', { type: "string", describe: "The HTTP verb to be used when sending the webhook", default: "POST", demandOption: false });
        args.option("publish_token", { alias: "pt", description: "Publishing token", string: true, type: "string", demandOption: !hasDefaultToken, default: defaultToken });
        return args;
    }
};

const publishToVercelModule$1 = {
    command: ['unregister [path]'],
    handler: async (args) => {
        const cgConfig = getArgsConfig(args);
        const hookPath = args.path ?? '/';
        const token = args.publish_token;
        const token_id = args.token_id;
        const secureFetch = createHmacFetch(cgConfig.app_key, cgConfig.secret);
        if (typeof (token_id) == 'string' && token_id.length > 24) {
            process.stdout.write(`Removing Webhook with ID: ${token_id}\n`);
            const deleteResponse = await secureFetch(new URL(`/api/webhooks/${token_id}?t=${Date.now()}`, cgConfig.gateway), { method: "DELETE" });
            if (!deleteResponse.ok) {
                process.stderr.write(`!! Content Graph returned an error: HTTP ${deleteResponse.status}: ${deleteResponse.statusText}\n`);
                if (args.verbose)
                    console.error(await deleteResponse.json());
                process.exitCode = 1;
                return;
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
        const response = await secureFetch(new URL(`/api/webhooks?t=${Date.now()}`, cgConfig.gateway), {
            method: "GET"
        });
        if (!response.ok) {
            process.stderr.write(`!! Content Graph returned an error: HTTP ${response.status}: ${response.statusText}\n`);
            if (args.verbose)
                console.error(await response.json());
            process.exitCode = 1;
            return;
        }
        const currentHooks = (await response.json());
        const hooks = currentHooks.filter(x => x.request.url == webhookTarget.href);
        if (!hooks || hooks.length == 0) {
            process.stdout.write("Webhook not found, not removing anything\n");
            process.exitCode = 0;
            return;
        }
        await Promise.all(hooks.map(async (hook) => {
            const hookId = hook.id;
            process.stdout.write(`Removing Webhook with ID: ${hookId}\n`);
            const deleteResponse = await secureFetch(new URL(`/api/webhooks/${hookId}?t=${Date.now()}`, cgConfig.gateway), { method: "DELETE" });
            if (!deleteResponse.ok) {
                process.stderr.write(`!! Content Graph returned an error: HTTP ${deleteResponse.status}: ${deleteResponse.statusText}\n`);
                if (args.verbose)
                    console.error(await deleteResponse.json());
                process.exitCode = 1;
                return false;
            }
            process.stdout.write(`Removed WebHook with ID ${hookId} from ContentGraph\n`);
            return true;
        }));
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

const publishToVercelModule = {
    command: ['list'],
    handler: async (args) => {
        const cgConfig = getArgsConfig(args);
        const secureFetch = createHmacFetch(cgConfig.app_key, cgConfig.secret);
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

const DEFAULT_CONFIG_FILE = "src/site-config.ts";
const createSiteConfigModule = {
    command: ['site-config [file_path]'],
    handler: async (args) => {
        const cgConfig = getArgsConfig(args);
        const cgFetch = createHmacFetch(cgConfig.app_key, cgConfig.secret);
        const siteHost = getFrontendURL(cgConfig).host;
        const targetFile = args.file_path ?? DEFAULT_CONFIG_FILE;
        process.stdout.write(`${chalk.yellow(chalk.bold(figures.arrowRight))} Generating configuration file for website with domain: ${chalk.yellow(siteHost)}\n`);
        let response = await cgFetch(new URL('/content/v2', cgConfig.gateway), { method: "POST", body: JSON.stringify(siteQuery(siteHost)) });
        if (!response.ok) {
            process.stdout.write(chalk.redBright(chalk.bold(figures.cross) + " Failed loading website data"));
            process.exitCode = 1;
            return;
        }
        let responseBody = await response.json();
        if ((responseBody.data?.SiteDefinition?.items?.length ?? 0) < 1) {
            process.stdout.write(`${chalk.red(chalk.bold(figures.bullet))} Domain not found, falling back to match-all domain: ${chalk.yellow("*")}\n`);
            response = await cgFetch(new URL('/content/v2', cgConfig.gateway), { method: "POST", body: JSON.stringify(siteQuery("*")) });
            if (!response.ok) {
                process.stdout.write(chalk.redBright(chalk.bold(figures.cross) + " Failed loading website data"));
                process.exitCode = 1;
                return;
            }
            responseBody = await response.json();
        }
        if ((responseBody.data?.SiteDefinition?.items?.length ?? 0) < 1) {
            process.stdout.write(chalk.redBright(`${chalk.bold(figures.cross)} No website defintion found for host ${siteHost}`) + "\n");
            process.exitCode = 1;
            return;
        }
        if ((responseBody.data?.SiteDefinition?.items?.length ?? 0) > 1) {
            process.stdout.write(chalk.redBright(`${chalk.bold(figures.cross)} Multiple website defintion found for host ${siteHost}, please correct your CMS configuration`) + "\n");
            process.exitCode = 1;
            return;
        }
        process.stdout.write(`${chalk.yellow(chalk.bold(figures.arrowRight))} Loaded website data, generating TypeScript code.\n`);
        const siteDefinition = responseBody.data.SiteDefinition.items[0];
        siteDefinition.domains = (siteDefinition.domains ?? []).map((d) => {
            const def = {
                name: d.name,
                isPrimary: d.type == "Primary",
                isEdit: d.type == "Edit"
            };
            if (d.forLocale?.code)
                def.forLocale = d.forLocale?.code;
            return def;
        });
        siteDefinition.locales = (siteDefinition.locales ?? []).map((c) => {
            const loc = {
                code: c.code,
                slug: c.slug,
                graphLocale: c.code.replace("-", "_"),
                isDefault: c.isDefault == true
            };
            return loc;
        });
        const code = [
            '/**',
            ' * This file has been automatically generated, do not update manually',
            ' *',
            ' * Use yarn frontend-cli site-config to re-generate this file',
            ' */',
            'import { ChannelDefinition, type ChannelDefinitionData } from "@remkoj/optimizely-dxp-react"',
            '',
            `const generated_data : ChannelDefinitionData = ${JSON.stringify(siteDefinition)};`,
            '',
            `export const SiteConfig = new ChannelDefinition(generated_data, "${cgConfig.dxp_url}")`,
            'export default SiteConfig'
        ];
        const filePath = path__default.join(process.cwd(), targetFile);
        process.stdout.write(`${chalk.yellow(chalk.bold(figures.arrowRight))} Writing code to: ${chalk.yellow(filePath)}\n`);
        fs.writeFileSync(filePath, code.join("\n"));
        process.stdout.write(chalk.greenBright(`${chalk.bold(figures.tick)} Done`) + "\n");
    },
    builder: (args) => {
        args.positional("file_path", { description: "The target file path", string: true, type: "string", demandOption: false, default: DEFAULT_CONFIG_FILE });
        return args;
    },
    aliases: [],
    describe: "Generate a static site configuration file",
};
function siteQuery(site_url) {
    return {
        query: `query GetSiteConfig($domain: String!) {
            SiteDefinition (
                where: {
                    _or: [
                        { Hosts: { Name: { eq: $domain }} }
                    ]  
                }
            ) {
              items {
                    id: Id
                    name: Name,
                    domains: Hosts {
                        name: Name
                        type: Type
                        forLocale: Language {
                            code: Name
                        }
                    }
                    locales:Languages {
                        code:Name
                        slug:UrlSegment
                        isDefault:IsMasterLanguage
                    }
                    content: ContentRoots {
                        startPage: StartPage {
                            id:Id,
                            guidValue:GuidValue
                        }
                    }
                }
            }
        }`,
        variables: JSON.stringify({ domain: site_url })
    };
}

var commands = [publishToVercelModule$2, publishToVercelModule$1, publishToVercelModule, createSiteConfigModule];

var APP;
(function (APP) {
    APP["Script"] = "frontend-cli";
    APP["Version"] = "1.0.0";
})(APP || (APP = {}));
const app = createCliApp(APP.Script, APP.Version);
app.command(commands);
app.parse(process.argv.slice(2));
