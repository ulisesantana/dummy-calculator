const assert = require('assert')
const {mul} = require('../index');

describe('Mpultiply', () => {
  it('Should multiply numbers', () => {
    assert.strictEqual(mul(1,2,3,4), 24);
  });

  it('Should multiply only numbers', () => {
    assert.strictEqual(mul('meh',2,3), 6)
    assert.strictEqual(mul('meh','23 years',3), 3)
  });
})