const log = require('../log')(__filename)
const Web3 = require('web3')

const connect = (nodeAddress, contractAddress) => {
  var web3 = new Web3(nodeAddress)
  web3.eth.subscribe('logs', {
    address: contractAddress
  },
  function (error, result) {
    if (error) {
      log.error('Could not connect', error)
    } else {
      log.info('web3.eth.subscribe(logs) returns', result)
    }
  })
    .on('data', async function (logs) {
      log.info('Received logs', logs)
    })
    .on('error', async function (error) {
      log.warn('Subscription errored', error)
    })
}

module.exports = connect
