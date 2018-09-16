import React, {Fragment} from 'react'
import getYear from 'date-fns/get_year'

const PageFooter = () => (
  <Fragment>
    <footer>
      <small>&copy; Stephen Sauceda {`${getYear(Date.now())}`}</small>
    </footer>
    <style jsx>{`
      footer { padding: 1em 0; font-family: Menlo, monospace; }
    `}</style>
  </Fragment>
)

export default PageFooter
