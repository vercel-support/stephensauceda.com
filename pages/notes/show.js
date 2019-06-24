import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import { RichText } from 'prismic-reactjs'
import title from 'title'
import { getByUID } from '../../lib/api'
import Heading from '../../components/Heading'
import RelativeDate from '../../components/RelativeDate'
import PageFooter from '../../components/PageFooter'
import htmlSerializer from '../../lib/htmlSerializer'

function renderSlices(slices) {
  return slices.map((slice, i) => {
    switch (slice.slice_type) {
      case 'text':
        return (
          <RichText render={slice.primary.text} key={i} htmlSerializer={htmlSerializer} />
        )
      case 'quote':
        return (
          <blockquote key={i}>
            <RichText render={slice.primary.quote} htmlSerializer={htmlSerializer} />
            {slice.primary.source_quote && (
              <footer>
                <cite>
                  <RichText
                    render={slice.primary.source_quote}
                    htmlSerializer={htmlSerializer}
                  />
                </cite>
              </footer>
            )}
            <style jsx>{`
              blockquote {
                margin: 0;
                padding-left: 1em;
                border-left: 4px solid #666;
                color: #666;
                font-style: italic;
              }
            `}</style>
          </blockquote>
        )
      case 'gist':
        return (
          <div key={i} dangerouslySetInnerHTML={{ __html: slice.primary.gist[0].text }} />
        )
      default:
        return null
    }
  })
}

const ShowNotes = ({ doc }) => (
  <Fragment>
    <article className="Note h-entry">
      <Heading level="h1" className="p-name">
        {title(RichText.asText(doc.data.title))}
      </Heading>
      <RelativeDate
        date={doc.data.publish_date}
        timeProps={{ datetime: doc.data.publish_date, className: 'dt-published' }}
      />
      <div className="e-content">{renderSlices(doc.data.body)}</div>
    </article>
    <div className="footerWrap">
      <PageFooter />
    </div>
    <style jsx>{styles}</style>
  </Fragment>
)

ShowNotes.getInitialProps = async ({ req, query }) => {
  const doc = await getByUID(req, query.n)
  return { doc }
}

const styles = css`
  .Note, .footerWrap {
    width: 90%;
    max-width: 640px;
    margin: 0 auto;
  }

  .Note {
    padding-top: 5em;
    padding-bottom: 5em;
  }
`

export default ShowNotes
