const { concatAST, Kind, visit, print } = require('graphql')

/**
 * Optimizely plugin for GraphQL Codegen, which transforms a list of GraphQL
 * methods as easy to use server-only function. In addition to that it can
 * inject fragments into fragments of queries, enabling the build-time creation
 * of a query that incorporates the implementation defined types.
 * 
 * @type import('@graphql-codegen/plugin-helpers').CodegenPlugin<{ optlyFunctions ?: string[], optlyInjections ?: { into: string, nameRegex?: string, pathRegex?: string }[], clientPath?:string,optlyPrettyQuery?:boolean }> 
 */
module.exports = {
    validate: (schema, document, config, outputFile, allPlugins, pluginContext) => 
    {
        if (config.optlyFunctions) {
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
        const docs = concatAST(documents.filter(x => x.document).map(x => x.document))
        const output = await Promise.all(functions.map(async fn => {
            const fnOutput = []
            const fnDocuments = docs.definitions.filter(x => x.kind == Kind.OPERATION_DEFINITION && x.operation == "query" && x.name?.value == fn)
            if (fnDocuments.length != 1)
                throw new Error(`The function name must exist as query and be unique within your GraphQL documents`)
            const fnDocument = fnDocuments[0]
            const fnTypeName = fn.charAt(0).toUpperCase() + fn.slice(1)
            const fnNamespace = "Types"

            // Build the pretty looking query
            const usedFragments = resolveSpreads(fnDocument, docs)
            const query = "\n"+[ fnDocument, ...usedFragments ]
                .map(part => print(part))
                .join("\n")+"\n"

            // Resolve the arguments
            const varsType = `${ fnNamespace }.${ fnTypeName }QueryVariables`
            const returnType = `Promise<${ fnNamespace }.${ fnTypeName }Query>`
            
            // Merge into the function
            /** @type { string[] } */
            const functionBody = []
            functionBody.push(`export async function ${ fn }(client: ApolloClient<NormalizedCacheObject>, variables: ${ varsType}) : ${ returnType }`)
            functionBody.push('{')
            functionBody.push(`  const query = \`${ config.optlyPrettyQuery ? query : query.replace(/\s+/g, ' ').trim() }\``)
            functionBody.push('  const result = await client.query({ query: parse(query), variables })')
            functionBody.push('  if (result.error) throw result.error')
            functionBody.push('  return result.data')
            functionBody.push('}')

            fnOutput.push(functionBody.join("\n"))
            return fnOutput
        })).then(results => results.flat()).catch(e => {
            /** @type {Error} */
            const err = e
            const msg = ['/**','Error generating functions',err.name, err.message, err.stack ?? "- no stack trace -",'*/']
            functions.forEach(fnName => msg.push(`export async function ${fnName}() { throw new Error('Function generation error')}`))
            return msg
        })
        const content = output.join("\n\n")
        const prepend = ["import \"server-only\""]
        const append = [""]
        
        const clientPath = config.clientPath || "./graphql"
        prepend.push(`import type * as Types from '${ clientPath }'`)
        prepend.push('import { gql as parse, type ApolloClient, type NormalizedCacheObject } from \'@apollo/client\'')

        prepend.push("\n")
        return {
            prepend,
            content,
            append
        }
    }
}

/**
 * 
 * @param { import('graphql').DefinitionNode } definition 
 * @param { import('graphql').DocumentNode } document
 * @param { string[] } availableFragments
 */
function resolveSpreads(definition, document, availableFragments = [])
{
    // Collect the fragment names we need to add
    /** @type string[] */
    const spreadNames = []
    visit(definition, {
        leave: (node) => {
            if (node.kind == Kind.FRAGMENT_SPREAD && !availableFragments.includes(node.name.value))
                spreadNames.push(node.name.value)
        }
    })

    // Collect these fragments from the document
    const spreads = document.definitions.filter(x => {
        return x.kind == Kind.FRAGMENT_DEFINITION &&
            spreadNames.includes(x.name.value)
    })

    // Recurse down the fragments to build the full query
    /** @type { import('graphql').DefinitionNode[] } */
    const deps = []
    spreads.forEach(fragment => {
        const resolvedSpreads = [ 
            ...availableFragments, 
            ...spreads.map(x => x.name.value),
            ...deps.map(x => x.name.value)]
        if (resolvedSpreads.resolvedSpreads > 2)
            throw new Error(resolvedFragments.join(", "))
        const fragmentDeps = resolveSpreads(fragment, document, resolvedSpreads)
        deps.push(...fragmentDeps)
    })

    return [ ...spreads, ...deps]
}

/**
 * 
 * @param {import('@graphql-codegen/plugin-helpers').Types.DocumentFile[] } documents 
 * @param {string} into 
 * @param {string | undefined} nameRegex 
 * @param {string | undefined} pathRegex 
 * @return {import('@graphql-codegen/plugin-helpers').Types.DocumentFile[] }
 */
function inject(documents, into, nameRegex, pathRegex)
{
    // Get the INTO definition
    const intoMatch = documents.map((x,idx) => {
        const matchId = x.document.definitions.findIndex(x => x.name.value == into)
        
        return {
            docId: idx,
            path: x.location,
            match: matchId == -1 ? null : {
                defId: matchId,
                data: x.document.definitions[matchId]
            }
        }
    }).filter(x => x.match)[0]
    if (!intoMatch)
        throw new Error(`No definitions with the name ${ into } identified`)
    
    // Get all matching fragment names
    /** @type string[] */
    const matchingFragmentNames = []
    documents.forEach(document => {
        // First filter the path
        if (pathRegex) {
            const rx = new RegExp(pathRegex)
            if (!rx.test(document.location))
                return
        }

        // Then 
        document.document.definitions
            .filter(x => x.kind == Kind.FRAGMENT_DEFINITION && x.name.value)
            .forEach(fragment => {
                if (nameRegex) {
                    const rx = new RegExp(nameRegex)
                    if (!rx.text(fragment.name.value))
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
    documents[intoMatch.docId].document.definitions[intoMatch.match.defId] = intoMatch.match.data
    return documents
}