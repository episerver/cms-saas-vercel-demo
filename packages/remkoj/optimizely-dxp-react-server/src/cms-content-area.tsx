import 'server-only'
import React, { type SuspenseProps } from 'react'
import CmsContent from './cms-content'
import type * as Types from '@remkoj/optimizely-dxp-react'
import { Errors } from '@remkoj/optimizely-dxp-react'
import { getClient as createClient, Utils } from '@remkoj/optimizely-dxp-react'

//#region Type definitions
type ClientType = ReturnType<typeof createClient>
type RawContentLink = {
    id?: number | null,
    workId?: number | null,
    guidValue?: string | null,
}
type RawLocale = { name?: string | null }
type ContentAreaItemDefinition = {
    __typename?: "ContentAreaItemModelSearch" | "ContentAreaItemModel"
    item?: (RawContentLink & {
        data?: {
            contentType?: (string | null)[] | null
            id?: RawContentLink | null
            locale?: RawLocale | null
            [ property: string ]: any
        } | null
    }) | null,
    displayOption?: string | null,
    tag?: string | null
}
export type CmsContentAreaProps = {
    items: (ContentAreaItemDefinition | null)[]
    locale?: string
    classMapper?: CmsContentAreaClassMapper
    className?: string | string[],
    fallback?: SuspenseProps['fallback']
    inEditMode?: boolean
    fieldName?: string
    client?: ClientType
    factory?: Types.ComponentFactory
}
export type CmsContentAreaClassMapper = (displayOption: string, contentType: Types.ContentType | null, index: number) => string
//#endregion

/**
 * React server component to render a content area
 * 
 * @param       param0      The content area information for rendering
 * @returns 
 */
export const CmsContentArea = async ({ items, locale, classMapper, className, inEditMode, fieldName, client, factory }: CmsContentAreaProps) : Promise<JSX.Element> =>
{
    // Convert the items to a list of enriched content types
    const actualItems = items.filter(Utils.isNotNullOrUndefined)
    const gqlClient = client ?? createClient()
    let counter : number = 0
    const componentData = await Promise.all(actualItems.map(async (item, idx) : Promise<React.JSX.Element> => {
        // Prepare data from received content area format
        const contentLink = Utils.normalizeContentLinkWithLocale({ ...item.item, locale: locale })
        if (!contentLink)
            throw new Errors.InvalidContentLinkError({ ...item.item, locale: locale })
        const contentType = Utils.normalizeContentType(item.item?.data?.contentType)
        const fragmentData = item.item?.data || undefined

        // Build output
        const componentKey = `ContentAreaItem-${++counter}-${contentLink.guidValue}-${contentLink.id}-${contentLink.workId}`
        const className = `opti-content-area-item opti-content-area-item-${counter} ${classMapper ? classMapper(item.displayOption ?? 'default', contentType ?? null, idx) : ""}`
        const contentItem = await CmsContent({ contentLink, contentType, fragmentData, client: gqlClient, factory, outputEditorWarning: inEditMode, contentTypePrefix: "Block" })
        return <div key={ componentKey } className={ className } data-epi-block-id={ inEditMode && fieldName ? contentLink?.id : undefined } data-displayoption={ item.displayOption ?? undefined } data-tag={item.tag ?? undefined}>
            { contentItem }
        </div>
    }))

    return <div data-epi-edit={ inEditMode && fieldName ? fieldName : undefined } className={`opti-content-area ${ Array.isArray(className) ? className.join(' ') : ( className ?? '')}`.trim()}>
        { componentData }
    </div>
}

export async function processContentAreaItems( items?: (ContentAreaItemDefinition | null)[] | null, locale: string = "en", inEditMode: boolean = false, client?: ClientType, factory?: Types.ComponentFactory) : Promise<JSX.Element[]>
{
    const actualItems = (items ?? []).filter(Utils.isNotNullOrUndefined)
    const gqlClient = client ?? createClient()

    return Promise.all(actualItems.map(async (item, idx) : Promise<React.JSX.Element> => {
        // Prepare data from received content area format
        const contentLink = Utils.normalizeContentLinkWithLocale({ ...item.item, locale: locale })
        if (!contentLink)
            throw new Errors.InvalidContentLinkError({ ...item.item, locale: locale })
        const contentType = Utils.normalizeContentType(item.item?.data?.contentType)
        const fragmentData = item.item?.data || undefined
        const guidValue = (item.item?.guidValue ?? "00000000-0000-0000-0000-000000000000")+"::"+idx

        // Build output
        return await CmsContent({ contentLink, contentType, fragmentData, client: gqlClient, factory, outputEditorWarning: inEditMode, key: guidValue })
    }))
}

export default CmsContentArea