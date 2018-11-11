const assert = require('assert')
const {add} = require('../index');

describe('Add', () => {
  it('Should add numbers', () => {
    assert.strictEqual(add(1,2,3,4), 10);
  })

  it('Should add only numbers', () => {
    assert.strictEqual(add('meh',2,3), 5)
    assert.strictEqual(add('meh','23 years',3), 3)
  })
})