"use client"
import { useId, type FunctionComponent, type ReactNode } from "react";
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Listbox, Transition } from '@headlessui/react'

import './dropdown.css'

export type DropdownItem<T extends number | string | unknown = unknown> = { 
    value: T, 
    label: string | ReactNode, 
    badge?: string 
}

export type DropdownProps<T extends number | string | unknown = unknown> = {
    label: string | ReactNode
    value: T
    options: T[] | DropdownItem<T>[]
    onChange?: (newValue: T extends string | number ? T : any) => void
    className?: string
}

function isDropdownItem(toTest: any) : toTest is DropdownItem
{
    if (typeof(toTest) == 'object' && toTest != null)
        return (toTest as DropdownItem).value != null && (toTest as DropdownItem).value != undefined && ((toTest as DropdownItem).label ? true : false)
    return false
}

function isDropdownItemArray(toTest: any) : toTest is DropdownItem[]
{
    return Array.isArray(toTest) && toTest.every(isDropdownItem)
}

export const Dropdown : FunctionComponent<DropdownProps> = ({ label, value, options, onChange, className }) => 
{
    const selectedLabel : string = (isDropdownItemArray(options) ? options.filter(x => x.value == value)[0]?.label ?? value : value) as string
    const dropdownId = useId()

    return <Listbox value={ value } onChange={ (value) => onChange && onChange(value) } className={"styled-dropdown" + (className ? " " + className : "")} as="div">
        <div className="dropdown-control">
            <Listbox.Label>{ label }</Listbox.Label>
            <Listbox.Button><span className='dd-text'>{ selectedLabel }</span><ChevronDownIcon className='dd-icon'/></Listbox.Button>
        </div>
        <Listbox.Options className="dropdown-expand transition-all duration-300 ease-in-out h-0 opacity-0 ui-open:h-auto ui-open:opacity-100">
            { options.map((item, idx) => {
                const itemKey = dropdownId+'-'+idx
                const { value: itemValue, label: itemLabel, badge: itemBadge} = isDropdownItem(item) ? item : { value: item, label: item as string, badge: undefined } as DropdownItem
                
                return<Listbox.Option className="dropdown-value" value={ itemValue } key={ itemKey }>
                    { itemBadge ? 
                        <><span className="label">{ itemLabel }</span><span className="badge">{ itemBadge }</span></> :
                        itemLabel
                    }
                </Listbox.Option>
            })}
        </Listbox.Options>
    </Listbox>
}
Dropdown.displayName = "Dropdown control"

export default Dropdown