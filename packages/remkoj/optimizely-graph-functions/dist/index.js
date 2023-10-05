import { concatAST, Kind, visit, print } from 'graphql';
const plugin = {
    validate: (schema, document, config, outputFile, allPlugins, pluginContext) => {
        if (config.optlyFunctions) {
            if (!config.optlyFunctions)
                throw new Error("optlyFunctions must be defined to make the plugin work");
            if (!Array.isArray(config.optlyFunctions))
                throw new Error("If provided optlyFunctions must be an array");
            if (config.optlyFunctions.some(x => typeof (x) != 'string' || x.length == 0))
                throw new Error("If provided optlyFunctions must only contain strings");
        }
    },
    plugin: async (schema, documents, config, info) => {
        const functions = config.optlyFunctions || [];
        if (functions.length == 0)
            return "// NO FUNCTIONS TO BE EXPORTED";
        config.optlyInjections?.forEach(injection => {
            documents = inject(documents, injection.into, injection.nameRegex, injection.pathRegex);
        });
        const docs = concatAST(documents.filter(x => x.document).map(x => x.document));
        const output = [];
        functions.forEach(fn => {
            const fnDocuments = docs.definitions.filter(x => x.kind == Kind.OPERATION_DEFINITION && x.operation == "query" && x.name?.value == fn);
            if (fnDocuments.length != 1)
                throw new Error(`The function name must exist as query and be unique within your GraphQL documents`);
            const fnDocument = fnDocuments[0];
            const usedFragments = resolveSpreads(fnDocument, docs);
            const query = "\n" + [fnDocument, ...usedFragments]
                .map(part => print(part))
                .join("\n") + "\n";
            const varsType = `Types.${fn.charAt(0).toUpperCase()}${fn.slice(1)}QueryVariables`;
            const returnType = "Promise<any>";
            const functionBody = `export async function ${fn}(client: ApolloClient<NormalizedCacheObject>, variables: ${varsType}) : ${returnType}
{
    const query = \`${config.optlyPrettyQuery ? query : query.replace(/\s+/g, ' ').trim()}\`
    const result = await client.query({
        query: parse(query),
        variables
    })
    if (result.error)
        throw result.error
       
    return result.data
}`;
            output.push(functionBody);
        });
        const content = output.join("\n\n");
        const prepend = ["import \"server-only\""];
        const append = [""];
        const clientPath = config.clientPath || "./graphql";
        prepend.push(`import type * as Types from '${clientPath}'`);
        prepend.push('import { gql as parse, type ApolloClient, type NormalizedCacheObject } from \'@apollo/client\'');
        prepend.push("");
        return {
            prepend,
            content,
            append
        };
    }
};
function resolveSpreads(definition, document, availableFragments = []) {
    const spreadNames = [];
    visit(definition, {
        leave: (node) => {
            if (node.kind == Kind.FRAGMENT_SPREAD && !availableFragments.includes(node.name.value))
                spreadNames.push(node.name.value);
        }
    });
    const spreads = document.definitions.filter((x) => {
        return isFragmentDefinitionNode(x) &&
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
    const intoMatch = documents.map((x, idx) => {
        const matchId = x.document?.definitions.filter(isSelectionDefinitionNode).findIndex(x => x.name?.value == into);
        if (!matchId || matchId < 0)
            return undefined;
        return {
            docId: idx,
            path: x.location,
            match: {
                defId: matchId,
                data: x.document?.definitions[matchId]
            }
        };
    }).filter((x) => { return x?.match != null; })[0];
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
            .filter(isFragmentDefinitionNode)
            .forEach(fragment => {
            if (nameRegex) {
                const rx = new RegExp(nameRegex);
                if (!rx.test(fragment.name.value))
                    return;
            }
            matchingFragmentNames.push(fragment.name.value);
        });
    });
    if (matchingFragmentNames.length == 0)
        throw new Error("No fragments to inject have been found");
    if (matchingFragmentNames.length > 0 && !intoMatch.match.data?.selectionSet?.selections)
        throw new Error("The matching element has no selections section, which is mandatory to be extended");
    matchingFragmentNames.forEach(fragmentName => {
        intoMatch.match.data.selectionSet.selections.push({
            kind: Kind.FRAGMENT_SPREAD,
            name: {
                kind: Kind.NAME,
                value: fragmentName
            },
            directives: []
        });
    });
    if (intoMatch.match && documents[intoMatch.docId].document) {
        documents[intoMatch.docId].document.definitions[intoMatch.match.defId] = intoMatch.match.data;
    }
    return documents;
}
function isFragmentDefinitionNode(node) {
    return node?.kind == Kind.FRAGMENT_DEFINITION;
}
function isSelectionDefinitionNode(node) {
    return node?.kind == Kind.OPERATION_DEFINITION || node?.kind == Kind.FRAGMENT_DEFINITION;
}
export default plugin;
//# sourceMappingURL=index.js.map