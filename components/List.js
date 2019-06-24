import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import { FONT_FAMILY } from '../lib/constants'

const List = props => (
  <Fragment>
    <props.listType {...props}>{props.children}</props.listType>
    <style jsx global>{styles}</style>
  </Fragment>
)

const styles = css.global`
  ul, ol {
    font-family: ${FONT_FAMILY};
  }
`

export default List