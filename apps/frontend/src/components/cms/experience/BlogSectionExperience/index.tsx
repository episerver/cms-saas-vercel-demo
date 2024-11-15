import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, CompositionDataFragmentDoc, BlogSectionExperienceDataFragmentDoc, type BlogSectionExperienceDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"
import { Suspense } from "react";
import BlogPostsSection from "./partials/blogposts";

/**
 * Blog/News Section
 * Add a blog/news section to your site
 */
export const BlogSectionExperienceExperience : CmsComponent<BlogSectionExperienceDataFragment> = ({ data, contentLink }) => {
    const composition = getFragmentData(CompositionDataFragmentDoc, getFragmentData(ExperienceDataFragmentDoc, data)?.composition)
    return <div className="" data-component="BlogSectionExperience">
        <CmsEditable as="div" className="py-8" cmsFieldName="unstructuredData">
            { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
        </CmsEditable>
        { contentLink.key && contentLink.locale &&
        <div className="mx-auto px-4 lg:px-6 container">
            <Suspense>
                <BlogPostsSection parentKey={ contentLink.key } locale={ contentLink.locale } />
            </Suspense>
        </div>}
    </div>
}
BlogSectionExperienceExperience.displayName = "Blog/News Section (Experience/BlogSectionExperience)"
BlogSectionExperienceExperience.getDataFragment = () => ['BlogSectionExperienceData', BlogSectionExperienceDataFragmentDoc]
BlogSectionExperienceExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default BlogSectionExperienceExperience