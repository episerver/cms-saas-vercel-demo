import { type FunctionComponent, type ComponentProps } from "react";
import { CmsContentArea, type GenericContext } from "@remkoj/optimizely-cms-react/rsc";
import ThemePicker from "./_themepicker";
import SiteSearch from "./_site-search";

export type SecondaryMenuProps = {
  utilityItems?: ComponentProps<typeof CmsContentArea>['items']
  className?: string
  ctx: GenericContext
}

export const SecondaryMenu : FunctionComponent<SecondaryMenuProps> = ({ utilityItems, className = "", ctx }) => {
  return (
    <ul className={`${className} hidden lg:flex py-2 items-stretch justify-end relative gap-2 xl:gap-4`}>
      <ThemePicker />
      <CmsContentArea items={ utilityItems } noWrapper itemWrapper={{ as: "li" }} ctx={ ctx } />
      <li><SiteSearch /></li>
    </ul>
  );
};

SecondaryMenu.displayName = "SecondaryMenu";

export default SecondaryMenu;