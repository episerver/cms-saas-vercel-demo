import { CmsComponent } from "@remkoj/optimizely-dxp-react"
import { gql as graphql } from '@gql/gql'
import dynamic from "next/dynamic"

export type ButtonBlockDocumentType = typeof ButtonBlockQuery
export type ButtonBlockComponentType = CmsComponent<ButtonBlockDocumentType>

export const HeroBlock : ButtonBlockComponentType = dynamic(() => import('./button-block'), { ssr: true })
HeroBlock.getDataQuery = () => ButtonBlockQuery
export default HeroBlock


export const ButtonBlockData = graphql(/* GraphQL */`fragment ButtonBlockData on ButtonBlock {
  ButtonLink {
    Href
    Title
    Target
    Text
  }
}`)

const ButtonBlockQuery = graphql(/* graphql */`query getButtonBlockData($id: Int, $workId: Int, $guidValue: String, $lang: [Locales])
{
  ButtonBlock(
    where: {
      _or: [{
        ContentLink: {
          GuidValue: {
            eq: $guidValue
          }
        }
      },{
        ContentLink: {
          Id: {
            eq: $id
          },
          WorkId: {
            eq: $workId
          }
        }
      }]
    },
    locale: $lang
  ) {
    items {
      ButtonLink {
        Href
        Title
        Target
        Text
      }
  	}
  }
}`)