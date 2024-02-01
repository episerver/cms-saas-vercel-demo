import { CmsPage, getServerClient } from '@remkoj/optimizely-dxp-nextjs'
import channel from '@/site-config'

const { 
    generateMetadata, 
    PageLayout
} = CmsPage.createLayout(channel, {
    client: getServerClient
})
export { generateMetadata }
export default PageLayout