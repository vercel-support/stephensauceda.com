import React, { Fragment } from 'react'
import title from 'title'

const getTag = tag => {
  return tag
}

const Title = ({ children, tag, ...rest }) => {
  const Component = getTag(tag)
  return (
    <Fragment>
      <Component style={{ fontFamily: 'Menlo, monospace' }} {...rest}>
        {title(children)}
      </Component>
    </Fragment>
  )
}

Title.defaultProps = {
  tag: 'h1'
}

export default Title
