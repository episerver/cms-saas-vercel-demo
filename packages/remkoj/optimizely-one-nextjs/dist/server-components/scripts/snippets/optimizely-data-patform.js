import { jsx as _jsx } from "react/jsx-runtime";
/* eslint @next/next/no-before-interactive-script-outside-document: 0 */
import Script from 'next/script';
export const OptimizelyDataPlatformScript = (props) => {
    const odp_id = props.trackerId.split('.').shift() ?? '';
    return _jsx(Script, { id: 'data-platform-script', strategy: 'beforeInteractive', children: `
    var zaius = window['zaius'] || (window['zaius'] = []);
    zaius.methods = ['initialize', 'onload', 'customer', 'entity', 'event', 'subscribe', 'unsubscribe', 'consent', 'identify', 'anonymize', 'dispatch'];

    // build queueing methods
    zaius.factory = function (method) {
        return function() {
            var args = Array.prototype.slice.call(arguments);
            args.unshift(method);
            zaius.push(args);
            return zaius;
        };
    };

    (function() 
    {
        for (var i = 0; i < zaius.methods.length; i++) {
            var method = zaius.methods[i];
            zaius[method] = zaius.factory(method);
        }

        var script   = document.createElement('script');
        script.type  = 'text/javascript';
        script.async = true;
        script.src   = ('https:' === document.location.protocol ? 'https://' : 'http://') + 'd1igp3oop3iho5.cloudfront.net/v2/${odp_id}/zaius.js';
        var firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
    })();
` });
};
export default OptimizelyDataPlatformScript;
