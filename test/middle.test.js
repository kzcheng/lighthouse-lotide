// [Imports]
const assert = require('chai').assert;
const middle = require('../middle');

// [Testing Code]
// by @kzcheng
describe("#middle", () => {
  it(`given [1], return []`, () => {
    assert.deepEqual(middle([1]), []);
  });

  it(`given [1, 2], return []`, () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it(`given ["Hello", "Lighthouse", "Labs"], return ["Lighthouse"]`, () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);
  });

  it(`given [1,2,3,4], return [2,3]`, () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });

  it('given undefined return undefined', () => {
    assert.deepEqual(middle(), []);
  });
});