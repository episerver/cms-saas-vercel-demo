declare namespace NodeJS {
    export interface ProcessEnv {
        /**
         * Expects value '1' or 'true' to disable the WebExperimentation
         * project switcher. With any other value it follows the default
         * logic on when Web Experimentation projects can be switched.
         */
        DISABLE_WX_SWITCHER: string;

        /**
         * Google Analytics Tracking ID
         */
        GA_TRACKING_ID: string;

        NEXT_PUBLIC_OPTIMIZELY_CMS_URL: string
        NEXT_PUBLIC_OPTIMIZELY_WEB_EXPERIMENTATION_PROJECT: string
        NEXT_PUBLIC_SITE_DOMAIN: string
        NEXT_PUBLIC_SITE_PRIMARY: string
    }
}