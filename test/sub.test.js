const assert = require('assert');
const {sub} = require('../index');

describe('Substract', () => {
  it('Should substract numbers', () => {
    assert.strictEqual(sub(4,2), 2);
    assert.strictEqual(sub(4,4), 0);
    assert.strictEqual(sub(4,5), -1);
    assert.strictEqual(sub(1,2,3,4), -8);
  })

  it('Should substract only numbers', () => {
    assert.strictEqual(sub('meh',2,3), -1)
    assert.strictEqual(sub('meh','23 years',3), 3)
  })
})