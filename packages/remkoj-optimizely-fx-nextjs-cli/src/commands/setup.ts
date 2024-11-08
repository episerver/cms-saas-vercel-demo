import { type CliModule } from '../types.js'
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'

import { wellknownRoute, routeFile, flagsFile, optiFlags } from './_convention.js'

export const SetupCommand : CliModule = {
    command: "setup",
    describe: "Run the initial setup of Feature Experimentation for Next.JS (App Router) on Vercel",
    async handler(args, opts) {
        process.stdout.write(`🚧 Running initial feature experimentation setup\n\n`)
        const { nosrc, path: cwd, envfile, key, project, token } = args

        if (!fs.existsSync(cwd))
            throw new Error(`The specified working directory does not exist! - ${cwd}`)

        if (!nosrc && !fs.existsSync(path.join(cwd, 'src')))
            throw new Error(`The source folder does not exist and 'nosrc' was not specified!`)

        const wellKnownApi = path.resolve(path.join(cwd, nosrc ? '.' : 'src', wellknownRoute, routeFile))
        if (!fs.existsSync(wellKnownApi)) {
            process.stdout.write("Creating Vercel well-known API route\n")
            const dirname = path.dirname(wellKnownApi)
            fs.mkdirSync(dirname, { recursive: true })
            fs.writeFileSync(wellKnownApi, routeHandlerTpl)
        }

        const flagsProvider = path.resolve(path.join(cwd, nosrc ? '.' : 'src', flagsFile))
        if (!fs.existsSync(flagsProvider)) {
            process.stdout.write("Creating Next.JS flags provider\n")
            fs.writeFileSync(flagsProvider, flagsProviderTpl)
        }

        const optiFlagsFile = path.resolve(path.join(cwd, optiFlags))
        if (!fs.existsSync(optiFlagsFile)) {
            process.stdout.write("Creating Optimizely FX Flags file\n")
            fs.writeFileSync(optiFlagsFile, "{}")
        }

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
        process.stdout.write(`Updating ${ envfile }\n`)
        fs.writeFileSync(path.join(cwd, envfile), envConfig)

        process.stdout.write(`\n🚀 Done!\n`)

    }
}

export default SetupCommand

const routeHandlerTpl = `import { NextResponse, type NextRequest } from 'next/server';
import { verifyAccess, type ApiData } from '@vercel/flags';
import { unstable_getProviderData as getProviderData } from "@vercel/flags/next";
import * as flags from '../../../../flags'; 

export async function GET(request: NextRequest) {
    const access = await verifyAccess(request.headers.get('Authorization'));
    if (!access) return NextResponse.json(null, { status: 401 });
    return NextResponse.json<ApiData>(getProviderData(flags));
}`

const flagsProviderTpl = `// Auto generated flags.ts from Optimizely Feature Experimentation
import { unstable_flag as flag } from '@vercel/flags/next';
import { get } from '@vercel/edge-config'
import { type OptimizelyDecision } from '@optimizely/optimizely-sdk/lite'

type TypedOptimizelyDecision<T extends { [variableKey: string]: unknown }> = Omit<OptimizelyDecision, 'variables' | 'userContext'> & {
  variables: T
}`