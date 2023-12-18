
export function readValueAsInt<T extends number | undefined>(variableName: string, defaultValue?: number) : T extends number ? number : number | undefined
{
    const stringValue = process?.env ? process.env[variableName] : undefined
    if (!stringValue)
        return defaultValue as T extends number ? number : undefined
    try {
        return parseInt(stringValue)
    } catch {
        return defaultValue as T extends number ? number : undefined
    }
}

export function readValueAsFloat<T extends number | undefined>(variableName: string, defaultValue?: number) : T extends number ? number : number | undefined
{
    const stringValue = process?.env ? process.env[variableName] : undefined
    if (!stringValue)
        return defaultValue as T extends number ? number : undefined
    try {
        return parseFloat(stringValue)
    } catch {
        return defaultValue as T extends number ? number : undefined
    }
}

export function readValueAsBoolean<T extends boolean | undefined>(variableName: string, defaultValue?: T) : T extends boolean ? boolean : boolean | undefined
{
    const stringValue = process?.env ? process.env[variableName] : undefined
    if (typeof(stringValue) != 'string')
        return defaultValue as T extends boolean ? boolean : undefined
    try {
        return stringValue == '1' || stringValue.toLowerCase() == 'true'
    } catch {
        return defaultValue as T extends boolean ? boolean : undefined
    }
}

export function readValue<T extends string | undefined>(variableName: string, defaultValue?: T) : T extends string ? string : string | undefined
{
    const stringValue = process?.env ? process.env[variableName] : undefined
    return stringValue || defaultValue as T extends string ? string : undefined
}