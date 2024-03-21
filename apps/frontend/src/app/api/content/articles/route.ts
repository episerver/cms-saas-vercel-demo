import { type NextRequest, NextResponse } from 'next/server'
import { getArticles, type Types } from '@/lib/api/articles'

async function handler(req: NextRequest) : Promise<NextResponse<Types.getArticlesApiResponse>>
{
    const locale = req.nextUrl.searchParams.get("locale")
    const author = req.nextUrl.searchParams.get("author")
    const published = req.nextUrl.searchParams.get("published")
    const pageSize = parseInt(req.nextUrl.searchParams.get("pageSize") ?? "-", 10)
    const pageNumber = parseInt(req.nextUrl.searchParams.get("page") ?? "-", 10)

    if (!locale)
        return NextResponse.json({error: "Bad request"}, { status: 400 })

    const paging : Types.PagingData = {
        count: isNaN(pageSize) || pageSize == 0 ? 12 : pageSize,
        page: isNaN(pageNumber) || pageNumber == 0 ? 1 : pageNumber
    }
    const filters : Types.Filters = {
        author: author ?? undefined,
        published: published ?? undefined
    }

    return NextResponse.json(await getArticles(locale, paging, filters))
}

export const GET = handler
export const runtime = 'nodejs' // 'nodejs' (default) | 'edge'
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const fetchCache = 'default-no-store'