//not-modified - Remove this line when making change to prevent it from being updated by the CLI tools
import type { LayoutProps, LayoutPropsSettingKeys, LayoutPropsSettingValues, CmsComponentProps } from "@remkoj/optimizely-cms-react"
import type { JSX, ComponentType } from "react"
import type AnimatedHeadingStylesStyles from "./AnimatedHeadingStyles.opti-style.json"
import type HeadingStylesStyles from "./HeadingStyles.opti-style.json"

export type AnimatedHeadingStylesProps = LayoutProps<typeof AnimatedHeadingStylesStyles>
export type AnimatedHeadingStylesKeys = LayoutPropsSettingKeys<AnimatedHeadingStylesProps>
export type AnimatedHeadingStylesOptions<K extends AnimatedHeadingStylesKeys> = LayoutPropsSettingValues<AnimatedHeadingStylesProps, K>
export type AnimatedHeadingStylesComponentProps<DT extends Record<string, any> = Record<string, any>> = Omit<CmsComponentProps<DT, AnimatedHeadingStylesProps>,'children'> & JSX.IntrinsicElements['div']
export type AnimatedHeadingStylesComponent<DT extends Record<string, any> = Record<string, any>> = ComponentType<AnimatedHeadingStylesComponentProps<DT>>

export type HeadingStylesProps = LayoutProps<typeof HeadingStylesStyles>
export type HeadingStylesKeys = LayoutPropsSettingKeys<HeadingStylesProps>
export type HeadingStylesOptions<K extends HeadingStylesKeys> = LayoutPropsSettingValues<HeadingStylesProps, K>
export type HeadingStylesComponentProps<DT extends Record<string, any> = Record<string, any>> = Omit<CmsComponentProps<DT, HeadingStylesProps>,'children'> & JSX.IntrinsicElements['div']
export type HeadingStylesComponent<DT extends Record<string, any> = Record<string, any>> = ComponentType<HeadingStylesComponentProps<DT>>

export type HeadingElementLayoutProps = AnimatedHeadingStylesProps | HeadingStylesProps
export type HeadingElementLayoutKeys = LayoutPropsSettingKeys<HeadingElementLayoutProps>
export type HeadingElementLayoutOptions<K extends HeadingElementLayoutKeys> = LayoutPropsSettingValues<HeadingElementLayoutProps,K>
export type HeadingElementComponentProps<DT extends Record<string, any> = Record<string, any>> = Omit<CmsComponentProps<DT, HeadingElementLayoutProps>,'children'> & JSX.IntrinsicElements['div']
export type HeadingElementComponent<DT extends Record<string, any> = Record<string, any>> = ComponentType<HeadingElementComponentProps<DT>>

export function isDefaultProps(props?: HeadingElementLayoutProps | null) : props is HeadingStylesProps
{
    return props?.template == "HeadingStyles"
}

export function isAnimatedHeadingStylesProps(props?: HeadingElementLayoutProps | null) : props is AnimatedHeadingStylesProps
{
    return props?.template == "AnimatedHeadingStyles"
}

export function isHeadingStylesProps(props?: HeadingElementLayoutProps | null) : props is HeadingStylesProps
{
    return props?.template == "HeadingStyles"
}