import type { DefinitionNode, FragmentDefinitionNode, OperationDefinitionNode } from 'graphql';
import type { IntoMatchType, WithRequiredProp } from './types';
import type { PluginOptions } from './index';
export declare function isNotNullOrUndefined<T>(toTest: T | null | undefined): toTest is T;
export declare function isFragmentDefinitionNode(node?: DefinitionNode): node is FragmentDefinitionNode;
export declare function isSelectionDefinitionNode(node?: DefinitionNode): node is FragmentDefinitionNode | OperationDefinitionNode;
export declare function isIntoMatch(toTest: IntoMatchType | null | undefined): toTest is WithRequiredProp<IntoMatchType, 'match'>;
export declare function extractPluginConfigAndApplyDefaults(baseConfig: Record<string, any>, defaultValues: Partial<PluginOptions>): Partial<PluginOptions>;
