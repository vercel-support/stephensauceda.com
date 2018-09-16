import React, { Fragment } from 'react'

const Link = ({ href, children, color, hoverColor, ...rest }) => (
  <Fragment>
    <a href={href} {...rest}>
      {children}
    </a>
    <style jsx>{`
      a {
        color: ${color};
      }

      a:visited,
      a:hover {
        color: ${hoverColor};
      }
    `}</style>
  </Fragment>
)

Link.defaultProps = {
  color: '#e67e22',
  hoverColor: '#d35400'
}

export default Link
