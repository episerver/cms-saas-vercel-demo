import Base64 from 'crypto-js/enc-base64.js'
import hmacSHA256 from 'crypto-js/hmac-sha256.js'
import md5 from 'crypto-js/md5.js'

export type FetchAPI = typeof fetch

export function createHmacFetch(appKey: string, secret: string) : FetchAPI
{
    function isRequest(toTest: any) : toTest is Request
    {
        if (typeof(toTest) != 'object' || toTest == null)
            return false
        return (toTest as Request).url ? true : false
    }

    function readStream<R>(stream: ReadableStream<R>) : Promise<R[]> {
        return new Promise<R[]>((resolve, reject) => {
            console.warn("Using readStream")
            const reader = stream.getReader()
            const data : R[] = []
            reader.read().then(({ value, done }) => {
                if (value != undefined)
                    data.push(value)

                if (done) {
                    reader.releaseLock()
                    resolve(data)
                }
            }).catch(e => {
                try {
                    reader.releaseLock()
                } catch {}
                reject(e)
            })
        })
    }

    return async function newFetch(input: Parameters<FetchAPI>[0] | URL, init?: Parameters<FetchAPI>[1]) : ReturnType<FetchAPI>
    {
        //#region HMAC Signature
        const url = new URL(isRequest(input) ? input.url : input.toString())
        const method = (isRequest(input) ? input.method : init?.method) ?? 'get'
        const secretBytes = Base64.parse(secret)
        const target = url.pathname + url.search
        const timestamp = new Date().getTime()
        const nonce = Math.random().toString(36).substring(7)
        const body = isRequest(input) ? (input.body ? (await readStream(input.body)).map(x => new TextDecoder().decode(x)).join("") : "") : String(init?.body)
        const body_b64 = md5(String(body || "")).toString(Base64)
        const message = appKey + method + target + timestamp + nonce + body_b64
        const hmac = hmacSHA256(message, secretBytes)
        const signature = Base64.stringify(hmac)
        const authHeaderValue = `epi-hmac ${ appKey }:${ timestamp }:${ nonce }:${ signature }`
        //#endregion

        const newRequest = (isRequest(input) ? input.clone() : new Request(input as URL, init)) as Request
        newRequest.headers.set('Authorization', authHeaderValue)

        return fetch(newRequest) as ReturnType<FetchAPI>
    }
}

export default createHmacFetch