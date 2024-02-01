import 'server-only'
import { getServerClient, CmsPage } from '@remkoj/optimizely-dxp-nextjs'
import { getContentByPath } from '@gql/functions'
import getFactory from '@components/factory'
import channel from '@/site-config'

// Create the page components and functions
const factory = getFactory()
const {
    generateMetadata,
    generateStaticParams,
    CmsPage: Page
} = CmsPage.createPage(
    factory, 
    channel, 
    { 
        getContentByPath: getContentByPath as CmsPage.GetContentByPathMethod, 
        client: getServerClient
    }
)

// Configure the Next.JS route handling for the pages
export const dynamic = 'force-static'       // Make sure we cache pages
export const dynamicParams = true           // Allow new pages to be resolved without rebuilding the site
export const revalidate = false             // Keep the cache untill manually revalidated using the Webhook
export const fetchCache = 'default-cache'   // Cache fetch results by default

// Export page & helper methods
export { generateMetadata, generateStaticParams }
export default Page