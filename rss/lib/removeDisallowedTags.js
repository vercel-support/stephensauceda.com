const { DISALLOWED_TAGS } = require('./constants')

module.exports = tags =>
  tags.filter(t => !DISALLOWED_TAGS.includes(t))