const bunyan = require('bunyan')
module.exports = (filename) => bunyan.createLogger({ name: require('path').basename(filename) })
