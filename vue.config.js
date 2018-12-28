const config = require('./config')
const options = process.env.NODE_ENV === 'production'
  ? config.build : config.dev

module.exports = options