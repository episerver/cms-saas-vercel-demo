"use client"
import type { Types } from '@/lib/api/articles'
import React, { useState, useEffect, useMemo, type FunctionComponent, type PropsWithChildren } from 'react'
import { CalendarDaysIcon, UserIcon } from '@heroicons/react/24/outline'
import LocalTime from '@/components/shared/local-time'
import BannerButton from '@/components/shared/banner-button'
import Dropdown, { type DropdownItem } from '@/components/shared/dropdown'
import Image from 'next/image'
import { useUrlState } from '@/lib/use-url-state'

export type ArticleListProps = PropsWithChildren<{ 
    initialData: Types.GetArticlesResult
    imageBaseUrl: string
    parent: string
    locale: string
    className?: string
}>

const ARTICLES_SERVICE = "/api/content/articles"
const ALL_AUTHORS = "-all-"
const ALL_DATES = "-all-"
const pageSizeOptions : number[] = [6,12,24,36]
const defaultPageSize : number = 12

export const ArticleList : FunctionComponent<ArticleListProps> = ({ initialData, imageBaseUrl, parent, locale, className }) => {
    // Keep track of the list of articles to show
    const [{ facets, items }, setArticleList ] = useState<Types.GetArticlesResult>(initialData)
    const authorOptions : DropdownItem<string>[] = useMemo(() => [{ label: "All authors", value: ALL_AUTHORS } as DropdownItem<string>].concat(facets.author.map(x => { return { 
        label: x.name, 
        value: x.name, 
        badge: x.count > 0 ? x.count.toString() : undefined 
    }})),[ facets ])
    const datesOptions : DropdownItem<string>[] = useMemo(() => [{ label: "Any time", value: ALL_DATES } as DropdownItem<string>].concat(facets.published.map(x => { return { 
        label: <LocalTime date={ x.date } mode='Date' />, 
        value: x.date, 
        badge: x.count > 0 ? x.count.toString() : undefined 
    }})).filter(x => typeof(x.badge) != undefined),[ facets ])
    
    // Keep track of the external state
    const [ selectedAuthor, setSelectedAuthor ] = useUrlState<string>("author", ALL_AUTHORS, (author) => authorOptions.some(x => x.value == author), s=>s, s=>s)
    const [ selectedPublishedDate, setPublishedDate ] = useUrlState<string>("published", ALL_DATES, (published) => datesOptions.some(x => x.value == published), s=>s, s=>s)
    const [ selectedPageSize, setPageSize ] = useUrlState<number>("pageSize", defaultPageSize, (size) => !isNaN(size) && pageSizeOptions.includes(size), n=>Number.parseInt(n, 10), n=>n.toString(10))
    
    // Keep track of the internal state
    const [ isLoading, setIsLoading ] = useState<boolean>(false)

    useEffect(() => {
        const searchParams = new URLSearchParams()
        searchParams.set("parent", parent)
        searchParams.set("locale", locale)
        searchParams.set("pageSize", selectedPageSize.toString())
        if (selectedAuthor != ALL_AUTHORS)
            searchParams.set("author", selectedAuthor)
        if (selectedPublishedDate != ALL_DATES)
            searchParams.set("published", selectedPublishedDate)

        const path = `${ ARTICLES_SERVICE }?${ searchParams.toString() }`
        const refreshArticles = new AbortController()
        setIsLoading(true)
        fetch(path, {
            signal: refreshArticles.signal
        })
        .then(response => {
            if (response.ok) 
                return response.json()
            throw new Error("Invalid response received")
        })
        .then(data => {
            setArticleList(data)
            setIsLoading(false)
        })
        .catch(e => {
            console.error("Caught error", e)
        })
        return () => {
            refreshArticles.abort()
        }
    }, [ parent, locale, selectedAuthor, selectedPageSize, selectedPublishedDate ])

    return <div className={ className }>
        <div className='flex flex-row flex-wrap justify-between gap-4'>
            <Dropdown className='w-full lg:max-w-[14rem]' label="Author:" value={ selectedAuthor } options={ authorOptions } onChange={ (author) => setSelectedAuthor(author)} />
            <Dropdown className='w-full lg:max-w-[14rem]' label="Published on:" value={ selectedPublishedDate } options={ datesOptions } onChange={ (newDate) => setPublishedDate(newDate) }/>
            <Dropdown className='w-full lg:max-w-[14rem]' label="Results:" value={ selectedPageSize } options={ pageSizeOptions } onChange={ (newPageSize) => setPageSize(newPageSize)} />
        </div>
        <div className={`article-list ${ isLoading && "grayscale blur animate-pulse"}`}>
            { items.map(item => <ArticleListItem key={`article-${ item.id }`} item={ item } imageBaseUrl={ imageBaseUrl } />)}
        </div>
    </div>
}

export const ArticleListItem : FunctionComponent<{ item: Types.GetArticlesResult['items'] extends (infer R)[] ? R : never, imageBaseUrl: string}> = ({ item, imageBaseUrl }) => 
{
    const imageSrc = item.image.path ? new URL(item.image.path, imageBaseUrl).href : item.image.url
    return <div className='article-container'>
        { imageSrc && <div className='relative aspect-[2/1] w-full'>
            <Image src={ imageSrc } alt="" fill className='object-cover' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div> }
        <div className='article-meta'>
            <div><UserIcon className='inline-block w-6 h-6 mr-2' /><span>{ item.author }</span></div>
            <div><CalendarDaysIcon className='inline-block w-6 h-6 mr-2' /><LocalTime date={ item.published} mode='Date' /></div>
        </div>
        <div className='article-title'>{ item.title ?? item.name }</div>
        <div className='article-description'>{ item.description }</div>
        <div className='article-buttons'>
            <BannerButton href={ item.path ?? item.url ?? '/' } >Read more</BannerButton>
        </div>
    </div>
}
ArticleListItem.displayName = "Article list item"

export default ArticleList