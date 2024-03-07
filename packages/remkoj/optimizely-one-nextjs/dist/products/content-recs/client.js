'use client';
export class ContentRecsService {
    order = 300;
    code = "crecs";
    debug = false;
    get isActive() {
        return this.getBrowserApi() != undefined;
    }
    trackPage() {
        const idio = this.getBrowserApi();
        if (!idio)
            return;
        if (this.debug)
            console.log("Content Recommendations / Analytics - Tracking page view");
        idio.push(['track', 'consume']);
    }
    getBrowserApi() {
        try {
            if (!window._iaq)
                window._iaq = [];
            return window._iaq;
        }
        catch {
            return undefined;
        }
    }
}
export default ContentRecsService;
