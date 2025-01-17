'use client'
import { type FunctionComponent } from "react"
import { CloseButton } from "@headlessui/react"
import { Button, type ButtonProps } from "@/components/shared/button"

export type ItemButtonProps = Omit<ButtonProps, 'url'> & {
    url?: string
}

export const ItemButton : FunctionComponent<ItemButtonProps> = ({ children, ...props}) => {
    return <CloseButton as={Button} {...props}>{children}</CloseButton>
}

export default ItemButton