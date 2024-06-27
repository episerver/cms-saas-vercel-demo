
import { OpenGraphType } from "next/dist/lib/metadata/types/opengraph-types"

const OpenGraphTypes : Array<OpenGraphType> = [ 'article', 'book', 'music.album', 'music.playlist', 'music.radio_station', 'music.song', 'profile', 'video.episode', 'video.movie', 'video.other', 'video.tv_show', 'website']

export const toValidOpenGraphType = (unValidated: string | null | undefined, defaultValue?: OpenGraphType) : OpenGraphType | undefined =>
{
    if (!unValidated || unValidated == '-')
        return defaultValue
    if (OpenGraphTypes.includes(unValidated as OpenGraphType))
        return unValidated as OpenGraphType
    return defaultValue
}