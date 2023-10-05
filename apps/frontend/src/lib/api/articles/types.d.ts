export type PagingData = {
    count: number,
    page: number
}

export type ArticleList = {
    articles: {
        guid: string
    }[]
}

export type Filters = {
    author?: string | string[]
    published?: string
}

export type GetArticlesResult = {
    parent: string
    locale: string
    totalResults: number
    totalPages: number
    pageSize: number
    pageNumber: number
    facets: {
        author: {
            name: string
            count: number
        }[],
        published: {
            date: string,
            count: number
        }[]
    },
    items: {
        id: string
        name: string
        title: string
        description: string
        author: string
        published: string
        image: {
            url: string | null
            path: string | null
        }
        url: string | null
        path: string | null
    }[]
}

export type getArticlesApiResponse = GetArticlesResult | { error: string }