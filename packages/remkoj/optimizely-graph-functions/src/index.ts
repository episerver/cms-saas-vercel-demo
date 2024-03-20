import type { CodegenPlugin, PluginFunction, PluginValidateFn } from '@graphql-codegen/plugin-helpers'
import { concatAST, getOperationAST, visit, print, Kind, OperationTypeNode, type DefinitionNode, type DocumentNode, type FragmentDefinitionNode } from 'graphql'
import { isNotNullOrUndefined, isFragmentDefinitionNode } from './utils'

export type PluginOptions = {
    functions?: string[],
    prettyPrintQuery?: boolean,
    clientPath?: string
}

export function pickPluginOptions(options: Record<string,any>) : PluginOptions
{
    return {
        functions: options.functions ?? [ 'getContentByPath', 'getContentById' ],
        prettyPrintQuery: options.prettyPrintQuery ?? false,
        clientPath: options.clientPath ?? "./graphql"
    }
}

/**
 * Validate the plugin configuration
 * 
 * @param schema 
 * @param document 
 * @param config 
 * @param outputFile 
 * @param allPlugins 
 * @param pluginContext 
 */
export const validate: PluginValidateFn<PluginOptions> = (schema, document, config, outputFile, allPlugins, pluginContext) => 
{
    if (config.functions) {
        if (!Array.isArray(config.functions))
            throw new Error("If provided functions must be an array")

        if (config.functions.some(x => typeof(x) != 'string' || x.length == 0))
            throw new Error("If provided functions must only contain non-empty strings")
    }
}

/**
 * Actual Plugin logic
 * 
 * @param schema 
 * @param documents 
 * @param config 
 * @param info 
 * @returns 
 */
export const plugin: PluginFunction<PluginOptions> =  async (schema, documents, config, info) =>
{
    // Read the functions to fully build & extend
    const functions = config.functions || []
    if (functions.length == 0)
        return "// NO FUNCTIONS TO BE EXPORTED"
    
    // Output the functions
    const docs = concatAST(documents.map(x => x.document).filter(isNotNullOrUndefined))
    const output = functions.map(fn => {
        try {
            const queryNode = getOperationAST(docs, fn)
            if (!(queryNode && queryNode.operation == OperationTypeNode.QUERY))
                return [`export async function ${fn}() { throw new Error('No query named ${ fn } defined')}`]

            const fragments = resolveSpreads(queryNode, docs)

            const fnTypeName = fn.charAt(0).toUpperCase() + fn.slice(1)
            const varsType = `Types.${ fnTypeName }QueryVariables`
            const returnType = `Types.${ fnTypeName }Query`
            
            const query = [ queryNode, ...fragments ].map(node => print(node)).join("\n\n")

            const functionBody : string[] = []
            functionBody.push(`export function ${ fn }(client: GraphQLClient, variables: ${ varsType}) : Promise<${ returnType }>`)
            functionBody.push('{')
            functionBody.push(`  const query = gql\`${ config.prettyPrintQuery ? query : query.replace(/\s+/g, ' ').trim() }\``)
            functionBody.push(`  return client.request<${ returnType }, ${ varsType }>(query, variables)`)
            functionBody.push('}')
            return functionBody
            
        } catch (e: any) {
            return [`export async function ${fn}() { throw new Error('Function generation error')}`]
        }
    }).flat()

    const prepend : string[] = []
    const append : string[] = []
    
    prepend.push('import { gql, type GraphQLClient } from \'graphql-request\'')
    prepend.push('import { ContentGraphClient as BaseGraphClient } from \'@remkoj/optimizely-graph-client\'')
    prepend.push(`import type * as Types from './graphql'`)
    prepend.push("\n")

    append.push("\n\n")
    append.push(generateClientClass(functions))

    return { prepend, content: output.join("\n"), append }
}

function resolveSpreads(definition: DefinitionNode, document: DocumentNode, availableFragments: string[] = []) : FragmentDefinitionNode[]
{
    // Collect the fragment names we need to add
    const spreadNames : string[] = []
    visit(definition, {
        "FragmentSpread": {
            leave(node) {
                if (!availableFragments.includes(node.name.value))
                    spreadNames.push(node.name.value)
            }
        }
    })

    // Collect these fragments from the document
    const fragments : FragmentDefinitionNode[] = []
    visit(document, {
        FragmentDefinition: {
            leave(node) {
                if (spreadNames.includes(node.name.value))
                    fragments.push(node)
            }
        }
    })

    // Recurse down the fragments to build the full query
    const dependencies : FragmentDefinitionNode[] = []
    const availableFragmentNames = [ ...availableFragments, ...fragments.map(x => x.name.value )]
    fragments.forEach(fragment => {
        // Set the available names based on what was previously available, loaded above and loaded within this loop
        const resolvedSpreads = [ ...availableFragmentNames, ...dependencies.map(x => x.name.value)]

        // Recurse into fragments
        const fragmentDependencies = resolveSpreads(fragment, document, resolvedSpreads)
        dependencies.push(...fragmentDependencies)
    })
    return [ ...fragments, ...dependencies]
}

function generateClientClass(functions: string[]) : string
{
    return `/**
 * Function client for Optimizely Graph, exposing both the raw request method,
 * as well as the high level convenience methods to read content from 
 * Optimizely Graph. The actual format for each of the Content Items returned
 * by these convenience methods is defined by the GraphQL Fragments within the
 * application codebase.
 */
export class OptimizelyGraphClient extends BaseGraphClient {
   
${ functions.map(fn => {
    const fnTypeName = fn.charAt(0).toUpperCase() + fn.slice(1)
    const fnNamespace = "Types"
    const varsType = `${ fnNamespace }.${ fnTypeName }QueryVariables`
    const returnType = `${ fnNamespace }.${ fnTypeName }Query`
    return `    public ${ fn }(variables: ${ varsType}) : Promise<${ returnType }>
    {
        return ${ fn }(this, variables)
    }`}).join('\n\n')}
}`
}

export default { validate, plugin } as CodegenPlugin<PluginOptions>