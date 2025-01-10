import {
  extractSettings,
  type CmsLayoutComponent,
} from "@remkoj/optimizely-cms-react/rsc";
import { type BackgroundRowProps } from "../displayTemplates";

export const BackgroundRow: CmsLayoutComponent<BackgroundRowProps> = ({
  layoutProps,
  children,
}) => {
  const {
    contentOverflow = "hide",
    verticalAlignContent = "top",
    backgroundMask = "none",
  } = extractSettings(layoutProps);

  const rowClasses = [
    "vb:row vb:row:BackgroundRow absolute -z-10 top-0 left-0 w-full h-full",
  ];
  const containerClasses = ["w-full absolute"];
  if (contentOverflow == "hide") rowClasses.push("overflow-y-hidden");
  switch (verticalAlignContent) {
    case "top":
      containerClasses.push("top-0");
      break;
    case "middle":
      containerClasses.push("top-1/2 origin-center -translate-y-1/2");
      break;
    case "bottom":
      containerClasses.push("bottom-0");
      break;
  }

  const showMask = backgroundMask != "none";
  const maskClasses = ["absolute w-full h-full top-0 left-0"];
  switch (backgroundMask) {
    case "dark":
      maskClasses.push("bg-vulcan/75");
      break;
    case "light":
      maskClasses.push("bg-ghost-white/75 dark:bg-vulcan/75");
      break;
  }

  return (
    <div className={rowClasses.join(" ")}>
      <div className={containerClasses.join(" ")}>
        {showMask ? (
          <div className="relative h-fit">{children}<div className={maskClasses.join(" ")} /></div>
        ) : (
          <>{ children }</>
        )}
      </div>
    </div>
  );
};

export default BackgroundRow;
