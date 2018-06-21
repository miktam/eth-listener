
const connect = require('../../src/listener/connect')
const listenForLogs = require('../../src/listener/listen-for-events')
const c = require('../../src/constants')

describe('Ethereum node connection', function () {
  it('should connect to pending transactions', function () {
    const GANACHE = 'ws://127.0.0.1:7545'
    connect(GANACHE)
  })

  it('should listen to logs from CryptoKitties Sales auction', function () {
    const INFURA_WS = 'wss://mainnet.infura.io/_ws'
    listenForLogs(INFURA_WS, c.CRYPTO_KITTIES_SALES_AUCTION)
  })
})
