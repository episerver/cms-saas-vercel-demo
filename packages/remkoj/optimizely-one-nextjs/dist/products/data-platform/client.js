'use client';
export class DataPlatformService {
    order = 200;
    code = "odp";
    debug = false;
    get isActive() {
        return this.getBrowserApi() != undefined;
    }
    trackPage() {
        const zaius = this.getBrowserApi();
        if (!zaius)
            return;
        if (this.debug)
            console.log("Data platform - Tracking page view");
        zaius.event('pageview');
        if (this.lastTrackedContentIntelligenceId != this.contentIntelligenceId && this.contentIntelligenceId != '') {
            if (this.debug)
                console.log(`Data platform - Updating Content Intelligence ID to ${this.contentIntelligenceId}`);
            zaius.customer({ content_intelligence_id: this.contentIntelligenceId });
            this.lastTrackedContentIntelligenceId = this.contentIntelligenceId;
        }
    }
    trackEvent(event) {
        const zaius = this.getBrowserApi();
        if (!zaius)
            return;
        const event_name = event.event;
        const event_data = {};
        for (const prop_name of Object.getOwnPropertyNames(event)) {
            if (prop_name != 'event')
                event_data[prop_name] = event[prop_name];
        }
        console.log("Data platform - Tracking event:", event_name, event_data);
        zaius.event(event_name, event_data);
    }
    getBrowserApi() {
        try {
            return window.zaius;
        }
        catch {
            return undefined;
        }
    }
    lastTrackedContentIntelligenceId = undefined;
    get contentIntelligenceId() {
        if (!this._contentIntelligenceId || this._contentIntelligenceId == '') {
            try {
                this._contentIntelligenceId = document.cookie.match('(^|;)\\s*iv\\s*=\\s*([^;]+)')?.pop() || '';
            }
            catch {
                this._contentIntelligenceId = '';
            }
        }
        return this._contentIntelligenceId;
    }
    _contentIntelligenceId = undefined;
}
export default DataPlatformService;
