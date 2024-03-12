export declare enum AuthMode {
    Public = "epi-single",
    Basic = "use-basic",
    HMAC = "use-hmac",
    Token = "use-token"
}
export declare function validateToken(newToken?: string): boolean;
export declare function getAuthMode(token?: string): AuthMode;
export declare function base64encode(binaryString: string): string;
export declare function isError(toTest: any): toTest is Error;
