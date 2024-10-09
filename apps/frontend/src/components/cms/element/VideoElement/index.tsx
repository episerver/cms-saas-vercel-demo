import { type CmsComponent } from "@remkoj/optimizely-cms-react"
import { extractSettings } from "@remkoj/optimizely-cms-react/components"
import { VideoElementDataFragmentDoc, type VideoElementDataFragment } from "@/gql/graphql"
import { type VideoElementLayoutProps, type DefaultVideoProps, isDefaultVideoProps } from "./displayTemplates"
import { CmsEditable } from '@remkoj/optimizely-cms-react/rsc'

import Video from './_video'

/**
 * Type-safe map of possible options for video classes
 */
const VideoClasses : { [K in Required<ReturnType<typeof extractSettings<DefaultVideoProps>>>['aspectRatio']]: string } = {
    auto: 'w-full h-auto',
    ratio_16_9: 'w-full aspect-[16/9] object-cover',
    ratio_4_3: 'w-full aspect-[4/3] object-cover',
    ratio_1_1: 'w-full aspect-square object-cover',
    ratio_3_4: 'w-full aspect-[3/4] object-cover',
    ratio_9_16: 'w-full aspect-[9/16] object-cover',
}
const RoundedCornersClasses : { [K in Required<ReturnType<typeof extractSettings<DefaultVideoProps>>>['roundedCorners']]: string } = {
    small: 'rounded',
    medium: 'rounded-md',
    large: 'rounded-lg',
    huge: 'rounded-[40px]',
    full: 'rounded-full',
    none: ''
}

/**
 * Video
 * Add a video to an experience
 */
export const VideoElementElement : CmsComponent<VideoElementDataFragment, VideoElementLayoutProps> = ({ data: {
    video: videoSrc,
    placeholder,
    title: altText
}, contentLink, layoutProps }) => {
    const {
        aspectRatio = "auto",
        autoPlay = "false",
        loop = "false",
        muted = "false",
        showControls = "true",
        roundedCorners = "none"
    } = isDefaultVideoProps(layoutProps) ? extractSettings(layoutProps) : {}
    const cssClasses : string[] = [VideoClasses[aspectRatio], RoundedCornersClasses[roundedCorners]]
    return <CmsEditable as={ Video } cmsId={ contentLink.key } src={ videoSrc } controls={ showControls == "true" } autoPlay={ autoPlay == "true" } muted={ muted == "true" || autoPlay == "true" } loop={ loop == "true" } className={ cssClasses.join(' ') } altText={ altText } placeholder={ placeholder } />
}
VideoElementElement.displayName = "Video (Element/VideoElement)"
VideoElementElement.getDataFragment = () => ['VideoElementData', VideoElementDataFragmentDoc]

export default VideoElementElement

