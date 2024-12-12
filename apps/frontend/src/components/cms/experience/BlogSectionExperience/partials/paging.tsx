'use client'
import { useMemo, type FunctionComponent } from "react"
import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/solid"
import { usePathname, useSearchParams } from "next/navigation"
import Link from "next/link"

export type PagingProps = {
    /**
     * Total items
     */
    total: number
    /**
     * Starting item (0-based)
     */
    skip: number
    /**
     * Page size
     */
    limit: number
    /**
     * Number of pages
     */
    count: number
    /**
     * Current page (0-based)
     */
    page: number
}

export const Paging : FunctionComponent<PagingProps> = ({total,skip,limit,count,page}) => 
{
    const path = usePathname()
    const params = useSearchParams()

    const { showFirst, showPrev, showNext, showLast } = useMemo(() => {
        return {
            showFirst: page > 1,
            showPrev: page >= 1,
            showNext: page < (count - 1),
            showLast: (count - page) > 2
        }
    }, [ count, page ])
    const { first, prev, next, last } = useMemo(() => {
        const urlBuilder = new URLSearchParams(params)
        urlBuilder.delete('skip')
        const first = "?"+urlBuilder.toString()
        urlBuilder.set('skip', ((count - 1)*limit).toString())
        const last = "?"+urlBuilder.toString()
        urlBuilder.set('skip', (Math.max(0, page - 1)*limit).toString())
        const prev = page > 1 ? "?"+urlBuilder.toString() : first
        urlBuilder.set('skip', (Math.min(count - 1, page + 1)*limit).toString())
        const next = "?"+urlBuilder.toString()
        return { first, prev, next, last }
    },[ params, count, limit, page ])

    if (count <= 1)
        return null

    return (
        <div className="flex flex-row justify-center mt-12 mb-12 gap-2">
            { showFirst && <Link href={ path + first } title="First" aria-label="First"><ChevronDoubleLeftIcon className="w-6" /></Link> }
            { showPrev && <Link href={ path + prev } title="Previous" aria-label="Previous"><ChevronLeftIcon className="w-6" /></Link> }
            <span>Article <span className="min-w-6">{ skip + 1 }</span> to <span className="min-w-6">{ Math.min(skip + limit, total) }</span> of <span className="min-w-6">{ total }</span></span>
            { showNext && <Link href={ path + next } title="Next" aria-label="Next"><ChevronRightIcon className="w-6" /></Link> }
            { showLast && <Link href={ path + last } title="Last" aria-label="Last"><ChevronDoubleRightIcon className="w-6" /></Link> }
        </div>
    )
}