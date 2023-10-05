import Base64 from 'crypto-js/enc-base64.js';
import hmacSHA256 from 'crypto-js/hmac-sha256.js';
import md5 from 'crypto-js/md5.js';
import getConfig from './config.js';
import fetch, { Request } from 'node-fetch';
export function createHmacFetch(appKey, secret) {
    function isRequest(toTest) {
        if (typeof (toTest) != 'object' || toTest == null)
            return false;
        if (toTest.href)
            return false;
        return toTest.url ? true : false;
    }
    function readStream(stream) {
        const chunks = [];
        return new Promise((resolve, reject) => {
            stream.on('data', chunk => chunks.push(chunk));
            stream.on('error', reject);
            stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
        });
    }
    return async function newFetch(...args) {
        const [input, init] = args;
        const url = new URL(isRequest(input) ? input.url : input.toString());
        const method = (isRequest(input) ? input.method : init?.method) ?? 'get';
        const secretBytes = Base64.parse(secret);
        const target = url.pathname + url.search;
        const timestamp = new Date().getTime();
        const nonce = Math.random().toString(36).substring(7);
        const body = isRequest(input) ?
            (input.body ? await readStream(input.body) : "") :
            new String(init?.body ?? "");
        const body_b64 = md5(String(body || "")).toString(Base64);
        const message = appKey + method + target + timestamp + nonce + body_b64;
        const hmac = hmacSHA256(message, secretBytes);
        const signature = Base64.stringify(hmac);
        const newRequest = isRequest(input) ? input.clone() : new Request(input, init);
        const authHeaderValue = `epi-hmac ${appKey}:${timestamp}:${nonce}:${signature}`;
        newRequest.headers.set('Authorization', authHeaderValue);
        return fetch(newRequest);
    };
}
export function hmacFetch(...args) {
    const config = getConfig();
    const authFetch = createHmacFetch(config.app_key, config.secret);
    return authFetch(...args);
}
export default hmacFetch;
