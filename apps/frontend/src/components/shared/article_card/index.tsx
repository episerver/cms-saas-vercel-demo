import { type FunctionComponent } from "react"
import { type ReferenceDataFragment, type LinkDataFragment } from "@/gql/graphql";
import { CmsContentLink, type CmsContentLinkProps } from "@remkoj/optimizely-cms-nextjs/components";
import Card from "@/components/shared/card";
import { CmsImage } from "@/components/shared/cms_image";
import NextImage from 'next/image'
import NextLink from 'next/link'
import { DateDisplay } from "@/components/shared/date";

export type ArticleCardData = {
    key: string
    title: string
    link: CmsContentLinkProps['href'] | string
    authors: string | Array<string>
    image: {
        src: LinkDataFragment | ReferenceDataFragment | string
        alt?: string
        width: number
        height: number
    }
    published?: string | number | Date
    abstract?: string 
}

export type ArticleCardProps = {
    article: ArticleCardData
    andLabel?: string
    byLabel?: string
}

export const ArticleCard : FunctionComponent<ArticleCardProps> = ({ article, andLabel = "and", byLabel = "by" }) =>
{
    let authors : string | undefined = undefined
    const authorList : Array<string> = (Array.isArray(article.authors) ? article.authors : [ article.authors ]).filter(isNotNullOrUndefined)
    if (authorList.length > 1) {
        const lastAuthor = authorList.slice(-1)
        const firstAuthors = authorList.slice(0,-1)
        authors = `${ firstAuthors.join(', ')} ${ andLabel } ${ lastAuthor[0] }`
    } else {
        authors = authorList[0]
    }

    const Image = typeof(article.image.src) == 'string' ? NextImage : CmsImage
    const Link = typeof(article.link) == 'string' ? NextLink : CmsContentLink

    return <div key={ article.key } className="article-list-item w-full h-full relative">
        {/* @ts-expect-error */}
        <Link href={article.link}>
            <Card cardColor="white" as="article" className='w-full h-full' withHoverEffect>
                {/* @ts-expect-error */}
                <Image src={ article.image.src } width={ article.image.width } height={ article.image.height } className='w-full rounded-[20px]' alt={ article.image.alt ?? '' } />
                <div className="flex justify-between mb-[16px]">
                    <p className="!text-[12px] text-pale-sky my-0">{ byLabel } { authors ? authors : 'Mosey Bank'}</p>
                    <p className="!text-[12px] text-pale-sky my-0"><DateDisplay value={ article.published } /></p>
                </div>
                <h3 className="my-0 mt-[16px]">{ article.title }</h3>
                { article?.abstract && <div dangerouslySetInnerHTML={{ __html: article.abstract }} /> }
            </Card>
        </Link>
    </div>
}

export default ArticleCard

function isNotNullOrUndefined<T>(input?: T | null | undefined) : input is T
{
    return input ? true : false
}