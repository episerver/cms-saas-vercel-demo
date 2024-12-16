// Auto generated dictionary
// @not-modified => When this line is removed, the "force" parameter of the CLI tool is required to overwrite this file
import { type ComponentTypeDictionary } from "@remkoj/optimizely-cms-react";
import NodesRowFactory from "./row";
import NodesColumnFactory from "./column";

// Prefix entries - if needed
prefixDictionaryEntries(NodesRowFactory, "Row");
prefixDictionaryEntries(NodesColumnFactory, "Column");

// Build dictionary
export const NodesFactory : ComponentTypeDictionary = [
    ...NodesRowFactory,
    ...NodesColumnFactory
];

// Export dictionary
export default NodesFactory;

// Helper functions
function prefixDictionaryEntries(list: ComponentTypeDictionary, prefix: string) : ComponentTypeDictionary
{
    list.forEach((component, idx, dictionary) => {
        dictionary[idx].type = typeof component.type == 'string' ? prefix + "/" + component.type : [ prefix, ...component.type ]
    });
    return list;
}
