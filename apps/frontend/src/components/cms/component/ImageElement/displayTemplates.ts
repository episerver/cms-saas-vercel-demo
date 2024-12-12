import type { LayoutProps } from "@remkoj/optimizely-cms-react"
import type { ReactNode } from "react"
import type IconImageElementStyles from "./IconImageElement.opti-style.json"
import type DefaultImageElementStyles from "./DefaultImageElement.opti-style.json"

export type IconImageElementProps = LayoutProps<typeof IconImageElementStyles>
export type IconImageElementComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: IconImageElementProps | undefined
} & JSX.IntrinsicElements['div']
export type IconImageElementComponent<DT extends Record<string, any> = Record<string, any>> = (props: IconImageElementComponentProps<DT>) => ReactNode

export type DefaultImageElementProps = LayoutProps<typeof DefaultImageElementStyles>
export type DefaultImageElementComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: DefaultImageElementProps | undefined
} & JSX.IntrinsicElements['div']
export type DefaultImageElementComponent<DT extends Record<string, any> = Record<string, any>> = (props: DefaultImageElementComponentProps<DT>) => ReactNode


export type ImageElementLayoutProps = IconImageElementProps | DefaultImageElementProps
export type ImageElementComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends ImageElementLayoutProps = ImageElementLayoutProps> = {
    data: DT
    layoutProps: LP | undefined
} & JSX.IntrinsicElements['div']

export type ImageElementComponent<DT extends Record<string, any> = Record<string, any>, LP extends ImageElementLayoutProps = ImageElementLayoutProps> = (props: ImageElementComponentProps<DT,LP>) => ReactNode

export function isDefaultProps(props?: ImageElementLayoutProps | null) : props is DefaultImageElementProps
{
    return props?.template == "DefaultImageElement"
}

export function isIconImageElementProps(props?: ImageElementLayoutProps | null) : props is IconImageElementProps
{
    return props?.template == "IconImageElement"
}

export function isDefaultImageElementProps(props?: ImageElementLayoutProps | null) : props is DefaultImageElementProps
{
    return props?.template == "DefaultImageElement"
}