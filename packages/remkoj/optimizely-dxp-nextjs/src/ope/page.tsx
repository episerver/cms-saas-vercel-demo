import 'server-only'

import type { EditPageProps, EditPageComponent, EditViewOptions } from './types'
import type { Services } from '@remkoj/optimizely-graph-client'
import { Utils, type ComponentFactory, type ContentLinkWithLocale } from '@remkoj/optimizely-dxp-react'
import { CmsContent } from '@remkoj/optimizely-dxp-react-server'
import { notFound } from 'next/navigation'
import OnPageEdit from '../components/on-page-edit'
import { getAuthorizedServerClient } from '../client'
import React from 'react'
import Script from 'next/script'
import { getContentById } from './data'

const defaultOptions : EditViewOptions = {
    refreshDelay: 2000,
    refreshNotice: () => <div className='optly-refresh-notice'>Updating preview, please wait....</div>,
    errorNotice: props => <div className='optly-error-notice'>
        <div className='optly-error-title'>{ props.title }</div>
        <div className='optly-error-message'>{ props.message }</div>
    </div>,
    layout: props => <div className='optly-edit-page' data-locale={ props.locale }>
        { props.children }
    </div>,
    loader: getContentById,
    clientFactory: (token?: string) => getAuthorizedServerClient(token)
}

/**
 * Create the EditPage component needed by Next.JS to render the "On Page
 * Editing" variant of the content item selected by the editor.
 * 
 * @param   dxpUrl      The domain of the CMS instance
 * @param   client      The Apollo GraphQL client to use
 * @param   channel     The static site definition to use
 * @param   factory     The component factory to be used
 * @param   options     The optional options to use to control the edit page
 * @returns The React Component that can be used by Next.JS to render the page
 */
