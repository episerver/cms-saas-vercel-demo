import type { FragmentDefinitionNode, OperationDefinitionNode } from 'graphql';
export type TransformOptions = {
    /**
     * Configure fragment injection targets and filters as a set of injection
     * rules.
     */
    injections?: Injection[];
    /**
     * Enable verbose output
     */
    verbose?: boolean;
    /**
     * Disables the recursive validation of GraphQL-Codegen and updates the
     * rules to ensure that the code is properly generated.
     *
     * *NOTE:* This requires a custom resolution of the
     * `@graphql-codegen/visitor-plugin-common` package, which patches an unhandled
     * infinite loop when the recursive validation has been disabled.
     */
    recursion?: boolean;
};
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
