'use client'
import { type FunctionComponent, type JSX, type MouseEvent } from "react";
import { useForm } from "@/components/shared/forms";
import { cn } from "@/lib/utils";

export type SubmitButtonProps = Omit<JSX.IntrinsicElements['button'], 'type'|'disabled'>

export const SubmitButton : FunctionComponent<SubmitButtonProps> = ({ children, className, ...buttonProps }) => 
{
    const formContainer = useForm()

    function onClickHandler(e: MouseEvent<HTMLButtonElement>)
    {
        formContainer.submit()

        // Ensure we're the last handler of the event
        e.preventDefault()
        e.stopPropagation()
        return false
    }

    return <button className={cn("btn--secondary",className)} {...buttonProps} disabled={!formContainer.formValid} onClick={e => onClickHandler(e)}>
        <span className="btn__content">{ children }</span>
    </button>
}

export type ResetButtonProps = Omit<JSX.IntrinsicElements['button'], 'type'>

export const ResetButton : FunctionComponent<ResetButtonProps> = ({ children, className, ...buttonProps }) => 
{
    const formContainer = useForm()

    function onClickHandler(e: MouseEvent<HTMLButtonElement>)
    {
        formContainer.reset()

        // Ensure we're the last handler of the event
        e.preventDefault()
        e.stopPropagation()
        return false
    }

    return <button className={cn("btn--secondary",className)} {...buttonProps} onClick={e => onClickHandler(e)}>
        <span className="btn__content">{ children }</span>
    </button>
}