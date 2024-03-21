import type { FragmentDefinitionNode, OperationDefinitionNode } from 'graphql';
export type Injection = {
    into: string;
    nameRegex?: string;
    pathRegex?: string;
};
export type IntoMatchType = {
    docId: number;
    path?: string;
    match: {
        defId: number;
        data: OperationDefinitionNode | FragmentDefinitionNode;
    } | null;
};
export type Mandatory<T> = {
    [P in keyof T]-?: NonNullable<T[P]>;
};
export type WithRequiredProp<T, K extends keyof T> = Omit<T, K> & Pick<Mandatory<T>, K>;
export type Writeable<T> = {
    -readonly [P in keyof T]: T[P];
};
