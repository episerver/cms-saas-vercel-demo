export type ChannelDomain = {
    name: string
    isPrimary: boolean
    isEdit: boolean
    forLocale?: string
}
export type ChannelLocale = {
    code: string
    slug: string
    graphLocale: string
    isDefault: boolean
}
export type ChannelContentId = {
    id: number
    guidValue: string
}
export type ChannelContent = {
    startPage: ChannelContentId
}
export type ChannelDefinitionData = {
    id: string
    name: string
    domains: ChannelDomain[]
    locales: ChannelLocale[]
    content: ChannelContent
}