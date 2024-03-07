import React from 'react'
import Link from 'next/link'
import MenuItem, { type SiteMenuItemProps } from './client'
import SiteSearch from '../site-search'
import { Utils } from '@remkoj/optimizely-dxp-react'
import { CmsContentArea } from '@remkoj/optimizely-dxp-react-server'
import { getServerClient } from '@remkoj/optimizely-dxp-nextjs'
import type * as GraphQL from '@gql/graphql'
import SiteInfo from '@/site-config'

export default function SiteMenu({ locale, items, brandName }: SiteMenuProps) {
    const menuItems = (items || [])
    let counter : number = 0
    const homePath = '/' + (SiteInfo.localeToSlug(locale ?? '') ?? '')
    return <>
        <nav className='max-w-screen-2xl mx-auto px-6 sm:px-7 lg:px-8 relative flex flex-row flex-nowrap justify-stretch h-14'>
            <div className='scrollable-menu-container overscroll-none overflow-auto touch-pan-x w-100 flex-1'>
                <div className='scrollable-menu flex flex-nowrap md:text-lg h-14'>
                    <Link className='hidden lg:inline-block grow-0 px-2 sm:px-3 lg:px-4 py-3 hover:bg-primary-dark hover:text-default-onPrimaryDark transition duration-500 ease-in-out' href={ homePath } hrefLang={locale} lang={locale} >Home</Link>
                { menuItems.map(x => { 
                    const menuItemLinks : SiteMenuItemProps['links'] = (x.Links || []).filter(Utils.isNotNullOrUndefined).map(link => {
                        const href = link?.ContentLink?.Expanded?.RelativePath || link?.ContentLink?.Url || link?.Href || "/"
                        return {
                            href,
                            text: link.Text ?? "Menu item link",
                            target: link.Target ?? undefined,
                            title: link.Title ?? undefined
                        }
                    })
                    const bottomLink : SiteMenuItemProps['bottomLink'] = x.lastLink?.href ? {
                        href: x.lastLink?.item?.data?.path || x.lastLink?.item?.url || x.lastLink?.href || "/",
                        text: x.lastLink?.text ?? "Menu item link",
                        target: x.lastLink?.target ?? undefined,
                        title: x.lastLink?.title ?? undefined
                    } : undefined
                    return <MenuItem key={`menu-item-${ ++counter }`} label={ x?.Label ?? 'Menu Item' } links={ menuItemLinks } bottomLink={ bottomLink } >
                        <CmsContentArea items={ (x.MenuContent || []).filter(Utils.isNotNullOrUndefined) } client={ getServerClient() }/>
                    </MenuItem>
                })}
                    <div className='lg:hidden w-8 h-4 mx-2 sm:mx-3 lg:mx-4 py-3 grow-0 shrink-0'/>
                </div>
            </div>
            <SiteSearch brandName={ brandName } buttonClassName='inline-block h-14 px-2 sm:px-3 lg:px-4 py-3 bg-primary hover:bg-primary-dark transition duration-500 ease-in-out' />
        </nav>
    </>
}

export type SiteMenuProps = {
    locale?: string
    items?: GraphQL.NavMenuItemDataFragment[]
    brandName: string
}