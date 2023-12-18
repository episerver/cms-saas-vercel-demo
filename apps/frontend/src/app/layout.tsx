import type { Metadata } from 'next/types'
import { Inter } from 'next/font/google'
import getCurrentChannel from '@/lib/current-channel'
import * as EnvTools from '@/lib/env'

// Client side context
import GlobalProviders from '@components/providers'

// Client side trackers
import OdpScript from '@components/integrations/server/optimizely-data-patform'
import RecsScript from '@components/integrations/server/optimizely-content-recs'
import WebExScript from '@components/integrations/server/optimizely-web-experimentation'
import GoogleAnalytics from '@/components/integrations/server/google-analytics'
import { SpeedInsights } from "@vercel/speed-insights/next"

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata() : Promise<Metadata> {
    const channel = await getCurrentChannel()
    return {
        metadataBase: channel.getPrimaryDomain(),
        title: {
            default: `${ channel.name } - An Optimizely Demo Company`,
            template: `%s | ${ channel.name } - An Optimizely Demo Company`
        },
        openGraph: {
            title: {
                default: `${ channel.name } - An Optimizely Demo Company`,
                template: `%s | ${ channel.name } - An Optimizely Demo Company`
            },
            siteName: channel.name,
            images: [{
                url: "/assets/logo.png"
            }]
        },
        description: 'A Demo showingcasing the power of combining the Optimizely DXP with Next.JS',
        icons: {
            apple: { sizes: "180x180", url: "/apple-touch-icon.png" },
            icon: [
                { type: "image/png", sizes: "32x32", url: "/favicon-32x32.png"},
                { type: "image/png", sizes: "16x16", url: "/favicon-16x16.png"}
            ]
        },
        manifest: "/site.webmanifest"
    }
}

export type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) 
{
    const odp_id = process.env.OPTIMIZELY_DATAPLATFORM_ID ?? undefined
    const crecs_client = process.env.OPTIMIZELY_CONTENTRECS_CLIENT ?? undefined
    const crecs_delivery = EnvTools.readValueAsInt("OPTIMIZELY_CONTENTRECS_DELIVERY")
    const exp_id = process.env.OPTIMIZELY_WEB_EXPERIMENTATION_PROJECT ?? undefined
    const ga_id = process.env.GA_TRACKING_ID ?? undefined

    return <html>
        <head>
            { odp_id && <OdpScript trackerId={ odp_id } /> }
            { exp_id && <WebExScript projectId={ exp_id } /> }
        </head>
        <body className={ `${ inter.className } bg-white text-default` }>
            <GlobalProviders>
                { children }
            </GlobalProviders>
            { crecs_client && crecs_delivery && <RecsScript client={ crecs_client } delivery={ crecs_delivery } /> }
            { ga_id && <GoogleAnalytics measurementId={ ga_id } />}
            <SpeedInsights />
        </body>
    </html>
}
