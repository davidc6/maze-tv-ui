import React from 'react'
import useSearch from '../../hooks/useSearch'
import Heading from "../heading"
import ListShows from '../listShows'
import Loader from '../loader'
import Error from '../pages/error'

export type Show = {
  id: number
  name: string
}

const ShowsModule = ({ keyword }: { keyword: string }) => {
  const { isLoading, isError, data } = useSearch(keyword)
  
  if (isError) {
    return <Error />
  }
  
  const render = () => {
    if (!keyword) {
      return
    }

    return (
      <div style={{ marginBottom: "10px" }} className="wrap">
        <Heading level={3} text={`Search results for: ${keyword}`} />
        <ListShows shows={data} />
      </div>
    )
  }
  
  return (
    <div>
      {
        isLoading
        ? <p>Loading...</p>
        : render()
      }
    </div>
  )
}

export default ShowsModule
