import { type ComponentProps, type FunctionComponent } from 'react'
import { type LinkData, type ReferenceData } from "@/lib/urls"
import Image from 'next/image'
import { linkDataToUrl, getLinkData } from '@/lib/urls'

type CmsImageProps = Readonly<{
    src?: ((LinkData | ReferenceData) & { item?: {
        graphId?: string | null,
        alt?: string | null,
        src?: string | null
    } | null })| null,
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
    const itemSrc = src?.item?.src
    const itemAlt = src?.item?.alt
    const imgSrc = itemSrc ?? linkDataToUrl(getLinkData(src))?.href ?? fallbackSrc

    if (!imgSrc)
        return null
    return <Image src={ imgSrc } alt={ itemAlt ?? alt } {...props} />
}



export default CmsImage