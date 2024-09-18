import { type ComponentProps, type FunctionComponent } from 'react'
import { type LinkData, type ReferenceData } from "@/lib/urls"
import Image from 'next/image'
import { linkDataToUrl, getLinkData } from '@/lib/urls'

type CmsImageProps = Readonly<{
    src?: LinkData | ReferenceData | null,
    fallbackSrc?: string
} & Omit<ComponentProps<typeof Image>, 'src'>>

/**
 * Wrapper for the Next.JS Image component that allows the usage of either the
 * LinkData fragment or ReferenceData fragment to define the image URL
 * 
 * @param       param0      The image properties
 * @returns     JSX Image component
 */
export const CmsImage : FunctionComponent<CmsImageProps> = ({ src, fallbackSrc, alt, ...props }) => {
    const link = linkDataToUrl(getLinkData(src))
    const imgSrc = link?.href ?? fallbackSrc

    if (!imgSrc)
        return null
    return <Image src={ imgSrc } alt={ alt } {...props} />
}



export default CmsImage