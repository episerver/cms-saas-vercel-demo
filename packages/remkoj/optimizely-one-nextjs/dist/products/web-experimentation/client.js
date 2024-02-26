'use client';
export class WebExperimenationService {
    order = 100;
    code = "webex";
    debug = false;
    get isActive() {
        return this.getBrowserApi() != undefined;
    }
    activatePage() {
        const webex = this.getBrowserApi();
        if (!webex)
            return;
        webex.push({ type: 'activate' });
        if (this.debug)
            console.log("Web Experimentation - Activating pages");
    }
    trackEvent(event) {
        const webex = this.getBrowserApi();
        if (!webex)
            return;
        const eventName = `${event.event}_${event.action}`;
        const eventTags = {};
        for (const prop_name of Object.getOwnPropertyNames(event)) {
            if (prop_name != 'event' && prop_name != 'action')
                eventTags[prop_name] = event[prop_name];
        }
        console.log("Web Experimentation - Tracking event:", { type: 'event', eventName, tags: eventTags });
        webex.push({ type: 'event', eventName, tags: eventTags });
    }
    getBrowserApi() {
        try {
            if (!window.optimizely)
                window.optimizely = [];
            return window.optimizely;
        }
        catch {
            return undefined;
        }
    }
}
export default WebExperimenationService;
