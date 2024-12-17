//import { headers } from "next/headers";

/**
 * Reads the Search Parameters put into the headers by the Edge middleware, so
 * that server components can leverage the URL Search Params without requiring
 * them to be handed down from the Next.js page
 * 
 * @returns     The populated URLSearchParams object
 */
export async function searchParams() : Promise<URLSearchParams>
{
    // const headersList = await headers()
    // const params = new URLSearchParams(headersList.get('x-search') ?? '?')
    // return params
    return new URLSearchParams()
}