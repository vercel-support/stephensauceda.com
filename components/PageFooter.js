import React, {Fragment} from 'react'
import getYear from 'date-fns/get_year'
import { FONT_FAMILY } from '../lib/constants'

const PageFooter = () => (
  <Fragment>
    <footer>
      <small>Copyright &copy; {`${getYear(Date.now())}`} Stephen Sauceda</small>
    </footer>
    <style jsx>{`
      footer { padding: 1em 0; font-family: ${FONT_FAMILY}; }
    `}</style>
  </Fragment>
)

export default PageFooter
