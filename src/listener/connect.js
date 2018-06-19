const log = require('../log')(__filename)

//const INFURA_WS = 'wss://mainnet.infura.io/_ws'
const GANACHE = 'ws://127.0.0.1:7545'

var Web3 = require('web3')
var web3 = new Web3(GANACHE)

const connect = () => {
  web3.eth.subscribe('pendingTransactions',
    function (error, result) {
      if (error) {
        log.error('Could not connect', error)
      }
    })
    .on('data', async function (transaction) {
      log.info('Received a pending transaction', transaction)
    })
}

module.exports = connect
