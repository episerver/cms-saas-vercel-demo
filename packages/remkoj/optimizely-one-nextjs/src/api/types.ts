import type { cookies } from 'next/headers'

type ReadonlyRequestCookies = ReturnType<typeof cookies>

export type ApiServiceErrorMessage = { error: { status: number, message: string } }
export type ApiServiceErrorResponse = [ApiServiceErrorMessage, number]
export type ApiServiceResponse<T extends {} = {}> = [T, 200 | undefined] | ApiServiceErrorResponse

export type ApiService<T extends {} = {}> = {
    for: {
        path: string,
        verb: string
    },
    handler: (query: URLSearchParams, cookies: ReadonlyRequestCookies) => Promise<ApiServiceResponse<T>>
}