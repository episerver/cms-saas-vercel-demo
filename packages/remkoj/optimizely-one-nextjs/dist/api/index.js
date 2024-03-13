import 'server-only';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import ProfileApiService from './profile-api-service';
import GraphInfoApiService from './graph-info-service';
export function createOptimizelyOneApi(config) {
    const pathParameterName = config?.pathParameterName ?? 'path';
    const services = [
        ...(config?.services || []),
        ProfileApiService,
        GraphInfoApiService
    ];
    // Basic service matcher, but get's the job done for now
    function matchService(verb, path, serviceFor) {
        return serviceFor.path.toLowerCase() == path.toLowerCase() &&
            serviceFor.verb.toLowerCase() == verb.toLowerCase();
    }
    async function handler(request, context) {
        // Determine the current path & basePath for handling the request
        let apiPath = context.params[pathParameterName];
        if (!apiPath)
            apiPath = '/';
        else if (Array.isArray(apiPath))
            apiPath = '/' + apiPath.join('/');
        else if (!apiPath.startsWith('/'))
            apiPath = '/' + apiPath;
        const path = apiPath;
        //const basePath = apiPath == '/' ? request.nextUrl.pathname : request.nextUrl.pathname.endsWith(apiPath) ? request.nextUrl.pathname.substring(0, request.nextUrl.pathname.lastIndexOf(apiPath)) : ''
        const verb = request.method;
        // Find the service
        const apiService = services.find(service => matchService(verb, path, service.for));
        if (!apiService)
            return NextResponse.json({ error: { status: 404, message: "Not found" } }, { status: 404 });
        // Invoke the service
        const c = cookies();
        const [response, statusCode] = await apiService.handler(request.nextUrl.searchParams, c);
        // Return the outcome
        return NextResponse.json(response, { status: statusCode });
    }
    return handler;
}
