"use client"
import { useMemo, useState, useEffect, type FunctionComponent } from 'react'

export type LocalTimeProps = {
    date?: string | null
    mode?: "Date" | "Time" | "DateTime"
}

/**
 * Transfer a date to the client as a string, parseable by the Date object and use that to
 * client side transform the date into the locale configured by the the browser.
 * 
 * @param       param0      The configuration parameters
 * @returns     The formatted date
 */
export const LocalTime : FunctionComponent<LocalTimeProps> = ({ date, mode }) =>
{
    const parsedDate = useMemo<number>(() => {
        try {
            let dateMilis = date ? Date.parse(date) : Date.now()
            if (typeof(dateMilis) != 'number' || dateMilis <= 0)
                return Date.now()
            return dateMilis
        } catch {
            return Date.now()
        }
    }, [ date ])
    const [ localDate, setLocalDate ] = useState<string>(new Date(parsedDate).toISOString())

    useEffect(() => {
        let newValue : string = ""
        let dateObj = new Date(parsedDate)
        switch (mode) {
            case "Date":
                newValue = dateObj.toLocaleDateString()
                break
            case "Time":
                newValue = dateObj.toLocaleTimeString()
                break
            case "DateTime":
            default:
                newValue = dateObj.toLocaleString()
                break
        }
        setLocalDate(newValue)
    }, [ parsedDate, mode ])
    
    return localDate
}
LocalTime.displayName = "Localized date/time"

export default LocalTime