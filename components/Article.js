import React, { Fragment } from 'react'
import Head from 'next/head'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'
import Timestamp from './Timestamp'
import Footer from '../components/PageFooter'

const Article = ({ title, slug, imageUrl, publishDate }) => ({ children }) => (
  <Fragment>
    <article>
      <Head>
        <title>{title} - Stephen Sauceda</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={`https://stephensauceda.com/a/${slug}`} />
        {imageUrl && (
          <meta property="og:image" content={imageUrl} />
        )}
        <meta name="twitter:creator" content="@stephensauceda" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Title>{title}</Title>
      <Paragraph>
        <small>
          <Timestamp>{publishDate}</Timestamp>
        </small>
      </Paragraph>
      {children}
    </article>
    <div>
      <Footer/>
    </div>
    <style jsx>{`
      article {
        max-width: 640px;
        width: 90%;
        padding: 0 1em 2em 1em;
        margin: 25vh auto 0 auto;
      }
       { max-width: 640px; margin: 0 auto; width: 90%; }
    `}</style>
  </Fragment>
)

export default Article
