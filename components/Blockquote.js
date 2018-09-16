import React, { Fragment } from 'react'
import Paragraph from './Paragraph'

const Blockquote = ({ children }) => (
  <Fragment>
    <blockquote>
      <Paragraph>{children}</Paragraph>
    </blockquote>
    <style jsx>{`
      blockquote {
        border-left: 5px solid #efefef;
        font-style: italic;
        margin-left: 0;
        padding-left: 20px;
        color: #888;
      }
    `}</style>
  </Fragment>
)

export default Blockquote
