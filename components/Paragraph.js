import React, { Fragment } from 'react'

const Paragraph = ({ children, ...rest }) => (
  <Fragment>
    <p {...rest}>{children}</p>
    <style jsx>{`
      p {
        line-height: 1.5;
        font-family: Menlo, monospace;
      }
    `}</style>
  </Fragment>
)

export default Paragraph
