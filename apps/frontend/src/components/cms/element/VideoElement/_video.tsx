'use client'
import { useRef, useState, useMemo, VideoHTMLAttributes, type FunctionComponent } from "react"
import { type ReferenceDataFragment } from "@gql/graphql"
import { linkDataToUrl, getLinkData } from '@/lib/urls'
import { useOptimizelyOne } from "@remkoj/optimizely-one-nextjs"

export type VideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, 'src'> & {
    src: ReferenceDataFragment | null | undefined
}

export const Video : FunctionComponent<VideoProps> = ({ src, className, ...videoProps }) => {
    const opti = useOptimizelyOne()
    const player = useRef<HTMLVideoElement | null>(null)
    const videoSrc = useMemo(() => linkDataToUrl(getLinkData(src)), [src])
    const [ loading, setLoading ] = useState<boolean>(false)
    if (!videoSrc) 
        return null

    const cssClasses : string []  = className ? [ className  ] : []
    if (loading)
        cssClasses.push('loading')

    return <video 
        src={ videoSrc.href } 
        ref={ player }
        className={ cssClasses.join(' ') }

        // Add default event tracking
        onPlay={ (event) => { opti?.track({ event: "video", action: "play", file: videoSrc.href, at: (event.target as HTMLVideoElement).currentTime }) }}
        onPause={ (event) => { opti?.track({ event: "video", action: "pause", file: videoSrc.href, at: (event.target as HTMLVideoElement).currentTime }) }}
        onSeeked={ (event) => { opti?.track({ event: "video", action: "seek", file: videoSrc.href, to: (event.target as HTMLVideoElement).currentTime }) }}

        // Embed properties
        { ...videoProps }

        // Add tracking of loading state
        onLoadStart={ () => setLoading(true) }
        onCanPlay={ () => setLoading(false) }
    />
}
Video.displayName = "Shared Video Component"

export default Video