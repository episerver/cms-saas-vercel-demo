import type { CliModule, OptiCmsArgs } from '../types.js'
import fs from 'node:fs'
import path from 'node:path'
import { getFlags as getAllFlags } from '../operations/index.js'
import { engine } from "../templates/index.js"
import { flagsFile, optiDataFileConfigKey } from './_convention.js'
import { createTemplateContextFromFlags } from './_shared.js'
import FlagsTypeScriptFile, { type FlagDefs } from './_typescript.js'
import type { Argv } from 'yargs'

export type PullCommandArgs = { excludeByPrefix?: string }
export type PullCommandType = CliModule<PullCommandArgs>

export const PullCommand: PullCommandType = {
    command: "pull",
    describe: "Update the flags.ts from FX; without removing flags or variables so the site won't break",
    builder: (yargs) => {
        const newYargs : Argv<OptiCmsArgs<PullCommandArgs>> = yargs;
        newYargs.option("excludeByPrefix", { alias: "x", string: true, type: "string", demandOption: false, default: undefined })
        return newYargs
    },
    async handler(args, opts) {
        const { path: cwd, nosrc, project: projectId, token: accessToken, key, tpl, force, excludeByPrefix } = args

        // Read the existing flags, so these will not be overwritten
        const projFlagsFile = path.normalize(path.join(cwd, nosrc ? '' : 'src', flagsFile))
        let existingFlags : FlagDefs = {}
        if (fs.existsSync(projFlagsFile)) {
            process.stdout.write(`Analyzing your existing code-first flags in: ${ projFlagsFile }\n`)
            const processor = new FlagsTypeScriptFile(projFlagsFile, cwd)
            existingFlags = processor.getExportedFlags()
            for (const flagKey in existingFlags) {
                process.stdout.write(` - ${ flagKey }: ${ existingFlags[flagKey].name }\n`)
            }
        }

        process.stdout.write(`\nFetching flags from Optimizely Feature Experimentation\n`)
        const flagsListing = (await getAllFlags({ accessToken, projectId })).filter(x => {
            if (excludeByPrefix && excludeByPrefix.length > 0)
                return !x.key.toLowerCase().startsWith(excludeByPrefix.toLowerCase())
            return true;
        })
        for (const flag of flagsListing) {
            process.stdout.write(` - ${ flag.key }: ${ flag.name }\n`)
        }

        process.stdout.write(`\nMerging Optimizely FX Feature flags with local configuration\n`)
        const missingFlags : string[] = []
        // Add variables only defined in code
        flagsListing.forEach((flag, idx) => {
            const localFlag = existingFlags[flag.key]
            if (!localFlag) return

            for (const variable in localFlag.variable_definitions) {
                const localType = localFlag.variable_definitions[variable].type
                if (flag.variable_definitions[variable]) {
                    if (flag.variable_definitions[variable].type != localType && !force) {
                        process.stderr.write(`\n\n⚠ The variable type for ${ flag.key }.${ variable } has changed from ${ localType } to ${ flag.variable_definitions[variable].type }, this might break your application. Use --force to change the type\n`)
                        process.exit(1)
                    }
                } else {
                    if (force) {
                        flag.variable_definitions[variable] = localFlag.variable_definitions[variable]
                        process.stdout.write(` - You are using the flag variable ${ flag.key }.${ variable }, which is not (no longer) defined in Optimizely Feature Experimentation!\n`)
                    } else {
                        process.stderr.write(`\n\n⚠ The variable ${ flag.key }.${ variable } was removed, this might break your application. Use --force to ignore\n`)
                        process.exit(1)
                    }
                }
            }
        })

        // Add features only defined in code
        Object.getOwnPropertyNames(existingFlags).filter(x => !flagsListing.some(y => y.key == x)).forEach(existingKey => {
            if (!force) {
                process.stdout.write(` - Retaining the flag ${ existingKey }, which is not (or no longer) defined in Optimizely Feature Experimentation!\n`)
                flagsListing.push({
                    project_id: parseInt(projectId),
                    ...existingFlags[existingKey]
                })
                missingFlags.push(existingKey)
            } else {
                process.stdout.write(` - Removing flag ${ existingKey }, which is not (or no longer) defined in Optimizely Feature Experimentation!\n`)
                missingFlags.push(existingKey)
            }
        })

        const context = createTemplateContextFromFlags(flagsListing, projectId, optiDataFileConfigKey, key, tpl)
        
        process.stdout.write("\nWriting Next.JS flags provider")
        if (missingFlags.length > 0 && !force)
            process.stdout.write(` (while retaining the flags: ${ missingFlags.join(', ') })`)
        process.stdout.write("\n")
        const flagsContent = await engine.render("flags", context)
        fs.writeFileSync(projFlagsFile, flagsContent)
    }
}

export default PullCommand
