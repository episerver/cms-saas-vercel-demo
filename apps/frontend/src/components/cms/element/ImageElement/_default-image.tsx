import 'server-only'
import { type ImageElementDataFragment } from "@/gql/graphql"
import { type FunctionComponent, type ComponentProps } from 'react'
import { extractSettings } from '@remkoj/optimizely-cms-react/components'
import Animation from '@/components/shared/animation'
import { type MotionProps } from 'framer-motion'
import Image from '@/components/shared/cms_image' // To be moved to library
import { DefaultImageElementComponent } from './displayTemplates'

enum portraitAspectRatioClasses {
    square = 'aspect-square',
    banner = 'aspect-[1/4]',
    photo = 'aspect-[2/3]',
    monitor = 'aspect-[3/4]',
    widescreen = 'aspect-[9/16]'
}
enum landscapeAspectRatioClasses {
    square = 'aspect-square',
    banner = 'aspect-[4/1]',
    photo = 'aspect-[3/2]',
    monitor = 'aspect-[4/3]',
    widescreen = 'aspect-[16/9]'
}
enum roundedCornersClasses {
    small = 'rounded',
    medium = 'rounded-md',
    large = 'rounded-lg',
    huge = 'rounded-[40px]',
    full = 'rounded-full',
    none = ''
}
enum durationClasses {
    short = 0.5,
    medium = 1,
    long = 1.5,
    verylong = 2,
}
enum delayClasses {
    short = 0.5,
    medium = 1,
    long = 1.5,
    verylong = 2,
}

type ImageElementProps = ComponentProps<DefaultImageElementComponent<ImageElementDataFragment>> & {
    withReducedMotion?: boolean
}

export const ImageElement : FunctionComponent<ImageElementProps>  = ({ data: { altText, imageLink }, layoutProps, children, withReducedMotion = false, ...props }) => {
    const { 
        roundedCorners="none", 
        appear="none", 
        delay="none", 
        duration="none", 
        direction="ltr", 
        aspectRatio = "square", 
        orientation="landscape" 
    } = extractSettings(layoutProps)

    const useFadeIn = appear != 'none' && duration != 'none'
    const isPortrait = orientation == 'portrait'

    const cssClasses : string[] = ["relative w-full overflow-hidden not-prose"]
    cssClasses.push((isPortrait ? portraitAspectRatioClasses[aspectRatio] : landscapeAspectRatioClasses[aspectRatio]) ?? '') //Add aspect ratio
    cssClasses.push(roundedCornersClasses[roundedCorners] ?? '') // Add rounded corners

    if (useFadeIn && !withReducedMotion) {
        const fadeInDuration : number = durationClasses[duration] ?? 0
        const fadeInDelay : number = delayClasses[delay] ?? 0
        const initialClip = direction == 'rtl' ? "circle(0% at 100%)" : "circle(0% at 0%)"
        const targetClip = direction == 'rtl' ? "circle(120% at 100%)" : "circle(120% at 0%)"

        return <Animation 
            className={ cssClasses.filter(x=>x && x.length > 0).join(' ')}
            initial={{ opacity: 0, clipPath: initialClip }}
            animate={{ opacity: 1, clipPath: targetClip }}
            transition={{ duration: fadeInDuration, delay: fadeInDelay }}
            { ...(props as MotionProps) }
        >
            <Image alt={altText ?? ""} src={ imageLink } fill className="object-cover" />
        </Animation>
    }
    return <div className={ cssClasses.filter(x=>x && x.length > 0).join(' ')} { ...props }>
        <Image alt={altText ?? ""} src={ imageLink } fill className="object-cover" />
    </div>
}

export default ImageElement