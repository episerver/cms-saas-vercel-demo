"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = exports.validate = exports.pickPluginOptions = void 0;
const graphql_1 = require("graphql");
const utils_1 = require("./utils");
function pickPluginOptions(options) {
    return {
        functions: options.functions ?? ['getContentByPath', 'getContentById'],
        prettyPrintQuery: options.prettyPrintQuery ?? false,
        clientPath: options.clientPath ?? "./graphql"
    };
}
exports.pickPluginOptions = pickPluginOptions;
const validate = (schema, document, config, outputFile, allPlugins, pluginContext) => {
    if (config.functions) {
        if (!Array.isArray(config.functions))
            throw new Error("If provided functions must be an array");
        if (config.functions.some(x => typeof (x) != 'string' || x.length == 0))
            throw new Error("If provided functions must only contain non-empty strings");
    }
};
exports.validate = validate;
const plugin = async (schema, documents, config, info) => {
    const functions = config.functions || [];
    if (functions.length == 0)
        return "// NO FUNCTIONS TO BE EXPORTED";
    const docs = (0, graphql_1.concatAST)(documents.map(x => x.document).filter(utils_1.isNotNullOrUndefined));
    const output = functions.map(fn => {
        try {
            const queryNode = (0, graphql_1.getOperationAST)(docs, fn);
            if (!(queryNode && queryNode.operation == graphql_1.OperationTypeNode.QUERY))
                return [`export async function ${fn}() { throw new Error('No query named ${fn} defined')}`];
            const fragments = resolveSpreads(queryNode, docs);
            const fnTypeName = fn.charAt(0).toUpperCase() + fn.slice(1);
            const varsType = `Types.${fnTypeName}QueryVariables`;
            const returnType = `Types.${fnTypeName}Query`;
            const query = [queryNode, ...fragments].map(node => (0, graphql_1.print)(node)).join("\n\n");
            const functionBody = [];
            functionBody.push(`export function ${fn}(client: GraphQLClient, variables: ${varsType}) : Promise<${returnType}>`);
            functionBody.push('{');
            functionBody.push(`  const query = gql\`${config.prettyPrintQuery ? query : query.replace(/\s+/g, ' ').trim()}\``);
            functionBody.push(`  return client.request<${returnType}, ${varsType}>(query, variables)`);
            functionBody.push('}');
            return functionBody;
        }
        catch (e) {
            return [`export async function ${fn}() { throw new Error('Function generation error')}`];
        }
    }).flat();
    const prepend = [];
    const append = [];
    prepend.push('import { gql, type GraphQLClient } from \'graphql-request\'');
    prepend.push('import { ContentGraphClient as BaseGraphClient } from \'@remkoj/optimizely-graph-client\'');
    prepend.push(`import type * as Types from './graphql'`);
    prepend.push("\n");
    append.push("\n\n");
    append.push(generateClientClass(functions));
    return { prepend, content: output.join("\n"), append };
};
exports.plugin = plugin;
function resolveSpreads(definition, document, availableFragments = []) {
    const spreadNames = [];
    (0, graphql_1.visit)(definition, {
        "FragmentSpread": {
            leave(node) {
                if (!availableFragments.includes(node.name.value))
                    spreadNames.push(node.name.value);
            }
        }
    });
    const fragments = [];
    (0, graphql_1.visit)(document, {
        FragmentDefinition: {
            leave(node) {
                if (spreadNames.includes(node.name.value))
                    fragments.push(node);
            }
        }
    });
    const dependencies = [];
    const availableFragmentNames = [...availableFragments, ...fragments.map(x => x.name.value)];
    fragments.forEach(fragment => {
        const resolvedSpreads = [...availableFragmentNames, ...dependencies.map(x => x.name.value)];
        const fragmentDependencies = resolveSpreads(fragment, document, resolvedSpreads);
        dependencies.push(...fragmentDependencies);
    });
    return [...fragments, ...dependencies];
}
function generateClientClass(functions) {
    return `/**
 * Function client for Optimizely Graph, exposing both the raw request method,
 * as well as the high level convenience methods to read content from 
 * Optimizely Graph. The actual format for each of the Content Items returned
 * by these convenience methods is defined by the GraphQL Fragments within the
 * application codebase.
 */
export class OptimizelyGraphClient extends BaseGraphClient {
   
${functions.map(fn => {
        const fnTypeName = fn.charAt(0).toUpperCase() + fn.slice(1);
        const fnNamespace = "Types";
        const varsType = `${fnNamespace}.${fnTypeName}QueryVariables`;
        const returnType = `${fnNamespace}.${fnTypeName}Query`;
        return `    public ${fn}(variables: ${varsType}) : Promise<${returnType}>
    {
        return ${fn}(this, variables)
    }`;
    }).join('\n\n')}
}`;
}
exports.default = { validate: exports.validate, plugin: exports.plugin };
//# sourceMappingURL=index.js.map