"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform = void 0;
exports.pickTransformOptions = pickTransformOptions;
const graphql_1 = require("graphql");
function pickTransformOptions(options) {
    return {
        injections: options.injections ?? [],
        verbose: options.verbose ?? false,
        recursion: options.recursion ?? true
    };
}
const transform = ({ documents: files, config, schema, pluginContext }) => {
    if (config.verbose)
        console.debug(`[ OPTIMIZELY ] Starting Optimizely Graph Query & Fragment transformations`);
    const injections = config.injections ?? [];
    // Retrieve component fragments
    if (config.verbose)
        console.debug(`[ OPTIMIZELY ] Searching for fragments to inject`);
    const componentFragments = {};
    files.forEach(file => {
        if (!file.document)
            return;
        const applicableInjections = injections.filter(injection => !injection.pathRegex || (new RegExp(injection.pathRegex)).test(file.location ?? ""));
        if (!applicableInjections || applicableInjections.length == 0)
            return;
        (0, graphql_1.visit)(file.document, {
            FragmentDefinition: {
                enter(node) {
                    const matchingInjections = applicableInjections.filter(injection => !injection.nameRegex || (new RegExp(injection.nameRegex)).test(node.name.value));
                    if (!matchingInjections || matchingInjections.length == 0)
                        return false;
                    matchingInjections.forEach(injection => {
                        if (config.verbose)
                            console.debug(`[ OPTIMIZELY ] Found ${node.name.value} for ${injection.into} in file ${node.loc?.source?.name}`);
                        if (!componentFragments[injection.into])
                            componentFragments[injection.into] = [];
                        if (!componentFragments[injection.into].some(f => f.name.value == node.name.value))
                            componentFragments[injection.into].push(node);
                    });
                    return undefined;
                }
            }
        });
    });
    // Get the names we actually need to inject into, and return when none are present
    const intoNames = Object.getOwnPropertyNames(componentFragments);
    if (intoNames.length == 0)
        return files;
    if (config.verbose)
        console.debug(`[ OPTIMIZELY ] Update queries & fragments using the fragment(s): ${intoNames.join(', ')}`);
    // Update the documents
    const transformedFiles = files.map(file => {
        if (config.verbose)
            console.debug(`[ OPTIMIZELY ] Processing ${file.location}`);
        const document = file.document ? (0, graphql_1.visit)(file.document, {
            // Remove fragments from the preset, for which the target type does not exist
            /*FragmentDefinition: {
                enter(node) {
                    if (file.location && !fs.existsSync(file.location)) {
                        const typePresent = schema.definitions.some(definition => (definition.kind == Kind.OBJECT_TYPE_DEFINITION || definition.kind == Kind.INTERFACE_TYPE_DEFINITION) && definition.name.value == node.typeCondition.name.value)
                        if (!typePresent) {
                            if (config.verbose) console.debug(`[OPTIMIZELY] Type ${ node.typeCondition.name.value } not found, dropping fragment ${ node.name.value }`)
                            return null
                        }
                    }
                }
            },*/
            // Replace the fragment occurances
            SelectionSet: {
                leave(node, key, parent, path, ancestors) {
                    const parentName = [...ancestors].reverse().filter(isFragmentOrOperation).at(0)?.name?.value;
                    const sectionsToAdd = node.selections
                        .map(selection => {
                        if (selection.kind != graphql_1.Kind.FRAGMENT_SPREAD)
                            return undefined;
                        const testableName = config.recursion && selection.name.value.startsWith('Recursive') ? selection.name.value.substring(9) : selection.name.value;
                        if (config.recursion && config.verbose && testableName != selection.name.value)
                            console.debug(`[ OPTIMIZELY ] Using ${selection.name.value} in ${parentName} as ${testableName} to allow recursion`);
                        return intoNames.includes(testableName) ? testableName : undefined;
                    })
                        .filter(isNotNullOrUndefined);
                    if (sectionsToAdd.length == 0)
                        return;
                    if (config.verbose)
                        console.debug(`[ OPTIMIZELY ] Identified usage of fragment(s) ${sectionsToAdd.join(', ')} in ${parentName}, starting injection procedure`);
                    const newSelections = []; //.filter(selection => !(selection.kind == Kind.FRAGMENT_SPREAD && intoNames.includes(selection.name.value)))
                    sectionsToAdd.forEach(sectionName => {
                        const addedSelections = componentFragments[sectionName].map(fragment => {
                            if (newSelections.some(selection => selection.kind == graphql_1.Kind.FRAGMENT_SPREAD && selection.name.value == fragment.name.value)) {
                                if (config.verbose)
                                    console.debug(`[ OPTIMIZELY ] Fragment ${fragment.name.value} is already adjacent to ${sectionName}`);
                                return undefined;
                            }
                            /*if (config.verbose)
                                console.debug(`[ OPTIMIZELY ] Adding fragment ${ fragment.name.value } adjacent to ${ sectionName }`)*/
                            return {
                                kind: graphql_1.Kind.FRAGMENT_SPREAD,
                                directives: [],
                                name: {
                                    kind: graphql_1.Kind.NAME,
                                    value: fragment.name.value
                                }
                            };
                        }).filter(isNotNullOrUndefined);
                        if (addedSelections.length > 0) {
                            if (config.verbose)
                                console.log(`[ OPTIMIZELY ] Added fragments ${addedSelections.map(a => a.name.value).join(', ')} adjacent to ${sectionName}`);
                            newSelections.push(...addedSelections);
                        }
                    });
                    if (newSelections.length == 0)
                        return;
                    const newNode = {
                        ...node,
                        selections: [...node.selections, ...newSelections]
                    };
                    return newNode;
                }
            }
        }) : undefined;
        return {
            ...file,
            document: document,
        };
    });
    if (config.verbose)
        console.debug(`[ OPTIMIZELY ] Finished transformation procedure`);
    return transformedFiles;
};
exports.transform = transform;
exports.default = { transform: exports.transform };
function isNotNullOrUndefined(toTest) {
    return toTest !== null && toTest !== undefined;
}
function isFragmentOrOperation(x) {
    if (Array.isArray(x) || x == undefined || x == null)
        return false;
    return x.kind == graphql_1.Kind.FRAGMENT_DEFINITION || x.kind == graphql_1.Kind.OPERATION_DEFINITION;
}
//# sourceMappingURL=transform.js.map