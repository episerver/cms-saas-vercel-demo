"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = exports.validate = exports.DefaultFunctions = void 0;
exports.pickPluginOptions = pickPluginOptions;
const graphql_1 = require("graphql");
const utils_1 = require("./utils");
exports.DefaultFunctions = ['getContentType', 'getContentByPath', 'getContentById'];
function pickPluginOptions(options) {
    return {
        ...(options.config ?? {}),
        functions: options.functions ?? exports.DefaultFunctions,
        prettyPrintQuery: options.prettyPrintQuery ?? false,
        clientPath: options.clientPath ?? "./graphql"
    };
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
const validate = (schema, document, config, outputFile, allPlugins, pluginContext) => {
    if (config.functions) {
        if (!Array.isArray(config.functions))
            throw new Error("If provided functions must be an array");
        if (config.functions.some(x => typeof (x) != 'string' || x.length == 0))
            throw new Error("If provided functions must only contain non-empty strings");
    }
};
exports.validate = validate;
/**
 * Actual Plugin logic
 *
 * @param schema
 * @param documents
 * @param config
 * @param info
 * @returns
 */
const plugin = async (schema, documents, config, info) => {
    // Read the functions to fully build & extend
    const functions = config.functions || [];
    if (functions.length == 0)
        return "// NO FUNCTIONS TO BE EXPORTED";
    // Output the functions
    const docs = (0, graphql_1.concatAST)(documents.map(x => x.document).filter(utils_1.isNotNullOrUndefined));
    const output = functions.map(fn => {
        try {
            const queryNode = (0, graphql_1.getOperationAST)(docs, fn);
            if (!(queryNode && queryNode.operation == graphql_1.OperationTypeNode.QUERY))
                return [`export async function ${fn}() { throw new Error('No query named ${fn} defined')}`];
            const fragments = resolveSpreads(queryNode, docs);
            const fnTypeName = fn; //.charAt(0).toUpperCase() + fn.slice(1)
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
    prepend.push(`import type * as Types from './graphql'`);
    prepend.push("\n");
    append.push("\n");
    return { prepend, content: output.join("\n"), append };
};
exports.plugin = plugin;
function resolveSpreads(definition, document, availableFragments = []) {
    // Collect the fragment names we need to add
    const spreadNames = [];
    (0, graphql_1.visit)(definition, {
        "FragmentSpread": {
            leave(node) {
                if (!availableFragments.includes(node.name.value))
                    spreadNames.push(node.name.value);
            }
        }
    });
    // Collect these fragments from the document
    const fragments = [];
    (0, graphql_1.visit)(document, {
        FragmentDefinition: {
            leave(node) {
                if (spreadNames.includes(node.name.value))
                    fragments.push(node);
            }
        }
    });
    // Recurse down the fragments to build the full query
    const dependencies = [];
    const availableFragmentNames = [...availableFragments, ...fragments.map(x => x.name.value)];
    fragments.forEach(fragment => {
        // Set the available names based on what was previously available, loaded above and loaded within this loop
        const resolvedSpreads = [...availableFragmentNames, ...dependencies.map(x => x.name.value)];
        // Recurse into fragments
        const fragmentDependencies = resolveSpreads(fragment, document, resolvedSpreads);
        dependencies.push(...fragmentDependencies);
    });
    return [...fragments, ...dependencies];
}
exports.default = { validate: exports.validate, plugin: exports.plugin };
//# sourceMappingURL=index.js.map