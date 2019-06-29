import React, { Fragment } from 'react'
import Head from 'next/head'
import Error from 'next/error'
import css from 'styled-jsx/css'
import { RichText } from 'prismic-reactjs'
import title from 'title'
import isFuture from 'date-fns/is_future'
import parse from 'date-fns/parse'
import clsx from 'clsx'
import { getByUID } from '../../lib/api'
import Heading from '../../components/Heading'
import RelativeDate from '../../components/RelativeDate'
import PageFooter from '../../components/PageFooter'
import renderSlices from '../../lib/renderSlices'
import Paragraph from '../../components/Paragraph'
import HyperLink from '../../components/HyperLink'
import Author from '../../components/Author'
import linkResolver from '../../lib/linkResolver'

function isFuturePost(dateString) {
  return isFuture(parse(dateString))
}

const ShowNotes = ({ doc }) => {
  if (doc) {
    const postTitle = title(RichText.asText(doc.data.title))
    return (
      <Fragment>
        <Head>
          <title>{postTitle} | Stephen Sauceda</title>
        </Head>
        <article className="Note h-entry">
          <Heading level="h1" className="p-name">
            {postTitle}
          </Heading>
          <Paragraph>
            <small>
              <HyperLink className={clsx('grey', 'u-url')} href={linkResolver(doc)}>
                <RelativeDate
                  date={doc.first_publication_date}
                  timeProps={{
                    dateTime: doc.first_publication_date,
                    className: 'dt-published'
                  }}
                />
              </HyperLink>
            </small>
          </Paragraph>
          <div className="e-content">{renderSlices(doc.data.body)}</div>
          <footer>
            <Author />
          </footer>
        </article>
        <div className="footerWrap">
          <PageFooter />
        </div>
        <style global>{globalStyles}</style>
        <style jsx>{styles}</style>
      </Fragment>
    )
  }

  return <Error statusCode={404} />
}

ShowNotes.getInitialProps = async ({ req, query }) => {
  const doc = await getByUID(req, query.n)
  return { doc }
}

const styles = css`
  .Note,
  .footerWrap {
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
  }

  .Note {
    padding-top: 5em;
    padding-bottom: 5em;
  }
`

const globalStyles = css.global`
  img {
    width: 100%;
  }
`

export default ShowNotes
