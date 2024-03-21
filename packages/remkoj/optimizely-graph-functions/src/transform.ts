import type { Types } from '@graphql-codegen/plugin-helpers'
import type { Injection } from './types'
import type { FragmentDefinitionNode, SelectionNode, FieldNode, SelectionSetNode, InlineFragmentNode } from 'graphql'
import { Kind, parse, visit } from 'graphql'

export type TransformOptions = {
    injections?: Injection[],
}

export function pickTransformOptions(options: Record<string,any>) : TransformOptions
{
    return {
        injections: options.injections ?? []
    }
}

function isArray<T>(toTest : T | readonly T[]) : toTest is readonly T[] { return Array.isArray(toTest) }

export const transform : Types.DocumentTransformFunction<TransformOptions> = async ({documents: files, config }) =>
{
    //console.log("[STARTED] Optimizely document transformation")
    const injections = config.injections ?? []

    // Retrieve component fragments
    const componentFragments: { [ into: string ]: FragmentDefinitionNode[] } = {}
    files.forEach(file => {
        if (!file.document) return
        const applicableInjections = injections.filter(injection => !injection.pathRegex || (new RegExp(injection.pathRegex)).test(file.location ?? ""))
        if (!applicableInjections || applicableInjections.length == 0)
            return
        visit(file.document, {
            "FragmentDefinition": {
                enter(node) {
                    const matchingInjections = applicableInjections.filter(injection => !injection.nameRegex || (new RegExp(injection.nameRegex)).test(node.name.value))
                    if (!matchingInjections || matchingInjections.length == 0)
                        return false
                    matchingInjections.forEach(injection => {
                        //console.log(`[ DEBUG ] Matched ${ node.name.value } for ${ injection.into } in file ${ node.loc?.source?.name }`)
                        if (!componentFragments[injection.into])
                            componentFragments[injection.into] = []
                        if (!componentFragments[injection.into].some(f => f.name.value == node.name.value))
                            componentFragments[injection.into].push(node)
                    })
                    return undefined
                }
            }
        })
    })

    // Get the names we actually need to inject into, and return when none are present
    const intoNames = Object.getOwnPropertyNames(componentFragments)
    if (intoNames.length == 0)
        return files

    // Process the fragments, add matching spreads if need be
    const recursiveFragments : string[] = [ "BlockContentAreaItemSearchData" , "BlockContentAreaItemData" ]
    const componentSpreads : { [ into: string ]: InlineFragmentNode[] } = {}
    intoNames.forEach(intoName => {
        //console.log(`[ DEBUG ] Preparing mutations for ${ intoName }`)
        componentFragments[intoName].forEach(fragment => {
            //console.log(`[ DEBUG ] Preparing mutations for fragment ${ fragment.name.value } within ${ intoName }`)
            visit(fragment, {
                "FragmentSpread": {
                    leave(node, key, parent, path, ancestors) {
                        if (recursiveFragments.includes(node.name.value) && !isArray(ancestors[0]) && ancestors[0].kind == Kind.FRAGMENT_DEFINITION) {
                            //console.log(`[ DEBUG ] Leaving ${ node.name.value } within  ${ fragment.name.value } for ${ intoName}, creating recursive fragment`)
                            const fields = ancestors.filter(a => !isArray(a) && a.kind != Kind.FRAGMENT_DEFINITION && a.kind != Kind.SELECTION_SET)
                            if (fields.length < 1)
                                return undefined
                            if (fields.length > 1)
                                throw new Error("Recursive items on embedded blocks are not supported at the moment")
                            const newNode : InlineFragmentNode = {
                                kind: Kind.INLINE_FRAGMENT,
                                typeCondition: ancestors[0].typeCondition,
                                selectionSet: {
                                    kind: Kind.SELECTION_SET,
                                    selections: [{
                                        kind: Kind.FIELD,
                                        name: (fields[0] as FieldNode).name,
                                        alias: (fields[0] as FieldNode).alias,
                                        selectionSet: {
                                            kind: Kind.SELECTION_SET,
                                            selections: recursiveSelections
                                        }
                                    }]
                                }
                            }
                            if (!componentSpreads[intoName]) componentSpreads[intoName] = []
                            componentSpreads[intoName].push(newNode)
                        }
                    }
                }
            })
        })
    })

    const newFiles = files.map(file => {
        const document = file.document ? visit(file.document, {
            SelectionSet: {
                enter(node, key, parent) {
                    if (!isArray(parent) && parent?.kind == Kind.FRAGMENT_DEFINITION && intoNames.includes(parent.name.value)) {
                        const addedSelections : SelectionNode[] = componentFragments[parent.name.value].map(fragment => {
                            return {
                                kind: Kind.FRAGMENT_SPREAD,
                                directives: [],
                                name: {
                                    kind: Kind.NAME,
                                    value: fragment.name.value
                                }
                            }
                        })
                        componentSpreads[parent.name.value]?.forEach(spread => {
                            //console.log("[ DEBUG ] Pushing inline fragment for", parent.name.value)
                            addedSelections.push(spread)
                        })
                        return {
                            ...node,
                            selections: [
                                ...node.selections,
                                ...addedSelections
                            ]
                        } as SelectionSetNode
                    }
                    return undefined
                }
            }
        }) : undefined
        return {
            ...file,
            document: document,
        }
    })
    //console.log("[SUCCESS] Optimizely document transformation")
    return newFiles
}

export default { transform }

// The recursive sections to add
const recursiveSelections = (parse(`fragment BlockContentAreaItemData on ContentAreaItemModel {
    item: ContentLink {
        data: Expanded @recursive(depth: 3) {
            __typename
        }
    }
}`).definitions[0] as FragmentDefinitionNode)?.selectionSet.selections || [];
