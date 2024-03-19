import type { DefinitionNode, FragmentDefinitionNode, OperationDefinitionNode } from 'graphql'
import type { IntoMatchType, WithRequiredProp, OptimizelyFunctionOptions } from './types'
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
export function extractPluginConfigAndApplyDefaults(baseConfig: Record<string, any>, defaultValues: Partial<OptimizelyFunctionOptions>) : Partial<OptimizelyFunctionOptions>
{
    const extractedConfig : Partial<OptimizelyFunctionOptions> = {
        clientPath: baseConfig?.clientPath || undefined,
        optlyFunctions: baseConfig?.optlyFunctions || undefined,
        optlyInjections: baseConfig?.optlyInjections || undefined,
        optlyPrettyQuery: baseConfig?.optlyPrettyQuery || undefined
    }
    for (const propName of Object.getOwnPropertyNames(extractedConfig) as (keyof Partial<OptimizelyFunctionOptions>)[])
        if (extractedConfig[propName] == null || extractedConfig[propName] == undefined)
            delete extractedConfig[propName]
    
    return {
        ...defaultValues,
        ...extractedConfig
    }
}