// [Imports]
const assert = require('chai').assert;
const tail = require('../tail');

// [Testing Code]
describe("#head", () => {
  // by @MatthewChan
  it(`given ["Hello", "Lighthouse", "Labs"], return ["Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  // by @MatthewChan
  it(`given [1,2,3,4], return [2,3,4]`, () => {
    assert.deepEqual(tail([1,2,3,4]), [2,3,4]);
  });

  it('given undefined return undefined', () => {
    assert.deepEqual(tail(), undefined);
  });
});

