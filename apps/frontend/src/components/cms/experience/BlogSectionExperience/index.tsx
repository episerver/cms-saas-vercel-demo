import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, CompositionDataFragmentDoc, BlogSectionExperienceDataFragmentDoc, type BlogSectionExperienceDataFragment, PageSeoSettingsPropertyDataFragmentDoc, type Locales, ReferenceDataFragmentDoc, LinkDataFragmentDoc } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable, Utils } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"
import BlogPostsSection from "./partials/blogposts";
import { getBlogPosts } from "./actions/getBlogPosts"
import { Suspense } from "react";

/**
 * Blog/News Section
 * Add a blog/news section to your site
 */
export const BlogSectionExperienceExperience : CmsComponent<BlogSectionExperienceDataFragment> = async ({ data, contentLink }) => {
    const composition = getFragmentData(CompositionDataFragmentDoc, getFragmentData(ExperienceDataFragmentDoc, data)?.composition)
    const initialData = await getBlogPosts({ locale: contentLink.locale ?? 'en', parentKey: contentLink.key ?? 'n/a' })
    return <div className="" data-component="BlogSectionExperience">
        <CmsEditable as="div" className="py-8" cmsFieldName="unstructuredData">
            { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
        </CmsEditable>
        { contentLink.key && contentLink.locale &&
        <div className="mx-auto px-4 lg:px-6 container">
            <Suspense>
                <BlogPostsSection parentKey={ contentLink.key } locale={ contentLink.locale } initialdata={initialData} />
            </Suspense>
        </div>}
    </div>
}
BlogSectionExperienceExperience.displayName = "Blog/News Section (Experience/BlogSectionExperience)"
BlogSectionExperienceExperience.getDataFragment = () => ['BlogSectionExperienceData', BlogSectionExperienceDataFragmentDoc]
BlogSectionExperienceExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    const data = await sdk.getBlogSectionExperienceMetaData({ 
        key: contentLink.key, 
        locale: locale as Locales,
        version: contentLink.version
    })

    const metaData = data?.page?.items?.at(0)
    if (!metaData)
        return {}

    const pageName = metaData._metadata?.displayName ?? undefined
    const published = metaData._metadata?.published ?? undefined
    const seoData = getFragmentData(PageSeoSettingsPropertyDataFragmentDoc, metaData.seo_data) ?? undefined
    const graphType = seoData?.GraphType ?? 'website'
    const imageData = getFragmentData(LinkDataFragmentDoc, getFragmentData(ReferenceDataFragmentDoc, seoData?.SharingImage)?.url)
    const imageUrl = imageData?.default ?? undefined
    const canonicalUrl = new URL(metaData?._metadata?.url?.default ?? '/', metaData?._metadata?.url?.base ?? 'http://localhost:3000')

    return {
        title: seoData?.MetaTitle ?? pageName,
        description: seoData?.MetaDescription,
        keywords: seoData?.MetaKeywords?.filter(Utils.isNonEmptyString),
        metadataBase: tryToUrl(metaData?._metadata?.url?.base),
        openGraph: {
            title: seoData?.MetaTitle ?? pageName,
            description: seoData?.MetaDescription ?? undefined,
            publishedTime: published,
            type: graphType == "-" ? 'website' : graphType,
            images: imageUrl ? {
                url: imageUrl,
             } : undefined,
            url: canonicalUrl.href,
        },
        alternates: {
            canonical: canonicalUrl.href
        },
        other: {
          "idio:content-type": "Blog Section (Experience)"
        }
    }
}

function tryToUrl(toConvert: string | null | undefined)
{
    if (!toConvert)
        return undefined
    try {
        return new URL(toConvert)
    } catch {
        return undefined
    }
}

export default BlogSectionExperienceExperience