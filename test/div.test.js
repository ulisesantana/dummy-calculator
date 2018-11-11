const assert = require('assert')
const {div} = require('../index');

describe('Divide', () => {
  it('Should divide numbers', () => {
    assert.strictEqual(div(5,5), 1);
  })

  it('Should divide only numbers', () => {
    assert.strictEqual(div('meh',2), 0)
    assert.strictEqual(div('meh','23 years'), 0)
  })
})