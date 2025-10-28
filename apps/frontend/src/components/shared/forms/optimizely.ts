'use server'

export type OptimizelyFormState<FormData extends Record<string,any> = Record<string,any>> = {
    formId: string
    data: FormData
    completed?: boolean
    statusMessage?: string
    errors?: Array<Error | string | { code: string, message: string }>
}

/**
 * Server side submission logic, this will first perform server-side validation of the submitted
 * form data, then - if valid - submit the form data & submission event to the relevant Optimizely
 * systems for tracking.
 */
export async function submitToOptimizely<T extends Record<string,any> = Record<string,any>>(state: Awaited<OptimizelyFormState<T>>, formData?: FormData) : Promise<OptimizelyFormState<T>>
{
    const newState : Record<string,any> = { ...state.data }
    formData?.forEach((fieldValue,fieldName) => {
        newState[fieldName] = fieldValue
    })
    return {
        ...state,
        data: newState as T,
        completed: false,
        statusMessage: "Not supported yet"
    }
}