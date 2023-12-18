import type { HeroBlockComponentType } from '.'
import Link from '@/components/shared/banner-button'
import Image from 'next/image'
import type * as GraphQL from '@gql/graphql'

import './hero-block.css'

export const HeroBlockComponent : HeroBlockComponentType = ({data, inEditMode}) => 
{
    const heroData = data || undefined
    if (!heroData)
        return <div className='hero-block empty-hero-block' />

    const pageImage = heroData.Background ?? "https://tecdn.b-cdn.net/img/new/slides/041.webp"
    const calloutColor = `rgba(0,0,0,${ heroData.CalloutOpacity ?? 0 })`
    const calloutTitle = heroData.BannerTitle ?? ""
    const calloutText = heroData.BannerText ?? ""
    const button : GraphQL.LinkItemDataFragment | undefined = heroData.BannerLink ?? undefined
    const btnText = button?.children ?? ""
    const btnTitle = button?.title ?? ""
    const btnTarget = button?.target || undefined
    const btnHref = button?.content?.data?.path || button?.content?.href || button?.href || undefined

    return <div className="hero-block">
        <Image src={pageImage} alt="Hero Image" fill className="object-cover" />
        <div className="callout" style={{ backgroundColor: calloutColor }}>
            <div className="callout-container">
                <div data-epi-edit={ inEditMode ? "BannerTitle" : undefined } className="title">{ calloutTitle }</div>
                <div data-epi-edit={ inEditMode ? "BannerText" : undefined } className="body" dangerouslySetInnerHTML={{__html: calloutText }} ></div>
                { btnHref && <div className="link"><Link data-epi-edit={ inEditMode ? "BannerLink" : undefined } title={btnTitle} target={btnTarget} href={btnHref}>{btnText}</Link></div> }
                { inEditMode && <div data-epi-edit="Background">Select background image</div> }
            </div>
        </div>
    </div>
}

export default HeroBlockComponent