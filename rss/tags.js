const { parse } = require('url')

const getTagsFromUrl = url =>
  url.pathname
    .split('/')
    .filter(p => Boolean(p)).
    filter(p => p !== 'rss' && p !== 'tags')

module.exports = (req, res) => {
  res.json({
    tags: getTagsFromUrl(parse(req.url))
  })
}