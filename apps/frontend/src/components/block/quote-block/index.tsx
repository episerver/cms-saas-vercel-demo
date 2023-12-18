import type * as GraphQL from '@gql/graphql'
import type { CmsComponent } from '@remkoj/optimizely-dxp-react'
import { gql } from '@gql/index'

import Image from 'next/image'
import './quote-block.css'

export const QuoteBlock : CmsComponent<GraphQL.QuoteDataFragment> = ({ inEditMode, data, contentLink }) =>
{
    /* @ts-expect-error */
    const imageData : (GraphQL.ImageDataFragment & GraphQL.ContentLinkFragment) | undefined = data?.Photo ?? undefined
    const hasImage = imageData?.guidValue ? true : false
    const imageUrl = imageData?.data?.path ? new URL(imageData?.data?.path, process.env.DXP_URL) : undefined
    return <div className="quote-block" id={ contentLink?.guidValue ?? undefined }>
        { (hasImage || inEditMode) && <div className='image' data-epi-edit={ inEditMode ? "Photo" : undefined }>
            { imageUrl && <Image src={ imageUrl.href } alt={`Image of ${ data?.Quotee ?? "the quotee"}`} fill sizes='(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px' /> }
        </div> }
        <div className='quote'>
            <div className='text' data-epi-edit={ inEditMode ? "Text" : undefined } dangerouslySetInnerHTML={{ __html: data?.Text ?? "" }}/>
            <div className='quotee'>-&nbsp;
                <span data-epi-edit={ inEditMode ? "Quotee" : undefined } className="name">{ data?.Quotee }</span>
                { (inEditMode || data?.Role ) && <>,&nbsp;<span data-epi-edit={ inEditMode ? "Role" : undefined } className="role">{ data?.Role ?? ""}</span></>}
                { (inEditMode || data?.QuoteeLocation ) && <>&nbsp;—&nbsp;<span data-epi-edit={ inEditMode ? "QuoteeLocation" : undefined } className="location">{ data?.QuoteeLocation ?? ""}</span></>}
            </div>
        </div>
    </div>
}
QuoteBlock.displayName = "Quote"
QuoteBlock.getDataFragment = () => ["QuoteData", QuoteData]

export default QuoteBlock

export const QuoteData = gql(/* GraphQL*/`fragment QuoteData on QuoteBlock {
    Text
    Quotee
    Role
    QuoteeLocation
    Photo {
        ...ImageData
    }
}`)