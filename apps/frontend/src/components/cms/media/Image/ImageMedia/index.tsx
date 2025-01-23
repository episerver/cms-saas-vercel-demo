import { type CmsComponent, CmsEditable } from '@remkoj/optimizely-cms-react/rsc';
import { ImageMediaComponentDataFragmentDoc, type ImageMediaComponentDataFragment } from "@/gql/graphql";
import Image from "next/image";

export const ImageMedia : CmsComponent<ImageMediaComponentDataFragment> = ({data, contentLink}) => {
    const alt : string = data.alt || data.meta?.name || ""
    const url : string | null | undefined = data.meta?.url?.default

    if (!url)
        return null

    return <CmsEditable cmsId={ contentLink.key } as="div" className='relative w-full h-full'>
        <Image fill src={url} alt={alt} className='object-contain' />
    </CmsEditable>
}
ImageMedia.getDataFragment = () => ['ImageMediaComponentData', ImageMediaComponentDataFragmentDoc]

export default ImageMedia