const URL = require('url')
const RSS = require('rss')
const baseFeed = require('./lib/feed')
const convertPostToHTML = require('./lib/convertPostToHTML')
const { getPosts } = require('./lib/api')

function getTagsFromUrl(url) {
  return URL.parse(url)
    .pathname
    .split('/')
    .filter(p => Boolean(p)).
    filter(p => p !== 'rss')
}

module.exports = async (req, res) => {
  const tags = getTagsFromUrl(req.url)
  const posts = await getPosts(req, tags, {
    orderings: '[document.first_publication_date desc]',
    pageSize: 10
  })

  // create new feed instance
  const newFeed = new RSS(baseFeed)
  // convert posts to html
  const formattedPosts = posts.map(post => convertPostToHTML(post))
  // add formatted posts to feed
  formattedPosts.forEach(p => newFeed.item(p))
  // return feed.xml()
  res.setHeader('content-type', 'text/xml')
  res.send(newFeed.xml())
}