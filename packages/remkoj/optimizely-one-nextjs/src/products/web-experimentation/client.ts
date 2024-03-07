'use client'

import * as ClientApi from '../../client-types'

export class WebExperimenationService implements ClientApi.OptimizelyOneService<ClientApi.OptimizelyWebExperimentationApi>
{
    public order : Readonly<number> = 100
    public code : Readonly<string> = "webex"
    public debug: boolean = false
    public get isActive() : boolean {
        return this.getBrowserApi() != undefined
    }

    public activatePage()
    {
        const webex = this.getBrowserApi()
        if (!webex) return
        webex.push({ type: 'activate' })
        if (this.debug) console.log("Web Experimentation - Activating pages")
    }

    public trackEvent(event: ClientApi.OptimizelyOneEvent)
    {
        const webex = this.getBrowserApi()
        if (!webex) return
        const eventName = `${event.event}_${event.action}`
        const eventTags : Record<string, any> = {}
        for (const prop_name of (Object.getOwnPropertyNames(event) as (keyof ClientApi.OptimizelyOneEvent)[])) {
            if (prop_name != 'event' && prop_name != 'action') eventTags[prop_name] = event[prop_name] 
        }
        console.log("Web Experimentation - Tracking event:", { type: 'event', eventName, tags: eventTags })
        webex.push({ type: 'event', eventName, tags: eventTags })
    }

    public getBrowserApi()
    {
        try {
            if (!window.optimizely)
                window.optimizely = [] as unknown as ClientApi.OptimizelyWebExperimentationApi
            return window.optimizely
        } catch {
            return undefined
        }
    }
}

export default WebExperimenationService