const log = require('../log')(__filename)
const Web3 = require('web3')

const connect = (address) => {
  const web3 = new Web3(address)
  web3.eth.subscribe('pendingTransactions',
    function (error, result) {
      if (error) {
        log.error('Could not connect', error)
      }
    })
    .on('data', async function (transaction) {
      log.info('Received a pending transaction', transaction)
      const transactionInfo = await web3.eth.getTransaction(transaction)
      log.info('Transaction Info', transactionInfo)
    })
    .on('error', async function (error) {
      log.warn('Subscription errored', error)
    })
}

module.exports = connect
