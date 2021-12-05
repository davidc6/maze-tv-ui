import React from 'react'
import { Link } from "react-router-dom"
import Metadata from '../metadata'

import './styles.css'

export type Episode = {
  id: number
  number: number
  name: string
  summary: string
  season: number | string
}

const ListEpisodes = ({ episodes }: { episodes: Episode[] }) => {  
  return (
    <ul className="grid-thirds">
      {episodes.map((episode: any) => {
        const { id, number, name, summary } = episode

        return <li key={id} className="col">
          <Link to={`/episodes/${id}`} className="c-link">
            <Metadata number={number} name={name} summary={summary} />
          </Link>
        </li>
      })}
    </ul>
  )
}

export default ListEpisodes
