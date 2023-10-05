import type { User, AuthOptions, Session, TokenSet } from "next-auth"
import type { DefaultJWT } from "next-auth/jwt"
import type { OAuthConfig } from "next-auth/providers"

const defaultScopes = ['openid','offline_access','profile','email']
const defaultRoles = "Everyone Authenticated"
const defaultProviderId = "optimizely_cms"

export type OptimizelyCmsOIDCProviderOptions = {
    id ?: string
    clientId: string
    clientSecret?: string
    cmsBaseUrl: string | URL
    name: string
    scopes?: string[]
}

type OptimizelyUserInfo = {
    sub: string,
    email?: string,
    name?: string,
    role?: string[]
}

type OptimizelyProfile = {
    sub: string,
    oi_au_id: string,
    azp: string,
    at_hash: string,
    oi_tkn_id: string,
    aud: string,
    exp: number,
    iss: string,
    iat: number
}

export function OptimizelyCmsOIDCProvider (options: OptimizelyCmsOIDCProviderOptions) : OAuthConfig<OptimizelyProfile> 
{
    // Merge default scopes & requested scopes
    const scopes : string[] = [...defaultScopes]
    options.scopes?.forEach(scope => {
        if (!scopes.includes(scope))
            scopes.push(scope)
    })

    const finalConfig : OAuthConfig<OptimizelyProfile> = {
        type: "oauth",
        id: options.id ?? defaultProviderId,
        name: options.name,
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        wellKnown: new URL("/.well-known/openid-configuration", options.cmsBaseUrl).href,
        userinfo: new URL("/api/episerver/connect/userinfo", options.cmsBaseUrl).href,
        accessTokenUrl: new URL("/api/episerver/connect/token", options.cmsBaseUrl).href,
        authorization: {  params: { scope: scopes.join(' ') } },
        profileUrl: new URL("/api/episerver/connect/userinfo", options.cmsBaseUrl).href,
        idToken: true,
        checks: [ 'pkce', 'state' ],
        client: {
            token_endpoint_auth_method: options.clientSecret ? 'client_secret_basic' : 'none',
            introspection_endpoint_auth_method: options.clientSecret ? 'client_secret_basic' : 'none',
            revocation_endpoint_auth_method: options.clientSecret ? 'client_secret_basic' : 'none',
        },
        httpOptions: {
            //@ts-expect-error
            cache: "no-store",
            next: {
                revalidate: 0
            },
            revalidate: 0
        },
        async profile(profile, tokens) : Promise<User>
        {
            const auth_header = `${ tokens.token_type } ${ tokens.access_token }`
            const response = await fetch(new URL("/api/episerver/connect/userinfo", options.cmsBaseUrl), { headers: { Authorization: auth_header }})
            if (!response.ok)
                return { id: profile.sub, roles: defaultRoles }
            const userinfo = await response.json() as OptimizelyUserInfo
            const u : User = {
                id: profile.sub,
                email: userinfo.email,
                name: userinfo.name,
                roles: userinfo.role ? userinfo.role.join(' ') : defaultRoles
            }
            return u
        }
    }
    return finalConfig
}

/**
 * Generate the JWT callback handler to ensure sessions - with JWT storage - are properly prolonged based on the
 * refresh token.
 * 
 * @param       options     The configuration of the connection with Optimizely CMS
 * @returns     The callback handler
 */
export function OptimizelyCmsRefreshJwtCallbackHandler(options: OptimizelyCmsOIDCProviderOptions) {
    const providerId = options.id ?? defaultProviderId

    const OptimizelyCmsRefreshJwtCallback : Required<Required<AuthOptions>['callbacks']>['jwt'] = async ({ account, token, user }) => {
        if (account) // This is the first login
        {
            if (account.provider != providerId)
                return token
            return {
                sub: account.providerAccountId,
                provider: account.provider,
                access_token: account.access_token,
                expires_at: account.expires_at,
                refresh_token: account.refresh_token,
                name: user?.name,
                email: user?.email,
                roles: user?.roles
            }
        }
        
        if (token.provider != providerId) {
            return token
        }

        if (Date.now() < (token.expires_at ?? 0) * 1000) {
            return {
                ...token,
                error: null
            }
        }

        if (token.refresh_token) {
            const requestBody : { [key: string]: string } = {
                client_id: options.clientId,
                grant_type: "refresh_token",
                refresh_token: token.refresh_token
            }
            if (options.clientSecret)
                requestBody.client_secret = options.clientSecret

            const response = await fetch(new URL("/api/episerver/connect/token", options.cmsBaseUrl), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams(requestBody),
                method: 'POST',
                cache: 'no-cache'
            })
            const tokens : TokenSet = await response.json()

            if (!response.ok)
                throw tokens

            const newToken : DefaultJWT = {
                ...token,
                access_token: tokens.access_token,
                expires_at: tokens.expires_at,
                refresh_token: tokens.id_token
            }
            if (newToken.error)
                delete newToken.error

            return newToken
        }

        return {
            ...token,
            error: "tokenExpiredError"
        }
    }
    return OptimizelyCmsRefreshJwtCallback
}

/**
 * Generate the Session callback handler to ensure sessions - with JWT storage - contain the needed information to inform users
 * about errors with the login status.
 * 
 * @param       options     The configuration of the connection with Optimizely CMS
 * @returns     The callback handler
 */
export const OptimizelyCmsRefreshSessionCallbackHander = (options: OptimizelyCmsOIDCProviderOptions) => {
    const providerId = options.id ?? defaultProviderId

    const OptimizelyCmsRefreshSessionCallback : Required<Required<AuthOptions>['callbacks']>['session'] = async ({ session, token, user }) : Promise<Session> => 
    {
        const newSession = { ...session }
        if (token?.provider == providerId) {
            newSession.user = {
                email: token.email,
                name: token.name,
                roles: token.roles
            }
            if (token.error) {
                newSession.error = token.error
            } else if (newSession.error) {
                delete newSession.error
            }
        }

        if (user)
            newSession.user = user

        return newSession
    }
    return OptimizelyCmsRefreshSessionCallback
}

declare module "next-auth/core/types" {
    interface Session {
        error?: string,
        user?: Omit<User, 'id'>
    }

    interface User {
        roles?: string
    }
}

declare module "next-auth/jwt/types" {
    interface DefaultJWT {
        roles?: string
        access_token?: string
        provider?: string
        expires_at?: number,
        refresh_token?: string,
        error?: "tokenRefreshError" | "unknownError" | "tokenExpiredError" | null
    }
}