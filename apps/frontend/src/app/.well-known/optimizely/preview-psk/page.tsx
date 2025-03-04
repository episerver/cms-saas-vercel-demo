import React from 'react';
import createClient, { AuthMode } from '@remkoj/optimizely-graph-client';
import { notFound } from 'next/navigation'

import { getContentById } from '@/gql/functions';
import { getServerContext, CmsContent } from '@remkoj/optimizely-cms-react/rsc';
import createFactory from '@/components/factory';

type MySearchParams = {
    key?: string | string[]
    loc?: string | string[]
    ver?: string | string[]
    psk?: string | string[]
}

type ParsedParams = {
    [K in keyof MySearchParams ] -?: string | null
}

function resolveParams(input: MySearchParams) : Readonly<ParsedParams>
{
    const val : ParsedParams = {key: null, loc: null, ver: null, psk: null };

    (['key','loc','ver','psk'] as Array<keyof MySearchParams>).forEach(x => {
        if (typeof input[x] == 'string' && input[x].length > 0)
            val[x] = input[x]
    });

    return val
}

const PreviewPage = async ({ searchParams }: { searchParams: MySearchParams }) => {
    console.log('Preview endpoint', searchParams)

    // Parse request
    const requestData = resolveParams(searchParams)

    // Create context
    const ctx = getServerContext()
    ctx.setLocale(requestData.loc ?? 'en')
    ctx.setComponentFactory(createFactory())
    ctx.setOptimizelyGraphClient(createClient())
    ctx.setMode("preview")

    // Validate the PSK
    const psk = ctx.client?.siteInfo.publishToken
    if (!psk || psk.length < 1) {
        console.error("No Pre-Shared key configured")
        notFound()
    }
    if (psk != requestData.psk) {
        console.error("Invalid PSK provided")
        notFound()
    }

    // Load the content referenced
    if (!requestData.key) {
        console.error("No Content-Key provided")
        notFound()
    }
    ctx.client.updateAuthentication(AuthMode.HMAC)
    const content = await getContentById(ctx.client, {
        key: requestData.key,
        version: requestData.ver,
        locale: requestData.loc
    })

    // Validate that we have data
    if (typeof(content?.content?.total) != 'number' || content?.content?.total != 1) {
        console.error("Needed exactly one version, got ", content?.content?.total)
        notFound()
    }
    const contentData = content?.content?.items?.at(0)

    // Render CMS Content
    return <CmsContent contentLink={{ key: requestData.key, locale: requestData.loc, version: requestData.ver }} fragmentData={ contentData }  />
}

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;
export const runtime = "nodejs"

export default PreviewPage