import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useShow, { Seasons } from '../../../hooks/useShow'
import Heading from '../../heading'
import Loader from '../../loader'
import Module from '../../module'
import Base from '../base'
import Error from '../error'

import './styles.css'

const Show = () => {
  const { id } = useParams()
  const { isLoading, isError, data } = useShow(id)
  const [ seasons, setSeasons ] = useState<any>(null)
  
  if (isError) {
    return <Error />
  }

  const createModule = (episodes: any) => {
    const arr = []

    for (const seasonId of Object.keys(episodes)) {
      arr.push(<Module key={seasonId} id={seasonId} episodes={episodes[seasonId]} />)
    }

    return arr
  }
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value
    const seasonEpisodes: Seasons = {}

    if (keyword.length < 2) {
      return setSeasons(null)
    }
    
    const { episodes } = data
    const seasonIds = Object.keys(episodes)

    for (const seasonId of seasonIds) {
      for (const episode of episodes[seasonId]) {
        const summary = episode?.summary ? episode.summary.toLowerCase() : null

        if (summary && summary.includes(keyword.toLowerCase())) {    
          const season = seasonEpisodes[seasonId]

          if (season) {
            season.push(episode)
            continue
          }

          seasonEpisodes[seasonId] = [episode]
        }
      }
    }

    setSeasons(seasonEpisodes)
  }
  
  const render = () => {
    return (
      <Base>
        <div className="wrap">
          <Heading level={3} text={`Show: ${data.name}`} />
          <div className="c-search">
            <input
              aria-label="search-input"
              className="c-search__input"
              placeholder="Search for episode(s)"
              type="search"
              name="search"
              onChange={handleSearch}
            />
          </div>
          <div>
            {createModule(seasons || data.episodes)}
          </div>
        </div>
      </Base>
    )
  }

  return (
    <div >
      {
        isLoading
        ? <Loader />
        : render()
      }
    </div>
  )
}

export default Show
