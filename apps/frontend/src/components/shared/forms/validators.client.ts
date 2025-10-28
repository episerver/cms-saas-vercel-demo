'use client'
import { useState, useEffect, type Dispatch, type SetStateAction } from "react"
export * from "./validators"
import type { ValidationResult } from "./validators"
import { useForm } from "./index"

/**
 * React Hook that provides the needed handling for form fields, to be used with the native 
 * form handling capabilities of React. This includes all the logic to bind this form field
 * with the form component of this subsystem
 * 
 * @param   initialValue    The initial value of the form field
 * @param   fieldName       The name of the field in the HTML
 * @param   validate        The validation function for this form field
 * @returns An array with the current value, validation outcome and setter for the form field
 */
export function useValidatedValue<T = string | number | string[]>(initialValue: T | (() => T), fieldName: string, validate: (value: any) => ValidationResult): [T, ValidationResult, Dispatch<SetStateAction<T>>]
{
    const [currentValue,setCurrentValue] = useState<T>(initialValue)
    const [validState,setValidState] = useState<ValidationResult>({ valid: true, messages: []})
    const { data, updateValidation } = useForm()
    useEffect(() => {
        if (data && data[fieldName])
            setCurrentValue(data[fieldName])
    }, [data, fieldName])
    useEffect(() => {
        const newValidState=validate(currentValue)
        updateValidation(fieldName, newValidState.valid)
        setValidState(newValidState)
    }, [currentValue, validate, fieldName, updateValidation])

    return [currentValue, validState, setCurrentValue]
}