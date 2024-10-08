import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { LayoutContainerBlockDataFragmentDoc, type LayoutContainerBlockDataFragment } from "@/gql/graphql";
import { columnClassMap, gapSizeClassMap, colorMap, paddingTopMap, marginBottomMap, marginTopMap, paddingBottomMap } from './_maps'
import { CmsContentArea, getServerContext } from "@remkoj/optimizely-cms-react/rsc";

/**
 * Layout
 * Allows you to specify the layout for the blocks that come after this block
 */
export const LayoutContainerBlockComponent : CmsComponent<Partial<LayoutContainerBlockDataFragment>> = ({ data, children }) => {
    const { inEditMode } = getServerContext()
    const items = children ? undefined : data?.LayoutContentArea

    const {
        columns = 1,
        paddingTop = "none",
        paddingBottom = "none",
        marginTop = "medium",
        marginBottom = "medium",
        backgroundImage,
        gap = "small",
        containerColor: color,
    } = data;

    const additionalClasses: string[] = [];
    const innerClasses: string[] = [];
    let backgroundStyle = {};
  
    if (
        backgroundImage &&
        typeof backgroundImage === "object" &&
        "url" in backgroundImage
    ) {
        // Set background image style
        backgroundStyle = {
            backgroundImage: `url(${backgroundImage.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        };
    }

    // Apply classes from maps
    if (gap && gapSizeClassMap[gap]) innerClasses.push(gapSizeClassMap[gap])
    if (columnClassMap[columns ?? 1]) innerClasses.push(columnClassMap[columns ?? 1])
    if (color && colorMap[color]) additionalClasses.push(colorMap[color])
    if (paddingTop && paddingTopMap[paddingTop]) additionalClasses.push(paddingTopMap[paddingTop])
    if (paddingBottom && paddingBottomMap[paddingBottom]) additionalClasses.push(paddingBottomMap[paddingBottom])
    if (marginTop && marginTopMap[marginTop]) additionalClasses.push(marginTopMap[marginTop])
    if (marginBottom && marginBottomMap[marginBottom]) additionalClasses.push(marginBottomMap[marginBottom])

    if (backgroundImage && typeof backgroundImage === "object") {
        additionalClasses.push(
            "relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-opacity-70"
        );
        innerClasses.push("z-10 relative");
    }

    return <section className={`outer-padding w-full ${additionalClasses.join(" ")}`} style={{ ...backgroundStyle }} data-epi-edit={inEditMode ? "LayoutContentArea" : undefined} >
        <div className={`container mx-auto place-items-center grid ${innerClasses.join(" ")}`}>
            { children ? children : items && <CmsContentArea className={""} fieldName="LayoutContentArea" items={items} /> }
        </div>
    </section>      
}
LayoutContainerBlockComponent.displayName = "Layout (Component/LayoutContainerBlock)"
LayoutContainerBlockComponent.getDataFragment = () => ['LayoutContainerBlockData', LayoutContainerBlockDataFragmentDoc]

export default LayoutContainerBlockComponent