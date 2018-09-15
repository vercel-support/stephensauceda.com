import React, { Fragment } from 'react'
export default ({ children }) => (
    <code>
      {children}
      <style jsx>{`
      code {
        background-color: black;
        color: red;
        padding: .5em;
        display: block;
        width: 100%;
      }
    `}</style>
    </code>
)
