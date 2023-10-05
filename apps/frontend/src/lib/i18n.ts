import siteConfig from '@/site-config'

export function slugToLocale<T extends string | undefined | null>(slug: string, defaultValue: T) : string | T
{
    const route = siteConfig.locales.filter(x => x.slug == slug)[0]
    return route?.code || defaultValue
}

export function localeToSlug<T extends string | undefined | null>(locale: string, defaultValue: T) : string | T
{
    const route = siteConfig.locales.filter(x => x.code == locale)[0]
    return route?.slug || defaultValue
}

export function localeToContentGraphLocale(locale: string) : string
{
    const route = siteConfig.locales.filter(x => x.code == locale)[0]
    return route ? route.graphLocale : locale.replaceAll("-","_") // ContentGraph can't handle dash, so we convert to an underscore
}

export function resolveLocale(requestedLocale?: string) : string
{
    return requestedLocale ?? siteConfig.defaultLocale
}

export function getFallbackLocale() 
{
    return siteConfig.defaultLocale
}