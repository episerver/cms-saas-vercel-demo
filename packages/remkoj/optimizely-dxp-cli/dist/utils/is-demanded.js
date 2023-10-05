export function isDemanded(value) {
    if (value == undefined || value == null)
        return true;
    switch (typeof (value)) {
        case 'string':
            return value == "";
    }
    return false;
}
