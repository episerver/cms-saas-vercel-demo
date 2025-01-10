import 'server-only'
import { PopoverGroup } from '@headlessui/react';
import { getServerContext, CmsContentArea } from '@remkoj/optimizely-cms-react/rsc';
import { localeToGraphLocale } from '@remkoj/optimizely-graph-client';
import { type Locales, type InputMaybe } from '@gql/graphql';
import { getSdk } from "@/sdk";

import { Logo } from "./partials/_logo";
import SecondaryMenu from './partials/_secondary-menu';
import MobileMenu from './partials/_mobile-menu';
import { Suspense } from 'react';

export type HeaderProps = {
    locale?: string;
};
  
export default async function SiteHeader({ locale }: HeaderProps) 
{
    const { client, locale: serverLocale = locale } = getServerContext()
    const currentDomain = client?.siteInfo.frontendDomain
    const ctxLocale = locale ?? serverLocale
    const currentLocale = (ctxLocale ? localeToGraphLocale(ctxLocale) : undefined) as InputMaybe<Locales> | undefined

    const headerData = await getSdk().getHeaderData({
        locale: currentLocale,
        domain: currentDomain
    }).then(x => x.appLayout?.items?.at(0))

    return <header>
        <div className="container mx-auto px-4 lg:px-6 py-4 gap-2 flex flex-row justify-between items-stretch lg:flex-wrap 2xl:flex-nowrap">
            <Suspense fallback={<Logo />}><Logo /></Suspense>
            <CmsContentArea as={ PopoverGroup } className="main-menu hidden 2xl:grow lg:order-last lg:basis-full 2xl:order-none 2xl:basis-auto lg:flex flex-row items-stretch" items={ headerData?.mainMenu } itemWrapper={{ noWrapper: true }} />
            <SecondaryMenu className='grow-0 shrink-0' utilityItems={ headerData?.serviceButtons } />
            <MobileMenu menuItems={ headerData?.mainMenu } serviceItems={ headerData?.serviceButtons } />
        </div>
    </header>
}