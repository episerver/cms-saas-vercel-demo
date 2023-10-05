import type * as GraphQL from '@gql/graphql'
import type { CmsComponent } from '@remkoj/optimizely-dxp-react'
import { gql } from '@gql/index'

import Image from 'next/image'
import './quote-block.css'

export const QuoteBlock : CmsComponent<GraphQL.QuoteDataFragment> = ({ inEditMode, data, contentLink }) =>
{
    const hasImage = data?.photo?.guidValue ? true : false
    const imageUrl = data?.photo?.data?.path ? new URL(data?.photo?.data?.path, process.env.DXP_URL) : undefined
    return <div className="quote-block" id={ contentLink?.guidValue ?? undefined }>
        { (hasImage || inEditMode) && <div className='image' data-epi-edit={ inEditMode ? "Photo" : undefined }>
            { imageUrl && <Image src={ imageUrl.href } alt={`Image of ${ data?.name ?? "the quotee"}`} fill sizes='(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px' /> }
        </div> }
        <div className='quote'>
            <div className='text' data-epi-edit={ inEditMode ? "Text" : undefined } dangerouslySetInnerHTML={{ __html: data?.quote ?? "" }}/>
            <div className='quotee'>-&nbsp;
                <span data-epi-edit={ inEditMode ? "Quotee" : undefined } className="name">{ data?.name }</span>
                { (inEditMode || data?.role ) && <>,&nbsp;<span data-epi-edit={ inEditMode ? "Role" : undefined } className="role">{ data?.role ? data?.role : ""}</span></>}
                { (inEditMode || data?.location ) && <>&nbsp;—&nbsp;<span data-epi-edit={ inEditMode ? "QuoteeLocation" : undefined } className="location">{ data?.location ? data?.location : ""}</span></>}
            </div>
        </div>
    </div>
}
QuoteBlock.displayName = "Quote"
QuoteBlock.getDataFragment = () => ["QuoteData", QuoteData]

export default QuoteBlock

export const QuoteData = gql(/* GraphQL*/`fragment QuoteData on QuoteBlock {
    quote: Text
    name: Quotee
    role: Role
    location: QuoteeLocation
    photo: Photo {
        id: Id
        guidValue: GuidValue
        data: Expanded {
            path: RelativePath
        }
    }
}`)