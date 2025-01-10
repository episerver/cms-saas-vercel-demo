'use client'
import { useMemo, type FunctionComponent, type MouseEvent as ReactMouseEvent } from "react"
import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/solid"
import { usePathname, useSearchParams } from "next/navigation"
import Link from "next/link"

export type PagingProps = {
    /**
     * Total items
     */
    totalItems: number
    /**
     * Page size
     */
    pageSize: number
    /**
     * Number of pages
     */
    pageCount: number
    /**
     * Current page (0-based)
     */
    page: number

    /**
     * The method to invoke if a new page has been clicked, setting this will
     * disable the URL based navigation.
     * 
     * @param       newSkip         The selected skip value
     * @returns     Nothing
     */
    onPageChange?: (newPage: number, newSkip: number) => void
}

export const Paging : FunctionComponent<PagingProps> = ({totalItems,pageSize,pageCount,page,onPageChange}) => 
{
    const path = usePathname()
    const params = useSearchParams()

    // Calculate visibility
    const { showFirst, showPrev, showNext, showLast } = useMemo(() => {
        return {
            showFirst: page > 1,
            showPrev: page >= 1,
            showNext: page < (pageCount - 1),
            showLast: (pageCount - page) > 2
        }
    }, [ pageCount, page ])


    const { first, prev, next, last } = useMemo(() => {
        const urlBuilder = new URLSearchParams(params)
        function createTargetData(pageNr: number)
        {
            if (pageNr == 0) {
                urlBuilder.delete('skip')
                urlBuilder.delete('page')
            } else {
                urlBuilder.set('skip', (pageNr*pageSize).toString())
                urlBuilder.set('page', pageNr.toString())
            }
            return { search: `?${ urlBuilder.toString() }`, skip: pageNr * pageSize, page: pageNr }
        }
        
        const first = createTargetData(0)
        const last = createTargetData(pageCount-1)
        const prev = createTargetData(Math.max(0, page-1))
        const next = createTargetData(Math.min(pageCount-1, page+1))
        
        return { first, prev, next, last }
    },[ params, pageCount, pageSize, page ])

    // Don't display if we only have one page or fewer
    if (pageCount <= 1)
        return null

    function toPage(e: ReactMouseEvent<HTMLAnchorElement, MouseEvent>, page: number, skip: number)
    {
        if (onPageChange) {
            e.preventDefault()
            onPageChange(page, skip)
            return false
        }
    }

    return (
        <div className="flex flex-row justify-center mt-12 mb-12 gap-2">
            { showFirst && <Link href={ path + first.search} title="First" aria-label="First" onClick={(e) => toPage(e, first.page, first.skip)}><ChevronDoubleLeftIcon className="w-6" /></Link> }
            { showPrev && <Link href={ path + prev.search } title="Previous" aria-label="Previous" onClick={(e) => toPage(e, prev.page, prev.skip)}><ChevronLeftIcon className="w-6" /></Link> }
            <span>Article <span className="min-w-6">{ (page * pageSize) + 1 }</span> to <span className="min-w-6">{ Math.min((page + 1)*pageSize, totalItems) }</span> of <span className="min-w-6">{ totalItems }</span></span>
            { showNext && <Link href={ path + next.search } title="Next" aria-label="Next" onClick={(e) => toPage(e, next.page, next.skip)}><ChevronRightIcon className="w-6" /></Link> }
            { showLast && <Link href={ path + last.search } title="Last" aria-label="Last" onClick={(e) => toPage(e, last.page, last.skip)}><ChevronDoubleRightIcon className="w-6" /></Link> }
        </div>
    )
}