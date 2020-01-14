// [Imports]
const assert = require('chai').assert;
const flatten = require('../flatten');

// [Testing Code]
describe(`#flatten`, () => {
  it(`flattening an array`, () => {
    assert.deepEqual(flatten([1, 2, 3, [4, 5], 6]), [1, 2, 3, 4, 5, 6]);
  });
});