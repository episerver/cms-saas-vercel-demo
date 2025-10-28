//not-modified - Remove this line when making change to prevent it from being updated by the CLI tools
import type { LayoutProps, LayoutPropsSettingKeys, LayoutPropsSettingValues, CmsComponentProps } from "@remkoj/optimizely-cms-react"
import type { JSX, ComponentType } from "react"
import type CTAElementDefaultStylesStyles from "./CTAElementDefaultStyles.opti-style.json"
import type CTAElementAnimatedStylesStyles from "./CTAElementAnimatedStyles.opti-style.json"

export type CTAElementDefaultStylesProps = LayoutProps<typeof CTAElementDefaultStylesStyles>
export type CTAElementDefaultStylesKeys = LayoutPropsSettingKeys<CTAElementDefaultStylesProps>
export type CTAElementDefaultStylesOptions<K extends CTAElementDefaultStylesKeys> = LayoutPropsSettingValues<CTAElementDefaultStylesProps, K>
export type CTAElementDefaultStylesComponentProps<DT extends Record<string, any> = Record<string, any>> = Omit<CmsComponentProps<DT, CTAElementDefaultStylesProps>,'children'> & JSX.IntrinsicElements['div']
export type CTAElementDefaultStylesComponent<DT extends Record<string, any> = Record<string, any>> = ComponentType<CTAElementDefaultStylesComponentProps<DT>>

export type CTAElementAnimatedStylesProps = LayoutProps<typeof CTAElementAnimatedStylesStyles>
export type CTAElementAnimatedStylesKeys = LayoutPropsSettingKeys<CTAElementAnimatedStylesProps>
export type CTAElementAnimatedStylesOptions<K extends CTAElementAnimatedStylesKeys> = LayoutPropsSettingValues<CTAElementAnimatedStylesProps, K>
export type CTAElementAnimatedStylesComponentProps<DT extends Record<string, any> = Record<string, any>> = Omit<CmsComponentProps<DT, CTAElementAnimatedStylesProps>,'children'> & JSX.IntrinsicElements['div']
export type CTAElementAnimatedStylesComponent<DT extends Record<string, any> = Record<string, any>> = ComponentType<CTAElementAnimatedStylesComponentProps<DT>>

export type CTAElementLayoutProps = CTAElementDefaultStylesProps | CTAElementAnimatedStylesProps
export type CTAElementLayoutKeys = LayoutPropsSettingKeys<CTAElementLayoutProps>
export type CTAElementLayoutOptions<K extends CTAElementLayoutKeys> = LayoutPropsSettingValues<CTAElementLayoutProps,K>
export type CTAElementComponentProps<DT extends Record<string, any> = Record<string, any>> = Omit<CmsComponentProps<DT, CTAElementLayoutProps>,'children'> & JSX.IntrinsicElements['div']
export type CTAElementComponent<DT extends Record<string, any> = Record<string, any>> = ComponentType<CTAElementComponentProps<DT>>

export function isDefaultProps(props?: CTAElementLayoutProps | null) : props is CTAElementDefaultStylesProps
{
    return props?.template == "CTAElementDefaultStyles"
}

export function isCTAElementDefaultStylesProps(props?: CTAElementLayoutProps | null) : props is CTAElementDefaultStylesProps
{
    return props?.template == "CTAElementDefaultStyles"
}

export function isCTAElementAnimatedStylesProps(props?: CTAElementLayoutProps | null) : props is CTAElementAnimatedStylesProps
{
    return props?.template == "CTAElementAnimatedStyles"
}