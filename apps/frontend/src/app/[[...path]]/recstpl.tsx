'use client'

import { ContentRecsDeliveryProps } from '@remkoj/optimizely-one-nextjs/client'
import Link from 'next/link'
import Image from 'next/image'

export const tpl : ContentRecsDeliveryProps['template'] = ({data}) => {
    return <div data-content-id={ data.id } className='w-full h-full relative'>
        <Link href={ data?.link_url }>
            <article className="@container/card bg-white dark:bg-vulcan-85 border-[2px] border-vulcan before:content-[''] before:absolute before:top-[1px] before:left-[1px] before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:z-[-1] before:bg-azure before:transition-transform before:ease-in-out before:duration-300 hover:before:translate-x-8 hover:before:translate-y-8 focus:before:translate-x-8 focus:before:translate-y-8 rounded-[40px] before:rounded-[40px] w-full h-full">
                <div className="p-12 lg:p-24 bg-white dark:bg-vulcan-85 border-[2px] border-vulcan rounded-[40px] w-full h-full border-none">
                    <div className="prose prose-p:text-[2rem] prose-span:text-[2rem] max-w-none gap-4 lg:gap-8 text-vulcan dark:text-ghost-white prose-figcaption:text-vulcan-85 prose-blockquote:text-vulcan dark:prose-figcaption:text-ghost-white dark:prose-blockquote:text-ghost-white">
                        {data && <Image src={ data.main_image_url } width={ Number.parseInt(data.main_image.width) } height={ Number.parseInt(data.main_image.height)} alt="" className="w-full rounded-[20px]" />}
                        <h3 className="my-0 mt-[16px]">{ data?.title ?? ''}</h3>
                        <div className="flex justify-between mb-[16px] !text-sm">
                            <p className="text-[12px] text-pale-sky my-0 !text-sm">By Ally Rodriguez and Matt Bennett</p>
                            <p className="text-[12px] text-pale-sky my-0 !text-sm">1/30/2024</p>
                        </div>
                        <p>{ data?.abstract ?? '' }</p>
                        <p className="!text-sm">Topics: { (data?.topics || []).map(x => x.title ).join(", ") }</p>
                    </div>
                </div>
            </article>
        </Link>
    </div>
}

export const Placeholder = () => {
    return <div>PLACEHOLDER</div>
}

export default tpl