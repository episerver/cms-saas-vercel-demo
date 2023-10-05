export function isDemanded(value: any)
{
    if (value == undefined || value == null)
        return true
    switch (typeof(value))
    {
        case 'string':
            return value == ""
    }
    return false
}