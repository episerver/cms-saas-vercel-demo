"use client"
import { useRef, useState, useMemo, useId, VideoHTMLAttributes, type FunctionComponent } from "react"
import { type ReferenceDataFragment } from "@gql/graphql"
import { linkDataToUrl, getLinkData } from "@/lib/urls"
import { useOptimizelyOne } from "@remkoj/optimizely-one-nextjs"

export type VideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, 'src'> & {
    src: ReferenceDataFragment | Array<{ src: ReferenceDataFragment, type: string }> | null | undefined
    placeholder?: ReferenceDataFragment | null
    altText?: string | null
}

export const Video : FunctionComponent<VideoProps> = ({ src, placeholder, altText, className, loop, controls, ...videoProps }) => {
    const id = useId()
    const opti = useOptimizelyOne()
    const player = useRef<HTMLVideoElement | null>(null)
    const videoSrc = useMemo(() => {
        if (!Array.isArray(src))
            return linkDataToUrl(getLinkData(src))?.href
        return src.map(itm => {
            return {
                src: linkDataToUrl(getLinkData(itm.src))?.href,
                type: itm.type
            }
        }).filter((x : {src: string | undefined, type: string }) : x is { src: string, type: string } => x.src ? true : false)
    }, [ src ])
    const posterSrc = useMemo(() => linkDataToUrl(getLinkData(placeholder))?.href, [ placeholder ])
    const [ loading, setLoading ] = useState<boolean>(true)
    if (!videoSrc || (Array.isArray(videoSrc) && videoSrc.length == 0)) 
        return null

    const cssClasses : string []  = className ? [ className  ] : []
    if (loading)
        cssClasses.push('loading')

    const videoFile = Array.isArray(videoSrc) ? videoSrc.at(0)?.src ?? "#" : videoSrc;

    return <video 
        src={ Array.isArray(videoSrc) ? undefined : videoSrc } 
        ref={ player }
        className={ cssClasses.join(' ') }
        poster={ posterSrc }

        // Pass through settings
        loop={ loop }
        controls={ controls }

        // Add default event tracking -  Only track seek if we're not looping or are looping with controls enabled
        onPlay={ (event) => { opti?.track({ event: "video", action: "play", file: videoFile, at: (event.target as HTMLVideoElement).currentTime }) }}
        onPause={ (event) => { opti?.track({ event: "video", action: "pause", file: videoFile, at: (event.target as HTMLVideoElement).currentTime }) }}
        onSeeked={ (event) => { if (!loop || (loop && controls) ) opti?.track({ event: "video", action: "seek", file: videoFile, to: (event.target as HTMLVideoElement).currentTime }) }}

        // Embed properties
        { ...videoProps }

        // Add tracking of loading state
        onLoadStart={ () => { setLoading(true); } }
        onCanPlay={ () => { setLoading(false); } }
    >
        { Array.isArray(videoSrc) && videoSrc.map(source => {
            return <source key={ id + source.src + ':' + source.type } src={ source.src } type={ source.type } />
        })}
        { altText }
    </video>
}
Video.displayName = "Shared Video Component"

export default Video