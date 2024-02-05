export type MeResponse = {
    ids: {
        frontend: string
        dataPlatform: string
        contentIntelligence: string
        webExperimentation: string
    },
    contentTopics: string[]
    audiences: { id: string, name: string }[]
}