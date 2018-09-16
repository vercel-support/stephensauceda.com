import React, { Fragment } from 'react'

const Paragraph = ({ children, ...rest }) => (
  <Fragment>
    <p {...rest}>{children}</p>
    <style jsx>{`
      p {
        font-size: 15px;
        line-height: 1.6;
        font-family: Menlo, monospace;
      }
    `}</style>
  </Fragment>
)

export default Paragraph
