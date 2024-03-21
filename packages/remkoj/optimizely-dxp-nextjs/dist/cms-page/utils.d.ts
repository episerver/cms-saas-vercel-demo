import type { ChannelDefinition } from "@remkoj/optimizely-graph-client";
export declare function urlToPath(baseUrl: URL, language: string): string[];
export declare function localeToGraphLocale(channel: ChannelDefinition, locale: string): string;
export declare function slugToLocale<T extends string | undefined | null>(channel: ChannelDefinition, slug: string, defaultValue: T): string | T;
export declare function slugToGraphLocale<T extends string | undefined | null>(channel: ChannelDefinition, slug: string, defaultValue: T): string | T;
