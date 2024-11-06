import 'server-only'

export type LayoutConfig = {
    logoPath: string
    logoDark?: string
}

export function getLayoutConfig() : LayoutConfig
{
    return {
        logoPath: '/assets/moseybank-logo.svg',
        logoDark: undefined
    }
}