export function readValueAsInt(variableName, defaultValue) {
    const stringValue = readValue(variableName);
    if (!stringValue)
        return defaultValue;
    try {
        return parseInt(stringValue);
    }
    catch {
        return defaultValue;
    }
}
export function readValueAsFloat(variableName, defaultValue) {
    const stringValue = readValue(variableName);
    if (!stringValue)
        return defaultValue;
    try {
        return parseFloat(stringValue);
    }
    catch {
        return defaultValue;
    }
}
export function readValueAsBoolean(variableName, defaultValue) {
    const stringValue = readValue(variableName);
    if (typeof (stringValue) != 'string')
        return defaultValue;
    try {
        return stringValue == '1' || stringValue.toLowerCase() == 'true';
    }
    catch {
        return defaultValue;
    }
}
export function readValue(variableName, defaultValue) {
    try {
        const stringValue = process?.env ? process.env[variableName] : undefined;
        return stringValue || defaultValue;
    }
    catch {
        return defaultValue;
    }
}
export default {
    readValue,
    readValueAsBoolean,
    readValueAsFloat,
    readValueAsInt
};
