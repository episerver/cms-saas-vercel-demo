import { type FunctionComponent, type ComponentProps, Suspense } from "react";
import { CmsContentArea } from "@remkoj/optimizely-cms-react/rsc";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";

import ThemePicker from "./_themepicker";
import SiteSearch from "./_site-search"

export type MobileMenuProps = {
    menuItems?: ComponentProps<typeof CmsContentArea>['items']
    serviceItems?: ComponentProps<typeof CmsContentArea>['items']
}

export const MobileMenu : FunctionComponent<MobileMenuProps> = ({ menuItems, serviceItems }) =>
{
    return <Popover className="grow-0 shrink-0 lg:hidden">
        <PopoverButton className="h-full flex items-center">
            <Bars3Icon className="inline-block w-12" />
        </PopoverButton>
        <PopoverPanel anchor="bottom end" className="[--anchor-gap:1rem] bg-ghost-white dark:bg-vulcan-85 dark:text-white !max-w-none w-full z-[5000] shadow-[0_14px_4px_6px_rgba(0,0,0,0.1)]">
            <div className="container mx-auto p-4">
                <div className="pb-4">
                    <Suspense><SiteSearch asSearchBox /></Suspense>
                </div>
                <hr />
                <CmsContentArea items={ menuItems } variant="mobile" />
                <hr />
                <div className="py-4 gap-4 flex flex-row flex-wrap justify-between">
                    <CmsContentArea items={ serviceItems } noWrapper variant="mobile" />
                    <div className="min-w-20"><ThemePicker /></div>
                </div>
            </div>
        </PopoverPanel>
    </Popover>
}

export default MobileMenu