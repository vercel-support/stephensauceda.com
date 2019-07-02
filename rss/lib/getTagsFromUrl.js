const URL = require('url')

module.exports = url => 
  URL.parse(url)
    .pathname
    .split('/')
    .filter(p => Boolean(p))
    .filter(p => p !== 'rss')
