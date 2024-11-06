import { type FunctionComponent, type ComponentProps } from "react";
import { CmsContentArea } from "@remkoj/optimizely-cms-react/rsc";
import { ThemePicker } from "./_themepicker";
import { SiteSearch } from "./_site-search";

export type SecondaryMenuProps = {
  utilityItems?: ComponentProps<typeof CmsContentArea>['items']
  className?: string
}

export const SecondaryMenu : FunctionComponent<SecondaryMenuProps> = ({ utilityItems, className = "" }) => {
  return (
    <ul className={`${className} hidden lg:flex py-2 items-center justify-end relative gap-2 xl:gap-4`}>
      <li><ThemePicker /></li>
      <CmsContentArea items={ utilityItems } noWrapper itemWrapper={{ as: "li" }} />
      <li><SiteSearch /></li>
    </ul>
  );
};

SecondaryMenu.displayName = "SecondaryMenu";

export default SecondaryMenu;
