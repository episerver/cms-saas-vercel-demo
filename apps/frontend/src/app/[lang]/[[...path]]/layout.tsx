import { getServerClient } from "@/lib/client"
import { CmsPage } from '@remkoj/optimizely-dxp-nextjs'
import channel from '@/site-config'
const client = getServerClient()

const { 
    generateMetadata, 
    PageLayout
} = CmsPage.createLayout(client, channel)
export { generateMetadata }
export default PageLayout