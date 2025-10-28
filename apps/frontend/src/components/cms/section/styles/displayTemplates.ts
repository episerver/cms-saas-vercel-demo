//not-modified - Remove this line when making change to prevent it from being updated by the CLI tools
import type { LayoutProps, LayoutPropsSettingKeys, LayoutPropsSettingValues, CmsComponentProps } from "@remkoj/optimizely-cms-react"
import type { JSX, ComponentType } from "react"
import type DefaultGridStyles from "./DefaultGrid/DefaultGrid.opti-style.json"

export type DefaultGridProps = LayoutProps<typeof DefaultGridStyles>
export type DefaultGridKeys = LayoutPropsSettingKeys<DefaultGridProps>
export type DefaultGridOptions<K extends DefaultGridKeys> = LayoutPropsSettingValues<DefaultGridProps, K>
export type DefaultGridComponentProps<DT extends Record<string, any> = Record<string, any>> = Omit<CmsComponentProps<DT, DefaultGridProps>,'children'> & JSX.IntrinsicElements['div']
export type DefaultGridComponent<DT extends Record<string, any> = Record<string, any>> = ComponentType<DefaultGridComponentProps<DT>>

export type SectionLayoutProps = DefaultGridProps
export type SectionLayoutKeys = LayoutPropsSettingKeys<SectionLayoutProps>
export type SectionLayoutOptions<K extends SectionLayoutKeys> = LayoutPropsSettingValues<SectionLayoutProps,K>
export type SectionComponentProps<DT extends Record<string, any> = Record<string, any>> = Omit<CmsComponentProps<DT, SectionLayoutProps>,'children'> & JSX.IntrinsicElements['div']
export type SectionComponent<DT extends Record<string, any> = Record<string, any>> = ComponentType<SectionComponentProps<DT>>

export function isDefaultProps(props?: SectionLayoutProps | null) : props is DefaultGridProps
{
    return props?.template == "DefaultGrid"
}

export function isDefaultGridProps(props?: SectionLayoutProps | null) : props is DefaultGridProps
{
    return props?.template == "DefaultGrid"
}