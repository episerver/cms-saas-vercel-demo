//import Base64 from 'crypto-js/enc-base64'

const TOKEN_MIN_LENGTH = 16

export enum AuthMode {
    Public = "epi-single",
    Basic = "use-basic",
    HMAC = "use-hmac",
    Token = "use-token"
}

export function validateToken(newToken ?: string) : boolean
{
    return newToken == undefined || newToken == AuthMode.HMAC ||  newToken == AuthMode.Basic || newToken.length > TOKEN_MIN_LENGTH
}

export function getAuthMode(token?: string): AuthMode
{
    switch(token) 
    {
        case AuthMode.HMAC:
            return AuthMode.HMAC
        case AuthMode.Basic:
            return AuthMode.Basic
        default:
            if (typeof(token) == 'string' && token.length > TOKEN_MIN_LENGTH)
                return AuthMode.Token
            return AuthMode.Public
    }
}

export function base64encode(binaryString: string) {
    if (Buffer)
        return Buffer.from(binaryString).toString('base64')
    return btoa(binaryString)
}

export function isError(toTest: any): toTest is Error {
    return typeof(toTest) == 'object' && toTest != null && typeof(toTest as Error).name == 'string' && typeof(toTest as Error).message == 'string'
}