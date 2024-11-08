import NextEnv from '@next/env'

export type Config = {
    key: string
    project: string
    token: string
    secret: string
    debug: boolean
}

export const nextEnvConfig = NextEnv.loadEnvConfig(process.cwd(), process.env.NODE_ENV == 'development', console)

export function readEnvConfig() : Partial<Config>
{
    return {
        key: process.env.OPTIMIZELY_FX_SDKKEY,
        project: process.env.OPTIMIZELY_FX_PROJECT,
        token: process.env.OPTIMIZELY_FX_PAT,
        secret: process.env.FLAGS_SECRET,
        debug: process.env.OPTIMIZELY_DEBUG == '1' || process.env.OPTIMIZELY_DEBUG?.toLowerCase() == 'true'
    }
}