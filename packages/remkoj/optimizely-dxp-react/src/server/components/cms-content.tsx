import 'server-only'
import type { ComponentType, ComponentProps } from 'react'
import type { CmsComponent, ContentLinkWithLocale } from '../../types'
import type { CmsContentProps } from './types'
import getContentType from './get-content-type'
import getServerContext from '../context'
import createClient, { AuthMode } from '@remkoj/optimizely-graph-client'
import { print } from 'graphql'
import * as Utils from "../../utilities"
import * as Queries from './queries'
import React from 'react'

type CmsComponentProps = ComponentProps<CmsComponent> & {
    [key: string]: any
}
type EnhancedCmsComponent = ComponentType<CmsComponentProps>

export type { CmsContentProps } from './types'

/**
 * React Server Side component for the CmsContent
 * 
 * @param     param0 
 * @returns   
 */
export const CmsContent = async ({contentType, contentTypePrefix, contentLink, children, fragmentData} : CmsContentProps) : Promise<JSX.Element> => 
{
    const context = getServerContext()
    if (context.isDebugOrDevelopment && !context.client)
        console.warn(`🟠 [CmsContent] No Content Graph client provided with ${ JSON.stringify(contentLink) }, this will cause problems with edit mode!`)

    // Parse & prepare props
    const inEditMode = context.inEditMode && context.isEditableContent(contentLink)
    const outputEditorWarning = context.forceEditorWarnings
    const factory = context.factory
    const client = context.client ?? createClient()
    const isInlineBlock = Utils.isInlineContentLink(contentLink)
    if (context.isDebug && inEditMode)
        console.log(`👔 [CmsContent] Edit mode active for content with id: ${ JSON.stringify(contentLink) }`)
    if (context.isDebug && inEditMode && client.currentAuthMode == AuthMode.Public)
        console.warn(`🟠 [CmsContent] Edit mode active without an authenticated client, this will cause problems`)
        

    // DEBUG Tracing
    if (context.isDebug)
        console.log("⚪ [CmsContent] Rendering CMS Content for:", JSON.stringify(contentType), isInlineBlock ? "Inline content" : JSON.stringify({ id: contentLink.id, workId: contentLink.workId, guidValue: contentLink.guidValue, locale: contentLink.locale }), inEditMode ? "edit-mode" : "published")

    // Ensure we have a content type to work with
    if (!isInlineBlock && !contentType) {
        if (context.isDebugOrDevelopment) 
            console.warn(`🟠 [CmsContent] No content type provided for content ${ JSON.stringify({ id: contentLink.id, workId: contentLink.workId, guidValue: contentLink.guidValue, locale: contentLink.locale }) }, this causes an additional GraphQL query to resolve the ContentType`)
        contentType = await getContentType(contentLink, client)
    }

    // Apply the content-type prefix if needed
    if (Array.isArray(contentType) && Utils.isNonEmptyString(contentTypePrefix) && contentType.length > 0 && contentType[0] != contentTypePrefix) {
        if (context.isDebug)
            console.info(`⚪ [CmsContent] Component type [${ contentType.join('/')}] doesn't have the configured prefix, adding ${ contentTypePrefix } as prefix`)
        contentType.unshift(contentTypePrefix)
    }
    
    // Resolve component
    const Component = factory.resolve(contentType ?? "") as EnhancedCmsComponent | undefined
    if (!Component) {
        if (context.isDebugOrDevelopment) {
            console.warn(`🟠 [CmsContent] Component of type "${ contentType?.join('/') ?? "" }" not resolved by factory`)
        }
        if (context.isDebug || inEditMode || outputEditorWarning) {
            const errorMsg = <div className='opti-error'>Component of type "{ contentType?.join('/') ?? "" }" not resolved by factory</div>
            return children ? <>{ errorMsg }{children}</> : errorMsg
        }
        return <>{children ? children : undefined }</>
    }
    if (context.isDebug)
        console.log("⚪ [CmsContent] Rendering item using component:", Component?.displayName ?? Component)

    // Render with previously loaded data
    const fragmentProps = fragmentData ? Object.getOwnPropertyNames(fragmentData).filter(x => !Queries.CmsContentFragments.IContentDataProps.includes(x)) : [] 
    if (fragmentProps.length > 0)
    {
        if (context.isDebug)
            console.log("⚪ [CmsContent] Rendering CMS Component using fragment information", fragmentProps)

        if (Utils.validatesFragment(Component) && !Component.validateFragment(fragmentData)) {
            console.error("🔴 [CmsContent] Invalid fragment data received for ", Component.displayName ?? contentType?.join("/") ?? "[Undetermined component]")
            return <></>
        }
        return <Component inEditMode={ inEditMode } contentLink={ contentLink } data={ fragmentData || {} } client={ client } />
    }

    // If we don't have previously loaded data we cannot load content for inline blocks
    if (isInlineBlock)
        return (context.isDebug || inEditMode || outputEditorWarning) ? <div className='opti-error'>Inline blocks cannot be loaded individually</div> : <></>

    // Render using included query 
    if (Utils.isCmsComponentWithDataQuery(Component)) {
        const gqlQuery = Component.getDataQuery()
        const gqlVariables = Utils.contentLinkToRequestVariables(contentLink) as Omit<ContentLinkWithLocale, 'guidValue'> & { guidValue: string }
        if (context.isDebug)
            console.log("⚪ [CmsContent] Component data fetching variables:", gqlVariables)
        const gqlResponse = await client.request<{}>(gqlQuery, gqlVariables)
        if (context.isDebug)
            console.log("⚪ [CmsContent] Component request the following data:", gqlResponse)
        return <Component inEditMode={ inEditMode } contentLink={ contentLink } data={ gqlResponse } client={ client } />
    } 
    
    // Render using included fragment
    if (Utils.isCmsComponentWithFragment(Component)) {
        type FragmentQueryVariables = ContentLinkWithLocale & { isCommonDraft?: boolean | null, guidValue: string }
        type FragmentQueryResponse = { contentById: { total: number, items: { contentType: string[], id: { id: number, workId: number, guidValue: string }, locale: { name: string }, [propertyName: string]: any }[] }}
        const [name, fragment]  = Component.getDataFragment()
        const fragmentQuery = `query getContentFragmentById($id: Int!, $workId: Int, $guidValue: String, $locale: [Locales]!, $isCommonDraft: Boolean ) { contentById: Content( where: { ContentLink: { Id: { eq: $id }, WorkId: { eq: $workId }, GuidValue: { eq: $guidValue } },IsCommonDraft: {eq: $isCommonDraft} }, orderBy: { Status: ASC }, locale: $locale, limit: 1 ) { total items { contentType: ContentType id: ContentLink { id: Id, workId: WorkId, guidValue: GuidValue } locale: Language { name: Name } ...${ name } } } } ${ print(fragment) }`
        const fragmentVariables : FragmentQueryVariables = Utils.contentLinkToRequestVariables(contentLink) as FragmentQueryVariables
        if (!fragmentVariables?.workId && inEditMode) fragmentVariables.isCommonDraft = true
        if (context.isDebug)
            console.log(`⚪ [CmsContent] Component data fetching using fragment ${ name }, with variables: ${ JSON.stringify(fragmentVariables) }`)
        const fragmentResponse = await client.request<FragmentQueryResponse, FragmentQueryVariables>(fragmentQuery, fragmentVariables)
        const totalItems = fragmentResponse.contentById.total || 0
        if (totalItems < 1)
            throw new Error(`CmsContent expected to load exactly one content item of type ${ name }, received ${ totalItems } from Optimizely Graph. Content Item: ${ JSON.stringify( fragmentVariables )}`)
        if (totalItems > 1 && context.isDebug)
            console.warn(`🟠 [CmsContent] Resolved ${ totalItems } content items, expected only 1. Picked the first one`)
        return <Component inEditMode={ inEditMode } contentLink={ contentLink } data={ fragmentResponse.contentById.items[0] } client={ client } />
    }
    
    // Assume there's no server side prepared data needed for the component
    if (context.isDebug)
        console.log(`⚪ [CmsContent] Component of type "${ contentType?.join('/') ?? Component.displayName ?? '?'}" did not request pre-loading of data`)
    return <Component inEditMode={ inEditMode } contentLink={ contentLink } data={ fragmentData || {} } client={ client } />
}

export default CmsContent