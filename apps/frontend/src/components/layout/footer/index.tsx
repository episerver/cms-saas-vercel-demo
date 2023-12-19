import React from 'react'
import { Utils } from '@remkoj/optimizely-dxp-react'
import { getCurrentChannel } from '@/lib/current-channel'
import { getServerClient } from '@/lib/client'
import { gql } from '@gql/index'
import type * as GraphQL from '@gql/graphql'
import { localeToContentGraphLocale, getFallbackLocale } from '@/lib/i18n'
import SiteConfig from '@/site-config'

export type FooterProps = {
    locale?: string
}

import LinkButton from '@components/shared/link-button'
import Link from 'next/link'
import Image from 'next/image'

export async function FooterProps ({ locale }: FooterProps)
{
    const channel = await getCurrentChannel()
    const optlyGraphClient = getServerClient()
    
    // Read footer configuration
    const graphResponse = await optlyGraphClient.query({
        query: GetFooter,
        variables: {
            channelId: channel.id,
            locale: localeToContentGraphLocale(locale || getFallbackLocale()) as GraphQL.Locales
        }
    })
    const footerConfig = (graphResponse.data.FooterConfigBlock?.items || []).filter(Utils.isNotNullOrUndefined)[0]

    // Build the image src
    const imageSrc = footerConfig?.logo || "/assets/logo.png"
    const imageAlt = SiteConfig.name

    return <footer className='max-w-screen-2xl mx-auto p-4 sm:p-6 lg:p-8'>
        <div className='footer-content grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 text-slate-900'>
            <div className='col-span-2 lg:col-span-3 flex flex-col flex-nowrap footer-brand'>
                <div className='small-brand-logo relative max-w-[10rem] aspect-[5/1] w-full'>
                    <Image src={ imageSrc } alt={ imageAlt } fill className='object-contain' sizes="10rem" />
                </div>
                <div className='text-sm my-4' dangerouslySetInnerHTML={{ __html: footerConfig?.text || ""}}></div>
                <div>
                    <FooterLink data={ footerConfig?.button } showAsButton />
                </div>
            </div>
            <FooterLinkList data={ footerConfig?.firstLinks } />
            <FooterLinkList data={ footerConfig?.secondLinks } />
            <FooterLinkList data={ footerConfig?.thirdLinks } />
            <FooterLinkList data={ footerConfig?.fourthLinks } />
        </div>
        <div className='footer-copyright border-t border-stripe-dark pt-8 mt-4 text-default-medium text-xs'>
            <div className='copyright-notice'>
                &copy; 2023-{ new Date().getFullYear() } Remko Jantzen / Optimizely / { channel.name } all rights reserved
            </div>
        </div>
    </footer>
}

function FooterLinkList({ data }: { data ?: GraphQL.FooterLinksFragment | null })
{
    if (!data)
        return <></>

    const caption = data.caption || "Unnamed list"
    let linkId = 0

    return <div className='w-full'>
        <div className='font-semibold w-full pb-2'>{ caption }</div>
        <div className='flex flex-col'>
            { (data.items || []).map(link => <FooterLink key={`link-${++linkId}`} data={link} className='py-1' />) }
        </div>
    </div>
}

function FooterLink({data, showAsButton, className }: {data?: GraphQL.FooterLinkDataFragment | null, showAsButton?: boolean, className?: string}) 
{
    if (!data)
        return <></>
    
    const href = data.content?.data?.path || data.content?.url || data.href || "/"
    const target = data.target || undefined
    const title = data.title || undefined
    const text = data.children || undefined

    const Component = showAsButton ? LinkButton : Link
    return <Component href={href} target={target} title={title} className={ className }>{ text }</Component>
}

export default FooterProps

const GetFooter = gql(/*GraphQL*/`query getFooter($channelId: String!, $locale: [Locales!]) {
    FooterConfigBlock (
        where: { FooterChannelID: { eq: $channelId } }, 
        locale: $locale,
        limit: 1
    ) {
        total
        items {
            logo: FooterLogo
            text: FooterText
            button: BrandButton { ...FooterLinkData }
            firstLinks: FooterLinkGroup1 { ...FooterLinks }
            secondLinks: FooterLinkGroup2 { ...FooterLinks }
            thirdLinks: FooterLinkGroup3 { ...FooterLinks }
            fourthLinks: FooterLinkGroup4 { ...FooterLinks }
        }
    }
}`)
const FooterLinks = gql(/*GraphQL*/`fragment FooterLinks on FooterConfigBlockBlockData {
    caption:LinkListCaption
    items: LinkListItems { ...FooterLinkData }
}`)
const FooterLinkData = gql(/*GraphQL*/`fragment FooterLinkData on LinkItemNode {
    href: Href
    children: Text
    title: Title
    target: Target
    content: ContentLink {
        url: Url
        data: Expanded {
            path: RelativePath
        }
    }
}`)