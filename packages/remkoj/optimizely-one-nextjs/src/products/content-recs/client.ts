'use client'

import * as ClientApi from '../../client-types'

export class ContentRecsService implements ClientApi.OptimizelyOneService<ClientApi.OptimizelyContentRecsApi>
{
    public order : Readonly<number> = 300
    public code : Readonly<string> = "crecs"
    public debug: boolean = false
    public get isActive() : boolean {
        return this.getBrowserApi() != undefined
    }

    public trackPage()
    {
        const idio = this.getBrowserApi()
        if (!idio) return
        if (this.debug) console.log("Content Recommendations / Analytics - Tracking page view")
        idio.push(['track', 'consume'])
    }

    public getBrowserApi()
    {
        try {
            if (!window._iaq) 
                window._iaq = [] as [string, any][]
            return window._iaq
        } catch {
            return undefined
        }
    }
}

export default ContentRecsService