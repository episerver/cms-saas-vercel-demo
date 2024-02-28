# Next.JS Optimizely One toolkit
React components (both client & server) to integrate the browser-side products from Optimizely (Web Experimentation, Data Platform & Content Analytics / Recommendations)

## Requirements
- Next.JS 14.1+
- TypeScript
- Access to the Optimizely One Products

## Installing & Usage

Start by adding the package to your project:
`yarn add @remkoj/optimizely-one-nextjs`

### Add API Routes
Then make the service endpoints available by creating a new API route within Next.JS. For the app router this is done by creating this file:

`app/api/me/[[...path]]/route.ts`

Put the following code in this file to use the API Route handler from the package:

```typescript
import { createOptimizelyOneApi } from '@remkoj/optimizely-one-nextjs/server';

const handler = createOptimizelyOneApi()

export const GET = handler
export const POST = handler
export const runtime = 'edge' // 'nodejs' (default) | 'edge'
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const fetchCache = 'default-no-store'
```

### Add Provider & PageTracker to your layout
Within the global layout (or your ["third party providers component"](https://vercel.com/guides/react-context-state-management-nextjs#rendering-third-party-context-providers-in-server-components), whatever applies best), add the Optimizely One Scripts (`Scripts.Header` & `Scripts.Footer`), Context Provider (`OptimizelyOneProvider`), Page Activator (`PageActivator`), and - if you want to - the demo gadget (`OptimizelyOneGadget`).

```typescript
import { Scripts } from '@remkoj/optimizely-one-nextjs/server'
import { OptimizelyOneProvider, PageActivator } from '@remkoj/optimizely-one-nextjs/client'
import OptimizelyOneGadget from '@remkoj/optimizely-one-nextjs/optimizely-one-gadget'

export type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) 
{
    return <html>
        <head>
            <Scripts.Header />
        </head>
        <body>
            <OptimizelyOneProvider value={{ debug: true }}>
                <PageActivator />
                { children }
                <OptimizelyOneGadget />
            </OptimizelyOneProvider>
            <Scripts.Footer />
        </body>
    </html>
}
```

### Instrument your site with additional events
Whenever you want to track additional events, use the provided hook to get to the context and send events.

```typescript
'use client'
import React, { type FunctionComponent } from 'react'
import { useOptimizelyOne } from '@remkoj/optimizely-one-nextjs/client'

export const YourComponent : FunctionComponent<{}> = props => {
    const opti = useOptimizelyOne()

    function handler() 
    {
        opti?.track({ event: "name", action: "action" })
    }

    return <button onClick={() => handler()}>Output</button>
}
```