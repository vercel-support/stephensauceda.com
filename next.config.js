const emoji = require('remark-emoji')
const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/,
  options: {
    mdPlugins: [emoji]
  }
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
})