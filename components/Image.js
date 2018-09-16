import React, { Fragment } from 'react'

const Image = ({ src, alt, caption }) => (
  <Fragment>
    <figure>
      <img src={src} alt={alt} title={caption || alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
    <style jsx>{`
      figure {
        margin: 0;
      }
      img {
        width: 100%;
        max-width: 100%;
      }
      figcaption {
        color: #888;
        font-style: italic;
        padding: .5em 0;
        font-family: Menlo, monospace;
        font-size: 13px;
        text-align: center;
      }
    `}</style>
  </Fragment>
)

export default Image