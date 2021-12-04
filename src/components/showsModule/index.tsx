import React from 'react'
import Heading from "../heading"
import ListShows from '../listShows'

export type Show = {
  id: number
  name: string
}

const ShowsModule = ({ name, shows }: { name: string, shows: Show[] }) => {
  return (
    <div style={{ marginBottom: "10px" }} className="wrap">
      <Heading level={3} text={`${name}`} />
      <ListShows shows={shows} />
    </div>
  )
}

export default ShowsModule
