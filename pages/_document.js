import { Fragment } from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Fragment>
        <html>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta httpEquiv="Content-Language" content="en" />
            <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
            <link
              rel="stylesheet"
              href="https://unpkg.com/normalize.css@8.0.0/normalize.css"
            />
            <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,700&display=swap" rel="stylesheet" />
          </Head>
          <body>
            <Main />
            <NextScript />
            <script dangerouslySetInnerHTML={{ __html: `
              window.prismic = {
                endpoint: 'https://stephensauceda.cdn.prismic.io/api/v2'
              }`}} 
            />
            <script type="text/javascript" src="https://static.cdn.prismic.io/prismic.min.js" />
          </body>
        </html>
      </Fragment>
    )
  }
}
