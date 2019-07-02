const getTagsFromUrl = require('../getTagsFromUrl')

test('should extract tags from a url', () => {
  const url = 'https://stephensauceda.com/rss/javascript/react'
  const tags = getTagsFromUrl(url)

  expect(tags).not.toContain('rss')
  expect(tags).toEqual(['javascript', 'react'])
})