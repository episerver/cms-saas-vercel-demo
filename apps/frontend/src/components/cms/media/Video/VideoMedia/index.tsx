import { type CmsComponent, CmsEditable } from '@remkoj/optimizely-cms-react/rsc';
import { VideoMediaComponentDataFragmentDoc, type VideoMediaComponentDataFragment } from "@/gql/graphql";

export const VideoMedia : CmsComponent<VideoMediaComponentDataFragment> = ({data, contentLink}) => {
    const url : string | null | undefined = data.meta?.url?.default
    const label : string  = data.meta?.name ?? ''

    if (!url)
        return null

    return <CmsEditable cmsId={ contentLink.key } as="div" className='relative w-full h-full'>
        <video 
            src={url} 
            className='object-contain' 
            controls={true}
            muted={false}
            autoPlay={false}
            loop={false}
            aria-label={ label }
        >{ label }</video>
    </CmsEditable>
}
VideoMedia.getDataFragment = () => ['VideoMediaComponentData', VideoMediaComponentDataFragmentDoc]

export default VideoMedia