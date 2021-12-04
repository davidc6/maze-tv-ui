import React from 'react'
import Heading from "../../heading"

const Base = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Heading text="Maze TV" level={1} />
      {children}
    </>
  )
}

export default Base
