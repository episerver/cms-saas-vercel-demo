import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.scss";
import { Body, ThemeProvider } from "@/components/theme"
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import { EnvTools } from "@remkoj/optimizely-one-nextjs/server";

// Client side context
import GlobalProviders from "@components/providers";

// Client side trackers
import { Scripts } from '@remkoj/optimizely-one-nextjs/server'
import GoogleAnalytics from '@/components/integrations/google-analytics'
import { SpeedInsights } from "@vercel/speed-insights/next"

const figtree = Figtree({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const domain = process.env.NEXT_PUBLIC_SITE_DOMAIN
  const scheme = domain && (domain.startsWith("localhost") || domain.endsWith(".local")) ? 'http' : 'https'
  const base = domain ? new URL(`${scheme}://${domain}`) : undefined
  return {
    metadataBase: base,
    title: {
      default: `Mosey Bank - An Optimizely Demo Company`,
      template: `%s | Mosey Bank - An Optimizely Demo Company`,
    },
    openGraph: {
      title: {
        default: `Mosey Bank - An Optimizely Demo Company`,
        template: `%s | Mosey Bank - An Optimizely Demo Company`,
      },
      siteName: "Mosey Bank",
      images: [
        {
          url: "/apple-touch-icon.png",
        },
      ],
    },
    description:
      "A Demo showcasing the power of combining the Optimizely DXP with Next.JS",
    icons: {
      apple: { sizes: "180x180", url: "/apple-touch-icon.png" },
      icon: [
        { type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
        { type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
      ],
    },
    manifest: "/site.webmanifest",
  };
}

export type RootLayoutProps = {
  children: React.ReactNode
};

export default function RootLayout({ children }: RootLayoutProps) {
  const ga_id = EnvTools.readValue("GA_TRACKING_ID");
  

  return (
    <html>
      <head>
        <Scripts.Header />
      </head>
      <ThemeProvider value={{ theme: "system" }}>
        <Body className={`${figtree.className} bg-ghost-white dark:bg-vulcan`}>
          <div className="flex min-h-screen flex-col justify-between">
            <GlobalProviders>
              <Header />
              <main className="grow">{children}</main>
              <Footer />
            </GlobalProviders>
            <Scripts.Footer />
            <GoogleAnalytics measurementId={ga_id} />
            <SpeedInsights />
          </div>
        </Body>
      </ThemeProvider>
    </html>
  );
}
