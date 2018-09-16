import React, { Fragment } from 'react'
import articles from '../../data/articles.json'
import Timestamp from '../../components/Timestamp'
import Paragraph from '../../components/Paragraph'

function sortBy(a, b) {
  return b.publishDate - a.publishDate
}

function renderArticlePreview({ title, slug, publishDate }) {
  return (
    <li key={slug}>
      <a href={`/articles/${slug}`}>
        <h1>{title}</h1>
      </a>
      <Paragraph>
        <small>
          <Timestamp>{publishDate}</Timestamp>
        </small>
      </Paragraph>
      <style jsx>{`
        h1 { font-size: 1.5em; }
        a { color: black; }
      `}</style>
    </li>
  )
}

const Articles = () => (
  <Fragment>
    <ul>{articles.sort(sortBy).map(renderArticlePreview)}</ul>
    <style jsx>{`
      ul { list-style: none; }
    `}</style>
  </Fragment>
)

export default Articles