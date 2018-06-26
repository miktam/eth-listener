
const getBlockNumber = require('../../src/polling/node-info')
require('should')

describe('Ethereum node information', function () {
  it('get latest block number', async function () {
    const blockNumberResponse = await getBlockNumber()
    const blockNumberDecimal = parseInt(blockNumberResponse.result, 16)
    blockNumberDecimal.should.not.equal(0)
  })
})
