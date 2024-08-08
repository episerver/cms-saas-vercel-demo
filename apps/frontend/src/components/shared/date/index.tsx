'use client'

import { useEffect, useState, type FunctionComponent } from "react";

export type DateDisplayProps = {
    value?: string | number | Date
    locale?: Intl.LocalesArgument
    placeHolder?: string
} & Omit<JSX.IntrinsicElements['span'], 'children'>

/**
 * Render a date, using a client side tranformation to the selected
 * locale. When no locale has been provided, the browser will use the current
 * locale to transform the date.
 * 
 * When additional properties are provided, the element will be rendered as a
 * span element, when none are provided, it will be rendered as a Fragment.
 * 
 * @param       param0      The Component properties
 * @returns     The formatted date
 */
export const DateDisplay : FunctionComponent<DateDisplayProps> = ({ value, locale, placeHolder = "", ...props }) => {
    const [ dateDisplayValue, setDateDisplayValue ] = useState<string>(placeHolder)
    useEffect(() => { 
        if (!value) return
        try {
            const parsed = toDate(value)
            setDateDisplayValue(parsed.toLocaleDateString(locale))
        } catch {
            // Do nothing
        }
    }, [ value, locale ])
    return Object.getOwnPropertyNames(props).length > 0 ? <span { ...props }>{ dateDisplayValue }</span> : <>{ dateDisplayValue }</>
}

/**
 * Render a date/time, using a client side tranformation to the selected
 * locale. When no locale has been provided, the browser will use the current
 * locale to transform the date.
 * 
 * When additional properties are provided, the element will be rendered as a
 * span element, when none are provided, it will be rendered as a Fragment.
 * 
 * @param       param0      The Component properties
 * @returns     The formatted date
 */
export const DateTimeDisplay : FunctionComponent<DateDisplayProps> = ({ value, locale, placeHolder = "", ...props }) => {
    const [ dateDisplayValue, setDateDisplayValue ] = useState<string>(placeHolder)
    useEffect(() => { 
        if (!value) return
        try {
            const parsed = toDate(value)
            setDateDisplayValue(parsed.toLocaleString(locale))
        } catch {
            // Do nothing
        }
    }, [ value, locale ])
    return Object.getOwnPropertyNames(props).length > 0 ? <span { ...props }>{ dateDisplayValue }</span> : <>{ dateDisplayValue }</>
}

/**
 * Render a time, using a client side tranformation to the selected
 * locale. When no locale has been provided, the browser will use the current
 * locale to transform the date.
 * 
 * When additional properties are provided, the element will be rendered as a
 * span element, when none are provided, it will be rendered as a Fragment.
 * 
 * @param       param0      The Component properties
 * @returns     The formatted date
 */
export const TimeDisplay : FunctionComponent<DateDisplayProps> = ({ value, locale, placeHolder = "", ...props }) => {
    const [ dateDisplayValue, setDateDisplayValue ] = useState<string>("")
    useEffect(() => { 
        if (!value) return
        try {
            const parsed = toDate(value)
            setDateDisplayValue(parsed.toLocaleTimeString(locale))
        } catch {
            // Do nothing
        }
    }, [ value, locale ])
    return Object.getOwnPropertyNames(props).length > 0 ? <span { ...props }>{ dateDisplayValue }</span> : <>{ dateDisplayValue }</>
}

function toDate(input?: Date | number | string | null) : Date
{
    if (!input)
        return new Date()
    return new Date(input)
}

export default DateDisplay