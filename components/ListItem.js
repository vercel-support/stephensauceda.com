import React, { Fragment } from 'react'

const ListItem = props => (
  <Fragment>
    <li>{props.children}</li>
    <style jsx>{`
      li {
        font-family: Menlo, monospace;
        margin-bottom: .5em;
        font-size: 15px;
      }
    `}</style>
  </Fragment>
)

export default ListItem