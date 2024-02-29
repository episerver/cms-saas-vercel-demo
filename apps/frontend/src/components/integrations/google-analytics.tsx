import Script from "next/script";
import { type FunctionComponent } from "react";

type GoogleAnalyticsProps = {
    measurementId?: string
}

export const GoogleAnalytics : FunctionComponent<GoogleAnalyticsProps> = ({ measurementId }) => {
    if (!measurementId)
        return <></>
    return <>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${ measurementId }`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); }; gtag('js', new Date()); gtag('config', '${ measurementId }');`}</Script>
    </>
}

export default GoogleAnalytics