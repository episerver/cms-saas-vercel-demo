import NextAuth from "next-auth"
import { getContentGraphConfig } from "@remkoj/optimizely-dxp-react"
import { Auth } from '@remkoj/optimizely-dxp-nextjs'


const config = getContentGraphConfig()
const optiOptions = {
    clientId: "frontend",
    cmsBaseUrl: config.dxp_url,
    name: "Employee Account",
    scopes: ["roles","epi_content_delivery"]
}
const handler = NextAuth({
    theme: {
        brandColor: "rgb(17,94,89)",
        logo: "/assets/logo.png",
        colorScheme: "auto"
    },
    providers: [
        Auth.OptimizelyCmsOIDCProvider(optiOptions)
    ],
    callbacks: {
        jwt: Auth.OptimizelyCmsRefreshJwtCallbackHandler(optiOptions),
        session: Auth.OptimizelyCmsRefreshSessionCallbackHander(optiOptions)
    }
})

export { 
    handler as GET, 
    handler as POST 
}