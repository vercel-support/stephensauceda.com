import React, { Fragment } from 'react'
import Link from './Link'
import Title from './Title'

const ArticlePreview = ({ title, slug }) => (
  <Fragment>
      <Link href={`/articles/${slug}`} color="black" style={{ textDecoration: 'none' }}>
        <Title tag="h3">{title}</Title>
      </Link>
  </Fragment>
)

export default ArticlePreview