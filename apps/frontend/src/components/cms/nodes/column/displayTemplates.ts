//not-modified - Remove this line when making change to prevent it from being updated by the CLI tools
import type { LayoutProps, LayoutPropsSettingKeys, LayoutPropsSettingValues, CmsComponentProps } from "@remkoj/optimizely-cms-react"
import type { JSX, ComponentType } from "react"
import type CardColumnStyles from "./CardColumn/CardColumn.opti-style.json"
import type DefaultColumnStyles from "./DefaultColumn/DefaultColumn.opti-style.json"

export type CardColumnProps = LayoutProps<typeof CardColumnStyles>
export type CardColumnKeys = LayoutPropsSettingKeys<CardColumnProps>
export type CardColumnOptions<K extends CardColumnKeys> = LayoutPropsSettingValues<CardColumnProps, K>
export type CardColumnComponentProps<DT extends Record<string, any> = Record<string, any>> = Omit<CmsComponentProps<DT, CardColumnProps>,'children'> & JSX.IntrinsicElements['div']
export type CardColumnComponent<DT extends Record<string, any> = Record<string, any>> = ComponentType<CardColumnComponentProps<DT>>

export type DefaultColumnProps = LayoutProps<typeof DefaultColumnStyles>
export type DefaultColumnKeys = LayoutPropsSettingKeys<DefaultColumnProps>
export type DefaultColumnOptions<K extends DefaultColumnKeys> = LayoutPropsSettingValues<DefaultColumnProps, K>
export type DefaultColumnComponentProps<DT extends Record<string, any> = Record<string, any>> = Omit<CmsComponentProps<DT, DefaultColumnProps>,'children'> & JSX.IntrinsicElements['div']
export type DefaultColumnComponent<DT extends Record<string, any> = Record<string, any>> = ComponentType<DefaultColumnComponentProps<DT>>

export type ColumnLayoutProps = CardColumnProps | DefaultColumnProps
export type ColumnLayoutKeys = LayoutPropsSettingKeys<ColumnLayoutProps>
export type ColumnLayoutOptions<K extends ColumnLayoutKeys> = LayoutPropsSettingValues<ColumnLayoutProps,K>
export type ColumnComponentProps<DT extends Record<string, any> = Record<string, any>> = Omit<CmsComponentProps<DT, ColumnLayoutProps>,'children'> & JSX.IntrinsicElements['div']
export type ColumnComponent<DT extends Record<string, any> = Record<string, any>> = ComponentType<ColumnComponentProps<DT>>

export function isDefaultProps(props?: ColumnLayoutProps | null) : props is DefaultColumnProps
{
    return props?.template == "DefaultColumn"
}

export function isCardColumnProps(props?: ColumnLayoutProps | null) : props is CardColumnProps
{
    return props?.template == "CardColumn"
}

export function isDefaultColumnProps(props?: ColumnLayoutProps | null) : props is DefaultColumnProps
{
    return props?.template == "DefaultColumn"
}