// Auto generated dictionary
// @not-modified => When this line is removed, the "force" parameter of the CLI tool is required to overwrite this file
import { type ComponentTypeDictionary } from "@remkoj/optimizely-cms-react";
import NodeComponent from "./node";
import SectionFactory from "./section";
import PageFactory from "./page";
import NodesFactory from "./nodes";
import ExperienceFactory from "./experience";
import ElementFactory from "./element";
import ComponentFactory from "./component";

// Prefix entries - if needed
prefixDictionaryEntries(SectionFactory, "Section");
prefixDictionaryEntries(PageFactory, "Page");
prefixDictionaryEntries(NodesFactory, "Nodes");
prefixDictionaryEntries(ExperienceFactory, "Experience");
prefixDictionaryEntries(ExperienceFactory, "Page");
prefixDictionaryEntries(ElementFactory, "Element");
prefixDictionaryEntries(ElementFactory, "Component");
prefixDictionaryEntries(ComponentFactory, "Component");

// Build dictionary
export const CmsFactory : ComponentTypeDictionary = [
    { 
        type: "Node", 
        component: NodeComponent 
    },
    ...SectionFactory,
    ...PageFactory,
    ...NodesFactory,
    ...ExperienceFactory,
    ...ElementFactory,
    ...ComponentFactory
];

// Export dictionary
export default CmsFactory;

// Helper functions
function prefixDictionaryEntries(list: ComponentTypeDictionary, prefix: string) : ComponentTypeDictionary
{
    list.forEach((component, idx, dictionary) => {
        dictionary[idx].type = typeof component.type == 'string' ? prefix + "/" + component.type : [ prefix, ...component.type ]
    });
    return list;
}
