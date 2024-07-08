import { type CmsLayoutComponent } from "@remkoj/optimizely-cms-react"
import { CmsEditable } from '@remkoj/optimizely-cms-react/rsc'

export const VisualBuilderNode : CmsLayoutComponent = ({ contentLink, layoutProps, children }) =>
{
    if (layoutProps?.layoutType == "experience")
        return children

    const className = `vb:${layoutProps?.layoutType}`
    if (layoutProps?.layoutType == "section")
        return <CmsEditable as="div" className={ className } cmsId={ contentLink.key }>{ children }</CmsEditable>
    return <div className={ className }>{ children }</div>
}

export default VisualBuilderNode