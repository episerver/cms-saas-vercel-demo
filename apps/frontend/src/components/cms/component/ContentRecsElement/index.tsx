'use server'
import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { ContentRecsElementDataFragmentDoc, type ContentRecsElementDataFragment } from "@/gql/graphql";
import { ContentRecsDelivery } from '@remkoj/optimizely-one-nextjs/client'
import { CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import ArticleTemplate from '../../../shared/article_card/recs-template'
import PlaceHolder from "./_placeholder";
import { type ReactNode } from "react";

/**
 * Content Recommendations
 * Add a set of content recommendations
 */
export const ContentRecsElementElement : CmsComponent<ContentRecsElementDataFragment> = async ({ data, contentLink: { key }, inEditMode }) => {
    return <CmsEditable as="div" cmsId={ key } className="w-full">
        { inEditMode ? <EditView /> : <ContentRecsDelivery template={ ArticleTemplate } count={ data.ElementRecommendationCount ?? 3 } apiKey={ data.ElementDeliveryApiKey ?? '' } className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative pb-12 w-full" placeholder={ PlaceHolder } />}
    </CmsEditable>
}
ContentRecsElementElement.displayName = "Content Recommendations (Element/ContentRecsElement)"
ContentRecsElementElement.getDataFragment = () => ['ContentRecsElementData', ContentRecsElementDataFragmentDoc]

function EditView({ count = 3 }: { count?: number | null})
{
    const tiles : Array<ReactNode> = []
    for (let idx = 0; idx < (count ?? 3); idx++)
    {
        const key = `cr-edit-placeholder-${idx}`
        tiles.push(<PlaceHolder key={key} />)
    }
    return <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative pb-12 w-full">{ tiles }</div>
}

export default ContentRecsElementElement