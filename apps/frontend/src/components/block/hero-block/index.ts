import type { CmsComponent } from '@remkoj/optimizely-dxp-react'
import type * as GraphQL from '@gql/graphql'
import { gql } from '@gql/gql'
import dynamic from 'next/dynamic'

export type HeroBlockComponentType = CmsComponent<GraphQL.HeroBlockDataFragment>
export const HeroBlock : HeroBlockComponentType = dynamic(() => import('./hero-block'), { ssr: true })
HeroBlock.displayName = "Hero banner"
HeroBlock.getDataFragment = () => ['HeroBlockData', HeroBlockData]
export default HeroBlock

const HeroBlockData = gql(/* graphql */`fragment HeroBlockData on HeroBlock
{
    name: Name
    backgroundImage: Background
    title: BannerTitle
    text: BannerText
    opacity: CalloutOpacity
    button: BannerLink {
        children: Text
        title: Title
        href: Href
        target: Target
        content: ContentLink {
            href: Url
            data: Expanded {
                path: RelativePath
            }
        }
    }
}`)