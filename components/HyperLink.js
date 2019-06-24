import React, { Fragment } from 'react';
import css from 'styled-jsx/css'

import { COLORS } from '../lib/constants'

const HyperLink = props => (
  <Fragment>
    <a {...props} />
    <style jsx>{styles}</style>
  </Fragment>
)

const styles = css`
  a {
    color: ${COLORS.primary};
  }
`

export default HyperLink