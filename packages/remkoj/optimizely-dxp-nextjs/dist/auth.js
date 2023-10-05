const defaultScopes = ['openid', 'offline_access', 'profile', 'email'];
const defaultRoles = "Everyone Authenticated";
const defaultProviderId = "optimizely_cms";
export function OptimizelyCmsOIDCProvider(options) {
    // Merge default scopes & requested scopes
    const scopes = [...defaultScopes];
    options.scopes?.forEach(scope => {
        if (!scopes.includes(scope))
            scopes.push(scope);
    });
    const finalConfig = {
        type: "oauth",
        id: options.id ?? defaultProviderId,
        name: options.name,
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        wellKnown: new URL("/.well-known/openid-configuration", options.cmsBaseUrl).href,
        userinfo: new URL("/api/episerver/connect/userinfo", options.cmsBaseUrl).href,
        accessTokenUrl: new URL("/api/episerver/connect/token", options.cmsBaseUrl).href,
        authorization: { params: { scope: scopes.join(' ') } },
        profileUrl: new URL("/api/episerver/connect/userinfo", options.cmsBaseUrl).href,
        idToken: true,
        checks: ['pkce', 'state'],
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
        async profile(profile, tokens) {
            const auth_header = `${tokens.token_type} ${tokens.access_token}`;
            const response = await fetch(new URL("/api/episerver/connect/userinfo", options.cmsBaseUrl), { headers: { Authorization: auth_header } });
            if (!response.ok)
                return { id: profile.sub, roles: defaultRoles };
            const userinfo = await response.json();
            const u = {
                id: profile.sub,
                email: userinfo.email,
                name: userinfo.name,
                roles: userinfo.role ? userinfo.role.join(' ') : defaultRoles
            };
            return u;
        }
    };
    return finalConfig;
}
/**
 * Generate the JWT callback handler to ensure sessions - with JWT storage - are properly prolonged based on the
 * refresh token.
 *
 * @param       options     The configuration of the connection with Optimizely CMS
 * @returns     The callback handler
 */
export function OptimizelyCmsRefreshJwtCallbackHandler(options) {
    const providerId = options.id ?? defaultProviderId;
    const OptimizelyCmsRefreshJwtCallback = async ({ account, token, user }) => {
        if (account) // This is the first login
         {
            if (account.provider != providerId)
                return token;
            return {
                sub: account.providerAccountId,
                provider: account.provider,
                access_token: account.access_token,
                expires_at: account.expires_at,
                refresh_token: account.refresh_token,
                name: user?.name,
                email: user?.email,
                roles: user?.roles
            };
        }
        if (token.provider != providerId) {
            return token;
        }
        if (Date.now() < (token.expires_at ?? 0) * 1000) {
            return {
                ...token,
                error: null
            };
        }
        if (token.refresh_token) {
            const requestBody = {
                client_id: options.clientId,
                grant_type: "refresh_token",
                refresh_token: token.refresh_token
            };
            if (options.clientSecret)
                requestBody.client_secret = options.clientSecret;
            const response = await fetch(new URL("/api/episerver/connect/token", options.cmsBaseUrl), {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams(requestBody),
                method: 'POST',
                cache: 'no-cache'
            });
            const tokens = await response.json();
            if (!response.ok)
                throw tokens;
            const newToken = {
                ...token,
                access_token: tokens.access_token,
                expires_at: tokens.expires_at,
                refresh_token: tokens.id_token
            };
            if (newToken.error)
                delete newToken.error;
            return newToken;
        }
        return {
            ...token,
            error: "tokenExpiredError"
        };
    };
    return OptimizelyCmsRefreshJwtCallback;
}
/**
 * Generate the Session callback handler to ensure sessions - with JWT storage - contain the needed information to inform users
 * about errors with the login status.
 *
 * @param       options     The configuration of the connection with Optimizely CMS
 * @returns     The callback handler
 */
export const OptimizelyCmsRefreshSessionCallbackHander = (options) => {
    const providerId = options.id ?? defaultProviderId;
    const OptimizelyCmsRefreshSessionCallback = async ({ session, token, user }) => {
        const newSession = { ...session };
        if (token?.provider == providerId) {
            newSession.user = {
                email: token.email,
                name: token.name,
                roles: token.roles
            };
            if (token.error) {
                newSession.error = token.error;
            }
            else if (newSession.error) {
                delete newSession.error;
            }
        }
        if (user)
            newSession.user = user;
        return newSession;
    };
    return OptimizelyCmsRefreshSessionCallback;
};
