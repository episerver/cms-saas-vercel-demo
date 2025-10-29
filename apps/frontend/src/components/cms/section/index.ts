// Auto generated dictionary
// @not-modified => When this line is removed, the "force" parameter of the CLI tool is required to overwrite this file
import { type ComponentTypeDictionary } from "@remkoj/optimizely-cms-react";
import BlankSectionComponent from "./BlankSection";
import SectionStylesFactory from "./styles";

// Prefix entries - if needed
prefixDictionaryEntries(SectionStylesFactory, "Styles");

// Build dictionary
export const SectionFactory : ComponentTypeDictionary = [
    { 
        type: "BlankSection", 
        component: BlankSectionComponent 
    },
    ...SectionStylesFactory
];

// Export dictionary
export default SectionFactory;

// Helper functions
function prefixDictionaryEntries(list: ComponentTypeDictionary, prefix: string) : ComponentTypeDictionary
{
    list.forEach((component, idx, dictionary) => {
        dictionary[idx].type = typeof component.type == 'string' ? prefix + "/" + component.type : [ prefix, ...component.type ]
    });
    return list;
}
