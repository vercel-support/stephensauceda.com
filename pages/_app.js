import App, {Container} from 'next/app'
import Router from 'next/router'
import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import withGA from 'next-ga'

import Code from '../components/Code'
import Title from '../components/Title'
import Paragraph from '../components/Paragraph'
import Image from '../components/Image'
import Link from '../components/Link'
import InlineCode from '../components/InlineCode'
import BlockQuote from '../components/Blockquote'
import List from '../components/List'
import ListItem from '../components/ListItem'

class MyApp extends App {
  render () {
    const {Component, pageProps,} = this.props
    return (
      <Container>
        <MDXProvider components={{
          p: Paragraph,
          h1: Title,
          h2: props => <Title tag="h2" {...props} />,
          h3: props => <Title tag="h3" {...props} />,
          h4: props => <Title tag="h4" {...props} />,
          h5: props => <Title tag="h5" {...props} />,
          code: Code,
          inlineCode: InlineCode,
          img: Image,
          a: Link,
          blockquote: BlockQuote,
          ul: props => <List tag="ul" {...props} />,
          ol: props => <List tag="ol" {...props} />,
          li: ListItem
        }}>
          <Component {...pageProps} />
        </MDXProvider>
      </Container>
    )
  }
}

export default withGA('UA-15647519-1', Router)(MyApp)