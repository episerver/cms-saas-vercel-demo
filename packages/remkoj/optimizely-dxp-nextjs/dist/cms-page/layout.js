import { Utils } from "@remkoj/optimizely-dxp-react";
import { getMetaDataByPath as getMetaDataByPathBase } from './data';
import { slugToLocale, slugToGraphLocale } from "./utils";
import { getServerClient } from "../client";
const defaultCreateLayoutOptions = {
    defaultLocale: "en",
    getMetaDataByPath: getMetaDataByPathBase,
    client: getServerClient
};
export function createLayout(channel, options) {
    const { defaultLocale, getMetaDataByPath, client: clientFactory } = {
        ...defaultCreateLayoutOptions,
        ...{ defaultLocale: channel.defaultLocale },
        ...options
    };
    const DEBUG = process.env.DXP_DEBUG == '1';
    const pageLayoutDefinition = {
        /**
         * Make sure that there's a sane default for the title, canonical URL
         * and the language alternatives
         *
         * @param       props   The layout properties
         * @returns     The metadata that must be merged into the defaults
         */
        generateMetadata: async ({ params }, resolving) => {
            const locale = slugToLocale(channel, params?.lang ?? '', defaultLocale);
            const relativePath = `/${params.lang}${params.path ? '/' + params.path.join('/') : ''}`;
            if (DEBUG)
                console.log(`[CmsPageLayout] Generating metadata for: ${relativePath}`);
            const variables = {
                path: relativePath,
                locale: slugToGraphLocale(channel, params.lang ?? '', defaultLocale)
            };
            const client = clientFactory();
            const response = await getMetaDataByPath(client, variables).catch(e => {
                console.error(`[CmsPageLayout] Metadata error:`, e);
                return undefined;
            });
            const metadata = (response?.getGenericMetaData?.items ?? [])[0];
            if (!metadata) {
                if (DEBUG)
                    console.log(`[CmsPageLayout] Unable to locate metadata for: ${relativePath}`);
                return {};
            }
            const base = await resolving;
            const title = base?.title?.template ? {
                template: base?.title?.template,
                default: metadata.name
            } : metadata.name;
            let pageMetadata = {
                title,
                alternates: {
                    canonical: metadata.canonical,
                    languages: {}
                },
                openGraph: {
                    ...base.openGraph,
                    title,
                    url: metadata.canonical,
                    alternateLocale: []
                }
            };
            // Add alternative URLs
            const alternates = (metadata?.alternatives || []).filter(Utils.isNotNullOrUndefined).filter(x => x.locale != locale);
            alternates.forEach(alt => {
                if (pageMetadata.openGraph && Array.isArray(pageMetadata.openGraph.alternateLocale)) {
                    pageMetadata.openGraph.alternateLocale.push(alt.locale);
                }
                if (pageMetadata.alternates && pageMetadata.alternates.languages) {
                    //@ts-expect-error We need the locale to be dynamic, based upon the locales provided by the CMS
                    pageMetadata.alternates.languages[alt.locale] = alt.href;
                }
            });
            return pageMetadata;
        },
        PageLayout: ({ children }) => children
    };
    return pageLayoutDefinition;
}
export default createLayout;
