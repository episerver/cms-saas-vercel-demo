import type { ComponentType } from 'react'
import type * as Types from './types'
import type { DocumentNode } from "@apollo/client"

export function isContentLink(toTest: any) : toTest is Types.ContentLink
{
    // It must be an object
    if (typeof(toTest) != 'object' || toTest == null)
        return false

    // The object must have an Id (numeric, >= 0) or GuidValue (string, minimum 1 character)
    return (typeof((toTest as Types.ContentLink).id) == 'number' && ((toTest as Types.ContentLink).id as number) >= 0) ||
        (typeof((toTest as Types.ContentLink).guidValue) == 'string' && ((toTest as Types.ContentLink).guidValue as string).length > 0)
}

export function isContentLinkWithLocale(toTest: any) : toTest is Types.ContentLinkWithLocale
{
    if (!isContentLink(toTest))
        return false

    const locale = (toTest as Types.ContentLinkWithLocale).locale
    return locale == undefined || (typeof(locale) == 'string' && locale.length >= 2 && locale.length <= 5)
}

export function isNonEmptyString(toTest: any) : toTest is string
{
    return typeof(toTest) == 'string' && toTest.length > 0
}

export function isNotNullOrUndefined<T>(toTest?: T | null) : toTest is T
{
    return !(toTest == null || toTest == undefined)
}

export function isContentType(toTest: any) : toTest is Types.ContentType
{
    if (!Array.isArray(toTest))
        return false

    return toTest.every(isNonEmptyString)
}

export function normalizeContentType(toNormalize: (string | null)[] | null | undefined) : Types.ContentType | undefined
{
    if (!Array.isArray(toNormalize))
        return undefined

    const filtered = toNormalize.filter(isNonEmptyString)
    return filtered.length > 0 ? filtered : undefined
}

export function normalizeContentLink(toNormalize?: {id?: null | number, workId?: null | number, guidValue?: null | string} | null) : Types.ContentLink | undefined
{
    if (typeof(toNormalize) != 'object' || toNormalize == null)
        return undefined
    if (toNormalize.id == null) toNormalize.id = 0 // Change the 'null' identifier and turn it into a 'zero'
    if (toNormalize.guidValue == null || toNormalize.guidValue == "") delete toNormalize.guidValue // Remove an empty or null guid value
    if ((toNormalize.id ?? -1) >= 0 || (toNormalize.guidValue ?? "").length > 0)
        return toNormalize as Types.ContentLink
    return undefined
}

export function normalizeContentLinkWithLocale(toNormalize?: {id?: null | number, workId?: null | number, guidValue?: null | string, locale?: string | null} | null) : Types.ContentLinkWithLocale | undefined
{
    const normalized = normalizeContentLink(toNormalize) as Types.ContentLinkWithLocale
    if (normalized.locale != undefined && !(typeof(normalized.locale) == 'string' && normalized.locale.length >= 1 && normalized.locale.length <= 5))
        delete normalized.locale
    return normalized
}

export function isCmsComponentWithDataQuery<T = DocumentNode>(toTest?: Types.BaseCmsComponent<T>) : toTest is Types.CmsComponentWithQuery<T>
{
    const toTestType = typeof(toTest)
    if ((toTestType == 'function' || toTestType == 'object') && toTest != null)
    {
        return (toTest as Types.CmsComponentWithQuery).getDataQuery && typeof((toTest as Types.CmsComponentWithQuery).getDataQuery) == 'function' ? true : false
    }
    return false
}

export function isCmsComponentWithFragment<T = DocumentNode>(toTest?: Types.BaseCmsComponent<T>) : toTest is Types.CmsComponentWithFragment<T>
{
    const toTestType = typeof(toTest)
    if ((toTestType == 'function' || toTestType == 'object') && toTest != null)
        return (toTest as Types.CmsComponentWithFragment).getDataFragment && typeof((toTest as Types.CmsComponentWithFragment).getDataFragment) == 'function' ? true : false
    return false
}

export function validatesFragment<T extends ComponentType<any>>(toTest?: T) : toTest is T & Pick<Required<Types.WithGqlFragment<T, any>>,"validateFragment">
{
    type ToTestFor = T & Pick<Required<Types.WithGqlFragment<T, any>>,"validateFragment">
    const toTestType = typeof(toTest)
    if ((toTestType == 'function' || toTestType == 'object') && toTest != null)
        return (toTest as ToTestFor).validateFragment && typeof((toTest as ToTestFor).validateFragment) == 'function' ? true : false
    return false
}

export function contentLocaleToGraphLocale<T>(contentLocale?: T) : T extends string ? string : undefined
{
    if (typeof(contentLocale) == 'string' && contentLocale.length >= 2 && contentLocale.length <= 5)
        return contentLocale?.replaceAll('-','_') as T extends string ? string : undefined
    return undefined as T extends string ? string : undefined
}

export function contentLinkToRequestVariables(contentLink: Types.ContentLinkWithLocale) : Types.ContentQueryProps
{
    const variables : Types.ContentQueryProps = { 
        id: contentLink.id ?? 0, 
        workId: contentLink.workId,
        guidValue: contentLink.guidValue ?? "",
        locale: contentLocaleToGraphLocale(contentLink.locale) 
    }
    if (variables.workId == undefined || variables.workId <= 0)
        variables.workId = null
    return variables
}

export function isInlineContentLink(contentLink: Types.ContentLink) : contentLink is Types.InlineContentLink
{
    return !contentLink.id && !contentLink.guidValue
}

export function contentLinkToString(contentLink: Types.ContentLink) : string 
{
    return `${contentLink.id ?? 0}_${contentLink.workId ?? 0}#${ contentLink.guidValue ?? ''}\$${ (contentLink as Types.ContentLinkWithLocale).locale ?? ''}`
}