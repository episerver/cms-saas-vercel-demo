import type { NextRequest, NextResponse } from 'next/server';
import type { ReadonlyRequestCookies } from '../products/types';
export declare function getOrCreateVisitorId(request: NextRequest): string;
export declare function getVisitorId(c: ReadonlyRequestCookies): string | undefined;
export declare function addVisitorId<T = unknown>(response: NextResponse<T>, visitorId: string): NextResponse<T>;
declare const _default: {
    getVisitorId: typeof getVisitorId;
    getOrCreateVisitorId: typeof getOrCreateVisitorId;
    addVisitorId: typeof addVisitorId;
};
export default _default;
