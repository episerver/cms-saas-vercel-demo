'use client'
import { useMemo, type FunctionComponent, type JSX } from "react";
import { createFieldValidator, ValidatorConfig, useValidatedValue } from "./validators.client";
import { cn } from "@/lib/utils";

export type TextboxProps = JSX.IntrinsicElements['input'] & { 
    label?: string | null, 
    validatorConfig?: ValidatorConfig[] | string | null
}
export const Textbox : FunctionComponent<TextboxProps> = ({ className, validatorConfig, value, children, label, id, name, ...inputProps}) =>
{
    const validate = useMemo(() => createFieldValidator(validatorConfig, label), [validatorConfig, label])
    const [ currentValue, validationResult, setCurrentValue ] = useValidatedValue(value??"", name ?? id ?? 'unnamed-field',validate)
    return <>
        {label && <label htmlFor={id}>{ label }:</label>}
        <input id={id} name={name} value={currentValue} className={cn(className, "border rounded-lg px-2 py-1", validationResult.valid ? "border-vulcan bg-white" : "border-red-800 bg-red-100 text-red-900")} {...inputProps} onChange={(e) => setCurrentValue(e?.target?.value ?? "")}>{ children }</input>
        { !validationResult.valid && <div>{validationResult.messages.map(msg => <div key={msg} className="text-red-800">{msg}</div>)}</div>}
    </>
}