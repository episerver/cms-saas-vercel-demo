//not-modified - Remove this line when making change to prevent it from being updated by the CLI tools
import type { LayoutProps, LayoutPropsSettingKeys, LayoutPropsSettingValues, CmsComponentProps } from "@remkoj/optimizely-cms-react"
import type { JSX, ComponentType } from "react"
import type IconImageElementStyles from "./IconImageElement.opti-style.json"
import type DefaultImageElementStyles from "./DefaultImageElement.opti-style.json"

export type IconImageElementProps = LayoutProps<typeof IconImageElementStyles>
export type IconImageElementKeys = LayoutPropsSettingKeys<IconImageElementProps>
export type IconImageElementOptions<K extends IconImageElementKeys> = LayoutPropsSettingValues<IconImageElementProps, K>
export type IconImageElementComponentProps<DT extends Record<string, any> = Record<string, any>> = Omit<CmsComponentProps<DT, IconImageElementProps>,'children'> & JSX.IntrinsicElements['div']
export type IconImageElementComponent<DT extends Record<string, any> = Record<string, any>> = ComponentType<IconImageElementComponentProps<DT>>

export type DefaultImageElementProps = LayoutProps<typeof DefaultImageElementStyles>
export type DefaultImageElementKeys = LayoutPropsSettingKeys<DefaultImageElementProps>
export type DefaultImageElementOptions<K extends DefaultImageElementKeys> = LayoutPropsSettingValues<DefaultImageElementProps, K>
export type DefaultImageElementComponentProps<DT extends Record<string, any> = Record<string, any>> = Omit<CmsComponentProps<DT, DefaultImageElementProps>,'children'> & JSX.IntrinsicElements['div']
export type DefaultImageElementComponent<DT extends Record<string, any> = Record<string, any>> = ComponentType<DefaultImageElementComponentProps<DT>>

export type ImageElementLayoutProps = IconImageElementProps | DefaultImageElementProps
export type ImageElementLayoutKeys = LayoutPropsSettingKeys<ImageElementLayoutProps>
export type ImageElementLayoutOptions<K extends ImageElementLayoutKeys> = LayoutPropsSettingValues<ImageElementLayoutProps,K>
export type ImageElementComponentProps<DT extends Record<string, any> = Record<string, any>> = Omit<CmsComponentProps<DT, ImageElementLayoutProps>,'children'> & JSX.IntrinsicElements['div']
export type ImageElementComponent<DT extends Record<string, any> = Record<string, any>> = ComponentType<ImageElementComponentProps<DT>>

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