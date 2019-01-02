const path = require('path')
const utils = require('./utils')
const entries = utils.getMultiFile(path.resolve(__dirname, '../src/pages/**/*.js'))
const templates = utils.getMultiFile(path.resolve(__dirname, '../src/pages/**/*.html'))

const generatePages = function () {
  const pages = {}

  if (entries && Array.isArray(entries)) {
    entries.forEach((entry, index) => {
      const dir = utils.getDirectoryName(entry)
      const template = templates[index]

      pages[dir] = {
        entry: entry,
        template: template,
        filename: dir + '.html'
      }
    })
  }

  return pages
}

module.exports = generatePages()