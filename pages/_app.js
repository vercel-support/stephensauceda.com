import App, {Container} from 'next/app'
import React from 'react'
import { MDXProvider } from '@mdx-js/tag'

import Code from '../components/Code'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'
import Image from '../components/Image'
import Link from '../components/Link'
import InlineCode from '../components/InlineCode'
import BlockQuote from '../components/Blockquote'

class MyApp extends App {
  render () {
    const {Component, pageProps,} = this.props
    return (
      <Container>
        <MDXProvider components={{
          p: Paragraph,
          h1: Title,
          code: Code,
          inlineCode: InlineCode,
          img: Image,
          a: Link,
          blockquote: BlockQuote
        }}>
          <Component {...pageProps} />
        </MDXProvider>
      </Container>
    )
  }
}

export default MyApp