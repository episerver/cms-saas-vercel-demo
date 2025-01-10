export const dynamic = "force-dynamic";
export const runtime = "edge";

import Link from "next/link";

export default function NotFoundPage()
{
    return <div className="min-h-[75vh] w-full flex justify-center items-center">
        <div className="prose">
            <h1>Page not found</h1>
            <p>The page you&quot;ve tried to reach no longer exists </p>
            <p><Link href="/">Our start page</Link></p>
        </div>
    </div>
}