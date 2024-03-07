import 'server-only'

// Base frameworks & components
import { type PropsWithChildren } from 'react'
import { OnPageEdit } from '@remkoj/optimizely-dxp-nextjs'
import { EnvTools } from '@remkoj/optimizely-one-nextjs/server'

// Import libraries & GraphQL
import { getContentById } from '@gql/functions'

// Import components & factory
import { setupFactory } from '@components/factory'
import RefreshNotice from '@components/refresh-notice'
import Header from '@components/layout/header'
import Footer from '@components/layout/footer'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

// Read staticly generated site definition and environment variables
import channel from '@/site-config'
const refreshDelay = EnvTools.readValueAsInt("OPTIMIZELY_CONTENTGRAPH_UPDATE_DELAY", 2000)

// Prepare the error component
const ErrorComponent = (props: { title: string, message: string }) => {
    return <div className='max-w-screen-2xl mx-auto my-16 bg-red-200 p-4 text-red-900 border-red-900 border-solid border rounded-lg text-lg'>
        <h1 className='font-bold text-2xl'><ExclamationTriangleIcon className='inline-block h-10 w-10 pr-2' />{ props.title }</h1>
        <p>{ props.message }</p>
    </div>
}

// Prepare the Edit Mode Layout for page type components
const PageLayout = (props: PropsWithChildren<{locale: string}>) => 
{
    return <>
        <Header locale={ props.locale } />
        { props.children }
        <Footer locale={ props.locale } />
    </>
}

export default OnPageEdit.createEditPageComponent(
    channel,
    setupFactory(),
    {
        errorNotice: ErrorComponent,
        refreshNotice: RefreshNotice,
        layout: PageLayout,

        // Casting is needed due to the locale being an enum in the generated types and a string in the generic query used by the loader
        loader: getContentById as OnPageEdit.Types.GetContentByIdMethod,
        refreshDelay
    }
)

export const fetchCache = "force-no-store"
export const revalidate = 0