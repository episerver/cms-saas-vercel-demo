import { isNonEmptyString, tryParseInt, tryParseJson } from "@/lib/utils"

export type ValidatorConfig = RequiredValidatorConfig | EmailValidatorConfig | RegexValidatorConfig | ValidatorNotAvailableConfig
export type ValidatorFunctionResult = { valid: true, message?: never } | { valid: false, message: string }
export type ValidatorFunction<T extends BaseValidatorConfig = BaseValidatorConfig> = (value:any, config: T) => ValidatorFunctionResult
export type RequiredValidatorConfig = {
    type:"requirevalidator",
    errorMessage: string
}
export type EmailValidatorConfig = {
    type:"emailvalidator",
    errorMessage:string
}   
export type RegexValidatorConfig = {
    type:"regularexpressionvalidator",
    errorMessage:string,
    regularExpression:string
}   
export type ValidatorNotAvailableConfig = {
    type:"validatorNotAvailable",
    errorMessage?:string
}
export type BaseValidatorConfig = {
    type: string,
    errorMessage?: string
}


//#region All available validators
type ValidatorTypes = ValidatorConfig[][number]['type']
type ValidatorDict = { 
    [K in Exclude<ValidatorTypes, 'validatorNotAvailable'> ]?: ValidatorFunction<Extract<ValidatorConfig, {type: K}>>
} & { 
    validatorNotAvailable: ValidatorFunction<ValidatorNotAvailableConfig>
}
const validatorList:ValidatorDict = {
    requirevalidator(value,config) : ValidatorFunctionResult {
        if (!value || (typeof value === 'string' && value.length == 0))
            return { valid: false, message: config.errorMessage }
        return {valid: true}
    },
    emailvalidator(value,config) : ValidatorFunctionResult {
        if (!value || (typeof value === 'string' && value.length == 0))
            return {valid:true} // We're implicitly enforcing a 'required' field
        const eMailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
        if (eMailRegex.test(value))
            return {valid:true}
        return {valid:false, message: config.errorMessage ?? `Invalid E-Mail address`}
    },
    regularexpressionvalidator(value,config) : ValidatorFunctionResult {
        if (!config.regularExpression || config.regularExpression.length == 0)
            return { valid: true } // If there's no expression, ignore the requirement
        const regexPattern = new RegExp(config.regularExpression)
        if (regexPattern.test(value))
            return {valid:true}
        return {valid:false, message: replacePlaceholders(config.errorMessage ?? `The value does not satisfy the criteria`, [ config.regularExpression ])}
    },
    validatorNotAvailable(_,config) : ValidatorFunctionResult {
        return { valid: false, message: `Validator ${ config.type } is unsupported` }
    },
}
//#endregion

export type ValidatorResult = { valid: boolean, messages: string[]}
export type ValidationResult = { readonly valid: boolean, readonly messages: ReadonlyArray<string> }
export function createFieldValidator(config?: ValidatorConfig[] | string | null, fieldLabel?: string | null) : (value: any) => ValidationResult {
    const validatorConfigs = tryParseJson<ValidatorConfig[]>(config)
    if (!validatorConfigs || validatorConfigs.length === 0)
        return () => {return {valid: true, messages: []}}
    
    return (value) => {
        const validationResult : ValidatorResult = {valid:true, messages: []}
        validatorConfigs.forEach((cfg) => {
            const validator = (validatorList[cfg.type] || validatorList.validatorNotAvailable) as ValidatorFunction
            const result = validator(value, cfg)
            if (!result.valid) {
                validationResult.valid = false
                validationResult.messages.push(replacePlaceholders(result.message, { label: fieldLabel }))
            }
        })
        validationResult.messages = validationResult.messages.filter(isNonEmptyString)
        return validationResult
    }
}

function replacePlaceholders(input: string, dictionary: Record<string,string|undefined|null>|Array<string|undefined|null>) : string
{
    if (!dictionary)
        return input ?? ""
    return (input ?? "").replaceAll(/\{(.+?)\}/gm, (substring: string, entryId: string) => {
        const idx = tryParseInt(entryId, -1)
        if (Array.isArray(dictionary) && idx >= 0 && dictionary.at(idx))
            return dictionary.at(idx) ?? ""
        if (typeof dictionary === 'object' && dictionary && dictionary[entryId])
            return dictionary[entryId] ?? ""
        return substring
    }).trim()
}