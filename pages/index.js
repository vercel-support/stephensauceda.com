import React, { Fragment } from 'react'
import Head from 'next/head'
import Link from '../components/Link'
import Paragraph from '../components/Paragraph'
import Footer from '../components/PageFooter'

const Index = () => (
  <Fragment>
    <Head>
      <title>Stephen Sauceda</title>
      <meta name="description" content="Builder of web things." />
    </Head>
    <div className="cardWrapper">
      <div className="h-card">
        <Paragraph>
          <strong>
            I'm <span className="p-name">Stephen Sauceda</span>.
          </strong>
        </Paragraph>
        <Paragraph className="p-note">
          I'm a dad, husband and builder of web things. Currently, I'm a{' '}
          <span className="p-job-title">Web Engineer</span> for Apartment Therapy Media
          where I work remotely on{' '}
          <Link href="https://www.apartmenttherapy.com">Apartment Therapy</Link> and{' '}
          <Link href="https://www.thekitchn.com">Kitchn</Link>.
        </Paragraph>
        <Paragraph>
          I can be found around the internet on{' '}
          <Link href="https://github.com/stephensauceda" rel="me" className="u-url">
            Github
          </Link>
          ,{' '}
          <Link
            href="https://www.instagram.com/stephensauceda/"
            rel="me"
            className="u-url"
          >
            Instagram
          </Link>{' '}
          and{' '}
          <Link href="https://twitter.com/stephensauceda" rel="me" className="u-url">
            Twitter
          </Link>{' '}
          or in real life somewhere in <span className="p-region">South Carolina</span>.
          Sometimes <Link href="/articles">I type thoughts into a computer</Link> as well.
        </Paragraph>
      </div>
    </div>
    <div className="footerWrapper">
      <Footer />
    </div>
    <style jsx global>{`
      #__next {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `}</style>
    <style jsx>{`
      .cardWrapper, .footerWrapper {
        max-width: 500px;
        width: 90%;
        padding: 1em;
      }
      .cardWrapper {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </Fragment>
)

export default Index
