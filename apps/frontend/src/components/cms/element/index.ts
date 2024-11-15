// Auto generated dictionary
// @not-modified => When this line is removed, the "force" parameter of the CLI tool is required to overwrite this file
import { type ComponentTypeDictionary } from "@remkoj/optimizely-cms-react";
import VideoElementComponent from "./VideoElement";
import TestimonialElementComponent from "./TestimonialElement";
import ParagraphElementComponent from "./ParagraphElement";
import ImageElementComponent from "./ImageElement";
import HeadingElementComponent from "./HeadingElement";
import CTAElementComponent from "./CTAElement";
import ContentRecsElementComponent from "./ContentRecsElement";
import ArticleListElementComponent from "./ArticleListElement";
import ArticleListElementLoader from "./ArticleListElement/loading";

// Build dictionary
export const ElementFactory : ComponentTypeDictionary = [
    { 
        type: "VideoElement", 
        component: VideoElementComponent 
    },
    { 
        type: "TestimonialElement", 
        component: TestimonialElementComponent 
    },
    { 
        type: "ParagraphElement", 
        component: ParagraphElementComponent 
    },
    { 
        type: "ImageElement", 
        component: ImageElementComponent 
    },
    { 
        type: "HeadingElement", 
        component: HeadingElementComponent 
    },
    { 
        type: "CTAElement", 
        component: CTAElementComponent 
    },
    { 
        type: "ContentRecsElement", 
        component: ContentRecsElementComponent 
    },
    { 
        type: "ArticleListElement", 
        component: ArticleListElementComponent,
        useSuspense: true,
        loader: ArticleListElementLoader
    }
];

// Export dictionary
export default ElementFactory;
