import { type FunctionComponent, type ComponentProps, Suspense } from "react";
import { CmsContentArea } from "@remkoj/optimizely-cms-react/rsc";
import ThemePicker from "./_themepicker";
import SiteSearch from "./_site-search-server";
import { layout_configuration } from "@/flags";

export type SecondaryMenuProps = {
  utilityItems?: ComponentProps<typeof CmsContentArea>['items']
  className?: string
}

export const SecondaryMenu : FunctionComponent<SecondaryMenuProps> = ({ utilityItems, className = "" }) => {
  return (
    <ul className={`${className} hidden lg:flex py-2 items-stretch justify-end relative gap-2 xl:gap-4`}>
      <Suspense fallback={<></>}><ThemePickerWrapper /></Suspense>
      <CmsContentArea items={ utilityItems } noWrapper itemWrapper={{ as: "li" }} />
      <li><Suspense fallback={<></>}><SiteSearch /></Suspense></li>
    </ul>
  );
};

SecondaryMenu.displayName = "SecondaryMenu";

export default SecondaryMenu;

async function ThemePickerWrapper() 
{
  const config = (await layout_configuration())
  if (config.theme_switcher)
    return <li><ThemePicker /></li>
  return null
}