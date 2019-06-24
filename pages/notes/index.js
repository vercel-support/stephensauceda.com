import React, { Fragment } from 'react'
import css from 'styled-jsx/css'
import { RichText } from 'prismic-reactjs'
import { getAllOfType } from '../../lib/api'
import Footer from '../../components/PageFooter'
import linkResolver from '../../lib/linkResolver';

const Notes = ({ notes }) => (
  <Fragment>
    <div className="pageWrapper">
      <div className="cardWrapper">
        {notes.map(n => (<h2><a href={linkResolver(n)}>{RichText.asText(n.data.title)}</a></h2>))}
      </div>
    </div>
    <div className="footerWrapper">
      <Footer />
    </div>
    <style jsx global>
      {globalStyles}
    </style>
    <style jsx>{styles}</style>
  </Fragment>
)

Notes.getInitialProps = async ({ req }) => {
  const notes = await getAllOfType(req, 'post')
  return { notes }
}

const styles = css`
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
`

const globalStyles = css.global`
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
`

export default Notes
