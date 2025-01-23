import 'server-only';
import { CmsContentArea, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { MegaMenuGroupBlockDataFragmentDoc, type MegaMenuGroupBlockDataFragment } from "@/gql/graphql";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

/**
 * Mega menu group
 * 
 */
export const MegaMenuGroupBlockComponent : CmsComponent<MegaMenuGroupBlockDataFragment> = ({ data }) => {
    const menuName = data.MenuMenuHeading ?? data._metadata?.displayName ?? "Unnamed menu entry"
    return <Popover>
        <PopoverButton className="px-2 xl:px-4 h-full align-bottom hover:text-azure focus:text-azure font-semibold dark:text-white dark:focus:text-verdansk dark:hover:text-verdansk" data-menu-label={menuName}>{ menuName }</PopoverButton>
        <PopoverPanel anchor="bottom start" className="[--anchor-gap:1rem] z-[5000] w-full shadow-[0_14px_4px_6px_rgba(0,0,0,0.1)] bg-ghost-white dark:bg-vulcan-85 dark:text-white !left-0 !max-w-none" data-menu-item={menuName}>
            <div className="container mx-auto flex flex-col lg:flex-row py-4 xl:py-8 px-4 lg:px-8 gap-8 xl:gap-12 overflow-x-auto justify-start">
                <CmsContentArea noWrapper items={ data.MegaMenuContentArea } itemWrapper={{ as: "div", className: "max-w-[50%] data-[component=CardBlock]:ml-auto data-[component=CardBlock]:order-last data-[component=BlogPostPage]:ml-auto data-[component=BlogPostPage]:order-last data-[component=BlogPostPage]:w-full" }} variant="menu" />
            </div>
        </PopoverPanel>
    </Popover>
}
MegaMenuGroupBlockComponent.displayName = "Mega menu group (Component/MegaMenuGroupBlock)"
MegaMenuGroupBlockComponent.getDataFragment = () => ['MegaMenuGroupBlockData', MegaMenuGroupBlockDataFragmentDoc]

export default MegaMenuGroupBlockComponent
