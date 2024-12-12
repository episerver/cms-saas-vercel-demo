import { CmsEditable, type CmsComponent } from "@remkoj/optimizely-cms-react/rsc";
import { HomePageHeroBlockDataFragmentDoc, type HomePageHeroBlockDataFragment } from "@/gql/graphql";
import HomeHeroComponent from './_client'

/**
 * Home hero
 * Hero displayed on the home page
 */
export const HomePageHeroBlockComponent : CmsComponent<HomePageHeroBlockDataFragment> = ({ data, inEditMode, contentLink }) => {
    return <CmsEditable as={HomeHeroComponent} data={data} inEditMode={inEditMode} cmsId={ contentLink?.key } />
}
HomePageHeroBlockComponent.displayName = "Home hero (Component/HomePageHeroBlock)"
HomePageHeroBlockComponent.getDataFragment = () => ['HomePageHeroBlockData', HomePageHeroBlockDataFragmentDoc]

export default HomePageHeroBlockComponent