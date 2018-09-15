import React, { Fragment } from 'react'
import Head from 'next/head'

const Index = () => (
  <Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div>
      <p>
        <strong>I'm Stephen Sauceda.</strong>
      </p>
      <p>
        I'm a dad, husband and builder of web things. Currently, I'm a Web Engineer for
        Apartment Therapy Media where I work remotely on{' '}
        <a href="https://www.apartmenttherapy.com">Apartment Therapy</a> and{' '}
        <a href="https://www.thekitchn.com">Kitchn</a>.
      </p>
      <p>
        I can be found around the internet on <a href="https://github.com/stephensauceda">Github</a>, <a href="https://www.instagram.com/stephensauceda/">Instagram</a> and <a href="https://twitter.com/stephensauceda">Twitter</a> or in real life somewhere in South Carolina.
      </p>
    </div>
    <style jsx global>{`
      html,
      body,
      #__next {
        height: 100%;
      }
      body {
        font-family: Menlo, monospace;
      }
      #__next {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
    <style jsx>{`
      div {
        padding: 1em;
      }
      p {
        max-width: 500px;
        width: 90%;
        line-height: 1.4;
      }

      a {
        color: #e67e22;
      }

      a:visited, a:hover {
        color: #d35400;
      }
    `}</style>
  </Fragment>
)

export default Index
