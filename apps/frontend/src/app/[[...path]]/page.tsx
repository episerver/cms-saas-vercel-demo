import "server-only";
import { CmsPage } from "@remkoj/optimizely-cms-nextjs";
import { getContentByPath } from "@gql/functions";
import getFactory from "@components/factory";
import { createClient } from "@remkoj/optimizely-cms-nextjs";

// Create the page components and functions
const {
    generateMetadata,
    generateStaticParams,
    CmsPage: Page,
} = CmsPage.createPage(getFactory(), {
    getContentByPath: getContentByPath as CmsPage.GetContentByPathMethod,
    client: () => {
        const pageClient = createClient()
        pageClient.updateFlags({
            queryCache: false, // Visual Builder requires recursive queries, which are disabled by default when the query cache is enabled
        }, false)
        return pageClient
    }
});

// Configure the Next.JS route handling for the pages
export const dynamic = "auto"; // Cache by default, but allow Suspense to be used to make parts dynamic
export const dynamicParams = true; // Allow new pages to be resolved without rebuilding the site
export const revalidate = false; // Keep the cache untill manually revalidated using the Webhook
export const fetchCache = "default-cache"; // Cache fetch results by default

// Export page & helper methods
export { generateMetadata, generateStaticParams };
export default Page