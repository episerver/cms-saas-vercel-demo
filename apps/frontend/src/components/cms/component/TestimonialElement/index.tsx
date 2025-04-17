import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { TestimonialElementDataFragmentDoc, type TestimonialElementDataFragment } from "@/gql/graphql";
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { RichText } from "@remkoj/optimizely-cms-react/rsc";
import { CmsImage } from "@/components/shared/cms_image"
import Cms from "@cms";

/**
 * Testimonial
 * A customer testimonial
 */
export const TestimonialElementElement : CmsComponent<TestimonialElementDataFragment> = ({ 
    data: { 
        referenceText,
        customerImage,
        customerLocation,
        customerName
    }, 
    contentLink: { 
        key 
    },
        ctx
    }) => {
    return <CmsEditable as="figure" className='testimonial' cmsId={ key } ctx={ ctx }>
        <RichText as="blockquote" cmsFieldName="referenceText" text={ referenceText?.json } className='rich-text m-0 p-0 border-l-0 prose-p:mt-0' ctx={ ctx } />
        <figcaption>
            <cite className="ml-4 lg:flex lg:justify-start lg:items-center not-italic">
                <CmsEditable as="p" cmsFieldName="customerName" className="whitespace-nowrap align-middle mt-0 mb-2 lg:mb-0" ctx={ctx}>
                    { customerImage &&
                        <CmsEditable as={CmsImage} cmsFieldName="customerImage" src={ customerImage } alt={ customerName ?? "" } width={200} height={200} className='rounded-full h-12 w-12 mr-3 not-prose inline-block' ctx={ctx}/>
                    }
                    { customerName ?? "" }
                </CmsEditable>
                { customerLocation && <>
                    <span className="mx-2 hidden lg:inline-block">—</span>
                    <CmsEditable as="p" cmsFieldName="customerLocation" className="!text-[1.2rem] lg:!text-[1.6rem] my-0" ctx={ctx}>{ customerLocation }</CmsEditable>
                </> }
            </cite>
        </figcaption>
    </CmsEditable>
}
TestimonialElementElement.displayName = "Testimonial (Element/TestimonialElement)"
TestimonialElementElement.getDataFragment = () => ['TestimonialElementData', TestimonialElementDataFragmentDoc]

export default TestimonialElementElement