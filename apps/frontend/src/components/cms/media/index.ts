// Auto generated dictionary
// @not-modified => When this line is removed, the "force" parameter of the CLI tool is required to overwrite this file
import { type ComponentTypeDictionary } from "@remkoj/optimizely-cms-react";
import MediaVideoFactory from "./Video";
import MediaImageFactory from "./Image";

// Prefix entries - if needed
prefixDictionaryEntries(MediaVideoFactory, "Video");
prefixDictionaryEntries(MediaImageFactory, "Image");

// Build dictionary
export const MediaFactory : ComponentTypeDictionary = [
    ...MediaVideoFactory,
    ...MediaImageFactory
];

// Export dictionary
export default MediaFactory;

// Helper functions
function prefixDictionaryEntries(list: ComponentTypeDictionary, prefix: string) : ComponentTypeDictionary
{
    list.forEach((component, idx, dictionary) => {
        dictionary[idx].type = typeof component.type == 'string' ? prefix + "/" + component.type : [ prefix, ...component.type ]
    });
    return list;
}
