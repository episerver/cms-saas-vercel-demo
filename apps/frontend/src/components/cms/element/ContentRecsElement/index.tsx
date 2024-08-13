'use server'
import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { ContentRecsElementDataFragmentDoc, type ContentRecsElementDataFragment } from "@/gql/graphql";
import { ContentRecsDelivery } from '@remkoj/optimizely-one-nextjs/client'
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import ArticleTemplate from '../../../shared/article_card/recs-template'

/**
 * Content Recommendations
 * Add a set of content recommendations
 */
export const ContentRecsElementElement : CmsComponent<ContentRecsElementDataFragment> = async ({ data, contentLink: { key } }) => {
    return <CmsEditable as="div" cmsId={ key }>
        <ContentRecsDelivery template={ ArticleTemplate } count={ data.ElementRecommendationCount ?? 3 } apiKey={ data.ElementDeliveryApiKey ?? '' } className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative pb-12" />
    </CmsEditable>
}
ContentRecsElementElement.displayName = "Content Recommendations (Element/ContentRecsElement)"
ContentRecsElementElement.getDataFragment = () => ['ContentRecsElementData', ContentRecsElementDataFragmentDoc]

export default ContentRecsElementElement