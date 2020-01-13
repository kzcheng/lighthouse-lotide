// [Imports]
const assert = require('chai').assert;

// [Testing Code]
describe("#mochai", () => {
  it("deep equal works", () => {
    assert.deepEqual([1, 2, 3], [1, 2, 3]);
  });
});
