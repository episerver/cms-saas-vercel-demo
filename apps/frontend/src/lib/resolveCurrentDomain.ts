export function resolveCurrentDomain() {
    try {
        // Read the URLs from the environment
        const netlifyUrl = process.env.URL;
        const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined;
        const customUrl = process.env.SITE_DOMAIN ? (process.env.SITE_DOMAIN.startsWith('http') ? process.env.SITE_DOMAIN : `https://${process.env.SITE_DOMAIN}`) : undefined;

        // Determine the ChannelURL
        const channelId = customUrl || vercelUrl || netlifyUrl || "http://localhost:3000";
        return new URL(channelId)
    } catch {
        return new URL("http://localhost:3000")
    }
}

export default resolveCurrentDomain