import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react";
import { extractSettings } from "@remkoj/optimizely-cms-react/rsc";
import { type DefaultColumnProps } from "../displayTemplates";

import { 
    contentSpacingClasses, 
    justifyContentClasses, 
    alignContentClasses,
    minWidthClasses,
    overFlowClasses,
    showFromClasses
} from "./_enums";

export const DefaultColumn : CmsLayoutComponent<DefaultColumnProps> = ({ layoutProps, children }) => {
    const tpl = layoutProps?.template ?? "none"
    const baseClasses : string[] = ['vb:column vb:column:'+tpl+' flex-1']
    const cssClasses : string[] = ['flex flex-col']
    const { 
        contentSpacing = 'none', 
        justifyContent = 'start', 
        alignContent = 'start', 
        showFrom = 'always', 
        minWidth = 'auto', 
        overflow = 'full'
    } = extractSettings(layoutProps)

    // Basic visibility rules
    baseClasses.push(showFromClasses[showFrom])

    // Container styling
    cssClasses.push(contentSpacingClasses[contentSpacing])
    cssClasses.push(justifyContentClasses[justifyContent])
    cssClasses.push(alignContentClasses[alignContent])
    cssClasses.push(minWidthClasses[minWidth])
    cssClasses.push(overFlowClasses[overflow])
    const useChildContainer = overflow == 'right' || overflow == 'left'

    // Output container
    return useChildContainer ? <div className={ baseClasses.join(' ')+' relative' }>
        <div className={ 'relative top-0 ' + cssClasses.join(' ') }>
            { children }
        </div>
    </div> : <div className={ [...baseClasses, 'relative top-0', ...cssClasses].join(' ') }>{ children }</div>
}

export default DefaultColumn;