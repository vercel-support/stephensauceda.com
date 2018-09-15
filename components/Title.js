import React, { Fragment } from 'react'
import title from 'title'

const Title = ({ children }) => (
  <Fragment>
    <h1>{title(children)}</h1>
    <style jsx>{`
      h1 {
        font-family: Menlo, monospace;
      }
    `}</style>
  </Fragment>
)

export default Title
