import "server-only";
import { createClient } from "@remkoj/optimizely-graph-client";
import { createPage } from "@remkoj/optimizely-cms-nextjs/page";
import { getContentByPath } from "@gql/functions";
import { factory } from "@components/factory";

// Create the page components and functions
const {
    generateMetadata,
    generateStaticParams,
    CmsPage: Page,
} = createPage(factory, {
    /**
     * Inject the "getContentByPath" master query that will be used to load all
     * content for the page in one request. When omitted, the default implementation
     * will revert to many requests in order to load the content.
     */
    getContentByPath: getContentByPath,

    /**
     * The demo site is single language, so we're always defaulting to English.
     * For a multi-lingual implementation, you may omit this parameters when you
     * have both a [lang] URL segment and define the channel. Otherwise implement
     * your own synchronous logic to get the initial locale based on the parameters.
     * 
     * @returns     The initial locale
     */
    paramsToLocale: () => "en",

    /**
     * The factory to use to create the GraphQL Client to fetch data from Optimizely
     * CMS.
     * 
     * @returns     The Optimizely Graph Client
     */
    client: () => createClient(undefined, undefined, {
        nextJsFetchDirectives: true,
        cache: true,
        queryCache: true,
    })
});

// Configure the Next.JS route handling for the pages
export const dynamic = "error"; // Throw an error when the [[...path]] route becomes dynamic, as this will seriously hurt site performance
export const dynamicParams = true; // Allow new pages to be resolved without rebuilding the site
export const revalidate = false; // Keep the cache untill manually revalidated using the Webhook

// Export page & helper methods
export { generateMetadata, generateStaticParams };
export default Page