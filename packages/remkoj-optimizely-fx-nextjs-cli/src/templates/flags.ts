import { type ProjectFileTemplate } from "./base.js";
import path from "node:path";

export const FlagsFile : ProjectFileTemplate = {
    prefix({ files: { sdkFile }})
    {
        return `// Auto generated flags.ts from Optimizely Feature Experimentation
        'use server'
        import { unstable_flag as flag } from '@vercel/flags/next';
        import { type OptimizelyDecision } from '@optimizely/optimizely-sdk/lite';
        import { getUserContext } from './${ path.basename(sdkFile, '.ts') }';
        
        type OptimizelyFlag<T extends { [variableKey: string]: unknown }> = {
          _enabled: boolean
        } & T
        
        type TypedOptimizelyDecision<T extends { [variableKey: string]: unknown }> = Omit<OptimizelyDecision, 'variables'> & {
          variables: T
        }
        
        `
    }
}