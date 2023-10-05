import type { User, Session } from "next-auth";
import type { OAuthConfig } from "next-auth/providers";
export type OptimizelyCmsOIDCProviderOptions = {
    id?: string;
    clientId: string;
    clientSecret?: string;
    cmsBaseUrl: string | URL;
    name: string;
    scopes?: string[];
};
type OptimizelyProfile = {
    sub: string;
    oi_au_id: string;
    azp: string;
    at_hash: string;
    oi_tkn_id: string;
    aud: string;
    exp: number;
    iss: string;
    iat: number;
};
export declare function OptimizelyCmsOIDCProvider(options: OptimizelyCmsOIDCProviderOptions): OAuthConfig<OptimizelyProfile>;
/**
 * Generate the JWT callback handler to ensure sessions - with JWT storage - are properly prolonged based on the
 * refresh token.
 *
 * @param       options     The configuration of the connection with Optimizely CMS
 * @returns     The callback handler
 */
export declare function OptimizelyCmsRefreshJwtCallbackHandler(options: OptimizelyCmsOIDCProviderOptions): (params: {
    token: import("next-auth/jwt").JWT;
    user: User | import("next-auth/adapters").AdapterUser;
    account: import("next-auth").Account | null;
    profile?: import("next-auth").Profile | undefined;
    trigger?: "signIn" | "signUp" | "update" | undefined;
    isNewUser?: boolean | undefined;
    session?: any;
}) => import("next-auth").Awaitable<import("next-auth/jwt").JWT>;
/**
 * Generate the Session callback handler to ensure sessions - with JWT storage - contain the needed information to inform users
 * about errors with the login status.
 *
 * @param       options     The configuration of the connection with Optimizely CMS
 * @returns     The callback handler
 */
export declare const OptimizelyCmsRefreshSessionCallbackHander: (options: OptimizelyCmsOIDCProviderOptions) => (params: {
    session: Session;
    token: import("next-auth/jwt").JWT;
    user: import("next-auth/adapters").AdapterUser;
} & {
    newSession: any;
    trigger: "update";
}) => import("next-auth").Awaitable<Session | import("next-auth").DefaultSession>;
declare module "next-auth/core/types" {
    interface Session {
        error?: string;
        user?: Omit<User, 'id'>;
    }
    interface User {
        roles?: string;
    }
}
declare module "next-auth/jwt/types" {
    interface DefaultJWT {
        roles?: string;
        access_token?: string;
        provider?: string;
        expires_at?: number;
        refresh_token?: string;
        error?: "tokenRefreshError" | "unknownError" | "tokenExpiredError" | null;
    }
}
export {};
