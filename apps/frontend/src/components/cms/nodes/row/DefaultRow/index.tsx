import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react";
import { extractSettings } from "@remkoj/optimizely-cms-react/rsc";
import { DefaultRowProps } from "../displayTemplates";

enum RowFromClasses {
    md = 'md:flex-row',
    lg = 'lg:flex-row',
    xl = 'xl:flex-row',
}

enum ContentSpacingClasses {
    small = 'gap-2',
    medium = 'gap-4',
    large = 'gap-4 lg:gap-8',
    xl = 'gap-4 lg:gap-24',
    xxl = 'gap-4 lg:gap-72',
    none = 'gap-0'
}

enum JustifyContentClasses {
    center = 'justify-center justify-items-center',
    end = 'justify-end justify-items-end',
    start = 'justify-start justify-items-start',
    stretch = 'justify-stretch justify-items-stretch'
}

enum AlignContentClasses {
    center = 'content-center items-center',
    end = 'content-end items-end',
    start = 'content-start items-start',
    stretch = 'content-stretch items-stretch'
}

enum VerticalSpacingClasses {
    small = "my-2",
    medium = "my-4",
    large = "my-8",
    verylarge = 'lg:my-40 my-20',
    none = "my-0"
}

enum WidthClasses {
    full = "",
    container = "container mx-auto"
}

enum TextClasses {
    inherit = "",
    light = "with-light-text",
    lightShadow = "with-light-text with-text-shadow",
    dark = "with-dark-text"
}

export const DefaultRow : CmsLayoutComponent<DefaultRowProps> = ({ contentLink, layoutProps, children }) => {
    const { 
        contentSpacing = "none", 
        justifyContent = "start", 
        alignContent = "start", 
        verticalSpacing = "small",
        showAsRowFrom = "lg",
        maxWidth = "full",
        textColor = "inherit"
    } = extractSettings(layoutProps)

    const spacing = ContentSpacingClasses[contentSpacing] ?? ''
    const justify = JustifyContentClasses[justifyContent] ?? ''
    const align = AlignContentClasses[alignContent] ?? ''
    const vertical = VerticalSpacingClasses[verticalSpacing] ?? ''
    const rowFrom = RowFromClasses[showAsRowFrom] ?? ''
    const width = WidthClasses[maxWidth] ?? ''
    const text = TextClasses[textColor] ?? ''

    return (<div className={`vb:row vb:row:DefaultRow flex-1 flex flex-col flex-nowrap ${ rowFrom } ${ justify } ${ align } ${ vertical } ${ spacing } ${ width } ${ text }`}>{ children }</div>);
}

export default DefaultRow;