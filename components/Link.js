import React, { Fragment } from 'react'

const Link = ({ href, children, ...rest }) => (
  <Fragment>
    <a href={href} {...rest}>
      {children}
    </a>
    <style jsx>{`
      a {
        color: #e67e22;
      }

      a:visited,
      a:hover {
        color: #d35400;
      }
    `}</style>
  </Fragment>
)

export default Link
