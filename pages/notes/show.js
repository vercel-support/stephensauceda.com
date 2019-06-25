import React, { Fragment } from 'react'
import Head from 'next/head'
import css from 'styled-jsx/css'
import { RichText } from 'prismic-reactjs'
import title from 'title'
import { getByUID } from '../../lib/api'
import Heading from '../../components/Heading'
import RelativeDate from '../../components/RelativeDate'
import PageFooter from '../../components/PageFooter'
import renderSlices from '../../lib/renderSlices'

const ShowNotes = ({ doc }) => {
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
        <RelativeDate
          date={doc.data.publish_date}
          timeProps={{ dateTime: doc.data.publish_date, className: 'dt-published' }}
        />
        <div className="e-content">{renderSlices(doc.data.body)}</div>
      </article>
      <div className="footerWrap">
        <PageFooter />
      </div>
      <style jsx>{styles}</style>
    </Fragment>
  )
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

export default ShowNotes
