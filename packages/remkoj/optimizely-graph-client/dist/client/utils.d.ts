import { AuthMode, type IOptiGraphClient } from "./types.js";
export declare function validateToken(newToken?: string): boolean;
export declare function getAuthMode(token?: string): AuthMode;
export declare function base64encode(binaryString: string): string;
export declare function isError(toTest: any): toTest is Error;
export declare function isContentGraphClient(client: any): client is IOptiGraphClient;
