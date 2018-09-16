import React, { Fragment } from 'react'
import ReactSyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNight } from 'react-syntax-highlighter/styles/hljs'

const getProps = className => {
  const props = { style: tomorrowNight }

  if (className) {
    const string = className.slice('language-'.length)
    return Object.assign({}, props, {language: string})
  }

  return props
}

export default ({ children, className }) => (
  <ReactSyntaxHighlighter {...getProps(className)}>{children}</ReactSyntaxHighlighter>
)
