'use client'
import { type FunctionComponent } from "react"
import DropDown, { type DropDownOption, type DropDownParameters } from "@shared/drop_down"

export const LanguageSwitcherClient : FunctionComponent<Omit<DropDownParameters, 'onChange'>> = (props) =>
{
    const onChange = (newLanguage: DropDownOption) => {
        alert(`Unable to switch to ${ newLanguage.label ?? newLanguage.value }`)
    }

    return <DropDown { ...props } onChange={ onChange } />
}

export default LanguageSwitcherClient