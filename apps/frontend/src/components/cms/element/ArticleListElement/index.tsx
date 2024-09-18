import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { ArticleListElementDataFragmentDoc, type ArticleListElementDataFragment } from "@/gql/graphql";
import { CmsEditable, getServerContext } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/sdk"
import { type InputMaybe, type Locales } from "@/gql/graphql";
import { CmsContentLink, type CmsContentLinkProps } from "@remkoj/optimizely-cms-nextjs/components";
import Card from "@/components/shared/card";
import { RichText } from "@remkoj/optimizely-cms-react/components";
import { CmsImage } from "@/components/shared/cms_image";
import { DateDisplay } from "@/components/shared/date";

/**
 * Article List
 * Show an article listing
 */
export const ArticleListElementElement : CmsComponent<ArticleListElementDataFragment> = async ({ data: {
    articleListCount
},
contentLink: {
    key,
    locale
} }) => {
    //const { factory } = getServerContext()
    const sdk = getSdk()
    const articles = ((await sdk.getArticleListElementItems({ 
        count: articleListCount || 3,
        locale: locale as InputMaybe<Locales> | undefined
    }))?.BlogPostPage?.items ?? []).filter(isNotNullOrUndefined)
    const byLabel = await getLabel('By', { locale, fallback: 'By'})
    const andLabel = await getLabel('and', { locale, fallback: 'and'})
    
    return <CmsEditable as="div" cmsId={ key } className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative pb-12">
        { articles.map(article => {
            let authors : string | undefined = undefined
            const authorList : Array<string> = [ article.blogAuthor ].filter(isNotNullOrUndefined)
            if (authorList.length > 1) {
                const lastAuthor = authorList.slice(-1)
                const firstAuthors = authorList.slice(0,-1)
                authors = `${ firstAuthors.join(', ')} ${ andLabel } ${ lastAuthor[0] }`
            } else {
                authors = authorList[0]
            }

            return <div key={ article.articleMeta?.key } className="article-list-item w-full h-full relative">
                <CmsContentLink href={article as CmsContentLinkProps['href']}>
                    {/*
                    <article className="prose max-w-none p-8 pb-16 bg-white rounded-[20px] w-full h-full before:content-[''] before:absolute before:top-[1px] before:left-[1px] before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:z-[-1] before:rounded-[20px] before:bg-azure before:transition-transform before:ease-in-out before:duration-300 hover:before:translate-x-8 hover:before:translate-y-8 focus:before:translate-x-8 focus:before:translate-y-8 dark:bg-vulcan-85 dark:text-ghost-white">
                    */}
                    <Card cardColor="white" as="article" className='w-full h-full' withHoverEffect>
                        <CmsImage src={ article.blogImage } width={620} height={430} className='w-full rounded-[20px]' alt={ article.blogTitle ?? '' } />
                        <div className="flex justify-between mb-[16px]">
                            <p className="text-[12px] text-pale-sky my-0">{ byLabel } { authors ? authors : 'Mosey Bank'}</p>
                            <p className="text-[12px] text-pale-sky my-0"><DateDisplay value={ article.articleMeta?.published ?? null } /></p>
                        </div>
                        <h3 className="my-0 mt-[16px]">{ article?.blogTitle ?? ''}</h3>
                        {/* article?.articleSummary && <RichText factory={ factory } text={ article?.articleSummary?.json } /> */}
                    </Card>
                    {/*</article>*/}
                </CmsContentLink>
            </div>
        })}
    </CmsEditable>
}
ArticleListElementElement.displayName = "Article List (Element/ArticleListElement)"
ArticleListElementElement.getDataFragment = () => ['ArticleListElementData', ArticleListElementDataFragmentDoc]

export default ArticleListElementElement

function isNotNullOrUndefined<T>(input?: T | null | undefined) : input is T
{
    return input ? true : false
}

async function getLabel(text: string, opts: any) : Promise<string>
{
    return text
}