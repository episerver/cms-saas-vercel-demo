'use client'
import { type FunctionComponent, type ComponentProps } from 'react'
import { usePathname } from 'next/navigation'
import NextLink from 'next/link'
import { CloseButton as BaseLink, type CloseButtonProps } from '@headlessui/react'
import { type LinkDataFragment } from '@gql/graphql'

export type LinkProps = Omit<CloseButtonProps<typeof NextLink>, 'href' | 'as'> & {
    href: CloseButtonProps<typeof NextLink> | LinkDataFragment
}

/**
 * Enhanced version of the Next.JS Link component, that allows a 
 * LinkDataFragment to be used as value for the `href` property. It also will
 * use the `usePathname` hook to determine if the provided `href` value is
 * currently active. If so, it outputs a `data-link-active` attribute into the
 * HTML.
 * 
 * @param       param0      The link properties
 * @returns     The rendered Link
 */
export const Link : FunctionComponent<LinkProps> = ({ href, children, ...otherProps }) => {
    const newHref = ((isLinkDataFragment(href) ? linkDataToPath(href) : typeof(href) == 'object' ? href.href : href) ?? "/") as string
    const currentPath = usePathname()
    
    const itemProps = { ...otherProps }
    if (currentPath.startsWith(newHref)) {
        itemProps['data-link'] = 'active'
    }

    return <BaseLink as={NextLink} href={ newHref } {...itemProps}>{children}</BaseLink>
}

function linkDataToPath(linkData: LinkDataFragment) : string
{
    const href =linkData.default || '/'
    return href.endsWith('/') ? href.substring(0, href.length - 1) : href
}

function isLinkDataFragment(toTest: any) : toTest is LinkDataFragment
{
    if (typeof(toTest) == 'object' && toTest != null)
    {
        return typeof(toTest.base) == 'string' && typeof(toTest.default) == 'string'
    }
    return false
}

export default Link