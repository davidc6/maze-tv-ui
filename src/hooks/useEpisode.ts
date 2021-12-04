import { useQuery } from 'react-query'
import tvmazeClient from "../clients/tvmaze"

const useEpisode = (id: string) => {
  const queryFn = async () => {
    try {
      const response = await tvmazeClient.episode(id)
      return await response.json()
    } catch (e) {
      console.error(e)
    }
  }

  return useQuery(['episodes', id], queryFn)
}

export default useEpisode
