import 'server-only';
import { CmsContentArea, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { MegaMenuGroupBlockDataFragmentDoc, type MegaMenuGroupBlockDataFragment } from "@/gql/graphql";
import { Disclosure, DisclosureButton, DisclosurePanel  } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

/**
 * Mega menu group (mobile)
 * 
 */
export const MegaMenuGroupBlockComponent : CmsComponent<MegaMenuGroupBlockDataFragment> = ({ data }) => {
    const menuName = data.MenuMenuHeading ?? data._metadata?.displayName ?? "Unnamed menu entry"
    return <Disclosure as="div">
        <DisclosureButton className="w-full flex justify-between font-extrabold uppercase text-xl py-2" data-menu-label={menuName}>
            <span>{ menuName }</span>
            <ChevronDownIcon className="w-8 group-data-[open]:rotate-180" />
        </DisclosureButton>
        <DisclosurePanel data-menu-item={menuName} className="flex flex-col gap-2">
            <CmsContentArea items={ data.MegaMenuContentArea } variant='menu' noWrapper itemWrapper={{ as: "div", className: "" }} />
        </DisclosurePanel>
    </Disclosure>
}
MegaMenuGroupBlockComponent.displayName = "Mega menu group (Component/MegaMenuGroupBlock) - Mobile"
MegaMenuGroupBlockComponent.getDataFragment = () => ['MegaMenuGroupBlockData', MegaMenuGroupBlockDataFragmentDoc]

export default MegaMenuGroupBlockComponent