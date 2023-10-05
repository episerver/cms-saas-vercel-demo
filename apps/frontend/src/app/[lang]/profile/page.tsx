'use client'

type PageProps<P = never,Q = never> = {
    params: P,
    searchParams: Q
}

type ProfilePageProps = PageProps<{lang: string},{}>

export default function ProfilePage({ params }: ProfilePageProps) {
    return <div>
        <h1>Profile page</h1>
        <div>
            <pre>{ JSON.stringify(params, null, 4) }</pre>
        </div>
    </div>
}