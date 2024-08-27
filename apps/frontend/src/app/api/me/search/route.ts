import { type NextRequest, NextResponse } from 'next/server'
import * as DataPlatform from '@/lib/integrations/optimizely-data-platform'

function onlyUnique<T>(value: T, index: number, array: Array<T>) : value is T {
    return array.indexOf(value) === index;
}

async function handler(req: NextRequest) : Promise<NextResponse<{}>>
{
    const last_terms = (await DataPlatform.getLastSearchTerms()).filter(onlyUnique)
    const count = req.nextUrl.searchParams.get('count')

    if (count && count != '') {
        try {
            const countNr = Number.parseInt(count)
            if (countNr > 0) {
                return NextResponse.json({
                    terms: last_terms.slice(0, countNr)
                })
            }

        } catch {}
    }

    return NextResponse.json({
        terms: last_terms
    })
}

export const GET = handler