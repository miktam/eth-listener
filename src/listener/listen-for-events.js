const log = require('../log')(__filename)
const c = require('../constants')
const Web3 = require('web3')

const connect = (address) => {
  var web3 = new Web3(address)
  web3.eth.subscribe('logs', {
    address: c.DEPOSIT_ADDRESS,
    topics: [
      '0x000000000000000000000000267be1c1d684f78cb4f6a176c4911b741e4ffdc0'
    ]
  },
  function (error, result) {
    if (error) {
      log.error('Could not connect', error)
    } else {
      log.info('update about logs?')
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
