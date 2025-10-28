import {
  type RequestHandler,
} from "@optimizely/optimizely-sdk/universal";

type HandlerHeaders = {
  [header: string]: string | undefined
}

type FetchRequestHandlerConfig = { 
  enableTraceOutput?: boolean
  odpPrivateKey?: string
}

export class FetchRequestHandler implements RequestHandler {
  private _trace : boolean = false
  private _odpPrivateKey: undefined | string
  constructor(options?: FetchRequestHandlerConfig)
  {
    this._trace = options?.enableTraceOutput ?? false
    this._odpPrivateKey = options?.odpPrivateKey
  }
  makeRequest(
    requestUrl: string | URL | Request,
    headers?: HandlerHeaders,
    method?: string,
    data?: string
  ) {
    const controller = new AbortController();
    const headerData : HeadersInit = {}
    if (headers)
        Object.getOwnPropertyNames(headers).forEach(headerName => {
          if (this._odpPrivateKey && headerName === "x-api-key" && headers[headerName] && this._odpPrivateKey.startsWith(headers[headerName])) {
            headerData[headerName] = this._odpPrivateKey
          } else if (headers[headerName])
            headerData[headerName] = headers[headerName]
        })
        if (this._trace) 
          console.log(`FetchRequestHandler: Sending ${ method } request to ${ requestUrl }`)
    const fetchResponse = fetch(requestUrl, {
      method,
      headers: headerData,
      signal: controller.signal,
      body: data,
    }).then(async (httpResponse) => {
      if (httpResponse.ok) {
        const bodyText = await httpResponse.text();
        const headersObject: HandlerHeaders = {};
        httpResponse.headers.forEach((value, key) => {
          headersObject[key] = value;
        });
        if (this._trace) 
          console.log(`FetchRequestHandler: Received data from ${ requestUrl }`, bodyText)
        return {
          statusCode: httpResponse.status,
          body: bodyText,
          headers: headersObject,
        };
      } else {
        throw new Error(
          `HTTP Error ${httpResponse.status}: ${httpResponse.statusText}`
        );
      }
    });
    return {
      abort: () => controller.abort("Request aborted"),
      responsePromise: fetchResponse
    };
  }
}

export function createFetchRequestHandler(options?: FetchRequestHandlerConfig) {
  return new FetchRequestHandler(options)
}

export default createFetchRequestHandler
