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
    const linkText = href.text ?? ""
    const linkTitle = href.title ?? undefined
    const linkTarget = href.target ?? undefined
    return url ? <Link {...props} href={ url.href } title={ linkTitle } target={ linkTarget }>{ linkText }</Link> : <span { ...props} title={ linkTitle }>{ linkText }</span>
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