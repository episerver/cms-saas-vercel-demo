import "server-only";
import { AuthMode } from "@remkoj/optimizely-graph-client";
import { createClient } from "@remkoj/optimizely-cms-nextjs/rsc";
import { createPage } from "@remkoj/optimizely-cms-nextjs/page";
import { draftMode } from "next/headers";
import { factory } from "@/components/factory";
import channel from "@/channel";

/**
 * Create the page component and Next.js functions to support static site generation,
 * this ensures that the site has the highest possbible performance. This example uses
 * a two-query approach in rendering any route:
 * 1. Identify the content and type to render by path
 * 2. Use the fragment or query from the component to fetch the data by ID
 */
const {
    generateMetadata,
    generateStaticParams,
    CmsPage: Page,
} = createPage(factory, {
    /**
     * Configure the Web Application in the CMS that is bound to this installation
     */
    channel,

    /**
     * The factory to use to create the GraphQL Client to fetch data from Optimizely
     * CMS. As this page is never used for preview, we're ignoring the first parameter.
     * 
     * @returns     The Optimizely Graph Client
     */
    client: async (_, scope) => {
        const client = createClient()
        if (scope === 'request' && (await draftMode()).isEnabled) {
            client.updateAuthentication(AuthMode.HMAC)
            client.enablePreview()
        }
        return client
    }
});

// Configure the Next.JS route handling for the pages
export const dynamic = "error"; // Throw an error when the [[...path]] route becomes dynamic, as this will seriously hurt site performance
export const dynamicParams = true; // Allow new pages to be resolved without rebuilding the site
export const revalidate = false; // Keep the cache untill manually revalidated using the Webhook, i.e. use SSG/ISR

// Export page & helper methods
export { generateMetadata, generateStaticParams };
export default Page