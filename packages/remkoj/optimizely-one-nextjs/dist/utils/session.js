import { v4 as createGuid } from 'uuid';
import * as EnvTools from './env';
import EnvVars from '../env-vars';
export function getOrCreateVisitorId(request) {
    const cookieName = EnvTools.readValue(EnvVars.FrontendCookie, 'visitorId');
    return request.cookies.get(cookieName)?.value ?? createGuid();
}
export function getVisitorId(c) {
    const cookieName = EnvTools.readValue(EnvVars.FrontendCookie, 'visitorId');
    return c.get(cookieName)?.value;
}
export function addVisitorId(response, visitorId) {
    const DEBUG = process.env.NODE_ENV == 'development';
    response.cookies.set({
        name: 'visitorId',
        value: visitorId,
        sameSite: "strict",
        path: "/",
        secure: !DEBUG
    });
    return response;
}
export default {
    getVisitorId,
    getOrCreateVisitorId,
    addVisitorId
};
