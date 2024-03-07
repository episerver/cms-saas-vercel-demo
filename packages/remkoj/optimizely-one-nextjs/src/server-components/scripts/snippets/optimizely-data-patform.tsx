/* eslint @next/next/no-before-interactive-script-outside-document: 0 */
import Script from 'next/script'

export type OptimizelyDataPlatformProps = {
    trackerId: string
}

export const OptimizelyDataPlatformScript = (props: OptimizelyDataPlatformProps) => {
    const odp_id = props.trackerId.split('.').shift() ?? ''
    return <Script id='data-platform-script' strategy='beforeInteractive'>{`
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
        script.src   = ('https:' === document.location.protocol ? 'https://' : 'http://') + 'd1igp3oop3iho5.cloudfront.net/v2/${ odp_id }/zaius.js';
        var firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
    })();
`}
</Script>
}

export default OptimizelyDataPlatformScript