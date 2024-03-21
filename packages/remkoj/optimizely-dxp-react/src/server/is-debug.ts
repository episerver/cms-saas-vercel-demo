export function isDebug() : boolean
{
    try {
        const value = process?.env?.OPTIMIZELY_DEBUG ?? process?.env?.DXP_DEBUG
        return value ? value == '1' || value.toLowerCase() == 'true' : false
    } catch {
        return false;
    }
}

export function isDevelopment() : boolean
{
    try {
        return process.env.NODE_ENV == 'development'
    } catch {
        return false;
    }
}

export default isDebug
