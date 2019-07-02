const URL = require('url')

module.exports = url => 
  URL.parse(url)
    .pathname
    .split('/')
    .filter(Boolean)
    .filter(p => p !== 'rss')
