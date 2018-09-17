import React, { Fragment } from 'react'

const getTag = tag => tag

const List = ({ tag, children }) => {
  const Component = getTag(tag)
  return (
    <Fragment>
      <Component>{children}</Component>
      <style jsx>{`
        font-family: Menlo, monospace;
      `}</style>
    </Fragment>
  )
}

export default List