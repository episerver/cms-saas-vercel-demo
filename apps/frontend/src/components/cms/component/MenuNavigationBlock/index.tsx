import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { MenuNavigationBlockDataFragmentDoc, LinkItemDataFragmentDoc, LinkDataFragmentDoc, type MenuNavigationBlockDataFragment } from "@/gql/graphql";
import { getFragmentData } from "@gql";
import Link from "./_link";

/**
 * Menu navigation
 * 
 */
export const MenuNavigationBlockComponent : CmsComponent<MenuNavigationBlockDataFragment> = ({ data: { MenuNavigationHeading: heading, NavigationLinks: links, _metadata: metadata }}) => {
    const groupLabel = heading ?? metadata?.displayName ?? "Unnamed link group"
    return <>
        <div className="pb-1 uppercase font-bold">{ groupLabel }</div>
        <ul>
            { (links || []).map(link => {
                const linkData = getFragmentData(LinkItemDataFragmentDoc, link)
                const linkUrl = getFragmentData(LinkDataFragmentDoc, linkData?.url)
                if (!(linkData && linkUrl)) return null
                const linkKey = (linkData.text ?? '')+'::'+(linkUrl.default)
                return <li key={ linkKey }>
                    <Link className="inline-block py-1 hover:text-azure hover:data-[link=active]:text-azure" href={ linkUrl } title={ linkData.title ?? undefined } target={ linkData.target ?? undefined}>{ linkData.text ?? linkData.title ?? 'Unnamed link'}</Link>
                </li>
            }) }
        </ul>
    </>
}
MenuNavigationBlockComponent.displayName = "Menu navigation (Component/MenuNavigationBlock)"
MenuNavigationBlockComponent.getDataFragment = () => ['MenuNavigationBlockData', MenuNavigationBlockDataFragmentDoc]

export default MenuNavigationBlockComponent
