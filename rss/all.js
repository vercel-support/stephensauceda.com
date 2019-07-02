const RSS = require('rss')
const ms = require('ms')
const baseFeed = require('./lib/feed')

let cache = null

module.exports = (req, res) => {
  if (!cache || Date.now() - cache.lastUpdated > ms('2h')) {
    // fetch posts
    // map over posts and convert to html
    // assign to feed
    // add to cache
    cache = 'fetch data and return'
  }
  res.send(cache)
}