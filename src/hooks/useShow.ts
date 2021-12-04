import { useQuery } from "react-query"
import tvmazeClient from "../clients/tvmaze"
import { Episode } from "../components/listEpisodes"
import { stripTags } from "../utils/stripTags"

type Show = {
  id: number
  season: number
  name: string
  summary: string
  number: string
}

type Seasons = {
  [key: number]: Episode[]
}

type ResponseType = Show & { _embedded: { episodes: Episode[] } }

const mapEpisodesToSeason = (episodes: Episode[]) => {
  if (!episodes || !episodes.length) return {}

  return episodes.reduce((acc: Seasons, episode: Episode) => {    
    const safeEpisode = {
      ...episode,
      summary: stripTags(episode.summary)
    }

    const { season } = safeEpisode

    if (acc[season]) {
      return { ...acc, [season]: [ ...acc[season], safeEpisode ] }
    }

    return { ...acc, [season]: [safeEpisode] }
  }, {})
}

const useShow = (showId: string) => {
  const queryFn = async () => {
    try {
      const response = await tvmazeClient.show(showId)
      const data: ResponseType = await response.json()

      const { id, name, summary, _embedded } = data

      return {
        id,
        name,
        summary,
        episodes: mapEpisodesToSeason(_embedded?.episodes)
      }
    } catch (e) {
      console.error(e)
    }
  }

  return useQuery(['shows', showId], queryFn)
}

export default useShow
