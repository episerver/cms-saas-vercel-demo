import NextAuth from "next-auth"
import { readEnvironmentVariables as getGraphConfig, applyConfigDefaults } from "@remkoj/optimizely-graph-client"
import { Auth } from '@remkoj/optimizely-dxp-nextjs'

const config = applyConfigDefaults(getGraphConfig())
const optiOptions = {
    clientId: "frontend",
    cmsBaseUrl: config.dxp_url ?? 'http://localhost:8000',
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