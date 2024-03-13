import { AuthMode } from "./types.js";
const TOKEN_MIN_LENGTH = 16;
export function validateToken(newToken) {
    return newToken == undefined || newToken == AuthMode.HMAC || newToken == AuthMode.Basic || newToken.length > TOKEN_MIN_LENGTH;
}
export function getAuthMode(token) {
    switch (token) {
        case AuthMode.HMAC:
            return AuthMode.HMAC;
        case AuthMode.Basic:
            return AuthMode.Basic;
        default:
            if (typeof (token) == 'string' && token.length > TOKEN_MIN_LENGTH)
                return AuthMode.Token;
            return AuthMode.Public;
    }
}
export function base64encode(binaryString) {
    if (Buffer)
        return Buffer.from(binaryString).toString('base64');
    return btoa(binaryString);
}
export function isError(toTest) {
    return typeof (toTest) == 'object' && toTest != null && typeof toTest.name == 'string' && typeof toTest.message == 'string';
}
export function isContentGraphClient(client) {
    if (typeof (client) != 'object' || client == null)
        return false;
    return typeof client.updateAuthentication == 'function'
        && typeof client.request == 'function';
}
