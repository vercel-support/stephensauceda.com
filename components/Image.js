import React, { Fragment } from 'react'

const Image = ({ src, alt }) => (
  <Fragment>
    <img src={src} alt={alt} title={alt} />
    <style jsx>{`
      img {
        width: 100%;
        max-width: 100%;
      }
    `}</style>
  </Fragment>
)

export default Image