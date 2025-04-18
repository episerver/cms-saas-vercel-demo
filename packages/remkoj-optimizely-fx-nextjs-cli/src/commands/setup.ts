import { type CliModule } from '../types.js'
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

import { wellknownRoute, routeFile, flagsFile, sdkFile, optiDataFileConfigKey, dataFileHandler, reactHookFile, reactHookRscFile } from './_convention.js'
import { upsertAttributes, type Credentials } from '../operations/index.js'
import { engine } from "../templates/index.js"

import { createTemplateContext, withAdjustedFilePaths } from "./_shared.js"

export const SetupCommand : CliModule = {
    command: "setup",
    describe: "Run the initial setup of Feature Experimentation for Next.JS (App Router) on Vercel",
    async handler(args, opts) {
        process.stdout.write(`🚧 Running initial feature experimentation setup\n\n`)
        const { nosrc, path: cwd, envfile, key, project, token, tpl, force } = args
        const credentials: Credentials = { projectId: project, accessToken: token }

        if (force)
            process.stdout.write(`‼ Overwriting of existing files enabled\n`)

        if (!fs.existsSync(cwd))
            throw new Error(`The specified working directory does not exist! - ${cwd}`)

        if (!nosrc && !fs.existsSync(path.join(cwd, 'src')))
            throw new Error(`The source folder does not exist and 'nosrc' was not specified!`)

        const srcPath = path.join(cwd, nosrc ? '.' : 'src')

        process.stdout.write(`🏗 Retrieving flags from Optimizely Feature experimentation\n`)
        const context = await createTemplateContext(credentials, optiDataFileConfigKey, key, tpl)

        process.stdout.write(`🏗 Generating files in your Next.js project\n`)
        const flagsProvider = path.resolve(path.join(srcPath, flagsFile))
        if (force || !fs.existsSync(flagsProvider)) {
            process.stdout.write(" - Creating Next.JS flags provider\n")
            const flagsContent = await engine.render("flags", context)
            fs.writeFileSync(flagsProvider, flagsContent)
        } else {
            process.stdout.write(" - Next.JS flags provider already exists, use the `sync` command to bring it in sync with Optimizely FX\n")
        }

        const wellKnownApi = path.resolve(path.join(srcPath, wellknownRoute, routeFile))
        if (force || !fs.existsSync(wellKnownApi)) {
            process.stdout.write(" - Creating Vercel Flags well-known API route (/.well-known/vercel/flags)\n")
            const dirname = path.dirname(wellKnownApi)
            fs.mkdirSync(dirname, { recursive: true })
            const adjustedCtx = withAdjustedFilePaths(context, srcPath, wellKnownApi)
            const vercelRouteHandler = await engine.render("vercel", adjustedCtx)
            fs.writeFileSync(wellKnownApi, vercelRouteHandler)
        }
        
        const datafileApi = path.resolve(path.join(srcPath, dataFileHandler, routeFile))
        if (force || !fs.existsSync(datafileApi)) {
            process.stdout.write(" - Creating Optimizely Datafile webhook handler (/.well-known/optimizely/datafile)\n")
            const dirname = path.dirname(datafileApi)
            fs.mkdirSync(dirname, { recursive: true })
            const adjustedCtx = withAdjustedFilePaths(context, srcPath, datafileApi)
            const datafileApiTpl = await engine.render("datafile", adjustedCtx)
            fs.writeFileSync(datafileApi, datafileApiTpl)
        }

        const userContextProvider = path.resolve(path.join(srcPath, sdkFile))
        if (force || !fs.existsSync(userContextProvider)) {
            process.stdout.write(" - Creating Feature Experimentation User Context provider\n")
            const userContextProviderTpl = await engine.render("context", context)
            fs.writeFileSync(userContextProvider, userContextProviderTpl)
        }

        const reactHook = path.resolve(path.join(srcPath, reactHookFile))
        if (force || !fs.existsSync(reactHook)) {
            process.stdout.write(" - Creating React Client Side Hook\n")
            const reactHookTpl = await engine.render("useFlag.client", context)
            fs.writeFileSync(reactHook, reactHookTpl)
        }

        const reactHookRsc = path.resolve(path.join(srcPath, reactHookRscFile))
        if (force || !fs.existsSync(reactHookRsc)) {
            process.stdout.write(" - Creating React Client Side Hook, Server-Side logic\n")
            const reactHookRscTpl = await engine.render("useFlag.server", context)
            fs.writeFileSync(reactHookRsc, reactHookRscTpl)
        }

        process.stdout.write(`Updating ${ envfile }\n`)
        let envConfig = fs.existsSync(path.join(cwd, envfile)) ? fs.readFileSync(path.join(cwd, envfile)).toString() : ""
        let lineValue = ""
        if (lineValue = envConfig.match(new RegExp(`^OPTIMIZELY_FX_SDKKEY=(.+)$`, 'gm'))?.at(0)) {
            envConfig.replace(lineValue, `OPTIMIZELY_FX_SDKKEY=${ key }`)
        } else {
            process.stdout.write("Adding environment variable: OPTIMIZELY_FX_SDKKEY\n")
            envConfig += `\nOPTIMIZELY_FX_SDKKEY=${ key }`
        }
        if (lineValue = envConfig.match(new RegExp(`^OPTIMIZELY_FX_PROJECT=(.+)$`, 'gm'))?.at(0)) {
            envConfig.replace(lineValue, `OPTIMIZELY_FX_PROJECT=${ project }`)
        } else {
            process.stdout.write("Adding environment variable: OPTIMIZELY_FX_PROJECT\n")
            envConfig += `\nOPTIMIZELY_FX_PROJECT=${ project }`
        }
        if (lineValue = envConfig.match(new RegExp(`^OPTIMIZELY_FX_PAT=(.+)$`, 'gm'))?.at(0)) {
            envConfig.replace(lineValue, `OPTIMIZELY_FX_PAT=${ token }`)
        } else {
            process.stdout.write("Adding environment variable: OPTIMIZELY_FX_PAT\n")
            envConfig += `\nOPTIMIZELY_FX_PAT=${ token }`
        }
        if (!envConfig.match(new RegExp(`^FLAGS_SECRET=(.+)$`, 'gm'))?.at(0)) {
            process.stdout.write("Adding environment variable: FLAGS_SECRET\n")
            const randomToken = crypto.randomBytes(32).toString('base64url')
            envConfig += `\nFLAGS_SECRET=${ randomToken }`
        }
        fs.writeFileSync(path.join(cwd, envfile), envConfig)

        process.stdout.write(`Registering default attributes in Feature Experimentation\n`)
        await upsertAttributes([
            {
                key: "user-agent",
                description: "Browser"
            },{
                key: "platform",
                description: "Operating system"
            },{
                key: "geo-continent",
                description: "GeoIP: Continent"
            },{
                key: "geo-country",
                description: "GeoIP: Country"
            },{
                key: "geo-region",
                description: "GeoIP: Region"
            },{
                key: "geo-city",
                description: "GeoIP: City"
            },{
                key: "geo-timezone",
                description: "GeoIP: Timezone"
            }
        ], { accessToken: token, projectId: project })

        process.stdout.write(`\n🚀 Done! You can now add flags by:
   - Using 'yarn opti-fx pull' to download your feature configuration`)
    }
}

export default SetupCommand
