import Base64 from 'crypto-js/enc-base64.js'
import hmacSHA256 from 'crypto-js/hmac-sha256.js'
import md5 from 'crypto-js/md5.js'
import getConfig from './config.js'

// Needed until NodeLTS has a stable fetch implementation
import fetch, { Request } from 'node-fetch'
import type { Request as RequestType } from 'node-fetch'

type FetchType = typeof fetch

export function createHmacFetch(appKey: string, secret: string) : FetchType
{
    /**
     * Test to see if the first fetch parameter was a Request (and thus not a
     * string or URL)
     * 
     * @param       toTest  The value to test
     * @returns     The result
     */
    function isRequest(toTest: Parameters<FetchType>[0]) : toTest is RequestType
    {
        if (typeof(toTest) != 'object' || toTest == null)
            return false
        if ((toTest as URL).href)
            return false
        return (toTest as RequestType).url ? true : false
    }

    function readStream(stream: NodeJS.ReadableStream): Promise<string> {
        const chunks: Array<any> = []
        return new Promise((resolve, reject) => {
          stream.on('data', chunk => chunks.push(chunk))
          stream.on('error', reject)
          stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
        })
    }

    return async function newFetch(...args: Parameters<FetchType>) : ReturnType<FetchType>
    {
        const [ input, init ] = args
        const url = new URL(isRequest(input) ? input.url : input.toString())
        const method = (isRequest(input) ? input.method : init?.method) ?? 'get'
        const secretBytes = Base64.parse(secret)
        const target = url.pathname + url.search
        const timestamp = new Date().getTime()
        const nonce = Math.random().toString(36).substring(7)
        const body = isRequest(input) ?  
            (input.body ? await readStream(input.body) : "") : 
            new String(init?.body ?? "")
        const body_b64 = md5(String(body || "")).toString(Base64)
        const message = appKey + method + target + timestamp + nonce + body_b64
        const hmac = hmacSHA256(message, secretBytes)
        const signature = Base64.stringify(hmac)
        const newRequest = isRequest(input) ? input.clone() : new Request(input, init)
        const authHeaderValue = `epi-hmac ${ appKey }:${ timestamp }:${ nonce }:${ signature }`
        newRequest.headers.set('Authorization', authHeaderValue)
        return fetch(newRequest)
    }
}

export function hmacFetch(...args: Parameters<FetchType>) : ReturnType<FetchType>
{
    const config = getConfig()
    const authFetch = createHmacFetch(config.app_key, config.secret)
    return authFetch(...args)
}

export default hmacFetch