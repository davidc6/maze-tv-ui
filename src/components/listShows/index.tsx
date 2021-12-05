import React from 'react'
import { Link } from "react-router-dom"
import { Show } from '../showsModule'

const ListShows = ({ shows }: { shows: Show[] }) => {  
  return (
    <ul>
      {shows.map((show: Show) => {
        const { id, name } = show

        return <li key={id}>
          <Link to={`/${id}`} className="c-link">
            <p>{name}</p>
          </Link>
        </li>
      })}
    </ul>
  )
}

export default ListShows
