import React, { Fragment } from 'react'
import getYear from 'date-fns/get_year'
import articles from '../../data/articles.json'
import Title from '../../components/Title'
import ArticlePreview from '../../components/ArticlePreview'

function sortBy(a, b) {
  return b.publishDate - a.publishDate
}

function sortByYear(articles) {
  return [...new Set(articles.map(a => getYear(a.publishDate)))]
    .sort((a, b) => b - a)
    .map(year => ({
      [year]: articles.filter(a => getYear(a.publishDate) === year)
    }))
}

const Articles = () => (
  <Fragment>
    <div>
      {sortByYear(articles).map(collection =>
        Object.entries(collection).map(([key, value]) => (
          <section key={key}>
            <Title tag="h2">{key}</Title>
            <ul>
              {value.sort(sortBy).map(article => (
                <li key={article.slug}>
                  <ArticlePreview {...article} />
                </li>
              ))}
            </ul>
          </section>
        ))
      )}
    </div>
    <style jsx global>{`
      #__next {
        height: 100%;
      }
    `}</style>
    <style jsx>{`
      ul {
        list-style: none;
        padding: 0;
      }
      div {
        max-width: 768px;
        width: 90%;
        margin: 25vh auto 0 auto;
      }
      section {
        margin-bottom: 2em;
      }
      li {
        padding: 0 0.5em;
      }
    `}</style>
  </Fragment>
)

export default Articles
