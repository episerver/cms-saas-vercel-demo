import { extractSettings } from "@remkoj/optimizely-cms-react/components";
import { DefaultGridComponent } from "../displayTemplates";

enum GridWidths {
    default = "container mx-auto px-8",
    narrow = "max-w-3xl w-full mx-auto px-8",
    wide = "max-w-7xl w-full mx-auto px-8",
    full = "w-full"
}

enum VSpacings {
    small = "py-4 md:py-8 lg:py-12",
    large = "py-8 md:py-16 lg:py-24"
}

export const DefaultGrid : DefaultGridComponent = ({ layoutProps, children }) => {
    const {
        gridWidth = "default",
        vSpacing = "default"
    } = extractSettings(layoutProps);

    const width = GridWidths[gridWidth] ?? ''
    const spacing = VSpacings[vSpacing] ?? ''

    return <section className={`vb:section vb:section:DefaultGrid ${ width } flex flex-col ${ spacing}`}>
        { children }
    </section>;
}

export default DefaultGrid;