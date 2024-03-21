import { gql } from 'graphql-request'

export const getAll = gql`query GetAllChannels {
    GetAllChannels:SiteDefinition {
        channels: items {
            id: Id
            name: Name,
            domains: Hosts {
                name: Name
                type: Type
                forLocale: Language {
                    code: Name
                }
            }
            locales:Languages {
                code:Name
                slug:UrlSegment
                isDefault:IsMasterLanguage
            }
            content: ContentRoots {
                startPage: StartPage {
                    id:Id,
                    guidValue:GuidValue
                }
            }
        }
    }
}`
export const getById = gql`query GetChannelById($id: String!) {
    GetChannelById:SiteDefinition (
        where: {
            Id: { eq: $id }
        }
        limit: 1
    ) {
        channels: items {
            id: Id
            name: Name,
            domains: Hosts {
                name: Name
                type: Type
                forLocale: Language {
                    code: Name
                }
            }
            locales:Languages {
                code:Name
                slug:UrlSegment
                isDefault:IsMasterLanguage
            }
            content: ContentRoots {
                startPage: StartPage {
                    id:Id,
                    guidValue:GuidValue
                }
            }
        }
    }
}`
export const getByDomain = gql`query GetChannelByDomain($domain: String!, $fallback: String! = "___") {
    GetChannelByDomain:SiteDefinition (
        where: {
            _or: [
                {Hosts: { Name: { eq: $domain }}},
                {Hosts: { Name: { eq: $fallback }}}
            ]  
        }
        limit: 1
    ) {
        channels: items {
            id: Id
            name: Name,
            domains: Hosts {
                name: Name
                type: Type
                forLocale: Language {
                    code: Name
                }
            }
            locales:Languages {
                code:Name
                slug:UrlSegment
                isDefault:IsMasterLanguage
            }
            content: ContentRoots {
                startPage: StartPage {
                    id:Id,
                    guidValue:GuidValue
                }
            }
        }
    }
}`