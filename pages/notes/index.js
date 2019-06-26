import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import { RichText } from 'prismic-reactjs'
import parse from 'date-fns/parse'
import format from 'date-fns/format'
import { getAllOfType } from '../../lib/api'
import Footer from '../../components/PageFooter'
import Heading from '../../components/Heading'
import HyperLink from '../../components/HyperLink'
import linkResolver from '../../lib/linkResolver'

const Notes = ({ notes }) => (
  <Fragment>
    <div className="pageWrapper">
      <div className="cardWrapper">
        {notes.map(n => (
          <Heading level="h2">
            <span>{format(parse(n.data.publish_date), 'MM.DD.YY')}</span>
            <HyperLink className="black" href={linkResolver(n)}>
              {RichText.asText(n.data.title)}
            </HyperLink>
          </Heading>
        ))}
      </div>
    </div>
    <div className="footerWrapper">
      <Footer />
    </div>
    <style jsx>{styles}</style>
  </Fragment>
)

Notes.getInitialProps = async ({ req }) => {
  const notes = await getAllOfType(req, 'post', {
    orderings: '[my.post.publish_date desc]',
    fetch: ['post.title', 'post.publish_date'],
    pageSize: 10
  })
  return { notes }
}

const styles = css`
  .pageWrapper {
    min-height: calc(100vh - 10em);
    padding-top: 5em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .cardWrapper,
  .footerWrapper {
    max-width: 500px;
    width: 90%;
    padding: 1em;
    margin: 0 auto;
  }
  span {
    margin-right: 0.5em;
  }
`

export default Notes
