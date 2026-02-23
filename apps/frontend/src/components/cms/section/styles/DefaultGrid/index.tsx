import { extractSettings } from "@remkoj/optimizely-cms-react/rsc";
import { DefaultGridComponent } from "../displayTemplates";

enum GridWidths {
  default = "container mx-auto px-8",
  narrow = " w-full mx-auto px-8",
  wide = "max-w-7xl w-full mx-auto px-8",
  full = "w-full",
}

enum VSpacings {
  small = "py-4 md:py-8 lg:py-12",
  large = "py-8 md:py-16 lg:py-24",
}

enum ColorClasses {
  black = "on-vulcan",
  blue = "on-azure dark:border-y-4",
  green = "on-verdansk dark:border-y-4",
  orange = "on-tangy dark:border-y-4",
  purple = "on-people-eater dark:border-y-4",
  lightred = "on-paleruby dark:border-y-4",
  lightgrey = "on-light-grey dark:border-y-4",
}

enum TextAlignClasses {
  left = "",
  center = "section-align-center",
  right = "section-align-right",
}

export const DefaultGrid: DefaultGridComponent = ({
  data,
  layoutProps,
  children,
  ...htmlProps
}) => {
  const {
    gridWidth = "default",
    vSpacing = "default",
    sectionColor = "default",
    textAlign = "left",
  } = extractSettings(layoutProps);

  const textAlignClass = TextAlignClasses[textAlign as keyof typeof TextAlignClasses] ?? "";

  // Standard (no-color section)
  if (sectionColor == "default") {
    const cssClasses = ["vb:section vb:section:DefaultGrid relative"];
    cssClasses.push(GridWidths[gridWidth] ?? "");
    cssClasses.push("flex flex-col");
    cssClasses.push(VSpacings[vSpacing] ?? "");
    cssClasses.push(textAlignClass);

    return (
      <section
        className={cssClasses.filter((x) => x && x.length > 0).join(" ")}
        {...htmlProps}
      >
        {children}
      </section>
    );
  }

  const mainClasses = [
    "vb:section vb:section:DefaultGrid flex flex-col w-full",
  ];
  mainClasses.push(VSpacings[vSpacing] ?? "");
  mainClasses.push(ColorClasses[sectionColor] ?? "");
  mainClasses.push(textAlignClass);
  return (
    <section
      className={mainClasses.filter((x) => x && x.length > 0).join(" ")}
      {...htmlProps}
    >
      <div className={GridWidths[gridWidth] ?? ""}>{children}</div>
    </section>
  );
};

export default DefaultGrid;
