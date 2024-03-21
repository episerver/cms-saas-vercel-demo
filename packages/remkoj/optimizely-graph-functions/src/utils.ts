import type { DefinitionNode, FragmentDefinitionNode, OperationDefinitionNode } from 'graphql'
import type { IntoMatchType, WithRequiredProp } from './types'
import type { PluginOptions } from './index'
import { Kind } from 'graphql'

export function isNotNullOrUndefined<T>(toTest: T | null | undefined) : toTest is T
{
    return toTest ? true : false
}

export function isFragmentDefinitionNode (node?: DefinitionNode) : node is FragmentDefinitionNode
{
    return node?.kind == Kind.FRAGMENT_DEFINITION && node.name.value ? true : false
}

export function isSelectionDefinitionNode (node?: DefinitionNode) : node is FragmentDefinitionNode | OperationDefinitionNode
{
    return node?.kind == Kind.OPERATION_DEFINITION || node?.kind == Kind.FRAGMENT_DEFINITION
}

export function isIntoMatch(toTest: IntoMatchType | null | undefined) : toTest is WithRequiredProp<IntoMatchType, 'match'>
{
    if (!toTest)
        return false
    return toTest.match ? true : false
}

export function extractPluginConfigAndApplyDefaults(baseConfig: Record<string, any>, defaultValues: Partial<PluginOptions>) : Partial<PluginOptions>
{
    const extractedConfig : Partial<PluginOptions> = {
        clientPath: baseConfig?.clientPath || undefined,
        functions: baseConfig?.functions || undefined,
        prettyPrintQuery: baseConfig?.prettyPrintQuery || undefined
    }
    for (const propName of Object.getOwnPropertyNames(extractedConfig) as (keyof Partial<PluginOptions>)[])
        if (extractedConfig[propName] == null || extractedConfig[propName] == undefined)
            delete extractedConfig[propName]
    
    return {
        ...defaultValues,
        ...extractedConfig
    }
}