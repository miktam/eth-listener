const log = require('../log')(__filename)
const connect = () => {
  log.info('Connect to node')
}

module.exports = connect
