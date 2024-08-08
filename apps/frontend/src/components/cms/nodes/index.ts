// Auto generated dictionary
import { ComponentTypeDictionary } from "@remkoj/optimizely-cms-react";
import columnDictionary from "./column";
import rowDictionary from "./row";

// Prefix entries - if needed
prefixDictionaryEntries(columnDictionary, "Column");
prefixDictionaryEntries(rowDictionary, "Row");

// Build dictionary
export const nodesDictionary : ComponentTypeDictionary = [
    ...columnDictionary,
    ...rowDictionary
];

// Export dictionary
export default nodesDictionary;

// Helper functions
function prefixDictionaryEntries(list: ComponentTypeDictionary, prefix: string) : ComponentTypeDictionary
{
    list.forEach((component, idx, dictionary) => {
        dictionary[idx].type = typeof component.type == 'string' ? prefix + "/" + component.type : [ prefix, ...component.type ]
    });
    return list;
}
