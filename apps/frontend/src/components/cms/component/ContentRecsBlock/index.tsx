import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { ContentRecsBlockDataFragmentDoc, type ContentRecsBlockDataFragment } from "@/gql/graphql";
import { ContentRecsDelivery } from '@remkoj/optimizely-one-nextjs/client'
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import ArticleTemplate from '../../../shared/article_card/recs-template'

/**
 * Content Recommendations
 * Add a content recommendations
 */
export const ContentRecsBlockComponent : CmsComponent<ContentRecsBlockDataFragment> = ({ data, contentLink: { key } }) => {
    return <CmsEditable as="section" cmsId={ key } className="outer-padding py-20 lg:py-40 w-full">
            <ContentRecsDelivery template={ ArticleTemplate } count={ data.BlockRecommendationCount ?? 3 } apiKey={ data.BlockDeliveryApiKey ?? '' } className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 relative pb-12" />
    </CmsEditable>
}
ContentRecsBlockComponent.displayName = "Content Recommendations (Component/ContentRecsBlock)"
ContentRecsBlockComponent.getDataFragment = () => ['ContentRecsBlockData', ContentRecsBlockDataFragmentDoc]

export default ContentRecsBlockComponent