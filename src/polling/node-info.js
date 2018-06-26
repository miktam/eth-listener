const log = require('../log')(__filename)
const c = require('../constants')
const rp = require('request-promise-native')

const getBlockNumber = async () => {
  var options = {
    uri: `${c.REST_API_INFURA}eth_blockNumber`,
    qs: {
      access_token: c.INFURA_KEY
    },
    json: true // Automatically parses the JSON string in the response
  }

  return rp(options)
    .then(info => {
      log.debug('Got response', info)
      return info
    })
    .catch(err => {
      log.error('Could not fetch', err)
    })
}

module.exports = getBlockNumber
