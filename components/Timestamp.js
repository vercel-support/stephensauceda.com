import React from 'react'
import format from 'date-fns/format'

const Timestamp = ({ children, formatString }) => format(children, formatString)

Timestamp.defaultProps = {
  formatString: 'MMM DD, YYYY'
}

export default Timestamp