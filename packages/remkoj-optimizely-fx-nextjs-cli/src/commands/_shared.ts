import path from 'node:path'

import { flagsFile, sdkFile } from './_convention.js'
import { getFlags, type Credentials, type OptiFxFlag } from '../operations/index.js'
import { type ProjectFileTemplateContext, defintionsToType, defintionsToDefault } from "../templates/base.js"


export async function createTemplateContext(credentials: Credentials, optiDataFileConfigKey: string, key: string, tpl: boolean = false) : Promise<ProjectFileTemplateContext> {
    const fxFlags = await getFlags(credentials)
    return createTemplateContextFromFlags(fxFlags, credentials.projectId, optiDataFileConfigKey, key, tpl)
}

export function createTemplateContextFromFlags(fxFlags: ReadonlyArray<OptiFxFlag>, project: string, optiDataFileConfigKey: string, key: string, tpl: boolean = false) : ProjectFileTemplateContext {
    const flags = fxFlags.map(flag => {
        const { key: flagKey, name: flagName, description: flagDescription, project_id: flagProject } = flag
        const flagType = defintionsToType(flag.variable_definitions)
        const flagDefaults = defintionsToDefault(flag.variable_definitions)
        return {
            projectId: tpl ? 'your-project-id' : flagProject.toString(),
            varName: flagKey.split('-').map((p,i) => i > 0 ? p[0].toUpperCase()+p.substring(1) : p).join(''),
            key: flagKey,
            name: flagName,
            description: flagDescription,
            type: flagType,
            defaults: flagDefaults
        }
    })
    
    const context : ProjectFileTemplateContext = {
        files: {
            sdkFile: './'+path.basename(sdkFile, '.ts'),
            flagsFile: './'+path.basename(flagsFile, '.ts')
        },
        projectId: tpl ? 'your-project-id' : project,
        sdkKey: key,
        datafileConfigKey: optiDataFileConfigKey,
        flags,
        isTemplate: tpl
    }
    Object.freeze(context)
    return context
}

export function withAdjustedFilePaths(ctx: ProjectFileTemplateContext, basePath: string, targetPath: string) : ProjectFileTemplateContext
{
    const newCtx = { 
        ...ctx, 
        files: Object.assign({}, ctx.files)
    }
    for (const fileHandle in ctx.files) {
        const fromPath = path.dirname(targetPath)
        const toPath = path.resolve(path.join(basePath, ctx.files[fileHandle]))
        const prefix = path.relative(fromPath, toPath)
        newCtx.files[fileHandle] = path.sep == "\\" ? prefix.replaceAll("\\", "/") : prefix
    }
    Object.freeze(newCtx)
    return newCtx
}