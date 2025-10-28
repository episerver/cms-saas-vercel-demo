import { ChannelRepository } from '@remkoj/optimizely-graph-client/channels'
import resolveCurrentDomain from '@/lib/resolveCurrentDomain';

const channelId = resolveCurrentDomain();

// Create the channel
export const channel = ChannelRepository.createDefinition("An Optimizely Portal Demo", channelId, [{
    code: "en",
    graphLocale: "en",
    isDefault: true,
    slug: ""
},{
    code: "es",
    graphLocale: "es",
    isDefault: false,
    slug: "es"
}])

export const applicationId = channel.getPrimaryDomain().protocol + "//" + channel.getPrimaryDomain().host

export default channel