export function createEditPageComponent(
    channel: Readonly<Services.ChannelDefinition>,
    factory: ComponentFactory,
    options?: Partial<EditViewOptions>
) : EditPageComponent
{
    const DEVELOPMENT = process.env.NODE_ENV == 'development'
    const DEBUG = process.env.DXP_DEBUG == '1'

    const { 
        layout: PageLayout, 
        refreshNotice: RefreshNotice, 
        refreshDelay, 
        errorNotice: ErrorNotice, 
        loader: getContentById,
        clientFactory
    } = { ...defaultOptions, ...options }

    const dxpUrl = channel.getCmsUrl()

    async function EditPage({ params, searchParams }: EditPageProps) : Promise<JSX.Element>
    {
        // Validate the search parameters
        const epiEditMode = searchParams?.epieditmode?.toLowerCase()
        if (epiEditMode != 'true' && epiEditMode != 'false') {
            console.error("[OnPageEdit] Edit mode requested without valid EpiEditMode, refused to render the page. Mode set:", searchParams.epieditmode)
            return notFound()
        }

        // Allow use-hmac as magic token to be used only on a development environment, otherwise require a minimal length string as token
        const token = searchParams.preview_token
        const validDev = DEVELOPMENT && searchParams.preview_token == 'use-hmac'
        if (!token || (token.length < 20 && !validDev)) {
            console.error("[OnPageEdit] Edit mode requested without valid Preview Token, refused to render the page")
            return notFound()
        }
        if (DEBUG)
            console.log(`[OnPageEdit] Valid edit mode request: EpiEditMode=${ searchParams.epieditmode }`)

        // Helper function to read the ContentID & WorkID
        function getContentIds() : [ number, number | null ] 
        {
            try {
                // When using HMAC authentication, fall back to information in the URL
                if (validDev) {
                    const contentString = slugs.join('/').split(',,').pop() ?? ''
                    const [ contentId, workId ] = contentString.split('_',3)
                    return [ Number.parseInt(contentId), workId ? Number.parseInt(workId) : null ]
                }
            
                // Normally take the information from the token
                const jwt = JSON.parse(Buffer.from((token || '..').split('.',3)[1], 'base64').toString())
                const contentId = Number.parseInt(jwt?.c_id || '-1', 10)
                const workId = Number.parseInt(jwt?.c_ver || '0') || null
                if ((jwt.exp * 1000) < Date.now())
                    console.warn("[OnPageEdit] Token has expired, it is unlikely that you are able to fetch content with it")
                return [ contentId, workId ]
            } catch {
                return [ -1, null ]
            }
        }

        // Get information from the Request URI
        const requestPath = ('/'+params.path.map(decodeURIComponent).join('/')).replace(/^(\/ui){0,1}(\/cms){0,1}(\/content){0,1}\//i, '')
        const slugs = requestPath.split('/')
        const locale = channel.locales.some(x => x.slug == slugs[0]) ? slugs[0] : channel.defaultLocale
        if (DEBUG) 
            console.log(`[OnPageEdit] Inferred content locale from path: ${ locale }`)
        const [ contentId, workId ] = getContentIds()
        
        const contentLink : ContentLinkWithLocale = {
            id: contentId,
            workId: workId,
            guidValue: null,
            locale: locale
        }
        const variables = {
            ...contentLink,
            locale: contentLink.locale,
            isCommonDraft: !contentLink.workId ? true : null
        }
        if (DEBUG) {
            console.log("[OnPageEdit] Requested content:", JSON.stringify(variables))
            console.log("[OnPageEdit] Creating GraphQL Client:", token)
        }
        const client = clientFactory(token)
        try {
            const contentInfo = await getContentById(client, variables)
            const contentItem = (contentInfo?.Content?.items ?? [])[0]
            const contentType = Utils.normalizeContentType(contentItem?.contentType)

            // Return a 404 if the content item or type could not be resolved
            if (!contentItem) {
                console.warn(`[OnPageEdit] The content item for ${ JSON.stringify(variables) } could not be loaded from Optimizely Graph`)
                return notFound()
            }
            if (!contentType) {
                console.warn(`[OnPageEdit] The content item for ${ JSON.stringify(variables) } did not contain content type information`)
                return notFound()
            }

            if (DEBUG) {
                const contentItemId = contentItem?.id
                console.log("[OnPageEdit] Resolved content:", JSON.stringify({ 
                    id: contentItemId?.id, 
                    workId: contentItemId?.workId, 
                    guidValue: contentItemId?.guidValue, 
                    locale: contentItem.locale?.name, 
                    type: (contentItem.contentType ?? []).slice(0,-1).join('/')
                }))
            }

            // Render the content, with edit mode context
            const isPage = contentItem.contentType?.some(x => x?.toLowerCase() == "page") ?? false
            const inEditMode = epiEditMode == 'true'
            const loadedContentId = Utils.normalizeContentLinkWithLocale({ ...contentItem?.id, locale: contentItem?.locale?.name })
            const Layout = isPage ? PageLayout : React.Fragment
            const output =  <>
                { inEditMode && <Script src={`${ dxpUrl }/ui/CMS/latest/clientresources/communicationinjector.js`} strategy='afterInteractive' /> }
                <Layout locale={ locale }>
                    <OnPageEdit timeout={ refreshDelay } mode={ inEditMode ? 'edit' : 'preview' } className='bg-slate-900 absolute top-0 left-0 w-screen h-screen opacity-60 z-50'>
                        <RefreshNotice />
                    </OnPageEdit>
                    <CmsContent contentType={ contentType } contentLink={ contentLink } inEditMode={ inEditMode } fragmentData={ contentItem } factory={ factory } client={ client } />
                </Layout>
                <div className='optly-contentLink'>ID: { loadedContentId?.id ?? "-"} | Version: { loadedContentId?.workId ?? "-"} | Global ID: { loadedContentId?.guidValue ?? "-"} | Locale: { loadedContentId?.locale ?? ""}</div>
            </>
            return output
        } catch (e) {
            console.error("[OnPageEdit] Caught error", e)
            return notFound()
        }
    }
    return EditPage
}

export default createEditPageComponent