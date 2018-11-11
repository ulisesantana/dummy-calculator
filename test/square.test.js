const assert = require('assert')
const {square} = require('../index')

describe('Square', () => {
  it('Should calc the square of a number', () => {
    assert.strictEqual(square(2), 4);
  })

  it('Should return 0 if NaN is given', () => {
    assert.strictEqual(square('meh'), 0)
  })
})