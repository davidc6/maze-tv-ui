import { useQuery } from 'react-query'
import tvmazeClient from "../clients/tvmaze"

type SearchResult = {
  show: { id: number, name: string }
}

const useSearch = (searchStr: string) => {
  const queryFn = async () => {
    try {
      const response = await tvmazeClient.search(searchStr)
      const data = await response.json()

      return data.map((item: SearchResult) => {
        const { show: { id, name } } = item
        return { id, name }
      })
    } catch (e) {
      console.error(e)
    }
  }

  return useQuery(searchStr, queryFn)
}

export default useSearch
