import type { CmsComponent } from "@remkoj/optimizely-dxp-react"

export const Fragment : CmsComponent = props => 
{
    return props.children
}
Fragment.displayName = "Undefined component type"

export default Fragment