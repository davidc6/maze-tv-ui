import React from 'react'
import { useParams } from 'react-router-dom'
import useEpisode from '../../../hooks/useEpisode'
import { stripTags } from '../../../utils/stripTags'
import Heading from '../../heading'
import Loader from '../../loader'
import Metadata from '../../metadata'
import Base from '../base'

const Episode = () => {
  const { id } = useParams()
  const { data, isLoading } = useEpisode(id)
  
  const render = () => {
    const { name, summary, season, number } = data

    return (
      <Base>
        <div className="wrap">
          <Heading level={3} text={`Episode: ${name}`} />
          <Metadata
            summary={summary ? `Summary: ${stripTags(summary)}` : null}
            season={season ? `Season: ${season}` : null}
            number={number ? `Episode: ${number}` : null}
          />
        </div>
      </Base>
    )
  }

  return (
    <div>
      {
        isLoading
        ? <Loader />
        : render()
      }
    </div>
  )
}

export default Episode
