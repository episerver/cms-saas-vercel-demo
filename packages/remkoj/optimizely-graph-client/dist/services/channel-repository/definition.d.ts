import type { ChannelDefinitionData, ChannelContent, ChannelDomain, ChannelLocale } from './types.js';
export declare class ChannelDefinition implements Readonly<ChannelDefinitionData> {
    readonly id: string;
    readonly name: string;
    readonly domains: ChannelDomain[];
    readonly locales: ChannelLocale[];
    readonly content: ChannelContent;
    get isDev(): boolean;
    get defaultLocale(): string;
    get defaultDomain(): string;
    protected dxp_url: string;
    protected get editDomain(): string | undefined;
    constructor(initialData: ChannelDefinitionData, dxp_url: string);
    getPrimaryDomain(): URL;
    getEditDomain(): URL;
    getCmsUrl(): string;
    /**
     * Retieve the default locale specification, defined as the locale marked
     * as "primary" else the first locale of the channel. When the channel
     * has no locales it returns undefined.
     *
     * @returns     The default locale or undefined if the channel has no locales
     */
    getDefaultLocale(): ChannelLocale | undefined;
    /**
     * Ensure that the locale is part of the current channel configuration, by
     * taking an ISO Language Code and validating it's part of the channel.
     * When the language is not part of the channel, this method will respond with
     * the default ISO Language Code for the channel.
     *
     * @param       code    The ISO Language Code to validate
     * @returns     An ISO Language code that exists on this channel
     */
    resolveLocale(code?: string): string;
    /**
     * Ensure that the locale is part of the current channel configuration, by
     * taking an ISO Language Code and validating it's part of the channel. Then
     * take the slug for that locale.
     *
     * When the language is not part of the channel, this method will fall back
     *
     * @param       code    The ISO Language Code to validate
     * @returns     The resolved slug
     */
    resolveSlug(code?: string): string;
    /**
     * Retrieve a list of all locale slugs configured for this channel
     *
     * @returns     The list of slugs
     */
    getSlugs(): string[];
    /**
     * Resolve the provided slug to an actual ISO locale
     *
     * @param       slug        The slug as read from the URL
     * @returns     The ISO locale, undefined if the slug isn't configured
     */
    slugToLocale(slug: string): string | undefined;
    /**
     * Resolve the provided slug to a locale as understood by Optimizely
     * Content Graph
     *
     * @param       slug        The slug as read from the URL
     * @returns     The locale for Content Graph, undefined if the slug
     *              isn't configured
     */
    slugToGraphLocale(slug: string): string | undefined;
    /**
     * Resolve the provided ISO locale code to an URL slug
     *
     * @param       code        The locale ISO code
     * @returns     The slug to be used in URLs, undefined if the locale isn't
     *              configured
     */
    localeToSlug(code: string): string | undefined;
    /**
     * Resolve the provided locale code to a locale as understood by Optimizely
     * Content Graph
     *
     * @param       code        The locale ISO code
     * @returns     The locale for Content Graph, undefined if the locale isn't
     *              configured
     */
    localeToGraphLocale(code: string): string | undefined;
}
export default ChannelDefinition;
