import type { Metadata } from 'next/types'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import getCurrentChannel from '@/lib/current-channel'

import GlobalProviders from '@components/providers'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const odp_id = process.env.OPTIMIZELY_DATAPLATFORM_ID ?? undefined

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

export default function RootLayout({ children }: RootLayoutProps) {
    return <html>
        <body className={ `${ inter.className } bg-white text-slate-900` }>
            { odp_id && <Script id='zaius-root-script'>{`
              var zaius = window['zaius'] || (window['zaius'] = []);
  zaius.methods = ['initialize', 'onload', 'customer', 'entity', 'event', 'subscribe', 'unsubscribe', 'consent', 'identify', 'anonymize', 'dispatch'];

  // build queueing methods
  zaius.factory = function (method) {
    return function() {
      var args = Array.prototype.slice.call(arguments);
      args.unshift(method);
      zaius.push(args);
      return zaius;
    };
  };

  (function() {
    for (var i = 0; i < zaius.methods.length; i++) {
      var method = zaius.methods[i];
      zaius[method] = zaius.factory(method);
    }

    var script   = document.createElement('script');
    script.type  = 'text/javascript';
    script.async = true;
    script.src   = ('https:' === document.location.protocol ? 'https://' : 'http://') +
                  'd1igp3oop3iho5.cloudfront.net/v2/${ odp_id }/zaius.js';

    var firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
  })();`}
</Script>
}
            <GlobalProviders>
                { children }
            </GlobalProviders>
        </body>
    </html>
}
