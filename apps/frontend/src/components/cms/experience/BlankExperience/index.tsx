import { OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { BlankExperienceDataFragmentDoc, type BlankExperienceDataFragment } from "@/gql/graphql";
import { type Maybe, type ICompositionNode, type ExperienceDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * Blank Experience
 * An experience without a predefined layout.
 */
export const BlankExperienceExperience : CmsComponent<BlankExperienceDataFragment> = ({ data }) => {
    const composition = (data as ExperienceDataFragment).composition as Maybe<ICompositionNode>
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
BlankExperienceExperience.displayName = "Blank Experience (Experience/BlankExperience)"
BlankExperienceExperience.getDataFragment = () => ['BlankExperienceData', BlankExperienceDataFragmentDoc]
BlankExperienceExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default BlankExperienceExperience