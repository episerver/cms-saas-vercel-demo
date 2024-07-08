import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react";
import { extractSettings } from "@remkoj/optimizely-cms-react/components";
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
    center = 'justify-center',
    end = 'justify-end',
    start = 'justify-start'
}

enum AlignContentClasses {
    center = 'content-center',
    end = 'content-end',
    start = 'content-start'
}

enum VerticalSpacingClasses {
    small = "my-2",
    medium = "my-4",
    large = "my-8",
    verylarge = 'lg:my-40 my-20',
    none = "my-0"
}

export const DefaultRow : CmsLayoutComponent<DefaultRowProps> = ({ contentLink, layoutProps, children }) => {
    const { 
        contentSpacing = "none", 
        justifyContent = "start", 
        alignContent = "start", 
        verticalSpacing = "small",
        showAsRowFrom = "lg"
    } = extractSettings(layoutProps)

    const spacing = ContentSpacingClasses[contentSpacing] ?? ''
    const justify = JustifyContentClasses[justifyContent] ?? ''
    const align = AlignContentClasses[alignContent] ?? ''
    const vertical = VerticalSpacingClasses[verticalSpacing] ?? ''
    const rowFrom = RowFromClasses[showAsRowFrom] ?? ''

    return (<div className={`vb:row vb:row:DefaultRow flex-1 flex flex-col flex-nowrap ${ rowFrom } ${ justify } ${ align } ${ vertical } ${ spacing }`}>{ children }</div>);
}

export default DefaultRow;