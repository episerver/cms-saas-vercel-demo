export declare function readValueAsInt<T extends number | undefined>(variableName: string, defaultValue?: T): T extends number ? number : number | undefined;
export declare function readValueAsFloat<T extends number | undefined>(variableName: string, defaultValue?: T): T extends number ? number : number | undefined;
export declare function readValueAsBoolean<T extends boolean | undefined>(variableName: string, defaultValue?: T): T extends boolean ? boolean : boolean | undefined;
export declare function readValue<T extends string | undefined>(variableName: string, defaultValue?: T): T extends string ? string : string | undefined;
declare const _default: {
    readValue: typeof readValue;
    readValueAsBoolean: typeof readValueAsBoolean;
    readValueAsFloat: typeof readValueAsFloat;
    readValueAsInt: typeof readValueAsInt;
};
export default _default;
