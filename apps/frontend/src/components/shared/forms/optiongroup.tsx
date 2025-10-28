'use client'
import { HTMLInputTypeAttribute, useId, useMemo, useState, type FunctionComponent } from "react"
import slugify from "@sindresorhus/slugify"
import { cn } from "@/lib/utils"
import { useValidatedValue, ValidatorConfig, createFieldValidator } from "./validators.client"

export type OptionGroupOptions = { label: string, value: string, selected: boolean}[]

export type OptionGroupProps = {
    className?: string
    id?: string
    name?: string
    label?: string | null
    multiselect?: boolean
    validatorConfig?: ValidatorConfig[] | string | null
    options: OptionGroupOptions
}

export const OptionGroup : FunctionComponent<OptionGroupProps> = ({ 
    className,
    id,
    name,
    multiselect = false,
    options = [],
    validatorConfig,
    label
}) =>
{
    const genId = useId()
    const fieldId = useMemo(() => id || genId, [id, genId])
    const fieldName = useMemo(() => slugify(name || fieldId), [fieldId, name])
    const validator = useMemo(() => createFieldValidator(validatorConfig, label), [validatorConfig,label])
    const inputBoxType : HTMLInputTypeAttribute = useMemo(() => multiselect ? "checkbox" : "radio", [ multiselect ])
    const [checkedOptions, validationResult, setCheckedOptions] = useValidatedValue(() => options.filter(x => x.selected).map(x => x.value ), fieldName, validator)

    return <div className={cn("option-group", className)}>
        {options.map(option => {
            const slug = slugify(option.value)
            const fieldOptionId = fieldId+fieldName+"_"+slug
            return <div className="w-full" key={fieldOptionId}>
                <input className="w-3 h-3 -mr-3 inline-block cursor-pointer" id={fieldOptionId} name={fieldName} key={fieldOptionId} type={inputBoxType} value={option.value} checked={ checkedOptions.includes(option.value) } onChange={(e) => {
                    setCheckedOptions((currentOptions) => {
                        if (multiselect) {
                            if (e.target.checked && !checkedOptions.includes(option.value))
                                return [...currentOptions, option.value]
                            if (!e.target.checked && checkedOptions.includes(option.value))
                                return currentOptions.filter(x => x != option.value)
                            return currentOptions
                        } else {
                            return [ option.value ]
                        }
                    })
                }} />
                <label htmlFor={fieldOptionId} className="pl-4 w-full cursor-pointer">{ option.label}</label>
            </div>
        })}
        {!validationResult.valid && validationResult.messages && validationResult.messages.length > 0 && <div>{validationResult.messages.map(msg => <div key={msg} className="text-red-800">{msg}</div>)}</div>}
    </div>
}