// Auto generated dictionary
// @not-modified => When this line is removed, the "force" parameter of the CLI tool is required to overwrite this file
import { type ComponentTypeDictionary } from '@remkoj/optimizely-cms-react';
import dynamic from 'next/dynamic';

import ArticleListElementLoader from './ArticleListElement/loading';
import ButtonBlockComponent from './ButtonBlock';
import CTAElementComponent from './CTAElement';
import CarouselBlockComponent from './CarouselBlock';
import ContentRecsElementComponent from './ContentRecsElement';
import ContinueReadingComponentComponent from './ContinueReadingComponent';
import HeadingElementComponent from './HeadingElement';
import HeroBlockComponent from './HeroBlock';
import ImageElementComponent from './ImageElement';
import LayoutSettingsBlockComponent from './LayoutSettingsBlock';
import MegaMenuGroupBlockMobileComponent from './MegaMenuGroupBlock/mobile';
import MegaMenuGroupBlockComponent from './MegaMenuGroupBlock';
import MenuNavigationBlockComponent from './MenuNavigationBlock';
import OdpEmbedBlockComponent from './OdpEmbedBlock';
import PageSeoSettingsComponent from './PageSeoSettings';
import ParagraphElementComponent from './ParagraphElement';
import QuoteBlockComponent from './QuoteBlock';
import RichTextElementComponent from './RichTextElement';
import TestimonialElementComponent from './TestimonialElement';
import TextBlockComponent from './TextBlock';
import VideoElementComponent from './VideoElement';
import PageFactory from './Page';

// Lazy load components that have a loading file, this only affects client components
// See https://nextjs.org/docs/app/guides/lazy-loading#importing-server-components
// for more details on how this affects server components in Next.js
const ArticleListElementComponent = dynamic(() => import('./ArticleListElement'), {
  ssr: true,
  loading: ArticleListElementLoader
});

// Build dictionary
export const ComponentFactory : ComponentTypeDictionary = [
  {
    type: 'ArticleListElement',
    component: ArticleListElementComponent
  },
  {
    type: 'ButtonBlock',
    component: ButtonBlockComponent
  },
  {
    type: 'CTAElement',
    component: CTAElementComponent
  },
  {
    type: 'CarouselBlock',
    component: CarouselBlockComponent
  },
  {
    type: 'ContentRecsElement',
    component: ContentRecsElementComponent
  },
  {
    type: 'ContinueReadingComponent',
    component: ContinueReadingComponentComponent
  },
  {
    type: 'HeadingElement',
    component: HeadingElementComponent
  },
  {
    type: 'HeroBlock',
    component: HeroBlockComponent
  },
  {
    type: 'ImageElement',
    component: ImageElementComponent
  },
  {
    type: 'LayoutSettingsBlock',
    component: LayoutSettingsBlockComponent
  },
  {
    type: 'MegaMenuGroupBlock',
    variant: 'mobile',
    component: MegaMenuGroupBlockMobileComponent
  },
  {
    type: 'MegaMenuGroupBlock',
    component: MegaMenuGroupBlockComponent
  },
  {
    type: 'MenuNavigationBlock',
    component: MenuNavigationBlockComponent
  },
  {
    type: 'OdpEmbedBlock',
    component: OdpEmbedBlockComponent
  },
  {
    type: 'PageSeoSettings',
    component: PageSeoSettingsComponent
  },
  {
    type: 'ParagraphElement',
    component: ParagraphElementComponent
  },
  {
    type: 'QuoteBlock',
    component: QuoteBlockComponent
  },
  {
    type: 'RichTextElement',
    component: RichTextElementComponent
  },
  {
    type: 'TestimonialElement',
    component: TestimonialElementComponent
  },
  {
    type: 'TextBlock',
    component: TextBlockComponent
  },
  {
    type: 'VideoElement',
    component: VideoElementComponent
  },
  ...PageFactory
];

// Export dictionary
export default ComponentFactory;
