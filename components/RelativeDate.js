import React from 'react'
import parse from 'date-fns/parse'
import distanceInWords from 'date-fns/distance_in_words'
import css from 'styled-jsx/css'

import { FONT_FAMILY, COLORS } from '../lib/constants'

const RelativeDate = ({ date, timeProps = {} }) => (
  <p>
    <small>
      <time {...timeProps}>
        {distanceInWords(new Date(), parse(date), { addSuffix: true })}
      </time>
    </small>
    <style jsx>{styles}</style>
  </p>
)

const styles = css`
  p {
    font-family: ${FONT_FAMILY};
    color: ${COLORS.secondary};
  }
`

export default RelativeDate