import React, { Fragment } from 'react'
import Head from 'next/head'
import Footer from '../components/PageFooter'

const Index = () => (
  <Fragment>
    <Head>
      <title>Stephen Sauceda</title>
      <meta name="description" content="Builder of web things." />
    </Head>
    <div className="pageWrapper">
      <div className="cardWrapper">
        <div className="h-card">
          <p>
            <strong>
              I'm <span className="p-name">Stephen Sauceda</span>.
            </strong>
          </p>
          <p className="p-note">
            I'm a dad, husband and builder of web things. Currently, I'm a{' '}
            <span className="p-job-title">Web Engineer</span> for Apartment Therapy Media
            where I work remotely on{' '}
            <a href="https://www.apartmenttherapy.com">Apartment Therapy</a> and{' '}
            <a href="https://www.thekitchn.com">Kitchn</a>.
          </p>
          <p>
            I can be found around the internet on{' '}
            <a href="https://github.com/stephensauceda" rel="me" className="u-url">
              Github
            </a>
            ,{' '}
            <a
              href="https://www.instagram.com/stephensauceda/"
              rel="me"
              className="u-url"
            >
              Instagram
            </a>{' '}
            and{' '}
            <a href="https://twitter.com/stephensauceda" rel="me" className="u-url">
              Twitter
            </a>{' '}
            or in real life somewhere in <span className="p-region">South Carolina</span>.
            {/* Sometimes <Link href="/articles">I type thoughts into a computer</Link> as well. */}
          </p>
        </div>
      </div>
    </div>
    <div className="footerWrapper">
      <Footer />
    </div>
    <style jsx>{`
      .pageWrapper {
        height: calc(100vh - 5em);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .cardWrapper,
      .footerWrapper {
        max-width: 500px;
        width: 90%;
        padding: 1em;
        margin: 0 auto;
      }
      .cardWrapper {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      p {
        font-size: 15px;
        line-height: 1.6;
        font-family: 'Fira Sans', sans-serif;
      }
      a {
        color: #e67e22;
      }

      a:visited,
      a:hover {
        color: #d35400;
      }
    `}</style>
  </Fragment>
)

export default Index
