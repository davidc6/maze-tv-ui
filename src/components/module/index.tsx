import React from 'react'
import Heading from "../heading"
import ListEpisodes from '../listEpisodes'

import './styles.css'

const Module = ({ id, episodes }: { id: string, episodes: any[] }) => {
  return (
    <div key={id} className="c-list-episodes-modul">
      <Heading level={3} text={`Season ${id}`} />
      <ListEpisodes episodes={episodes} />
    </div>
  )
}

export default Module
