import React from 'react';
import { type BlogPostPageMenuBlockFragment, BlogPostPageMenuBlockFragmentDoc, LinkDataFragmentDoc } from '@/gql/graphql';
import { getFragmentData } from '@gql/fragment-masking';
import { type CmsComponent } from '@remkoj/optimizely-cms-react/rsc';
import { Card } from '@/components/shared/card'
import { CmsImage } from '@/components/shared/cms_image'
import { DateDisplay as Date } from '@/components/shared/date'
import ItemButton from './_close';

export const BlogPostPageMenuBlock : CmsComponent<BlogPostPageMenuBlockFragment> = ({ data }) => 
{
    const imgData = data.image ?? data.sharing?.image ?? undefined
    const linkData = data.meta?.url ?? undefined
    const link = getFragmentData(LinkDataFragmentDoc, linkData)

    return <Card as="div" innerClassName='grid grid-cols-2' withHoverEffect={false} direction='none'  >
        <div className='min-h-48'>
            <div className='font-bold'>{ data.heading ?? '' }</div>
            <div className='my-2 w-full flex flex-row justify-between'>
                <div className='text-sm text-people-eater'>{ data.author }</div>
                <div className='text-xs text-independence'><Date value={ data.meta?.published } /></div>
            </div>
            <div>{ data.sharing?.description }</div>
            <ItemButton className='mt-3' url={ link?.default ?? '#' } buttonColor='default' buttonType='primary' buttonVariant='cta' >Continue reading &gt;</ItemButton>
        </div>
        <div className='relative not-prose'>
            <CmsImage src={imgData} alt={ data.heading || "" } width={192} height={108} className='rounded-[2rem] w-full'/>
        </div>
    </Card>
}
BlogPostPageMenuBlock.getDataFragment = () => ['BlogPostPageMenuBlock', BlogPostPageMenuBlockFragmentDoc]

export default BlogPostPageMenuBlock