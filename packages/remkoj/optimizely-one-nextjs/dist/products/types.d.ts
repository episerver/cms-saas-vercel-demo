import type { cookies } from "next/headers";
export type ReadonlyRequestCookies = ReturnType<typeof cookies>;
