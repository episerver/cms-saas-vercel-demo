//not-modified - Remove this line when making change to prevent it from being updated by the CLI tools
import type { LayoutProps, LayoutPropsSettingKeys, LayoutPropsSettingValues, CmsComponentProps } from "@remkoj/optimizely-cms-react"
import type { JSX, ComponentType } from "react"
import type DefaultParagraphStyles from "./DefaultParagraph.opti-style.json"

export type DefaultParagraphProps = LayoutProps<typeof DefaultParagraphStyles>
export type DefaultParagraphKeys = LayoutPropsSettingKeys<DefaultParagraphProps>
export type DefaultParagraphOptions<K extends DefaultParagraphKeys> = LayoutPropsSettingValues<DefaultParagraphProps, K>
export type DefaultParagraphComponentProps<DT extends Record<string, any> = Record<string, any>> = Omit<CmsComponentProps<DT, DefaultParagraphProps>,'children'> & JSX.IntrinsicElements['div']
export type DefaultParagraphComponent<DT extends Record<string, any> = Record<string, any>> = ComponentType<DefaultParagraphComponentProps<DT>>

export type ParagraphElementLayoutProps = DefaultParagraphProps
export type ParagraphElementLayoutKeys = LayoutPropsSettingKeys<ParagraphElementLayoutProps>
export type ParagraphElementLayoutOptions<K extends ParagraphElementLayoutKeys> = LayoutPropsSettingValues<ParagraphElementLayoutProps,K>
export type ParagraphElementComponentProps<DT extends Record<string, any> = Record<string, any>> = Omit<CmsComponentProps<DT, ParagraphElementLayoutProps>,'children'> & JSX.IntrinsicElements['div']
export type ParagraphElementComponent<DT extends Record<string, any> = Record<string, any>> = ComponentType<ParagraphElementComponentProps<DT>>

export function isDefaultProps(props?: ParagraphElementLayoutProps | null) : props is DefaultParagraphProps
{
    return props?.template == "DefaultParagraph"
}

export function isDefaultParagraphProps(props?: ParagraphElementLayoutProps | null) : props is DefaultParagraphProps
{
    return props?.template == "DefaultParagraph"
}