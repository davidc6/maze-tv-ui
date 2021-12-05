import React from 'react'
import { episode } from "../../utils/format"

type Metadata = {
  season?: number | string
  summary?: string
  number?: number | string
  name?: string
}

const Metadata = ({ season, summary, number, name }: Metadata) => {
  return (
    <div>
      {number && name ? <p className="c-p--bold">{episode(number, name)}</p> : <p>{number}</p>}
      {season ? <p>{season}</p> : null}
      {summary ? <p>{summary}</p> : null}
    </div>
  )
}

export default Metadata
