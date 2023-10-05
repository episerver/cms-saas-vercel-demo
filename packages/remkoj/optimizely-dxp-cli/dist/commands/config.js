import { getArgsConfig, getFrontendURL } from '../app.js';
import { createSecureFetch } from '../content-graph-client/index.js';
import fs from 'node:fs';
import path from 'node:path';
import chalk from 'chalk';
import figures from 'figures';
const DEFAULT_CONFIG_FILE = "src/site-config.ts";
export const createSiteConfigModule = {
    command: ['site-config [file_path]'],
    handler: async (args) => {
        const cgConfig = getArgsConfig(args);
        const cgFetch = createSecureFetch(cgConfig.app_key, cgConfig.secret);
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
        const filePath = path.join(process.cwd(), targetFile);
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
export default createSiteConfigModule;
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
