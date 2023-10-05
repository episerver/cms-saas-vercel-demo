import { concatAST, Kind, visit, print, type DefinitionNode, type DocumentNode, type FragmentDefinitionNode, type OperationDefinitionNode } from 'graphql'
import type { CodegenPlugin, Types } from '@graphql-codegen/plugin-helpers'

type OptimizelyFunctionInjection = { into: string, nameRegex?: string, pathRegex?: string }

type OptimizelyFunctionOptions = {
    optlyFunctions: string[],
    optlyInjections?: OptimizelyFunctionInjection[],
    optlyPrettyQuery?:boolean,
    clientPath?:string
}

type OptimizelyGraphFunctionPlugin = CodegenPlugin<OptimizelyFunctionOptions>

/**
 * Optimizely plugin for GraphQL Codegen, which transforms a list of GraphQL
 * methods as easy to use server-only function. In addition to that it can
 * inject fragments into fragments of queries, enabling the build-time creation
 * of a query that incorporates the implementation defined types.
 */
const plugin : OptimizelyGraphFunctionPlugin = {
    validate: (schema, document, config: Partial<OptimizelyFunctionOptions>, outputFile, allPlugins, pluginContext) => 
    {
        if (config.optlyFunctions) {
            if (!config.optlyFunctions)
                throw new Error("optlyFunctions must be defined to make the plugin work")

            if (!Array.isArray(config.optlyFunctions))
                throw new Error("If provided optlyFunctions must be an array")

            if (config.optlyFunctions.some(x => typeof(x) != 'string' || x.length == 0))
                throw new Error("If provided optlyFunctions must only contain strings")
        }
    },
    plugin: async (schema, documents, config, info) =>
    {
        // Read the functions to fully build & extend
        const functions = config.optlyFunctions || []
        if (functions.length == 0)
            return "// NO FUNCTIONS TO BE EXPORTED"

        // Run fragment injections
        config.optlyInjections?.forEach(injection => {
            documents = inject(documents, injection.into, injection.nameRegex, injection.pathRegex)
        })
        
        // Output the functions
        const docs = concatAST(documents.filter(x => x.document).map(x => x.document) as DocumentNode[])
        const output : string[] = []
        functions.forEach(fn => {
            const fnDocuments = docs.definitions.filter(x => x.kind == Kind.OPERATION_DEFINITION && x.operation == "query" && x.name?.value == fn)
            if (fnDocuments.length != 1)
                throw new Error(`The function name must exist as query and be unique within your GraphQL documents`)
            const fnDocument = fnDocuments[0]

            // Build the pretty looking query
            const usedFragments = resolveSpreads(fnDocument, docs)
            const query = "\n"+[ fnDocument, ...usedFragments ]
                .map(part => print(part))
                .join("\n")+"\n"

            // Resolve the arguments

            const varsType = `Types.${fn.charAt(0).toUpperCase()}${ fn.slice(1) }QueryVariables`

            // Resolve the return type
            const returnType = "Promise<any>"
            
            // Merge into the function
            const functionBody = `export async function ${ fn }(client: ApolloClient<NormalizedCacheObject>, variables: ${ varsType}) : ${ returnType }
{
    const query = \`${ config.optlyPrettyQuery ? query : query.replace(/\s+/g, ' ').trim() }\`
    const result = await client.query({
        query: parse(query),
        variables
    })
    if (result.error)
        throw result.error
       
    return result.data
}`

            output.push(functionBody)
        })
        const content = output.join("\n\n")
        const prepend = ["import \"server-only\""]
        const append = [""]
        
        const clientPath = config.clientPath || "./graphql"
        prepend.push(`import type * as Types from '${ clientPath }'`)
        prepend.push('import { gql as parse, type ApolloClient, type NormalizedCacheObject } from \'@apollo/client\'')

        prepend.push("")
        return {
            prepend,
            content,
            append
        }
    }
}

