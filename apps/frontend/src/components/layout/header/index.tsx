import 'server-only'
import { PopoverGroup } from '@headlessui/react';
import { type GenericContext, CmsContentArea } from '@remkoj/optimizely-cms-react/rsc';
import { Logo } from "./partials/_logo";
import SecondaryMenu from './partials/_secondary-menu';
import MobileMenu from './partials/_mobile-menu';
import { Suspense } from 'react';
import getLayoutData from '../getlayoutdata';

export type HeaderProps = {
    locale?: string;
    ctx: GenericContext
};
  
export default async function SiteHeader({ locale, ctx }: HeaderProps) 
{
    const { client, locale: serverLocale = locale } = ctx
    const currentDomain = client?.siteInfo.frontendDomain
    const ctxLocale = locale ?? serverLocale
    const headerData = await getLayoutData(currentDomain, ctxLocale)

    return <header>
        <div className="container mx-auto px-4 lg:px-6 py-4 gap-2 flex flex-row justify-between items-stretch lg:flex-wrap 2xl:flex-nowrap">
            <Suspense fallback={<Logo />}>
                <Logo />
            </Suspense>
            <CmsContentArea as={ PopoverGroup } className="main-menu hidden 2xl:grow lg:order-last lg:basis-full 2xl:order-none 2xl:basis-auto lg:flex flex-row items-stretch" items={ headerData?.mainMenu } itemWrapper={{ noWrapper: true }} ctx={ ctx }/>
            <SecondaryMenu className='grow-0 shrink-0' utilityItems={ headerData?.serviceButtons } ctx={ ctx } />
            <MobileMenu menuItems={ headerData?.mainMenu } serviceItems={ headerData?.serviceButtons } ctx={ ctx } />
        </div>
    </header>
}