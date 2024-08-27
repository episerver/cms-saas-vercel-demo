'use client'
import { useId, useState, useMemo, useEffect, type FunctionComponent, type DetailedHTMLProps, type HTMLAttributes } from "react"
import { Field, Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/solid"

export type DropDownOption = {
    value: string
    label?: string
}

export type DropDownParameters = {
    options: Array<DropDownOption>
    value?: DropDownOption
    unselectedLabel?: string
    label: string
    onChange?: (value: DropDownOption) => void
} & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onChange'>

export const DropDown : FunctionComponent<DropDownParameters> = ({ options, value, unselectedLabel, label, onChange, ...divProps }) => 
{
    const id = useId()
    const [ selectedValue, setSelectedValue ] = useState<DropDownOption | undefined>(value)
    const valueLabel = useMemo(() => {
        return selectedValue?.label ?? selectedValue?.value ?? unselectedLabel ?? ""
    }, [ selectedValue, unselectedLabel ]);

    useEffect(() => setSelectedValue(value), [ value ]);

    const handleValueChange = (newValue: DropDownOption) =>
    {
        setSelectedValue(newValue)
        if (onChange && typeof(onChange) == 'function')
            onChange(newValue)
    }

    return <Field { ...divProps }>
        <Listbox value={ selectedValue } onChange={ handleValueChange }>
            <ListboxButton className="border border-azure border-solid border-2 outline-none focus:outline focus:outline-dashed focus:outline-offset-2 focus:outline-2 focus:outline-azure focus:dark:outline-verdansk rounded-xl min-w-96 flex flex-row justify-between items-stretch dark:border-verdansk">
                <div className="flex flex-col justify-between gap-2 m-2 flex-auto">
                    <Label className="text-start italic">{ label }</Label>
                    <span className="text-start">{ valueLabel }</span>
                </div>
                <div className="bg-azure text-ghost-white px-2 flex flex-col justify-center dark:bg-verdansk dark:text-vulcan">
                    <ChevronDownIcon className="w-10 mx-auto" />
                </div>
            </ListboxButton>
            <ListboxOptions anchor="bottom start" className="bg-ghost-white border border-azure border-solid border-2 rounded-xl mt-2 min-w-96 outline-none focus:outline focus:outline-dashed focus:outline-offset-2 focus:outline-2 focus:outline-azure focus:dark:outline-verdansk dark:border-verdansk dark:bg-vulcan dark:text-ghost-white">
                {options.map(option => (
                    <ListboxOption key={id + option.value} value={ option } className="data-[active]:bg-azure data-[active]:text-ghost-white dark:data-[active]:bg-verdansk dark:data-[active]:text-vulcan p-2 cursor-pointer">
                        { option.label ?? option.value }
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </Listbox>
    </Field>
}

export default DropDown