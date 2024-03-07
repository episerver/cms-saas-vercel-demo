import siteConfig from '@/site-config'

/**
 * @deprecated  Use '@/site-config' directly, this function will be removed in
 *              a future commit
 * @see         import('@/site-config').slugToLocale
 */
export function slugToLocale<T extends string | undefined | null>(slug: string, defaultValue: T) : string | T
{
    return siteConfig.slugToLocale(slug) ?? defaultValue
}

/**
 * @deprecated  Use '@/site-config' directly, this function will be removed in
 *              a future commit
 * @see         import('@/site-config').localeToSlug
 */
export function localeToSlug<T extends string | undefined | null>(locale: string, defaultValue: T) : string | T
{
    return siteConfig.localeToSlug(locale) ?? defaultValue
}

/**
 * @deprecated  Use '@/site-config' directly, this function will be removed in
 *              a future commit
 * @see         import('@/site-config').localeToGraphLocale
 */
export function localeToContentGraphLocale(locale: string) : string
{
    return siteConfig.localeToGraphLocale(locale) ?? locale.replaceAll('-', '_')
}

/**
 * @deprecated  Use '@/site-config' directly, this function will be removed in
 *              a future commit
 * @see         import('@/site-config').resolveLocale
 */
export function resolveLocale(requestedLocale?: string) : string
{
    return siteConfig.resolveLocale(requestedLocale)
}

/**
 * @deprecated  Use '@/site-config' directly, this function will be removed in
 *              a future commit
 * @see         import('@/site-config').defaultLocale
 */
export function getFallbackLocale() 
{
    return siteConfig.defaultLocale
}