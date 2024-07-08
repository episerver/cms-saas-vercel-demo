import 'server-only'
import { type ImageElementDataFragment } from "@/gql/graphql"
//import Image from 'next/image'
import { extractSettings } from '@remkoj/optimizely-cms-react/components'
import Animation from '@/components/shared/animation'
import { type MotionProps } from 'framer-motion'
// To be moved to library
import Image from '@/components/shared/cms_image'
import { DefaultImageElementComponent } from './displayTemplates'

export const ImageElement : DefaultImageElementComponent<ImageElementDataFragment> = ({ data: { altText, imageLink }, layoutProps, ...props }) => {
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
    switch (aspectRatio) {
        case 'square':
            cssClasses.push('aspect-square')
            break
        case 'banner':
            cssClasses.push(isPortrait ? 'aspect-[1/4]' : 'aspect-[4/1]')
            break
        case 'photo':
            cssClasses.push(isPortrait ? 'aspect-[2/3]' : 'aspect-[3/2]')
            break
        case 'monitor':
            cssClasses.push(isPortrait ? 'aspect-[3/4]' : 'aspect-[4/3]')
            break
        case 'widescreen':
            cssClasses.push(isPortrait ? 'aspect-[9/16]' : 'aspect-[16/9]')
            break
        default:
            cssClasses.push('aspect-'+aspectRatio)
            break
    }

    switch (roundedCorners) {
        case 'small':
            cssClasses.push('rounded')
            break;
        case 'medium':
            cssClasses.push('rounded-md')
            break;
        case 'large':
            cssClasses.push('rounded-lg')
            break;
        case 'huge':
            cssClasses.push('rounded-[40px]')
            break;
        case 'full':
            cssClasses.push('rounded-full')
            break;
        default:
            // No rounded classes
            break;
    }

    if (useFadeIn) {
        let fadeInDuration : number = 0
        let fadeInDelay : number = 0
    
        switch (duration) {
            case 'short':
                fadeInDuration = 0.5
                break
            case 'medium':
                fadeInDuration = 1
                break
            case 'long':
                fadeInDuration = 1.5
                break
            case 'verylong':
                fadeInDuration = 2
                break
        }
    
        switch (delay) {
            case 'short':
                fadeInDelay = 0.5
                break
            case 'medium':
                fadeInDelay = 1
                break
            case 'long':
                fadeInDelay = 1.5
                break
            case 'verylong':
                fadeInDelay = 2
                break
        }

        const initialClip = direction == 'rtl' ? "circle(0% at 100%)" : "circle(0% at 0%)"
        const targetClip = direction == 'rtl' ? "circle(120% at 100%)" : "circle(120% at 0%)"

        return <Animation 
            className={ cssClasses.join(' ')}
            initial={{ opacity: 0, clipPath: initialClip }}
            animate={{ opacity: 1, clipPath: targetClip }}
            transition={{ duration: fadeInDuration, delay: fadeInDelay }}
            { ...(props as MotionProps) }
        >
            <Image alt={altText ?? ""} src={ imageLink } fill className="object-cover" />
        </Animation>
    }
    return <div className={ cssClasses.join(' ')} { ...props }>
        <Image alt={altText ?? ""} src={ imageLink } fill className="object-cover" />
    </div>
}

export default ImageElement