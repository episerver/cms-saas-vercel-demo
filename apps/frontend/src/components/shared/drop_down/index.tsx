'use client'
import { useId, useState, useMemo, useEffect, type FunctionComponent, type DetailedHTMLProps, type HTMLAttributes } from "react"
import { Field, Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/solid"
import { useRouter, useSearchParams } from "next/navigation"

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
    compact?: boolean
} & Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onChange'>

export const DropDown : FunctionComponent<DropDownParameters> = ({ 
    options = [], 
    value, 
    unselectedLabel = "", 
    label, 
    compact = false, 
    onChange, 
    ...divProps 
}) => {
    const id = useId()
    const [ selectedValue, setSelectedValue ] = useState<DropDownOption | undefined>(value)
    const valueLabel = useMemo(() => {
        return selectedValue?.label ?? selectedValue?.value ?? unselectedLabel
    }, [ selectedValue, unselectedLabel ]);

    useEffect(() => setSelectedValue(value), [ value ]);

    const handleValueChange = (newValue: DropDownOption) =>
    {
        setSelectedValue(newValue)
        if (onChange && typeof(onChange) == 'function')
            onChange(newValue)
    }

    const button = compact ? (
        <ListboxButton className="min-w-40 flex flex-row justify-stretch items-stretch gap-2 pl-2 border-azure border-solid border-2 outline-none focus:outline-dashed focus:outline-offset-2 focus:outline-2 focus:outline-azure focus:dark:outline-verdansk rounded-lg dark:border-verdansk overflow-hidden">
            <Label className="grow-0 shrink-0 italic">{ label }:</Label>
            <span className="grow shrink-0">{ valueLabel }</span>
            <ChevronDownIcon className="block min-w-8 px-1 bg-azure text-ghost-white dark:bg-verdansk dark:text-vulcan" />
            
        </ListboxButton>
    ) : (
        <ListboxButton className="border-azure border-solid border-2 outline-none focus:outline-dashed focus:outline-offset-2 focus:outline-2 focus:outline-azure focus:dark:outline-verdansk rounded-xl min-w-48 flex flex-row justify-between items-stretch dark:border-verdansk overflow-hidden">
            <div className="flex flex-col justify-between gap-2 m-2 flex-auto">
                <Label className="text-start italic">{ label }</Label>
                <span className="text-start">{ valueLabel }</span>
            </div>
            <div className="bg-azure text-ghost-white px-2 flex flex-col justify-center dark:bg-verdansk dark:text-vulcan">
                <ChevronDownIcon className="w-10 mx-auto" />
            </div>
        </ListboxButton>
    );

    return <Field { ...divProps }>
        <Listbox value={ selectedValue } onChange={ handleValueChange }>
            { button }
            <ListboxOptions anchor="bottom start" className="bg-ghost-white border-azure border-solid border-2 rounded-xl mt-2 min-w-40 outline-none focus:outline-dashed focus:outline-offset-2 focus:outline-2 focus:outline-azure focus:dark:outline-verdansk dark:border-verdansk dark:bg-vulcan dark:text-ghost-white">
                {options.map(option => (
                    <ListboxOption key={id + option.value} value={ option } className="data-[active]:bg-azure data-[active]:text-ghost-white dark:data-[active]:bg-verdansk dark:data-[active]:text-vulcan p-1 cursor-pointer">
                        { option.label ?? option.value }
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </Listbox>
    </Field>
}

type UrlParamDropdownParams = { urlSearchParam: string, defaultValue?: DropDownOption['value'] } & (
    ({ navigate?: true, scrollTop: boolean, onChange?: never } & Omit<DropDownParameters, 'value' | 'onChange'>) | 
    ({ navigate?: false, scrollTop?: never } & Omit<DropDownParameters, 'value'>)
)

export const UrlParamDropdown : FunctionComponent<UrlParamDropdownParams> = ({ 
    options = [],
    urlSearchParam,
    defaultValue,
    navigate = true,
    scrollTop = true,
    onChange,
    ...props 
}) => {
    const router = useRouter()
    const currentParams = useSearchParams()
    const [currentValue,setCurrentValue] = useState<DropDownOption>()

    useEffect(() => {
        const qv = currentParams.get(urlSearchParam) || defaultValue;
        if (qv) 
            setCurrentValue((options ?? []).filter(x => x.value == qv).at(0));
    }, [ options, currentParams, urlSearchParam, defaultValue ])

    function updateValue(value: DropDownOption)
    {
        const url = new URL(window.location.href)
        url.searchParams.set(urlSearchParam, value.value)
        const newPath = url.pathname + url.search + url.hash
        router.push(newPath, { scroll: scrollTop })
    }

    return <DropDown options={ options } { ...props } onChange={ nv => navigate ? updateValue(nv) : (onChange && onChange(nv)) } value={ currentValue } />
}

export default DropDown