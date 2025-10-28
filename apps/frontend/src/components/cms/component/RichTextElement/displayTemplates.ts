//not-modified - Remove this line when making change to prevent it from being updated by the CLI tools
import type { LayoutProps, LayoutPropsSettingKeys, LayoutPropsSettingValues, CmsComponentProps } from "@remkoj/optimizely-cms-react"
import type { JSX, ComponentType } from "react"
import type DefaultRichTextStyles from "./DefaultRichText.opti-style.json"

export type DefaultRichTextProps = LayoutProps<typeof DefaultRichTextStyles>
export type DefaultRichTextKeys = LayoutPropsSettingKeys<DefaultRichTextProps>
export type DefaultRichTextOptions<K extends DefaultRichTextKeys> = LayoutPropsSettingValues<DefaultRichTextProps, K>
export type DefaultRichTextComponentProps<DT extends Record<string, any> = Record<string, any>> = Omit<CmsComponentProps<DT, DefaultRichTextProps>,'children'> & JSX.IntrinsicElements['div']
export type DefaultRichTextComponent<DT extends Record<string, any> = Record<string, any>> = ComponentType<DefaultRichTextComponentProps<DT>>

export type RichTextElementLayoutProps = DefaultRichTextProps
export type RichTextElementLayoutKeys = LayoutPropsSettingKeys<RichTextElementLayoutProps>
export type RichTextElementLayoutOptions<K extends RichTextElementLayoutKeys> = LayoutPropsSettingValues<RichTextElementLayoutProps,K>
export type RichTextElementComponentProps<DT extends Record<string, any> = Record<string, any>> = Omit<CmsComponentProps<DT, RichTextElementLayoutProps>,'children'> & JSX.IntrinsicElements['div']
export type RichTextElementComponent<DT extends Record<string, any> = Record<string, any>> = ComponentType<RichTextElementComponentProps<DT>>

export function isDefaultProps(props?: RichTextElementLayoutProps | null) : props is DefaultRichTextProps
{
    return props?.template == "DefaultRichText"
}

export function isDefaultRichTextProps(props?: RichTextElementLayoutProps | null) : props is DefaultRichTextProps
{
    return props?.template == "DefaultRichText"
}