import React, { Fragment } from 'react'

const InlineCode = ({ children }) => {
  return (
    <Fragment>
      <code>{children}</code>
      <style jsx>{`
         code { padding: .25em; background-color: #efefef; }
      `}</style>
    </Fragment>
  )
}

export default InlineCode
