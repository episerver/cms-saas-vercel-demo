// Base Optimizely CMS Framework components
import { type CmsComponent } from "@remkoj/optimizely-cms-react"
import { type ImageElementDataFragment, ImageElementDataFragmentDoc } from "@/gql/graphql"
import { CmsEditable } from '@remkoj/optimizely-cms-react/rsc'

// Image Element types and templates
import type { ImageElementLayoutProps } from './displayTemplates'
import IconImageElement, { isIconImageLayout } from './_icon-image'
import DefaultImageElement from "./_default-image"

export const ImageElementElement : CmsComponent<ImageElementDataFragment, ImageElementLayoutProps> = ({ data, layoutProps, contentLink, inEditMode }) =>
{
    if (isIconImageLayout(layoutProps)) {
        return <CmsEditable as={ IconImageElement } data={ data } layoutProps={ layoutProps } cmsId={ contentLink.key }/>
    }
    return <CmsEditable as={ DefaultImageElement } data={ data } layoutProps={layoutProps} cmsId={ contentLink.key } withReducedMotion={inEditMode} />
}
ImageElementElement.displayName = "Image (Element/ImageElement)"
ImageElementElement.getDataFragment = () => ['ImageElementData', ImageElementDataFragmentDoc]

export default ImageElementElement