
export function readValueAsInt(variableName: string, defaultValue?: number)
{
    const stringValue = process?.env ? process.env[variableName] : undefined
    if (!stringValue)
        return defaultValue
    try {
        return parseInt(stringValue)
    } catch {
        return defaultValue
    }
}

export function readValueAsFloat(variableName: string, defaultValue?: number)
{
    const stringValue = process?.env ? process.env[variableName] : undefined
    if (!stringValue)
        return defaultValue
    try {
        return parseFloat(stringValue)
    } catch {
        return defaultValue
    }
}