function resolveSpreads(definition: DefinitionNode, document: DocumentNode, availableFragments: string[] = []) : FragmentDefinitionNode[]
{
    // Collect the fragment names we need to add
    /** @type string[] */
    const spreadNames : string[] = []
    visit(definition, {
        leave: (node) => {
            if (node.kind == Kind.FRAGMENT_SPREAD && !availableFragments.includes(node.name.value))
                spreadNames.push(node.name.value)
        }
    })

    // Collect these fragments from the document
    const spreads = document.definitions.filter((x): x is FragmentDefinitionNode => {
        return isFragmentDefinitionNode(x) &&
            spreadNames.includes(x.name.value)
    })

    // Recurse down the fragments to build the full query
    const deps : FragmentDefinitionNode[] = []
    spreads.forEach(fragment => {
        const resolvedSpreads = [ 
            ...availableFragments, 
            ...spreads.map(x => x.name.value),
            ...deps.map(x => x.name.value)
        ]
        const fragmentDeps = resolveSpreads(fragment, document, resolvedSpreads)
        deps.push(...fragmentDeps)
    })

    return [ ...spreads, ...deps]
}

function inject(documents: Types.DocumentFile[], into: string, nameRegex?: string, pathRegex?: string) : Types.DocumentFile[]
{
    type IntoMatchType = { 
        docId: number, 
        path?: string, 
        match: { 
            defId: number, 
            data: OperationDefinitionNode | FragmentDefinitionNode 
        }
    }
    // Get the INTO definition
    const intoMatch : IntoMatchType | undefined = documents.map((x: Types.DocumentFile, idx: number) : IntoMatchType | undefined => {
        const matchId = x.document?.definitions.filter(isSelectionDefinitionNode).findIndex(x => x.name?.value == into)
        if (!matchId || matchId < 0)
            return undefined
        return {
            docId: idx,
            path: x.location,
            match: {
                defId: matchId,
                data: x.document?.definitions[matchId] as OperationDefinitionNode | FragmentDefinitionNode
            }
        }
    }).filter((x) : x is IntoMatchType => { return x?.match != null })[0]
    if (!intoMatch)
        throw new Error(`No definitions with the name ${ into } identified`)
    
    // Get all matching fragment names
    const matchingFragmentNames : string[] = []
    documents.forEach(document => {
        // First filter the path
        if (pathRegex) {
            const rx = new RegExp(pathRegex)
            if (!rx.test(document.location ?? ""))
                return
        }

        // Then 
        document.document?.definitions
            .filter(isFragmentDefinitionNode)
            .forEach(fragment => {
                if (nameRegex) {
                    const rx = new RegExp(nameRegex)
                    if (!rx.test(fragment.name.value))
                        return
                }
                matchingFragmentNames.push(fragment.name.value)
            })

    })

    if (matchingFragmentNames.length == 0)
        throw new Error("No fragments to inject have been found")

    // Make sure the target can receive fragments
    if (matchingFragmentNames.length > 0 && !intoMatch.match.data?.selectionSet?.selections)
        throw new Error("The matching element has no selections section, which is mandatory to be extended")

    // Actually inject the fragments
    matchingFragmentNames.forEach(fragmentName => {
        //@ts-expect-error Ignoring the fact that the variable should be not modified, but copied
        intoMatch.match.data.selectionSet.selections.push({
            kind: Kind.FRAGMENT_SPREAD,
            name: {
                kind: Kind.NAME,
                value: fragmentName
            },
            directives: []
        })
    })
    
    // Update the INTO definition in the documents
    if (intoMatch.match && documents[intoMatch.docId].document) {
        //@ts-expect-error Ignoring the fact that the variable should be not modified, but copied
        documents[intoMatch.docId].document.definitions[intoMatch.match.defId] = intoMatch.match.data
    }
    return documents
}

function isFragmentDefinitionNode (node?: DefinitionNode) : node is FragmentDefinitionNode
{
    return node?.kind == Kind.FRAGMENT_DEFINITION
}

function isSelectionDefinitionNode (node?: DefinitionNode) : node is FragmentDefinitionNode | OperationDefinitionNode
{
    return node?.kind == Kind.OPERATION_DEFINITION || node?.kind == Kind.FRAGMENT_DEFINITION
}

export default plugin