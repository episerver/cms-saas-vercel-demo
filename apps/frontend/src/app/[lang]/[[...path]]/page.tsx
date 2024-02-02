import "server-only";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { getContentByPath } from "@gql/functions";
import { getServerClient } from "@/lib/client";
import getFactory from "@components/factory";
import channel from "@/site-config";
import { CmsPage } from "@remkoj/optimizely-dxp-nextjs";
const client = getServerClient();
const factory = getFactory();

const DEBUG = process.env.NODE_ENV == "development";

// Add Apollo Client messages only in a dev environment
if (DEBUG) {
  loadDevMessages();
  loadErrorMessages();
}

// Configure the Next.JS route handling for the pages
export const dynamic = "force-static"; // Make sure we cache pages
export const dynamicParams = true; // Allow new pages to be resolved without rebuilding the site
export const revalidate = false; // Keep the cache untill manually revalidated using the Webhook
export const fetchCache = "default-cache"; // Cache fetch results by default

// Create the page components and functions
const {
  generateMetadata,
  generateStaticParams,
  CmsPage: Page,
} = CmsPage.createPage(client, factory, channel, {
  getContentByPath: getContentByPath as CmsPage.GetContentByPathMethod,
});

export { generateMetadata, generateStaticParams };
export default Page;
