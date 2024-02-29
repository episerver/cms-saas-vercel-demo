// Extract the path as string array from a given URL
export function urlToPath(baseUrl, language) {
    let slugs = baseUrl.pathname.split('/').filter(s => s);
    if (slugs[0] == language)
        slugs.shift();
    return slugs;
}
export function localeToGraphLocale(channel, locale) {
    return channel.localeToGraphLocale(locale) ?? locale.replaceAll("-", "_");
}
export function slugToLocale(channel, slug, defaultValue) {
    const route = channel.locales.filter(x => x.slug == slug)[0];
    return route?.code || defaultValue;
}
export function slugToGraphLocale(channel, slug, defaultValue) {
    const route = channel.locales.filter(x => x.slug == slug)[0];
    return route?.graphLocale || defaultValue?.replaceAll("-", "_");
}
