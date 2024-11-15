import { type Locales } from "@gql/graphql"
import { localeToGraphLocale } from "@remkoj/optimizely-graph-client"
import { Utils } from "@remkoj/optimizely-cms-react/rsc"
import getSdk from "@/sdk"
import { searchParams } from "@/search"
import { UrlParamDropdown as DropDown, type DropDownOption } from "@/components/shared/drop_down"
import BlogPostCard from "@/components/shared/blog_post_card"

export type BlogPostsSectionProps = {
    parentKey: string
    locale: string
}

export default async function BlogPostsSection({ parentKey, locale }: BlogPostsSectionProps) 
{
    // Get the search parameters
    const search = await searchParams()

    // Handle items per page
    const itemsPerPageOptions : Array<DropDownOption> = [{ value: "9" },{ value: "12" }]
    const itemsPerPageValue = itemsPerPageOptions.filter(x => x.value == search.get("pageSize")).at(0) ?? itemsPerPageOptions[1]
    const limit = tryParseNumber(itemsPerPageValue.value) ?? 12;
    const skip = tryParseNumber(search.get('skip') ?? '0') ?? 0;

    // Fetch the data
    const sdk = getSdk()
    const { total, items, facets } = (await sdk.getChildBlogPosts({
        parentKey: parentKey,
        locale: localeToGraphLocale(locale) as Locales,
        limit: limit,
        skip: skip,
        topic: search.get('topic') ?? undefined,
        author: search.get('author') ?? undefined
    }).catch(() => undefined))?.result?.items?.at(0)?.items?.posts ?? { total: 0, items: [], facents: {}}

    // Collect the options
    const topicOptions : Array<DropDownOption> = facets?.topic?.filter(Utils.isNotNullOrUndefined).map(t => {
        return {
            value: t.name ?? '',
            label: `${ t.name } (${ t.count })`
        }
    }) ?? []
    topicOptions.unshift({ label: "Show all", value: "" })
    const authorOptions : Array<DropDownOption> = (facets?.author?.filter(Utils.isNotNullOrUndefined).map(t => {
        return {
            value: t.name ?? '',
            label: `${ t.name } (${ t.count })`
        }
    }) ?? [])
    authorOptions.unshift({ label: "Show all", value: "" })

    // Calculate page count
    const count = Math.ceil((total || 0) / limit)
    const page = Math.floor(skip/limit)

    return <>
        <div className="flex flex-col lg:flex-row justify-between gap-4 py-4">
            <DropDown label="Topic" options={ topicOptions } urlSearchParam="topic" unselectedLabel="Filter by topic" />
            <DropDown label="Author" options={ authorOptions } urlSearchParam="author" unselectedLabel="Filter by author" />
            <DropDown label="Items per page" options={ itemsPerPageOptions } defaultValue={ itemsPerPageValue.value } urlSearchParam="pageSize" unselectedLabel="Set page size" />
        </div>
        <div className="columns-1 lg:columns-2 xl:columns-3 gap-2 lg:gap-4 xl:gap-8">
            { (items || []).filter(Utils.isNotNullOrUndefined).map(item => {
                const key = item.metadata?.key
                if (!key)
                    return null
                return <div key={key} className="w-full mb-2 lg:mb-4 xl:mb-8">
                    <BlogPostCard blogPost={{ 
                        category: Array.isArray(item.topic) ? item.topic.join(", ") : item.topic ?? '',
                        id: item.metadata?.key ?? "", 
                        description: "", 
                        image: {
                            src: new URL(item.image?.src?.default ?? '/', item.image?.src?.base ?? 'https://example.com').href,
                            alt: item.metadata?.key ?? "",
                            width: 200,
                            height: 200
                        },
                        title: item.heading ?? "",
                        url: item.metadata?.url?.default ?? '/',
                        author: item.author ?? "",
                        published: item?.metadata?.published
                    }}  />
                </div>
            })}
        </div>

        <pre>{ JSON.stringify({
            total, skip, limit, count, page
        }, undefined, 2)}</pre>
    </>
}

function tryParseNumber(...args: Parameters<(typeof Number)['parseInt']>) : ReturnType<(typeof Number)['parseInt']> | undefined
{
    try {
        return Number.parseInt(...args)
    } catch {
        undefined
    }
}