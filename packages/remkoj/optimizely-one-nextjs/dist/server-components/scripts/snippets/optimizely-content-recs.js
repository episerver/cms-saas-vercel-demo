import { jsx as _jsx } from "react/jsx-runtime";
/* eslint @next/next/no-before-interactive-script-outside-document: 0 */
import Script from 'next/script';
export const OptimizelyContentRecsTrackingScript = (props) => {
    const client_id = props.client;
    const delivery_id = props.delivery;
    return _jsx(Script, { id: 'content-recs-script', strategy: 'beforeInteractive', children: `
    // Set client and delivery
    _iaq = [
        ['client', ${JSON.stringify(client_id)}],
        ['delivery', ${JSON.stringify(delivery_id)}]
    ];

    // Include the Content Analytics & Recommendations JavaScript
    !function(d,s){var ia=d.createElement(s);ia.async=1,s=d.getElementsByTagName(s)[0],ia.src='//s.idio.co/ia.js',s.parentNode.insertBefore(ia,s)}(document,'script');
` });
};
export default OptimizelyContentRecsTrackingScript;
