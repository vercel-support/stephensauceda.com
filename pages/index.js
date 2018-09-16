import React, { Fragment } from 'react'
import Head from 'next/head'
import Link from '../components/Link'
import Paragraph from '../components/Paragraph'

const Index = () => (
  <Fragment>
    <Head>
      <title>Stephen Sauceda</title>
      <meta name="description" content="Builder of web things." />
    </Head>
    <div className="h-card">
      <Paragraph>
        <strong>I'm <span className="p-name">Stephen Sauceda</span>.</strong>
      </Paragraph>
      <Paragraph className="p-note">
        I'm a dad, husband and builder of web things. Currently, I'm a <span className="p-job-title">Web Engineer</span> for
        Apartment Therapy Media where I work remotely on{' '}
        <Link href="https://www.apartmenttherapy.com">Apartment Therapy</Link> and{' '}
        <Link href="https://www.thekitchn.com">Kitchn</Link>.
      </Paragraph>
      <Paragraph>
        I can be found around the internet on <Link href="https://github.com/stephensauceda" rel="me" className="u-url">Github</Link>, <Link href="https://www.instagram.com/stephensauceda/" rel="me" className="u-url">Instagram</Link> and <Link href="https://twitter.com/stephensauceda" rel="me" className="u-url">Twitter</Link> or in real life somewhere in <span className="p-region">South Carolina</span>.
      </Paragraph>
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
        max-width: 500px;
        width: 90%
      }
    `}</style>
  </Fragment>
)

export default Index
