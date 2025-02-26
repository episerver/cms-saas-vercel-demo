export type ImplementationFiles = {
    sdkFile: string
}

export type ProjectFileTemplateContext = {
    files: ImplementationFiles
}

export type ProjectFileTemplate = {
    prefix?: (ctx: ProjectFileTemplateContext) => string
    postfix?: (ctx: ProjectFileTemplateContext) => string
}

export function defintionsToDefault<T extends Record<string, any>>(obj: T, fieldName: keyof T[string] = "default_value", enabled = true) {
    const newObj = {
        _enabled: enabled
    }

    for (var entry of Object.getOwnPropertyNames(obj)) {
        newObj[entry] = parseValue(obj[entry].type, obj[entry][fieldName])
    }

    return JSON.stringify(newObj)
}

/**
 * Process a value reported from the Optimizely FX API to a valid JavaScript variable value
 * 
 * @param       type    The value type reported by the FX API
 * @param       value   The string encoded version of the value
 * @returns     The parsed value
 */
export function parseValue(type: string, value: string): string | boolean | number | object {
    switch (type) {
        case 'boolean':
            return value == 'true'
        case 'integer':
            return Number.parseInt(value)
        case 'double':
            return Number.parseFloat(value)
        default:
            return value
    }
}

/**
 * Build a TypeScript definition for the feature flag definition, which can be used
 * to auto-generate flags defintions.
 * 
 * @param       obj     The 
 * @returns     The typescript definition
 */
export function defintionsToType(obj: Object) : string {
    const entries = []
    for (var entry of Object.getOwnPropertyNames(obj)) {
        let typeName = obj[entry].type
        switch (obj[entry].type) {
            case 'json':
                typeName = 'any'
                break;
            case 'integer':
            case 'double':
                typeName = 'number'
                break;
        }
        entries.push(`${entry}: ${typeName}`)
    }
    return `{ ${entries.join(', ')} }`
}