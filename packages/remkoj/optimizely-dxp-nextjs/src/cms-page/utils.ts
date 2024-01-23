import type { ChannelDefinition } from "@remkoj/optimizely-dxp-react"

// Extract the path as string array from a given URL
export function urlToPath(baseUrl: URL, language: string) : string[] {
    let slugs : string[] = baseUrl.pathname.split('/').filter(s => s)
    if (slugs[0] == language)
        slugs.shift()
    return slugs
}

export function localeToGraphLocale(channel: ChannelDefinition, locale: string) : string
{
    const route = channel.locales.filter(x => x.code == locale)[0]
    return route ? route.graphLocale : locale.replaceAll("-","_")
}

export function slugToLocale<T extends string | undefined | null>(channel: ChannelDefinition, slug: string, defaultValue: T) : string | T
{
    const route = channel.locales.filter(x => x.slug == slug)[0]
    return route?.code || defaultValue
}

export function slugToGraphLocale<T extends string | undefined | null>(channel: ChannelDefinition, slug: string, defaultValue: T) : string | T
{
    const route = channel.locales.filter(x => x.slug == slug)[0]
    return route?.graphLocale || defaultValue?.replaceAll("-","_") as T
}