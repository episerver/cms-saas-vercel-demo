//not-modified - Remove this line when making change to prevent it from being updated by the CLI tools
import type { LayoutProps, LayoutPropsSettingKeys, LayoutPropsSettingValues, CmsComponentProps } from "@remkoj/optimizely-cms-react"
import type { JSX, ComponentType } from "react"
import type DefaultVideoStyles from "./DefaultVideo.opti-style.json"

export type DefaultVideoProps = LayoutProps<typeof DefaultVideoStyles>
export type DefaultVideoKeys = LayoutPropsSettingKeys<DefaultVideoProps>
export type DefaultVideoOptions<K extends DefaultVideoKeys> = LayoutPropsSettingValues<DefaultVideoProps, K>
export type DefaultVideoComponentProps<DT extends Record<string, any> = Record<string, any>> = Omit<CmsComponentProps<DT, DefaultVideoProps>,'children'> & JSX.IntrinsicElements['div']
export type DefaultVideoComponent<DT extends Record<string, any> = Record<string, any>> = ComponentType<DefaultVideoComponentProps<DT>>

export type VideoElementLayoutProps = DefaultVideoProps
export type VideoElementLayoutKeys = LayoutPropsSettingKeys<VideoElementLayoutProps>
export type VideoElementLayoutOptions<K extends VideoElementLayoutKeys> = LayoutPropsSettingValues<VideoElementLayoutProps,K>
export type VideoElementComponentProps<DT extends Record<string, any> = Record<string, any>> = Omit<CmsComponentProps<DT, VideoElementLayoutProps>,'children'> & JSX.IntrinsicElements['div']
export type VideoElementComponent<DT extends Record<string, any> = Record<string, any>> = ComponentType<VideoElementComponentProps<DT>>

export function isDefaultProps(props?: VideoElementLayoutProps | null) : props is DefaultVideoProps
{
    return props?.template == "DefaultVideo"
}

export function isDefaultVideoProps(props?: VideoElementLayoutProps | null) : props is DefaultVideoProps
{
    return props?.template == "DefaultVideo"
}