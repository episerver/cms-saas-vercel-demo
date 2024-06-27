import { type PropsWithChildren, type FunctionComponent } from "react"

export const Fragment : FunctionComponent<PropsWithChildren<{}>> = props => 
{
    return props.children
}
Fragment.displayName = "Undefined component type"

export default Fragment