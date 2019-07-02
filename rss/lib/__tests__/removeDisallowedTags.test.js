const removeDisallowedTags = require('../removeDisallowedTags')

test('should only remove disallowed tags from the user-facing tags', () => {
  const tags = ['javascript', 'remote work', 'devto']
  const filteredTags = removeDisallowedTags(tags)

  expect(filteredTags).not.toContain('devto')
  expect(filteredTags).toContain('remote work')
  expect(filteredTags).toContain('javascript')
})