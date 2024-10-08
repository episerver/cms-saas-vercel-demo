import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { HomePageHeroBlockDataFragmentDoc, type HomePageHeroBlockDataFragment } from "@/gql/graphql";
import HomeHeroComponent from './_client'

/**
 * Home hero
 * Hero displayed on the home page
 */
export const HomePageHeroBlockComponent : CmsComponent<HomePageHeroBlockDataFragment> = ({ data, inEditMode }) => {
    return <HomeHeroComponent data={data} inEditMode={inEditMode} />
}
HomePageHeroBlockComponent.displayName = "Home hero (Component/HomePageHeroBlock)"
HomePageHeroBlockComponent.getDataFragment = () => ['HomePageHeroBlockData', HomePageHeroBlockDataFragmentDoc]

export default HomePageHeroBlockComponent