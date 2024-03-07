import type { Metadata } from 'next/types'
import { Inter } from 'next/font/google'
import { EnvTools } from '@remkoj/optimizely-one-nextjs/server'
import channel from '@/site-config'

// Client side context
import GlobalProviders from '@components/providers'

// Client side trackers
import { Scripts } from '@remkoj/optimizely-one-nextjs/server'
import GoogleAnalytics from '@/components/integrations/google-analytics'
import { SpeedInsights } from "@vercel/speed-insights/next"

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata() : Promise<Metadata> {
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
    const ga_id = EnvTools.readValue("GA_TRACKING_ID")

    return <html>
        <head>
            <Scripts.Header />
        </head>
        <body className={ `${ inter.className } bg-white text-default` }>
            <GlobalProviders>
                { children }
            </GlobalProviders>
            <Scripts.Footer />
            <GoogleAnalytics measurementId={ ga_id } />
            <SpeedInsights />
        </body>
    </html>
}
