// Auto generated dictionary
// @not-modified => When this line is removed, the "force" parameter of the CLI tool is required to overwrite this file
import { type ComponentTypeDictionary } from '@remkoj/optimizely-cms-react';

import NodeComponent from './node';
import ComponentFactory from './component';
import ExperienceFactory from './experience';
import MediaFactory from './media';
import NodesFactory from './nodes';
import PageFactory from './page';
import SectionFactory from './section';

// Build dictionary
export const CmsFactory : ComponentTypeDictionary = [
  {
    type: 'Node',
    component: NodeComponent
  },
  ...ComponentFactory,
  ...ExperienceFactory,
  ...MediaFactory,
  ...NodesFactory,
  ...PageFactory,
  ...SectionFactory
];

// Export dictionary
export default CmsFactory;
