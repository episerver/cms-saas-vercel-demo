'use client'
import { type FunctionComponent, type DetailedHTMLProps, type HTMLAttributes } from "react"
import { RichText, DefaultComponents, type TypedNode } from "@remkoj/optimizely-cms-react/components"
import { DefaultComponentFactory } from "@remkoj/optimizely-cms-react"
import { isNodeInput, isNonEmptyString } from "./_lib"

const richTextFactory = new DefaultComponentFactory(DefaultComponents)

export type ItemTextProps = {
    text: TypedNode | string | undefined | null
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const ItemTextComponent : FunctionComponent<ItemTextProps> = ({ text, ...divProps }) => {
    return isNodeInput(text) ? 
        <RichText text={ text } factory={ richTextFactory } {...divProps } /> : 
        <div { ...divProps }>{ isNonEmptyString(text) ? text : ''}</div>
}

export default ItemTextComponent