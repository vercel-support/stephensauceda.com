const DOM = require('prismic-dom')

function convertPostToHTML(post) {
  return {
    title: DOM.RichText.asText(post.data.title),
    url: `https://stephensauceda.com/notes/${post.uid}`,
    guid: post.uid,
    author: 'Stephen Sauceda',
    date: post.first_publication_date,
    categories: post.tags,
    description: formatSlices(post.data.body)
  }
}

function formatSlices(slices) {
  return slices.map(slice => {
    switch (slice.slice_type) {
      case 'text':
        return DOM.RichText.asHtml(slice.primary.text)
      case 'quote':
        return `<blockquote>${DOM.RichText.asHtml(slice.primary.quote)}</blockquote>`
      case 'image':
        return `
          <figure>
            <img src=${slice.primary.image.url} alt=${slice.primary.image.alt} />
            <figcaption>
              ${DOM.RichText.asHtml(slice.primary.caption)}
            </figcaption>
          </figure>
        `
      case 'embed':
        return slice.primary.embed.html
      case 'gist':
        return slice.primary.gist[0].text
      default:
        return null
    }
  }).join('')
}

module.exports = convertPostToHTML