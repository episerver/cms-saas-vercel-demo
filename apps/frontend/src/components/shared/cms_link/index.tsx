import { type FunctionComponent } from "react";
import { type LinkItemDataFragment, type LinkDataFragment } from "@gql/graphql";
import Link from "next/link";

export type CmsLinkProps = {
    href: LinkItemDataFragment
} & Omit<JSX.IntrinsicElements['a'], 'href' | 'children' | 'title' | 'target'>

export function createListKey(item: LinkItemDataFragment) : string
{
    const link = getLinkData(item)
    return link && link.default ? link.default : (item.text ?? '-')
}

export const CmsLink : FunctionComponent<CmsLinkProps> = ({ href, ...props }) =>
{
    const url = linkDataToUrl(getLinkData(href))
    const linkHref = urlToRelative(url)
    const linkText = href.text ?? ""
    const linkTitle = href.title ?? undefined
    const linkTarget = href.target ?? undefined
    return url ? <Link {...props} href={ linkHref } title={ linkTitle } target={ linkTarget }>{ linkText }</Link> : <span { ...props} title={ linkTitle }>{ linkText }</span>
}

export default CmsLink

export function getLinkData(item: LinkItemDataFragment) : LinkDataFragment | null
{
    const url : LinkDataFragment | null | undefined = item.url
    return url && url.default ? url : null
}

export function linkDataToUrl(item: LinkDataFragment | null | undefined) : URL | undefined
{
    try {
        return new URL(item?.default ?? '/', item?.base ?? undefined)
    } catch {
        return undefined
    }
}

export function linkToUrl(item: LinkItemDataFragment)  : URL | undefined
{
    return linkDataToUrl(getLinkData(item))
}

export function urlToRelative(url?: URL | string | undefined) : string
{
    if (!url)
        return '#'
    const linkUrl = typeof url == 'string' ? new URL(url, 'http://localhost:3000/') : url
    const relativePath = isPrimaryHost(linkUrl.host) ? linkUrl.pathname + linkUrl.search + linkUrl.hash : linkUrl.href
    return relativePath
}

function isPrimaryHost(host: string) : boolean
{
    try {
        const isPrimary = host == process.env.SITE_PRIMARY || host == process.env.NEXT_PUBLIC_SITE_PRIMARY || host.startsWith('localhost')
        return isPrimary
    } catch {
        return false
    }
}