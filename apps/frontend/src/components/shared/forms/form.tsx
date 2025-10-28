'use client'
import { useActionState, useId, useMemo, useContext, useRef, useState, createContext, startTransition, useCallback, type FunctionComponent, type JSX } from "react";
import { submitToOptimizely, OptimizelyFormState } from "./optimizely";
import { ConfirmDialog, useConfirmDialog } from "./dialog";
import { cn, isNonEmptyString } from "@/lib/utils";

export type FormProps = Omit<JSX.IntrinsicElements['form'], 'action' | 'ref'> & { 
    ShowSummaryMessageAfterSubmission?: boolean | null
    SubmitConfirmationMessage?: string | null
    ResetConfirmationMessage?: string | null
    SubmitUrl?: {
        type?: string | null
        base?: string | null
        default?: string | null
    } | null
    FormTitle?: string | null
    ContentKey?: string | null
}
export type FormContainerContext = {
    FormId: string
    SubmitConfirmationMessage?: string | null
    ResetConfirmationMessage?: string | null
    formValid: boolean
    data?: Record<string,any>
    submit: ()=>void
    reset: ()=>void
    updateValidation: (fieldName:string, isValid:boolean) => void
}

function NoContextError() { throw new Error("No form context present") }

const FormContainerCtx = createContext<FormContainerContext>({ FormId: "", formValid: true, submit: NoContextError, reset: NoContextError, updateValidation: NoContextError })

export const useForm = () => useContext(FormContainerCtx)

export const ApplicationForm : FunctionComponent<FormProps> = ({ className, id, ContentKey, children, FormTitle, ShowSummaryMessageAfterSubmission, SubmitConfirmationMessage, ResetConfirmationMessage, SubmitUrl, ...formProps}) =>
{
    // Form container context
    const generatedId = useId()
    const formId = useMemo(() => id ?? ContentKey ?? (generatedId+"form"), [id, ContentKey, generatedId])
    const [state, action, isLoading] = useActionState<OptimizelyFormState>(submitToOptimizely, { data: {}, formId: (ContentKey ?? "").replaceAll('-','') })
    const formElement = useRef<HTMLFormElement>(null)
    const [formValidationState, setFormValidationState] = useState<Record<string,boolean>>({})
    const formValid = useMemo(() => Object.getOwnPropertyNames(formValidationState).reduce<boolean>((isValid, fieldName) =>  isValid && formValidationState[fieldName], true), [formValidationState])

    // Form messaging
    const [ confirmDialogProps, showDialog ] = useConfirmDialog((state) => {
        if (state.code === 'submit')
            startTransition(action)
        if (state.code === 'reset')
            formElement.current?.reset()
    })
    const handleSubmit = useCallback(() => {
        if (!formValid) {
            console.warn("Submission blocked due to invalid form")
            return
        }
        if (isNonEmptyString(SubmitConfirmationMessage))
            showDialog({
                title: FormTitle ?? `Web form`,
                text: SubmitConfirmationMessage,
                code: 'submit'
            })
        else 
            startTransition(action)
    }, [formValid, FormTitle, SubmitConfirmationMessage, showDialog, action])

    // Create a stable reset handler, that only changes when the form configuration
    // changes
    const handleReset = useCallback(() =>
    {
        if (isNonEmptyString(ResetConfirmationMessage))
            showDialog({
                title: FormTitle ?? `Web form`,
                text: ResetConfirmationMessage,
                code: 'reset'
            })
        else 
            formElement.current?.reset()
    }, [FormTitle, ResetConfirmationMessage, showDialog])

    // Create a stable form context, that only changes when one of the props changes
    const formContext = useMemo((): FormContainerContext => {
        return { FormId: formId, SubmitConfirmationMessage, ResetConfirmationMessage, formValid, data: state.data, submit: () => handleSubmit(), reset: () => handleReset(), updateValidation: (fn,iv) => setFormValidationState((c) => { const n = {...c}; n[fn] = iv; return n;})}
    }, [formId, SubmitConfirmationMessage, ResetConfirmationMessage, formValid, state.data, handleSubmit, handleReset ])

    // Render actual form
    return <>
        <form ref={formElement} action={action} id={formId} {...formProps} className={ cn(className, isLoading ? "animate-pulse blur-xs" : undefined)}>
            { state.statusMessage && <div className="bg-amber-100 border-2 shadow-inner border-amber-800 text-amber-950 rounded-xl m-4 p-2 font-bold">{ state.statusMessage }</div>}
            <FormContainerCtx.Provider value={formContext}>
                { !state?.completed && <>{children}</> }
            </FormContainerCtx.Provider>
        </form>
        <ConfirmDialog {...confirmDialogProps} />
    </>
}

export default ApplicationForm