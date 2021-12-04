const BASE_URL = 'https://api.tvmaze.com'
const SEARCH_URL = `${BASE_URL}/search/shows?q={searchQuery}`
const SHOW_URL = `${BASE_URL}/shows/{showId}?embed=episodes`
const EPISODE_URL = `${BASE_URL}/episodes/{episodeId}`

const client = () => {
  return {
    search: (keyword: string) => {
      return fetch(SEARCH_URL.replace('{searchQuery}', keyword))
    },
    show: (id: string) => {
      return fetch(SHOW_URL.replace('{showId}', id))
    },
    episode: (id: string) => {
      return fetch(EPISODE_URL.replace('{episodeId}', id))
    }
  }
}

export default client()
