"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = exports.validate = void 0;
const graphql_1 = require("graphql");
const utils_1 = require("./utils");
const validate = (schema, document, config, outputFile, allPlugins, pluginContext) => {
    if (config.optlyFunctions) {
        if (!Array.isArray(config.optlyFunctions))
            throw new Error("If provided optlyFunctions must be an array");
        if (config.optlyFunctions.some(x => typeof (x) != 'string' || x.length == 0))
            throw new Error("If provided optlyFunctions must only contain strings");
    }
};
exports.validate = validate;
const plugin = async (schema, documents, config, info) => {
    const functions = config.optlyFunctions || [];
    if (functions.length == 0)
        return "// NO FUNCTIONS TO BE EXPORTED";
    config.optlyInjections?.forEach(injection => {
        documents = inject(documents, injection.into, injection.nameRegex, injection.pathRegex);
    });
    const docs = (0, graphql_1.concatAST)(documents.map(x => x.document).filter(utils_1.isNotNullOrUndefined));
    const output = await Promise.all(functions.map(async (fn) => {
        const fnOutput = [];
        const fnDocuments = docs.definitions.filter(x => x.kind == graphql_1.Kind.OPERATION_DEFINITION && x.operation == "query" && x.name?.value == fn);
        if (fnDocuments.length != 1)
            throw new Error(`The function name must exist as query and be unique within your GraphQL documents`);
        const fnDocument = fnDocuments[0];
        const fnTypeName = fn.charAt(0).toUpperCase() + fn.slice(1);
        const fnNamespace = "Types";
        const usedFragments = resolveSpreads(fnDocument, docs);
        const query = "\n" + [fnDocument, ...usedFragments]
            .map(part => (0, graphql_1.print)(part))
            .join("\n") + "\n";
        const varsType = `${fnNamespace}.${fnTypeName}QueryVariables`;
        const returnType = `${fnNamespace}.${fnTypeName}Query`;
        const functionBody = [];
        functionBody.push(`export function ${fn}(client: GraphQLClient, variables: ${varsType}) : Promise<${returnType}>`);
        functionBody.push('{');
        functionBody.push(`  const query = gql\`${config.optlyPrettyQuery ? query : query.replace(/\s+/g, ' ').trim()}\``);
        functionBody.push(`  return client.request<${returnType}, ${varsType}>(query, variables)`);
        functionBody.push('}');
        fnOutput.push(functionBody.join("\n"));
        return fnOutput;
    })).then(results => results.flat()).catch((err) => {
        const msg = ['/**', 'Error generating functions', err.name, err.message, err.stack ?? "- no stack trace -", '*/'];
        functions.forEach(fnName => msg.push(`export async function ${fnName}() { throw new Error('Function generation error')}`));
        return msg;
    });
    const content = output.join("\n\n");
    const prepend = [""];
    const append = ["\n", "", `/**
 * Function client for Optimizely Graph, exposing both the raw request method,
 * as well as the high level convenience methods to read content from 
 * Optimizely Graph. The actual format for each of the Content Items returned
 * by these convenience methods is defined by the GraphQL Fragments within the
 * application codebase.
 */`, `export class OptimizelyClient {
  private _client : GraphQLClient

  public constructor (client: GraphQLClient) 
  {
    this._client = client
  }

  /**
   * Direct Pass through to the GraphQL Request based client
   * 
   * @see     GraphQLClient.request
   * @param   documentOrOptions 
   * @param   variablesAndRequestHeaders 
   * @returns 
   */
  //@ts-expect-error The Args property isn't correctly types for this pass-through
  public request : GraphQLClient['request'] = (documentOrOptions, ...variablesAndRequestHeaders) => this._client.request(documentOrOptions, ...variablesAndRequestHeaders)


  /**
   * Direct Pass through to the GraphQL Request based client
   *
   * @see     GraphQLClient.request
   * @param   documentOrOptions 
   * @param   variablesAndRequestHeaders 
   * @returns 
   */
  //@ts-expect-error The Args property isn't correctly types for this pass-through
  public query : GraphQLClient['request'] = (documentOrOptions, ...variablesAndRequestHeaders) => this._client.request(documentOrOptions, ...variablesAndRequestHeaders)
    
${functions.map(fn => {
            const fnTypeName = fn.charAt(0).toUpperCase() + fn.slice(1);
            const fnNamespace = "Types";
            const varsType = `${fnNamespace}.${fnTypeName}QueryVariables`;
            const returnType = `${fnNamespace}.${fnTypeName}Query`;
            return `  public ${fn}(variables: ${varsType}) : Promise<${returnType}>
  {
    return ${fn}(this._client, variables)
  }`;
        }).join('\n\n')}
}
`];
    const clientPath = config.clientPath || "./graphql";
    prepend.push(`import type * as Types from '${clientPath}'`);
    prepend.push('import { gql , type GraphQLClient } from \'graphql-request\'');
    prepend.push("\n");
    return {
        prepend,
        content,
        append
    };
};
exports.plugin = plugin;
function resolveSpreads(definition, document, availableFragments = []) {
    const spreadNames = [];
    (0, graphql_1.visit)(definition, {
        leave: (node) => {
            if (node.kind == graphql_1.Kind.FRAGMENT_SPREAD && !availableFragments.includes(node.name.value))
                spreadNames.push(node.name.value);
        }
    });
    const spreads = document.definitions.filter((x) => {
        return (0, utils_1.isFragmentDefinitionNode)(x) &&
            spreadNames.includes(x.name.value);
    });
    const deps = [];
    spreads.forEach(fragment => {
        const resolvedSpreads = [
            ...availableFragments,
            ...spreads.map(x => x.name.value),
            ...deps.map(x => x.name.value)
        ];
        const fragmentDeps = resolveSpreads(fragment, document, resolvedSpreads);
        deps.push(...fragmentDeps);
    });
    return [...spreads, ...deps];
}
function inject(documents, into, nameRegex, pathRegex) {
    const intoMatch = documents.map((docNode, idx) => {
        const matchId = docNode.document?.definitions.filter(utils_1.isSelectionDefinitionNode).findIndex(y => y.name ? y.name.value == into : false) ?? -1;
        return {
            docId: idx,
            path: docNode.location,
            match: matchId == -1 ? null : {
                defId: matchId,
                data: docNode.document?.definitions[matchId]
            }
        };
    }).filter(utils_1.isIntoMatch)[0];
    if (!intoMatch)
        throw new Error(`No definitions with the name ${into} identified`);
    const matchingFragmentNames = [];
    documents.forEach(document => {
        if (pathRegex) {
            const rx = new RegExp(pathRegex);
            if (!rx.test(document.location ?? ""))
                return;
        }
        document.document?.definitions
            .filter(utils_1.isFragmentDefinitionNode)
            .forEach(fragment => {
            if (nameRegex) {
                const rx = new RegExp(nameRegex);
                if (!rx.test(fragment.name.value))
                    return;
            }
            matchingFragmentNames.push(fragment.name.value);
        });
    });
    if (matchingFragmentNames.length == 0) {
        console.log(`[NOTICE] No fragments to inject have been found for ${into}`);
        return documents;
    }
    if (matchingFragmentNames.length > 0 && !intoMatch.match.data?.selectionSet?.selections)
        throw new Error("The matching element has no selections section, which is mandatory to be extended");
    matchingFragmentNames.forEach(fragmentName => {
        intoMatch.match.data.selectionSet.selections.push({
            kind: graphql_1.Kind.FRAGMENT_SPREAD,
            name: {
                kind: graphql_1.Kind.NAME,
                value: fragmentName
            },
            directives: []
        });
    });
    (documents[intoMatch.docId].document?.definitions)[intoMatch.match.defId] = intoMatch.match.data;
    return documents;
}
exports.default = { validate: exports.validate, plugin: exports.plugin };
//# sourceMappingURL=index.js.map