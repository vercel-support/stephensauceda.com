const RSS = require('rss')
const baseFeed = require('./lib/feed')
const convertPostToFeedItem = require('./lib/convertPostToFeedItem')
const getTagsFromUrl = require('./lib/getTagsFromUrl')
const { getPosts } = require('./lib/api')

module.exports = async (req, res) => {
  const searchTags = getTagsFromUrl(req.url)
  const posts = await getPosts(req, searchTags, {
    orderings: '[document.first_publication_date desc]',
    pageSize: 10
  })
  const newFeed = new RSS(baseFeed)
  const formattedPosts = posts.map(convertPostToFeedItem)
  
  formattedPosts.forEach(p => newFeed.item(p))

  res.setHeader('content-type', 'text/xml')
  res.send(newFeed.xml())
}