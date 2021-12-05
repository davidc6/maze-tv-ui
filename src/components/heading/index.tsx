import React from 'react'
import { Link } from "react-router-dom"

import './styles.css'

type Props = {
  level: number
  text: string
  link?: string
}

const Heading = ({ level = 1, text = "" }: Props) => {
  const renderLink = () => {
      return <Link style={{ textDecoration: "none", color: "#ffffff" }} to="/">{text}</Link>
  }

  const defaultHeading = <div className="c-heading-wrap">
      <h1 className={"wrap c-heading-wrap__one"}>
        {renderLink()}
      </h1>
    </div>

  switch (level) {
    case 1:
      return defaultHeading         
    case 2:
      return <h2>{text}</h2>
    case 3:
        return <h3 className="c-heading-wrap__three">
          <span style={{ fontWeight: "bold" }}>{text}</span>
        </h3>
  }

  return defaultHeading
}

export default Heading
